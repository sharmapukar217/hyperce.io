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
import { HyperClickPromoPrompt } from '@/components/HyperClickPromoPrompt';
import { HyperClickHero } from '@/components/HyperClickHero';
import { HomepageHeroCarousel } from '@/components/HomepageHeroCarousel';
import { ExclusiveOffers } from '@/components/Home/ExclusiveOffers';

export const metadata: Metadata = {
  title: 'Hyperce | Best Ecommerce Suite Solution',
  description:
    'Hyperce, One of the best ecommerce suite partners, dedicated to support and prospering the ecommerce industry globally. So Hurry up and grab your opportunities.'
};

export default function Home() {
  return (
    <>
      <HyperClickPromoPrompt />
      <Navbar />

      <main className="bg-[#ebeeef] dark:bg-slate-900 text-black dark:text-white bg-center">
        <HomepageHeroCarousel />
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
            <ExclusiveOffers />
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
