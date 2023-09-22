import Newsletter from "@/components/Home/Newsletter/Newsletter";
import Navbar from "@/components/Navbar/Navbar";
import Frontier from "@/components/Services/Frontier/Frontier/Frontier";
import Hero from "@/components/Services/Frontier/Hero/Hero";
import WhyChoose from "@/components/Services/Frontier/WhyChoose/WhyChoose";
import Contact from "@/components/Contact/Contact";

export default function Services() {
  return (
    <div className="bg-white dark:bg-slate-900 text-black dark:text-white">
      <main className=" bg-cover bg-center min-h-screen flex items-center">
        <div className="min-h-[100vh] absolute">
          <img src="/3.png" className="opacity-50" alt="" />
        </div>
        <div className="h-fit absolute top-0 w-full z-10">
          <Navbar />
        </div>
        <div className="h-max w-[100vw] z-10">
          <Hero />
        </div>
      </main>
      <Frontier />
      <WhyChoose />
      {/* <Gallary /> */}
      {/* <Features /> */}
      <Newsletter />
      <Contact />
    </div>
  );
}
