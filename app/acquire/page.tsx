import Newsletter from "@/components/Home/Newsletter/Newsletter";
import Navbar from "@/components/Navbar/Navbar";
import Acquire from "@/components/Services/Acquire/Acquire/Acquire";
import Hero from "@/components/Services/Acquire/Hero/Hero";
import WhyChoose from "@/components/Services/Acquire/WhyChoose/WhyChoose";
import Contact from "@/components/Contact/Contact";

import Image from "next/image";
import QaBg from "../../public/hyperce-qa.png";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hyperce Acquire | Best Ecommerce Solution",
  description:
    "Hyperce Acquire stands as a beacon in the realm of e-commerce business transactions. Our suite of services begins with expert business valuation, conducting a thorough analysis of financials, customer base, brand strength, and growth potential. This meticulous evaluation provides sellers with a clear understanding of their e-commerce business's market value, fostering confidence and transparency.",
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
        <Acquire />
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
