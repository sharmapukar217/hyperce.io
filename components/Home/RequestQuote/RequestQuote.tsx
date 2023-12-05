"use client";

import { useToast } from "@/components/ui/use-toast";
import { HypercePartners } from "@/data/Partners";
import { useState } from "react";

export default function RequestQuote() {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
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
          fullName: "Specifc Solution Enthusiast",
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

    if (response.status === 200) {
      toast({
        title: "Your message has been recieved",
        description: "You will get a reply from us very soon.",
      });
    }
  }

  return (
    <section className="container mx-auto px-10 py-10 md:py-20 md:px-20 bg-white dark:bg-[#0F1023] rounded-3xl">
      <div className="">
        <div className="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
          <div className="lg:col-span-3">
            <h1 className="block text-4xl font-bold text-gray-800 dark:text-white">
              Love Specific Solution?
            </h1>
            <p className="mt-3 text-lg text-gray-800 dark:text-gray-400">
              Request a Quote today. Our Sales representatives are available
              18/24 hours everyday on all of our socials.
            </p>

            <div className="mt-5 lg:mt-8 flex flex-col p-0 items-center gap-2 sm:flex-row sm:gap-3">
              <form
                className="flex flex-col gap-4 w-full"
                onSubmit={handleSubmit}
              >
                <input
                  required
                  className="w-full md:w-1/2 border lg:w-full px-5 py-3 outline-none focus:border-[#357D8A] bg-white text-black"
                  type="email"
                  onChange={handleChange}
                  value={formData.email}
                  placeholder="steve@apple.com"
                  name="email"
                  id=""
                />
                <textarea
                  required
                  className="w-full md:w-1/2 border lg:w-full px-5 py-3 outline-none focus:border-[#357D8A] bg-white text-black min-h-[6vw]"
                  onChange={handleChange}
                  value={formData.message}
                  placeholder="I'd like to request a quote for Hyperce Devops......."
                  name="message"
                  id=""
                />
                <button
                  type="submit"
                  aria-label="subscribe-newsletter"
                  className="px-4 py-3 rounded-full w-fit bg-[#357D8A] hover:shadow-xl hover:bg-[#265058] transition-all duration-200 text-white"
                >
                  Request Quotation
                </button>
              </form>
            </div>

            <div className="mt-6 lg:mt-12">
              <span className="text-xs font-medium text-gray-800 uppercase dark:text-gray-200">
                Trusted by:
              </span>

              <div className="mt-4 flex flex-wrap items-center gap-y-5 gap-x-8">
                {HypercePartners.map((each) => (
                  <img src={each} alt="" className="w-16 h-auto" />
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 mt-10 lg:mt-0">
            <img
              className="w-full rounded-xl"
              src="https://images.unsplash.com/photo-1665686376173-ada7a0031a85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&h=700&q=80"
              alt="Image Description"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
