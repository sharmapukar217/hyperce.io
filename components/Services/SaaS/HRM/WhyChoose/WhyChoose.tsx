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
            In the era of workforce management, Hyperce HRM stands as a catalyst
            for innovation, accessibility, and limitless possibilities. Choose
            us to walk on a journey where HR management is not just a task but a
            strategic expression. With Hyperce HRM, your HR processes
            aren&apos;t just procedures; they&apos;re a testament to your
            organizational vision, effortlessly brought to life. Embrace the
            future of HR management with Hyperce HRM, where your workforce
            management ideas take flight.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-20 w-fit xl:grid-cols-4 md:px-20 py-10">
            {[
              {
                num: '10x',
                des: 'Efficient Workforce Management'
              },
              { num: '10x', des: 'Seamless Team Collaboration' },
              { num: '50x', des: 'Unmatched HR Process Reliability' },
              { num: '20x', des: 'Optimal HR Process Efficiency' }
            ].map((each, index) => (
              <Card key={index} num={each.num} des={each.des} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
