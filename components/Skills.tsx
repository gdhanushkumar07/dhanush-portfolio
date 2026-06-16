import React from 'react';
import { skillsData } from '@/data/portfolio';
import { Award, Terminal, Cpu, Database, Compass, Globe, CheckCircle2 } from 'lucide-react';

export default function Skills() {
  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'languages':
        return <Terminal className="w-5 h-5 text-accent-amber" />;
      case 'web stack':
        return <Globe className="w-5 h-5 text-accent-teal" />;
      case 'databases':
        return <Database className="w-5 h-5 text-accent-amber" />;
      case 'data science & ai':
        return <Cpu className="w-5 h-5 text-accent-teal" />;
      case 'tools & cloud':
        return <Compass className="w-5 h-5 text-accent-amber" />;
      default:
        return <Terminal className="w-5 h-5 text-accent-amber" />;
    }
  };

  // Trajectory level indicators for visual "constantly leveling up" feel
  const getProgressPercent = (category: string) => {
    switch (category.toLowerCase()) {
      case 'languages': return 90;
      case 'web stack': return 85;
      case 'databases': return 80;
      case 'data science & ai': return 75;
      case 'tools & cloud': return 80;
      default: return 80;
    }
  };

  return (
    <section id="skills" className="py-24 bg-bg-void border-b border-border-dim/40 px-6 sm:px-12 relative overflow-hidden">
      {/* Decorative vector overlays */}
      <div className="absolute top-[20%] left-[-10%] w-96 h-96 bg-accent-amber/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-96 h-96 bg-accent-teal/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Modern Header */}
        <div className="mb-16 select-none">
          <span className="font-mono text-xs text-accent-amber font-semibold tracking-widest uppercase block mb-2">
            02 / Expertise Matrix
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary tracking-tight">
            Acquired Skills & Toolkit
          </h2>
          <p className="font-sans text-sm text-text-fog mt-2 max-w-xl">
            A comprehensive overview of programming languages, state managers, persistence architectures, and deployment infrastructure.
          </p>
          <div className="h-1 w-16 bg-gradient-to-r from-accent-amber to-transparent mt-5 rounded-full" />
        </div>

        {/* 5-Column Grid with progress tracker highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillsData.map((skillGroup, idx) => {
            const levelPercent = getProgressPercent(skillGroup.category);
            return (
              <div
                key={skillGroup.category}
                className="bg-bg-ink border border-border-dim/80 rounded-2xl p-6 flex flex-col justify-between hover:border-accent-amber/40 transition-all duration-300 relative group shadow-lg"
                id={`skills-category-${idx}`}
              >
                {/* Visual grid decor inside card */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-accent-amber/[0.02] to-transparent pointer-events-none" />

                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-6 pb-3 border-b border-border-dim/40">
                    <div className="flex items-center space-x-3">
                      {getCategoryIcon(skillGroup.category)}
                      <h3 className="font-display text-[15px] sm:text-base text-text-primary font-bold tracking-tight">
                        {skillGroup.category}
                      </h3>
                    </div>
                    <span className="font-mono text-[10px] text-accent-teal font-medium uppercase tracking-widest bg-accent-teal/10 px-2 py-0.5 rounded">
                      Checkpoint met
                    </span>
                  </div>

                  {/* Skills tags map */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {skillGroup.items.map((skill) => (
                      <span
                        key={skill}
                        className="font-sans text-[12px] px-3 py-1.5 rounded-lg bg-bg-card border border-border-dim/60 text-[#a4b5d0] hover:border-accent-amber hover:text-text-primary hover:bg-accent-amber/5 transition-all duration-200 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Level metrics visual trajectory bar */}
                <div className="border-t border-border-dim/40 pt-4 space-y-2">
                  <div className="flex justify-between items-baseline text-[10px] font-mono">
                    <span className="text-[#a4b5d0] uppercase tracking-wide">COMPREHENSION DEPTH</span>
                    <span className="text-accent-amber font-semibold">{levelPercent}% Mastery</span>
                  </div>
                  <div className="h-1 w-full bg-bg-void rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-accent-teal to-accent-amber rounded-full transition-all duration-500 group-hover:scale-x-105 origin-left"
                      style={{ width: `${levelPercent}%` }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic Leetcode Callout block */}
        <div className="bg-bg-ink border border-[#F5A623]/30 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden text-center md:text-left shadow-2xl">
          <div className="absolute top-0 right-0 w-48 h-full bg-accent-amber/[0.03] skew-x-12 transform origin-top-right pointer-events-none" />

          <div className="flex flex-col md:flex-row items-center gap-5 relative z-10">
            <div className="w-14 h-14 rounded-2xl border-2 border-accent-amber bg-accent-amber/5 flex items-center justify-center shrink-0 shadow-lg shadow-accent-amber/10 animate-pulse">
              <Award className="w-7 h-7 text-accent-amber" />
            </div>
            <div>
              <h4 className="font-display font-bold text-text-primary text-lg sm:text-xl">
                Algorithmic Integrity (LeetCode)
              </h4>
              <p className="font-sans text-xs sm:text-sm text-text-fog mt-1 max-w-xl">
                Actively improving and reinforcing computational optimization daily. Currently tracking major solutions submitted in various core categories.
              </p>
            </div>
          </div>

          <div className="relative z-10">
            <a
              href="https://leetcode.com/"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-accent-amber to-[#E09015] hover:from-accent-amber hover:to-accent-amber text-bg-void font-bold text-xs uppercase tracking-widest flex items-center gap-2.5 shadow-lg shadow-accent-amber/20 transition-transform hover:-translate-y-0.5 duration-200 cursor-pointer"
              id="skills-leetcode-cta"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Verify 200+ Solutions</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
