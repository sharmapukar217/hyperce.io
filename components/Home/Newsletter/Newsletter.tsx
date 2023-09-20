"use client";

import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

export default function Newsletter() {
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
        title: "Your Email has been registered",
        description:
          "You will now receive product, promos and new updated of Hyperce on your email",
      });
    }
  }

  return (
    <section className="">
      <div>
        <img
          width="100%"
          height="100%"
          loading="lazy"
          src="/newsletter.png"
          alt=""
        />
      </div>

      <div className="mx-auto container px-10 md:px-20 flex flex-col md:flex-row pb-10 -mt-[10%]">
        <div className="xl:w-1/2 text-center md:text-left w-full left px-5 md:px-20 py-10 md:py-20 bg-[#f6f6f6] text-black dark:bg-[#0F1023] dark:text-white  md:rounded-l-xl">
          <div className="flex flex-col w-full md:w-[80%] gap-5">
            <div className="text-2xl md:text-3xl font-bold">
              Subscribe to our Weekly Newsletter
            </div>
            <div className="text-gray-700 dark:text-gray-400">
              Stay update with all new offers and services we provide and more
              details{" "}
            </div>
            <div className="flex flex-col gap-2 md:flex-row md:gap-0 w-full items-center md:border-[2px] rounded-md border-[#357D8A]">
              <input
                className="w-full h-10 bg-transparent px-5 py-6 focus:outline-none"
                type="text"
                onChange={handleChange}
                name=""
                value={email}
                placeholder="hi@hyperce.io"
                id=""
              />
              <button
                onClick={handleNewslett}
                aria-aria-label="subscribe-newsletter"
                className="text-white dark:text0black w-fit flex justify-center rounded-md items-center px-5 py-3 bg-[#357D8A]"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="hidden md:block xl:w-1/2 w-full min-h-[200px] bg-white right md:rounded-r-xl bg-[url('/news-back.png')] bg-cover">
          {/* <img src="/news-back.png" alt="" className="" /> */}
        </div>
      </div>
    </section>
  );
}
