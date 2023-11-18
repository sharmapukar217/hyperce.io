import Newsletter from "@/components/Home/Newsletter/Newsletter";
import Navbar from "@/components/Navbar/Navbar";
import Shopstore from "@/components/Services/Shopstore/Shopstore/Shopstore";
import Hero from "@/components/Services/Shopstore/Hero/Hero";
import WhyChoose from "@/components/Services/Shopstore/WhyChoose/WhyChoose";
import Contact from "@/components/Contact/Contact";

import Image from "next/image";
import QaBg from "../../public/hyperce-qa.png";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hyperce Shopstore | Best Ecommerce Solution",
  description:
    "Boost Your Platform's Presence with Unmatched Performance and Reliable Support.",
};

export default function FrontierPage() {
  return (
    <>
      <div className="bg-white dark:bg-slate-900 text-black dark:text-white">
        <main className="min-h-screen flex items-center">
          <Image
            className="opacity-[80%] dark:opacity-30 bg-white"
            src={QaBg}
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
        <Shopstore />
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
