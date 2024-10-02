import './globals.css';
import Footer from '@/components/Footer/Footer';
import { DM_Sans } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';
import Script from 'next/script';
import PrelineScript from '@/vendor/PrelineScript';
import WhatsAppBtn from '@/components/WhatsAppBtn';
import { GoogleTagManager } from '@next/third-parties/google';

const raleway = DM_Sans({ subsets: ['latin'] });

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
  title: string;
  og_img: string;
  og_description: string;
}) {
  const ROOT_OG_IMAGE = '/og-logo.png';
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

        <Script strategy="beforeInteractive" id="gtag-loader">
          {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-MLHZXN9L');
          `}
        </Script>

        <Script id="google-tag-manager">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}

          gtag('js', new Date());
          gtag('config', 'G-01M293WQ6R');

          gtag('event', 'conversion_event_contact_1',{
              
          });
        `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=875677840678684&ev=PageView&noscript=1"
          />
        </noscript>

        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MLHZXN9L"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>

        <meta property="og:image" content={ROOT_OG_IMAGE} />
        <link rel="icon" href="/favicon.png" />
      </head>
      {/*
        this shiould be inside head tag
        <script defer data-domain="hyperce.io" src="https://analytics.hyperce.io/js/script.js"></script> 
        <script defer data-domain="hyperce.io" src="http://104.208.74.132:8000/js/script.js"></script>  
      */}

      <GoogleTagManager gtmId="GTM-TC5WS6B6" />
      <body className={`bg-[#ebeeef] dark:bg-[#02080F] ${raleway.className}`}>
        <PrelineScript />

        {children}
        <div className="dark:bg-[#02080F] bg-[#ebeeef]">
          <Footer />
        </div>
        <Toaster />
        <WhatsAppBtn />
      </body>
    </html>
  );
}
