'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './index.module.css';

interface YoutubeEmbedProps {
  videoId: string;
  title?: string;
}

export default function YoutubeEmbed({
  videoId,
  title = 'Wansie uniform movie',
}: YoutubeEmbedProps) {
  const [isVisible, setIsVisible] = useState(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!wrapperRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // 一度だけトリガー
        }
      },
      {
        threshold: 0.5, // 50%見えたら発火
      }
    );

    observer.observe(wrapperRef.current);

    return () => observer.disconnect();
  }, []);

  const src = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=1&rel=0&playsinline=1`;

  return (
    <div ref={wrapperRef} className={styles.wrapper}>
      {isVisible ? (
        <iframe
          className={styles.iframe}
          src={src}
          title={title}
          width="560"
          height="315"
          frameBorder="0"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <div className={styles.placeholder}>動画を読み込み中...</div>
      )}
    </div>
  );
}
