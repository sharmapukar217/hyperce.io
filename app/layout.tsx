import "./globals.css";
import Footer from "@/components/Footer/Footer";
import { Raleway, Public_Sans, DM_Sans } from "next/font/google";

const raleway = DM_Sans({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head></head>
      <body className={`dark:bg-[#02080F] ${raleway.className}`}>
        {children}
        <div className="dark:bg-[#02080F] bg-white">
          <Footer />
        </div>
      </body>
    </html>
  );
}
