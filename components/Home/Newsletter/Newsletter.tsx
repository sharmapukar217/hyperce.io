export default function Newsletter() {
  return (
    <section className="">
      <div>
        <img
          width="100%"
          height="100%"
          loading="lazy"
          src="/newsletter.png"
          alt=""
        />
      </div>

      <div className="mx-auto container px-10 md:px-20 flex flex-col lg:flex-row pb-10 -mt-[10%]">
        <div className="xl:w-1/2 text-center md:text-left w-full left px-5 md:px-20 py-10 md:py-20 bg-[#f6f6f6] text-black dark:bg-[#0F1023] dark:text-white  rounded-l-xl">
          <div className="flex flex-col w-full md:w-[80%] gap-5">
            <div className="text-2xl md:text-3xl font-bold">
              Subscribe to our Weekly Newsletter
            </div>
            <div className="text-gray-700 dark:text-gray-400">
              Stay update with all new offers and services we provide and more
              details{" "}
            </div>
            <div className="flex flex-col gap-2 md:flex-row md:gap-0 w-full items-center md:border-[2px] rounded-md border-[#357D8A]">
              <input
                className="w-full h-10 bg-transparent px-5 py-6 focus:outline-none"
                type="text"
                name=""
                placeholder="hi@a.com"
                id=""
              />
              <button
                aria-aria-label="subscribe-newsletter"
                className="-mr-[1%] text-white dark:text0black w-fit flex justify-center rounded-md items-center px-5 py-3 bg-[#357D8A]"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="xl:w-1/2 w-full min-h-[200px] bg-white right lg:rounded-r-xl bg-[url('/news-back.png')] bg-cover">
          {/* <img src="/news-back.png" alt="" className="" /> */}
        </div>
      </div>
    </section>
  );
}
