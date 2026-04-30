import { motion } from 'motion/react';
import { Check, X } from 'lucide-react';
import { useState } from 'react';

const plans = [
  {
    name: "Starter",
    desc: "For small web scraping projects.",
    monthlyPrice: "49",
    yearlyPrice: "39",
    features: ["15GB Bandwidth", "1M+ IP Pool", "Email Support", "HTTP/SOCKS5", "Standard Speed"],
    unavailable: ["API Access", "Dedicated Account Manager"],
    popular: false,
  },
  {
    name: "Pro",
    desc: "Perfect for scaling operations.",
    monthlyPrice: "99",
    yearlyPrice: "79",
    features: ["50GB Bandwidth", "10M+ IP Pool", "Priority 24/7 Support", "HTTP/SOCKS5", "High Speed", "API Access"],
    unavailable: ["Dedicated Account Manager"],
    popular: true,
  },
  {
    name: "Business",
    desc: "For heavy-duty data extraction.",
    monthlyPrice: "249",
    yearlyPrice: "199",
    features: ["200GB Bandwidth", "25M+ IP Pool", "Priority Support", "HTTP/SOCKS5", "Ultra Speed", "API Access", "City-Level Targeting"],
    unavailable: [],
    popular: false,
  },
  {
    name: "Enterprise",
    desc: "Custom solutions for large corps.",
    monthlyPrice: "Custom",
    yearlyPrice: "Custom",
    features: ["Unlimited Bandwidth", "Custom IP Pool", "Dedicated Account Manager", "HTTP/SOCKS5", "Max Speed", "API Access", "Custom Integration"],
    unavailable: [],
    popular: false,
  }
];

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Simple, Transparent Pricing</h2>
          
          <div className="flex items-center justify-center gap-4 text-sm font-medium">
            <span className={!isYearly ? "text-white" : "text-gray-400"}>Monthly</span>
            <button 
              onClick={() => setIsYearly(!isYearly)}
              className="w-14 h-7 bg-surface-hover rounded-full p-1 relative border border-border"
            >
              <div className={`w-5 h-5 bg-neon-blue rounded-full transition-all ${isYearly ? 'translate-x-7' : 'translate-x-0'}`} />
            </button>
            <span className={isYearly ? "text-white flex items-center gap-2" : "text-gray-400 flex items-center gap-2"}>
              Yearly <span className="bg-neon-purple/20 text-neon-purple px-2 py-0.5 rounded text-xs">Save 20%</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`bg-surface relative rounded-2xl border p-8 flex flex-col ${p.popular ? 'border-neon-purple neon-glow' : 'border-border'}`}
            >
              {p.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-neon-purple text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-xl font-bold mb-2">{p.name}</h3>
              <p className="text-sm text-gray-400 mb-6 min-h-[40px]">{p.desc}</p>
              
              <div className="mb-8">
                {p.monthlyPrice === "Custom" ? (
                  <span className="text-4xl font-bold">Custom</span>
                ) : (
                  <>
                    <span className="text-4xl font-bold text-white">${isYearly ? p.yearlyPrice : p.monthlyPrice}</span>
                    <span className="text-gray-400 text-sm">/mo</span>
                  </>
                )}
              </div>

              <button className={`w-full py-3 rounded-xl font-bold mb-8 transition-colors ${p.popular ? 'bg-neon-purple text-white hover:bg-purple-600' : 'bg-surface-hover text-white border border-border hover:bg-border'}`}>
                {p.monthlyPrice === "Custom" ? "Contact Sales" : "Get Started"}
              </button>

              <div className="flex flex-col gap-4 mt-auto">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Included Features</p>
                {p.features.map((f, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm">
                    <Check className="w-4 h-4 text-green-400 shrink-0" />
                    <span className="text-gray-300">{f}</span>
                  </div>
                ))}
                {p.unavailable.map((f, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm opacity-50">
                    <X className="w-4 h-4 text-red-400 shrink-0" />
                    <span className="text-gray-500">{f}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
