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
  files: z
    .instanceof(FileList, { message: 'Please upload your cv.' })
    .refine((files) => files[0]?.type === 'application/pdf', {
      message: 'Only PDF files are allowed.'
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

export const ApplyCareerModal = ({ canApply }: { canApply: boolean }) => {
  const [open, setOpen] = React.useState(false);
  const [isApplied, setIsApplied] = React.useState(false);

  const { register, formState, handleSubmit, reset } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
      contactNumber: '',
      files: undefined
    }
  });

  const onSubmit = handleSubmit(function (values) {
    toast.loading('Please wait while submitting...', { id: 'cv-submit' });

    const formData = new FormData();
    // @ts-expect-error
    Object.keys(values).map((key) => formData.set(key, values[key]));

    return fetch('https://admin.hyperce.io/applications/submit', {
      method: 'POST',
      body: formData
    })
      .then((res) => {
        if (!res.ok) {
          return toast.error(
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
      <CredenzaContent>
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
              placeholder="e.g: John Doe"
              errorMessage={formState.errors.fullName?.message}
            />

            <Field
              {...register('email')}
              id="email"
              type="email"
              required={true}
              label="Email Address"
              placeholder="e.g: johndoe@gmail.com"
              errorMessage={formState.errors.email?.message}
            />

            <Field
              {...register('contactNumber')}
              type="tel"
              required={true}
              id="contactNumber"
              placeholder="e.g: 9812345678"
              label="Phone Number"
              errorMessage={formState.errors.contactNumber?.message}
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
