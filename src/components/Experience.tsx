import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { resumeData } from '../data/resume';
import { ChevronDown, Briefcase, MapPin, Calendar, Zap } from 'lucide-react';
import { cn } from '../lib/utils';

export const Experience: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
            <Briefcase className="text-blue-500 w-6 h-6" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Professional Journey</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-6">
            {resumeData.experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="group"
              >
                <div
                  onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                  className={cn(
                    "relative p-6 rounded-2xl border transition-all cursor-pointer overflow-hidden",
                    expandedIndex === index 
                      ? "bg-white/5 border-blue-500/30 shadow-[0_0_30px_-10px_rgba(59,130,246,0.3)]" 
                      : "bg-white/[0.02] border-white/10 hover:border-white/20"
                  )}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-blue-500/80 font-medium">{exp.company}</p>
                    </div>
                    <ChevronDown className={cn(
                      "w-5 h-5 text-gray-500 transition-transform duration-300",
                      expandedIndex === index && "rotate-180 text-blue-500"
                    )} />
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      {exp.dates}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </div>
                  </div>

                  <AnimatePresence>
                    {expandedIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ul className="space-y-3 pt-4 border-t border-white/10">
                          {exp.bullets.map((bullet, bIdx) => (
                            <li key={bIdx} className="flex gap-3 text-gray-400 text-sm leading-relaxed">
                              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-blue-500/5 border border-blue-500/20 sticky top-24">
              <div className="flex items-center gap-2 mb-6">
                <Zap className="w-5 h-5 text-blue-500" />
                <h3 className="font-bold text-white uppercase tracking-wider text-sm">Impact Highlights</h3>
              </div>
              <div className="space-y-4">
                {resumeData.experience.flatMap(e => e.metrics || []).map((metric, mIdx) => (
                  <motion.div
                    key={mIdx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-center"
                  >
                    <span className="text-2xl font-bold text-blue-400 block">{metric.split(' ')[0]}</span>
                    <span className="text-xs text-gray-500 ml-2 uppercase font-medium">{metric.split(' ').slice(1).join(' ')}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
