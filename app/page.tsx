/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

"use client";

import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Achievements from '@/components/Achievements';
import Contact from '@/components/Contact';

export default function App() {
  const handleOpenJourney = () => {
    const target = document.querySelector('#about');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    // Custom friendly console log greeting
    console.log(
      '%c> PROGRESSION JOURNEY PORTFOLIO: LIVE %c\nMaintained with outstanding distinction by Golconda Dhanush Kumar.\nComputer Science and Engineering · CBIT Hyderabad.',
      'color: #F5A623; font-weight: bold; font-family: sans-serif; font-size: 14px;',
      'color: #8A9BB8; font-family: sans-serif; font-size: 12px;'
    );
  }, []);

  return (
    <div className="min-h-screen antialiased font-sans selection:bg-[rgba(255,170,80,0.2)] selection:text-[#F5F1EB] flex flex-col justify-between" style={{ background: "#060D1F", color: "#F0EDE6" }}>
      {/* Premium Glassmorphic Top Header Navigation Overlay */}
      <Navbar />

      {/* Main Narrative Chapters Wrapper */}
      <main className="flex-grow">
        {/* Cinematic Entrance Hero Banner */}
        <Hero onOpenCodex={handleOpenJourney} />

        {/* Narrative Biography & Growth Timeline Checkpoint */}
        <About />

        {/* Featured Projects Log */}
        <Projects />

        {/* Technical Toolkit & Mastery Levels */}
        <Skills />

        {/* Competitive Milestone Benchmarks */}
        <Achievements />

        {/* Connect Channels form */}
        <Contact />
      </main>

      {/* Expedition Log Footer */}
      <footer
        className="relative py-8 px-6 sm:px-12 text-center"
        style={{ background: "#17110D", borderTop: "1px solid rgba(255,170,80,0.06)" }}
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3">
          <span className="font-mono text-[9.5px] text-[#C9B7A4]/30 uppercase tracking-widest">
            &copy; 2026 Golconda Dhanush Kumar · CBIT Hyderabad · All Discoveries Reserved
          </span>
          <span className="font-mono text-[9.5px] text-[rgba(255,170,80,0.3)] tracking-widest uppercase">
            17°22′N 78°28′E · Expedition Still Active
          </span>
        </div>
      </footer>
    </div>
  );
}
