"use client";

import { useRef, useState } from "react";

type ProductVideo = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  audience: string;
  src: string;
};

const productVideos: ProductVideo[] = [
  {
    id: "01",
    eyebrow: "机器人 OEM",
    title: "Atlas Runtime Investigation™",
    description:
      "演示 Atlas 如何从机器人运行时事件出发，形成 Runtime Dataset™、Evidence Pack™、Historical RGA™ 和调查上下文，并将完成的调查沉淀为可复用的组织资产。",
    audience: "面向机器人 OEM、工程团队和运行时调查组织",
    src: "/videos/runtime-investigation-demo.mp4",
  },
  {
    id: "02",
    eyebrow: "传感器制造商",
    title: "Atlas Runtime Sensor Governance™",
    description:
      "演示 Atlas 如何观察传感器运行时边界、组织调查证据、支持传感器 FAE 与 OEM 协作，并沉淀可复用的传感器运行时知识。",
    audience: "面向传感器制造商、FAE 团队和产品工程组织",
    src: "/videos/runtime-sensor-governance-demo.mp4",
  },
];

export default function ProductVideosClient() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});

  function handleVideoClick(videoId: string) {
    Object.entries(videoRefs.current).forEach(([id, video]) => {
      if (id !== videoId && video) {
        video.pause();
      }
    });

    setActiveVideo(videoId);

    window.setTimeout(() => {
      const video = videoRefs.current[videoId];

      if (video) {
        void video.play().catch(() => {
          // 浏览器可能要求用户再次点击原生播放按钮。
        });
      }
    }, 0);
  }

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {productVideos.map((video) => {
        const isActive = activeVideo === video.id;

        return (
          <article
            key={video.id}
            className={`overflow-hidden rounded-lg border bg-white transition-colors ${
              isActive
                ? "border-atlas-blue"
                : "border-border hover:border-atlas-blue/50"
            }`}
          >
            <button
              type="button"
              className="block w-full cursor-pointer p-6 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-atlas-blue sm:p-8"
              onClick={() => handleVideoClick(video.id)}
              aria-expanded={isActive}
              aria-controls={`product-video-${video.id}`}
            >
              <div className="flex items-start justify-between gap-4">
                <span className="font-mono text-xs font-semibold tracking-[0.14em] text-atlas-blue">
                  {video.id}
                </span>

                <span className="border border-border px-2 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
                  {video.eyebrow}
                </span>
              </div>

              <div className="mt-8 flex items-start gap-4">
                <span
                  aria-hidden="true"
                  className="mt-1 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-atlas-blue text-white"
                >
                  ▶
                </span>

                <div>
                  <h3 className="text-xl font-semibold leading-snug tracking-tight text-ink sm:text-2xl">
                    {video.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-muted">
                    {video.description}
                  </p>
                </div>
              </div>

              <div className="mt-7 border-t border-border pt-4">
                <p className="text-xs leading-6 text-muted">
                  {video.audience}
                </p>

                <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-atlas-blue">
                  {isActive ? "正在播放" : "播放产品视频"}
                  <span aria-hidden="true">{isActive ? "↓" : "→"}</span>
                </span>
              </div>
            </button>

            {isActive && (
              <div
                id={`product-video-${video.id}`}
                className="border-t border-border bg-ink p-3 sm:p-4"
              >
                <video
                  ref={(element) => {
                    videoRefs.current[video.id] = element;
                  }}
                  className="aspect-video w-full bg-black"
                  controls
                  playsInline
                  preload="metadata"
                >
                  <source src={video.src} type="video/mp4" />
                  您的浏览器不支持视频播放。
                </video>
              </div>
            )}
          </article>
        );
      })}
    </div>
  );
}
