import { Sparkles, MessageCircle, Phone, Check } from 'lucide-react';

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-36 md:pt-44 pb-20 md:pb-32 bg-grain">
      {/* Background blurs */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-gold/10 blur-[120px]" />
      <div className="pointer-events-none absolute top-40 -right-32 h-[400px] w-[400px] rounded-full bg-[#4A2D8C]/30 blur-[120px]" />

      <div className="relative max-w-8xl mx-auto px-6 md:px-12 lg:px-16 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/40 text-gold text-xs tracking-[0.25em] uppercase mb-8">
            <Sparkles className="w-3.5 h-3.5" />
            <span>For Jewellery Brands</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl leading-[1.02] tracking-tight font-semibold text-cream">
            Elevate Your{' '}
            <span className="text-gold-gradient">Jewellery Brand</span>{' '}
            <em className="not-italic font-normal text-cream/90">Digitally</em>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gold/90 font-light tracking-wide">
            AI-Powered Content. Effortless Growth. Everyday Visibility.
          </p>

          <p className="mt-5 max-w-xl text-base text-slate leading-relaxed">
            Daily rate posters and rate videos for your WhatsApp Status and Instagram Reels — ready to share, every single day of the year.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="https://wa.me/919751770222"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold px-7 py-4"
            >
              <MessageCircle className="w-5 h-5" />
              Start Your Plan
            </a>
            <a
              href="tel:+919751770222"
              className="btn-outline-gold px-7 py-4"
            >
              <Phone className="w-5 h-5" />
              Call +91 97517 70222
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate">
            <span className="inline-flex items-center gap-2">
              <Check className="w-4 h-4 text-gold" />
              Live Gold & Silver Rates
            </span>
            <span className="inline-flex items-center gap-2">
              <Check className="w-4 h-4 text-gold" />
              Daily Posters + Reels
            </span>
            <span className="inline-flex items-center gap-2">
              <Check className="w-4 h-4 text-gold" />
              Mini Website Included
            </span>
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="relative rounded-3xl overflow-hidden border border-gold/30 glow-gold bg-navy-600">
            <img
              alt="Nagaikadai jewellery plans"
              className="w-full h-auto block"
              src="https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=800"
            />
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-navy-900/40 via-transparent to-transparent" />
          </div>

          <div className="absolute -bottom-6 -left-6 hidden md:flex items-center gap-3 bg-navy-900 border border-gold/40 rounded-2xl px-5 py-3 shadow-[0_0_30px_rgba(212,175,55,0.2)]">
            <div className="h-2 w-2 rounded-full bg-gold animate-pulse" />
            <div className="text-xs">
              <div className="text-slate uppercase tracking-widest">Live</div>
              <div className="text-cream font-semibold">Gold ₹7,850 · Silver ₹94</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
