import Newsletter from "@/components/Home/Newsletter/Newsletter";
import Navbar from "@/components/Navbar/Navbar";

import Ink from "@/components/Services/Ink/Ink/Ink";
import Hero from "@/components/Services/Ink/Hero/Hero";
import WhyChoose from "@/components/Services/Ink/WhyChoose/WhyChoose";
import Contact from "@/components/Contact/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: " Hyperce Ink | Best Ecommerce Business Solution",
  description: "Engage Your Audience, Enhance Your Brand, and Create Compelling Content. Unleash the Power of Words with Hyperce Ecommerce Suite Expert Blogging Solutions!",
};

export default function Services() {
  return (
    <div className="bg-white dark:bg-slate-900 text-black dark:text-white">
      <main className=" bg-cover bg-center bg-[url('/ink.png')] min-h-screen flex items-center">
        <div className="h-fit absolute top-0 w-full">
          <Navbar />
        </div>
        <div className="h-max w-[100vw]">
          <Hero />
        </div>
      </main>
      <Ink />
      <WhyChoose />
      {/* <Gallary /> */}
      {/* <Features /> */}
      <Newsletter />
      <Contact />
    </div>
  );
}
