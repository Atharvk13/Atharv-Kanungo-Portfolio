import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';
import { ArrowDown, Download } from 'lucide-react';

export const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentTagIndex, setCurrentTagIndex] = useState(0);

  const tags = ['💻 Full Stack Developer', '⚙️ Backend Architect', '☕ Java Specialist', '🚀 Problem Solver', '🔧 System Designer'];
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const delayBetweenTexts = 2000;

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!isDeleting && textIndex < tags[currentTagIndex].length) {
      // Typing
      timeout = setTimeout(() => {
        setDisplayText(tags[currentTagIndex].slice(0, textIndex + 1));
        setTextIndex(textIndex + 1);
      }, typingSpeed);
    } else if (isDeleting && textIndex > 0) {
      // Deleting
      timeout = setTimeout(() => {
        setDisplayText(tags[currentTagIndex].slice(0, textIndex - 1));
        setTextIndex(textIndex - 1);
      }, deletingSpeed);
    } else if (!isDeleting && textIndex === tags[currentTagIndex].length) {
      // Pause before deleting
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, delayBetweenTexts);
    } else if (isDeleting && textIndex === 0) {
      // Move to next tag, cycle back to first when done
      setCurrentTagIndex((prevIndex) => (prevIndex + 1) % tags.length);
      setIsDeleting(false);
    }

    return () => clearTimeout(timeout);
  }, [textIndex, isDeleting, currentTagIndex]);

  const scrollToExperience = () => {
    document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20">
      <div className="max-w-3xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium uppercase tracking-wider">
            Available for Opportunities
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight min-h-20">
            {resumeData.basics.name}
          </h1>
          <p className="text-lg md:text-xl text-blue-400/80 font-medium mb-8 min-h-8">
            {displayText}
            <span className="animate-pulse">|</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={scrollToExperience}
            className="group relative px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-semibold transition-all flex items-center gap-2 overflow-hidden"
          >
            <span className="relative z-10">View Experience</span>
            <ArrowDown className="w-4 h-4 relative z-10 group-hover:translate-y-1 transition-transform" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
          
          <button
            onClick={() => window.open('https://drive.google.com/file/d/1clITPR0ilW2pR6MsIpP3CcDDD9yQgC8R/view?usp=sharing', '_blank')}
            className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl font-semibold transition-all flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            View Resume
          </button>
        </motion.div>
      </div>
    </section>
  );
};
