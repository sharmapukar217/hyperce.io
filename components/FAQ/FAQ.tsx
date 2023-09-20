import { Accordion } from "@/components/ui/accordion";
import Question from "./Question";
import { FAQdata } from "@/data/FAQdata";

export default function AccordionDemo() {
  return (
    <section
      id="faq"
      className="mx-auto container px-10 md:px-20 py-10 md:py-20 lg:pb-10 min-h-[120%] text-black dark:text-white  "
    >
      <div className="text-center w-full md:pb-16 flex flex-col gap-2">
        <h2 className="font-bold text-4xl text-black dark:text-white">
          Frequently Asked Questions
        </h2>
        <span className="hyperce-sub-head text-gray-700 dark:text-gray-400">
          Can’t find it here? Check out our <a href="https://wa.me/16178195576">Help Centre</a>
        </span>
      </div>
      <Accordion type="single" collapsible className="w-full">
        <div className="grid md:grid-cols-2 gap-5 md:gap-10 lg:gap-16 mt-10 md:mt-0 lg:min-h-[344px]">
          <div className="flex flex-col gap-5">
            {FAQdata.slice(0, 4).map((eachQns) => (
              <div className="bg-white dark:bg-transparent rounded-xl" key={FAQdata.indexOf(eachQns)}>
                <Question
                  id={eachQns.id}
                  question={eachQns.name}
                  answer={eachQns.answer}
                  icon={eachQns.icon}
                />
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-5">
            {FAQdata.slice(4, 8).map((eachQns) => (
              <div className="bg-white dark:bg-transparent  rounded-xl" key={FAQdata.indexOf(eachQns)}>
                <Question
                  id={eachQns.id}
                  question={eachQns.name}
                  answer={eachQns.answer}
                  icon={eachQns.icon}
                />
              </div>
            ))}
          </div>
        </div>
      </Accordion>
    </section>
  );
}
