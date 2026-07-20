# 视频分析方法与测量数据

## 概述

本文档记录了从原始视频中提取动画参数的完整逆向工程流程。

## 源视频信息

- **路径**: `/Users/unknown_liang/Movies/2026-07-20 14-26-27.mov`
- **分辨率**: 1920x1080
- **帧率**: 60fps
- **总时长**: 20.333 秒
- **总帧数**: 1219 帧
- **视频内容**: 音乐播放卡片的展开/收起动画

## 分析工具链

### 1. 视频属性提取

```bash
ffprobe -v quiet -print_format json -show_format -show_streams \
  /Users/unknown_liang/Movies/2026-07-20\ 14-26-27.mov
```

**输出关键信息:**
- `codec_name: h264`
- `width: 1920, height: 1080`
- `r_frame_rate: 60/1`
- `duration: 20.333000`

### 2. 帧提取

```bash
mkdir -p /tmp/animation_analysis/frames
ffmpeg -i /Users/unknown_liang/Movies/2026-07-20\ 14-26-27.mov \
  -vf "fps=60" \
  /tmp/animation_analysis/frames/frame_%04d.png
```

**结果:**
- 提取 1219 个 PNG 帧
- 文件命名: `frame_0001.png` 至 `frame_1219.png`
- 单帧大小: 400KB - 960KB (取决于内容复杂度)

### 3. 可视化总览 (Contact Sheet)

```python
import cv2
import numpy as np
from pathlib import Path

frames_dir = Path('/tmp/animation_analysis/frames')
frame_files = sorted(frames_dir.glob('frame_*.png'))

# 每 20 帧采样一个 (1219 / 20 ≈ 60 帧)
sample_rate = 20
sampled_frames = frame_files[::sample_rate]

# 生成 8x5 网格 (40 个缩略图)
grid_cols, grid_rows = 8, 5
thumb_width = 320

thumbnails = []
for i, frame_path in enumerate(sampled_frames[:40]):
    img = cv2.imread(str(frame_path))
    h, w = img.shape[:2]
    thumb_height = int(thumb_width * h / w)
    thumb = cv2.resize(img, (thumb_width, thumb_height))
    
    # 添加帧号和时间戳
    frame_num = int(frame_path.stem.split('_')[1])
    timestamp = frame_num / 60.0
    cv2.putText(thumb, f"#{frame_num} | {timestamp:.2f}s",
                (10, 30), cv2.FONT_HERSHEY_SIMPLEX, 0.6, (255, 255, 0), 2)
    thumbnails.append(thumb)

# 拼接成网格
contact_sheet = cv2.vconcat([
    cv2.hconcat(thumbnails[i*grid_cols:(i+1)*grid_cols])
    for i in range(grid_rows)
])

cv2.imwrite('/tmp/animation_analysis/contact_sheet.png', contact_sheet)
```

**输出**: `/tmp/animation_analysis/contact_sheet.png` (8x5 网格缩略图)

## 测量方法

### 方法 1: 边缘检测 (Canny) - 失败

**假设**: 卡片通过垂直位移动画

```python
def measure_card_position(frame_num):
    frame_path = frames_dir / f"frame_{frame_num:04d}.png"
    img = cv2.imread(str(frame_path))
    h, w = img.shape[:2]
    
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    edges = cv2.Canny(gray, 50, 150)
    
    # 检测底部 400px 区域的边缘
    bottom_region = edges[h-400:h, :]
    horizontal_projection = np.sum(bottom_region, axis=1)
    
    if np.max(horizontal_projection) > 0:
        card_top_relative = np.argmax(horizontal_projection)
        card_top_absolute = (h - 400) + card_top_relative
        return card_top_absolute
    return None
```

**结果:**
- 卡片 Y 坐标始终在 1075-1076px (仅 1px 波动)
- **结论**: 卡片没有垂直位移,动画不是位置变化

### 方法 2: 内容占比分析 (Content Ratio) - 成功

**假设修正**: 卡片通过透明度动画

```python
def analyze_card_content_region(frame_num):
    frame_path = frames_dir / f"frame_{frame_num:04d}.png"
    img = cv2.imread(str(frame_path))
    h, w = img.shape[:2]
    
    # 裁剪卡片区域 (底部 300px, 中心 600px 宽)
    card_region = img[h-300:h, w//2-300:w//2+300]
    
    gray = cv2.cvtColor(card_region, cv2.COLOR_BGR2GRAY)
    
    # 计算暗像素占比 (内容像素 < 200 灰度值)
    content_pixels = np.sum(gray < 200)
    total_pixels = gray.size
    content_ratio = content_pixels / total_pixels
    
    # 计算平均亮度
    avg_brightness = np.mean(gray)
    
    return {
        'frame': frame_num,
        'time': frame_num / 60.0,
        'content_ratio': content_ratio,
        'avg_brightness': avg_brightness
    }
```

**关键发现:**

| 阶段 | 帧号 | 时间 | Content Ratio | 亮度 | 说明 |
|------|------|------|---------------|------|------|
| 初始 | 1 | 0.02s | 0.905 | 115.1 | 完全可见 |
| 淡出开始 | 131 | 2.18s | 0.892 | 118.3 | 第一行开始淡出 |
| 淡出中 | 301 | 5.02s | 0.033 | 246.3 | 完全透明 |
| 静止 | 1000 | 16.67s | 0.030 | 248.1 | 保持透明 |
| 淡入开始 | 1021 | 17.02s | 0.033 | 248.6 | 背景开始淡入 |
| 淡入完成 | 1111 | 18.52s | 0.972 | 68.8 | 完全可见 |

### 方法 3: 锐度检测 (Laplacian Variance)

用于检测模糊效果:

