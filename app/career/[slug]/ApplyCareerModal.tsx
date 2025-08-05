'use client';
import * as z from 'zod';

import { clsx } from 'clsx';
import * as React from 'react';
import { toast } from 'react-hot-toast';
import {
  Credenza,
  CredenzaBody,
  CredenzaContent,
  CredenzaDescription,
  CredenzaHeader,
  CredenzaTitle,
  CredenzaTrigger
} from '@/components/ui/credenza';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

type FieldProps = React.ComponentProps<'input'> & {
  label: string;
  errorMessage?: any;
};

const formSchema = z.object({
  fullName: z
    .string({ message: 'Please enter your full name.' })
    .trim()
    .min(1, 'Please enter your full name.'),
  email: z
    .string({ message: 'Please enter your email address.' })
    .email('Please enter a valid email address.'),
  contactNumber: z
    .string({
      message: 'Please enter your phone number.'
    })
    .trim()
    .min(1, 'Please enter a valid phone number.'),
  appliedFor: z.enum(['intern', 'trainee', 'junior', 'mid', 'senior'], {
    message: 'Please select a valid level.'
  }),
  desireSalary: z
    .string({ message: 'Please enter your expected salary.' })
    .trim()
    .min(1, 'Please enter your expected salary.'),

  files: z
    .instanceof(FileList, { message: 'Please upload your cv.' })
    .refine((files) => files[0]?.type === 'application/pdf', {
      message: 'Only PDF files are allowed.'
    })
    .refine((files) => files[0]?.size <= 20 * 1024 * 1024, {
      message: 'File size must be less than 20MB.'
    })
});

const Field = React.forwardRef<HTMLInputElement, FieldProps>(function Field(
  { label, errorMessage, ...props },
  ref
) {
  return (
    <div className="grid gap-2">
      <label
        htmlFor={props.id}
        className="text-sm font-semibold text-gray-700 dark:text-gray-300"
      >
        {label}
      </label>
      <input
        ref={ref}
        className={clsx(
          'py-3 px-4 block w-full !rounded-[0.7rem]  focus:outline-none ring-1 focus:ring-2 text-sm disabled:opacity-50 disabled:pointer-events-none bg-white dark:bg-slate-900 dark:text-neutral-400 dark:placeholder-neutral-500',
          errorMessage
            ? 'text-red-500 dark:text-red-400 ring-red-500 dark:ring-red-400'
            : 'ring-gray-300 dark:ring-slate-700 focus:ring-[#357D8A] dark:focus:ring-[#357D8A]'
        )}
        {...props}
      />
      {errorMessage && (
        <span className="text-xs font-medium text-red-500 dark:text-red-400">
          {String(errorMessage)}
        </span>
      )}
    </div>
  );
});

