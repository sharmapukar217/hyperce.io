export interface OfficeDetails {
  officeName: string;
  address: string;
  email: string;
  phoneNumber: string;
  country: string;
}

export enum Domain {
  HyperceIo = 'www.hyperce.io',
  HyperceUk = 'www.hyperce.uk',
  HyperceUs = 'www.hyperce.us'
  // Localhost = 'localhost'
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
    country: 'Nepal'
  },
  [Domain.HyperceUk]: {
    officeName: 'Hyperce',
    address: '184 Pantbach Rd, Rhiwbina, Cardiff, CF14 1UG',
    email: 'hi@hyperce.uk',
    phoneNumber: '+44-0771-044-2456',
    country: 'United Kingdom'
  }
  // [Domain.Localhost]: {
  //   officeName: 'Hyperce Technologies Pvt. Ltd.',
  //   address: 'Adarshanagar, Chandragiri - 14, Kathmandu, Nepal, 44600',
  //   email: 'hi@hyperce.io',
  //   phoneNumber: '+977-9840260599',
  //   country: 'Nepal'
  // }
};
