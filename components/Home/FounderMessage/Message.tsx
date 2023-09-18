export default function Message() {
  return (
    <section className="mx-auto container flex px-5 md:px-20 justify-center py-10 md:py-20">
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
        <div className="w-full lg:w-1/2 flex flex-col gap-3 justify-center md:px-10 pt-10 md:py-[15%] lg:py-5">
          <h3 className="text-xl font-semibold text-[#4a7262] dark:text-[#AEF2D7]">
            Embrace the Future of E-commerce
          </h3>
          <span className="text-3xl font-bold text-black dark:text-white ">
            Message from our Founder
          </span>
          <span className="text-md text-black dark:text-gray-300">
            As the founder of Hyperce, I am driven by a vision of a dynamic
            e-commerce landscape where businesses thrive, innovate, and succeed.
            We are here to empower your journey with cutting-edge e-commerce
            platforms and AI-powered solutions. Together, we'll shape the future
            of online commerce. Welcome to the Hyperce family!
          </span>
        </div>
      </div>
    </section>
  );
}
