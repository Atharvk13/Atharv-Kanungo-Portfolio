import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';
import { Code2, Terminal, Database, Cpu } from 'lucide-react';

const iconMap: Record<string, any> = {
  "Languages": Code2,
  "Frameworks & Tools": Terminal,
  "Database": Database,
  "Other": Cpu
};

const gradientMap: Record<string, string> = {
  "Languages & Frameworks": "from-blue-500/20 to-cyan-500/20",
  "Databases": "from-purple-500/20 to-pink-500/20",
  "Developer Tools": "from-orange-500/20 to-red-500/20",
  "Technologies": "from-green-500/20 to-emerald-500/20",
  "Coursework": "from-indigo-500/20 to-blue-500/20"
};

export const Skills: React.FC = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Technical Arsenal</h2>
            <p className="text-gray-500">Core competencies and specialized tools</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {resumeData.skills.map((skillGroup, index) => {
            const Icon = iconMap[skillGroup.category] || Terminal;
            const gradient = gradientMap[skillGroup.category] || "from-blue-500/20 to-cyan-500/20";
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`p-8 rounded-3xl bg-gradient-to-br ${gradient} border border-white/10 hover:border-white/20 transition-all duration-300`}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                    <Icon className="text-blue-500 w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{skillGroup.category}</h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {skillGroup.items.map((skill, sIdx) => (
                    <motion.span
                      key={sIdx}
                      whileHover={{ scale: 1.08, y: -2 }}
                      className="px-4 py-2 rounded-full bg-gradient-to-r from-white/10 to-white/5 border border-white/20 text-white text-sm font-semibold transition-all duration-300 hover:border-white/40 hover:shadow-lg hover:shadow-blue-500/20 cursor-default"
                    >
                      {skill}
                    </motion.span>
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
