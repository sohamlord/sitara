import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-10">
      <div className="max-w-5xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand */}
        <div>
          <p className="text-white font-bold text-lg">
            <span className="text-goldfish">Sitara</span> Travellers
          </p>
          <p className="text-white/30 text-xs mt-1">
            Fast · Safe · Affordable · Goa
          </p>
        </div>

        {/* Links */}
        <div className="flex gap-6 text-sm">
          <Link href="/" className="text-white/50 hover:text-goldfish transition-colors">
            Home
          </Link>
          <Link href="/about" className="text-white/50 hover:text-goldfish transition-colors">
            About
          </Link>
          <Link href="/faq" className="text-white/50 hover:text-goldfish transition-colors">
            FAQ
          </Link>
          <Link
            href="https://wa.me/917083623125"
            target="_blank"
            className="text-white/50 hover:text-goldfish transition-colors"
          >
            WhatsApp
          </Link>
        </div>

        {/* Copyright */}
        <p className="text-white/20 text-xs">
          © {new Date().getFullYear()} Sitara Travellers. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
