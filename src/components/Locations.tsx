import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';

export default function Locations() {
  return (
    <section id="locations" className="py-24 bg-surface/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neon-blue/5 via-dark to-dark pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Global Coverage, Local Results</h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-16">Target any country, city, or ASN globally. Our massive pool ensures you always get the right connection.</p>
        
        {/* Mock Map Visualization */}
        <div className="relative w-full aspect-[2/1] md:aspect-[3/1] bg-dark rounded-3xl border border-border overflow-hidden mb-16 flex items-center justify-center">
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#00f0ff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
          
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute top-[30%] left-[20%] text-neon-blue"
          ><MapPin className="w-6 h-6 fill-neon-blue/20" /></motion.div>
          
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            className="absolute top-[50%] left-[45%] text-neon-purple"
          ><MapPin className="w-8 h-8 fill-neon-purple/20" /></motion.div>
          
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            className="absolute top-[40%] right-[30%] text-green-400"
          ><MapPin className="w-5 h-5 fill-green-400/20" /></motion.div>

          <p className="text-gray-500 font-mono text-sm z-10 bg-dark/80 px-4 py-2 rounded-full backdrop-blur-md">Interactive Map Simulation</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
          {['North America', 'Europe', 'Asia', 'South America', 'Africa', 'Oceania', 'Middle East', 'Antarctica (Wait, no)'].map((region, i) => (
            <div key={i} className="bg-surface border border-border p-4 rounded-xl flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-neon-blue" />
              <span className="font-medium text-gray-300">{region}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
