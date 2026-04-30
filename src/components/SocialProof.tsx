import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Alex Rivera",
    role: "Data Engineer",
    company: "DataScrape Inc.",
    content: "The residential IPs are incredibly clean. Our success rate jumped from 82% to 99.4% overnight. Best proxy service we've used.",
    avatar: "https://i.pravatar.cc/150?img=11"
  },
  {
    name: "Sarah Chen",
    role: "E-commerce Manager",
    company: "BrandMonitor",
    content: "Speed and reliability are unmatched. We monitor thousands of competitor prices hourly without a single block or slowdown.",
    avatar: "https://i.pravatar.cc/150?img=5"
  },
  {
    name: "Marcus Johnson",
    role: "SEO Specialist",
    company: "RankRise Agency",
    content: "The API integration was seamless. Support is extremely responsive, though we rarely need them. Highly recommended for heavy scraping tasks.",
    avatar: "https://i.pravatar.cc/150?img=68"
  }
];

export default function SocialProof() {
  return (
    <section className="py-20 bg-dark border-t border-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Trusted by Industry Leaders</h2>
          <p className="text-gray-400">Join thousands of businesses relying on our secure proxy network.</p>
        </div>
        
        {/* Mock Company Logos */}
        <div className="flex flex-wrap justify-center gap-10 md:gap-20 opacity-50 mb-24 grayscale">
          {['Stripe', 'Spotify', 'Amazon', 'Reddit', 'Netflix'].map((logo, i) => (
            <div key={i} className="text-xl md:text-2xl font-bold font-sans tracking-tight">{logo}</div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-surface p-8 rounded-2xl border border-border hover:border-neon-blue/30 transition-colors"
            >
              <div className="flex text-neon-blue mb-4 gap-1">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 italic mb-6">"{t.content}"</p>
              <div className="flex items-center gap-4 mt-auto">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border border-border" />
                <div>
                  <h4 className="font-semibold text-white">{t.name}</h4>
                  <p className="text-sm text-gray-400">{t.role}, {t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
