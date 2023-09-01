import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Services/Hero/Hero";

export default function Services() {
  return (
    <>
      <main className="bg-white dark:bg-slate-900 bg-cover text-black dark:text-white bg-center bg-[url('/services-bg.png')] min-h-screen">
        <Navbar />
        <Hero />
      </main>
    </>
  );
}
