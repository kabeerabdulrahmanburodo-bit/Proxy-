import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function CtaSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background with glowing effect */}
      <div className="absolute inset-0 bg-neon-blue/10 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_var(--color-dark)_100%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="bg-surface/50 backdrop-blur-xl border border-neon-blue/30 rounded-3xl p-12 md:p-20 shadow-[0_0_50px_rgba(0,240,255,0.1)]"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">Start Using Premium Proxies Today</h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Fast, secure, and scalable proxy solutions for your business. Join today and get a 3-day money-back guarantee.
          </p>
          
          <button className="group bg-white text-black px-10 py-5 rounded-full font-bold text-lg inline-flex items-center gap-3 hover:bg-gray-200 transition-all neon-glow">
            Get Started Now
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
