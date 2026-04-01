import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';
import { Trophy, Award, Star, TrendingUp, BookOpen } from 'lucide-react';

const iconMap = {
  win: Trophy,
  award: Award,
  metric: TrendingUp,
  leadership: Star,
  research: BookOpen,
};

export const Achievements: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Key Achievements</h2>
          <p className="text-gray-500">Measurable impact and recognition</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resumeData.achievements.map((ach, index) => {
            const Icon = iconMap[ach.type] || Award;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-blue-500/30 transition-all"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Icon className="w-12 h-12 text-blue-500" />
                </div>
                
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20 mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="text-blue-500 w-6 h-6" />
                </div>

                {ach.value && (
                  <div className="text-3xl font-bold text-blue-400 mb-2 font-mono">
                    {ach.value}
                  </div>
                )}
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {ach.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed">
                  {ach.context}
                </p>

                <div className="mt-6 pt-6 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-widest text-gray-600 font-bold">
                    {ach.type}
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500/50" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
