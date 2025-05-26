"use client";

import React, { useEffect, useState } from "react";
import styles from "./index.module.css";

interface YoutubeEmbedProps {
  videoId: string;
  title?: string;
}

const YoutubeEmbed: React.FC<YoutubeEmbedProps> = ({
  videoId,
  title = "Wansie uniform movie",
}) => {
  const [showIframe, setShowIframe] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowIframe(true), 1000); // 1秒遅らせて読み込み
    return () => clearTimeout(timer);
  }, []);

  const src = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=1&rel=0&playsinline=1`;

  return (
    <div className={styles.wrapper}>
      {showIframe && (
        <iframe
          className={styles.iframe}
          src={src}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
    </div>
  );
};

export default YoutubeEmbed;
