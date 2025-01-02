import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';
import { jobList } from './data';
import Link from 'next/link';

export default function Page() {
  const date = new Date(2024, 5, 26); // even month starts from 0 ( LOL )

  return (
    <div className="fixed inset-0 select-none">
      <div
        className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-slate-900 bg-[size:6rem_4rem]
      bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)]
      dark:bg-[linear-gradient(to_right,rgb(30,41,59)_1px,transparent_1px),linear-gradient(to_bottom,rgb(30,41,59)_1px,transparent_1px)] overflow-auto
       "
      >
        <Navbar classNameName="!bg-transparent" />

        <div className="fixed -z-50 pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_40%,black)]"></div>
        <div className="container py-8 md:px-20 grid text-justify lg:justify-center">
          <div className="lg:text-center font-mono">
            <h1 className="text-xl md:text-3xl font-medium">
              Job Oppurtunities to excel your career.
            </h1>
          </div>
          <div className="flex gap-4 p-8 flex-wrap justify-center items-center">
            {jobList.map((job, index) => (
              <div
                className="max-w-sm bg-white border border-gray-200 rounded-3xl shadow-md p-4"
                key={index}
              >
                <div className="mb-4">
                  {/* <!-- Job Title --> */}
                  <h2 className="text-lg font-bold text-gray-800">
                    {job.title}
                  </h2>
                </div>

                {/* <!-- Job Description --> */}
                <p
                  className="text-sm text-gray-600"
                  dangerouslySetInnerHTML={{
                    __html: job.description.slice(0, 150) + '...'
                  }}
                />

                {/* <!-- Tags --> */}
                <div className="flex flex-wrap space-x-2 mt-4">
                  {job.tags.map((tag) => (
                    <span
                      className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full"
                      key={tag}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* <!-- Apply Button --> */}
                <div className="mt-6">
                  <Link href={`career/${job.slug}`}>
                    <button className="rounded-2xl w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium text-sm px-5 py-2.5 text-center">
                      Apply Now
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
