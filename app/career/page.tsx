import Fuse from 'fuse.js';
import Link from 'next/link';
import { ChevronsRight } from 'lucide-react';

import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';
import { Career, getAllCareers } from '@/lib/careersUtils';

function CareerList({ career }: { career: Career }) {
  const dateformatter = new Intl.DateTimeFormat('en-us', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  });

  return (
    <article className="relative group">
      <div className="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl group-hover:bg-slate-50/70 dark:group-hover:bg-slate-800/50" />
      <svg
        viewBox="0 0 9 9"
        className="md:block absolute right-full mr-6 top-2 text-[#357D8A] md:mr-12 w-[calc(0.5rem+1px)] h-[calc(0.5rem+1px)] overflow-visible"
      >
        <circle
          cx="4.5"
          cy="4.5"
          r="4.5"
          strokeWidth="2"
          stroke="currentColor"
          className="fill-white dark:fill-slate-900"
        />
      </svg>

      <div className="relative">
        <dl className="lg:absolute left-0 top-0 lg:left-auto lg:right-full lg:mr-[calc(6.5rem+1px)]">
          <dd className="flex lg:flex-col items-center whitespace-nowrap text-sm leading-6 dark:text-slate-400 font-medium">
            <time dateTime={career.deadline.toString()}>
              {dateformatter.format(career.deadline)}
            </time>
            <div className="text-xs ml-auto capitalize space-x-1">
              {career.type ? <span>{career.type}</span> : null}
              {career.location ? <span>({career.location})</span> : null}
            </div>
          </dd>
        </dl>

        <h3 className="text-base font-semibold tracking-tight text-slate-900 dark:text-slate-200 pt-8 lg:pt-0">
          {career.title}
        </h3>

        <div className="grid">
          <div
            className="mt-2 mb-4 prose prose-slate prose-a:relative prose-a:z-10 dark:prose-invert line-clamp-2 tracking-tight break-words"
            dangerouslySetInnerHTML={{ __html: career.content }}
          />
        </div>
      </div>

      <Link
        href={`/career/${career.slug}`}
        className="flex items-center text-sm text-[#357D8A] font-medium"
      >
        <span className="relative">Read More</span>
        <ChevronsRight className="w-4 h-4 ms-1 mt-0.5 fill-[#357D8A]" />
      </Link>
    </article>
  );
}

type PageProps = {
  searchParams?: { query?: string };
};

export default async function Page(props: PageProps) {
  const query = props.searchParams?.query;
  const careers = await getAllCareers();

  const engine = new Fuse(careers, {
    useExtendedSearch: true,
    keys: ['title', 'type', 'location']
  });

  const list = query ? engine.search(query) : careers.map((item) => ({ item }));

  return (
    <div className="fixed inset-0 select-none h-full max-w-screen overflow-hidden bg-white dark:bg-slate-900">
      <div className="h-full w-full overflow-auto flex flex-col">
        <Navbar className="sticky top-0 bg-white dark:bg-slate-900 border-b dark:border-slate-700 z-[100]" />
        <main className="max-w-[52rem] mx-auto px-4 pb-28 sm:px-6 md:px-8 xl:px-12 lg:max-w-6xl">
          <header className="py-16 sm:text-center">
            <h1 className="mb-4 text-3xl sm:text-4xl tracking-tight text-slate-900 font-extrabold dark:text-slate-200">
              Latest Career Updates
            </h1>
            <p className="text-lg text-slate-700 dark:text-slate-400">
              All the latest job vacancies and internships, straight from the
              team.
            </p>
            <form
              method="get"
              className="max-w-full md:max-w-md sm:mx-auto inline-flex w-full my-8 gap-3"
            >
              <input
                name="query"
                defaultValue={query}
                className="appearance-none  rounded-[0.5rem] ring-1 ring-slate-900/5 dark:ring-slate-700 leading-5 sm:text-sm border border-transparent px-4 py-2 placeholder:text-slate-400 block w-full text-slate-900 dark:text-slate-400 focus:text-black dark:focus:text-white focus:outline-none focus:ring-2 focus:!ring-[#357D8A] bg-white dark:bg-slate-700/20"
                placeholder="Search for the jobs or internships..."
              />

              <button
                type="submit"
                className="bg-[#357D8A] flex-auto shadow text-white rounded-[0.5rem] text-sm border-y border-transparent py-2 font-semibold px-3 hover:bg-[#357D8A]/85 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#357D8A] dark:focus:ring-offset-slate-900 dark:focus:ring-[#357D8A]"
              >
                Search
              </button>
            </form>
          </header>

          {list.length ? (
            <div className="relative sm:pb-12 sm:ml-[calc(2rem+1px)] md:ml-[calc(3.5rem+1px)] lg:ml-[max(calc(14.5rem+1px),calc(100%-48rem))]">
              <div className="hidden absolute top-3 bottom-0 right-full mr-7 md:mr-[3.25rem] w-px bg-slate-200 dark:bg-slate-800 sm:block" />
              <div className="space-y-16">
                {list.map((l, idx) => (
                  <CareerList key={idx} career={l.item} />
                ))}
              </div>
            </div>
          ) : (
            <h3 className="text-slate-700 dark:text-slate-200 text-2xl font-medium mx-auto">
              No jobs/internship available to show...
            </h3>
          )}
        </main>
        <Footer />
      </div>
    </div>
  );
}
