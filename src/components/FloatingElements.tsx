import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Clock } from 'lucide-react';

export default function FloatingElements() {
  const [showExitPopup, setShowExitPopup] = useState(false);
  const [hasShownPopup, setHasShownPopup] = useState(false);
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutes in seconds

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShownPopup) {
        setShowExitPopup(true);
        setHasShownPopup(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    
    const timer = setTimeout(() => {
      if (!hasShownPopup) {
        setShowExitPopup(true);
        setHasShownPopup(true);
      }
    }, 30000);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      clearTimeout(timer);
    };
  }, [hasShownPopup]);

  // Countdown timer effect
  useEffect(() => {
    if (!showExitPopup || timeLeft <= 0) return;
    
    const intervalId = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [showExitPopup, timeLeft]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <>
      {/* Mobile Sticky CTA */}
      <div className="md:hidden fixed bottom-4 left-4 right-4 z-40">
        <button className="w-full bg-neon-blue text-black py-4 rounded-xl font-bold shadow-[0_0_20px_rgba(0,240,255,0.4)] flex justify-center items-center gap-2">
          Get Started Now
        </button>
      </div>

      {/* Floating Chat Widget */}
      <div className="fixed bottom-6 right-6 md:bottom-20 md:right-10 z-40">
        <button className="w-14 h-14 bg-neon-purple text-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(176,38,255,0.4)] hover:scale-110 transition-transform">
          <MessageCircle className="w-6 h-6" />
        </button>
      </div>

      {/* Exit Intent Popup */}
      <AnimatePresence>
        {showExitPopup && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowExitPopup(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-surface border border-neon-blue/40 rounded-2xl p-8 max-w-md w-full relative z-10 shadow-[0_0_50px_rgba(0,240,255,0.15)] text-center"
            >
              <button 
                onClick={() => setShowExitPopup(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-16 h-16 bg-neon-blue/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-neon-blue" />
              </div>

              <h3 className="text-3xl font-display font-bold mb-2">Wait! Before you go...</h3>
              <p className="text-gray-300 mb-4">
                Get <span className="text-neon-blue font-bold text-lg">20% OFF</span> your first month on any plan. Limited time offer!
              </p>
              
              <div className="flex justify-center items-center gap-2 mb-6 text-2xl font-bold font-mono text-neon-purple">
                ⏱ {formatTime(timeLeft)}
              </div>

              <div className="bg-dark border border-border rounded-xl p-4 mb-6 font-mono font-bold text-xl tracking-widest text-white">
                SAVE20NOW
              </div>

              <button 
                onClick={() => setShowExitPopup(false)}
                className="w-full bg-neon-blue text-black py-4 rounded-xl font-bold hover:bg-neon-blue/90 transition-colors shadow-[0_0_15px_rgba(0,240,255,0.3)] mb-3"
              >
                Claim My Discount
              </button>
              <button 
                onClick={() => setShowExitPopup(false)}
                className="text-sm text-gray-500 hover:text-white transition-colors"
              >
                No thanks, I'll pay full price later
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
