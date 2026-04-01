"use client";

import { useState } from "react";
import SplashScreen from "@/components/SplashScreen";
import Navbar from "@/components/Navbar";
import BookingForm from "@/components/BookingForm";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <main className="min-h-screen bg-onyx">
      {showSplash && (
        <SplashScreen onComplete={() => setShowSplash(false)} />
      )}

      {!showSplash && (
        <>
          <Navbar />
          <BookingForm />
          <FeaturesSection />
          <Footer />
        </>
      )}
    </main>
  );
}