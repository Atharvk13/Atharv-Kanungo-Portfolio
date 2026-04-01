import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';
import { GraduationCap, Calendar, MapPin, BookOpen } from 'lucide-react';
import { cn } from '../lib/utils';

export const AcademicJourney: React.FC = () => {
  return (
    <section id="academic" className="py-24 px-6 bg-white/[0.01]">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-20">
          <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
            <GraduationCap className="text-blue-500 w-6 h-6" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Academic Journey</h2>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-blue-500/20 to-transparent hidden md:block" />

          <div className="space-y-12">
            {resumeData.education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={cn(
                  "relative flex flex-col md:flex-row items-center gap-8 md:gap-0",
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                )}
              >
                {/* Content Side */}
                <div className={cn(
                  "w-full md:w-1/2 flex",
                  index % 2 === 0 ? "md:justify-end md:pr-16" : "md:justify-start md:pl-16"
                )}>
                  <div className={cn(
                    "p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-blue-500/30 transition-all group relative",
                    index % 2 === 0 ? "text-right" : "text-left"
                  )}>
                    <div className={cn(
                      "absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-blue-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)] hidden md:block",
                      index % 2 === 0 ? "-right-[74px]" : "-left-[74px]"
                    )} />
                    
                    <div className={cn("flex items-center gap-3 mb-4", index % 2 === 0 ? "justify-end" : "justify-start")}>
                      <BookOpen className="w-5 h-5 text-blue-500" />
                      <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                        {edu.institution}
                      </h3>
                    </div>
                    
                    <p className="text-blue-400 font-medium mb-4">{edu.degree}</p>
                    
                    <div className={cn("flex flex-wrap gap-4 text-xs text-gray-500 font-mono uppercase tracking-wider", index % 2 === 0 ? "justify-end" : "justify-start")}>
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        {edu.dates}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4" />
                        {edu.location}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Empty Side for Spacing on Desktop */}
                <div className="hidden md:block w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
