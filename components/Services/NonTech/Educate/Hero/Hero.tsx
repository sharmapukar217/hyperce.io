'use client';
import { useState, ReactNode } from 'react';
import {
  FaBook,
  FaGraduationCap,
  FaTimes,
  FaShoppingCart,
  FaDigitalTachograph,
  FaChartLine
} from 'react-icons/fa';
import Image from 'next/image';

interface ModalProps {
  show: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ show, onClose, children }) => {
  if (!show) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center overflow-y-auto z-50">
      <div
        className="bg-white shadow-2xl shadow-black hover:shadow-blue-400 bg-opacity-90 p-8 rounded-lg relative 
      mt-[1800px] sm:mt-96 md:mt-96 lg:mt-96 w-11/12 md:w-3/4 lg:w-1/2 z-50 text-orange-500   "
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-orange-500 rounded-full"
        >
          <FaTimes size={24} className="text-gray-100" />
        </button>
        {children}
      </div>
    </div>
  );
};

export default function HeroEducate() {
  const [showModal, setShowModal] = useState(false);

  const handleModalToggle = () => setShowModal(!showModal);

  return (
    <section className="text-black dark:text-white flex flex-col pt-0 pb-4 mt-10 lg:flex-row items-center gap-10 px-10 md:px-20 mx-auto container text-center justify-center">
      <div className="w-full">
        <div className="relative bg-white bg-opacity-50 dark:bg-transparent py-10 md:py-20 mt-20 rounded-3xl">
          <div className="flex flex-col text-black dark:text-white items-center gap-2 justify-center">
            <Image
              className="h-[120px] object-contain rounded-full hidden dark:block"
              src="/services_logos/educate/HyperceEducate.png"
              alt="Hyperce Educate Logo"
              width={120}
              height={120}
            />
            <Image
              className="object-contain rounded-full dark:hidden"
              src="/services_logos/educate/HyperceEducate.png"
              alt="Hyperce Educate Logo"
              width={120}
              height={120}
            />
            <FaGraduationCap className="text-6xl md:text-8xl mt-5" />
            <span className="text-4xl md:text-7xl font-bold mt-5">
              Hyperce Educate
            </span>
            <br />
            <span className="text-base font-bold">
              Empowering Minds, Shaping Futures
            </span>
            <p className="text-base mt-5">
              Hyperce Educate provides world-class educational resources and
              training programs designed to help individuals and organizations
              achieve their learning goals and unlock their full potential.
            </p>
            <div className="flex gap-5 mt-10">
              <a
                className="w-fit text-white flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-800 to-[#357D8A] shadow-lg shadow-transparent hover:shadow-blue-700/50 border border-transparent text-sm font-medium rounded-full py-3 px-6"
                href="#learnmore"
              >
                Learn More
                <svg
                  className="w-2.5 h-2.5"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </a>
              <button
                className="w-fit text-white flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-yellow-800 to-[#357D8A] shadow-lg shadow-transparent hover:shadow-yellow-700/50 border border-transparent text-sm font-medium rounded-full py-3 px-6"
                onClick={handleModalToggle}
              >
                Our Sample Program
                <FaBook className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal show={showModal} onClose={handleModalToggle}>
        <h2 className="text-3xl font-bold mb-6 text-center text-green-800">
          Our Sample Program
        </h2>
        <div className="text-left">
          <h3 className="text-2xl font-semibold mb-4 border-b border-gray-300 pb-2 flex items-center gap-2">
            <FaShoppingCart className="text-purple-500" />
            Module 1: Foundation of E-commerce
          </h3>
          <ul className="list-disc ml-6 mb-6 text-green-900">
            <li>
              Understanding the opportunities and advantages of online business
            </li>
            <li>A step-by-step guide to creating Digital Business</li>
            <li>
              Laws & policies of e-commerce, social media & digital business
            </li>
            <li>All about cyber frauds and scams in digital business</li>
            <li>Navigation & overview of various e-commerce platforms</li>
            <li>Choosing the right platforms for your business</li>
            <li>
              Practical sessions on digital platforms & e-commerce selection
            </li>
          </ul>
          <h3 className="text-2xl font-semibold mb-4 border-b border-gray-300 pb-2 flex items-center gap-2">
            <FaDigitalTachograph className="text-green-600" />
            Module 2: Digital Entrepreneurship Essentials
          </h3>
          <ul className="list-disc ml-6 mb-6 text-green-900">
            <li>Introduction to Digital Marketing</li>
            <li>Basics of connecting with your target audience online</li>
            <li>Making your business discoverable through digital platforms</li>
            <li>Trademark and copyright of digital contents</li>
            <li>
              All about social media platforms & leveraging social platforms for
              product promotion
            </li>
            <li>
              Email Marketing Basics & creating effective email campaigns for
              customer retention
            </li>
            <li>
              Case studies and best practices, getting saved from scam emails
              and messages
            </li>
            <li>Practical sessions regarding email marketing</li>
          </ul>
          <h3 className="text-2xl font-semibold mb-4 border-b border-gray-300 pb-2 flex items-center gap-2">
            <FaChartLine className="text-blue-500" />
            Module 3: Advanced Strategies and Analytics
          </h3>
          <ul className="list-disc ml-6 text-green-900">
            <li>
              Proper product listings, analytics, and product descriptions
            </li>
            <li>
              Paid Advertising Strategies: Understanding and implementing paid
              ads for impact
            </li>
            <li>
              Methods of building lasting relationships with digital customers
            </li>
            <li>
              Analytics and Improvement: Using data to measure success and make
              informed decisions
            </li>
            <li>Actionable insights for continuous improvement</li>
          </ul>
        </div>
      </Modal>
    </section>
  );
}
