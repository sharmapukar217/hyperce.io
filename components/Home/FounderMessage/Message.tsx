'use client';
import { useFounderData } from '@/lib/useFounderData';

export default function Message() {
  const [founderData] = useFounderData();
  return (
    <section className="mx-auto container flex px-0 md:px-20 justify-center py-10 md:py-20">
      <div className="w-[80%] flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 min-h-[60vh] bg-cover flex items-end bg-[url('')]">
          <div className="relative h-[60vh] w-full object-center">
            <img
              width="100%"
              height="100%"
              loading="lazy"
              className="h-[60vh] object-cover w-full"
              src={founderData.imageUrl}
              alt=""
            />

            <div className="absolute flex flex-col text-left justify-end px-5 py-5 text-white w-full bottom-0 bg-black/30">
              <span className="text-xl font-bold">{founderData.founder}</span>
              <span className="text-md font-medium">{founderData.title}</span>
            </div>
          </div>
        </div>
        <div className="w-full min-h-[60vh] lg:w-1/2 flex bg-white  dark:bg-[#0E1625] flex-col gap-7 md:gap-5 p-10 justify-center md:px-10 pt-10 md:py-[15%] lg:py-5">
          <h3 className="text-xl font-semibold text-[#4a7262] dark:text-[#AEF2D7]">
            Embrace the Future of eCommerce
          </h3>
          <span className="text-3xl font-bold text-black dark:text-white ">
            Message from our Founder
          </span>
          <span className="text-base text-black dark:text-gray-300">
            {founderData.quote}
          </span>
        </div>
      </div>
    </section>
  );
}
