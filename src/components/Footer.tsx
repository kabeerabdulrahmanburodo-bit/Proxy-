import { Shield, Twitter, Github, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#050505] pt-20 pb-10 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-border pb-16">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Shield className="w-6 h-6 text-neon-blue" />
              <span className="font-display font-bold text-xl tracking-tight">Krypto<span className="text-neon-purple">Proxy</span></span>
            </div>
            <p className="text-gray-400 text-sm mb-6">
              Empowering data-driven businesses with the world's most reliable proxy infrastructure.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-500 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 uppercase tracking-wider text-sm">Product</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Residential Proxies</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Datacenter Proxies</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Mobile Proxies</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 uppercase tracking-wider text-sm">Resources</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">API Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Network Status</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 uppercase tracking-wider text-sm">Legal & Support</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">support@kryptoproxy.com</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} KryptoProxy Inc. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            All systems operational
          </div>
        </div>
      </div>
    </footer>
  );
}
