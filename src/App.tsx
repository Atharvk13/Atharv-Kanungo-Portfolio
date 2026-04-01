/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Splash } from './components/Splash';
import { AnimatedBackground } from './components/AnimatedBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Achievements } from './components/Achievements';
import { Skills } from './components/Skills';
import { AcademicJourney } from './components/AcademicJourney';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { PrintResume } from './components/PrintResume';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="bg-[#05050a] text-white selection:bg-blue-500/30 selection:text-blue-200">
      <AnimatedBackground />
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Splash key="splash" onComplete={() => setIsLoading(false)} />
        ) : (
          <motion.main
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative z-10"
          >
            <Navbar />
            
            <div className="relative z-10">
              <Hero />
              
              <div id="about">
                <About />
              </div>

              <div id="experience">
                <Experience />
              </div>
              
              <div id="academic">
                <AcademicJourney />
              </div>

              <div id="projects">
                <Projects />
              </div>
              
              <div id="achievements">
                <Achievements />
              </div>
              
              <div id="skills">
                <Skills />
              </div>

              <div id="contact">
                <Contact />
              </div>

              <Footer />

              <PrintResume />
            </div>
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}
