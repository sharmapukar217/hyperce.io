'use client';

import { useEffect, useState } from 'react';
import { Domain } from '@/data/ContactDetailsData/OfficeMapping';

export const useProposal = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    const domain: Domain = window.location.hostname as Domain;

    switch (domain) {
      case Domain.HyperceUk: {
        return setData('https://docs.hyperce.io/hyperce-uk-proposal.pdf');
        break;
      }
      case Domain.HyperceAu: {
        return setData(
          'https://docs.hyperce.io/hyperce-australia-proposal.pdf'
        );
      }
      default: {
        return setData('https://docs.hyperce.io/hyperce-proposal.pdf');
      }
    }
  }, []);

  return [data];
};

export const useSuiteLink = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    const domain: Domain = window.location.hostname as Domain;

    switch (domain) {
      case Domain.HyperceUk: {
        return setData('https://docs.hyperce.io/hyperce-uk-suite-book.pdf');
      }
      case Domain.HyperceAu: {
        return setData(
          'https://docs.hyperce.io/hyperce-australia-suite-book.pdf'
        );
      }
      default: {
        return setData('https://docs.hyperce.io/hyperce-suite-book.pdf');
      }
    }
  }, []);

  return [data];
};

export const useYoutubeUrl = () => {
  const [data, setData] = useState({
    url: 'https://www.youtube.com/watch?v=wUNHpMc2bQQ',
    embedUrl: 'https://www.youtube.com/embed/wUNHpMc2bQQ?si=Np08Gx6mk7DwcAMF'
  });

  useEffect(() => {
    const domain: Domain = window.location.hostname as Domain;

    switch (domain) {
      case Domain.HyperceUk: {
        return setData({
          url: 'https://www.youtube.com/watch?si=8tn9fmctlOIlvedh&v=DKsEXe4RfSA&feature=youtu.be',
          embedUrl:
            'https://www.youtube.com/embed/DKsEXe4RfSA?si=8tn9fmctlOIlvedh'
        });
      }
      case Domain.HyperceAu: {
        return setData({
          url: 'https://www.youtube.com/watch?v=wUNHpMc2bQQ',
          embedUrl:
            'https://www.youtube.com/embed/wUNHpMc2bQQ?si=Np08Gx6mk7DwcAMF'
        });
      }
      default: {
        return setData({
          url: 'https://www.youtube.com/watch?v=wUNHpMc2bQQ',
          embedUrl:
            'https://www.youtube.com/embed/wUNHpMc2bQQ?si=Np08Gx6mk7DwcAMF'
        });
      }
    }
  }, []);

  return [data];
};
