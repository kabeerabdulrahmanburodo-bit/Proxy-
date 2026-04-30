import { motion } from 'motion/react';
import { Globe, ArrowRight, ShieldCheck, Zap, Users } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-blue/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-neon-purple/20 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center text-center mt-10 md:mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-neon-blue/30 bg-neon-blue/5 text-neon-blue text-sm font-medium mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-neon-blue animate-pulse" />
          Ultra-Fast Premium Network
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-display font-bold max-w-4xl tracking-tight leading-tight mb-6"
        >
          Fast, Anonymous & <br className="hidden md:block" />
          <span className="text-gradient">Reliable Proxy Servers</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10"
        >
          Unlock the internet with high-speed residential, datacenter, and rotating proxies. Built for scraping, stealth, and scaling operations.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 mb-16"
        >
          <button className="group bg-white text-black px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-2 hover:bg-gray-100 transition-all neon-glow">
            Get Started Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-2 text-white bg-surface border border-border hover:bg-surface-hover transition-colors">
            View Pricing
          </button>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-8 md:gap-16 pt-8 border-t border-border/50 w-full max-w-3xl text-sm md:text-base text-gray-400 font-medium"
        >
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-neon-blue" />
            99.9% Uptime Guarantee
          </div>
          <div className="flex items-center gap-2">
            <Globe className="w-5 h-5 text-neon-purple" />
            10M+ Premium IPs
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-green-400" />
            Trusted by 10,000+ Users
          </div>
        </motion.div>
      </div>
    </section>
  );
}
