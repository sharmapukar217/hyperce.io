'use client';

import clsx from 'clsx';
import * as z from 'zod';
import Image from 'next/image';
import * as React from 'react';
import { request, gql } from 'graphql-request';
import * as Dialog from '@/components/ui/dialog';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import toast from 'react-hot-toast';

const requiredField = (message: string) =>
  z.string({ required_error: message }).trim().min(1, message);

const formSchema = z.object({
  fullName: requiredField('Please provide your full name'),
  email: requiredField('Please provide your email address.').email(
    'Please provide a valid email address.'
  ),
  phone: requiredField('Please provide your phone number').regex(
    /^[0-9]{7,15}$/,
    'Please enter a valid phone number.'
  ),
  message: z.string().optional()
});

const ADD_CONTACT = gql`
  mutation AddContact($input: ContactAddInput!) {
    addContact(input: $input) {
      id
    }
  }
`;

export const HyperClickPromoPrompt = () => {
  const [open, setOpen] = React.useState(true);
  const { register, reset, formState, handleSubmit } = useForm<
    z.infer<typeof formSchema>
  >({
    mode: 'onChange',
    resolver: zodResolver(formSchema)
  });

  const onSubmit = handleSubmit(async function (input) {
    try {
      toast.loading('Please wait while loading...', { id: 'form-submit' });

      const response: any = await request(
        process.env.NEXT_PUBLIC_BACKEND_URL!,
        ADD_CONTACT,
        { input }
      );

      if (response?.addContact) {
        reset();
        setOpen(false);
        return toast.success(
          'Your request has been submitted for early access to HyperClicks.',
          {
            id: 'form-submit'
          }
        );
      }

      throw '';
    } catch {
      toast.error(
        'Oops! Something went wrong while trying to process your request.',
        { id: 'form-submit' }
      );
    }
  });
  return (
    <Dialog.Dialog open={open} onOpenChange={setOpen}>
      <Dialog.DialogContent className="max-h-screen overflow-auto">
        <div className="mb-4">
          <Image
            alt=""
            src="/HyperClicks-logo.png"
            width={200}
            height={200}
            className="w-32 h-full dark:hidden"
          />
          <Image
            alt=""
            src="/HyperClicks-logo_black.png"
            width={200}
            height={200}
            className="w-32 h-full hidden dark:inline"
          />
        </div>

        <Dialog.DialogTitle className="text-3xl">
          Launch Your E-commerce Store <br />
          in Just a Few Clicks 🚀
        </Dialog.DialogTitle>

        <blockquote className="p-2 my-4 border-s-4 border-[#337684] bg-gray-50 dark:bg-gray-800 rounded-r-lg">
          <Dialog.DialogDescription className="text-base italic font-medium leading-relaxed text-gray-900 dark:text-white">
            &ldquo;Something exciting is on the way—and you don’t want to miss
            it!&rdquo; 🔥🔥🔥
          </Dialog.DialogDescription>
        </blockquote>

        <form noValidate className="grid gap-6" onSubmit={onSubmit}>
          <Field
            as="input"
            label="Full Name"
            id="fullName"
            placeholder="i.e: John Doe"
            {...register('fullName')}
            errorMessage={formState.errors.fullName?.message}
            required
          />
          <Field
            as="input"
            label="Email Address"
            id="email"
            type="email"
            placeholder="i.e: hi@hyperce.io"
            {...register('email')}
            errorMessage={formState.errors.email?.message}
            required
          />
          <Field
            as="input"
            label="Phone Number"
            id="phone"
            placeholder="i.e: 9812312312"
            {...register('phone')}
            errorMessage={formState.errors.phone?.message}
            required
          />

          <Field
            as="textarea"
            rows={4}
            label="Message (Optional)"
            {...register('message')}
            placeholder="i.e: I'd like to ..."
            name="message"
          />

          <button
            type="submit"
            disabled={formState.isSubmitting}
            className="disabled:cursor-not-allowed disabled:opacity-60 rounded-xl px-6 py-2.5 text-sm/7 font-semibold text-white bg-[#357D8A]"
          >
            {formState.isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
          <small className="text-gray-500 dark:text-gray-400 font-semibold">
            Pre-book your spot now and be among the first to get early access.
          </small>
        </form>
      </Dialog.DialogContent>
    </Dialog.Dialog>
  );
};

type InputProps =
  | (React.ComponentProps<'input'> & { as: 'input' })
  | (React.ComponentProps<'textarea'> & { as: 'textarea' });

type FieldProps = { label: string; errorMessage?: any } & InputProps;

const Field = React.forwardRef<HTMLInputElement, FieldProps>(function Field(
  { label, errorMessage, as, ...props },
  ref
) {
  const Component = as || 'input';
  return (
    <div className="grid gap-2">
      <label
        htmlFor={props.id}
        className="text-sm font-semibold text-gray-700 dark:text-gray-300"
      >
        {label}
        {props.required && (
          <sup className="text-red-500 dark:text-red-400">*</sup>
        )}
      </label>
      <Component
        ref={ref as any}
        className={clsx(
          'py-3 px-4 block w-full !rounded-[0.7rem]  focus:outline-none ring-1 focus:ring-2 text-sm disabled:opacity-50 disabled:pointer-events-none bg-white dark:bg-slate-900 dark:text-neutral-400 dark:placeholder-neutral-500',
          errorMessage
            ? 'text-red-500 dark:text-red-400 ring-red-500 dark:ring-red-400'
            : 'ring-gray-300 dark:ring-slate-700 focus:ring-[#357D8A] dark:focus:ring-[#357D8A]'
        )}
        {...(props as any)}
      />
      {errorMessage && (
        <span className="text-xs font-medium text-red-500 dark:text-red-400">
          {String(errorMessage)}
        </span>
      )}
    </div>
  );
});
