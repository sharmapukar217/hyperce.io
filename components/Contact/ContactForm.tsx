"use client";
import React, { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  async function handleSubmit(e: any) {
    e.preventDefault();
    const response = await fetch("https://admin.hyperce.io/shop-api", {
      headers: {
        "content-type": "application/json",
      },
      referrerPolicy: "strict-origin-when-cross-origin",
      body: JSON.stringify({
        operationName: "addContact",
        variables: {
          fullName: formData.name,
          email: formData.email,
          message: formData.message,
        },
        query:
          "mutation addContact($fullName: String!, $email: String!, $phone: String, $company: String, $message: String, $country: String) {\n  addContact(input: {fullName: $fullName, email: $email, phone: $phone, company: $company, message: $message, country: $country}) {\n    id\n    fullName\n    email\n    createdAt\n    updatedAt\n  }\n}\n",
      }),
      method: "POST",
      mode: "cors",
      credentials: "omit",
    });

    const data = await response.json();
    console.log(data);
  }

  return (
    <>
      <div className="md:w-1/2 dark:text-gray-300">
        <h2 className="font-bold text-4xl mb-5 dark:text-white">
          Write a message
        </h2>
        <form
          className="w-full md:w-[80%] needs-validation"
          onSubmit={(e) => handleSubmit(e)}
        >
          <input type="checkbox" className="hidden" name="botcheck" />
          <div className="mb-5">
            <input
              required
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-3 border-2 text-black placeholder:text-gray-800 rounded-md outline-none focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100"
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
              className="w-full px-4 py-3 border-2 text-black placeholder:text-gray-800 rounded-md outline-none focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <textarea
              name="message"
              placeholder="Your Message"
              className="text-black w-full px-4 py-3 border-2 placeholder:text-gray-800 rounded-md outline-none h-36 focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-[#357D8A] text-white w-2/4 h-fit py-3 rounded-full"
          >
            Send Message
          </button>

          <div id="result" className="mt-3 text-center"></div>
        </form>
      </div>
    </>
  );
}
