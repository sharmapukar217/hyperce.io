import Card from "../../Reusables/Card";

export default function WhyChoose() {
  return (
    <section className="mx-auto container text-black dark:text-white mb-20 px-10">
      <div className="bg-gray-200 dark:bg-gradient-to-r from-[#101525] to-[#212642] md:px-10 rounded-3xl pt-16">
        <div className="flex items-center flex-col gap-5">
          <span className="text-2xl md:text-4xl font-bold text-center px-6">
            Why Choose Hyperce Shopstore ?
          </span>
          <p className="w-3/4 text-base md:text-xl text-center">
            In the ever-evolving symphony of e-commerce, we understand that your
            digital storefront is more than just a collection of products; it's
            an immersive experience for your customers.
            <br />
            <br /> Thus, our e-commerce development solutions extend beyond the
            technicalities to encompass the artistry of design. Whether it's the
            creation of a new store or the migration between platforms, our
            custom storefront designs are not just visually appealing; they
            encapsulate the essence of your brand, leaving an indelible
            impression on every visitor, regardless of the device they choose.
            Choose Hyperce ShopStore for a transformative e-commerce
            experience—a seamless blend of technology, design, and strategy.
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
