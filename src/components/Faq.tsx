import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  { q: "What is a proxy server?", a: "A proxy server acts as an intermediary between your device and the internet. It hides your real IP address, making your online activities anonymous." },
  { q: "Are your proxies anonymous?", a: "Yes, all our proxies offer high anonymity (Elite). Your real IP address is never revealed to the target server." },
  { q: "What's the difference between residential and datacenter?", a: "Residential proxies are IPs from real home devices (ISPs), making them very hard to block. Datacenter proxies are IPs from cloud servers, offering higher speeds but lower trust scores." },
  { q: "Do you support rotating IPs?", a: "Yes, we support both static (sticky) sessions for maintaining logins and rotating IPs that change on every request to prevent rate limiting." },
  { q: "What is your refund policy?", a: "We offer a 3-day money-back guarantee if you are not satisfied with our service, no questions asked." }
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-dark">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-400">Got questions? We've got answers.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-surface border border-border rounded-xl overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none hover:bg-surface-hover transition-colors"
              >
                <span className="font-semibold">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-6 pb-4 text-gray-400"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
