"use client";

import * as React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import EachTest from "@/components/Home/Testimonials/EachTest";

export default function App() {
  const [phoneref] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free",
    slides: {
      perView: 1,
      spacing: 15,
    },
  });
  const [midref] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 2,
      spacing: 15,
    },
  });
  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 3,
      spacing: 15,
    },
  });

  return (
    <section className="container mx-auto px-10 py-20 ">
      <div ref={phoneref} className="keen-slider">
        <div className="keen-slider__slide md:hidden">
          <EachTest />
        </div>
        <div className="keen-slider__slide md:hidden">
          <EachTest />
        </div>
        <div className="keen-slider__slide md:hidden">
          <EachTest />
        </div>
        <div className="keen-slider__slide md:hidden">
          <EachTest />
        </div>
      </div>
      <div ref={midref} className="keen-slider">
        <div className="keen-slider__slide hidden md:block xl:hidden">
          <EachTest />
        </div>
        <div className="keen-slider__slide hidden md:block xl:hidden  ">
          <EachTest />
        </div>
        <div className="keen-slider__slide hidden md:block xl:hidden">
          <EachTest />
        </div>
        <div className="keen-slider__slide hidden md:block xl:hidden">
          <EachTest />
        </div>
      </div>
      <div ref={ref} className="keen-slider">
        <div className="keen-slider__slide hidden xl:block">
          <EachTest />
        </div>
        <div className="keen-slider__slide hidden xl:block">
          <EachTest />
        </div>
        <div className="keen-slider__slide hidden xl:block">
          <EachTest />
        </div>
        <div className="keen-slider__slide hidden xl:block">
          <EachTest />
        </div>
      </div>
      <div className="justify-center text-black dark:text-white mt-5 text-xl font-bold flex gap-3">
        Slide
        <svg
          version="1.1"
          width="30px"
          height="30px"
          viewBox="0 0 64 64"
          enable-background="new 0 0 64 64"
        >
          <g>
            <polyline
              fill="none"
              stroke="currentColor"
              stroke-width="5"
              stroke-miterlimit="10"
              points="63,37 1,37 1,18 	"
            />
          </g>
          <polyline
            fill="none"
            stroke="currentColor"
            stroke-width="5"
            stroke-linejoin="bevel"
            stroke-miterlimit="10"
            points="54,46 63,37 
	54,28 "
          />
        </svg>
      </div>
    </section>
  );
}