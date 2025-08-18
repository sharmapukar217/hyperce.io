'use client';
import * as React from 'react';
import { twJoin } from 'tailwind-merge';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import Hero from '@/components/Home/Hero/Hero';
import { HyperClickHero } from '@/components/HyperClickHero';

function Slide(props: React.PropsWithChildren) {
  return (
    <div className="min-w-0 shrink-0 grow-0 basis-full">{props.children}</div>
  );
}

export function HomepageHeroCarousel() {
  const [emblaRef, api] = useEmblaCarousel({
    loop: true
  });

  const [totalSlides, setTotalSlides] = React.useState(0);
  const [activeSlide, setActiveSlide] = React.useState(0);
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);

  React.useEffect(() => {
    if (!api) return;

    function handleSlidesChanged(ev: NonNullable<typeof api>) {
      setCanScrollPrev(ev.canScrollPrev());
      setCanScrollNext(ev.canScrollNext());
      setTotalSlides(ev.slideNodes().length);
      setActiveSlide(ev.selectedScrollSnap());
    }

    api.on('init', handleSlidesChanged);
    api.on('scroll', handleSlidesChanged);
    return () => {
      api.off('init', handleSlidesChanged);
      api.off('slidesChanged', handleSlidesChanged);
    };
  }, [api]);

  return (
    <div
      className="relative shrink-0 select-none"
      onContextMenu={(e) => e.preventDefault()}
    >
      <div ref={emblaRef} className="overflow-x-clip">
        <div className="flex">
          {/*<Slide>
            <HyperClickHero />
          </Slide>*/}
          <Slide>
            <Hero />
          </Slide>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none container px-0 flex flex-col">
        <div className="flex flex-1 items-center justify-center">
          {canScrollPrev && (
            <button
              className="text-gray-400 hover:text-black dark:text-gray-500 dark:hover:text-white transition-colors flex items-center justify-center shrink-0 pointer-events-auto me-auto"
              onClick={() => api?.scrollPrev()}
            >
              <ChevronLeft className="h-8 w-8" />
            </button>
          )}
          {canScrollNext && (
            <button
              className="text-gray-400 hover:text-black dark:text-gray-500 dark:hover:text-white transition-colors flex items-center justify-center shrink-0 pointer-events-auto ms-auto"
              onClick={() => api?.scrollNext()}
            >
              <ChevronRight className="h-8 w-8" />
            </button>
          )}
        </div>
        {totalSlides > 1 ? (
          <div className="mx-auto space-x-1">
            {new Array(totalSlides).fill(null).map((_, idx) => (
              <button
                key={idx}
                onClick={() => api?.scrollTo(idx)}
                className={twJoin(
                  'pointer-events-auto rounded-full transition-all backdrop-blur-xl hover:bg-black/70 dark:hover:bg-white/70',
                  [
                    activeSlide === idx
                      ? 'w-8 h-2 !bg-black dark:!bg-white'
                      : 'w-2 h-2 bg-black/40 dark:bg-white/40'
                  ]
                )}
              />
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