export const ApplyCareerModal = ({
  canApply,
  careerId
}: {
  careerId: string;
  canApply: boolean;
}) => {
  const [open, setOpen] = React.useState(false);
  const [isApplied, setIsApplied] = React.useState(false);

  const { register, formState, handleSubmit, reset } = useForm({
    mode: 'onTouched',
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
      appliedFor: undefined,
      contactNumber: '',
      desireSalary: '',
      files: undefined
    }
  });

  const onSubmit = handleSubmit(function (values) {
    toast.loading('Please wait while submitting...', {
      id: 'cv-submit',
      duration: Infinity
    });

    const formData = new FormData();
    formData.set('careerID', careerId);
    // @ts-expect-error
    Object.keys(values).map((key) => formData.set(key, values[key]));
    if (values?.files?.[0]) formData.set('files', values.files[0]);

    return fetch('https://admin.hyperce.io/applications/submit', {
      method: 'POST',
      body: formData
      // headers: { "Content-Type": "multipart/formdata" }
    })
      .then(async (res) => {
        if (!res.ok) {
          const json = await res.json();
          return toast.error(
            json?.message ||
              'Oops! Something went wrong, Please try again later.',
            { id: 'cv-submit' }
          );
        }

        setOpen(false);
        toast.success('Your cv has been recorded.', { id: 'cv-submit' });
        setIsApplied(true);
        reset();
      })
      .catch(() => {
        return toast.error(
          'Oops! Something went wrong, Please try again later.',
          { id: 'cv-submit' }
        );
      });
  });

  return (
    <Credenza open={open} onOpenChange={setOpen}>
      <CredenzaTrigger asChild>
        <button
          onClick={() => setOpen((v) => !v)}
          className="disabled:cursor-not-allowed disabled:opacity-60 rounded-full px-6 py-2.5 text-sm/7 font-semibold text-white bg-[#357D8A]"
          disabled={!canApply || isApplied}
        >
          {isApplied ? 'Applied' : canApply ? 'Apply for this job' : 'Closed'}
        </button>
      </CredenzaTrigger>
      <CredenzaContent className="max-h-[90%] overflow-auto">
        <CredenzaHeader>
          <CredenzaTitle>Apply for this job</CredenzaTitle>
          <CredenzaDescription>
            Please fill out all the required fields to apply for the job...
          </CredenzaDescription>
        </CredenzaHeader>
        <CredenzaBody>
          <form onSubmit={onSubmit} className="grid gap-6">
            <Field
              {...register('fullName')}
              id="fullName"
              required={true}
              label="Full Name"
              placeholder="Full Name"
              errorMessage={formState.errors.fullName?.message}
            />

            <Field
              {...register('email')}
              id="email"
              type="email"
              required={true}
              label="Email Address"
              placeholder="e.g: abc@gmail.com"
              errorMessage={formState.errors.email?.message}
            />

            <Field
              {...register('contactNumber')}
              type="tel"
              required={true}
              id="contactNumber"
              placeholder="e.g: +977 9812345678"
              label="Phone Number"
              errorMessage={formState.errors.contactNumber?.message}
            />

            <div className="grid gap-2">
              <label htmlFor="appliedFor">Applying for</label>
              <select
                id="appliedFor"
                {...register('appliedFor')}
                className={clsx(
                  'py-3 px-4 block w-full !rounded-[0.7rem]  focus:outline-none ring-1 focus:ring-2 text-sm disabled:opacity-50 disabled:pointer-events-none bg-white dark:bg-slate-900 dark:text-neutral-400 dark:placeholder-neutral-500',
                  formState.errors.appliedFor?.message
                    ? 'text-red-500 dark:text-red-400 ring-red-500 dark:ring-red-400'
                    : 'ring-gray-300 dark:ring-slate-700 focus:ring-[#357D8A] dark:focus:ring-[#357D8A]'
                )}
              >
                <option value="" disabled>
                  Select what to apply for.
                </option>
                <option value="intern">Intern</option>
                <option value="trainee">Trainee</option>
                <option value="junior">Junior Level</option>
                <option value="mid">Mid Level</option>
                <option value="senior">Senior Level</option>
              </select>

              {formState.errors.appliedFor?.message && (
                <span className="text-xs font-medium text-red-500 dark:text-red-400">
                  {String(formState.errors.appliedFor?.message)}
                </span>
              )}
            </div>

            <Field
              {...register('desireSalary')}
              required={true}
              id="desireSalary"
              label="Expected Salary"
              placeholder="e.g: NRs. 30,000 to NRs. 50,000"
              errorMessage={formState.errors.desireSalary?.message}
            />

            <Field
              id="files"
              label="CV"
              type="file"
              required={true}
              {...register('files')}
              errorMessage={formState.errors.files?.message}
            />

            <button
              type="submit"
              disabled={formState.isSubmitting}
              className="disabled:cursor-not-allowed disabled:opacity-60 rounded-xl px-6 py-2.5 text-sm/7 font-semibold text-white bg-[#357D8A]"
            >
              Submit
            </button>
          </form>
        </CredenzaBody>
      </CredenzaContent>
    </Credenza>
  );
};
