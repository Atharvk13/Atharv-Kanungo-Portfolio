import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SplashProps {
  onComplete: () => void;
}

export const Splash: React.FC<SplashProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 20);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#05050a]"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="mb-8"
      >
        <div className="relative w-24 h-24 flex items-center justify-center border-2 border-blue-500/30 rounded-2xl overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-blue-500/10"
            animate={{
              rotate: [0, 90, 180, 270, 360],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />
          <span className="text-4xl font-bold text-blue-500 tracking-tighter">AK</span>
        </div>
      </motion.div>

      <div className="w-48 h-1 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-blue-500"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
        />
      </div>
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mt-4 text-blue-500/50 text-xs font-mono uppercase tracking-widest"
      >
        Initializing Portfolio
      </motion.p>
    </motion.div>
  );
};
