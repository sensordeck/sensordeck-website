import { chromium } from 'playwright';
import { writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';

const TARGET_URL = 'https://www.zendesk.hk/';
const OUTPUT_DIR = './docs/reference-motion';
const SCREENSHOTS_DIR = './docs/design-references';

// 确保输出目录存在
mkdirSync(OUTPUT_DIR, { recursive: true });
mkdirSync(SCREENSHOTS_DIR, { recursive: true });

async function analyzeZendeskMotion() {
  console.log('启动浏览器...');
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36'
  });
  const page = await context.newPage();

  console.log(`访问 ${TARGET_URL}...`);
  await page.goto(TARGET_URL, { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000); // 等待动画加载

  const analysis = {
    url: TARGET_URL,
    timestamp: new Date().toISOString(),
    viewport: { width: 1440, height: 900 },
    sections: []
  };

  console.log('截取全页面截图...');
  await page.screenshot({
    path: join(SCREENSHOTS_DIR, 'zendesk-full-desktop.png'),
    fullPage: true
  });

  console.log('提取动效数据...');

  // 1. 提取所有 CSS 动画和过渡
  const cssAnimations = await page.evaluate(() => {
    const animations = [];
    const transitions = [];
    const keyframes = [];

    // 获取所有样式表
    try {
      for (const sheet of document.styleSheets) {
        try {
          const rules = sheet.cssRules || sheet.rules;
          if (!rules) continue;

          for (const rule of rules) {
            // 提取 @keyframes
            if (rule.type === CSSRule.KEYFRAMES_RULE) {
              const keyframeRule = rule;
              keyframes.push({
                name: keyframeRule.name,
                rules: Array.from(keyframeRule.cssRules).map(kr => ({
                  keyText: kr.keyText,
                  style: kr.style.cssText
                }))
              });
            }

            // 提取带有 animation 或 transition 的规则
            if (rule.style) {
              const animation = rule.style.animation || rule.style.animationName;
              const transition = rule.style.transition;

              if (animation && animation !== 'none') {
                animations.push({
                  selector: rule.selectorText,
                  animation: rule.style.animation,
                  animationName: rule.style.animationName,
                  animationDuration: rule.style.animationDuration,
                  animationTimingFunction: rule.style.animationTimingFunction,
                  animationDelay: rule.style.animationDelay,
                  animationIterationCount: rule.style.animationIterationCount,
                  animationDirection: rule.style.animationDirection,
                  animationFillMode: rule.style.animationFillMode
                });
              }

              if (transition && transition !== 'none') {
                transitions.push({
                  selector: rule.selectorText,
                  transition: rule.style.transition,
                  transitionProperty: rule.style.transitionProperty,
                  transitionDuration: rule.style.transitionDuration,
                  transitionTimingFunction: rule.style.transitionTimingFunction,
                  transitionDelay: rule.style.transitionDelay
                });
              }
            }
          }
        } catch {
          // 跨域样式表访问限制
          console.warn('无法访问样式表:', sheet.href);
        }
      }
    } catch (e) {
      console.error('提取 CSS 动画失败:', e);
    }

    return { animations, transitions, keyframes };
  });

  // 2. 提取所有可见元素的计算样式和动画属性
  const elements = await page.evaluate(() => {
    const elementsData = [];
    const allElements = document.querySelectorAll('*');

    for (const el of allElements) {
      const rect = el.getBoundingClientRect();

      // 只处理可见元素
      if (rect.width === 0 || rect.height === 0) continue;

      const computedStyle = window.getComputedStyle(el);
      const hasAnimation = computedStyle.animationName !== 'none';
      const hasTransition = computedStyle.transition !== 'all 0s ease 0s' &&
                            computedStyle.transitionProperty !== 'none';
      const hasTransform = computedStyle.transform !== 'none';
      const isFixed = computedStyle.position === 'fixed';
      const isSticky = computedStyle.position === 'sticky';

      if (hasAnimation || hasTransition || hasTransform || isFixed || isSticky) {
        elementsData.push({
          tag: el.tagName.toLowerCase(),
          classes: Array.from(el.classList),
          id: el.id,
          position: {
            top: rect.top,
            left: rect.left,
            width: rect.width,
            height: rect.height
          },
          styles: {
            position: computedStyle.position,
            display: computedStyle.display,
            zIndex: computedStyle.zIndex,
            opacity: computedStyle.opacity,
            transform: computedStyle.transform,
            transition: computedStyle.transition,
            transitionProperty: computedStyle.transitionProperty,
            transitionDuration: computedStyle.transitionDuration,
            transitionTimingFunction: computedStyle.transitionTimingFunction,
            transitionDelay: computedStyle.transitionDelay,
            animation: computedStyle.animation,
            animationName: computedStyle.animationName,
            animationDuration: computedStyle.animationDuration,
            animationTimingFunction: computedStyle.animationTimingFunction,
            animationDelay: computedStyle.animationDelay,
            animationIterationCount: computedStyle.animationIterationCount
          }
        });
      }
    }

    return elementsData;
  });

  // 3. 检测滚动行为
  console.log('检测滚动行为...');
  const scrollBehaviors = [];

  // 滚动到页面底部，记录变化
  const scrollHeight = await page.evaluate(() => document.body.scrollHeight);
  const viewportHeight = 900;
  const scrollSteps = Math.ceil(scrollHeight / (viewportHeight / 2));

  for (let i = 0; i <= scrollSteps && i <= 10; i++) {
    const scrollY = i * (viewportHeight / 2);
    await page.evaluate((y) => window.scrollTo(0, y), scrollY);
    await page.waitForTimeout(300);

    const headerState = await page.evaluate(() => {
      const header = document.querySelector('header, nav, [role="banner"]');
      if (!header) return null;

      const styles = window.getComputedStyle(header);
      return {
        position: styles.position,
        top: styles.top,
        backgroundColor: styles.backgroundColor,
        boxShadow: styles.boxShadow,
        height: header.offsetHeight,
        opacity: styles.opacity,
        transform: styles.transform
      };
    });

    if (headerState) {
      scrollBehaviors.push({
        scrollY,
        headerState
      });
    }
  }

  // 4. 检测交互元素（悬停、点击）
  console.log('检测交互元素...');
  const interactiveElements = await page.evaluate(() => {
    const elements = [];
    const buttons = document.querySelectorAll('button, a, [role="button"]');

    for (const el of buttons) {
      const rect = el.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) continue;

      const styles = window.getComputedStyle(el);
      elements.push({
        tag: el.tagName.toLowerCase(),
        text: el.textContent?.trim().substring(0, 50),
        classes: Array.from(el.classList),
        styles: {
          cursor: styles.cursor,
          transition: styles.transition,
          transform: styles.transform
        }
      });
    }

    return elements.slice(0, 50); // 限制数量
  });

  // 5. 检测平滑滚动库
  const smoothScrollLibrary = await page.evaluate(() => {
    const body = document.body;
    const html = document.documentElement;

    return {
      hasLenis: body.classList.contains('lenis') || !!window.lenis,
      hasLocomotiveScroll: body.classList.contains('has-scroll-smooth') || !!window.locomotive,
      scrollBehavior: window.getComputedStyle(html).scrollBehavior,
      bodyClasses: Array.from(body.classList),
      htmlClasses: Array.from(html.classList)
    };
  });

  // 6. 移动端视口
  console.log('切换到移动端视口...');
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(TARGET_URL, { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);

  await page.screenshot({
    path: join(SCREENSHOTS_DIR, 'zendesk-full-mobile.png'),
    fullPage: true
  });

  // 汇总数据
  analysis.cssAnimations = cssAnimations;
  analysis.elements = elements;
  analysis.scrollBehaviors = scrollBehaviors;
  analysis.interactiveElements = interactiveElements;
  analysis.smoothScrollLibrary = smoothScrollLibrary;

  // 写入 JSON 文件
  writeFileSync(
    join(OUTPUT_DIR, 'zendesk-motion-data.json'),
    JSON.stringify(analysis, null, 2)
  );

  console.log('关闭浏览器...');
  await browser.close();

  return analysis;
}

// 执行分析
(async () => {
  try {
    const data = await analyzeZendeskMotion();

    console.log('\n=== 分析完成 ===');
    console.log(`发现 ${data.cssAnimations.keyframes.length} 个 @keyframes 动画`);
    console.log(`发现 ${data.cssAnimations.animations.length} 个 animation 规则`);
    console.log(`发现 ${data.cssAnimations.transitions.length} 个 transition 规则`);
    console.log(`发现 ${data.elements.length} 个动画元素`);
    console.log(`发现 ${data.interactiveElements.length} 个交互元素`);
    console.log(`记录 ${data.scrollBehaviors.length} 个滚动状态`);
    console.log(`\n数据已保存到: ${OUTPUT_DIR}/zendesk-motion-data.json`);
    console.log(`截图已保存到: ${SCREENSHOTS_DIR}/`);

  } catch (error) {
    console.error('分析失败:', error);
    process.exit(1);
  }
})();
