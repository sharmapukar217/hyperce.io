import Newsletter from "@/components/Home/Newsletter/Newsletter";
import Navbar from "@/components/Navbar/Navbar";
import Frontier from "@/components/Services/Frontier/Frontier/Frontier";
import Hero from "@/components/Services/Frontier/Hero/Hero";
import WhyChoose from "@/components/Services/Frontier/WhyChoose/WhyChoose";
import Contact from "@/components/Contact/Contact";

export default function Services() {
  return (
    <div className="bg-white dark:bg-slate-900 text-black dark:text-white">
      <main className=" bg-cover bg-center bg-[url('/frontier-portfolio.png')] min-h-screen flex items-center">
        <div className="h-fit absolute top-0 w-full">
          <Navbar />
        </div>
        <div className="h-max w-[100vw]">
          <Hero />
        </div>
      </main>
      <Frontier />
      <WhyChoose />

      <Newsletter />
      <Contact />
    </div>
  );
}
