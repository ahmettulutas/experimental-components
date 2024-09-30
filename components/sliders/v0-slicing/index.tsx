"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Thumbs, Controller } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";

const ImageSwiper: React.FC = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const [mainSwiper, setMainSwiper] = useState<any>(null); // To control the main swiper

  return (
    <div className="gallery w-full relative min-h-[31.25rem] h-screen bg-[#202948]">
      {/* Content Section */}
      <div className="content absolute z-50 left-16 top-1/2 transform -translate-y-1/2 uppercase text-white tracking-wider">
        <span className="block text-[clamp(1.85rem,1.7053rem+0.5447vw,2.25rem)] font-light mb-[-1.875rem]">
          every
        </span>
        <h1 className="text-[clamp(3.5rem,1.8723rem+6.1277vw,8rem)] font-normal">
          picture
        </h1>
        <p className="text-[clamp(1.2rem,1.0191rem+0.6809vw,1.7rem)] mt-[-1.563rem]">
          tells a story
        </p>
        <hr className="block w-12 border-none h-0.5 bg-white mt-4 mx-1" />
      </div>

      {/* Footer Section */}
      <footer className="absolute z-50 left-8 bottom-4 transform -translate-y-1/2 md:left-16">
        <ul className="list-none flex gap-6">
          <li className="uppercase text-[#1aad8a] font-semibold text-[1.75rem] tracking-wider">
            <span className="text-sm opacity-40 text-white font-light mr-2">
              likes
            </span>
            87
          </li>
          <li className="uppercase text-[#1aad8a] font-semibold text-[1.75rem] tracking-wider">
            <span className="text-sm opacity-40 text-white font-light mr-2">
              views
            </span>
            173
          </li>
        </ul>
      </footer>

      {/* Main Swiper */}
      <Swiper
        modules={[Navigation, Pagination, Controller, Thumbs]}
        spaceBetween={10}
        navigation
        pagination={{ clickable: true }}
        thumbs={{ swiper: thumbsSwiper }}
        controller={{ control: mainSwiper ?? undefined }}
        onSwiper={(swiper) => setThumbsSwiper(swiper)}
        className="gallery-slider w-full h-full"
      >
        <SwiperSlide>
          <img
            className="w-full h-full object-cover pointer-events-none"
            src="https://images.pexels.com/photos/1478685/pexels-photo-1478685.jpeg"
            alt="Man sitting on a stone on the lake"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-full object-cover pointer-events-none"
            src="https://images.unsplash.com/photo-1676557059846-2dad064ae6e2"
            alt="Lake"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-full object-cover pointer-events-none"
            src="https://images.unsplash.com/photo-1676557060416-1418aefb165d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="Fishermen"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-full object-cover pointer-events-none"
            src="https://images.unsplash.com/photo-1675685468877-8cda3a02c49f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="Surfer"
          />
        </SwiperSlide>
        {/* Add other SwiperSlide items here */}
      </Swiper>

      {/* Thumbnail Swiper */}
      <Swiper
        controller={{ control: mainSwiper }}
        onSwiper={(swiper) => setThumbsSwiper(swiper)}
        spaceBetween={10}
        slidesPerView={"auto"}
        watchSlidesProgress
        className="gallery-thumbs absolute bottom-32 right-0 w-[14.375rem] overflow-hidden md:w-[25rem]"
      >
        <SwiperSlide className="w-[6.25rem] h-[6.25rem] text-center overflow-hidden opacity-50">
          <img
            className="w-auto h-full"
            src="https://images.pexels.com/photos/1478685/pexels-photo-1478685.jpeg"
            alt="Man sitting on a stone on the lake"
          />
        </SwiperSlide>
        <SwiperSlide className="w-[6.25rem] h-[6.25rem] text-center overflow-hidden opacity-50">
          <img
            className="w-auto h-full"
            src="https://images.unsplash.com/photo-1676557059846-2dad064ae6e2"
            alt="Lake"
          />
        </SwiperSlide>
        {/* Add other SwiperSlide items here */}
      </Swiper>

      <a
        href="#"
        className="more uppercase text-white opacity-30 text-sm absolute z-10 right-8 tracking-wider transform -translate-y-4 hidden md:inline-block hover:opacity-100"
      >
        see more
      </a>
    </div>
  );
};

export default ImageSwiper;
