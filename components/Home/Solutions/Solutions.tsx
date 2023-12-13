import AnimateWrapper from "@/components/AnimateWrapper/AnimateWrapper";
import Card from "./Card";
import {
  showcaseNonTechSolutions,
  showcaseTechSolutions,
} from "@/data/Solutions";

export default function Solutions() {
  return (
    <AnimateWrapper>
      <section
        data-aos="fade-up"
        id="solutions"
        className="w-fit container  dark:bg-[#0F1023] text-black dark:text-white bg-[#F3F4F6] mx-auto lg:px-20 py-10 md:py-16 rounded-2xl"
      >
        <h1 className="hyperce-head-xl text-4xl text-black dark:text-white text-center">
          Hyperce Suite
        </h1>
        <div className="flex justify-center">
          <div className="flex gap-5 flex-col md:flex-row">
            <a
              href="https://docs.hyperce.io/hyperce_suite_book.pdf"
              className="flex justify-center md:mt-7 md:mb-10"
              target="_blank"
            >
              <button className="px-5 w-full bg-gradient-to-tr to-[#1f525c] from-[#516f75] font-bold text-sm transition duration-400 py-2 rounded flex justify-center">
                <div className="text-white flex gap-3 hover:gap-5 transition-all duration-150 items-center">
                  <span>Hyperce Suite Book</span>
                  <svg
                    width="30px"
                    height="30px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 12H18M18 12L13 7M18 12L13 17"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </button>
            </a>
            <a
              href="/solutions"
              className="flex justify-center md:mt-7 md:mb-10"
            >
              <button className="px-5 w-full border-2 border-black dark:border-white font-bold text-sm transition duration-400 py-2 rounded flex justify-center">
                <div className=" flex gap-3 hover:gap-5 transition-all duration-150 items-center">
                  <span>View all Solutions By Hyperce</span>
                  <svg
                    width="30px"
                    height="30px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 12H18M18 12L13 7M18 12L13 17"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </button>
            </a>
          </div>
        </div>
        <div className="flex justify-center w-fit">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-4/5">
            {showcaseTechSolutions.slice(0, -1).map((solution) => (
              <>
                <Card
                  href={solution.href}
                  whiteIcon={solution.whiteIcon}
                  darkIcon={solution.darkIcon}
                  name={solution.name}
                  des={solution.des}
                  altText={solution.altText}
                />
              </>
            ))}
            {showcaseNonTechSolutions.map((solution) => (
              <>
                <Card
                  href={solution.href}
                  whiteIcon={solution.whiteIcon}
                  darkIcon={solution.darkIcon}
                  name={solution.name}
                  des={solution.des}
                  altText={solution.altText}
                />
              </>
            ))}
          </div>
        </div>
      </section>
    </AnimateWrapper>
  );
}
