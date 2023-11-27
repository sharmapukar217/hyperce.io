import AnimateWrapper from "@/components/AnimateWrapper/AnimateWrapper";

export default function Responsibility() {
  return (
    <AnimateWrapper>
      <section
        data-aos="fade-up"
        className=" text-black dark:text-white flex justify-center py-10 md:py-20 text-center px-10 md:px-20 mx-auto container"
      >
        <div className="flex flex-col gap-5 items-center">
          <div className="icon flex justify-center">
            <svg
              width="70px"
              height="70px"
              viewBox="-0.5 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.92 7.96997C18.9781 7.58275 19.0048 7.19156 19 6.80005C17.8347 5.58901 16.437 4.62559 14.8905 3.96753C13.344 3.30947 11.6806 2.97021 10 2.97021C8.31935 2.97021 6.65602 3.30947 5.10956 3.96753C3.5631 4.62559 2.16532 5.58901 1 6.80005C1 20.86 10 22.97 10 22.97C10.6656 22.6883 11.3077 22.3539 11.92 21.97"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M23 13.97H13"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21 10.9199H15C13.8954 10.9199 13 11.8154 13 12.9199V17.9199C13 19.0245 13.8954 19.9199 15 19.9199H21C22.1046 19.9199 23 19.0245 23 17.9199V12.9199C23 11.8154 22.1046 10.9199 21 10.9199Z"
                stroke="#357D8A"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="text flex flex-col gap-5 items-center">
            <h2 className="text-3xl md:text-4xl font-extrabold">
              Your Success is Our Priority
            </h2>
            <p className="hyperce-sub-head text-gray-500 dark:text-gray-400 w-2/3">
              At Hyperce, we are committed to your success. We go beyond
              providing solutions and become your strategic partner, working
              tirelessly to help you achieve your eCommerce goals. Your growth
              is our responsibility.
            </p>
          </div>
          <div className=" flex justify-center">
            <a href="#solutions">
              <button
                type="button"
                className="flex items-center gap-3 border-[1px] border-[#357D8A] hover:text-[#357D8A] transition-all duration-150 px-7 py-3 rounded-xl"
              >
                <div className="icon">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 42 42"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M37.7232 12.5947C37.5238 11.8539 37.1333 11.1783 36.5908 10.6358C36.0482 10.0933 35.3727 9.70277 34.6318 9.50337C32.6071 8.72112 12.9913 8.33787 7.30034 9.52525C6.55934 9.72472 5.88376 10.1154 5.34122 10.6581C4.79868 11.2007 4.40823 11.8764 4.20896 12.6175C3.29459 16.6276 3.22546 25.2971 4.23171 29.3974C4.43111 30.1383 4.82162 30.8138 5.36415 31.3563C5.90668 31.8988 6.5822 32.2893 7.32309 32.4887C11.3332 33.4119 30.3977 33.5414 34.6546 32.4887C35.3955 32.2893 36.071 31.8988 36.6135 31.3563C37.1561 30.8138 37.5466 30.1383 37.746 29.3974C38.7207 25.0285 38.7898 16.8962 37.7232 12.5947Z"
                      stroke="currentColor"
                    />
                    <path
                      d="M26.7466 20.9956L17.6055 15.7535V26.2377L26.7466 20.9956Z"
                      stroke="currentColor"
                    />
                  </svg>
                </div>
                <span className="font-semibold uppercase">Our Solutions</span>
              </button>
            </a>
          </div>
        </div>
      </section>
    </AnimateWrapper>
  );
}
