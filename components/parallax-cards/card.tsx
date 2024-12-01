"use client";
import Image from "next/image";

import { useTransform, motion, useScroll } from "framer-motion";
import { useRef } from "react";

export function Card(props: any) {
  const {
    i,
    title,
    description,
    src,
    color,
    textColor,
    progress,
    range,
    targetScale,
  } = props;
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="sticky flex items-center justify-center top-0 h-screen"
    >
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
          color: textColor,
        }}
        className="flex flex-col relative top-[-25%] h-[500px] w-screen max-w-5xl rounded-3xl px-5 py-10 md:px-10 origin-top text-oliveBlack"
      >
        <h2 className="text-center text-3xl m-0">{title}</h2>
        <div className="flex h-full mt-10 gap-5 md:gap-10">
          <div className="w-[40%] relative top-[10%]">
            <p>{description}</p>
          </div>
          <div className="rounded-3xl relative w-[60%] h-100 overflow-hidden">
            <motion.div className="w-full h-full" style={{ scale: imageScale }}>
              <Image fill src={src} alt={title} />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
