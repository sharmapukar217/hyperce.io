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
        <script async src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
        <script>AOS.init();</script>
      </section>
    </AnimateWrapper>
  );
}
