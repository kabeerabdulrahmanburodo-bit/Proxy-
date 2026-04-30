import { motion } from 'motion/react';
import { Home, Server, Smartphone, CheckCircle2 } from 'lucide-react';

const types = [
  {
    icon: <Home className="w-8 h-8 text-neon-purple" />,
    title: "Residential Proxies",
    desc: "Ethically sourced real user IPs. Unblockable for complex scraping.",
    features: ["Real ISP connections", "Highest success rate", "City-level targeting", "Zero IP blocking"],
    useCase: "Best for: Ad verification, price monitoring.",
    color: "neon-purple"
  },
  {
    icon: <Server className="w-8 h-8 text-neon-blue" />,
    title: "Datacenter Proxies",
    desc: "Built on high-performance servers for maximum speed and lowest prices.",
    features: ["Ultra-fast speeds", "Unlimited bandwidth", "Dedicated & Shared", "99.9% uptime"],
    useCase: "Best for: High-volume scraping.",
    color: "neon-blue",
    featured: true
  },
  {
    icon: <Smartphone className="w-8 h-8 text-orange-400" />,
    title: "Mobile Proxies",
    desc: "4G/5G connections assigned by mobile carriers. The ultimate stealth.",
    features: ["Highest trust score", "ASN targeting", "Dynamic rotations", "Mobile app scraping"],
    useCase: "Best for: Social media management.",
    color: "orange-400"
  }
];

export default function ProxyTypes() {
  return (
    <section className="py-24 bg-dark relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon-blue/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Choose The Perfect Proxy</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Different missions require different tools. We provide all the IP types you need.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {types.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`bg-surface p-8 rounded-2xl border flex flex-col ${t.featured ? 'border-neon-blue neon-glow transform md:-translate-y-4' : 'border-border'}`}
            >
              <div className="mb-6">{t.icon}</div>
              <h3 className="text-2xl font-bold mb-3">{t.title}</h3>
              <p className="text-gray-400 mb-6">{t.desc}</p>
              
              <ul className="mb-8 space-y-3 flex-grow">
                {t.features.map((f, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-gray-300">
                    <CheckCircle2 className={`w-4 h-4 text-${t.color}`} />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="bg-dark p-4 rounded-xl border border-border mb-6">
                <p className="text-sm font-medium text-gray-300">{t.useCase}</p>
              </div>

              <button className={`w-full py-4 rounded-xl text-sm font-bold transition-all ${t.featured ? 'bg-neon-blue text-black hover:bg-neon-blue/90 shadow-[0_0_15px_rgba(0,240,255,0.4)]' : 'bg-surface-hover text-white border border-border hover:bg-border'}`}>
                Buy Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
