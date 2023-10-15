import Newsletter from "@/components/Home/Newsletter/Newsletter";
import Navbar from "@/components/Navbar/Navbar";

import Ink from "@/components/Services/Ink/Ink/Ink";
import Hero from "@/components/Services/Ink/Hero/Hero";
import WhyChoose from "@/components/Services/Ink/WhyChoose/WhyChoose";
import Contact from "@/components/Contact/Contact";

import Image from "next/image";
import InkBg from "../../public/ink.png";

import { Metadata } from "next";
import DemoCredentials from "@/components/Services/Headless/Hero/minute/DemoCredentials";

export const metadata: Metadata = {
  title: " Hyperce Ink | Best Ecommerce Business Solution",
  description:
    "Engage Your Audience, Enhance Your Brand, and Create Compelling Content. Unleash the Power of Words with Hyperce Ecommerce Suite Expert Blogging Solutions!",
};

export default function Services() {
  return (
    <div className="bg-white dark:bg-slate-900 text-black dark:text-white">
      <main className="min-h-screen flex items-center">
        <div>
          <Image src={InkBg} alt="InkBg" layout="fill" objectFit="cover" />
        </div>
        <div className="h-fit absolute top-0 w-full">
          <Navbar />
        </div>
        <div className="h-max w-[100vw]">
          <Hero />
        </div>
      </main>
      <Ink />
      <DemoCredentials
        demoLink="https://inkadmin.hyperce.io/admin"
        demoEmail="demo@hyperce.io"
        demoPassword="@Hyperce123"
        qrSource="/ink.demo.qr.png"
        productName="Frontier"
      />
      <WhyChoose />
      {/* <Gallary /> */}
      {/* <Features /> */}
      <Newsletter />
      <Contact />
    </div>
  );
}
