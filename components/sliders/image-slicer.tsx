"use client";

import Image from "next/image";
import "./styles.css";
export function ImageSlicer(props: { url: string }) {
  const { url } = props;

  return (
    <div className="relative h-screen">
      <Image fill alt="Image Bottom Half" className="image-one" src={url} />
      <Image fill alt="Image Bottom Half" className="image-two" src={url} />
    </div>
  );
}
