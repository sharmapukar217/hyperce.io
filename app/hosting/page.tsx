import Newsletter from "@/components/Home/Newsletter/Newsletter";
import Navbar from "@/components/Navbar/Navbar";
import Hosting from "@/components/Services/Hosting/Hosting/Hosting";
import Hero from "@/components/Services/Hosting/Hero/Hero";
import WhyChoose from "@/components/Services/Hosting/WhyChoose/WhyChoose";
import Contact from "@/components/Contact/Contact";

import Image from "next/image";
import FrontierBg from "../../public/servers.jpeg";

import { Metadata } from "next";
// import DemoCredentials from "@/components/Services/Headless/Hero/minute/DemoCredentials";

export const metadata: Metadata = {
  title: "Hyperce Hosting | Best Ecommerce Solution",
  description:
    "Boost Your Platform's Presence with Unmatched Performance and Reliable Support.",
};

export default function FrontierPage() {
  return (
    <>
      <div className="bg-white dark:bg-slate-900 text-black dark:text-white">
        <main className="min-h-screen flex items-center">
          <Image
            className="opacity-40 bg-white"
            src={FrontierBg}
            alt="FrontierBg"
            layout="fill"
            objectFit="cover"
          />

          <div className="h-fit absolute top-0 w-full">
            <Navbar />
          </div>
          <div className="h-max w-[100vw]">
            <Hero />
          </div>
        </main>
        <Hosting />
        {/* <DemoCredentials
          demoLink="https://frontier.hyperce.io/admin"
          demoEmail="demo@hyperce.io"
          demoPassword="@Hyperce123"
          qrSource="/frontier.demo.qr.png"
          productName="Frontier Admin Panel"
        /> */}
        <WhyChoose />
        <Newsletter />
        <Contact />
      </div>
    </>
  );
}
