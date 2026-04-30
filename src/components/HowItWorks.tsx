import { motion } from 'motion/react';
import { UserPlus, Settings, Activity } from 'lucide-react';

const steps = [
  {
    icon: <UserPlus className="w-8 h-8 text-black" />,
    title: "1. Sign Up",
    desc: "Create an account and choose your preferred proxy type and bandwidth.",
    color: "bg-white"
  },
  {
    icon: <Settings className="w-8 h-8 text-white" />,
    title: "2. Configure",
    desc: "Generate your proxy credentials or IP whitelist in our easy-to-use dashboard.",
    color: "bg-neon-purple"
  },
  {
    icon: <Activity className="w-8 h-8 text-black" />,
    title: "3. Connect & Scrape",
    desc: "Plug the details into your software, bot, or our API and start extracting.",
    color: "bg-neon-blue"
  }
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">How It Works</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Get up and running in less than 3 minutes.</p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-8 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-white via-neon-purple to-neon-blue -z-10" />

          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              className="flex flex-col items-center text-center w-full max-w-xs bg-surface md:bg-transparent p-8 md:p-0 rounded-2xl border border-border md:border-none"
            >
              <div className={`w-20 h-20 rounded-2xl ${s.color} flex items-center justify-center mb-6 shadow-xl`}>
                {s.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3">{s.title}</h3>
              <p className="text-gray-400">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
