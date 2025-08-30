'use client';
import * as z from 'zod';

import { clsx } from 'clsx';
import * as React from 'react';
import { toast } from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import {
  Credenza,
  CredenzaBody,
  CredenzaContent,
  CredenzaDescription,
  CredenzaHeader,
  CredenzaTitle,
  CredenzaTrigger
} from '@/components/ui/credenza';
import { CapWidget } from '@/components/CapWidget';

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
  phone: z
    .string({
      message: 'Please enter your phone number.'
    })
    .trim()
    .min(1, 'Please enter a valid phone number.'),

  message: z.string().trim().optional()
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
          'py-3 px-4 block w-full !rounded-[0]  focus:outline-none ring-1 focus:ring-2 text-sm disabled:opacity-50 disabled:pointer-events-none bg-white dark:bg-slate-900 dark:text-neutral-400 dark:placeholder-neutral-500',
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

export const ContactFormDialog = (props: React.PropsWithChildren) => {
  const [open, setOpen] = React.useState(false);
  const [captchaToken, setCaptchaToken] = React.useState<string | null>(null);

  const { register, formState, handleSubmit, reset } = useForm({
    mode: 'onTouched',
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
      appliedFor: undefined,
      phone: '',
      message: ''
    }
  });

  const onSubmit = handleSubmit(async function (values) {
    if (!captchaToken) return;

    toast.loading('Please wait while submitting...', {
      id: 'contact-submit',
      duration: Infinity
    });

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/shop-api`,
        {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
            'x-captcha-token': captchaToken
          },
          body: JSON.stringify({
            operationName: 'addContact',
            variables: values,
            query: `
          mutation addContact($fullName: String!, $email: String!, $phone: String, $company: String, $message: String, $country: String) {
            addContact(input: { fullName: $fullName, email: $email, phone: $phone, company: $company, message: $message, country: $country}) {
              id
            }
          }`
          })
        }
      );

      if (response.status === 200) {
        reset();
        setOpen(false);
        return toast.success('Your message has been recieved', {
          id: 'contact-submit',
          duration: 5_000
        });
      }

      return toast.error(
        'Oops! Something went wrong, Please try again later.',
        { id: 'contact-submit', duration: 5_000 }
      );
    } catch (err: any) {
      return toast.error(
        err.message || 'Oops! Something went wrong, Please try again later.',
        { id: 'contact-submit', duration: 5_000 }
      );
    }
  });

  return (
    <Credenza open={open} onOpenChange={setOpen}>
      <CredenzaTrigger asChild>
        {props.children || (
          <button
            onClick={() => {
              setOpen(true);
              const bannerName = 'hyperce_services_contact_form';
              const prevCount = parseInt(
                localStorage.getItem(bannerName) || '0',
                10
              );

              const newCount = prevCount + 1;
              localStorage.setItem(bannerName, newCount.toString());

              (window as any).gtag('event', 'banner_click', {
                banner_name: bannerName,
                click_count: newCount
              });
            }}
            className="flex w-full sm:w-fit lg:w-full h-12 gap-1 hover:scale-[105%] active:scale-[95%] transition-all duration-300 text-white bg-[#357D8A] px-16 py-1 rounded-[12px] justify-center text-center font-semibold text-base items-center"
          >
            Contact Us
          </button>
        )}
      </CredenzaTrigger>
      <CredenzaContent className="md:overflow-auto pb-4 max-h-[80vh]">
        <CredenzaBody data-vaul-no-drag className="max-md:overflow-auto">
          <CredenzaHeader>
            <CredenzaTitle>Contact Us</CredenzaTitle>
            <CredenzaDescription>
              Please fill out all the required fields to share your queries...
            </CredenzaDescription>
          </CredenzaHeader>
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
              {...register('phone')}
              type="tel"
              required={true}
              id="phone"
              placeholder="e.g: +977 9812345678"
              label="Phone Number"
              errorMessage={formState.errors.phone?.message}
            />

            <div className="grid gap-2">
              <label
                htmlFor="message"
                className="text-sm font-semibold text-gray-700 dark:text-gray-300"
              >
                Message (Optional)
              </label>
              <textarea
                rows={4}
                id="message"
                {...register('message')}
                placeholder="Enter your message if any"
                className={clsx(
                  'py-3 px-4 block w-full !rounded-[0]  focus:outline-none ring-1 focus:ring-2 text-sm disabled:opacity-50 disabled:pointer-events-none bg-white dark:bg-slate-900 dark:text-neutral-400 dark:placeholder-neutral-500',
                  formState.errors.message?.message
                    ? 'text-red-500 dark:text-red-400 ring-red-500 dark:ring-red-400'
                    : 'ring-gray-300 dark:ring-slate-700 focus:ring-[#357D8A] dark:focus:ring-[#357D8A]'
                )}
              />
              {formState.errors.message?.message && (
                <span className="text-xs font-medium text-red-500 dark:text-red-400">
                  {String(formState.errors.message.message)}
                </span>
              )}
            </div>

            {!captchaToken && (
              <div
                className="flex pb-4 [&_*]:w-full
                [--cap-widget-width:100%] 
                [--cap-border-radius:0] 
                [--cap-background:#fff] 
                [--cap-color:#2d6977]
                [--cap-border-color:rgb(209,213,219)]
                [--cap-checkbox-border:1px_solid_rgb(209,213,219)]
                dark:[--cap-background:rgb(15,23,42)] 
                dark:[--cap-border-color:rgb(51,65,85)]
                dark:[--cap-color:#fff]
                dark:[--cap-checkbox-background:rgb(15,23,42)]
                dark:[--cap-checkbox-border:1px_solid_rgb(51,65,85)]"
              >
                <CapWidget onSolve={setCaptchaToken} />
              </div>
            )}

            <button
              type="submit"
              disabled={!captchaToken || formState.isSubmitting}
              className="rounded-none px-6 py-2.5 text-sm/7 font-semibold text-white bg-[#357D8A] disabled:pointer-events-none disabled:opacity-75"
            >
              Submit
            </button>
          </form>
        </CredenzaBody>
      </CredenzaContent>
    </Credenza>
  );
};
