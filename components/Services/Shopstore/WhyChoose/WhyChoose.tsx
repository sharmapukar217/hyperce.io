import Card from "./Card";

export default function WhyChoose() {
  return (
    <section className="mx-auto container text-black dark:text-white mb-20 px-10">
      <div className="bg-gray-200 dark:bg-gradient-to-r from-[#101525] to-[#212642] md:px-10 rounded-3xl pt-16">
        <div className="flex items-center flex-col gap-5">
          <span className="text-2xl md:text-4xl font-bold text-center px-6">
            Why Choose Hyperce Shopstore ?
          </span>
          <p className="w-3/4 text-base md:text-xl text-center">
            Our mission isn't just about setting up shop; it's about crafting an
            online presence that leaves an indelible mark in the ever-evolving
            e-commerce world. With Hyperce ShopStore, you're not just opening an
            online store; you're launching a captivating digital realm,
            unlocking opportunities, and embracing excellence in the dynamic
            e-commerce landscape. Your success is our success, and we're here to
            make your e-commerce dreams a resplendent reality.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-20 w-fit xl:grid-cols-4 md:px-20 py-10">
            {[
              { num: "10x", des: "Crafted Speed" },
              { num: "10x", des: "Unwavering Reliability" },
              { num: "50x", des: "Synchronized Collaboration" },
              { num: "20x", des: "Enhanced Efficiency" },
            ].map((each) => (
              <Card num={each.num} des={each.des} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
