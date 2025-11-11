export default function StructuredData() {
  const restaurantData = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    '@id': 'https://almousli.se',
    name: 'Almousli Restaurang',
    alternateName: 'مطعم الموصللي',
    description: 'Authentic Middle Eastern Iraqi cuisine in Eskilstuna. Shawarma, grilled & fried chicken, burgers, salads.',
    url: 'https://almousli.se',
    telephone: '+46737330513',
    email: 'info@almousli.se',
    image: 'https://almousli.se/og-image.jpg',
    servesCuisine: ['Middle Eastern', 'Iraqi', 'Mediterranean'],
    acceptsReservations: true,
    priceRange: '$$',
    currenciesAccepted: 'SEK',
    paymentAccepted: 'Cash, Credit Card, Swish',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Careliigatan 9',
      addressLocality: 'Eskilstuna',
      postalCode: '632 19',
      addressCountry: 'SE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 59.37,
      longitude: 16.5,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Sunday',
        opens: '10:30',
        closes: '21:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
        opens: '10:00',
        closes: '21:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Friday', 'Saturday'],
        opens: '10:00',
        closes: '22:00',
      },
    ],
    sameAs: [
      'https://www.instagram.com/almousli_restaurang',
      'https://www.facebook.com/almousli',
      'https://wolt.com/sv/swe/eskilstuna/restaurant/almousli-restaurang',
      'https://www.foodora.se/restaurant/dlxr/almousli-restaurang',
      'https://www.ubereats.com/se/store/almousli-restaurang/94KUlu9pXn-0m7oHRl5J5A?diningMode=DELIVERY&surfaceName=',
    ],
  };

  const localBusinessData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://almousli.se/#localbusiness',
    name: 'Almousli Restaurang',
    image: 'https://almousli.se/og-image.jpg',
    url: 'https://almousli.se',
    telephone: '+46737330513',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Careliigatan 9',
      addressLocality: 'Eskilstuna',
      postalCode: '632 19',
      addressCountry: 'SE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 59.37,
      longitude: 16.5,
    },
    openingHoursSpecification: restaurantData.openingHoursSpecification,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessData) }}
      />
    </>
  );
}
