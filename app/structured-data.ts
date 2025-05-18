export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'The Black History Foundation',
    url: 'https://theblackhistoryfoundation.org',
    logo: 'https://theblackhistoryfoundation.org/Logos/TBHF_Logo_Full Color.png',
    description: 'The Black History Foundation is dedicated to empowering the African diaspora by preserving and promoting African history, culture, and heritage.',
    sameAs: [
      'https://x.com/theresavkennedy',
      'https://facebook.com/groups/721668592155966',
      'https://instagram.com/blackhistorydao',
      'https://www.linkedin.com/company/black-history-dao/'
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 History Ave',
      addressLocality: 'Washington',
      addressRegion: 'DC',
      postalCode: '20001',
      addressCountry: 'US'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-800-555-5555',
      contactType: 'customer service',
      email: 'info@theblackhistoryfoundation.org'
    }
  };
}

export function generateNonprofitSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'NonprofitOrganization',
    name: 'The Black History Foundation',
    url: 'https://theblackhistoryfoundation.org',
    logo: 'https://theblackhistoryfoundation.org/Logos/TBHF_Logo_Full Color.png',
    description: 'The Black History Foundation is dedicated to empowering the African diaspora by preserving and promoting African history, culture, and heritage.',
    nonprofitStatus: '501c3',
    taxID: '12-3456789',
    foundingDate: '2022',
    foundingLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Washington',
        addressRegion: 'DC',
        addressCountry: 'US'
      }
    },
    email: 'info@theblackhistoryfoundation.org',
    telephone: '+1-800-555-5555',
    sameAs: [
      'https://x.com/theresavkennedy',
      'https://facebook.com/groups/721668592155966',
      'https://instagram.com/blackhistorydao',
      'https://www.linkedin.com/company/black-history-dao/'
    ]
  };
}