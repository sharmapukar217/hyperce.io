import { FAQdata } from "@/data/FAQdata";
import Question from "./minute/Question";
import FAQ from "./FAQ";

export default function FAQs() {
  return (
    <section className="mx-auto container px-10 lg:px-20 py-10 md:py-20 bg-gray-100 dark:bg-[#0E1625]">
      <div className="text-center w-full md:pb-10 flex flex-col gap-2">
        <h2 className="font-bold text-4xl text-black dark:text-white">
          Frequently Asked Questions
        </h2>
        <span className="hyperce-sub-head text-gray-700 dark:text-gray-400">
          Can’t find it here? Check out our Help Centre
        </span>
      </div>

      <div>
        <dl>
          {FAQdata.map((faq, index) => (
            <FAQ faq={faq} key={index} />
          ))}
        </dl>
      </div>
    </section>
  );
}
