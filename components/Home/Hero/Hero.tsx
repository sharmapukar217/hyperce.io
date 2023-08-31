import Typewriter from "./minute/Typerwriter";
  
export default function Hero() {
  return (
    <div className="bg-white dark:bg-slate-900 text-black dark:text-white">
      <div className="bg-gradient-to-b from-green-600/[.1] via-transparent">
        <div className="max-w-[85rem] sm:px-6 lg:px-8 py-24 space-y-8 container mx-auto pb-20 px-10">
          <div className="flex justify-center">
            <a
              className="group inline-block bg-white/[.05] hover:bg-white/[.1] border border-white/[.05] p-1 pl-4 rounded-full shadow-md"
              href="#solutions"
            >
              <p className="mr-2 inline-block text-sm">Checkout our Services</p>
              <span className="group-hover:bg-white/[.1] py-2 px-3 inline-flex justify-center items-center gap-x-2 rounded-full bg-white/[.075] font-semibold text-sm">
                <svg
                  className="w-2.5 h-2.5"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
              </span>
            </a>
          </div>

          <div className="max-w-3xl text-center mx-auto">
            <h1 className="block font-medium text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              Your Ecommerce Suite Partner
            </h1>
          </div>

          <div className="max-w-3xl text-center mx-auto">
            <p className="text-lg ">
              <Typewriter
                text="Take the opportunity to elevate your business to new heights with our
          futuristic ecommerce platforms and AI-powered ecommerce solutions."
              />
            </p>
          </div>

          <div className="text-center flex gap-5 justify-center">
            <a
              className="text-white inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-green-800 to-[#357D8A] shadow-lg shadow-transparent hover:shadow-green-700/50 border border-transparent text-sm font-medium rounded-full py-3 px-6"
              href="#"
            >
              Learn More
              <svg
                className="w-2.5 h-2.5"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </a>
            <a
              className=" inline-flex justify-center items-center gap-x-3 text-center shadow-lg shadow-transparent hover:shadow-gray-700/50 border-2  text-sm  font-medium rounded-full py-3 px-6 "
              href="#contact"
            >
              Contact Us
              <svg
                className="w-2.5 h-2.5"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
