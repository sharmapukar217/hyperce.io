'use client';

import { useEffect, useState } from 'react';
import { Domain } from '@/data/ContactDetailsData/OfficeMapping';

export const useFounderData = () => {
  const [data, setData] = useState({
    title: 'Founder & CEO, Hyperce.',
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
          imageUrl:
            'https://media.discordapp.net/attachments/1129807618907590656/1206929912116682824/huwd.png?ex=65ddcc12&is=65cb5712&hm=f7e20df1890216a63f6ae55f09306f668bf1655d154b79a99387363837d67a2b&=&format=webp&quality=lossless&width=575&height=603',
          quote:
            "As the founder and CEO of Hyperce UK, I am driven by a vision of a dynamic eCommerce landscape where businesses thrive, innovate, and succeed. We are here to empower your journey with cutting-edge eCommerce platforms and AI-powered solutions. Together, we'll shape the future of online commerce. Welcome to the Hyperce family!"
        });
        break;
      }
      case Domain.HyperceAu: {
        setData({
          founder: 'Jawwad Aamer Khan',
          title: 'CEO, Hyperce',
          imageUrl:
            'https://media.discordapp.net/attachments/1129807618907590656/1208043723418632242/WhatsApp_Image_2024-02-16_at_19.16.28.jpeg?ex=65e1d964&is=65cf6464&hm=742ed45a9bf082210a2945a7ab7bfa2423ce047bfb92c81d7dcb9a2682b409ea&=&width=575&height=603',
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
