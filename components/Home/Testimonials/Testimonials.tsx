import EachTest from "./EachTest";

export default function Testimonials() {
  return (
    <section className="container px-10 mx-auto py-20 flex flex-col justify-center">
      <div className="text-center w-full md:pb-10 flex flex-col gap-2">
        <h2 className="text-4xl text-black dark:text-white font-bold">
          Testimonials
        </h2>
        <span className="text-sm text-black dark:text-white">
          What do our customers say?
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 pt-10">
        <EachTest />
        <EachTest />
        <EachTest />
        <EachTest />
      </div>
    </section>
  );
}