"use client";
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import Solutions from "@/components/Solutions/Solutions";
import Mission from "@/components/Mission/Mission";
import Newsletter from "@/components/Newsletter/Newsletter";
import Partners from "@/components/Partners/Partners";
import Testimonials from "@/components/Testimonials/Testimonials";
import Message from "@/components/FounderMessage/Message";
import { DarkModeProvider } from "@/contexts/theme_context";
export default function Home() {
  return (
    <DarkModeProvider>
      <main className="bg-white dark:bg-[#02080F] text-black dark:text-white min-h-screen h-fit bg-[url('/bg.svg')] bg-center">
        <Navbar />
        <Hero />
      </main>
      <Solutions />
      <Mission />
      <Newsletter />
      <Partners />
      <Testimonials />
      <Message />
    </DarkModeProvider>
  );
}
