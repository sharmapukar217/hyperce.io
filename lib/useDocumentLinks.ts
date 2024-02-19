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
        break;
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
