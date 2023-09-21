"use client";
import "./styles.css";

import * as React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import EachTest from "./EachTest";
import { Testimonials } from "@/data/Testimonials";

export default function HomeTestimonial() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = React.useState(false);

  const [phoneref, instanceRefPhone] = useKeenSlider<HTMLDivElement>({
    mode: "free",
    slides: {
      perView: 1.2,
      spacing: 15,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });
  const [midref, instanceRefMid] = useKeenSlider<HTMLDivElement>({
    mode: "free-snap",
    slides: {
      perView: 2.5,
      spacing: 15,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });
  const [ref, instanceRef] = useKeenSlider<HTMLDivElement>({
    mode: "free-snap",
    slides: {
      perView: 2.5,
      spacing: 60,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <section className="container mx-auto px-10 md:px-20 py-10 md:py-20">
      <div className="text-center w-full md:pb-10 flex flex-col gap-2">
        <h2 className="font-bold text-4xl text-black dark:text-white">
          Testimonials
        </h2>
        <span className="hyperce-sub-head text-gray-700 dark:text-gray-400">
          What do our customers say?
        </span>
      </div>
      <div ref={phoneref} className="keen-slider">
        {Testimonials.map((testimonial) => (
          <div className="keen-slider__slide md:hidden bottom-0 pb-10">
            <EachTest
              name={testimonial.name}
              org={testimonial.org}
              message={testimonial.message}
            />
          </div>
        ))}
        {loaded && instanceRefPhone.current && (
          <>
            <Arrow
              left
              onClick={(e: any) =>
                e.stopPropagation() || instanceRefPhone.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e: any) =>
                e.stopPropagation() || instanceRefPhone.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRefPhone.current.track.details.slides.length - 1
              }
            />
          </>
        )}
      </div>
      <div ref={midref} className="keen-slider">
        {Testimonials.map((testimonial) => (
          <div className="keen-slider__slide hidden md:block xl:hidden bottom-0 pb-10">
            <EachTest
              name={testimonial.name}
              org={testimonial.org}
              message={testimonial.message}
            />
          </div>
        ))}
        {loaded && instanceRefMid.current && (
          <>
            <Arrow
              left
              onClick={(e: any) =>
                e.stopPropagation() || instanceRefMid.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e: any) =>
                e.stopPropagation() || instanceRefMid.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRefMid.current.track.details.slides.length - 1
              }
            />
          </>
        )}
      </div>
      <div ref={ref} className="keen-slider">
        {Testimonials.map((testimonial) => (
          <div className="keen-slider__slide hidden h-full xl:block">
            <EachTest
              name={testimonial.name}
              org={testimonial.org}
              message={testimonial.message}
            />
          </div>
        ))}
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
      </div>
    </section>
  );
}

function Arrow(props: {
  disabled: boolean;
  left?: boolean;
  onClick: (e: any) => void;
}) {
  const disabeld = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}
