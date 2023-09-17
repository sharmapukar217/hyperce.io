"use client";

import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";

export default function AnimateWrapper({ children }: any) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);
  return <>{children}</>;
}
