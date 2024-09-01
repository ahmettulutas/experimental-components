"use client";

import React, { useState } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Controller, Scrollbar } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

import photo1 from "../photos/photo1.jpg";
import photo2 from "../photos/photo2.jpg";
import photo3 from "../photos/photo3.jpg";
import photo4 from "../photos/photo4.jpg";

const images = [photo1.src, photo2.src, photo3.src, photo4.src];

export default function Component() {
  const [leftSwiper, setLeftSwiper] = useState<SwiperClass | null>(null);
  const [rightSwiper, setRightSwiper] = useState<SwiperClass | null>(null);

  const nextSlide = () => {
    leftSwiper?.slideNext();
    rightSwiper?.slidePrev();
  };

  const prevSlide = () => {
    leftSwiper?.slidePrev();
    rightSwiper?.slideNext();
  };
  const rightImages = [
    ...images.slice(0, 1),
    ...images.slice(1, images.length - 1),
  ];
  const leftImages = [
    ...images.slice(0, 1),
    ...images.slice(1, images.length - 1).reverse(),
  ];
  return (
    <div className="relative w-full max-w-4xl mx-auto h-[600px] overflow-hidden bg-black">
      <div className="absolute inset-0 flex">
        <Swiper
          direction="vertical"
          modules={[Controller, Scrollbar]}
          onSwiper={(swiper) => setLeftSwiper(swiper)}
          className="flex-1"
          speed={600}
          pagination={{ type: "bullets" }}
          loop
          allowTouchMove={false}
        >
          {rightImages.map((image, index) => (
            <SwiperSlide
              key={`left-${index}`}
              className="w-full h-full relative"
            >
              <div
                className="w-full h-full bg-cover"
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundPosition: "left",
                  backgroundSize: "200% 100%", // This zooms in to cover the left half
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          direction="vertical"
          modules={[Controller]}
          onSwiper={(swiper) => setRightSwiper(swiper)}
          className="flex-1"
          speed={600}
          pagination={{ type: "bullets" }}
          loop
          allowTouchMove={false}
        >
          {leftImages.map((image, index) => (
            <SwiperSlide
              key={`right-${index}`}
              className="w-full h-full relative"
            >
              <div
                className="w-full h-full bg-cover"
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundPosition: "right",
                  backgroundSize: "200% 100%", // This zooms in to cover the right half
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="absolute bottom-4 left-4 right-4 flex justify-between z-10">
        <button
          onClick={prevSlide}
          className="bg-white backdrop-blur-sm"
          aria-label="Previous image"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button
          onClick={nextSlide}
          className="bg-white backdrop-blur-sm"
          aria-label="Next image"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
      <style jsx global>{`
        .swiper-slide {
          transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
        }
      `}</style>
    </div>
  );
}
