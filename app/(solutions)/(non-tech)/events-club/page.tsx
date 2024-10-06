import Navbar from '@/components/Navbar/Navbar';
import Contact from '@/components/Contact/Contact';
import Link from 'next/link';
import HeroSection from '@/components/Services/NonTech/events-club/HeroSection';

export default function Page() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Contact />
    </>
  );
}
