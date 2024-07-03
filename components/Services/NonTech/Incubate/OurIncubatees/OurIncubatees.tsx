import Image from 'next/image';
import { FaExternalLinkAlt } from 'react-icons/fa';

export default function OurIncubatees() {
  const incubatees = [
    {
      name: 'LogicLand',
      url: 'https://logicland.net',
      image: '/incubate/logiclandScreenshot.jpg',
      description: "Building Tomorrow's Innovators Today."
    },
    {
      name: 'WedGlam',
      url: 'https://wedglam.co',
      image: '/1.png',
      description: 'Glamorous wedding planning services.'
    },
    {
      name: 'OnBlockIT',
      url: 'https://onblockit.com',
      image: '/2.png',
      description: 'Cutting-edge blockchain IT solutions.'
    }
  ];

  return (
    <section className="text-black dark:text-white py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-10 md:px-20">
        <h2 className="text-3xl md:text-5xl font-bold mb-10 text-center">
          Our Incubatees
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 overflow-hidden">
          {incubatees.map((incubatee, index) => (
            <a
              key={index}
              href={incubatee.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-100 dark:bg-gray-700 p-5 rounded-lg flex flex-col items-center text-center w-full md:w-1/3 transition-transform transform hover:scale-105 shadow-lg shadow-blue-400
              hover:shadow-xl hover:shadow-blue-500"
            >
              <Image
                src={incubatee.image}
                alt={`${incubatee.name} logo`}
                className=" h-96 w-96 mb-3 hover:scale-110 overflow-hidden rounded-xl border border-green-500"
                width={500}
                height={500}
              />
              <h3 className="text-xl font-semibold mb-2">{incubatee.name}</h3>
              <p className="text-sm mb-3">{incubatee.description}</p>
              <FaExternalLinkAlt className="text-2xl text-blue-500" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
