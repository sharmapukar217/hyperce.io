import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MapPin, ChevronLeft, Users, BriefcaseBusiness } from 'lucide-react';

import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';
import { ApplyCareerModal } from './ApplyCareerModal';
import { getCareersBySlug, getCareersSlugs } from '@/lib/careersUtils';

type JobDetailProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getCareersSlugs();
}

export default async function JobDetail({ params }: JobDetailProps) {
  const career = await getCareersBySlug((await params).slug);

  if (!career) return notFound();

  const canApply = career.deadline.getTime() >= new Date().getTime();

  const dateFormatter = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZoneName: 'longGeneric',
    hour12: true
  });

  return (
    <div className="fixed inset-0 bg-white dark:bg-slate-900 select-none overflow-hidden flex h-full w-full">
      <div className="min-h-screen w-full overflow-auto flex flex-col bg-white dark:bg-slate-900">
        <Navbar className="sticky top-0 bg-white dark:bg-slate-900 border-b dark:border-slate-700 z-[100]" />

        <div className="container my-8">
          <Link
            href="/career"
            className="inline-flex items-center justify-start gap-1 text-slate-700 dark:text-slate-400 hover:text-[#357D8A] dark:hover:text-[#357D8A] transition-colors text-sm font-medium"
          >
            <ChevronLeft className="w-4 h-4" />
            Go Back
          </Link>
        </div>

        <div className="container grid grid-cols-1 items-start border-slate-950/10 dark:border-white/20 xl:grid-cols-[34rem_minmax(0,1fr)]">
          {/* left side   */}
          <div className="relative top-0 border-b border-slate-950/10 px-8 pb-12 pt-8 dark:border-white/20 sm:border-x sm:px-12 sm:py-16 xl:sticky xl:top-[8rem] border-t xl:border-r-0">
            <span className="absolute from-slate-950/10 to-transparent dark:from-white/20 -left-px top-[-33px] h-8 w-px bg-gradient-to-t"></span>
            <span className="absolute from-slate-950/10 to-transparent dark:from-white/20 -right-px top-[-33px] h-8 w-px bg-gradient-to-t"></span>
            <span className="absolute from-slate-950/10 to-transparent dark:from-white/20 -left-px bottom-[-33px] h-8 w-px bg-gradient-to-b "></span>
            <span className="absolute from-slate-950/10 to-transparent dark:from-white/20 -top-px left-[-33px] h-px w-8 bg-gradient-to-l"></span>

            <span className="absolute from-slate-950/10 to-transparent dark:from-white/20 -top-px right-[-33px] h-px w-8 bg-gradient-to-r hidden md:flex"></span>
            <span className="absolute from-slate-950/10 to-transparent dark:from-white/20 -bottom-px left-[-33px] h-px w-8 bg-gradient-to-l"></span>
            <span className="absolute from-slate-950/10 to-transparent dark:from-white/20 -bottom-px right-[-33px] h-px w-8 bg-gradient-to-r hidden md:flex"></span>

            <div className="absolute inset-x-0 -bottom-2 flex h-2 justify-center overflow-hidden">
              <div className="-mt-px flex h-[2px] w-full max-w-sm">
                <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#357D8A_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(126,34,206,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
              </div>
            </div>

            {canApply && (
              <p className="text-sm font-semibold leading-6 text-[#357D8A]">
                We’re hiring
              </p>
            )}
            <h1 className="mt-2 text-[length:clamp(1rem,7vw,3.5rem)] font-semibold leading-none tracking-tighter text-black dark:text-white xl:text-6xl/none">
              {career.title}
            </h1>
            <dl className="mt-4 flex flex-wrap  gap-x-8 gap-y-4 text-sm/7 sm:mt-8">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <dt className="sr-only">Location</dt>
                <dd className="text-slate-700 dark:text-slate-400 font-medium capitalize">
                  {career.location || 'Unknown'}
                </dd>
              </div>

              {career.totalVacancies ? (
                <>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <dt className="sr-only">Total Vacancies</dt>
                    <dd className="text-slate-700 dark:text-slate-400 font-medium capitalize">
                      {career.totalVacancies}{' '}
                      {career.totalVacancies > 1 ? 'vacancies' : 'vacancy.'}
                    </dd>
                  </div>
                </>
              ) : null}

              {career.type ? (
                <>
                  <div className="flex items-center gap-2">
                    <BriefcaseBusiness className="w-4 h-4" />
                    <dt className="sr-only">Job Type</dt>
                    <dd className="text-slate-700 dark:text-slate-400 font-medium capitalize">
                      {career.type}
                    </dd>
                  </div>
                </>
              ) : null}
            </dl>
            <p className="mt-7">
              <ApplyCareerModal canApply={canApply} />
            </p>
            <p className="mt-7 text-sm/7 text-slate-500">
              {canApply ? 'Closes on' : 'Closed at'}&nbsp;
              <time dateTime={career.deadline.toString()}>
                {dateFormatter.format(career.deadline)}
              </time>
            </p>
          </div>

          <div className="relative border-slate-950/10 px-8 pb-16 pt-12 dark:border-white/20 sm:mb-24 max-sm:border-t-0 border sm:px-12 sm:pt-16">
            <span className="absolute from-slate-950/10 to-transparent dark:from-white/20 -right-px top-[-33px] h-8 w-px bg-gradient-to-t max-xl:hidden"></span>
            <span className="absolute from-slate-950/10 to-transparent dark:from-white/20 -top-px right-[-33px] h-px w-8 bg-gradient-to-r"></span>
            <span className="absolute from-slate-950/10 to-transparent dark:from-white/20 -bottom-px right-[-33px] h-px w-8 bg-gradient-to-r"></span>
            <span className="absolute from-slate-950/10 to-transparent dark:from-white/20 -bottom-px left-[-33px] h-px w-8 bg-gradient-to-l"></span>
            <span className="absolute from-slate-950/10 to-transparent dark:from-white/20 -left-px bottom-[-33px] h-8 w-px bg-gradient-to-b"></span>
            <span className="absolute from-slate-950/10 to-transparent dark:from-white/20 -right-px bottom-[-33px] h-8 w-px bg-gradient-to-b"></span>

            <div className="prose prose-slate leading-7 dark:prose-invert">
              <h1>We&apos;re hiring {career.title}</h1>
              <div dangerouslySetInnerHTML={{ __html: career.content }} />
            </div>
            <div className="mt-12">
              <ApplyCareerModal canApply={canApply} />
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
