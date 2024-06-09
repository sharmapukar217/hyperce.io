'use client';

import { useEffect, useState } from 'react';
import { Domain } from '@/data/ContactDetailsData/OfficeMapping';

export const useFounderData = () => {
  const [data, setData] = useState({
    title: 'Founder, Hyperce.',
    founder: 'Biplab Karki',
    imageUrl: '/biplab.png',
    quote:
      "As the founder of Hyperce, I am driven by a vision of a dynamic eCommerce landscape where businesses thrive, innovate, and succeed. We are here to empower your journey with cutting-edge eCommerce platforms and AI-powered solutions. Together, we'll shape the future of online commerce. Welcome to the Hyperce family!"
  });

  useEffect(() => {
    const domain: Domain = window.location.hostname as Domain;

    switch (domain) {
      case Domain.HyperceUk: {
        setData({
          founder: 'Huw Davies',
          title: 'CEO, Hyperce UK',
          imageUrl: '/Huw Davies.webp',
          quote:
            "As the founder and CEO of Hyperce UK, I am driven by a vision of a dynamic eCommerce landscape where businesses thrive, innovate, and succeed. We are here to empower your journey with cutting-edge eCommerce platforms and AI-powered solutions. Together, we'll shape the future of online commerce. Welcome to the Hyperce family!"
        });
        break;
      }
      case Domain.HyperceAu: {
        setData({
          founder: 'Jawwad Aamer Khan',
          title: 'CEO, Hyperce',
          imageUrl: '/Jawwad Aamer Khan.jpeg',
          quote:
            "As the founder and CEO of Hyperce Australia, I am driven by a vision of a dynamic eCommerce landscape where businesses thrive, innovate, and succeed. We are here to empower your journey with cutting-edge eCommerce platforms and AI-powered solutions. Together, we'll shape the future of online commerce. Welcome to the Hyperce family!"
        });
        break;
      }
      default: {
        setData({
          founder: 'Biplab Karki',
          title: 'Founder & CEO, Hyperce.',
          imageUrl: '/biplab.png',
          quote:
            "As the founder of Hyperce, I am driven by a vision of a dynamic eCommerce landscape where businesses thrive, innovate, and succeed. We are here to empower your journey with cutting-edge eCommerce platforms and AI-powered solutions. Together, we'll shape the future of online commerce. Welcome to the Hyperce family!"
        });
        break;
      }
    }
  }, []);

  return [data];
};
