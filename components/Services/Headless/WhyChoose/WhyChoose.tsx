import Card from '../../Reusables/Card';

export default function WhyChoose() {
  return (
    <section className="mx-auto container text-black dark:text-white mb-20 px-10">
      <div className="bg-gray-200 dark:bg-gradient-to-r from-[#101525] to-[#212642] md:px-10 rounded-3xl pt-16">
        <div className="flex items-center flex-col gap-5">
          <span className="text-2xl md:text-4xl font-bold text-center px-6">
            Choose Hyperce Headless eCommerce
          </span>
          <p className="w-3/4 text-base md:text-xl text-center">
            Join us on this journey as we redefine the possibilities of online
            commerce, turning your vision into a head-turning reality.
            Experience headless magic, only at Hyperce - where we make the
            impossible, possible.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-20 w-fit xl:grid-cols-4 md:px-20 py-10">
            {[
              { num: '30x', des: 'Cost Efficiency' },
              { num: '10x', des: 'Server Efficiency' },
              { num: '50x', des: 'Speed Boost' },
              { num: '20x', des: 'Customer Retention' }
            ].map((each) => (
              <Card num={each.num} des={each.des} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
