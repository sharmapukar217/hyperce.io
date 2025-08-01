import Navbar from '@/components/Navbar/Navbar';
import Contact from '@/components/Contact/Contact';
import HeroSection from '@/components/Services/NonTech/events-club/HeroSection';
import PastEvents from '@/components/Services/NonTech/events-club/PastEvents';
import Partners from '@/components/Services/NonTech/events-club/Partners';

export default function Page() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <PastEvents />
      <Partners />
      <Contact />
    </>
  );
}
