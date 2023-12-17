'use client';

import * as React from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
<img src="/gallary.png" />;

export default function App() {
  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: 'free-snap',
    slides: {
      perView: 1.5,
      spacing: 15
    }
  });

  return (
    <section className="container mx-auto px-10  lg:px-[10%] py-5 md:py-20 ">
      <div className="text-center w-full md:pb-10 flex flex-col gap-2">
        <h2 className="text-3xl mb-3 md:text-4xl text-black dark:text-white font-bold">
          Gallery for Hyperce Frontier
        </h2>
        <span className="text-lg text-black dark:text-white">
          Discover stunning works from Hyperce Frontier
        </span>
      </div>
      <div ref={ref} className="keen-slider">
        <div className="keen-slider__slide">
          <img src="/gallary.png" />
        </div>
        <div className="keen-slider__slide">
          <img src="/gallary.png" />
        </div>
        <div className="keen-slider__slide">
          <img src="/gallary.png" />
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
              strokeWidth="5"
              stroke-miterlimit="10"
              points="63,37 1,37 1,18 	"
            />
          </g>
          <polyline
            fill="none"
            stroke="currentColor"
            strokeWidth="5"
            strokeLinejoin="bevel"
            stroke-miterlimit="10"
            points="54,46 63,37 
	54,28 "
          />
        </svg>
      </div>
    </section>
  );
}
