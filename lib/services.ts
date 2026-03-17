export interface ServiceData {
  slug: string;
  title: string;
  metaTitle: string;
  metaDesc: string;
  heroTitle: string;
  heroSubtitle: string;
  icon: string;
  intro: { heading: string; paragraphs: string[] };
  benefits: { icon: string; title: string; desc: string }[];
  process: { title: string; desc: string }[];
  faq: { q: string; a: string }[];
}

export const services: ServiceData[] = [
  {
    slug: "search-engine-optimisation",
    title: "Search Engine Optimisation",
    metaTitle: "SEO Agency Dublin | Search Engine Optimisation Services",
    metaDesc: "Leading SEO agency in Dublin. We boost your organic traffic with data-driven SEO strategies. Technical SEO, content optimisation & link building. Free audit.",
    heroTitle: "Search Engine Optimisation in Dublin",
    heroSubtitle: "Boost your organic traffic and maximise ROI with our data-driven SEO strategies tailored specifically for the competitive Dublin market.",
    icon: "search",
    intro: {
      heading: "Professional SEO Strategy",
      paragraphs: [
        "Our professional SEO strategy focuses on comprehensive keyword research, on-page optimisation, and high-quality backlink building to ensure long-term success in the digital landscape.",
        "We use advanced analytics tools to identify the exact search terms your customers are using. By aligning your website's content with user intent, we drive qualified traffic that actually converts into sales.",
        "Our Dublin-based experts stay ahead of algorithm updates, ensuring your business remains visible and competitive regardless of market shifts.",
      ],
    },
    benefits: [
      { icon: "bar_chart", title: "Increased Visibility", desc: "Dominate the first page of Google for terms that matter most to your business and brand." },
      { icon: "ads_click", title: "Qualified Leads", desc: "Attract users who are actively searching for your services and ready to make a purchase." },
      { icon: "payments", title: "Higher ROI", desc: "Organic traffic provides a higher long-term return on investment compared to paid advertising." },
      { icon: "bolt", title: "Site Performance", desc: "We optimise your site's speed and user experience, benefiting both SEO and conversion rates." },
    ],
    process: [
      { title: "In-Depth Audit", desc: "We analyse your current site performance, technical health, and keyword rankings to find every opportunity for growth." },
      { title: "Custom Strategy", desc: "Based on the audit, we develop a bespoke SEO roadmap tailored to your specific goals and Dublin's local market." },
      { title: "Implementation", desc: "Our team executes technical fixes, content optimisations, and link-building campaigns to boost your authority." },
      { title: "Reporting & Refinement", desc: "We provide transparent monthly reports and continuously tweak our strategy to ensure maximum performance and growth." },
    ],
    faq: [
      { q: "How long does SEO take to show results?", a: "Most businesses see meaningful improvements within 3-6 months, with significant results by 6-12 months. SEO is a long-term investment that compounds over time." },
      { q: "Do you guarantee first-page rankings?", a: "No ethical SEO agency can guarantee specific rankings. However, we have a strong track record of achieving first-page positions for competitive keywords across Dublin and Ireland." },
      { q: "What's included in your SEO service?", a: "Our comprehensive service includes technical SEO audits, keyword research, on-page optimisation, content strategy, link building, local SEO, and monthly performance reporting." },
    ],
  },
  {
    slug: "google-ads-ppc",
    title: "Google Ads & PPC",
    metaTitle: "Google Ads & PPC Management Dublin | Marketing Agency Dublin",
    metaDesc: "Expert Google Ads and PPC management in Dublin. Maximise your ad spend with targeted campaigns that deliver qualified leads and measurable ROI.",
    heroTitle: "Google Ads & PPC Management in Dublin",
    heroSubtitle: "Drive immediate, targeted traffic to your business with expertly managed Google Ads campaigns that maximise every euro of your ad spend.",
    icon: "ads_click",
    intro: {
      heading: "Strategic PPC Campaigns That Convert",
      paragraphs: [
        "Our PPC management service goes beyond simply running ads. We develop comprehensive strategies that target your ideal customers at every stage of the buying journey.",
        "From keyword selection and ad copywriting to landing page optimisation and bid management, we handle every aspect of your paid search campaigns to ensure maximum return on investment.",
        "We specialise in Google Ads, Google Shopping, and remarketing campaigns designed specifically for the Irish market.",
      ],
    },
    benefits: [
      { icon: "speed", title: "Immediate Results", desc: "Unlike SEO, PPC delivers instant visibility and traffic from day one of your campaign launch." },
      { icon: "target", title: "Precise Targeting", desc: "Reach your exact audience by location, demographics, interests, and search behaviour." },
      { icon: "monitoring", title: "Measurable ROI", desc: "Track every click, conversion, and euro spent with complete transparency and detailed reporting." },
      { icon: "tune", title: "Full Control", desc: "Adjust budgets, targeting, and messaging in real-time to optimise campaign performance." },
    ],
    process: [
      { title: "Account Audit & Research", desc: "We analyse your existing campaigns (if any) and research your market, competitors, and keyword opportunities." },
      { title: "Campaign Setup", desc: "We build optimised campaign structures with targeted ad groups, compelling ad copy, and effective landing pages." },
      { title: "Launch & Optimise", desc: "Campaigns go live with continuous monitoring. We optimise bids, ads, and targeting daily for peak performance." },
      { title: "Scale & Report", desc: "Once we find winning formulas, we scale campaigns while providing detailed monthly performance reports." },
    ],
    faq: [
      { q: "What budget do I need for Google Ads?", a: "We recommend a minimum of €500/month in ad spend for local Dublin campaigns, though budgets vary based on industry competitiveness and goals." },
      { q: "How quickly will I see results?", a: "You can expect to see clicks and traffic within hours of launching. Meaningful conversion data typically appears within 2-4 weeks." },
      { q: "Do you manage the entire process?", a: "Yes, we handle everything from keyword research and ad creation to bid management, landing page optimisation, and detailed reporting." },
    ],
  },
  {
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    metaTitle: "Social Media Marketing Dublin | Marketing Agency Dublin",
    metaDesc: "Professional social media marketing in Dublin. Build your brand, engage your audience & drive sales with strategic social media management across all platforms.",
    heroTitle: "Social Media Marketing in Dublin",
    heroSubtitle: "Build a powerful social media presence that engages your audience, builds brand loyalty, and drives measurable business results across all major platforms.",
    icon: "share",
    intro: {
      heading: "Strategic Social Media Management",
      paragraphs: [
        "Social media isn't just about posting content — it's about building meaningful connections with your audience. Our strategic approach combines creative content with data-driven insights to grow your brand.",
        "We manage your presence across Facebook, Instagram, LinkedIn, TikTok, and X (Twitter), creating platform-specific content that resonates with your target audience in Dublin and beyond.",
        "From organic content creation to paid social advertising, we deliver comprehensive social media solutions that support your business objectives.",
      ],
    },
    benefits: [
      { icon: "groups", title: "Brand Awareness", desc: "Increase your brand's visibility and recognition among your target audience in Dublin and Ireland." },
      { icon: "forum", title: "Customer Engagement", desc: "Build real relationships with your customers through authentic, engaging social content." },
      { icon: "trending_up", title: "Lead Generation", desc: "Convert social followers into paying customers with targeted content and advertising strategies." },
      { icon: "insights", title: "Data-Driven", desc: "Every decision backed by analytics, ensuring your social strategy delivers measurable results." },
    ],
    process: [
      { title: "Social Audit", desc: "We review your current social presence, analyse competitors, and identify opportunities for growth." },
      { title: "Content Strategy", desc: "We develop a custom content calendar with engaging posts, stories, and campaigns tailored to your brand." },
      { title: "Content Creation & Publishing", desc: "Our creative team produces and publishes high-quality content across your chosen platforms." },
      { title: "Community Management & Reporting", desc: "We engage with your audience daily and provide detailed monthly reports on growth and engagement." },
    ],
    faq: [
      { q: "Which social platforms should my business be on?", a: "It depends on your audience. We'll help you identify the platforms where your ideal customers spend their time and focus your efforts there." },
      { q: "How often will you post?", a: "Our standard plans include 3-5 posts per week per platform, but this is customised based on your goals and industry." },
      { q: "Do you handle social media advertising?", a: "Yes, we manage paid social campaigns across Facebook, Instagram, LinkedIn, and TikTok to amplify your reach and generate leads." },
    ],
  },
  {
    slug: "local-seo",
    title: "Local SEO",
    metaTitle: "Local SEO Dublin | Google Business Profile Optimisation",
    metaDesc: "Dominate local search results in Dublin with our expert local SEO services. Google Business Profile optimisation, local citations & map pack rankings.",
    heroTitle: "Local SEO Services in Dublin",
    heroSubtitle: "Get found by local customers when they need you most. Our local SEO strategies put your business at the top of Google Maps and local search results.",
    icon: "location_on",
    intro: {
      heading: "Dominate Local Search in Dublin",
      paragraphs: [
        "Local SEO is essential for any business serving customers in a specific geographic area. We specialise in helping Dublin businesses appear prominently in local search results and Google Maps.",
        "Our local SEO service includes Google Business Profile optimisation, local citation building, review management, and geo-targeted content strategies that drive foot traffic and local enquiries.",
        "Whether you're a restaurant in Temple Bar, a solicitor in the city centre, or a tradesperson serving all of Dublin, we'll ensure local customers find you first.",
      ],
    },
    benefits: [
      { icon: "map", title: "Map Pack Rankings", desc: "Appear in Google's coveted 3-pack for local searches, the first thing customers see." },
      { icon: "storefront", title: "Google Business Profile", desc: "Fully optimised GBP listing that drives calls, website visits, and direction requests." },
      { icon: "star", title: "Review Management", desc: "Build and manage your online reputation with a strategic approach to customer reviews." },
      { icon: "my_location", title: "Local Citations", desc: "Consistent NAP data across all relevant directories to boost your local authority." },
    ],
    process: [
      { title: "Local SEO Audit", desc: "We assess your current local search visibility, GBP listing, citations, and competitor landscape." },
      { title: "GBP Optimisation", desc: "We fully optimise your Google Business Profile with compelling descriptions, categories, photos, and posts." },
      { title: "Citation Building", desc: "We build and clean up your business listings across key Irish and international directories." },
      { title: "Ongoing Optimisation", desc: "Regular GBP posts, review management, and local content creation to maintain and improve rankings." },
    ],
    faq: [
      { q: "What is local SEO?", a: "Local SEO focuses on optimising your online presence to attract customers from nearby searches, including Google Maps, 'near me' searches, and location-based queries." },
      { q: "How important is Google Business Profile?", a: "Extremely important. Your GBP listing is often the first interaction customers have with your business. A well-optimised profile can significantly increase calls, visits, and enquiries." },
      { q: "Can you help with negative reviews?", a: "Yes, we help develop review response strategies and can assist in addressing inappropriate reviews according to Google's guidelines." },
    ],
  },
  {
    slug: "web-design",
    title: "Web Design",
    metaTitle: "Web Design Dublin | Website Design & Development Company",
    metaDesc: "Professional web design in Dublin. Beautiful, fast-loading websites that convert visitors into customers. Custom WordPress & Next.js development. Free quote.",
    heroTitle: "Web Design & Development in Dublin",
    heroSubtitle: "Beautiful, lightning-fast websites engineered to convert visitors into customers. We design and build digital experiences that drive real business growth.",
    icon: "devices",
    intro: {
      heading: "Websites That Work As Hard As You Do",
      paragraphs: [
        "Your website is your most important digital asset. We design and develop bespoke websites that not only look stunning but are strategically built to achieve your business goals.",
        "Every site we build is mobile-responsive, SEO-optimised, and engineered for speed. We use modern technologies and proven design principles to create sites that load fast and convert visitors into customers.",
        "From brochure sites to complex e-commerce platforms, our Dublin design team delivers websites that stand out in a crowded market.",
      ],
    },
    benefits: [
      { icon: "phone_iphone", title: "Mobile-First Design", desc: "Every website we build looks and works perfectly on all devices, from phones to desktops." },
      { icon: "speed", title: "Lightning Fast", desc: "Optimised for speed with Core Web Vitals compliance, improving both UX and SEO rankings." },
      { icon: "palette", title: "Custom Design", desc: "No templates. Every site is custom-designed to reflect your brand identity and business goals." },
      { icon: "lock", title: "Secure & Maintained", desc: "SSL certificates, regular updates, and ongoing maintenance to keep your site safe and performing." },
    ],
    process: [
      { title: "Discovery & Brief", desc: "We learn about your business, goals, audience, and competitors to create a comprehensive design brief." },
      { title: "Design & Prototype", desc: "Our designers create stunning mockups and interactive prototypes for your review and feedback." },
      { title: "Development & Testing", desc: "We build your site using modern technologies, with rigorous testing across devices and browsers." },
      { title: "Launch & Support", desc: "We handle deployment, training, and provide ongoing support and maintenance for your new website." },
    ],
    faq: [
      { q: "How long does a website take to build?", a: "A typical brochure website takes 4-6 weeks. More complex sites with custom functionality may take 8-12 weeks." },
      { q: "Do you provide website hosting?", a: "Yes, we offer managed hosting packages with security updates, backups, and performance monitoring included." },
      { q: "Can I update the website myself?", a: "Absolutely. We build sites with user-friendly CMS platforms and provide full training so you can make content updates easily." },
    ],
  },
  {
    slug: "content-digital-strategy",
    title: "Content & Digital Strategy",
    metaTitle: "Content & Digital Strategy Dublin | Marketing Agency Dublin",
    metaDesc: "Strategic content marketing and digital strategy services in Dublin. Build authority, drive engagement & grow your business with data-driven content solutions.",
    heroTitle: "Content & Digital Strategy in Dublin",
    heroSubtitle: "Build authority and drive sustainable growth with strategic content marketing and comprehensive digital strategies tailored to your business goals.",
    icon: "lightbulb",
    intro: {
      heading: "Strategy-First Content Marketing",
      paragraphs: [
        "Content without strategy is just noise. We develop comprehensive content and digital strategies that align with your business objectives, target audience, and competitive landscape.",
        "From blog posts and case studies to video content and email campaigns, every piece of content we create serves a strategic purpose — whether that's building authority, generating leads, or nurturing prospects.",
        "Our data-driven approach ensures your content investment delivers measurable returns, with clear KPIs and regular reporting on performance.",
      ],
    },
    benefits: [
      { icon: "auto_stories", title: "Brand Authority", desc: "Position your business as an industry leader with expert, authoritative content." },
      { icon: "trending_up", title: "Organic Growth", desc: "Content that ranks well in search engines, driving sustainable organic traffic growth." },
      { icon: "conversion_path", title: "Lead Nurturing", desc: "Strategic content that guides prospects through the buyer's journey to conversion." },
      { icon: "analytics", title: "Measurable Impact", desc: "Clear KPIs and regular reporting so you always know the impact of your content investment." },
    ],
    process: [
      { title: "Strategy Workshop", desc: "We conduct a deep dive into your business, audience personas, competitors, and content gaps." },
      { title: "Content Planning", desc: "We develop a comprehensive content calendar with topics, formats, and distribution channels mapped out." },
      { title: "Content Production", desc: "Our writers and creatives produce high-quality content optimised for search and engagement." },
      { title: "Distribution & Analysis", desc: "We distribute content strategically and analyse performance to continuously refine the approach." },
    ],
    faq: [
      { q: "What types of content do you create?", a: "We produce blog articles, case studies, whitepapers, email campaigns, social media content, video scripts, and more — whatever serves your strategy best." },
      { q: "How do you measure content success?", a: "We track organic traffic, engagement metrics, lead generation, conversion rates, and SEO rankings, providing detailed monthly reports." },
      { q: "Do I need a content strategy?", a: "If you want your content efforts to deliver measurable business results rather than just filling space, absolutely. Strategy is what separates effective content from wasted effort." },
    ],
  },
];

export function getService(slug: string): ServiceData | undefined {
  return services.find((s) => s.slug === slug);
}
