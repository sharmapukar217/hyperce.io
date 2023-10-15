import Newsletter from "@/components/Home/Newsletter/Newsletter";
import Navbar from "@/components/Navbar/Navbar";
import Frontier from "@/components/Services/Frontier/Frontier/Frontier";
import Hero from "@/components/Services/Frontier/Hero/Hero";
import WhyChoose from "@/components/Services/Frontier/WhyChoose/WhyChoose";
import Contact from "@/components/Contact/Contact";

import Image from "next/image";
import FrontierBg from "../../public/frontier-portfolio.png";

import { Metadata } from "next";
import DemoCredentials from "@/components/Services/Headless/Hero/minute/DemoCredentials";

export const metadata: Metadata = {
  title: "Hyperce Frontier | Best Ecommerce Solution",
  description:
    "Hyperce Frontier,for your product and service offerings, backed by cutting-edge data analytics and market insights. Learn more about Ecommerce Solution Frontier for your business.",
};

export default function FrontierPage() {
  return (
    <>
      <div className="bg-white dark:bg-slate-900 text-black dark:text-white">
        <main className="min-h-screen flex items-center">
          <Image
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
        <Frontier />
        <DemoCredentials
          demoLink="https://frontier.hyperce.io/admin"
          demoEmail="demo@hyperce.io"
          demoPassword="@Hyperce123"
          qrSource="/frontier.demo.qr.png"
          productName="Frontier"
        />
        <WhyChoose />
        <Newsletter />
        <Contact />
      </div>
    </>
  );
}
