import Navbar from "@/components/Navbar";
import Link from "next/link";

export const metadata = {
  title: "About Us — Sitara Travellers",
  description:
    "Meet Nishant Bhomkar, the founder of Sitara Travellers. A vision to make Goa's taxi experience fast, safe and affordable for everyone.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-onyx">
      <Navbar />

      <div className="max-w-3xl mx-auto px-4 pt-32 pb-20">

        {/* Label */}
        <p className="text-goldfish text-sm font-semibold tracking-widest uppercase mb-4">
          Our Story
        </p>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
          Goa deserves better taxis.
        </h1>

        {/* Founder card */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-10 flex items-center gap-5">
          <div className="w-16 h-16 rounded-full bg-goldfish flex items-center justify-center text-onyx font-bold text-2xl shrink-0">
            N
          </div>
          <div>
            <p className="text-white font-semibold text-lg">Nishant Bhomkar</p>
            <p className="text-goldfish text-sm">Founder, Sitara Travellers</p>
            <p className="text-white/40 text-xs mt-1">Goa, India</p>
          </div>
        </div>

        {/* Story */}
        <div className="flex flex-col gap-6 text-white/70 text-base leading-relaxed">
          <p>
            Sitara Travellers was born from a simple frustration — finding a
            reliable, fairly priced taxi in Goa shouldn't be hard. Whether
            you're a local heading to work or a tourist exploring the coast,
            you deserve a ride that shows up on time, gets you there safely,
            and doesn't break the bank.
          </p>

          <p>
            Nishant Bhomkar, a taxi owner with deep roots in Goa, saw this
            gap firsthand. After years of navigating the informal taxi
            landscape, he set out to build something different — a service
            built on trust, punctuality and respect for every passenger.
          </p>

          <p>
            The name <span className="text-goldfish font-medium">Sitara</span> means
            star in Hindi. It reflects our promise: to be the guiding light
            for anyone who needs to get around Goa — day or night, rain or
            shine.
          </p>

          <p>
            Today, Sitara Travellers serves locals and visitors alike across
            Goa — from airport transfers to long day trips, from early morning
            rides to late night pickups. Every booking is handled personally,
            every ride is treated with care.
          </p>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
          {[
            {
              title: "Safety First",
              desc: "Every ride is tracked and every driver is vetted. Your safety is non-negotiable.",
            },
            {
              title: "Fair Pricing",
              desc: "No surge pricing, no hidden fees. What you see is what you pay.",
            },
            {
              title: "Always Available",
              desc: "Early morning flights, late night events — we're available when you need us.",
            },
          ].map((val) => (
            <div
              key={val.title}
              className="bg-white/5 border border-white/10 rounded-xl p-5"
            >
              <h3 className="text-goldfish font-semibold text-sm mb-2">
                {val.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <p className="text-white/40 text-sm mb-4">
            Ready to experience the difference?
          </p>
          <Link
            href="/#book"
            className="bg-goldfish hover:bg-goldfish-dark text-onyx font-bold px-8 py-4 rounded-full text-sm transition-colors inline-block"
          >
            Book a Ride Now
          </Link>
        </div>
      </div>
    </main>
  );
}
