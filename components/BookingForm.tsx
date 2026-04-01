"use client";

import { useState } from "react";

export default function BookingForm() {
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleBook = () => {
    if (!pickup || !drop || !name || !phone) {
      alert("Please fill in all required fields.");
      return;
    }

    const message = `Hello Sitara Travellers! 🚕

I'd like to book a ride:

👤 Name: ${name}
📞 Phone: ${phone}
📍 Pickup: ${pickup}
🏁 Drop: ${drop}
📅 Date: ${date || "Flexible"}
🕐 Time: ${time || "Flexible"}

Please confirm my booking.`;

    const whatsappURL = `https://wa.me/917083623125?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <section id="book" className="min-h-screen flex flex-col items-center justify-center px-4 pt-24 pb-16">
      
      {/* Hero Text */}
      <div className="text-center mb-10 animate-fade-up">
        <p className="text-goldfish text-sm font-semibold tracking-widest uppercase mb-3">
          Goa's Trusted Taxi Service
        </p>
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
          Your Ride,<br />
          <span className="text-goldfish">Your Way.</span>
        </h1>
        <p className="text-white/50 mt-4 text-base max-w-md mx-auto">
          Fast, safe and affordable taxis across Goa. Book in seconds, ride in minutes.
        </p>
      </div>

      {/* Booking Card */}
      <div className="w-full max-w-md bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm animate-fade-up">
        <h2 className="text-white font-semibold text-lg mb-5">Book a Ride</h2>

        <div className="flex flex-col gap-4">

          {/* Name */}
          <div>
            <label className="text-white/50 text-xs uppercase tracking-wider mb-1 block">
              Your Name
            </label>
            <input
              type="text"
              placeholder="e.g. Rahul Sharma"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-goldfish transition-colors"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="text-white/50 text-xs uppercase tracking-wider mb-1 block">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="e.g. 9876543210"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-goldfish transition-colors"
            />
          </div>

          {/* Pickup */}
          <div>
            <label className="text-white/50 text-xs uppercase tracking-wider mb-1 block">
              Pickup Location
            </label>
            <input
              type="text"
              placeholder="e.g. Panaji Bus Stand"
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-goldfish transition-colors"
            />
          </div>

          {/* Drop */}
          <div>
            <label className="text-white/50 text-xs uppercase tracking-wider mb-1 block">
              Drop Location
            </label>
            <input
              type="text"
              placeholder="e.g. Goa Airport"
              value={drop}
              onChange={(e) => setDrop(e.target.value)}
              className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-goldfish transition-colors"
            />
          </div>

          {/* Date + Time */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-white/50 text-xs uppercase tracking-wider mb-1 block">
                Date
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white/70 text-sm focus:outline-none focus:border-goldfish transition-colors"
              />
            </div>
            <div>
              <label className="text-white/50 text-xs uppercase tracking-wider mb-1 block">
                Time
              </label>
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white/70 text-sm focus:outline-none focus:border-goldfish transition-colors"
              />
            </div>
          </div>

          {/* Submit */}
          <button
            onClick={handleBook}
            className="w-full bg-goldfish hover:bg-goldfish-dark text-onyx font-bold py-4 rounded-xl text-sm tracking-wide transition-colors mt-2"
          >
            Book via WhatsApp
          </button>

          <p className="text-white/30 text-xs text-center">
            Tapping the button will open WhatsApp with your booking details pre-filled.
          </p>
        </div>
      </div>

      {/* Trust badges */}
      <div className="flex gap-6 mt-10 text-center animate-fade-up">
        {[
          { label: "Safe Rides", icon: "🛡️" },
          { label: "Affordable", icon: "💰" },
          { label: "Always On Time", icon: "⚡" },
        ].map((badge) => (
          <div key={badge.label} className="flex flex-col items-center gap-1">
            <span className="text-2xl">{badge.icon}</span>
            <span className="text-white/40 text-xs">{badge.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
