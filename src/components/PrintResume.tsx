import React from 'react';
import { resumeData } from '../data/resume';

export const PrintResume: React.FC = () => {
  return (
    <div className="hidden print:block p-10 bg-white text-black font-sans min-h-screen">
      <header className="border-b-2 border-gray-800 pb-6 mb-8">
        <h1 className="text-4xl font-bold mb-2">{resumeData.basics.name}</h1>
        <p className="text-xl text-gray-700 mb-4">{resumeData.basics.title}</p>
        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
          <span>{resumeData.basics.email}</span>
          <span>{resumeData.basics.phone}</span>
          <span>{resumeData.basics.location}</span>
          <span>{resumeData.basics.links[0].url}</span>
        </div>
      </header>

      <section className="mb-8">
        <h2 className="text-xl font-bold uppercase tracking-wider border-b border-gray-300 mb-4">Summary</h2>
        <p className="text-gray-800 leading-relaxed">{resumeData.basics.summary}</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold uppercase tracking-wider border-b border-gray-300 mb-4">Experience</h2>
        {resumeData.experience.map((exp, i) => (
          <div key={i} className="mb-6">
            <div className="flex justify-between items-baseline mb-1">
              <h3 className="text-lg font-bold">{exp.company}</h3>
              <span className="text-sm font-medium">{exp.dates}</span>
            </div>
            <p className="text-gray-700 italic mb-2">{exp.role} | {exp.location}</p>
            <ul className="list-disc ml-5 space-y-1">
              {exp.bullets.map((b, bi) => (
                <li key={bi} className="text-gray-800 text-sm">{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <div className="grid grid-cols-2 gap-10">
        <section>
          <h2 className="text-xl font-bold uppercase tracking-wider border-b border-gray-300 mb-4">Skills</h2>
          {resumeData.skills.map((s, i) => (
            <div key={i} className="mb-3">
              <h3 className="text-sm font-bold text-gray-700 mb-1">{s.category}</h3>
              <p className="text-sm text-gray-800">{s.items.join(', ')}</p>
            </div>
          ))}
        </section>

        <section>
          <h2 className="text-xl font-bold uppercase tracking-wider border-b border-gray-300 mb-4">Education</h2>
          {resumeData.education.map((edu, i) => (
            <div key={i} className="mb-4">
              <h3 className="text-sm font-bold">{edu.institution}</h3>
              <p className="text-sm text-gray-700">{edu.degree}</p>
              <p className="text-xs text-gray-500">{edu.dates} | {edu.location}</p>
            </div>
          ))}
        </section>
      </div>

      <section className="mt-8">
        <h2 className="text-xl font-bold uppercase tracking-wider border-b border-gray-300 mb-4">Achievements & Certifications</h2>
        <div className="grid grid-cols-2 gap-4">
          <ul className="list-disc ml-5 space-y-1">
            {resumeData.achievements.map((a, i) => (
              <li key={i} className="text-sm text-gray-800">
                <span className="font-bold">{a.title}:</span> {a.context}
              </li>
            ))}
          </ul>
          <ul className="list-disc ml-5 space-y-1">
            {resumeData.certifications.map((c, i) => (
              <li key={i} className="text-sm text-gray-800">{c}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};
