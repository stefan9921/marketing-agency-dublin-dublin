import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Marketing Agency Dublin",
  description: "Privacy Policy for Marketing Agency Dublin. Learn how we collect, use, and protect your personal information.",
  alternates: { canonical: "https://marketing-agency-dublin-dublin.vercel.app/privacy-policy" },
};

export default function PrivacyPage() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-3xl mx-auto prose prose-slate prose-lg">
        <h1 className="text-4xl font-black mb-8">Privacy Policy</h1>
        <p className="text-slate-500 mb-8">Last updated: March 2026</p>

        <h2 className="text-2xl font-bold mt-8 mb-4">1. Introduction</h2>
        <p>Marketing Agency Dublin (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) is committed to protecting the privacy of our website visitors and clients. This Privacy Policy explains how we collect, use, and safeguard your personal information when you visit our website or use our services.</p>

        <h2 className="text-2xl font-bold mt-8 mb-4">2. Information We Collect</h2>
        <p>We may collect the following types of personal information:</p>
        <ul className="list-disc pl-6 space-y-2 text-slate-600">
          <li>Name, email address, phone number, and business details provided through our contact forms</li>
          <li>Technical data such as IP address, browser type, and device information collected automatically</li>
          <li>Usage data including pages visited, time spent on our site, and referral sources</li>
          <li>Communication records when you contact us via email, phone, or our website</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">3. How We Use Your Information</h2>
        <p>We use your personal information to:</p>
        <ul className="list-disc pl-6 space-y-2 text-slate-600">
          <li>Respond to your enquiries and provide requested services</li>
          <li>Improve our website and services</li>
          <li>Send relevant marketing communications (with your consent)</li>
          <li>Comply with legal obligations</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">4. Data Protection</h2>
        <p>We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction. We comply with the General Data Protection Regulation (GDPR) and the Irish Data Protection Acts.</p>

        <h2 className="text-2xl font-bold mt-8 mb-4">5. Your Rights</h2>
        <p>Under GDPR, you have the right to access, rectify, erase, restrict processing, and port your personal data. You also have the right to object to processing and to withdraw consent at any time.</p>

        <h2 className="text-2xl font-bold mt-8 mb-4">6. Cookies</h2>
        <p>Our website uses cookies to improve your browsing experience and analyse site traffic. You can control cookie settings through your browser preferences.</p>

        <h2 className="text-2xl font-bold mt-8 mb-4">7. Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, please contact us at:</p>
        <p className="text-slate-600">Marketing Agency Dublin<br />Burnell Court, 146 Malahide Rd, Priorswood, Dublin 17, D17 A260<br />Email: <a href="mailto:marketingagencydublin@gmail.com" className="text-primary">marketingagencydublin@gmail.com</a><br />Phone: <a href="tel:+353831227553" className="text-primary">+353 83 122 7553</a></p>
      </div>
    </section>
  );
}
