import Navbar from '@/components/Navbar/Navbar';
import {
  allNonTechServices,
  allSaasSolutions,
  allTechServices
} from '@/data/Solutions';
import Image from 'next/image';

export default function SaasPage() {
  return (
    <section>
      <Navbar />
      <div className="mt-16 text-center mx-auto">
        <h1 className="block font-bold text-gray-800 text-2xl md:text-4xl lg:text-5xl dark:text-gray-200">
          Our SaaS Solutions
        </h1>
        <div className="flex flex-wrap w-full md:space-y-8 max-w-[70vw] my-8 mx-auto justify-center mt-5">
          {allSaasSolutions.map((service, index) => (
            <ServiceCard
              title={service.title}
              key={index}
              description={service.description}
              icon={service.icon}
              href={service.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  title,
  description,
  icon,
  href
}: {
  title: string;
  description: string;
  icon: {
    dark: string;
    light: string;
  };
  href: string;
}) {
  return (
    <div className="p-4 md:w-1/2 lg:w-1/3 flex flex-col text-center items-center justify-center mt-8">
      <div className="flex-start aspect-square inline-flex items-center justify-center rounded-full mb-5 flex-shrink-0 p-3">
        {icon ? (
          <div>
            <div className="hidden dark:block">
              <Image height={80} width={80} src={icon.dark} alt="" />
            </div>
            <div className="dark:hidden">
              <Image height={80} width={80} src={icon.light} alt="" />
            </div>
          </div>
        ) : (
          <div className="h-[40px] w-[40px]"></div>
        )}
      </div>
      <div className="flex-end">
        <h2 className="title-font mb-3 font-bold text-2xl">{title}</h2>
        <p className="leading-relaxed text-base">{description}</p>
        <a href={href} className="relative inline-block text-lg group">
          <span className="relative z-10 block px-5 py-2 overflow-hidden font-medium b leading-tight text-white transition-colors duration-300 ease-out border-2 border-[#357D8A] rounded-full mt-3">
            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-[#357D8A]"></span>
            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
            <span className="relative text-base">Learn More</span>
          </span>
          <span
            className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear rounded-lg group-hover:mb-0 group-hover:mr-0"
            data-rounded="rounded-lg"
          ></span>
        </a>
      </div>
    </div>
  );
}
