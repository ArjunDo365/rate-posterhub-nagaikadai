import { useState, useEffect } from 'react';
import { Languages, MessageCircle, Phone, Menu, X } from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lang, setLang] = useState('ta');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const navItems = [
    { id: 'plans', label: 'Plans' },
    { id: 'why', label: 'Why Us' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-navy-900/80 backdrop-blur-xl border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-8xl mx-auto px-6 md:px-12 lg:px-16 flex items-center justify-between py-4">
        <a
          href="#top"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="flex items-center gap-3"
        >
          <div className="h-10 md:h-12 flex items-center">
            <span className="font-serif text-xl md:text-2xl font-semibold text-cream">
              <span className="text-gold-gradient">Nagaikadai</span>
              <span className="text-cream/60">.com</span>
            </span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-10 text-sm tracking-wider uppercase text-slate">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="hover:text-gold transition-colors"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-3">
          <button
            onClick={() => setLang(lang === 'ta' ? 'en' : 'ta')}
            className="flex items-center gap-2 px-3 md:px-4 py-2 rounded-full border border-white/15 text-xs md:text-sm text-cream hover:border-gold/60 hover:text-gold transition-all"
          >
            <Languages className="w-4 h-4" />
            <span>{lang === 'ta' ? 'தமிழ்' : 'English'}</span>
          </button>

          <a
            href="https://wa.me/919751770222"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex btn-gold-sm px-5 md:px-6 py-2.5 text-sm"
          >
            <MessageCircle className="w-4 h-4" />
            Start Your Plan
          </a>

          <a
            href="tel:+919751770222"
            className="sm:hidden p-2.5 rounded-full bg-gold-gradient text-black"
          >
            <Phone className="w-4 h-4" />
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2.5 rounded-xl text-slate hover:text-cream transition-colors"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-navy-900/95 backdrop-blur-xl border-t border-white/5">
          <div className="px-6 py-4 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="w-full text-left px-4 py-3 rounded-xl text-sm tracking-wider uppercase text-slate hover:text-gold hover:bg-white/5 transition-all"
              >
                {item.label}
              </button>
            ))}
            <a
              href="https://wa.me/919751770222"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center btn-gold-sm px-5 py-2.5 text-sm mt-3"
            >
              <MessageCircle className="w-4 h-4 inline" />
              Start Your Plan
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
