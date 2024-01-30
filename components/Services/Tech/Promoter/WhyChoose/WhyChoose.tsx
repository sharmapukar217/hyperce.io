import Card from '@/components/Services/Reusables/Card';

export default function WhyChoose() {
  return (
    <section className="mx-auto container text-black dark:text-white mb-20 px-10">
      <div className="bg-gray-200 dark:bg-gradient-to-r from-[#101525] to-[#212642] md:px-10 rounded-3xl pt-16">
        <div className="flex items-center flex-col gap-5">
          <span className="text-2xl md:text-4xl font-bold text-center px-6">
            Why Choose Hyperce Promoter ?
          </span>
          <p className="w-3/4 text-base md:text-xl text-center">
            We&apos;re not just matching you with influencers; we&apos;re
            crafting connections that are nothing short of perfection. Every
            promoter we choose is handpicked to harmonize seamlessly with your
            brand&apos;s melody. Ready to experience Promoter Marketing
            that&apos;s truly exceptional? Choose Hyperce, and let&apos;s take
            your eCommerce business to new heights. Your success story starts
            here!
          </p>
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-20 w-fit xl:grid-cols-4 md:px-20 py-10">
            {[
              { num: '30x', des: ' Customer Engagement' },
              { num: '10x', des: 'Conversion Rates' },
              { num: '50x', des: 'Brand Awareness' },
              { num: '20x', des: 'Visibility and Traffic' }
            ].map((each, index: number) => (
              <Card key={index} num={each.num} des={each.des} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
