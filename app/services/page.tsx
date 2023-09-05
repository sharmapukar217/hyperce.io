import Newsletter from "@/components/Home/Newsletter/Newsletter";
import Navbar from "@/components/Navbar/Navbar";

import HeadlessEcom from "@/components/Services/HeadlessEcom/HeadlessEcom";
import Hero from "@/components/Services/Hero/Hero";
import WhyChoose from "@/components/Services/WhyChoose/WhyChoose";

export default function Services() {
  return (
    <div className="bg-white dark:bg-slate-900 text-black dark:text-white">
      <main className=" bg-cover bg-center bg-[url('/services-bg.png')] min-h-screen">
        <Navbar />
        <Hero />
      </main>
      <HeadlessEcom />
      <WhyChoose />

      <Newsletter />
    </div>
  );
}
