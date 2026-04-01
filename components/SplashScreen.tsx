"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const taxiRef = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const tl = gsap.timeline();

    // Start everything hidden
    gsap.set([logoRef.current, taglineRef.current, dotsRef.current], {
      opacity: 0,
      y: 30,
    });
    gsap.set(taxiRef.current, { opacity: 0, x: -120 });

    // Taxi drives in from left
    tl.to(taxiRef.current, {
      opacity: 1,
      x: 0,
      duration: 0.8,
      ease: "power3.out",
    })
      // Logo fades up
      .to(
        logoRef.current,
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
        "-=0.3"
      )
      // Tagline fades up
      .to(
        taglineRef.current,
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
        "-=0.2"
      )
      // Loading dots appear
      .to(
        dotsRef.current,
        { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" },
        "-=0.1"
      )
      // Hold for a moment
      .to({}, { duration: 1.4 })
      // Whole screen fades out
      .to(containerRef.current, {
        opacity: 0,
        duration: 0.6,
        ease: "power2.inOut",
        onComplete: () => {
          setVisible(false);
          onComplete();
        },
      });
  }, [onComplete]);

  if (!visible) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 bg-onyx flex flex-col items-center justify-center gap-6"
    >
      {/* Taxi SVG */}
      <div ref={taxiRef} className="text-[80px] select-none">
        <svg
          width="120"
          height="60"
          viewBox="0 0 120 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Car body */}
          <rect x="10" y="25" width="100" height="25" rx="4" fill="#F38338" />
          {/* Roof */}
          <path
            d="M30 25 L38 10 L82 10 L90 25Z"
            fill="#F38338"
          />
          {/* Windows */}
          <path
            d="M42 23 L46 13 L60 13 L60 23Z"
            fill="#020202"
            opacity="0.7"
          />
          <rect x="62" y="13" width="16" height="10" rx="1" fill="#020202" opacity="0.7" />
          {/* Wheels */}
          <circle cx="32" cy="50" r="8" fill="#1a1a1a" />
          <circle cx="32" cy="50" r="4" fill="#888" />
          <circle cx="88" cy="50" r="8" fill="#1a1a1a" />
          <circle cx="88" cy="50" r="4" fill="#888" />
          {/* Headlight */}
          <rect x="106" y="30" width="6" height="4" rx="1" fill="#FFF9C4" />
          {/* TAXI sign */}
          <rect x="48" y="6" width="24" height="8" rx="2" fill="#F9A96A" />
          <text
            x="60"
            y="13"
            textAnchor="middle"
            fontSize="6"
            fontWeight="bold"
            fill="#020202"
          >
            TAXI
          </text>
        </svg>
      </div>

      {/* Logo */}
      <div ref={logoRef} className="text-center">
        <h1 className="text-4xl font-bold tracking-tight">
          <span className="text-goldfish">Sitara</span>
          <span className="text-white"> Travellers</span>
        </h1>
      </div>

      {/* Tagline */}
      <p
        ref={taglineRef}
        className="text-white/50 text-sm tracking-widest uppercase"
      >
        Fast · Safe · Affordable · Goa
      </p>

      {/* Loading dots */}
      <div ref={dotsRef} className="flex gap-2 mt-2">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="w-2 h-2 rounded-full bg-goldfish animate-pulse"
            style={{ animationDelay: `${i * 0.2}s` }}
          />
        ))}
      </div>
    </div>
  );
}
