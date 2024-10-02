'use client';

import AOS from 'aos';
import 'aos/dist/aos.css';

import { useEffect } from 'react';

export default function AnimateWrapper({ children }: any) {
  useEffect(() => {
    AOS.init({
      disable: true,
      duration: 0,
      once: false
    });
  }, []);
  return <>{children}</>;
}
