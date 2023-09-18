import { WhyChoose } from "@/data/WhyChoose";

export default function CardsSection() {
  return (
    <section className="container mx-auto px-10 py-10 md:py-20 text-black dark:text-white">
      <div className="">
        <div className="grid grid-cols-1 gap-y-8  lg:items-center lg:gap-x-16">
          <div className="mx-auto text-center flex flex-col items-center lg:text-left lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
            <h2 className="text-4xl font-bold w-fit">Why Choose Us?</h2>

            <p className="mt-4 text-gray-600 w-3/5 text-center   dark:text-gray-200 text-base">
              At Hyperce, we are committed to providing exceptional solutions
              for your business. Our core values set us apart and drive our
              success. Choose us because...
            </p>

            <a
              href="#contact"
              className="mt-8 inline-block rounded-full w-fit bg-[#357D8A] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#2d4d53] hover:scale-[110%] active:scale-[95%]"
            >
              Get Started Today
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {WhyChoose.map((feature) => (
              <a
                key={WhyChoose.indexOf(feature)}
                className="block rounded-xl border border-gray-100 dark:border-gray-500 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                href="#faq"
              >
                <span className="inline-block rounded-lg text-black border-2 dark:text-white p-3">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    ></path>
                  </svg>
                </span>

                <h2 className="mt-2 font-bold text text-black dark:text-white">
                  {feature.title}
                </h2>

                <p className="hidden sm:mt-1 sm:block sm:text-sm">
                  {feature.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
