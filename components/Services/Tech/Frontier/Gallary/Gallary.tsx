'use client';
import '@/app/gallaryStyles.css';
import Image from 'next/image';

import * as React from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { FrontierGallery } from '@/data/Gallary/Frontier';

export default function HomeTestimonial() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = React.useState(false);

  const [ref, instanceRef] = useKeenSlider<HTMLDivElement>({
    mode: 'free-snap',
    slides: {
      perView: 2.5,
      spacing: 60
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    }
  });

  return (
    <section className="container mx-auto px-10 flex flex-col gap-5 md:px-20 py-10 md:py-20">
      <div className="text-center w-full md:pb-10 flex flex-col gap-2">
        <h2 className="font-bold text-3xl md:text-4xl text-black dark:text-white">
          Gallery
        </h2>
        <span className="hyperce-sub-head text-gray-700 dark:text-gray-400">
          Check out our previous works.
        </span>
      </div>
      <div ref={ref} className="keen-slider">
        {FrontierGallery.map((website, index) => (
          <div key={index} className="keen-slider__slide">
            <span className="w-full flex justify-center mb-5 text-xl font-bold">
              {website.img_name}
            </span>
            <a target="_blank" href={website.a_href}>
              <Image
                src={website.img_src}
                alt="WebsiteDemo"
                width={500}
                height={200}
              />
            </a>
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
  const disabeld = props.disabled ? ' arrow--disabled' : '';
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? 'arrow--left' : 'arrow--right'
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

// 'use client';

// import * as React from 'react';
// import { useKeenSlider } from 'keen-slider/react';
// import 'keen-slider/keen-slider.min.css';
// <img src="/gallary.png" />;

// export default function App() {
//   const [ref] = useKeenSlider<HTMLDivElement>({
//     loop: true,
//     mode: 'free-snap',
//     slides: {
//       perView: 1.5,
//       spacing: 15
//     }
//   });

//   return (
//     <section className="container mx-auto px-10  lg:px-[10%] py-5 md:py-20 ">
//       <div className="text-center w-full md:pb-10 flex flex-col gap-2">
//         <h2 className="text-3xl mb-3 md:text-4xl text-black dark:text-white font-bold">
//           Gallery for Hyperce Frontier
//         </h2>
//         <span className="text-lg text-black dark:text-white">
//           Discover stunning works from Hyperce Frontier
//         </span>
//       </div>
//       <div ref={ref} className="keen-slider">
//         <div className="keen-slider__slide">
//           <img src="/gallary.png" />
//         </div>
//         <div className="keen-slider__slide">
//           <img src="/gallary.png" />
//         </div>
//         <div className="keen-slider__slide">
//           <img src="/gallary.png" />
//         </div>
//       </div>

//       <div className="justify-center text-black dark:text-white mt-5 text-xl font-bold flex gap-3">
//         Slide
//         <svg
//           version="1.1"
//           width="30px"
//           height="30px"
//           viewBox="0 0 64 64"
//           enable-background="new 0 0 64 64"
//         >
//           <g>
//             <polyline
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="5"
//               stroke-miterlimit="10"
//               points="63,37 1,37 1,18 	"
//             />
//           </g>
//           <polyline
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="5"
//             strokeLinejoin="bevel"
//             stroke-miterlimit="10"
//             points="54,46 63,37
// 	54,28 "
//           />
//         </svg>
//       </div>
//     </section>
//   );
// }
