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
            Elevate your e-commerce transaction experience with Hyperce Acquire.
            Benefit from our expertise in due diligence, negotiation support,
            and legal guidance, navigating the complexities of business
            transactions effortlessly. Our commitment to confidentiality is
            unwavering, employing secure channels and nondisclosure agreements
            to safeguard sensitive business information. Trust Hyperce Acquire
            for a holistic approach, supporting clients through Transition
            Planning, Post-Sale Support, and Continuous Communication, ensuring
            a seamless experience for all parties involved.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-20 w-fit xl:grid-cols-4 md:px-20 py-10">
            {[
              { num: '10x', des: 'Confidence Building' },
              { num: '10x', des: 'Transparent Transactions' },
              { num: '50x', des: 'Tailored Matchmaking' },
              { num: '20x', des: 'Seamless Transaction Experience' }
            ].map((each, index) => (
              <Card key={index} num={each.num} des={each.des} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
