import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';
import { User, Rocket, Coffee, Code2 } from 'lucide-react';

export const About: React.FC = () => {
  const stats = [
    { label: 'Projects Completed', value: '15+', icon: Rocket },
    { label: 'Cups of Coffee', value: '500+', icon: Coffee },
    { label: 'Lines of Code', value: '50k+', icon: Code2 },
  ];

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
            <User className="text-blue-500 w-6 h-6" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">About Me</h2>
        </div>

        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <p className="text-2xl md:text-3xl text-blue-400 font-medium leading-tight">
              I'm a Backend Software Engineer dedicated to building high-impact, scalable solutions.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              My expertise lies in <span className="text-blue-400">Java-based backend development</span>, specifically with <span className="text-blue-400">Spring Boot</span> and <span className="text-blue-400">Hibernate</span>. I have a strong foundation in <span className="text-blue-400">clean architecture</span> and <span className="text-blue-400">event-driven systems</span>. Experienced in event-driven systems using <span className="text-blue-400">Apache Kafka</span> and <span className="text-blue-400">Salesforce integration</span>. Beyond technical skills, I am a <span className="text-blue-400">competitive programmer</span> and a <span className="text-blue-400">research enthusiast</span>, always looking for ways to push the boundaries of technology.
            </p>
            
            <div className="pt-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-3xl bg-white/[0.02] border border-white/10 group hover:border-blue-500/30 transition-all"
                >
                  <stat.icon className="w-6 h-6 text-blue-500 mb-3 group-hover:scale-110 transition-transform" />
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
