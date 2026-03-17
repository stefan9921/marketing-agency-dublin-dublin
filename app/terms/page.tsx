import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Marketing Agency Dublin. Read our terms and conditions for using our website and marketing services.",
  alternates: { canonical: "https://marketing-agency-dublin-dublin.vercel.app/terms" },
};

export default function TermsPage() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-3xl mx-auto prose prose-slate prose-lg">
        <h1 className="text-4xl font-black mb-8">Terms of Service</h1>
        <p className="text-slate-500 mb-8">Last updated: March 2026</p>

        <h2 className="text-2xl font-bold mt-8 mb-4">1. Agreement to Terms</h2>
        <p>By accessing or using the Marketing Agency Dublin website and services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our website or services.</p>

        <h2 className="text-2xl font-bold mt-8 mb-4">2. Services</h2>
        <p>Marketing Agency Dublin provides digital marketing services including SEO, PPC management, web design, social media marketing, local SEO, and content strategy. Specific service terms are outlined in individual client agreements.</p>

        <h2 className="text-2xl font-bold mt-8 mb-4">3. Intellectual Property</h2>
        <p>All content on this website, including text, graphics, logos, and design elements, is the property of Marketing Agency Dublin and is protected by Irish and international copyright laws. You may not reproduce, distribute, or create derivative works without our written consent.</p>

        <h2 className="text-2xl font-bold mt-8 mb-4">4. Client Obligations</h2>
        <p>Clients agree to provide accurate information, timely feedback, and necessary access to accounts and platforms required for service delivery. Delays caused by client non-cooperation may affect project timelines.</p>

        <h2 className="text-2xl font-bold mt-8 mb-4">5. Payment Terms</h2>
        <p>Payment terms are specified in individual client agreements. Unless otherwise stated, invoices are due within 14 days of issue. Late payments may incur interest at the rate permitted under Irish law.</p>

        <h2 className="text-2xl font-bold mt-8 mb-4">6. Limitation of Liability</h2>
        <p>Marketing Agency Dublin shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services. Our total liability shall not exceed the fees paid for the services in question.</p>

        <h2 className="text-2xl font-bold mt-8 mb-4">7. Termination</h2>
        <p>Either party may terminate a service agreement with 30 days&apos; written notice unless otherwise specified in the individual agreement. Outstanding fees remain payable upon termination.</p>

        <h2 className="text-2xl font-bold mt-8 mb-4">8. Governing Law</h2>
        <p>These Terms are governed by and construed in accordance with the laws of Ireland. Any disputes shall be subject to the exclusive jurisdiction of the Irish courts.</p>

        <h2 className="text-2xl font-bold mt-8 mb-4">9. Contact</h2>
        <p>For questions about these Terms, contact us at:<br />Marketing Agency Dublin<br />Burnell Court, 146 Malahide Rd, Priorswood, Dublin 17, D17 A260<br />Email: <a href="mailto:marketingagencydublin@gmail.com" className="text-primary">marketingagencydublin@gmail.com</a></p>
      </div>
    </section>
  );
}
