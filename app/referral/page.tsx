'use client';
import Navbar from '@/components/Navbar/Navbar';
import Form from './Form';

export default function Services() {
  return (
    <div className="bg-white dark:bg-slate-900 text-black dark:text-white">
      <main className="min-h-screen flex flex-col items-center">
        <div className="h-fit w-full">
          <Navbar />
        </div>
        <div className="text-center mt-10">
          <p className="text-xs font-semibold text-gray-500 tracking-wide uppercase mb-3 dark:text-gray-200">
            Referral program
          </p>
          <h1 className="text-3xl text-gray-800 font-bold sm:text-5xl lg:text-6xl lg:leading-tight dark:text-gray-200">
            Join the best Affiliate Program
            <br />
            <span className="text-[#357D8A]">at Hyperce</span>
          </h1>
        </div>
        <div className="flex-1 flex items-center justify-center mb-20">
          <Form />
        </div>
      </main>
    </div>
  );
}
