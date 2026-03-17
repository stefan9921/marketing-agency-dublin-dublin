export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://marketing-agency-dublin-dublin.vercel.app/#business",
    name: "Marketing Agency Dublin",
    image: "https://marketing-agency-dublin-dublin.vercel.app/og-image.jpg",
    telephone: "+353831227553",
    email: "marketingagencydublin@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Burnell Court, 146 Malahide Rd, Priorswood",
      addressLocality: "Dublin 17",
      addressRegion: "Dublin",
      postalCode: "D17 A260",
      addressCountry: "IE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 53.3938,
      longitude: -6.2003,
    },
    url: "https://marketing-agency-dublin-dublin.vercel.app",
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "08:00", closes: "18:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "09:00", closes: "13:00" },
    ],
    priceRange: "€€",
    aggregateRating: { "@type": "AggregateRating", ratingValue: "5", reviewCount: "47" },
    sameAs: [],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
