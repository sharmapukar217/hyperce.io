import { Metadata } from 'next';
import Navbar from '@/components/Navbar/Navbar';
import Contact from '@/components/Contact/Contact';
import HeroEvents from '@/components/Services/NonTech/Events/Hero/Hero';
import Events from '@/components/Services/NonTech/Events/Events/Events';
import WhyChoose from '@/components/Services/NonTech/Events/WhyChoose/WhyChoose';
import PremiumPartner from '@/components/Services/NonTech/Events/PremiumPartner/PremiumPartner';
import Image from 'next/image';
import eventsBg from '@/public/services_logos/events/eventsBG.jpg';
import HyperceSkillEvents from '@/components/Services/NonTech/Events/HyperceSkillEvents/HyperceSkillEvents';
import HyperceBusinessEvents from '@/components/Services/NonTech/Events/HyperceBusinessEvents/HyperceBusinessEvents';
import HyperceComboEvents from '@/components/Services/NonTech/Events/Events/HyperceComboEvents.tsx/HyperceComboEvents';

export const metadata: Metadata = {
  title: 'Hyperce Events | Best Ecommerce Suite Solution',
  description:
    "Hyperce Ecommerce Solution helps to strategize, execute, and amplify your brand's reach. Transform Your Business with Expert Marketing Solutions Today! So Hurry up and give us a call."
};

export default function Services() {
  return (
    <div className="bg-white dark:bg-slate-900 text-black dark:text-white">
      <main className=" bg-cover bg-center min-h-screen flex items-center">
        <div>
          <Image
            className="opacity-[80%] dark:opacity-30 bg-white"
            src={eventsBg}
            alt="HeadlessBg"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="h-fit absolute top-0 w-full">
          <Navbar />
        </div>
        <div className="h-max w-[100vw]">
          <HeroEvents />
        </div>
      </main>
      <Events />
      <WhyChoose />
      <PremiumPartner />
      <HyperceSkillEvents />
      <HyperceBusinessEvents />
      <HyperceComboEvents />

      <Contact />
    </div>
  );
}
