export interface OfficeDetails {
  officeName: string;
  address: string;
  email: string;
  phoneNumber?: string;
  country: string;
  workplace?: string;
}

export enum Domain {
  HyperceIo = 'www.hyperce.io',
  HyperceUk = 'www.hyperce.uk',
  HyperceUs = 'www.hyperce.us',
  HyperceAu = 'www.hyperce.au'
}

export const contactDetailsMapping: { [key in Domain]: OfficeDetails } = {
  [Domain.HyperceUs]: {
    officeName: 'Hyperce, LLC',
    address:
      '800 N King Street Suite 304 1198 Wilmington, DE 19801 United States',
    email: 'hi@hyperce.io',
    phoneNumber: '+1-617-819-5576',
    country: 'United States'
  },
  [Domain.HyperceIo]: {
    officeName: 'Hyperce Technologies Pvt. Ltd.',
    address: 'Adarshanagar, Chandragiri - 14, Kathmandu, Nepal, 44600',
    email: 'hi@hyperce.io',
    phoneNumber: '+977-9840260599',
    country: 'Nepal',
    workplace: 'Kalimati, Kathmandu <br />(Near Kalimati Trade Center)'
  },
  [Domain.HyperceUk]: {
    officeName: 'Hyperce',
    address: '184 Pantbach Rd, Rhiwbina, Cardiff, CF14 1UG',
    email: 'hi@hyperce.io',
    // phoneNumber: '+44-0771-044-2456',
    country: 'United Kingdom'
  },
  [Domain.HyperceAu]: {
    officeName: 'Hyperce',
    address:
      'Kings Business Park - Kings Club 80 Dorcas St, South Melbourne 3205, Australia',
    email: 'hi@hyperce.io',
    // phoneNumber: ' +61406492096',
    country: 'Australia'
  }
};
