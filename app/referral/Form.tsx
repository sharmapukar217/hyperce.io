import React, { useState } from 'react';

import Image from 'next/image';
import Demo from './demo.png';
import { toast } from '@/components/ui/use-toast';

export default function Form() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    refereeFirstName: '',
    refereeLastName: '',
    refereeEmail: '',
    refereeCompany: '',
    comments: ''
  });

  function handleChange(e: any) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(event: any) {
    event.preventDefault();

    const response = await fetch(
      'https://admin.hyperce.io/admin-api?languageCode=en',
      {
        headers: {
          'apollo-require-preflight': 'true',
          'content-type': 'application/json',
          'vendure-token': '14p5iqjjroxen9tuwq2i',
          cookie:
            '_y=6cf10474-9af9-452f-a455-9e82c882884b; _shopify_y=6cf10474-9af9-452f-a455-9e82c882884b; session=eyJ0b2tlbiI6IjEwY2ZmZGI5ZmEyZmUxY2JiY2IwYjQ3MzhkZDk2MjZjMTI0YThlMGQ0NzkxMWM0OGMzMDgyZjU4MzY1MWNhNzgifQ==; session.sig=OTX4yMp_h1T3L70coqRaW6a9kdk',
          Referer:
            'https://admin.hyperce.io/admin/extensions/referral/referrals/create',
          'Referrer-Policy': 'strict-origin-when-cross-origin'
        },
        body: JSON.stringify({
          operationName: 'CreateRefferal',
          variables: {
            input: {
              firstName: form.firstName,
              lastName: form.lastName,
              email: form.email,
              phone: form.phone,
              refereeFirstName: form.refereeFirstName,
              refereeLastName: form.refereeLastName,
              refereeCompany: form.refereeCompany,
              refereeEmail: form.refereeEmail,
              comments: form.comments
            }
          },
          query:
            'mutation CreateRefferal($input: CreateReferralInput!) {\n  createReferral(input: $input) {\n    ...Referral\n    __typename\n  }\n}\n\nfragment Referral on Referral {\n  id\n  createdAt\n  updatedAt\n  firstName\n  lastName\n  email\n  phone\n  refereeFirstName\n  refereeLastName\n  refereeEmail\n  refereeCompany\n  interestedProduct\n  comments\n  __typename\n}'
        }),
        method: 'POST'
      }
    );

    const data = await response.json();
    // console.log(data);

    if (data.data.createReferral.__typename === 'Referral') {
      toast({
        title: 'Thanks for applying for our referral program!',
        description: 'You will get a reply from us very soon.'
      });
    }
  }

  return (
    <section className="flex w-[80vw] flex-col mx-10 my-10 border border-gray-300 dark:border-gray-700 shadow-lg rounded-xl bg-[#ebeeef] dark:bg-transparent py-10 justify-between">
      {/* Left Section with Image */}
      <div className="md:flex-1 flex items-center justify-center p-4">
        <Image
          src={Demo}
          alt="Demo"
          width={700}
          height={800}
          objectFit="cover"
          className="rounded-t-xl  md:rounded-tl-xl md:rounded-bl-xl"
        />
      </div>

      <div className=" dark:text-gray-300 flex flex-col px-10 mt-10 items-center">
        <h2 className="font-bold text-4xl mb-5 dark:text-white text-left">
          Join as a Referral Partner
        </h2>

        <form
          className="w-full lg:w-[80%] needs-validation flex-end flex flex-col gap-5"
          onSubmit={handleSubmit}
        >
          <h3>Your Details: </h3>
          <input type="checkbox" className="hidden" name="botcheck" />
          <div className="mb-5 grid md:grid-cols-2 gap-10">
            <input
              required
              type="text"
              value={form.firstName}
              onChange={handleChange}
              placeholder="First Name (Required)"
              className="w-full px-4 py-3 text-black placeholder:text-gray-800 rounded-md outline-none focus:outline-gray-400 bg-white"
              name="firstName"
            />
            <input
              required
              type="text"
              value={form.lastName}
              onChange={handleChange}
              placeholder="Last Name (Required)"
              className="w-full px-4 py-3 text-black placeholder:text-gray-800 rounded-md outline-none focus:outline-gray-400 bg-white"
              name="lastName"
            />
          </div>
          <div className="mb-5 grid md:grid-cols-2 gap-10">
            <input
              id="email_address"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email Address (Required)"
              name="email"
              required
              className="w-full px-4 py-3 text-black placeholder:text-gray-800 rounded-md outline-none focus:outline-gray-400 bg-white"
            />
            <input
              id="phone_number"
              type="text"
              placeholder="Phone Number "
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 text-black placeholder:text-gray-800 rounded-md outline-none focus:outline-gray-400 bg-white"
            />
          </div>
          <h3>Referee Details: </h3>
          <div className="mb-5 grid md:grid-cols-2 gap-10">
            <input
              type="text"
              value={form.refereeFirstName}
              onChange={handleChange}
              placeholder="Referee's First Name"
              className="w-full px-4 py-3 text-black placeholder:text-gray-800 rounded-md outline-none focus:outline-gray-400 bg-white"
              name="refereeFirstName"
            />
            <input
              type="text"
              placeholder="Referee's Last Name"
              className="w-full px-4 py-3 text-black placeholder:text-gray-800 rounded-md outline-none focus:outline-gray-400 bg-white"
              name="refereeLastName"
              value={form.refereeLastName}
              onChange={handleChange}
            />
          </div>
          <div className="mb-5 grid md:grid-cols-2 gap-10">
            <input
              id="referee_email"
              type="email"
              value={form.refereeEmail}
              onChange={handleChange}
              placeholder="Referee's Email Address (Required)"
              name="refereeEmail"
              required
              className="w-full px-4 py-3 text-black placeholder:text-gray-800 rounded-md outline-none focus:outline-gray-400 bg-white"
            />
            <input
              id="referee_company"
              type="text"
              placeholder="Referee Company"
              name="refereeCompany"
              value={form.refereeCompany}
              onChange={handleChange}
              className="w-full px-4 py-3 text-black placeholder:text-gray-800 rounded-md outline-none focus:outline-gray-400 bg-white"
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-[#357D8A] text-white w-full md:w-1/4 h-fit py-3"
            >
              Join Now
            </button>
          </div>

          <div id="result" className="mt-3 text-center"></div>
        </form>
      </div>
    </section>
  );
}
