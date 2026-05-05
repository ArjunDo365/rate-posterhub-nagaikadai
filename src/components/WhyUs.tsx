import { CalendarDays, Users, Clock, ShieldCheck, Crown } from 'lucide-react';

const cards = [
  {
    icon: CalendarDays,
    title: 'Daily Content',
    description: 'Fresh rate posters and reels every day, without lifting a finger.',
    span: 'md:col-span-7',
  },
  {
    icon: Users,
    title: 'More Walk-ins',
    description: 'Consistent visibility turns followers into footfalls.',
    span: 'md:col-span-5',
  },
  {
    icon: Clock,
    title: '24/7 Showroom',
    description: 'Your jewellery keeps selling even when the shutters are down.',
    span: 'md:col-span-4',
  },
  {
    icon: ShieldCheck,
    title: 'Builds Trust',
    description: 'Live, accurate rates position you as the go-to trusted jeweller.',
    span: 'md:col-span-4',
  },
  {
    icon: Crown,
    title: 'Premium Brand Perception',
    description: 'Editorial-grade design that matches the craft you sell.',
    span: 'md:col-span-4',
  },
];

export default function WhyUs() {
  return (
    <section id="why" className="relative py-24 md:py-32 bg-navy-900">
      <div className="max-w-8xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-20">
          <div className="max-w-2xl">
            <div className="section-label">Why It Works</div>
            <h2 className="section-title">A showroom that never closes.</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6 auto-rows-fr">
          {cards.map((card) => (
            <div
              key={card.title}
              className={`group relative overflow-hidden rounded-3xl bg-navy-600 border border-white/10 hover:border-gold/40 transition-colors p-8 md:p-10 ${card.span}`}
            >
              <div className="absolute -top-20 -right-20 h-52 w-52 rounded-full bg-gold/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-2xl border border-gold/40 bg-navy-900/50 mb-6">
                  <card.icon className="w-5 h-5 text-gold" />
                </div>
                <h3 className="font-serif text-2xl md:text-3xl text-cream font-semibold leading-tight">
                  {card.title}
                </h3>
                <p className="mt-3 text-slate text-base leading-relaxed max-w-md">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
