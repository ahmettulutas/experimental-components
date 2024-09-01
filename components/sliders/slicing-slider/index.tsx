import Slider from "..";
import { ImageSlicer } from "../image-slicer";
import photo1 from "../photos/photo1.jpg";
import photo2 from "../photos/photo2.jpg";
export default function SlicingSlider() {
  const images = [
    <ImageSlicer key={1} url={photo1.src} />,
    <ImageSlicer key={2} url={photo2.src} />,
  ];
  return (
    <div className="w-[90vw] m-auto">
      <Slider
        carouselItems={images}
        swiperProps={{
          direction: "vertical",
          loop: true,
          pagination: {
            clickable: true,
          },
          speed: 0,
        }}
      />
    </div>
  );
}
