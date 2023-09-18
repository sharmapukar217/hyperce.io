import ContactForm from "@/components/Contact/ContactForm";
import Newsletter from "@/components/Home/Newsletter/Newsletter";
import Navbar from "@/components/Navbar/Navbar";
import Features from "@/components/Services/Ink/Features/Features";
import Gallary from "@/components/Services/Ink/Gallary/Gallary";

import Ink from "@/components/Services/Ink/Ink/Ink";
import Hero from "@/components/Services/Ink/Hero/Hero";
import WhyChoose from "@/components/Services/Ink/WhyChoose/WhyChoose";

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
      <Gallary />
      <Features />
      <Newsletter />
      <ContactForm />
    </div>
  );
}