```python
def measure_sharpness(frame_num):
    frame_path = frames_dir / f"frame_{frame_num:04d}.png"
    img = cv2.imread(str(frame_path))
    h, w = img.shape[:2]
    
    card_region = img[h-400:h, w//2-300:w//2+300]
    gray = cv2.cvtColor(card_region, cv2.COLOR_BGR2GRAY)
    
    # Laplacian 方差 (值越大 = 越清晰)
    laplacian_var = cv2.Laplacian(gray, cv2.CV_64F).var()
    
    return laplacian_var
```

**结果:**
- 静态状态: 锐度 ~640
- 淡出过程: 锐度上升至 ~2096
- 淡入过程: 锐度从 ~464 上升至 ~1189

**解释**: 锐度增加是因为内容淡出后,背景纹理变得更清晰 (非模糊效果)

## 密集采样结果

### 展开动画 (0-5.8s)

每 5 帧采样 (83ms 间隔):

| 时间 | Content Ratio | 变化 | 阶段 |
|------|---------------|------|------|
| 0.02s | 0.905 | - | 初始状态 |
| 2.02s | 0.905 | 0 | 静态保持 |
| 2.10s | 0.879 | ↓ 0.026 | 第一行淡出开始 |
| 2.18s | 0.870 | ↓ 0.009 | 第一行淡出完成 |
| 2.27s | 0.869 | - | 静态保持 |
| 3.77s | 0.869 | 0 | 静态保持 |
| 3.85s | 0.755 | ↓ 0.114 | 第二行淡出开始 |
| 3.93s | 0.620 | ↓ 0.135 | 第二行淡出加速 |
| 4.02s | 0.593 | ↓ 0.027 | 第二行淡出完成 |
| 4.35s | 0.593 | 0 | 静态保持 |
| 4.52s | 0.436 | ↓ 0.157 | 背景淡出开始 |
| 4.60s | 0.320 | ↓ 0.116 | 背景淡出加速 |
| 4.93s | 0.127 | ↓ 0.193 | 背景淡出加速 |
| 5.02s | 0.025 | ↓ 0.102 | 完全透明 |

### 收起动画 (16.7-19.2s)

每 5 帧采样:

| 时间 | Content Ratio | 变化 | 阶段 |
|------|---------------|------|------|
| 16.67s | 0.028 | - | 透明状态 |
| 16.83s | 0.030 | 0 | 静态透明 |
| 16.92s | 0.218 | ↑ 0.188 | 背景快速淡入 |
| 17.00s | 0.304 | ↑ 0.086 | 背景淡入完成 |
| 17.08s | 0.314 | ↑ 0.010 | 静态半透明 |
| 17.92s | 0.314 | 0 | 静态半透明 |
| 18.00s | 0.364 | ↑ 0.050 | 内容淡入开始 |
| 18.08s | 0.593 | ↑ 0.229 | 第一行淡入 |
| 18.17s | 0.672 | ↑ 0.079 | 第二行淡入 |
| 18.33s | 0.849 | ↑ 0.177 | 第三行淡入 |
| 18.42s | 0.970 | ↑ 0.121 | 内容淡入完成 |
| 18.50s | 0.966 | - | 完全可见 |

## 关键时间点提取

根据 Content Ratio 突变 (变化 > 0.05):

### 展开动画

| 时间点 | 动作 | Content Ratio 变化 |
|--------|------|-------------------|
| 2.10s | 第一行淡出启动 | 0.905 → 0.879 |
| 3.85s | 第二行淡出启动 | 0.869 → 0.755 |
| 4.52s | 背景淡出启动 | 0.593 → 0.436 |
| 5.02s | 完全透明 | 0.127 → 0.025 |

### 收起动画

| 时间点 | 动作 | Content Ratio 变化 |
|--------|------|-------------------|
| 16.92s | 背景淡入启动 | 0.030 → 0.218 |
| 17.00s | 背景淡入完成 | 0.218 → 0.304 |
| 18.08s | 内容淡入加速 | 0.364 → 0.593 |
| 18.42s | 内容淡入完成 | 0.849 → 0.970 |

## 测量精度与误差

### 精度来源

- ✅ **帧率**: 60fps = 16.67ms 时间分辨率
- ✅ **采样间隔**: 5 帧 = 83ms 间隔
- ✅ **像素精度**: 内容占比精度 ±0.001 (0.1%)

### 误差来源

- ⚠️ **采样间隔**: 真实变化可能在两个采样点之间 (±83ms)
- ⚠️ **阈值敏感**: 暗像素阈值 (200) 影响内容占比计算
- ⚠️ **视频编码**: H264 有损压缩可能引入细微误差

### 最终精度

**时间精度**: ±5 帧 = ±83ms

## 分析脚本完整代码

完整分析脚本保存在:
`/tmp/animation_analysis/analysis_scripts/`

- `extract_frames.sh` - 帧提取脚本
- `generate_contact_sheet.py` - 生成总览网格
- `measure_content_ratio.py` - 内容占比测量
- `measure_sharpness.py` - 锐度检测
- `plot_curves.py` - 数据可视化

## 数据导出

测量数据导出为 CSV 格式:

```csv
frame,time,content_ratio,brightness,sharpness
1,0.017,0.905,115.1,640.2
131,2.183,0.892,118.3,685.7
301,5.017,0.033,246.3,2096.4
...
```

保存位置: `/tmp/animation_analysis/measurement_data.csv`

## 总结

通过三种测量方法的迭代:
1. **边缘检测** → 发现无位移
2. **内容占比** → 确认透明度动画
3. **锐度检测** → 排除模糊效果

最终精确定位了 8 个关键时间点和 3 个不同的缓动阶段,为 GSAP 实现提供了准确的参数基础。
