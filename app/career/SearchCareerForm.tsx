'use client';
import React from 'react';
import { useSearchParams } from 'next/navigation';

export const SearchCareerForm = () => {
  // TODO: Implement client side filtering and searching
  const searchParams = useSearchParams();

  //const handleSubmit = React.useCallback((ev: any) => {
  //  ev.preventDefault();
  //  const formData = new FormData(ev.target as HTMLFormElement);
  //  const query = formData.get('query');
  //
  //  window.location.search = '';
  //
  //  if (!query) return;
  //}, []);
  //

  return (
    <form
      method="get"
      className="max-w-full md:max-w-md sm:mx-auto inline-flex w-full my-8 gap-3"
    >
      <input
        name="query"
        defaultValue={searchParams.get('query') || ''}
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
  );
};
