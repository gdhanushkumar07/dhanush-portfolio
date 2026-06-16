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
    const target = document.querySelector('#projects');
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
    <div className="bg-bg-void min-h-screen text-text-primary antialiased font-sans selection:bg-accent-amber/25 selection:text-text-primary flex flex-col justify-between">
      {/* Premium Glassmorphic Top Header Navigation Overlay */}
      <Navbar />

      {/* Main Narrative Chapters Wrapper */}
      <main className="flex-grow">
        {/* Cinematic Entrance Hero Banner */}
        <Hero onOpenCodex={handleOpenJourney} />

        {/* Featured Projects Log */}
        <Projects />

        {/* Technical Toolkit & Mastery Levels */}
        <Skills />

        {/* Narrative Biography & Growth Timeline Checkpoint */}
        <About />

        {/* Competitive Milestone Benchmarks */}
        <Achievements />

        {/* Connect Channels form */}
        <Contact />
      </main>

      {/* Modern Compact System Footer */}
      <footer className="bg-bg-void border-t border-border-dim/40 py-8 px-6 sm:px-12 text-center text-xs font-mono text-text-fog/45">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <span>
            &copy; 2026 Golconda Dhanush Kumar. Engineered for lightning performance and full responsive fidelity.
          </span>
          <span className="text-accent-teal font-semibold tracking-wide">
            EXPLORE • EVOLVE • BUILD // SUCCESS
          </span>
        </div>
      </footer>
    </div>
  );
}
