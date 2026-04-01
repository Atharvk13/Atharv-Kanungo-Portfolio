import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code2, Cpu, Globe, Database, Server } from 'lucide-react';
import { resumeData } from '../data/resume';

export const Projects: React.FC = () => {
  const getProjectIcon = (title: string) => {
    switch (title.toLowerCase()) {
      case 'cinematch': return Server;
      case 'chess engine': return Cpu;
      case 'portfolio website': return Globe;
      default: return Code2;
    }
  };

  const getSecondaryIcon = (title: string) => {
    switch (title.toLowerCase()) {
      case 'cinematch': return Database;
      case 'chess engine': return Cpu;
      case 'portfolio website': return Github;
      default: return Code2;
    }
  };

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white mb-10 tracking-tight"
        >
          Featured Work
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {resumeData.projects.map((project, index) => {
            const Icon = getProjectIcon(project.title);
            const SecondaryIcon = getSecondaryIcon(project.title);
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative p-4 rounded-2xl bg-[#0a0a0a] border border-white/5 hover:border-blue-500/20 transition-all duration-500"
              >
                {/* Top Icons */}
                <div className="flex justify-between items-start mb-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center border border-blue-500/10">
                    <Icon className="w-5 h-5 text-blue-500" />
                  </div>
                  <SecondaryIcon className="w-4 h-4 text-white/5" />
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
                    {project.bullets[0]}
                  </p>
                </div>

                {/* Stack Tags */}
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {project.stack.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-2.5 py-0.5 rounded-full bg-white/[0.03] border border-white/5 text-xs text-gray-500 font-medium hover:bg-white hover:text-black transition-all duration-300 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 mt-6">
                  {project.links?.map((link, i) => (
                    <a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 text-sm font-bold text-white hover:text-blue-500 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      {link.label}
                    </a>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
