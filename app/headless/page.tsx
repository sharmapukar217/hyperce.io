import Contact from "@/components/Contact/Contact";

import Newsletter from "@/components/Home/Newsletter/Newsletter";
import Navbar from "@/components/Navbar/Navbar";

import Gallary from "@/components/Services/Headless/Gallary/Gallary";

import HeadlessEcom from "@/components/Services/Headless/HeadlessEcom/HeadlessEcom";
import Hero from "@/components/Services/Headless/Hero/Hero";
import WhyChoose from "@/components/Services/Headless/WhyChoose/WhyChoose";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hyperce Headless | Best Ecommerce Suite Solution",
  description: "Hyperce Ecommerce Solution helps to strategize, execute, and amplify your brand's reach. Transform Your Business with Expert Marketing Solutions Today! So Hurry up and give us a call.",
};

export default function Services() {
  return (
    <div className="bg-white dark:bg-slate-900 text-black dark:text-white">
      <main className=" bg-cover bg-center bg-[url('/services-bg.png')] min-h-screen flex items-center">
        <div className="h-fit absolute top-0 w-full">
          <Navbar />
        </div>
        <div className="h-max w-[100vw]">
          <Hero />
        </div>
      </main>
      <HeadlessEcom />
      <WhyChoose />
      <Gallary />
      {/* <Features /> */}
      <Newsletter />
      <Contact />
    </div>
  );
}
