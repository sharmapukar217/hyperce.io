export default function Message() {
  return (
    <section className="mx-auto container flex lg:px-20 justify-center py-20">
      <div className="bg-[#ffffff] dark:bg-[#0E1625] w-[80%] flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 h-[50vh] bg-cover flex items-end  bg-[url('')]">
          <div className="h-full w-full object-center">
            <img
              width="100%"
              height="100%"
              loading="lazy"
              className="h-full object-cover w-full"
              src="/biplab.png"
              alt=""
            />
          </div>
          <div className="absolute flex flex-col text-left justify-end px-5 py-5 text-white">
            <span className="text-xl font-bold">Biplab Karki</span>
            <span className="text-md font-medium">
              Founder & CEO, Hyperce inc.
            </span>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col gap-3 justify-center px-10 py-[15%] lg:py-5">
          <h3 className="text-xl font-semibold text-[#4a7262] dark:text-[#AEF2D7]">
            Dream of time some tagline
          </h3>
          <span className="text-3xl font-bold text-black dark:text-white ">
            Message from our Founder
          </span>
          <span className="text-md text-black dark:text-gray-300">
            Take the opportunity to elevate your business to new heights with
            our futuristic ecommerce platforms and AI-powered ecommerce
            solutions. Take the opportunity to elevate your business to new
            heights with our futuristic ecommerce platforms and AI-powered
            ecommerce solutions.{" "}
          </span>
        </div>
      </div>
    </section>
  );
}