import Card from '@/components/Services/Reusables/Card';

export default function WhyChoose() {
  return (
    <section className="mx-auto container text-black dark:text-white mb-20 px-10">
      <div className="bg-gray-200 dark:bg-gradient-to-r from-[#101525] to-[#212642] md:px-10 rounded-3xl pt-16">
        <div className="flex items-center flex-col gap-5">
          <span className="text-2xl md:text-4xl font-bold text-center px-6">
            Why Choose Hyperce Devops ?
          </span>
          <p className="w-3/4 text-base md:text-xl text-center">
            Elevate your software development process with Hyperce DevOps - the
            ultimate solution for modernizing your development lifecycle.
            Benefit from our expertise in Continuous Integration, Continuous
            Deployment, and Infrastructure as Code to accelerate your software
            delivery. Trust in our commitment to collaboration and efficiency to
            drive your team towards unprecedented success. Choose Hyperce DevOps
            for a streamlined development process and accelerated growth.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-20 w-fit xl:grid-cols-4 md:px-20 py-10">
            {[
              { num: '10x', des: 'Development Speed' },
              { num: '10x', des: 'Reliability' },
              { num: '50x', des: 'Collaboration' },
              { num: '20x', des: 'Efficiency' }
            ].map((each, index) => (
              <Card key={index} num={each.num} des={each.des} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
