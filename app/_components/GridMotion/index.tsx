"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./GridMotion.css";

type GridItem = {
  type: "image" | "label";
  src?: string;
  alt?: string;
  label?: string;
};

interface GridMotionProps {
  items: GridItem[];
  gradientColor?: string;
}

const GridMotion: React.FC<GridMotionProps> = ({
  items = [],
  gradientColor = "black",
}) => {
  const gridRef = useRef<HTMLDivElement>(null);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const mouseXRef = useRef<number>(0);
  const quickSetters = useRef<((v: number) => void)[]>([]);

  const totalItems = 28;
  const paddedItems = [...items];

  // 空アイテムで埋めて常に28件
  while (paddedItems.length < totalItems) {
    paddedItems.push({ type: "label", label: "" });
  }

  useEffect(() => {
    gsap.ticker.lagSmoothing(0);
    mouseXRef.current = window.innerWidth / 2;

    const handleMouseMove = (e: MouseEvent) => {
      mouseXRef.current = e.clientX;
    };

    // quickSetterの登録
    quickSetters.current = rowRefs.current.map((row) =>
      row ? gsap.quickSetter(row, "x", "px") : () => {}
    );

    const updateMotion = () => {
      const maxMove = 300;
      const baseInertia = [0.6, 0.4, 0.3, 0.2];

      rowRefs.current.forEach((_, index) => {
        const direction = index % 2 === 0 ? 1 : -1;
        const moveAmount =
          ((mouseXRef.current / window.innerWidth) * maxMove - maxMove / 2) *
          direction;

        const setter = quickSetters.current[index];
        if (setter) setter(moveAmount);
      });
    };

    const remove = gsap.ticker.add(updateMotion);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      remove();
    };
  }, []);

  return (
    <div className="noscroll loading" ref={gridRef}>
      <section
        className="intro"
        style={{
          background: `radial-gradient(circle, ${gradientColor} 0%, transparent 100%)`,
        }}
      >
        <div className="gridMotion-container">
          {Array.from({ length: 4 }, (_, rowIndex) => (
            <div
              key={rowIndex}
              className="row"
              ref={(el) => (rowRefs.current[rowIndex] = el)}
            >
              {Array.from({ length: 7 }, (_, itemIndex) => {
                const content = paddedItems[rowIndex * 7 + itemIndex];
                return (
                  <div key={itemIndex} className="row__item">
                    <div className="row__item-inner" style={{ backgroundColor: "#111" }}>
                      {content.type === "image" && content.src ? (
                        <img
                          src={content.src}
                          alt={content.alt || ""}
                          loading="lazy"
                          className="row__item-img"
                        />
                      ) : content.label ? (
                        <div className="row__item-content">{content.label}</div>
                      ) : (
                        <div className="row__item-content">&nbsp;</div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
        <div className="fullview"></div>
      </section>
    </div>
  );
};

export default GridMotion;
