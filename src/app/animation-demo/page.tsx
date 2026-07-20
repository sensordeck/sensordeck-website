import AnimatedCard from '@/components/website/AnimatedCard';

export default function AnimationDemoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-indigo-700 flex items-center justify-center">
      <div className="text-center text-white">
        <h1 className="text-4xl font-bold mb-4">卡片动画演示</h1>
        <p className="text-lg opacity-80 mb-8">
          基于视频逆向工程的精确时序动画
        </p>

        <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-md rounded-xl p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">动画参数</h2>
          <div className="text-left text-sm space-y-2 opacity-90">
            <p><strong>展开 (淡出):</strong> 2.0s 开始 → 5.0s 完全透明</p>
            <p><strong>收起 (淡入):</strong> 0.1s 背景 → 1.0s 延迟 → 1.4s 内容逐行淡入</p>
            <p><strong>缓动函数:</strong> power2.out (淡出) / power2.in (快速淡入)</p>
            <p><strong>无位移:</strong> 卡片固定在底部中央,纯透明度动画</p>
          </div>
        </div>

        <div className="text-xs opacity-60">
          点击左上角按钮控制动画播放
        </div>
      </div>

      <AnimatedCard
        lines={[
          '🎵 正在播放',
          'Bohemian Rhapsody',
          'Queen • A Night at the Opera'
        ]}
      />
    </div>
  );
}
