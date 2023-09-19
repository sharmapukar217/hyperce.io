"use client";

import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";

export default function RequestQuote() {
  const { toast } = useToast();

  const [email, setEmail] = useState();
  const handleChange = (e: any) => {
    setEmail(e.target.value);
  };

  async function handleNewslett() {
    const response = await fetch("https://admin.hyperce.io/shop-api", {
      headers: {
        "content-type": "application/json",
      },
      referrerPolicy: "strict-origin-when-cross-origin",
      body: JSON.stringify({
        operationName: "CreateSubscriber",
        variables: {
          input: {
            fullName: "",
            email: email,
            phone: "",
          },
        },
        query:
          "mutation CreateSubscriber($input: SubscriberAddInput!) {\n  subscribe(input: $input) {\n    ...Subscribers\n    __typename\n  }\n}\n\nfragment Subscribers on Subscriber {\n  id\n  fullName\n  email\n  phone\n  createdAt\n  updatedAt\n  __typename\n}",
      }),
      method: "POST",
      mode: "cors",
      credentials: "omit",
    });

    const data = await response.json();
    console.log(data);
    if (response.status === 200) {
      toast({
        title: "We hear you.",
        description:
          "Thanks for your interest in our products. We will get back to you as soon as possible.",
      });
    }
  }
  return (
    <section className="container mx-auto px-10 py-10 md:py-20 md:px-20">
      <div className="">
        <div className="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
          <div className="lg:col-span-3">
            <h1 className="block text-4xl font-bold text-gray-800 dark:text-white">
              Love Specific Product?
            </h1>
            <p className="mt-3 text-lg text-gray-800 dark:text-gray-400">
              Request a Quote today. Our Sales representatives are available
              18/24 hours everyday on all of our socials.
            </p>

            <div className="mt-5 lg:mt-8 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
              <div className="w-full sm:w-auto">
                <label htmlFor="hero-input" className="sr-only">
                  Search
                </label>
                <input
                  type="text"
                  id="hero-input"
                  name="hero-input"
                  className="py-3 px-4 block w-full outline-none border-full xl:min-w-[18rem] border-2 border-gray-300  shadow-sm focus:z-10 dark:bg-slate-900 dark:text-gray-400"
                  placeholder="Enter work email"
                  onChange={handleChange}
                  value={email}
                />
              </div>
              <button
                type="button"
                className="w-full sm:w-auto inline-flex justify-center items-center gap-x-3 text-center bg-[#357D8A] rounded-full hover:bg-[#2a636e] border border-transparent text-white font-medium focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800"
                onClick={() => {
                  handleNewslett();
                }}
              >
                Request demo
              </button>
            </div>

            <div className="mt-6 lg:mt-12">
              <span className="text-xs font-medium text-gray-800 uppercase dark:text-gray-200">
                Trusted by:
              </span>

              <div className="mt-4 flex items-center gap-x-8">
                <img
                  src="https://iandigitaltalent.com/assets/img/puntoian-min.png"
                  alt=""
                  className="w-16 h-auto"
                />
                <img
                  src="https://cms.trylah.sg/wp-content/uploads/2022/09/TryLah-Name-Logo.png"
                  alt=""
                  className="w-16 h-auto"
                />
                <img
                  src="https://hyperce-io.vercel.app/images/partners/npdev.png"
                  alt=""
                  className="h-10 w-auto"
                />
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
