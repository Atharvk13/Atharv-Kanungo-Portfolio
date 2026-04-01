import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Code, Phone, MapPin, ExternalLink } from 'lucide-react';
import { resumeData } from '../data/resume';

export const Contact: React.FC = () => {
  const contactLinks = [
    {
      label: 'LinkedIn',
      url: resumeData.basics.links.find(l => l.label === 'LinkedIn')?.url || '#',
      icon: Linkedin,
      color: 'bg-[#0077b5]',
      description: 'Professional network & experience'
    },
    {
      label: 'GitHub',
      url: resumeData.basics.links.find(l => l.label === 'GitHub')?.url || '#',
      icon: Github,
      color: 'bg-[#333]',
      description: 'Open source projects & contributions'
    },
    {
      label: 'LeetCode',
      url: resumeData.basics.links.find(l => l.label === 'LeetCode')?.url || '#',
      icon: Code,
      color: 'bg-[#ffa116]',
      description: 'Problem solving & algorithms'
    },
    {
      label: 'Gmail',
      url: `mailto:${resumeData.basics.email}`,
      icon: Mail,
      color: 'bg-[#ea4335]',
      description: 'Direct communication & inquiries'
    }
  ];

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-4"
          >
            Get In Touch
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-500"
          >
            Let's connect and build something amazing together
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 space-y-8">
              <h3 className="text-xl font-bold text-white text-center mb-4">Contact Information</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col items-center gap-4 group text-center">
                  <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors">
                    <Mail className="text-blue-500 w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-bold tracking-widest mb-1">Email</p>
                    <a href={`mailto:${resumeData.basics.email}`} className="text-white hover:text-blue-400 transition-colors">
                      {resumeData.basics.email}
                    </a>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-4 group text-center">
                  <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors">
                    <MapPin className="text-blue-500 w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-bold tracking-widest mb-1">Location</p>
                    <p className="text-white">{resumeData.basics.location}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
