import { motion } from 'motion/react';
import { ShoppingCart, Share2, Search, BarChart3, ShieldAlert, Cpu } from 'lucide-react';

const cases = [
  { icon: <Cpu className="w-5 h-5 text-neon-blue" />, name: "Web Scraping", desc: "Extract data safely without IP bans." },
  { icon: <Share2 className="w-5 h-5 text-neon-purple" />, name: "Social Media Mgt", desc: "Manage multiple accounts seamlessly." },
  { icon: <ShoppingCart className="w-5 h-5 text-green-400" />, name: "Sneaker Bots", desc: "Cop limited releases with ultra-fast IPs." },
  { icon: <Search className="w-5 h-5 text-yellow-400" />, name: "SEO Monitoring", desc: "Track keyword rankings accurately." },
  { icon: <ShieldAlert className="w-5 h-5 text-red-400" />, name: "Ad Verification", desc: "Ensure your ads are displayed correctly." },
  { icon: <BarChart3 className="w-5 h-5 text-orange-400" />, name: "Market Research", desc: "Gather global pricing and sentiment data." },
];

export default function UseCases() {
  return (
    <section id="use-cases" className="py-24 bg-surface/50 border-y border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Built For Any Use Case</h2>
            <p className="text-gray-400 max-w-xl">No matter your objective, our proxies are configured to provide the highest success rates for your specific needs.</p>
          </div>
          <button className="text-neon-blue font-semibold hover:underline flex items-center gap-2">
            View All Use Cases
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="bg-dark p-6 rounded-2xl border border-border flex gap-4 items-start hover:border-gray-600 transition-colors group cursor-pointer"
            >
              <div className="p-3 bg-surface rounded-xl border border-border group-hover:scale-110 transition-transform">
                {c.icon}
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">{c.name}</h4>
                <p className="text-sm text-gray-400 leading-relaxed">{c.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
