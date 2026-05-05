import { MessageCircle, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="relative">
      {/* CTA Section */}
      <section className="relative py-24 md:py-36 overflow-hidden bg-navy-800">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-gold/10 blur-[140px]" />
        </div>

        <div className="relative max-w-[1100px] mx-auto px-6 md:px-12 text-center">
          <div className="section-label mb-5">Ready to Begin?</div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-7xl leading-[1.05] text-cream font-semibold">
            <span className="text-gold-gradient">Go digital. Grow your business.</span>
          </h2>
          <p className="mt-6 text-base md:text-lg text-slate max-w-2xl mx-auto">
            Talk to us on WhatsApp or give us a call — we'll set up your plan within 24 hours.
          </p>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://wa.me/919751770222"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold px-8 py-4"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </a>
            <a
              href="tel:+919751770222"
              className="btn-outline-gold font-semibold px-8 py-4"
            >
              <Phone className="w-5 h-5" />
              Call Now · +91 97517 70222
            </a>
          </div>
        </div>
      </section>

      {/* Bottom bar */}
      <div className="border-t border-white/5 bg-navy-900">
        <div className="max-w-8xl mx-auto px-6 md:px-12 lg:px-16 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <span className="font-serif text-xl font-semibold text-cream">
              <span className="text-gold-gradient">Nagaikadai</span>
              <span className="text-cream/60">.com</span>
            </span>
          </div>
          <p className="text-gold/80 text-sm tracking-[0.25em] uppercase font-serif italic">
            Go Digital. Grow Your Business.
          </p>
          <div className="text-xs text-slate">
            &copy; 2026 Nagaikadai.com · All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
