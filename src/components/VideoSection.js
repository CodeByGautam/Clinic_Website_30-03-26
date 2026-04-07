"use client";

import { useEffect, useMemo, useRef, useState } from "react";

export default function VideoSection({
  title,
  subtitle,
  videos,
  maxItems,
  className = "",
}) {
  const items = useMemo(() => {
    if (!Array.isArray(videos)) return [];
    if (typeof maxItems === "number") return videos.slice(0, maxItems);
    return videos;
  }, [videos, maxItems]);

  if (!items.length) return null;

  return (
    <section className={`py-14 sm:py-16 bg-white ${className}`.trim()}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0B0F19]">
            {title}
          </h2>
          {subtitle ? (
            <p className="mt-4 text-gray-600 leading-relaxed">{subtitle}</p>
          ) : null}
        </div>

        <div className="mt-10 flex flex-col gap-10 max-w-6xl mx-auto">
          {items.map((video, index) => (
            <VideoCard key={`${video.title}-${video.url}-${index}`} video={video} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Global registry to manage only-one-video-playing behavior
const videoRegistry = new Set();

function VideoCard({ video }) {
  const videoRef = useRef(null);
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const videoEl = videoRef.current;
    const cardEl = cardRef.current;
    if (!videoEl || !cardEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const visible = entry.isIntersecting && entry.intersectionRatio >= 0.5;
        setIsVisible(visible);

        if (visible) {
          // Pause all other videos
          videoRegistry.forEach((otherVideo) => {
            if (otherVideo !== videoEl && !otherVideo.paused) {
              otherVideo.pause();
            }
          });
          // Play this video (muted autoplay)
          const playPromise = videoEl.play();
          if (playPromise !== undefined) {
            playPromise.catch(() => {
              // Autoplay was prevented, ignore
            });
          }
        } else {
          videoEl.pause();
        }
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    observer.observe(cardEl);
    videoRegistry.add(videoEl);

    return () => {
      observer.disconnect();
      videoRegistry.delete(videoEl);
    };
  }, []);

  const isYouTube = video.type === "youtube";

  return (
    <div
      ref={cardRef}
      className={`relative rounded-xl overflow-hidden bg-[#0B0F19] shadow-lg border border-black/5 transition-all duration-700 ${
        isVisible ? "opacity-100 scale-100" : "opacity-80 scale-[0.98]"
      }`}
    >
      <div className="relative aspect-video w-full lg:h-[500px]">
        {isYouTube ? (
          <iframe
            className="w-full h-full"
            src={video.url}
            title={video.title}
            allowFullScreen
            loading="lazy"
          />
        ) : (
          <video
            ref={videoRef}
            src={video.url}
            muted
            loop
            playsInline
            preload="metadata"
            className="w-full h-full object-cover lg:h-[500px]"
          />
        )}

        {/* Overlay gradient for better visual */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

        {/* Title overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-white font-semibold leading-snug text-lg">
                {video.title}
              </p>
              {video.category ? (
                <p className="mt-1 text-white/70 text-sm capitalize">
                  {video.category}
                </p>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
