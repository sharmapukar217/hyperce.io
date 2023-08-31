export default function ContactForm() {
  return (
    <section className="mx-auto container px-10 text-black dark:text-white text-center md:text-left">
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto mt-16">
        <div className="dark:text-gray-300">
          <h2 className="font-medium text-4xl dark:text-white">
            Contact Hyperce
          </h2>
          <p className="text-lg leading-relaxed mt-3">
            Have something to say? We are here to help. Fill up the form or send
            email or call phone.
          </p>
          <div className="my-10">
            <div className="flex items-center mt-2 space-x-2 text-left">
              <span>
                800 N King Street Suite 304 1198 Wilmington, DE 19801 United
                States
              </span>
            </div>
            <div className="flex items-center mt-2 space-x-2">
              <a href="mailto:hello@careersangraha.ankurgajurel.com.np">
                hi@hyperce.io
              </a>
            </div>
            <div className="flex items-center mt-2 space-x-2 ">
              <a href="tel:+1 (987) 4587 899">+1-617-819-5576</a>
            </div>
          </div>
          <div className="mt-5">
            <div className="flex items-center mt-2 space-x-2">
              <span>
                Adarshanagar, Chandragiri - 14, Kathmandu, Nepal, 44600
              </span>
            </div>
            <div className="flex items-center mt-2 space-x-2 ">
              <a href="mailto:hello@careersangraha.ankurgajurel.com.np">
                hi@hyperce.io
              </a>
            </div>
            <div className="flex items-center mt-2 space-x-2 ">
              <a href="tel:+1 (987) 4587 899">+977-9840260599</a>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <form method="POST" id="form" className="w-full needs-validation">
            <input
              type="hidden"
              name="access_key"
              value="YOUR_ACCESS_KEY_HERE"
            />

            <input type="checkbox" className="hidden" name="botcheck" />
            <div className="mb-5">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-3 border-2 text-black placeholder:text-gray-800 rounded-md outline-none focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100"
                name="name"
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
              />
            </div>
            <div className="mb-3">
              <textarea
                name="message"
                placeholder="Your Message"
                className="text-black w-full px-4 py-3 border-2 placeholder:text-gray-800 rounded-md outline-none h-36 focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100"
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
      </div>
    </section>
  );
}
