import Card from '../../Reusables/Card';

export default function WhyChoose() {
  return (
    <section className="mx-auto container text-black dark:text-white mb-20 px-10">
      <div className="bg-gray-200 dark:bg-gradient-to-r from-[#101525] to-[#212642] md:px-10 rounded-3xl pt-16">
        <div className="flex items-center flex-col gap-5">
          <span className="text-2xl md:text-4xl font-bold text-center px-6">
            Why Choose Hyperce Hosting ?
          </span>
          <p className="w-3/4 text-base md:text-xl text-center">
            Boost your online presence with Hyperce Hosting - your trusted
            partner for adaptable and affordable hosting solutions. Count on our
            robust security, seamless scalability, and top-notch performance to
            keep your business ahead in the digital domain. Rely on our
            hassle-free management and dedicated support to empower your brand
            in the evolving world of online commerce. Trust Hyperce Hosting for
            sustained digital success and business growth.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-20 w-fit xl:grid-cols-4 md:px-20 py-10">
            {[
              { num: '30x', des: 'Customer Retention' },
              { num: '10x', des: 'Sales Improvement' },
              { num: '50x', des: 'Productivity Increase' },
              { num: '20x', des: 'ROI Improvement' }
            ].map((each) => (
              <Card num={each.num} des={each.des} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
