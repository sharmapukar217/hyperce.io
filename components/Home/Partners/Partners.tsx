import Link from 'next/link';
import { HypercePartners } from '@/data/Partners';

export default function Partners() {
  return (
    <section className="mx-auto container px-10 lg:px-20 py-12 md:py-16">
      <h2 className="text-3xl md:text-4xl font-bold dark:text-white text-center">
        Our Partners
      </h2>
      <div className="flex mt-5 justify-center px-10 mb-10">
        <span className="hyperce-sub-head text-gray-700 dark:text-gray-400 w-full lg:w-2/3 text-center">
          Partners are the driving force behind our success, as they contribute
          their expertise, resources, and collaboration to help us achieve our
          goals and fulfill our mission.
        </span>
      </div>

      <div className="mt-10 logos flex gap-8 md:gap-20 flex-wrap justify-center items-center text-black dark:text-white">
        {HypercePartners.map((each, index) => (
          <Link
            key={index}
            href={each.href}
            target="_blank"
            className="flex justify-center"
          >
            <img
              className="w-14 md:w-20 cursor-pointer transition-all duration-300 invert-[10%] hover:invert-0"
              src={each.imageSrc}
              alt=""
            />
          </Link>
        ))}
      </div>
    </section>
  );
}
