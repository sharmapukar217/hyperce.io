import Card from '@/components/Services/Reusables/Card';

export default function WhyChoose() {
  return (
    <section className="mx-auto container text-black dark:text-white mb-20 px-10">
      <div className="bg-gray-200 dark:bg-gradient-to-r from-[#101525] to-[#212642] md:px-10 rounded-3xl pt-16">
        <div className="flex items-center flex-col gap-5">
          <span className="text-2xl md:text-4xl font-bold text-center px-6">
            Why Choose Hyperce Acquire ?
          </span>
          <p className="w-3/4 text-base md:text-xl text-center">
            Elevate your e-commerce business with Hyperce BL, the ultimate
            solution for comprehensive legal support. Benefit from our expertise
            in Legal Compliance, Contractual Matters, and Business Consulting to
            safeguard your operations and foster sustained success. Trust in our
            commitment to legal clarity, compliance, and strategic positioning
            to navigate the complexities of the digital marketplace. Choose
            Hyperce BL for a solid legal foundation and strategic business
            insights.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-20 w-fit xl:grid-cols-4 md:px-20 py-10">
            {[
              { num: '10x', des: 'Legal Soundnes' },
              { num: '10x', des: 'Compliance' },
              { num: '50x', des: 'Customized Solutions' },
              { num: '20x', des: 'Strategic Positioning' }
            ].map((each) => (
              <Card num={each.num} des={each.des} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
