import { Sprout, ThumbsUp, Crown, Film, Image, Globe, TrendingUp, Check, X, Star, MessageCircle } from 'lucide-react';

const plans = [
  {
    id: 'essential',
    badge: 'PLAN C',
    badgeGradient: 'from-[#a27558] to-[#704a2e]',
    badgeIcon: Sprout,
    name: 'Essential Start',
    bestFor: 'Basic Online Presence',
    price: '₹1,500',
    perDay: '₹5',
    features: [
      { icon: Film, label: 'Videos / year', included: false, value: 'No Videos' },
      { icon: Image, label: 'Images / year', included: true, value: '3650 (All)' },
      { icon: Globe, label: 'Mini Website', included: true, value: 'Included' },
      { icon: TrendingUp, label: 'Live Rates', included: true, value: 'Included' },
    ],
    popular: false,
  },
  {
    id: 'smart',
    badge: 'PLAN B',
    badgeGradient: 'from-[#D4D4D4] to-[#8e8e8e]',
    badgeIcon: ThumbsUp,
    name: 'Smart Business',
    bestFor: 'Consistent Branding',
    price: '₹5,000',
    perDay: '₹14',
    features: [
      { icon: Film, label: 'Videos / year', included: true, value: '730' },
      { icon: Image, label: 'Images / year', included: true, value: '3650 (All)' },
      { icon: Globe, label: 'Mini Website', included: true, value: 'Included' },
      { icon: TrendingUp, label: 'Live Rates', included: true, value: 'Included' },
    ],
    popular: true,
  },
  {
    id: 'signature',
    badge: 'PLAN A',
    badgeGradient: 'from-[#FCF6BA] to-[#B38728]',
    badgeIcon: Crown,
    name: 'Signature Growth',
    bestFor: 'Aggressive Growth',
    price: '₹8,000',
    perDay: '₹22',
    features: [
      { icon: Film, label: 'Videos / year', included: true, value: '1460' },
      { icon: Image, label: 'Images / year', included: true, value: '3650 (All)' },
      { icon: Globe, label: 'Mini Website', included: true, value: 'Included' },
      { icon: TrendingUp, label: 'Live Rates', included: true, value: 'Included' },
    ],
    popular: false,
  },
];

export default function Plans() {
  return (
    <section id="plans" className="relative py-24 md:py-32 bg-navy-800 border-y border-white/5">
      <div className="max-w-8xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="section-label">Plan Options</div>
          <h2 className="section-title">Pick a plan that fits your brand</h2>
          <p className="mt-4 text-base md:text-lg text-slate">
            One yearly price. Zero effort. All platforms covered.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-3xl p-8 md:p-10 backdrop-blur-xl flex flex-col ${
                plan.popular
                  ? 'bg-navy-700 border border-gold/60 shadow-[0_0_60px_rgba(212,175,55,0.18)] md:-translate-y-4'
                  : 'bg-navy-600 border border-white/10'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 bg-gold-gradient text-black text-[11px] font-bold tracking-widest uppercase rounded-full px-4 py-1.5 shadow-[0_0_20px_rgba(212,175,55,0.5)]">
                    <Star className="w-3.5 h-3.5 fill-black" />
                    Most Popular
                  </span>
                </div>
              )}

              <div className={`inline-flex items-center gap-3 self-start rounded-full bg-gradient-to-br ${plan.badgeGradient} px-4 py-2 text-black/80`}>
                <plan.badgeIcon className="w-4 h-4" />
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase">{plan.badge}</span>
              </div>

              <h3 className="mt-5 font-serif text-3xl md:text-4xl text-cream font-semibold leading-tight">
                {plan.name}
              </h3>
              <p className="mt-1 text-sm text-slate">
                <span className="uppercase tracking-widest text-gold/80 text-[11px]">Best For:</span> {plan.bestFor}
              </p>

              <div className="mt-7 flex items-baseline gap-2">
                <span className="font-serif text-5xl md:text-6xl text-gold-gradient font-bold">{plan.price}</span>
                <span className="text-sm text-slate">/year</span>
              </div>
              <div className="text-xs text-slate mt-1">({plan.perDay} per day)</div>

              <div className="my-7 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

              <ul className="space-y-4 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature.label} className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3 text-slate">
                      <feature.icon className="w-4 h-4 text-gold/80 shrink-0" />
                      <span className="text-sm">{feature.label}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      {feature.included ? (
                        <>
                          <Check className="w-4 h-4 text-gold" />
                          <span className="font-medium text-cream">{feature.value}</span>
                        </>
                      ) : (
                        <>
                          <X className="w-4 h-4 text-slate/60" />
                          <span className="font-medium text-slate/70">{feature.value}</span>
                        </>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              <a
                href="https://wa.me/919751770222"
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-8 inline-flex items-center justify-center gap-2 font-semibold rounded-full px-6 py-3.5 transition-all ${
                  plan.popular
                    ? 'bg-gold-gradient text-black hover:scale-[1.03] shadow-[0_0_30px_rgba(212,175,55,0.35)]'
                    : 'border border-gold/60 text-gold hover:bg-gold/10'
                }`}
              >
                <MessageCircle className="w-4 h-4" />
                Choose this Plan
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
