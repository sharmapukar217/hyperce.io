import Footer from '@/components/Footer/Footer';
import { jobList } from '../data';
import Navbar from '@/components/Navbar/Navbar';

export default async function JobDetail({
  params
}: {
  params: Promise<{ careerSlug: string }>;
}) {
  const careerSlug = (await params).careerSlug;
  const job = jobList.find((job) => job.slug === careerSlug);

  if (!job) {
    return <div className="p-4">Job not found!</div>;
  }

  return (
    <div className="fixed inset-0 select-none">
      <div
        className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-slate-900 bg-[size:6rem_4rem]
          bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)]
          dark:bg-[linear-gradient(to_right,rgb(30,41,59)_1px,transparent_1px),linear-gradient(to_bottom,rgb(30,41,59)_1px,transparent_1px)] overflow-auto
           "
      >
        <Navbar className="!bg-transparent" />

        <div className="fixed -z-50 pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_40%,black)]"></div>

        <div className="container py-8 md:px-20 grid text-justify lg:justify-center">
          <div className="p-4">
            <h1 className="text-3xl font-bold">{job.title}</h1>
            <p className="text-xl text-white">{job.company}</p>
            <div
              className="mt-4 text-white w-[70%]"
              dangerouslySetInnerHTML={{ __html: job.description }}
            ></div>
            <h2 className="mt-6 text-2xl font-bold">Requirements</h2>
            <div
              className="mt-4 text-white"
              dangerouslySetInnerHTML={{ __html: job.jobRequirements }}
            ></div>
            <p className="mt-4 text-white">
              <strong>Salary Range:</strong> {job.salaryRange}
            </p>
            <p className="mt-2 text-white">
              <strong>Vacancy Openings:</strong> {job.vacancyOpenings}
            </p>
            <p className="mt-2 text-white">
              <strong>Location:</strong> {job.location} ({job.locationType})
            </p>
            <p className="mt-2 text-white">
              <strong>Deadline:</strong> {job.deadline}
            </p>
            <p className="mt-4 text-white">
              <strong>Benefits:</strong> {job.benefits.join(', ')}
            </p>
          </div>
          {/* content here */}
        </div>

        <Footer />
      </div>
    </div>
  );
}
