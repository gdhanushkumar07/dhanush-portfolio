"use client";

import React from 'react';
import { projectsData } from '@/data/portfolio';
import { Github, ExternalLink, ShieldCheck, Flame, Cpu, CloudLightning } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-bg-ink border-b border-border-dim/40 px-6 sm:px-12 relative overflow-hidden">
      {/* Decorative vector points */}
      <div className="absolute top-[30%] right-[-10%] w-[400px] h-[400px] bg-accent-teal/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Modern Section Header */}
        <div className="mb-16 select-none">
          <span className="font-mono text-xs text-accent-amber font-semibold tracking-widest uppercase block mb-2">
            03 / Production Builds
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary tracking-tight">
            Featured Projects & Systems
          </h2>
          <p className="font-sans text-sm text-text-fog mt-2 max-w-xl">
            Real implementations featuring robust event-driven backends, optimized transport structures, and smart algorithms.
          </p>
          <div className="h-1 w-16 bg-gradient-to-r from-accent-amber to-transparent mt-5 rounded-full" />
        </div>

        {/* Vertical Journey Progress line connecting the projects */}
        <div className="space-y-16 relative">
          {projectsData.map((project, idx) => (
            <div key={project.id} id={`project-${project.id}`} className="relative pl-0 md:pl-10">
              
              {/* Vertical Journey Track Line for Desktop heights */}
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-teal via-accent-amber to-transparent hidden md:block" />
              
              {/* Highlight Circle Node Checkpoint */}
              <div className="absolute left-[-5px] top-2 w-3.5 h-3.5 rounded-full bg-accent-teal border-2 border-bg-void shadow-[0_0_8px_rgba(56,189,248,0.8)] hidden md:block" />

              {/* Checkpoint Header Label */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div className="flex items-center space-x-3">
                  <span className="font-mono text-xs text-accent-amber font-semibold tracking-widest uppercase bg-accent-amber/10 px-3 py-1 rounded-full">
                    Project Milestone 0{idx + 1}
                  </span>
                  <span className="text-text-fog/40 font-mono text-[11px]">— {project.date}</span>
                </div>
                <span className="font-mono text-[11px] text-text-fog/60">{project.timelineLabel}</span>
              </div>

              {/* Main Container Card */}
              <div className="bg-bg-card border border-border-dim/80 rounded-2xl p-6 sm:p-8 hover:border-accent-amber/40 transition-all duration-300 shadow-2xl relative overflow-hidden group">
                {/* Visual gradients */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-accent-amber/[0.03] via-transparent to-transparent pointer-events-none" />

                {/* Left side focus strip */}
                <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-bg-ink group-hover:bg-accent-amber transition-colors duration-300" />

                {/* Row Grid header */}
                <div className="flex flex-col lg:flex-row justify-between items-start gap-4 mb-6">
                  <div className="space-y-1">
                    <div className="flex items-center flex-wrap gap-3">
                      <h3 className="font-display text-2xl font-bold text-text-primary tracking-tight">
                        {project.title}
                      </h3>
                      {project.isFeatured && (
                        <span className="inline-flex items-center gap-1 font-mono text-[10px] text-bg-void bg-accent-amber px-2.5 py-0.5 rounded-md font-bold uppercase">
                          <Flame className="w-3 h-3 fill-bg-void" />
                          Featured Initiative
                        </span>
                      )}
                    </div>
                    <p className="font-sans text-xs sm:text-sm text-accent-teal font-medium tracking-wide">
                      {project.subtitle}
                    </p>
                  </div>

                  <div className="font-mono text-xs border border-border-dim/60 bg-bg-void/40 rounded-lg px-3 py-1.5 text-text-fog/75 flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5 text-accent-amber animate-spin-slow" />
                    <span>SYSTEM_ACTIVE</span>
                  </div>
                </div>

                {/* Two Column Grid containing description and targets */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Detailed features description column */}
                  <div className="lg:col-span-7 space-y-5">
                    <p className="text-text-fog font-sans leading-relaxed text-sm sm:text-base font-light">
                      {project.description}
                    </p>

                    <div className="space-y-3 pt-2">
                      <h4 className="font-mono text-xs text-text-primary font-semibold uppercase tracking-wider flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-[#22C55E]" />
                        Architectural Highlights:
                      </h4>
                      <ul className="space-y-2.5 text-xs sm:text-sm text-text-[#a4b5d0]">
                        {project.features.map((feature, fIdx) => (
                          <li key={fIdx} className="flex items-start">
                            <span className="text-accent-amber font-mono mr-2.5 shrink-0">❖</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Skills tags and execution panel */}
                  <div className="lg:col-span-5 bg-bg-void/40 border border-border-dim/60 rounded-xl p-5 sm:p-6 space-y-6">
                    <div>
                      <h4 className="font-mono text-[10px] text-[#7185a6] uppercase tracking-widest mb-3.5 block">
                        Technologies Deployed:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="font-mono text-[11px] text-accent-teal bg-accent-teal/5 border border-accent-teal/25 px-2.5 py-1 rounded-lg"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="h-px bg-border-dim/40" />

                    <div>
                      <h4 className="font-mono text-[10px] text-[#7185a6] uppercase tracking-widest mb-3.5 block">
                        Review Deployment & Code:
                      </h4>
                      <div className="grid grid-cols-2 gap-3">
                        {project.github && (
                          <button
                            onClick={() => {
                              alert(`Navigating to GitHub repository simulation for ${project.title}.`);
                            }}
                            className="cursor-pointer flex items-center justify-center space-x-2 border border-border-dim/80 hover:border-text-primary hover:bg-bg-card font-semibold text-xs text-text-primary py-2.5 px-3.5 rounded-lg transition-colors"
                          >
                            <Github className="w-4 h-4" />
                            <span>GitHub</span>
                          </button>
                        )}
                        {project.demo && (
                          <button
                            onClick={() => {
                              alert(`Launching live deployment instance simulation for ${project.title}.`);
                            }}
                            className="cursor-pointer flex items-center justify-center space-x-2 bg-accent-amber border border-accent-amber hover:bg-accent-amber/95 font-semibold text-xs text-bg-void py-2.5 px-3.5 rounded-lg transition-colors shadow-lg shadow-accent-amber/10"
                          >
                            <ExternalLink className="w-4 h-4" />
                            <span>Live Instance</span>
                          </button>
                        )}
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
