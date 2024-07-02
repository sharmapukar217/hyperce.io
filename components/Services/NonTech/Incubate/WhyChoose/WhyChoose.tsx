import {
  FaUserTie,
  FaNetworkWired,
  FaDollarSign,
  FaBusinessTime,
  FaLightbulb
} from 'react-icons/fa';

export default function WhyChoose() {
  return (
    <section className="text-black dark:text-white py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-10 md:px-20">
        <h2 className="text-3xl md:text-5xl font-bold mb-10 text-center">
          Why Choose Hyperce Incubate?
        </h2>
        <div className="flex flex-col md:flex-row flex-wrap justify-center items-start gap-10">
          <div className="w-full md:w-1/2 lg:w-1/3 flex flex-col items-center text-center">
            <FaUserTie className="text-6xl text-blue-500 mb-5" />
            <h3 className="text-2xl font-semibold mb-3">
              Expert Mentorship & Consultation
            </h3>
            <p className="text-base">
              Our qualified and experienced experts provide one-on-one coaching
              to help with the establishment and management of your business.
            </p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 flex flex-col items-center text-center">
            <FaNetworkWired className="text-6xl text-green-500 mb-5" />
            <h3 className="text-2xl font-semibold mb-3">
              Strategic Networking
            </h3>
            <p className="text-base">
              Gain opportunities to meet industry members, potential business
              partners, and investors to propel your company&apos;s development.
            </p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 flex flex-col items-center text-center">
            <FaDollarSign className="text-6xl text-yellow-500 mb-5" />
            <h3 className="text-2xl font-semibold mb-3">
              Funding Opportunities
            </h3>
            <p className="text-base">
              Access venture capital, angel investors, and grants to fund your
              business with Hyperce Incubate.
            </p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 flex flex-col items-center text-center">
            <FaBusinessTime className="text-6xl text-purple-500 mb-5" />
            <h3 className="text-2xl font-semibold mb-3">
              Comprehensive Business Support
            </h3>
            <p className="text-base">
              We offer business planning, legal establishment, market analysis,
              brand management, and marketing campaigns to tailor your business
              needs.
            </p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 flex flex-col items-center text-center">
            <FaLightbulb className="text-6xl text-pink-500 mb-5" />
            <h3 className="text-2xl font-semibold mb-3">
              Innovative Community
            </h3>
            <p className="text-base">
              Join a community of like-minded business people and enthusiasts
              ready for present and future achievements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
