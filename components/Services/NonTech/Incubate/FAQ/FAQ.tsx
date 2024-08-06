import Link from 'next/link';
import { FaQuestionCircle, FaChevronDown } from 'react-icons/fa';

export default function FAQ() {
  return (
    <section className="text-black dark:text-white py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-10 md:px-20">
        <h2 className="text-3xl md:text-5xl font-bold mb-10 text-center">
          FAQs
        </h2>
        <div className="flex flex-col gap-10">
          <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md">
            <div className="flex items-center mb-3">
              <FaQuestionCircle className="text-xl text-blue-500 mr-3" />
              <h3 className="text-xl font-semibold">
                To whom is Hyperce Incubate available?
              </h3>
            </div>
            <p>
              Hyperce Incubate incubation program targets small businesses and
              young startups within the digital business economy. From the idea
              to the growth phase, all types of entrepreneurs who are willing to
              present new solutions and have a clear vision of development are
              welcomed.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md">
            <div className="flex items-center mb-3">
              <FaQuestionCircle className="text-xl text-blue-500 mr-3" />
              <h3 className="text-xl font-semibold">
                What kinds of establishments do you serve?
              </h3>
            </div>
            <p>
              We help various kinds of businesses throughout the digital world –
              be it a technology-based start-up, an online business, a digital
              marketing firm, or anything in between.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md">
            <div className="flex items-center mb-3">
              <FaQuestionCircle className="text-xl text-blue-500 mr-3" />
              <h3 className="text-xl font-semibold">
                Where and what do I need to do if I want to apply for the
                incubation program?
              </h3>
            </div>
            <p>
              You can apply for one by submitting a filled application form
              through our company&apos;s website{' '}
              <a href="#contact" className="text-blue-500 underline">
                here
              </a>
              . Our team will consider your application and contact you to
              arrange the next steps. You may also reach out to us at{' '}
              <Link
                href="mailto:hi@hyperce-incubate.com"
                className="text-blue-500 underline"
              >
                hi@hyperce-incubate.com
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
