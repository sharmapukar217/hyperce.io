import EachTest from "./EachTest";

export default function Testimonials() {
  return (
    <section className="container px-10 md:px-20 mx-auto py-10 mt-10 flex flex-col justify-center border-[1px] border-[#64748B] rounded-2xl">
      <div className="text-center w-full md:pb-10 flex flex-col gap-2">
        <h2 className="text-4xl text-black dark:text-white font-bold">
          Testimonials
        </h2>
        <span className="text-lg text-black dark:text-white">
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
