import { MessageCircle, Instagram, TrendingUp } from 'lucide-react';

const showcaseItems = [
  {
    icon: MessageCircle,
    label: 'WhatsApp Status',
    title: 'Daily rate posters your customers see first thing every day.',
    image: 'https://images.pexels.com/photos/6962181/pexels-photo-6962181.jpeg?auto=compress&cs=tinysrgb&w=800',
    span: 'md:col-span-7',
    height: 'h-[380px] md:h-[440px]',
  },
  {
    icon: Instagram,
    label: 'Instagram Reels',
    title: 'Short, premium videos to keep your feed alive and growing.',
    image: 'https://images.pexels.com/photos/3266700/pexels-photo-3266700.jpeg?auto=compress&cs=tinysrgb&w=800',
    span: 'md:col-span-5',
    height: 'h-[380px] md:h-[440px]',
  },
  {
    icon: TrendingUp,
    label: 'Live Gold & Silver Rates',
    title: 'Always-updated rate cards, styled to match your brand.',
    image: 'https://images.pexels.com/photos/1615116/pexels-photo-1615116.jpeg?auto=compress&cs=tinysrgb&w=1200',
    span: 'md:col-span-12',
    height: 'h-[320px] md:h-[380px]',
  },
];

export default function Showcase() {
  return (
    <section className="relative py-24 md:py-32 bg-navy-900">
      <div className="max-w-8xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-3xl mb-14 md:mb-20">
          <div className="section-label">What You Get</div>
          <h2 className="section-title">
            Crafted for jewellers. Shared everywhere.
          </h2>
          <p className="mt-5 text-base md:text-lg text-slate leading-relaxed">
            Every morning your showroom arrives on your customers' phones — as a stunning poster, a scroll-stopping reel, and a live rate update they actually look forward to.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
          {showcaseItems.map((item) => (
            <div
              key={item.label}
              className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-navy-600 ${item.span} ${item.height}`}
            >
              <img
                alt={item.label}
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-75 group-hover:scale-105 transition-all duration-[1200ms]"
                src={item.image}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/70 to-transparent" />
              <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end">
                <div className="flex items-center gap-3 mb-3">
                  <span className="p-2 rounded-full border border-gold/40 bg-navy-900/60">
                    <item.icon className="w-4 h-4 text-gold" />
                  </span>
                  <span className="text-xs tracking-[0.25em] uppercase text-gold/90">{item.label}</span>
                </div>
                <h3 className="font-serif text-2xl md:text-3xl text-cream max-w-lg">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
