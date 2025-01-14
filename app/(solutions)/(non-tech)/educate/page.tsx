import { Metadata } from 'next';
import Navbar from '@/components/Navbar/Navbar';
import Contact from '@/components/Contact/Contact';
import HeroEducate from '@/components/Services/NonTech/Educate/Hero/Hero';
import Educate from '@/components/Services/NonTech/Educate/Educate/Educate';
import WhyChooseEducate from '@/components/Services/NonTech/Educate/WhyChooseEducate/WhyChooseEducate';
import Image from 'next/image';
import EducateBG from '@/public/services_logos/educate/EducateBG.jpg';

export const metadata: Metadata = {
  title: 'Hyperce Educate | Best Ecommerce Suite Solution',
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
            src={EducateBG}
            alt="HeadlessBg"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="h-fit absolute top-0 w-full">
          <Navbar />
        </div>
        <div className="h-max w-[100vw]">
          <HeroEducate />
        </div>
      </main>
      <Educate />
      <WhyChooseEducate />

      <Contact />
    </div>
  );
}
