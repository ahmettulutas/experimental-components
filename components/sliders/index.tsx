"use client";
import React from "react";

import { Navigation, Pagination } from "swiper/modules";
import {
  Swiper,
  SwiperProps,
  SwiperSlide,
  SwiperSlideProps,
} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { SlideNextButton, SlidePrevButton } from "./slider-navigations";

export type CarouselProps = {
  carouselItems: Array<React.ReactNode>;
  loop?: boolean;
  showDots?: boolean;
  swiperSlideProps?: SwiperSlideProps;
  swiperProps?: SwiperProps;
};

const Slider = (props: CarouselProps) => {
  const {
    showDots = true,
    carouselItems,
    swiperProps,
    swiperSlideProps,
  } = props;

  return (
    <div className="relative flex flex-col justify-between items-center">
      <Swiper
        spaceBetween={16}
        modules={[Navigation, Pagination]}
        pagination={
          showDots
            ? {
                el: ".swiper-pagination",
                type: "bullets",
                clickable: true,
                bulletClass:
                  "h-2 w-2 rounded-full cursor-pointer bg-background400",
                bulletActiveClass: "bg-background700",
              }
            : false
        }
        className="w-full h-screen"
        {...swiperProps}
      >
        {carouselItems.map((item, index) => (
          <SwiperSlide key={index} {...swiperSlideProps}>
            {item}
          </SwiperSlide>
        ))}
        <SlidePrevButton />
        <SlideNextButton />
      </Swiper>
      <div className="swiper-pagination flex gap-[6px] z-10 !w-auto !m-auto !mt-4 md:hidden !static" />
    </div>
  );
};
Slider.NextButton = SlideNextButton;
Slider.PrevButton = SlidePrevButton;
export default Slider;
