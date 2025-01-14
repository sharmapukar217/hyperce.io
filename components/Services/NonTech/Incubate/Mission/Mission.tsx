import { FaLightbulb, FaHandsHelping, FaChartLine } from 'react-icons/fa';

export default function Mission() {
  return (
    <section className="text-black dark:text-white py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-10 md:px-20 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-10">Our Mission</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
          <div className="w-full md:w-1/3 flex flex-col items-center">
            <FaLightbulb className="text-6xl text-yellow-500 mb-5" />
            <h3 className="text-2xl font-semibold mb-3">Guidance & Support</h3>
            <p className="text-base">
              Our purpose is to guide and support start-ups and any individual
              with an idea and work toward realizing a successful business
              venture.
            </p>
          </div>
          <div className="w-full md:w-1/3 flex flex-col items-center">
            <FaHandsHelping className="text-6xl text-green-500 mb-5" />
            <h3 className="text-2xl font-semibold mb-3">
              Professional Consultancy
            </h3>
            <p className="text-base">
              We aim to develop a vibrant economy where businesses can succeed
              through professional consultancy, the right connections, and
              access to essential tools.
            </p>
          </div>
          <div className="w-full md:w-1/3 flex flex-col items-center">
            <FaChartLine className="text-6xl text-blue-500 mb-5" />
            <h3 className="text-2xl font-semibold mb-3">Economic Growth</h3>
            <p className="text-base">
              We strive to create favorable conditions for people&apos;s
              development, changes, and economic growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
