import "./globals.css";
import Footer from "@/components/Footer/Footer";
import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["cyrillic"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className={`dark:bg-[#02080F] ${raleway.className}`}>
        {children}
        <div className="dark:bg-[#02080F] bg-white">
          <Footer />
        </div>
      </body>
    </html>
  );
}
