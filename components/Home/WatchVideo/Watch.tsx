export default function Watch() {
  return (
    <section className="container mx-auto px-20 py-10">
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
        <div className="w-full mx-auto lg:mb-20 rounded-2xl ">
          <div className="relative flex justify-center ">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/QUNrBEhvXWQ?si=UpUZG9Dgzxxj8tRR"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
