'use client';

import React, { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { FaRocket, FaHandshake } from 'react-icons/fa';
import Link from 'next/link';

export default function ContactForm() {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  async function handleSubmit(e: any) {
    e.preventDefault();
    const response = await fetch('https://admin.hyperce.io/shop-api', {
      headers: {
        'content-type': 'application/json'
      },
      referrerPolicy: 'strict-origin-when-cross-origin',
      body: JSON.stringify({
        operationName: 'addContact',
        variables: {
          fullName: formData.name,
          email: formData.email,
          message: formData.message
        },
        query:
          'mutation addContact($fullName: String!, $email: String!, $phone: String, $company: String, $message: String, $country: String) {\n  addContact(input: {fullName: $fullName, email: $email, phone: $phone, company: $company, message: $message, country: $country}) {\n    id\n    fullName\n    email\n    createdAt\n    updatedAt\n  }\n}\n'
      }),
      method: 'POST',
      mode: 'cors',
      credentials: 'omit'
    });

    const data = await response.json();
    console.log(data);

    if (response.status === 200) {
      toast({
        title: 'Your message has been recieved',
        description: 'You will get a reply from us very soon.'
      });
    }
  }

  return (
    <>
      <div className="lg:w-2/3 dark:text-gray-300">
        <h2 className="font-bold text-4xl mb-5 dark:text-white">
          Write a message
        </h2>
        <form
          className="w-full lg:w-[80%] needs-validation"
          onSubmit={(e) => handleSubmit(e)}
        >
          <input type="checkbox" className="hidden" name="botcheck" />
          <div className="mb-5">
            <input
              required
              type="text"
              placeholder="Full Name"
              className="w-full md:w-2/3 lg:w-full border px-4 py-3 text-black placeholder:text-gray-800 rounded-md outline-none focus:outline-gray-400 bg-white"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-5">
            <label className="sr-only">Email Address</label>
            <input
              id="email_address"
              type="email"
              placeholder="Email Address"
              name="email"
              className="w-full md:w-2/3 lg:w-full border px-4 py-3 text-black placeholder:text-gray-800 rounded-md outline-none focus:outline-gray-400 bg-white"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <textarea
              name="message"
              placeholder="Your Message"
              className="text-black w-full md:w-2/3 lg:w-full border px-4 py-3 placeholder:text-gray-800 rounded-md outline-none h-36 focus:outline-gray-400 bg-white"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-[#357D8A] text-white w-2/4 h-fit py-3"
          >
            Send Message
          </button>

          <div id="result" className="mt-3 text-center"></div>
        </form>
      </div>
    </>
  );
}
