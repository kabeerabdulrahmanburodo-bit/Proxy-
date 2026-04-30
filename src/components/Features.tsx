import { motion } from 'motion/react';
import { Zap, Globe, RefreshCw, Shield, Code, Server } from 'lucide-react';

const features = [
  {
    icon: <Zap className="w-6 h-6 text-neon-blue" />,
    title: "High-Speed Connections",
    desc: "Lightning-fast response times optimized for intensive data extraction."
  },
  {
    icon: <Globe className="w-6 h-6 text-neon-purple" />,
    title: "Global IP Coverage",
    desc: "Access IPs from 195+ countries with city-level targeting capabilities."
  },
  {
    icon: <RefreshCw className="w-6 h-6 text-green-400" />,
    title: "Rotating & Static",
    desc: "Choose between sticky sessions or per-request IP rotation automatically."
  },
  {
    icon: <Server className="w-6 h-6 text-orange-400" />,
    title: "99.9% Uptime Guarantee",
    desc: "Enterprise-grade infrastructure ensures your operations never stop."
  },
  {
    icon: <Shield className="w-6 h-6 text-red-400" />,
    title: "Advanced Security & Encryption",
    desc: "Military-grade encryption keeps your identity and data completely secure."
  },
  {
    icon: <Code className="w-6 h-6 text-yellow-400" />,
    title: "Easy API Integration",
    desc: "Manage proxies programmatically with our developer-friendly REST API."
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-surface/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Powerful Features for <br className="hidden md:block"/> Unstoppable Scraping</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Everything you need to bypass anti-bot systems and gather data confidently at any scale.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-surface p-8 rounded-2xl border border-border flex flex-col items-start hover:bg-surface-hover transition-colors"
            >
              <div className="p-3 bg-dark rounded-xl border border-border mb-6">
                {f.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">{f.title}</h3>
              <p className="text-gray-400 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
