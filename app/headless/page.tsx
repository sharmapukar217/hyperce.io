import ContactForm from "@/components/Contact/Contact";
import Newsletter from "@/components/Home/Newsletter/Newsletter";
import Navbar from "@/components/Navbar/Navbar";
import Features from "@/components/Services/Headless/Features/Features";
import Gallary from "@/components/Services/Headless/Gallary/Gallary";

import HeadlessEcom from "@/components/Services/Headless/HeadlessEcom/HeadlessEcom";
import Hero from "@/components/Services/Headless/Hero/Hero";
import WhyChoose from "@/components/Services/Headless/WhyChoose/WhyChoose";

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
      <ContactForm />
    </div>
  );
}