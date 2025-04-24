"use client";

import React from "react";
import styles from "./index.module.css";

interface YoutubeEmbedProps {
  videoId: string;
  title?: string;
}

const YoutubeEmbed: React.FC<YoutubeEmbedProps> = ({
  videoId,
  title = "YouTube video",
}) => {
  const src = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=1&rel=0&playsinline=1`;

  return (
    <div className={styles.wrapper}>
      <iframe
        className={styles.iframe}
        src={src}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default YoutubeEmbed;
