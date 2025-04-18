'use client';

import { stats } from '@/data/Stats';
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export default function Stats() {
  return (
    <section className="container px-10 md:px-20 py-10 md:py-20 mx-auto">
      <div className="grid grid-cols-1 mx-auto md:grid-cols-2 lg:grid-cols-4 -m-4 text-center border-2 dark:border-[#4b5769] py-5 rounded-3xl">
        {stats.map((each) => (
          <div
            key={stats.indexOf(each)}
            className=" mx-auto dark:md:border-[#64748B] md:border-r md:last:border-none md:w-1/4 min-w-[220px] p-4 w-1/2 text-center"
          >
            <div className="mb-2 font-bold font-heading dark:text-white lg:text-5xl text-[2.6rem] text-primary xl:text-6xl">
              <Counter targetNumber={parseInt(each.number)} />
            </div>
            <div className="font-bold dark:text-slate-400 lg:text-base text-gray-800 text-sm tracking-widest uppercase">
              {each.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const Counter = ({ targetNumber }: { targetNumber: number }) => {
  const { ref, inView } = useInView({
    triggerOnce: true // Count only when it comes into view once
  });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (inView && count < targetNumber) {
      const interval = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 60); // Adjust the interval duration as needed (in milliseconds)

      return () => clearInterval(interval);
    }
  }, [inView, count, targetNumber]);

  return <span ref={ref}>{inView && <>{count}&nbsp;+</>}</span>;
};
