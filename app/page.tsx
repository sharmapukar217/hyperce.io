import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Home/Hero/Hero";
import Newsletter from "@/components/Home/Newsletter/Newsletter";
import Partners from "@/components/Home/Partners/Partners";
import Message from "@/components/Home/FounderMessage/Message";
import Solutions from "@/components/Home/Solutions/Solutions";
import Mission from "@/components/Home/BusinessStrategy/Mission/Mission";
import Business from "@/components/Home/BusinessStrategy/Business";
import Testimonials from "@/components/Home/Testimonials/Testimonials";
import ContactForm from "@/components/Contact/ContactForm";
import Responsibility from "@/components/Home/Responsibility/Responsibility";
import Stats from "@/components/Home/Stats/Stats";
import Watch from "@/components/Home/WatchVideo/Watch";
import Collaborative from "@/components/Home/Collaborative/Collaborative";
import RequestQuote from "@/components/Home/RequestQuote/RequestQuote";

export default function Home() {
  return (
    <>
      <main className="bg-white dark:bg-slate-900 text-black dark:text-white h-fit bg-center">
        <Navbar />
        <Hero />
      </main>
      <div className="bg-white dark:bg-[#02080F]">
        <Solutions />
        <Watch />
        <Mission />
        <Stats />
        <Business />
        <Responsibility />
        <Collaborative />
        <Newsletter />
        <Partners />
        <Testimonials />
        <Message />
        <RequestQuote />
        <ContactForm />
      </div>
    </>
  );
}
