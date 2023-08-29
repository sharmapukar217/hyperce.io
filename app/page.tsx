"use client";
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import Newsletter from "@/components/Newsletter/Newsletter";
import Partners from "@/components/Partners/Partners";
import Message from "@/components/FounderMessage/Message";
import Solutions from "@/components/Solutions/Solutions";
import Mission from "@/components/Mission/Mission";

export default function Home() {
  return (
    <>
      <main className="bg-white dark:bg-[#02080F] text-black dark:text-white min-h-screen h-fit bg-[url('/bg.svg')] bg-center">
        <Navbar />
        <Hero />
      </main>
      <div className="bg-white dark:bg-[#02080F]">
        <Solutions />
        <Mission />
        <Newsletter />
        <Partners />
        <Message />
      </div>
    </>
  );
}
