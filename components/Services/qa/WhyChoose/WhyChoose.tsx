import Card from '../../Reusables/Card';

export default function WhyChoose() {
  return (
    <section className="mx-auto container text-black dark:text-white mb-20 px-10">
      <div className="bg-gray-200 dark:bg-gradient-to-r from-[#101525] to-[#212642] md:px-10 rounded-3xl pt-16">
        <div className="flex items-center flex-col gap-5">
          <span className="text-2xl md:text-4xl font-bold text-center px-6">
            Why Choose Hyperce QA ?
          </span>
          <p className="w-3/4 text-base md:text-xl text-center">
            Boost your software's potential with Hyperce QA - the go-to solution
            for thorough and adaptable testing services. Rely on our robust
            security measures, seamless scalability, and top-notch performance
            testing to ensure your software excels in the digital realm. Count
            on our dedicated support and hassle-free management to strengthen
            your software and drive your business toward unmatched success.
            Trust Hyperce QA for reliable software excellence and accelerated
            growth.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-20 w-fit xl:grid-cols-4 md:px-20 py-10">
            {[
              { num: '10x', des: 'Efficiency' },
              { num: '10x', des: 'Faster Building' },
              { num: '50x', des: 'Customer Satisfaction' },
              { num: '20x', des: 'Growth Acceleration' }
            ].map((each) => (
              <Card num={each.num} des={each.des} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
