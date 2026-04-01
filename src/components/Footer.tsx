import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Code, Terminal, Mail } from 'lucide-react';
import { resumeData } from '../data/resume';

export const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Github, href: resumeData.basics.links.find(l => l.label === 'GitHub')?.url || '#', color: 'text-gray-400', hoverColor: 'hover:text-white' },
    { icon: Linkedin, href: resumeData.basics.links.find(l => l.label === 'LinkedIn')?.url || '#', color: 'text-gray-400', hoverColor: 'hover:text-blue-500' },
    { icon: Mail, href: `mailto:${resumeData.basics.email}`, color: 'text-gray-400', hoverColor: 'hover:text-blue-500' },
    { icon: Code, href: resumeData.basics.links.find(l => l.label === 'LeetCode')?.url || '#', color: 'text-gray-400', hoverColor: 'hover:text-[#ffa116]' },
  ];

  return (
    <footer className="py-24 px-6 border-t border-white/5 bg-[#05050a] print:hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to build something <span className="text-blue-500">great?</span>
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed max-w-lg">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </div>

        <div className="flex flex-col items-start lg:items-end gap-6 w-full lg:w-auto">
          <div className="flex flex-wrap gap-4">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -5, backgroundColor: 'rgba(59, 130, 246, 0.1)', borderColor: 'rgba(59, 130, 246, 0.3)' }}
                className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center transition-all shadow-lg shadow-black/40 group"
              >
                <link.icon className={`w-6 h-6 ${link.color} ${link.hoverColor} transition-colors`} />
              </motion.a>
            ))}
          </div>
          
          <p className="text-gray-600 text-sm font-mono tracking-tight">
            &copy; {new Date().getFullYear()} {resumeData.basics.name}. Built with <span className="text-blue-500">React</span> & <span className="text-blue-500">Tailwind</span>.
          </p>
        </div>
      </div>
    </footer>
  );
};
