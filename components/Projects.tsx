"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Compass, CheckCircle } from 'lucide-react';
import { projectsData } from '@/data/portfolio';

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeProject = projectsData[activeIndex] || projectsData[0];

  return (
    <section 
      id="projects" 
      className="py-32 px-6 md:px-[120px] relative overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #26180F 0%, #1D120B 40%, #140C07 100%)"
      }}
    >
      {/* Scroll Transition Trail Map Detail */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      <div className="max-w-[1200px] w-full mx-auto z-10 relative">
        
        {/* Section Header */}
        <div className="mb-20 text-center select-none">
          <span className="font-mono text-xs text-accent-amber font-semibold tracking-widest uppercase block mb-3">
            02 / THE EXPEDITION
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F5F1EB] tracking-tight">
            Projects Journey
          </h2>
          <p className="font-sans text-sm text-[rgba(245,241,235,0.70)] mt-3 max-w-xl mx-auto">
            Interactive map of solutions deployed along the development trail. Select a node to view logs.
          </p>
          <div className="h-1 w-16 bg-gradient-to-r from-accent-amber to-transparent mt-6 mx-auto rounded-full" />
        </div>

        {/* Dynamic Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[38%_62%] gap-12 lg:gap-16 items-start">
          
          {/* LEFT COLUMN: Adventure Trail SVG Map (38%) */}
          <div className="flex flex-col items-center lg:block relative">
            
            {/* Horizontal navigation for Mobile viewports */}
            <div className="flex lg:hidden gap-3 mb-8 overflow-x-auto pb-2 w-full justify-center">
              {projectsData.map((project, idx) => (
                <button
                  key={project.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`px-4 py-2 rounded-xl font-mono text-xs uppercase tracking-wider whitespace-nowrap transition-all duration-300 border ${
                    activeIndex === idx
                      ? 'bg-accent-amber text-[#140C07] border-accent-amber'
                      : 'bg-[rgba(255,255,255,0.02)] text-[rgba(245,241,235,0.6)] border-[rgba(255,255,255,0.08)]'
                  }`}
                >
                  Node 0{idx + 1}
                </button>
              ))}
            </div>

            {/* Desktop Adventure Trail Map */}
            <div className="hidden lg:block relative w-full h-[600px]">
              
              {/* Winding Trail SVG line */}
              <svg className="absolute inset-0 w-full h-full text-[rgba(255,170,80,0.15)] pointer-events-none" viewBox="0 0 120 600" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Winding path */}
                <path 
                  d="M 60,0 C 50,30 25,80 32,120 C 50,180 80,240 68,300 C 50,370 25,430 32,480 C 40,510 50,550 60,600" 
                  stroke="currentColor" 
                  strokeWidth="2.5" 
                  strokeDasharray="6 6"
                  fill="none" 
                />
              </svg>

              {/* Node 01 */}
              <div 
                className="absolute"
                style={{ left: '32px', top: '120px', transform: 'translate(-50%, -50%)' }}
              >
                <button
                  onClick={() => setActiveIndex(0)}
                  className={`group relative flex items-center justify-center w-10 h-10 rounded-full border transition-all duration-300 cursor-pointer ${
                    activeIndex === 0 
                      ? 'bg-accent-amber border-accent-amber shadow-[0_0_20px_rgba(255,170,80,0.6)]' 
                      : 'bg-[#1D120B] border-[rgba(255,170,80,0.2)] hover:border-accent-amber/60'
                  }`}
                >
                  <Compass className={`w-5 h-5 transition-transform duration-500 ${activeIndex === 0 ? 'text-[#140C07] rotate-45' : 'text-accent-amber group-hover:rotate-12'}`} />
                  
                  {/* Label */}
                  <span className={`absolute left-14 font-mono text-xs tracking-wider uppercase whitespace-nowrap transition-colors duration-300 ${
                    activeIndex === 0 ? 'text-accent-amber font-semibold' : 'text-[rgba(245,241,235,0.5)] group-hover:text-[#F5F1EB]'
                  }`}>
                    01 / Arogya Sarathi
                  </span>
                </button>
              </div>

              {/* Node 02 */}
              <div 
                className="absolute"
                style={{ left: '68px', top: '300px', transform: 'translate(-50%, -50%)' }}
              >
                <button
                  onClick={() => setActiveIndex(1)}
                  className={`group relative flex items-center justify-center w-10 h-10 rounded-full border transition-all duration-300 cursor-pointer ${
                    activeIndex === 1 
                      ? 'bg-accent-amber border-accent-amber shadow-[0_0_20px_rgba(255,170,80,0.6)]' 
                      : 'bg-[#1D120B] border-[rgba(255,170,80,0.2)] hover:border-accent-amber/60'
                  }`}
                >
                  <Compass className={`w-5 h-5 transition-transform duration-500 ${activeIndex === 1 ? 'text-[#140C07] rotate-45' : 'text-accent-amber group-hover:rotate-12'}`} />
                  
                  {/* Label (placed on the left of this node since it is shifted right) */}
                  <span className={`absolute right-14 font-mono text-xs tracking-wider uppercase whitespace-nowrap transition-colors duration-300 ${
                    activeIndex === 1 ? 'text-accent-amber font-semibold' : 'text-[rgba(245,241,235,0.5)] group-hover:text-[#F5F1EB]'
                  }`}>
                    02 / Dynosaur Website
                  </span>
                </button>
              </div>

              {/* Node 03 */}
              <div 
                className="absolute"
                style={{ left: '32px', top: '480px', transform: 'translate(-50%, -50%)' }}
              >
                <button
                  onClick={() => setActiveIndex(2)}
                  className={`group relative flex items-center justify-center w-10 h-10 rounded-full border transition-all duration-300 cursor-pointer ${
                    activeIndex === 2 
                      ? 'bg-accent-amber border-accent-amber shadow-[0_0_20px_rgba(255,170,80,0.6)]' 
                      : 'bg-[#1D120B] border-[rgba(255,170,80,0.2)] hover:border-accent-amber/60'
                  }`}
                >
                  <Compass className={`w-5 h-5 transition-transform duration-500 ${activeIndex === 2 ? 'text-[#140C07] rotate-45' : 'text-accent-amber group-hover:rotate-12'}`} />
                  
                  {/* Label */}
                  <span className={`absolute left-14 font-mono text-xs tracking-wider uppercase whitespace-nowrap transition-colors duration-300 ${
                    activeIndex === 2 ? 'text-accent-amber font-semibold' : 'text-[rgba(245,241,235,0.5)] group-hover:text-[#F5F1EB]'
                  }`}>
                    03 / Portfolio Explorer
                  </span>
                </button>
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN: Explorer Journal Card (62%) */}
          <div className="w-full min-h-[480px] flex items-stretch">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="w-full rounded-[24px] p-8 md:p-10 shadow-2xl relative border flex flex-col justify-between"
                style={{
                  background: "#F4E7D3",
                  color: "#3A2B20",
                  borderColor: "rgba(0,0,0,0.05)"
                }}
              >
                {/* Journal Binder Ring details */}
                <div className="absolute top-0 bottom-0 left-4 w-1.5 flex flex-col justify-around py-8 pointer-events-none opacity-20">
                  <div className="w-3 h-3 rounded-full bg-[#3A2B20]" />
                  <div className="w-3 h-3 rounded-full bg-[#3A2B20]" />
                  <div className="w-3 h-3 rounded-full bg-[#3A2B20]" />
                </div>

                <div className="pl-6 space-y-6">
                  {/* Card Header */}
                  <div className="space-y-1.5 border-b border-[#3A2B20]/10 pb-4">
                    <span className="font-mono text-[10px] tracking-wider uppercase font-semibold text-[#3A2B20]/60">
                      JOURNAL ENTRY 0{activeIndex + 1} &bull; {activeProject.date}
                    </span>
                    <h3 className="font-display text-3xl font-extrabold tracking-tight">
                      {activeProject.title}
                    </h3>
                    <p className="font-mono text-xs font-semibold text-accent-amber/90 uppercase tracking-widest bg-[#3A2B20]/5 px-3 py-1 rounded-md inline-block">
                      {activeProject.timelineLabel}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="font-sans text-[15px] leading-relaxed font-light">
                    {activeProject.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-3">
                    <h4 className="font-mono text-xs uppercase tracking-wider font-bold flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#2E7D20]" />
                      FIELD LOG NOTES:
                    </h4>
                    <ul className="space-y-2 text-sm pl-1 font-sans font-light">
                      {activeProject.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start">
                          <span className="text-[#3A2B20]/50 font-mono mr-2.5 mt-0.5">&bull;</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Tags */}
                  <div className="space-y-2 pt-2">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[#3A2B20]/50 block">SYSTEM TOOLS:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {activeProject.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-[11px] px-2.5 py-1 rounded-md"
                          style={{
                            background: "rgba(58, 43, 32, 0.05)",
                            border: "1px solid rgba(58, 43, 32, 0.12)",
                            color: "#3A2B20"
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="pl-6 pt-6 mt-8 border-t border-[#3A2B20]/10 flex flex-wrap gap-4 items-center">
                  {activeProject.github && (
                    <a
                      href={activeProject.github}
                      target="_blank"
                      rel="noreferrer"
                      className="cursor-pointer flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-mono font-semibold uppercase tracking-wider border transition-colors bg-[#3A2B20] text-[#F4E7D3] border-[#3A2B20] hover:bg-[#4C3B2E]"
                    >
                      <Github className="w-4 h-4" />
                      <span>Inspect Repository</span>
                    </a>
                  )}
                  {activeProject.demo && (
                    <a
                      href={activeProject.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="cursor-pointer flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-mono font-semibold uppercase tracking-wider border transition-colors border-[#3A2B20] text-[#3A2B20] hover:bg-[#3A2B20]/5"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Explore Live</span>
                    </a>
                  )}
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
