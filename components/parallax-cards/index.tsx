"use client";
import { useRef } from "react";
import { Card } from "./card";
import { useScroll } from "framer-motion";

import bgImage1 from "@/public/images/home-gallery/breast.webp";
import bgImage2 from "@/public/images/home-gallery/brow-lift.webp";
import bgImage3 from "@/public/images/home-gallery/eyelid.webp";
import bgImage4 from "@/public/images/home-gallery/celulite.webp";
import { PageContainer } from "../page-container";

const steps = [
  {
    title: "Personalized Planning",
    description:
      "We begin with a free consultation and create a tailored treatment plan, covering every detail from start to finish.",
    color: "#e9d8a6",
    textColor: "#242526",
    src: bgImage1.src,
  },
  {
    title: "Travel & Stay Made Easy",
    description:
      "From flights to luxury accommodations, we handle it all for a seamless experience.",
    color: "#242526",
    textColor: "#f7e1b5",
    src: bgImage2.src,
  },
  {
    title: "Surgery & Aftercare",
    description:
      "Receive expert care during surgery and professional follow-ups to ensure your smooth recovery.",
    color: "#FFC857",
    textColor: "#242526",
    src: bgImage3.src,
  },
  {
    title: "Always By Your Side",
    description:
      "Enjoy 24/7 assistance, cultural tours, and ongoing support—even after you return home.",
    color: "#B0B0B0",
    textColor: "#242526",
    src: bgImage4.src,
  },
];

export default function ParallaxCards() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <PageContainer>
      <div className="grid grid-cols-1 mt-[50vh] md:grid-cols-3 relative">
        <div className="sticky top-[10vh] md:top-0 col-span-1 flex items-start md:items-center md:h-screen">
          <h1 className="text-8xl">We got you covered</h1>
        </div>
        <div ref={containerRef} className="col-span-1 md:col-span-2 relative">
          {steps.map((step, i) => {
            const targetScale = 1 - (steps.length - i) * 0.05;
            return (
              <Card
                key={`p_${step}`}
                i={i}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
                {...step}
              />
            );
          })}
        </div>
      </div>
    </PageContainer>
  );
}
