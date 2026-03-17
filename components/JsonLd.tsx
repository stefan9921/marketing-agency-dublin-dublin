const BASE = "https://marketing-agency-dublin-dublin.vercel.app";

const localBusiness = {
  "@type": "LocalBusiness",
  "@id": `${BASE}/#business`,
  name: "Marketing Agency Dublin",
  image: `${BASE}/og-image.jpg`,
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
  geo: { "@type": "GeoCoordinates", latitude: 53.3938, longitude: -6.2003 },
  url: BASE,
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "08:00", closes: "18:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "09:00", closes: "13:00" },
  ],
  priceRange: "€€",
  aggregateRating: { "@type": "AggregateRating", ratingValue: "5", reviewCount: "47" },
  sameAs: [],
};

interface JsonLdProps {
  breadcrumbs?: { name: string; url: string }[];
  service?: { name: string; description: string; url: string };
  faq?: { q: string; a: string }[];
  isHomepage?: boolean;
}

export default function JsonLd({ breadcrumbs, service, faq, isHomepage }: JsonLdProps) {
  const schemas: object[] = [
    { "@context": "https://schema.org", ...localBusiness },
  ];

  if (breadcrumbs && breadcrumbs.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbs.map((b, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: b.name,
        item: b.url,
      })),
    });
  }

  if (service) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "Service",
      name: service.name,
      description: service.description,
      url: service.url,
      provider: { "@id": `${BASE}/#business` },
      areaServed: { "@type": "City", name: "Dublin" },
    });
  }

  if (faq && faq.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faq.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    });
  }

  if (isHomepage) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Marketing Agency Dublin",
      url: BASE,
      potentialAction: {
        "@type": "SearchAction",
        target: { "@type": "EntryPoint", urlTemplate: `${BASE}/?q={search_term_string}` },
        "query-input": "required name=search_term_string",
      },
    });
  }

  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
    </>
  );
}
