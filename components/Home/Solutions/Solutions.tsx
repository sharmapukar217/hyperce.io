import AnimateWrapper from "@/components/AnimateWrapper/AnimateWrapper";
import Card from "./Card";
import { solutions } from "@/data/Solutions";

export default function Solutions() {
  return (
    <AnimateWrapper>
      <section
        data-aos="fade-up"
        id="solutions"
        className="w-fit container  dark:bg-[#0F1023] text-black dark:text-white bg-[#F3F4F6] mx-auto lg:px-20 py-10 md:py-16 rounded-2xl"
      >
        <h1 className="hyperce-head-xl text-4xl text-black dark:text-white text-center pb-10">
          Hyperce Suite
        </h1>
        <div className="flex justify-center w-fit">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-4/5">
            {solutions.map((solution) => (
              <>
                <Card
                  href={solution.href}
                  whiteIcon={solution.whiteIcon}
                  darkIcon={solution.darkIcon}
                  name={solution.name}
                  des={solution.des}
                />
              </>
            ))}
          </div>
        </div>

        <div className="relative mt-2 rounded-xl shadow-sm shadow-zinc-200 dark:shadow-[#0f1023] bg-gradient-to-r from-[#F3F4F6] dark:from-[#0f1023] via-teal-500 dark:via-teal-800 via-teal-500 dark:via-teal-800 to-g[#F3F4F6] dark:to-[#0f1023] text-black dark:text-white text-center py-6">
        <p className=" text-lg md:text-2xl font-bold">More Comming soon...</p>
        </div>
        

        <script async src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
        <script>AOS.init();</script>
      </section>
    </AnimateWrapper>
  );
}
