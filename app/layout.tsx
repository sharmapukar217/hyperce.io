import './globals.css';
import Footer from '@/components/Footer/Footer';
import { DM_Sans } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';
import Script from 'next/script';
import PrelineScript from '@/vendor/PrelineScript';
import { Analytics } from '@vercel/analytics/react';
import WhatsAppBtn from '@/components/WhatsAppBtn';
import { GoogleTagManager } from '@next/third-parties/google';

import Providers from './providers';

const raleway = DM_Sans({ subsets: ['latin'] });

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <html suppressHydrationWarning>
      <head>
        <meta
          name="facebook-domain-verification"
          content="hrndjxk0ddo6z4blsde8xt4mvz9d63"
        />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-01M293WQ6R"
        />

        <Script id="google-tag-manager">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}

          gtag('js', new Date());
          gtag('config', 'G-01M293WQ6R');
        `}
        </Script>

        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MLHZXN9L"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>

        <meta property="og:image" content="/og-logo.png" />
        <link rel="icon" href="/favicon.png" />
      </head>

      <Analytics />
      <GoogleTagManager gtmId="GTM-TC5WS6B6" />
      <body className={`bg-[#ebeeef] dark:bg-[#02080F] ${raleway.className}`}>
        <Providers>
          <div
            vaul-drawer-wrapper=""
            className="bg-[#ebeeef] dark:bg-[#02080F] min-h-screen max-w-full"
          >
            <PrelineScript />

            {/*<BlinticAIWidget
              baseUrl="https://app.blinticai.com"
              projectId="86266321-bcb8-4757-996b-d98404c33b33"
              apiKey="6ea3078788ed63cc6a7393d17c5064e34f45fe0822ab600ea958dab68b2dd25c"
            />*/}

            {props.children}
            <div className="dark:bg-[#02080F] bg-[#ebeeef]">
              <Footer />
            </div>
            <Toaster />
            <WhatsAppBtn />
          </div>
        </Providers>
      </body>
    </html>
  );
}
