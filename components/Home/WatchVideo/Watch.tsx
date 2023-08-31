export default function Watch() {
  return (
    <section className="container mx-auto px-10 py-10">
      <div className="flex w-full flex-col items-center justify-center text-center">
        <div className="text-sm font-bold tracking-wider text-[#357D8A] uppercase">
          Watch a video
        </div>
        <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
          Lorem ipsum dolor sit amet.
        </h2>
        <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ea
          dolore minus aut magni unde sint repellat dolor magnam praesentium?
        </p>
      </div>
      <div className="container p-8 mx-auto xl:px-0 ">
        <div className="w-full max-w-4xl mx-auto overflow-hidden lg:mb-20 rounded-2xl ">
          <div className="relative flex justify-center">
            <iframe
              width="700"
              height="400"
              src="https://www.youtube.com/embed/5YJZy5ZOuG8?si=0TZpZxnTsF65BhCI"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
