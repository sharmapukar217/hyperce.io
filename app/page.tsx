import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/components/Home/Hero/Hero';
import Newsletter from '@/components/Home/Newsletter/Newsletter';
import Partners from '@/components/Home/Partners/Partners';
import Message from '@/components/Home/FounderMessage/Message';
import Solutions from '@/components/Home/Solutions/Solutions';
import Mission from '@/components/Home/BusinessStrategy/Mission/Mission';
import Business from '@/components/Home/BusinessStrategy/Business';
import Contact from '@/components/Contact/Contact';
import Responsibility from '@/components/Home/Responsibility/Responsibility';
import Stats from '@/components/Home/Stats/Stats';
import Watch from '@/components/Home/WatchVideo/Watch';
import Collaborative from '@/components/Home/Collaborative/Collaborative';
import RequestQuote from '@/components/Home/RequestQuote/RequestQuote';
import CardsSection from '@/components/Home/CardsSection/CardsSection';
import FAQ from '@/components/FAQ/FAQ';
import AnimateWrapper from '@/components/AnimateWrapper/AnimateWrapper';
import HomeTestimonial from '@/components/Home/Gallary/Testimonials';
import HypercePitchPdf from '@/components/Home/HypercePitchPdf';
import { Metadata } from 'next';
import HyperceEventsClubHome from '@/components/Home/HyperceEventsClubHome/HyperceEventsClubHome';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Hyperce | Best Ecommerce Suite Solution',
  description:
    'Hyperce, One of the best ecommerce suite partners, dedicated to support and prospering the ecommerce industry globally. So Hurry up and grab your opportunities.'
};

export default function Home() {
  return (
    <>
      <div className="border-b bg-[#0F1023] text-white border-gray-800">
        <div className="container py-2 px-10 md:px-20 flex items-center justify-center">
          <Link
            href="/headless"
            className="gap-2 group inline-flex flex-wrap items-center bg-white/10 hover:bg-white/10 focus:outline-hidden focus:bg-white/10 border border-white/10 p-1 ps-4 rounded-full text-gray-300 hover:text-white transition-all"
          >
            HyperClicks is open to pre booking.
            <span className="bg-white/10 group-hover:bg-white group-focus:bg-white px-2 group-hover:[&_svg]:ms-2 group-hover:pe-0 inline-flex justify-center items-center gap-x-2 rounded-full font-semibold text-gray-400 group-hover:text-[#357D8A] group-focus:text-[#357D8A] transition-all text-xs">
              <svg
                className="shrink-0 size-3 transition-all duration-200"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </span>
          </Link>
        </div>
      </div>

      <main className="bg-[#ebeeef] dark:bg-slate-900 text-black dark:text-white h-fit bg-center">
        <Navbar />
        <Hero />
      </main>
      <div className="bg-[#ebeeef] dark:bg-[#0F172A]">
        <AnimateWrapper>
          <div data-aos="fade-up">
            <Solutions />
          </div>
          <div data-aos="fade-up">
            <HyperceEventsClubHome />
          </div>
          <div data-aos="fade-up">
            <Watch />
          </div>
          <div data-aos="fade-up">
            <HypercePitchPdf />
          </div>
          <div data-aos="fade-up">
            <Mission />
          </div>
          <div data-aos="fade-up">
            <Stats />
          </div>
          <div data-aos="fade-up">
            <Business />
          </div>
          <div data-aos="fade-up">
            <Responsibility />
          </div>
          <div data-aos="fade-up">
            <Collaborative />
          </div>
          <div data-aos="fade-up">
            <CardsSection />
          </div>
          <div data-aos="fade-up">
            <Partners />
          </div>
          <div data-aos="fade-up">
            <HomeTestimonial />
          </div>
          <div data-aos="fade-up">
            <Newsletter />
          </div>
          <div data-aos="fade-up">
            <FAQ />
          </div>
          <div data-aos="fade-up">
            <Message />
          </div>
          <div data-aos="fade-up">
            <RequestQuote />
          </div>
          <div data-aos="fade-up">
            <Contact />
          </div>
        </AnimateWrapper>
      </div>
    </>
  );
}
