import Link from 'next/link';
import { Suspense } from 'react';
import sanitizeHtml from 'sanitize-html';
import { ChevronsRight } from 'lucide-react';
import { gql, request } from 'graphql-request';

import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';
import { SearchCareerForm } from './SearchCareerForm';

type CarersResponse = {
  getCareers: {
    items: Array<{
      id: string;
      title: string;
      slug: string;
      level: string;
      mode: string;
      deadline: string;
      description: string;
      employmentType: string;
    }>;
  };
};

const ITEM_PER_PAGE = 5;

function parseDate(dateString = '') {
  let cleanedString = dateString.replace(/(\d+)(st|nd|rd|th)/, '$1');
  const hasTime = /\d{1,2}:\d{2}/.test(cleanedString);

  if (hasTime === false) cleanedString += ' 00:00';
  return new Date(cleanedString);
}

const getAllCareers = async =(opts?: { skip?: number; filter?: string; }) => {
  // TODO: Implement advance search filters
  const response = await request<CarersResponse>({
    url: 'https://admin.hyperce.io/admin-api',
    document: gql`
      query GetAllCareers($skip: Int, $filter: String) {
        getCareers(options: { skip: $skip, take: ${ITEM_PER_PAGE}, filterOperator: AND,
        filter: { title: { regex: $filter }, isActive: { eq: true } }
        }) {
          items {
            id
            title
            slug
            level
            mode
            deadline
            description
            employmentType
          }
        }
      }
    `,
    variables: opts
  });
  return response?.getCareers?.items;
};

type Career = Awaited<ReturnType<typeof getAllCareers>>[number];

function CareerList({ career }: { career: Career }) {
  const dateformatter = new Intl.DateTimeFormat('en-us', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  });
  const deadline = parseDate(career.deadline);

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
            <time dateTime={deadline.toString()}>
              {dateformatter.format(new Date(deadline))}
            </time>
            <div className="text-xs ml-auto capitalize space-x-1">
              {career.employmentType ? (
                <span>{career.employmentType}</span>
              ) : null}
              {career.mode ? <span>({career.mode})</span> : null}
            </div>
          </dd>
        </dl>

        <h3 className="text-base font-semibold tracking-tight text-slate-900 dark:text-slate-200 pt-8 lg:pt-0">
          {career.title}
          {career.level ? ` (${career.level})` : null}
        </h3>

        <div className="grid">
          <div
            className="mt-2 mb-4 prose prose-slate prose-a:relative prose-a:z-10 dark:prose-invert line-clamp-2 tracking-tight break-words"
            dangerouslySetInnerHTML={{
              __html: sanitizeHtml(career.description)
            }}
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
  searchParams?: { query?: string; page?: string };
};

// export const dynamic = 'force-dynamic'
export const fetchCache = 'force-no-store'

export default async function Page(props: PageProps) {
  const page = parseInt(props.searchParams?.page || '1');
  const careers = await getAllCareers({
    skip: ITEM_PER_PAGE * (page - 1),
    filter: props.searchParams?.query
  });

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
            <Suspense fallback="">
              <SearchCareerForm />
            </Suspense>
          </header>

          {careers.length ? (
            <div className="relative sm:pb-12 sm:ml-[calc(2rem+1px)] md:ml-[calc(3.5rem+1px)] lg:ml-[max(calc(14.5rem+1px),calc(100%-48rem))]">
              <div className="hidden absolute top-3 bottom-0 right-full mr-7 md:mr-[3.25rem] w-px bg-slate-200 dark:bg-slate-800 sm:block" />
              <div className="space-y-16">
                {careers.map((career) => (
                  <CareerList key={career.id} career={career} />
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
