export default function FeaturesSection() {
  const features = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
            fill="#F38338"
          />
        </svg>
      ),
      title: "Top Rated Drivers",
      desc: "All our drivers are verified, experienced and highly rated by passengers across Goa.",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="#F38338" strokeWidth="2" />
          <path
            d="M12 6V12L16 14"
            stroke="#F38338"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
      title: "Always On Time",
      desc: "We track your schedule and show up early. No waiting, no stress — just reliable rides.",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"
            stroke="#F38338"
            strokeWidth="2"
          />
          <circle cx="12" cy="10" r="3" stroke="#F38338" strokeWidth="2" />
        </svg>
      ),
      title: "All Goa Covered",
      desc: "North, South, airport transfers, railway stations — we go everywhere you need to be.",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <rect
            x="2"
            y="5"
            width="20"
            height="14"
            rx="3"
            stroke="#F38338"
            strokeWidth="2"
          />
          <path d="M2 10H22" stroke="#F38338" strokeWidth="2" />
        </svg>
      ),
      title: "Fixed Fair Pricing",
      desc: "No surge pricing, no hidden fees. Transparent fares every single time you book.",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"
            stroke="#F38338"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
      title: "WhatsApp Booking",
      desc: "Book instantly via WhatsApp — no app download needed, no account required.",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"
            stroke="#F38338"
            strokeWidth="2"
          />
          <path
            d="M9 12l2 2 4-4"
            stroke="#F38338"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Safe & Comfortable",
      desc: "Clean, air-conditioned vehicles. Every ride feels like a premium experience.",
    },
  ];

  return (
    <section className="max-w-5xl mx-auto px-4 py-20">
      {/* Header */}
      <div className="text-center mb-12">
        <p className="text-goldfish text-sm font-semibold tracking-widest uppercase mb-3">
          Why Choose Us
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          The Sitara Difference
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-goldfish/40 hover:bg-white/8 transition-all duration-300"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-white font-semibold text-sm mb-2">
              {feature.title}
            </h3>
            <p className="text-white/40 text-sm leading-relaxed">
              {feature.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
