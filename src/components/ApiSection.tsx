import { motion } from 'motion/react';
import { Terminal } from 'lucide-react';

const codeSnippet = `curl -x proxy.kryptoproxy.com:8000 \\
  -U "username:password" \\
  http://api.target-website.com/data`;

export default function ApiSection() {
  return (
    <section className="py-24 bg-surface/30 border-y border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Developer-First Integration</h2>
          <p className="text-gray-400 text-lg mb-8">
            Manage IPs, view usage stats, and rotate sessions seamlessly using our robust REST API. Built for developers by developers.
          </p>
          <div className="flex gap-4">
            <button className="bg-white text-black px-6 py-3 rounded-xl font-bold hover:bg-gray-200 transition-colors">
              View Documentation
            </button>
            <button className="px-6 py-3 rounded-xl font-bold bg-dark border border-border hover:bg-surface transition-colors">
              Get API Key
            </button>
          </div>
        </div>

        <motion.div 
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="lg:w-1/2 w-full"
        >
          <div className="rounded-2xl overflow-hidden border border-border shadow-2xl">
            <div className="bg-dark px-4 py-3 border-b border-border flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="mx-auto flex items-center gap-2 text-gray-500 text-xs font-mono">
                <Terminal className="w-3 h-3" /> terminal
              </div>
            </div>
            <div className="bg-[#0a0a0f] p-6 font-mono text-sm overflow-x-auto text-green-400">
              <pre><code>{codeSnippet}</code></pre>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
