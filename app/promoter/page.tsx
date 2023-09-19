import ContactForm from "@/components/Contact/ContactForm";
import Newsletter from "@/components/Home/Newsletter/Newsletter";
import Navbar from "@/components/Navbar/Navbar";
import Features from "@/components/Services/Promoter/Features/Features";
import Gallary from "@/components/Services/Promoter/Gallary/Gallary";

import Promoter from "@/components/Services/Promoter/Promoter/Promoter";
import Hero from "@/components/Services/Promoter/Hero/Hero";
import WhyChoose from "@/components/Services/Promoter/WhyChoose/WhyChoose";
import Contact from "@/components/Contact/Contact";

export default function Boost() {
  return (
    <div className="bg-white dark:bg-slate-900 text-black dark:text-white">
      <main className=" bg-cover bg-center bg-[url('/promoter.png')] min-h-screen flex items-center">
        <div className="h-fit absolute top-0 w-full">
          <Navbar />
        </div>
        <div className="h-max w-[100vw]">
          <Hero />
        </div>
      </main>
      <Promoter />
      <WhyChoose />
      <Gallary />
      {/* <Features /> */}
      <Newsletter />
      <Contact />
    </div>
  );
}
