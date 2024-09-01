import { useSwiper } from "swiper/react";
import { ArrowNarrowLeft } from "../icons/arrow-narrow-left";
import { ArrowNarrowRight } from "../icons/arrow-narrow-right";

export function SlideNextButton() {
  const swiper = useSwiper();
  return (
    <button
      style={{ boxShadow: "0px 0px 20px 0px rgba(0, 0, 0, 0.06)" }}
      className="hidden md:flex items-center absolute z-10 top-1/2 right-[-26px] transform -translate-y-1/2 bg-red-500 rounded-[50px] text-white py-3 px-2 w-[53px] h-[52px] justify-center"
      onClick={() => swiper.slideNext()}
    >
      <ArrowNarrowRight />
    </button>
  );
}

export function SlidePrevButton() {
  const swiper = useSwiper();

  return (
    <button
      className="hidden md:flex items-center absolute z-10 top-1/2 left-[-26px] transform -translate-y-1/2 bg-red-500 rounded-full text-white py-3 px-2 w-[53px] h-[52px] justify-center"
      style={{ boxShadow: "0px 0px 20px 0px rgba(0, 0, 0, 0.06)" }}
      onClick={() => swiper.slidePrev()}
    >
      <ArrowNarrowLeft />
    </button>
  );
}
