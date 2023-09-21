export default function Watch() {
  return (
    <section id="why-hyperce" className="container mx-auto px-10 md:px-20 py-10 md:py-20 flex flex-col lg:flex-row text-left">
      <div className="flex w-full flex-col justify-center items-center md:items-start">
        <div className="hyperce-head-sup tracking-wider text-[#357D8A] uppercase">
          Watch a video
        </div>
        <h2 className="hyperce-head-xl text-4xl text-center leading-snug tracking-tight text-gray-800 lg:leading-tight dark:text-white">
          Why Hyperce?
        </h2>
        <p className="py-4 hyperce-sub-head leading-normal text-gray-700 w-4/5 dark:text-gray-400">
          Hyperce revolutionizes eCommerce with AI-driven solutions, elevating
          online businesses to new heights. Our dedication to innovation,
          efficiency, and tailored support ensures your success in the dynamic
          world of online retail.
        </p>
        <div className="text-white mt-4">
          <a href="https://www.youtube.com/watch?v=EQ5Uehjyg8M" target="_blank">
            <button
              type="button"
              className="flex items-center gap-3 text-black dark:text-white border-[1px] border-[#357D8A] hover:text-[#357D8A] transition-all duration-150 px-5 py-2 rounded-xl"
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
              <span className="font-semibold">WATCH VIDEO</span>
            </button>
          </a>
        </div>
      </div>
      <div className="container p-8 mx-auto xl:px-0 flex items-center">
        <div className="w-full mx-auto rounded-2xl">
          <div className="relative flex justify-center">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/EQ5Uehjyg8M?si=04-AvBkeqeAajPVx"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
