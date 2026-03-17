import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContactForm from "@/components/ContactForm";

const BASE = "https://marketing-agency-dublin-dublin.vercel.app";

export const metadata: Metadata = {
  title: "Contact Marketing Agency Dublin | Get a Free Quote",
  description: "Contact Marketing Agency Dublin for a free, no-obligation consultation. Call +353 83 122 7553 or fill in our form. Based at Burnell Court, 146 Malahide Rd, Dublin 17.",
  alternates: { canonical: `${BASE}/contact` },
  openGraph: {
    title: "Contact Marketing Agency Dublin | Get a Free Quote",
    description: "Contact Marketing Agency Dublin for a free consultation. Call +353 83 122 7553.",
    url: `${BASE}/contact`,
    siteName: "Marketing Agency Dublin",
    locale: "en_IE",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd breadcrumbs={[{ name: "Home", url: BASE }, { name: "Contact", url: `${BASE}/contact` }]} />
      <Breadcrumbs items={[{ name: "Contact" }]} />

      <section className="bg-primary py-20 lg:py-28 px-6 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl lg:text-6xl font-black">Contact Us</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">Ready to grow your business? Get in touch for a free, no-obligation consultation.</p>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold mb-8">Get Your Free Quote</h2>
            <ContactForm />
          </div>
          <div className="space-y-8">
            <h2 className="text-3xl font-bold">Get in Touch</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary text-3xl mt-1">location_on</span>
                <div>
                  <h3 className="font-bold text-lg">Visit Us</h3>
                  <p className="text-slate-600">Burnell Court, 146 Malahide Rd,<br />Priorswood, Dublin 17,<br />Dublin, D17 A260</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary text-3xl mt-1">phone</span>
                <div>
                  <h3 className="font-bold text-lg">Call Us</h3>
                  <a href="tel:+353831227553" className="text-primary font-bold text-lg hover:underline">+353 83 122 7553</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary text-3xl mt-1">email</span>
                <div>
                  <h3 className="font-bold text-lg">Email Us</h3>
                  <a href="mailto:marketingagencydublin@gmail.com" className="text-primary font-bold hover:underline">marketingagencydublin@gmail.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary text-3xl mt-1">schedule</span>
                <div>
                  <h3 className="font-bold text-lg">Opening Hours</h3>
                  <p className="text-slate-600">Monday - Friday: 8:00am - 6:00pm<br />Saturday: 9:00am - 1:00pm<br />Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full h-96">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2380.5!2d-6.2003!3d53.3938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBurnell+Court%2C+146+Malahide+Rd%2C+Priorswood%2C+Dublin+17!5e0!3m2!1sen!2sie!4v1" width="100%" height="100%" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Marketing Agency Dublin Location"></iframe>
      </section>
    </>
  );
}
