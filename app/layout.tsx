"use client";
import { DarkModeProvider } from "@/contexts/theme_context";
import "./globals.css";
import Footer from "@/components/Footer/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.css"
          rel="stylesheet"
        />
      </head>
      <DarkModeProvider>
        <body className="">
          {children}
          <Footer />

          <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.js"></script>
        </body>
      </DarkModeProvider>
    </html>
  );
}
