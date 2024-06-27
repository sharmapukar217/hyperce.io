import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';

export default function Page() {
  const date = new Date(2024, 6, 26);

  return (
    <div className="fixed inset-0 select-none">
      <div
        className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-slate-900 bg-[size:6rem_4rem]
      bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)]
      dark:bg-[linear-gradient(to_right,rgb(30,41,59)_1px,transparent_1px),linear-gradient(to_bottom,rgb(30,41,59)_1px,transparent_1px)] overflow-auto
       "
      >
        <Navbar className="!bg-transparent" />

        <div className="fixed -z-50 pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_40%,black)]"></div>

        <div className="container py-8 md:px-20 grid text-justify justify-center">
          <div className="text-center">
            <h1 className="text-xl md:text-3xl font-medium text-center font-mono">
              Hyperce.io Privacy Policy
            </h1>
            <h2 className="text-lg text-gray-700 dark:text-gray-300 font-mono">
              Effective from {date.toLocaleDateString()}
            </h2>
          </div>

          <div className="prose">
            <ol>
              <li className="dark:text-gray-300/90">
                <h3 className="dark:text-gray-100">Information We Collect</h3>

                <ul>
                  <li className="dark:text-gray-300/90">
                    <strong className="dark:text-gray-300">
                      Personal Data:{' '}
                    </strong>
                    <span>
                      We collect personal information such as your name, email
                      address, shipping address, and phone number when you
                      register on our site or place an order.
                    </span>
                  </li>

                  <li className="dark:text-gray-300/90">
                    <strong className="dark:text-gray-300">
                      Derivative Data:{' '}
                    </strong>
                    <span>
                      Our servers automatically collect data such as your IP
                      address, browser type, operating system, and the pages you
                      have visited before and after accessing our site.{' '}
                    </span>
                  </li>

                  <li className="dark:text-gray-300/90">
                    <strong className="dark:text-gray-300">
                      Financial Data:{' '}
                    </strong>
                    <span>
                      We collect payment details such as credit card numbers and
                      billing information when you make a purchase.
                    </span>
                  </li>
                </ul>
              </li>

              <li className="dark:text-gray-300/90">
                <h3 className="dark:text-gray-100"> Use of Information</h3>

                <span>We use the information we collect to:</span>

                <ul>
                  <li className="dark:text-gray-300/90">
                    Create and manage your account.
                  </li>
                  <li className="dark:text-gray-300/90">
                    Process and manage your orders.
                  </li>
                  <li className="dark:text-gray-300/90">
                    Personalize your experience and tailor content and
                    advertising to your interests.
                  </li>
                  <li className="dark:text-gray-300/90">
                    Improve our website, products, and services.
                  </li>
                  <li className="dark:text-gray-300/90">
                    Send promotional communications like newsletters.
                  </li>
                </ul>
              </li>

              <li className="dark:text-gray-300/90">
                <h3 className="dark:text-gray-100">Sharing Information</h3>
                <span>
                  We may share your information in the following scenarios:
                </span>

                <ul>
                  <li className="dark:text-gray-300/90">
                    <strong className="dark:text-gray-300">
                      By Law or to Protect Rights:
                    </strong>{' '}
                    If required by law or to protect our rights.
                  </li>
                  <li className="dark:text-gray-300/90">
                    <strong className="dark:text-gray-300">
                      Third-Party Service Providers:
                    </strong>{' '}
                    With service providers who perform tasks on our behalf, such
                    as payment processing and marketing.
                  </li>
                  <li className="dark:text-gray-300/90">
                    <strong className="dark:text-gray-300">Advertising:</strong>{' '}
                    With third-party advertisers to deliver relevant ads.
                  </li>
                </ul>
              </li>

              <li className="dark:text-gray-300/90">
                <h3 className="dark:text-gray-100">Tracking Technologies</h3>
                <ul>
                  <li className="dark:text-gray-300/90">
                    <strong className="dark:text-gray-300">
                      Cookies and Web Beacons:
                    </strong>{' '}
                    We use these to customize your experience and improve our
                    services.
                  </li>
                  <li className="dark:text-gray-300/90">
                    <strong className="dark:text-gray-300">
                      Internet-Based Advertising:
                    </strong>{' '}
                    We partner with third-party advertising companies to serve
                    ads based on your interests.
                  </li>
                </ul>
              </li>
            </ol>
          </div>
          {/* content here */}
        </div>

        <Footer />
      </div>
    </div>
  );
}
