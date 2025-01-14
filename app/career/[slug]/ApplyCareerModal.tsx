'use client';
import * as React from 'react';
import { useSearchParams } from 'next/navigation';
import {
  Credenza,
  CredenzaBody,
  CredenzaClose,
  CredenzaContent,
  CredenzaDescription,
  CredenzaFooter,
  CredenzaHeader,
  CredenzaTitle,
  CredenzaTrigger
} from '@/components/ui/credenza';

type FieldProps = {
  id: string;
  type: string;
  name: string;
  label: string;
};

function Field({ label, ...props }: FieldProps) {
  return (
    <div className="grid gap-2">
      <label
        for={props.id}
        className="text-sm font-semibold text-gray-700 dark:text-gray-300"
      >
        {label}
      </label>
      <input
        {...props}
        className="py-3 px-4 block w-full !rounded-[0.7rem]  focus:outline-none ring-1 focus:ring-2 ring-gray-300 dark:ring-slate-700 text-sm focus:ring-[#357D8A] dark:focus:ring-[#357D8A] disabled:opacity-50 disabled:pointer-events-none bg-white dark:bg-slate-900 dark:text-neutral-400 dark:placeholder-neutral-500"
      />
    </div>
  );
}

export const ApplyCareerModal = ({ canApply }: { canApply: boolean }) => {
  const searchParams = useSearchParams();
  const [open, setOpen] = React.useState(false);
  const isApplied = searchParams.get('applied') === 'true';

  return (
    <Credenza open={open} onOpenChange={setOpen}>
      <CredenzaTrigger
        onClick={() => setOpen((v) => !v)}
        className="disabled:cursor-not-allowed disabled:opacity-60 rounded-full px-6 py-2.5 text-sm/7 font-semibold text-white bg-[#357D8A]"
        disabled={!canApply || isApplied}
      >
        {isApplied ? 'Applied' : canApply ? 'Apply for this job' : 'Closed'}
      </CredenzaTrigger>
      <CredenzaContent>
        <CredenzaHeader>
          <CredenzaTitle>Apply for this job</CredenzaTitle>
          <CredenzaDescription>
            Please fill out all the required fields to apply for the job...
          </CredenzaDescription>
        </CredenzaHeader>
        <CredenzaBody>
          <form action="?applied=true" className="grid gap-6">
            <Field
              label="Full Name"
              id="fullName"
              placeholder="e.g: John Doe"
            />
            <Field
              label="Email Address"
              id="emailAddress"
              placeholder="e.g: johndoe@gmail.com"
            />
            <Field
              label="Phone Number"
              id="phoneNumber"
              placeholder="e.g: 9812345678"
            />
            <Field
              label="CV"
              id="cv"
              type="file"
              placeholder="e.g: 9812345678"
            />
            <button
              type="submit"
              className="disabled:cursor-not-allowed disabled:opacity-60 rounded-xl px-6 py-2.5 text-sm/7 font-semibold text-white bg-[#357D8A]"
            >
              Submit
            </button>
          </form>
        </CredenzaBody>
        <CredenzaFooter>
          <CredenzaClose></CredenzaClose>
        </CredenzaFooter>
      </CredenzaContent>
    </Credenza>
  );
};
