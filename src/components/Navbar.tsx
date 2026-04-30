import { motion } from 'motion/react';
import { Menu, Shield, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-dark/80 backdrop-blur-md border-b border-border transition-all">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Shield className="w-8 h-8 text-neon-blue" />
          <span className="font-display font-bold text-xl tracking-tight">Krypto<span className="text-neon-purple">Proxy</span></span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
          <a href="#use-cases" className="text-gray-300 hover:text-white transition-colors">Use Cases</a>
          <a href="#locations" className="text-gray-300 hover:text-white transition-colors">Locations</a>
          <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
          <a href="#faq" className="text-gray-300 hover:text-white transition-colors">FAQ</a>
        </div>

        <div className="hidden md:flex items-center gap-4 text-sm font-medium">
          <a href="#" className="text-gray-300 hover:text-white transition-colors">Login</a>
          <button className="bg-white text-black px-5 py-2.5 rounded-full font-semibold hover:bg-gray-200 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.5)]">
            Get Started
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button className="md:hidden text-gray-300" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="md:hidden absolute top-20 left-0 w-full bg-surface border-b border-border p-6 flex flex-col gap-4 shadow-2xl"
        >
          <a href="#features" className="text-gray-300 hover:text-white" onClick={() => setIsOpen(false)}>Features</a>
          <a href="#use-cases" className="text-gray-300 hover:text-white" onClick={() => setIsOpen(false)}>Use Cases</a>
          <a href="#locations" className="text-gray-300 hover:text-white" onClick={() => setIsOpen(false)}>Locations</a>
          <a href="#pricing" className="text-gray-300 hover:text-white" onClick={() => setIsOpen(false)}>Pricing</a>
          <a href="#faq" className="text-gray-300 hover:text-white" onClick={() => setIsOpen(false)}>FAQ</a>
          <hr className="border-border" />
          <div className="flex flex-col gap-4 mt-2">
            <a href="#" className="text-center text-gray-300 hover:text-white font-medium">Login</a>
            <button className="bg-white text-black px-5 py-3 rounded-full font-semibold w-full">
              Get Started
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
