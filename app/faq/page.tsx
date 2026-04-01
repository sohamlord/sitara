import Navbar from "@/components/Navbar";
import Link from "next/link";

export const metadata = {
  title: "FAQ — Sitara Travellers Goa",
  description:
    "Frequently asked questions about Sitara Travellers taxi service in Goa. Booking, pricing, availability and more.",
};

const faqs = [
  {
    question: "How do I book a taxi with Sitara Travellers?",
    answer:
      "Booking is simple. Fill in your pickup location, drop location, name and phone number on our home page and tap 'Book via WhatsApp'. Your details will be sent directly to us and we'll confirm your ride immediately.",
  },
  {
    question: "Which areas in Goa do you cover?",
    answer:
      "We cover all of Goa — North Goa, South Goa, Panaji, Margao, Vasco, Mapusa, Calangute, Baga, Anjuna, Colva and everywhere in between. We also do airport and railway station transfers.",
  },
  {
    question: "What are your operating hours?",
    answer:
      "We operate 24 hours a day, 7 days a week. Whether it's an early morning flight or a late night event, Sitara Travellers is available whenever you need us.",
  },
  {
    question: "How is the fare calculated?",
    answer:
      "Our fares are fixed and transparent — no surge pricing, no hidden charges. The fare is calculated based on distance and vehicle type. You'll always know the price before you confirm your booking.",
  },
  {
    question: "Do you offer airport transfers?",
    answer:
      "Yes. We specialise in airport transfers to and from Goa International Airport (Dabolim) and Mopa Airport. We track your flight and adjust pickup time if your flight is delayed.",
  },
  {
    question: "Can I book a ride for someone else?",
    answer:
      "Absolutely. Just provide the passenger's name and phone number when booking. Our driver will contact them directly for coordination.",
  },
  {
    question: "What type of vehicles do you have?",
    answer:
      "We have a fleet of clean, well-maintained sedans and SUVs suitable for solo travellers, couples, families and groups. All vehicles are air-conditioned.",
  },
  {
    question: "Is it safe to travel with Sitara Travellers?",
    answer:
      "Safety is our top priority. All our drivers are verified, experienced and familiar with Goa's roads. Every ride is trackable and we maintain direct communication throughout your journey.",
  },
  {
    question: "Do you offer outstation trips from Goa?",
    answer:
      "Yes, we do outstation trips. Popular routes include Goa to Mumbai, Goa to Pune, Goa to Belgaum and more. Contact us on WhatsApp for outstation pricing.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "We understand plans change. Cancellations made more than 1 hour before the scheduled pickup are free of charge. For last-minute cancellations please contact us directly on WhatsApp.",
  },
];

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-onyx">
      <Navbar />

      {/* JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />

      <div className="max-w-2xl mx-auto px-4 pt-32 pb-20">

        {/* Header */}
        <p className="text-goldfish text-sm font-semibold tracking-widest uppercase mb-4">
          Got Questions?
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-white/40 text-base mb-12">
          Everything you need to know about booking a taxi in Goa with Sitara Travellers.
        </p>

        {/* FAQ List */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
          <p className="text-white font-semibold text-lg mb-2">
            Still have questions?
          </p>
          <p className="text-white/40 text-sm mb-6">
            Chat with us directly on WhatsApp — we reply fast.
          </p>
          <Link
            href="https://wa.me/917083623125"
            target="_blank"
            className="bg-goldfish hover:bg-goldfish-dark text-onyx font-bold px-8 py-4 rounded-full text-sm transition-colors inline-block"
          >
            Chat on WhatsApp
          </Link>
        </div>
      </div>
    </main>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="group bg-white/5 border border-white/10 rounded-xl overflow-hidden">
      <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none">
        <span className="text-white text-sm font-medium pr-4">{question}</span>
        <span className="text-goldfish shrink-0 text-lg transition-transform duration-300 group-open:rotate-45">
          +
        </span>
      </summary>
      <div className="px-5 pb-5">
        <p className="text-white/50 text-sm leading-relaxed">{answer}</p>
      </div>
    </details>
  );
}
