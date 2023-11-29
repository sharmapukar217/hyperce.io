"use client";
import Image from "next/image";

import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

export default function Newsletter() {
  const { toast } = useToast();

  const [email, setEmail] = useState();
  const handleChange = (e: any) => {
    setEmail(e.target.value);
  };

  async function handleSendPortalSubscription(event: any) {
    event.preventDefault();
    const response = await fetch(
      "https://zippybox.hyperce.io/api/v1/subscribers",
      {
        headers: {
          "content-type": "application/json",
          Authorization: "Bearer Bu4NoEDLOYr86mCc5D9xQ4owzkmWRLhW",
        },
        referrerPolicy: "strict-origin-when-cross-origin",
        body: JSON.stringify({
          email: email,
          tags: [1],
        }),
        method: "POST",
        credentials: "omit",
      }
    );

    if (response.status === 201) {
      toast({
        title: "Your Email has been registered",
        description: "You have successfully subscribed to the newsletter.",
      });
    } else if (response.status === 200) {
      toast({
        title: "Already a fan",
        description: "Email has already been added",
      });
    }
  }

  async function handleNewslett(event: any) {
    event.preventDefault();
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

    if (data.errors) {
      console.log(data.errors);
    }
  }

  return (
    <section className="">
      <div className="md:hidden flex items-center justify-center ">
        <Image
          width={2000}
          height={500}
          src="/hypercemembers.jpeg"
          alt="Hyperce Members"
        />
      </div>

      <div className="flex items-center justify-center ">
        <div className="hidden md:block md:w-4/5">
          <Image
            width={1300}
            height={500}
            src="/hypercemembers.jpeg"
            alt="Hyperce Members"
          />
        </div>
      </div>

      <div className="mx-auto container px-10 md:px-20 flex flex-col md:flex-row pb-10 xl:-mt-[4%]">
        <div className="xl:w-1/2 text-center md:text-left w-full left px-5 md:px-10 py-10 md:py-10 bg-[#f6f6f6] text-black dark:bg-[#0F1023] dark:text-white  md:rounded-l-xl">
          <div className="flex flex-col w-full md:w-[80%] gap-5">
            <div className="text-2xl md:text-3xl font-bold">
              Subscribe to our Weekly Newsletter
            </div>
            <div className="text-gray-700 dark:text-gray-400">
              Stay update with all new offers and services we provide and more
              details{" "}
            </div>
            <form
              className="border-[2px] flex w-full border-[#357D8A]"
              onSubmit={(e) => {
                handleNewslett(e);
                handleSendPortalSubscription(e);
              }}
            >
              <input
                className="w-full h-10 bg-transparent px-5 py-6 outline-none"
                type="email"
                onChange={handleChange}
                name=""
                value={email}
                placeholder="hi@hyperce.io"
                id=""
              />
              <button
                type="submit"
                aria-label="subscribe-newsletter"
                className="w-fit px-3 py-1 bg-[#357D8A] text-white"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="hidden md:block xl:w-1/2 w-full min-h-[200px] bg-white right md:rounded-r-xl bg-[url('/news-back.png')] bg-cover">
          {/* <img src="/news-back.png" alt="" className="" /> */}
        </div>
      </div>
    </section>
  );
}
