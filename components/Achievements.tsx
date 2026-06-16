"use client";

import React from 'react';
import { accoladesData } from '@/data/portfolio';
import { Award, FileCheck, ArrowRight, Sparkles } from 'lucide-react';

export default function Achievements() {
  const getAccoladeIcon = (type: string, title: string) => {
    if (title.toLowerCase().includes('rank') || title.toLowerCase().includes('award')) {
      return <Award className="w-6 h-6 text-accent-amber animate-pulse" />;
    }
    if (type === 'certification') {
      return <FileCheck className="w-6 h-6 text-accent-teal" />;
    }
    return <Sparkles className="w-6 h-6 text-[#22C55E]" />;
  };

  return (
    <section id="achievements" className="py-24 bg-bg-void border-b border-border-dim/40 px-6 sm:px-12 relative overflow-hidden">
      {/* Decorative background visual lights */}
      <div className="absolute top-[30%] left-[-8%] w-80 h-80 bg-accent-amber/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Modern Section Header */}
        <div className="mb-16 select-none">
          <span className="font-mono text-xs text-accent-amber font-semibold tracking-widest uppercase block mb-2">
            04 / Benchmarks Met
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary tracking-tight">
            Key Achievements & Milestones
          </h2>
          <p className="font-sans text-sm text-text-fog mt-2 max-w-xl">
            National rankings, hackathon victories, and academic distinction credentials earned through rigorous building.
          </p>
          <div className="h-1 w-16 bg-gradient-to-r from-accent-amber to-transparent mt-5 rounded-full" />
        </div>

        {/* 2-Column Grid Layout containing achievement milestones */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {accoladesData.map((item, idx) => (
            <div
              key={item.title}
              className="bg-bg-ink border border-border-dim/80 rounded-2xl p-6 hover:border-accent-amber/40 transition-all duration-300 flex flex-col justify-between group shadow-xl relative"
              id={`accolades-item-${idx}`}
            >
              {/* Top border glowing highlight */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent-amber/10 to-transparent group-hover:via-accent-amber/50 transition-all duration-300 rounded-t-2xl" />

              <div>
                {/* Header card indicator */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl border border-border-dim bg-bg-void flex items-center justify-center shadow-inner group-hover:border-accent-amber/30 transition-colors">
                    {getAccoladeIcon(item.type, item.title)}
                  </div>
                  <span className="font-mono text-[10px] text-accent-teal uppercase bg-[#38BDF8]/5 border border-[#38BDF8]/20 px-2.5 py-1 rounded-lg">
                    {item.type === 'achievement' ? 'competition award' : 'verified credential'}
                  </span>
                </div>

                {/* Body Text Content */}
                <h3 className="font-display text-lg sm:text-xl font-bold text-text-primary group-hover:text-accent-amber transition-colors duration-200 tracking-tight">
                  {item.title}
                </h3>
                <p className="font-sans text-xs text-accent-amber mt-1.5 uppercase font-semibold tracking-wider">
                  {item.organization}
                </p>
                <p className="font-sans text-xs sm:text-sm text-[#a4b5d0] mt-3 leading-relaxed font-light">
                  {item.detail}
                </p>
              </div>

              {/* Bottom bar metadata and Verification Simulation */}
              <div className="mt-6 pt-4 border-t border-border-dim/40 flex justify-between items-center text-xs font-mono">
                <span className="text-text-fog/45 font-mono">{item.date}</span>
                <button
                  onClick={() => {
                    alert(`Opening verification credentials simulation for [ ${item.title} ].`);
                  }}
                  className="cursor-pointer text-accent-teal hover:text-accent-amber group-hover:text-accent-amber transition-colors flex items-center gap-1.5 font-semibold text-[11px] uppercase tracking-wider"
                >
                  <span>Verify Record</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </button>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
