import { motion } from 'motion/react';

const stats = [
  { value: "10M+", label: "Premium IPs" },
  { value: "195+", label: "Locations" },
  { value: "99.9%", label: "Uptime" },
  { value: "24/7", label: "Expert Support" }
];

export default function Stats() {
  return (
    <section className="py-16 bg-gradient-to-r from-dark via-surface to-dark border-y border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x divide-border">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center px-4"
            >
              <div className="text-4xl md:text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 mb-2">
                {s.value}
              </div>
              <div className="text-sm font-medium text-neon-blue uppercase tracking-widest">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
