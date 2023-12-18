import Navbar from '@/components/Navbar/Navbar';

import { EachPlatform } from '@/components/Platforms/Platforms';

import {
  showcaseNonTechSolutions,
  showcaseSaasSolutions,
  showcaseTechSolutions
} from '@/data/Solutions';

const PlatformsData = [
  {
    platformName: 'Hyperce Tech',
    platformProducts: showcaseTechSolutions
  },
  {
    platformName: 'Hyperce Non-Tech',
    platformProducts: showcaseNonTechSolutions
  },
  {
    platformName: 'Hyperce SaaS',
    platformProducts: showcaseSaasSolutions
  }
];

export default function PlatformsPage() {
  return (
    <>
      <div className=" bg-white dark:bg-slate-900 text-black dark:text-white">
        <main className="flex flex-col items-center">
          <div className="h-fit w-full">
            <Navbar />
          </div>
          <section className="w-full">
            <span className="text-5xl font-bold py-10 text-center flex justify-center ">
              Platforms
            </span>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 w-full px-20">
              {PlatformsData.map((platform, index) => (
                <div key={index}>
                  <EachPlatform platform={platform} />
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
