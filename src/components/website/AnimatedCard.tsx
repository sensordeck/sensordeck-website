'use client';

import { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

gsap.registerPlugin(useGSAP);

interface AnimatedCardProps {
  lines?: string[];
  autoPlay?: boolean;
  className?: string;
}

export default function AnimatedCard({
  lines = ['🎵 正在播放', 'Bohemian Rhapsody', 'Queen • A Night at the Opera'],
  autoPlay = false,
  className = ''
}: AnimatedCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const [isExpanded, setIsExpanded] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  const { contextSafe } = useGSAP({ scope: containerRef });

  // 展开动画 (淡出)
  const expandCard = contextSafe(() => {
    if (!containerRef.current || !backgroundRef.current || isAnimating) return;

    setIsAnimating(true);
    const lineElements = containerRef.current.querySelectorAll('.card-content-line');
    const timeline = gsap.timeline({
      onComplete: () => {
        setIsExpanded(false);
        setIsAnimating(false);
      }
    });

    // 2.0s: 第一行淡出
    timeline.to(lineElements[0], {
      opacity: 0,
      duration: 0.2,
      ease: 'power2.out'
    }, 2.0);

    // 3.85s: 第二行淡出
    timeline.to(lineElements[1], {
      opacity: 0,
      duration: 0.15,
      ease: 'power2.out'
    }, 3.85);

    // 4.5-5.0s: 背景和剩余内容快速淡出
    timeline.to(backgroundRef.current, {
      opacity: 0,
      duration: 0.5,
      ease: 'power2.in'
    }, 4.5);

    timeline.to(Array.from(lineElements).slice(2), {
      opacity: 0,
      duration: 0.5,
      ease: 'power2.in'
    }, 4.5);
  });

  // 收起动画 (淡入)
  const collapseCard = contextSafe(() => {
    if (!containerRef.current || !backgroundRef.current || isAnimating) return;

    setIsAnimating(true);
    const lineElements = containerRef.current.querySelectorAll('.card-content-line');
    const timeline = gsap.timeline({
      onComplete: () => {
        setIsExpanded(true);
        setIsAnimating(false);
      }
    });

    // 设置初始透明状态
    gsap.set(backgroundRef.current, { opacity: 0 });
    gsap.set(lineElements, { opacity: 0 });

    // 0-0.1s: 背景快速淡入
    timeline.to(backgroundRef.current, {
      opacity: 1,
      duration: 0.1,
      ease: 'power2.out'
    }, 0);

    // 1.0s 延迟后内容逐行淡入
    lineElements.forEach((line, index) => {
      timeline.to(line, {
        opacity: 1,
        duration: 0.1,
        ease: 'power2.out'
      }, 1.0 + (index * 0.1));
    });
  });

  return (
    <div
      ref={containerRef}
      className={`relative ${className}`}
    >
      <div
        className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md px-6"
        style={{ zIndex: 50 }}
      >
        <div
          ref={backgroundRef}
          className="rounded-xl bg-black/80 backdrop-blur-sm p-5 shadow-2xl"
        >
          {lines.map((text, index) => (
            <div
              key={index}
              className={`card-content-line ${
                index === 0 ? 'text-xs text-white/60 mb-2' :
                index === 1 ? 'text-lg font-semibold text-white mb-1' :
                'text-sm text-white/80'
              }`}
            >
              {text}
            </div>
          ))}
        </div>
      </div>

      {/* 控制按钮 - 仅在非自动播放模式显示 */}
      {!autoPlay && (
        <div className="fixed top-20 left-6 z-[60] flex gap-3">
          <button
            onClick={expandCard}
            disabled={!isExpanded || isAnimating}
            className={`
              px-4 py-2 rounded-lg text-sm font-semibold
              transition-all duration-200
              ${isExpanded && !isAnimating
                ? 'bg-atlas-blue text-white hover:bg-atlas-blue-dark shadow-md'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }
            `}
          >
            展开 (淡出)
          </button>
          <button
            onClick={collapseCard}
            disabled={isExpanded || isAnimating}
            className={`
              px-4 py-2 rounded-lg text-sm font-semibold
              transition-all duration-200
              ${!isExpanded && !isAnimating
                ? 'bg-green-600 text-white hover:bg-green-700 shadow-md'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }
            `}
          >
            收起 (淡入)
          </button>
        </div>
      )}
    </div>
  );
}
