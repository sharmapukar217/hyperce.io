import Card from '@/components/Services/Reusables/Card';

export default function WhyChoose() {
  return (
    <section className="mx-auto container text-black dark:text-white mb-20 px-10">
      <div className="bg-gray-200 dark:bg-gradient-to-r from-[#101525] to-[#212642] md:px-10 rounded-3xl pt-16">
        <div className="flex items-center flex-col gap-5">
          <span className="text-2xl md:text-4xl font-bold text-center px-6">
            Why Choose Hyperce Appify ?
          </span>
          <p className="w-3/4 text-base md:text-xl text-center">
            In the era of app development, Hyperce Appify stands as a catalyst
            for innovation, accessibility, and limitless possibilities. Choose
            us to walk on a journey where app creation is not just a task but a
            creative expression. With Hyperce Appify, your app isn't just a
            product; it's a testament to your vision, effortlessly brought to
            life. Embrace the future of app development with Hyperce Appify,
            where your ideas take flight.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-20 w-fit xl:grid-cols-4 md:px-20 py-10">
            {[
              { num: '10x', des: 'Swift Development' },
              { num: '10x', des: 'Unmatched Reliability' },
              { num: '50x', des: 'Seamless Collaboration' },
              { num: '20x', des: 'Optimal Efficiency' }
            ].map((each) => (
              <Card num={each.num} des={each.des} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
