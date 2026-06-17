"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Award, Compass, Footprints } from 'lucide-react';

interface Discovery {
  id: number;
  discoveryId: string;
  region: string;
  coords: string;
  level: string;
  title: string;
  subtitle: string;
  badge: string;
  nodeLetter: string;
  nodeX: number; // percentage width
  nodeY: number; // percentage height
  mission: string[];
  records: string;
  tools: string[];
  reward: string;
  github: string;
  demo: string;
}

const discoveries: Discovery[] = [
  {
    id: 0,
    discoveryId: "#01",
    region: "Isle of Intelligence",
    coords: "17°24′N 78°25′E",
    level: "Lv. 21",
    title: "ContentIQ",
    subtitle: "AI Media Creation & Distribution Platform",
    badge: "AI HACKATHON WINNER",
    nodeLetter: "C",
    nodeX: 25,
    nodeY: 25,
    mission: [
      "Scene-level intelligence for media analysis",
      "Automated script generation pipeline",
      "Multilingual voice cloning & dubbing",
      "Serverless automation at production scale"
    ],
    records: "Flagship AI media platform engineered for high-concurrency processing. Built serverless workflows with AWS Bedrock and Lambda for real-time video intelligence.",
    tools: ["React", "TypeScript", "AWS Bedrock", "Lambda", "S3"],
    reward: "🏆 AI For Bharat 2026 — National Winner",
    github: "https://github.com/",
    demo: "https://github.com/",
  },
  {
    id: 1,
    discoveryId: "#02",
    region: "Valley of Healing",
    coords: "17°22′N 78°28′E",
    level: "Lv. 20",
    title: "Arogya Sarathi",
    subtitle: "Rural Healthcare Accessibility Platform",
    badge: "HEALTH INNOVATION",
    nodeLetter: "A",
    nodeX: 72,
    nodeY: 55,
    mission: [
      "Offline-first sync queue for rural clinics",
      "AI-powered medical prescription parsing",
      "Sub-50kbps low-bandwidth telemetry support",
      "Diagnostic assistance for remote doctors"
    ],
    records: "Telemedicine system designed for extreme low-signal clinics. Relies on progressive service workers that queue transactions and sync once signals reconnect.",
    tools: ["React", "Next.JS", "Flask", "Python", "MongoDB"],
    reward: "🌿 Healthcare Innovation Track — Outstanding Merit",
    github: "https://github.com/",
    demo: "",
  },
  {
    id: 2,
    discoveryId: "#03",
    region: "Explorer's Camp",
    coords: "17°19′N 78°31′E",
    level: "Lv. 19",
    title: "Dynosaur Website",
    subtitle: "Premium Ice Cream Brand Experience",
    badge: "LIVE DEPLOYMENT",
    nodeLetter: "D",
    nodeX: 35,
    nodeY: 82,
    mission: [
      "Premium ice cream web showcase & interactive menu",
      "Cinematic parallax scrolls and map integration",
      "Swiggy delivery API & store location coordinates",
      "Highly optimized page performance & SEO rankings"
    ],
    records: "Production website built for Dynosaur Ice Cream. Custom animations, real-time Swiggy integration, and SEO optimization shipped directly to customer staging.",
    tools: ["React", "TypeScript", "Vite", "Framer Motion"],
    reward: "🚀 Live Production · dynosaur.in",
    github: "https://github.com/",
    demo: "https://github.com/",
  }
];

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardRefs = [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)];
  const mapContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      let currentActive = 0;
      for (let i = 0; i < cardRefs.length; i++) {
        const ref = cardRefs[i].current;
        if (ref) {
          const top = ref.offsetTop;
          const height = ref.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            currentActive = i;
            break;
          }
        }
      }
      setActiveIndex(currentActive);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNodeClick = (index: number) => {
    const ref = cardRefs[index].current;
    if (ref) {
      ref.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section
      id="projects"
      className="relative overflow-hidden border-t py-24"
      style={{
        background: "linear-gradient(135deg, #efe6d3 0%, #e3d3b3 50%, #efe6d3 100%)",
        borderTopColor: "rgba(107, 84, 56, 0.25)",
      }}
    >
      {/* Ancient paper grains, aging, and overlay noise */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none mix-blend-multiply z-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Creases and folds of an old folded map */}
      <div className="absolute inset-0 pointer-events-none z-10 mix-blend-multiply opacity-[0.04]"
        style={{
          background: `
            linear-gradient(to right, transparent 33%, rgba(46, 31, 18, 0.4) 33.3%, transparent 33.6%, transparent 66%, rgba(46, 31, 18, 0.4) 66.3%, transparent 66.6%),
            linear-gradient(to bottom, transparent 49%, rgba(46, 31, 18, 0.4) 49.5%, transparent 50%)
          `
        }}
      />

      {/* Heavy ink wash & vignette edge darkening */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background: "radial-gradient(circle at center, transparent 30%, rgba(46, 31, 18, 0.22) 100%)"
        }}
      />

      {/* Dust and age spots simulation */}
      <div
        className="absolute inset-0 pointer-events-none z-10 opacity-[0.03] mix-blend-color-burn"
        style={{
          background: "radial-gradient(circle at 20% 30%, #6b5438 0%, transparent 20%), radial-gradient(circle at 80% 70%, #2e1f12 0%, transparent 25%)"
        }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-20">
        
        {/* Main 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT SIDE: Permanent Expedition World Map (40-45% width) */}
          <div className="lg:col-span-5 sticky top-28 lg:h-[76vh] w-full rounded-2xl border-2 border-[#6b5438]/40 bg-[#efe6d3] shadow-[inset_0_4px_12px_rgba(46,31,18,0.08),0_16px_40px_rgba(50,30,15,0.18)] overflow-hidden flex flex-col justify-between p-4 z-20">
            
            {/* Torn paper texture accent inside map frame */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.035] bg-repeat"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h20v20H0V0zm20 20h20v20H20V20z' fill='%236b5438' fill-opacity='.15' fill-rule='evenodd'/%3E%3C/svg%3E")`
              }}
            />

            {/* Map Header Detail */}
            <div className="flex justify-between items-center border-b border-[#6b5438]/30 pb-2.5 select-none z-20">
              <div>
                <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#6b5438] font-bold">Expedition Logbook</span>
                <h3 className="font-display text-lg font-black text-[#2e1f12] leading-none">Discovery World Map</h3>
              </div>
              <div className="text-right font-mono text-[8px] text-[#6b5438] font-bold leading-normal">
                <div>GRID REF: 17.22°N</div>
                <div>SCALE: 1:25,000</div>
              </div>
            </div>

            {/* Map Canvas with Handdrawn Details */}
            <div className="relative flex-grow w-full overflow-hidden select-none" ref={mapContainerRef}>
              
              {/* Faded Cartography Contour Lines & Grid System (Opacity 3-6%) */}
              <svg className="absolute inset-0 w-full h-full opacity-[0.045] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="carto-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#2e1f12" strokeWidth="0.8" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#carto-grid)" />
                {/* Simulated contour circles */}
                <circle cx="30%" cy="30%" r="90" fill="none" stroke="#2e1f12" strokeWidth="1" strokeDasharray="3,6" />
                <circle cx="30%" cy="30%" r="60" fill="none" stroke="#2e1f12" strokeWidth="1" strokeDasharray="3,6" />
                <circle cx="75%" cy="60%" r="120" fill="none" stroke="#2e1f12" strokeWidth="1" strokeDasharray="3,6" />
                <circle cx="75%" cy="60%" r="80" fill="none" stroke="#2e1f12" strokeWidth="1" strokeDasharray="3,6" />
              </svg>

              {/* Large faded Compass Rose background */}
              <Compass
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 text-[#6b5438]/[0.05] pointer-events-none spin-slow"
                style={{ transform: "rotate(12deg)" }}
              />

              {/* Environmental Sketches (Printed onto map structure) */}
              {/* Region Label 1: Isle of Intelligence */}
              <div
                className={`absolute transition-all duration-500 font-display text-[11px] font-black uppercase tracking-widest pointer-events-none z-10 ${
                  activeIndex === 0 ? "text-[#b88a2c]/85 scale-105" : "text-[#6b5438]/25"
                }`}
                style={{ left: "12%", top: "15%" }}
              >
                Isle of Intelligence
              </div>

              {/* Region Label 2: Valley of Healing */}
              <div
                className={`absolute transition-all duration-500 font-display text-[11px] font-black uppercase tracking-widest pointer-events-none z-10 ${
                  activeIndex === 1 ? "text-[#b88a2c]/85 scale-105" : "text-[#6b5438]/25"
                }`}
                style={{ right: "10%", top: "45%" }}
              >
                Valley of Healing
              </div>

              {/* Region Label 3: Explorer's Camp */}
              <div
                className={`absolute transition-all duration-500 font-display text-[11px] font-black uppercase tracking-widest pointer-events-none z-10 ${
                  activeIndex === 2 ? "text-[#b88a2c]/85 scale-105" : "text-[#6b5438]/25"
                }`}
                style={{ left: "18%", top: "75%" }}
              >
                Explorer's Camp
              </div>

              {/* Mountains Top-Left */}
              <svg className="absolute left-[8%] top-[25%] w-14 h-10 text-[#6b5438]/25 pointer-events-none" viewBox="0 0 60 30" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M10 25 L20 10 L30 25 M25 25 L35 15 L45 25" strokeLinecap="round" />
              </svg>

              {/* Forest clusters near Valley of Healing */}
              <svg className="absolute right-[8%] top-[62%] w-12 h-12 text-[#6b5438]/25 pointer-events-none" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M10 30 V24 M10 24 L13 26 M10 24 L7 26 M20 30 V22 M20 22 L23 24 M20 22 L17 24 M30 30 V25" strokeLinecap="round" />
              </svg>

              {/* Ruins / Ancient structures bottom-left */}
              <svg className="absolute left-[10%] top-[65%] w-12 h-12 text-[#6b5438]/25 pointer-events-none" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1">
                <rect x="10" y="20" width="10" height="15" strokeLinecap="round" />
                <rect x="25" y="15" width="8" height="20" strokeLinecap="round" />
                <path d="M20 35h5" />
              </svg>

              {/* SVG Handdrawn Winding Trail */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                {/* Winding path */}
                <path
                  d="M 60 110 Q 200 130 230 210 T 150 310 Q 180 370 240 350"
                  fill="none"
                  stroke="#6b5438"
                  strokeWidth="2.5"
                  strokeDasharray="6,6"
                  strokeLinecap="round"
                  className="opacity-25"
                />
                
                {/* Active Glowing Path Segment */}
                <motion.path
                  d="M 60 110 Q 200 130 230 210 T 150 310 Q 180 370 240 350"
                  fill="none"
                  stroke="#b88a2c"
                  strokeWidth="3.2"
                  strokeDasharray="6,6"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{
                    pathLength: activeIndex === 0 ? 0.35 : activeIndex === 1 ? 0.70 : 1
                  }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                />
              </svg>

              {/* Sailing Vessel following the trail */}
              <motion.div
                className="absolute w-7 h-7 text-[#6b5438]/80 pointer-events-none z-20"
                animate={{
                  left: activeIndex === 0 ? "25%" : activeIndex === 1 ? "68%" : "38%",
                  top: activeIndex === 0 ? "28%" : activeIndex === 1 ? "52%" : "86%",
                  rotate: activeIndex === 0 ? 15 : activeIndex === 1 ? -10 : 20,
                  y: [0, -3, 0]
                }}
                transition={{
                  left: { duration: 0.8, ease: "easeInOut" },
                  top: { duration: 0.8, ease: "easeInOut" },
                  rotate: { duration: 0.8, ease: "easeInOut" },
                  y: { repeat: Infinity, duration: 2.5, ease: "easeInOut" }
                }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 17h20 M12 3v14 M12 3l7 5H12 M5 17c1 0 2 1.5 3 1.5s2-1.5 3-1.5 2 1.5 3 1.5" />
                </svg>
              </motion.div>

              {/* Map Discovery Nodes */}
              {discoveries.map((disc, idx) => {
                const isActive = activeIndex === idx;
                return (
                  <button
                    key={disc.id}
                    className="absolute group z-20 flex flex-col items-center focus:outline-none"
                    style={{ left: `${disc.nodeX}%`, top: `${disc.nodeY}%`, transform: "translate(-50%, -50%)" }}
                    onClick={() => handleNodeClick(idx)}
                  >
                    {/* Level marker bubble */}
                    <span className={`font-mono text-[8px] px-1.5 py-0.5 rounded border mb-1 select-none transition-all duration-300 ${
                      isActive 
                        ? 'bg-[#2e1f12] text-[#efe6d3] border-[#2e1f12] shadow-md' 
                        : 'bg-[#efe6d3] text-[#6b5438] border-[#6b5438]/40'
                    }`}>
                      {disc.level}
                    </span>

                    {/* Circular custom node ring */}
                    <div className="relative">
                      {isActive && (
                        <span className="absolute -inset-2.5 rounded-full bg-[#b88a2c]/30 animate-ping pointer-events-none" />
                      )}
                      <div className={`w-9 h-9 rounded-full flex items-center justify-center font-display font-black text-sm border-2 shadow-[0_4px_10px_rgba(50,30,15,0.15)] transition-all duration-300 ${
                        isActive
                          ? 'bg-[#2e1f12] border-[#b88a2c] text-[#efe6d3] scale-110'
                          : 'bg-[#efe6d3] border-[#6b5438]/50 text-[#2e1f12] group-hover:border-[#6b5438] group-hover:scale-105'
                      }`}>
                        {disc.nodeLetter}
                      </div>
                    </div>

                    {/* Title label printed under node */}
                    <div className="mt-1.5 text-center">
                      <span className={`font-display font-black text-[9.5px] block leading-tight transition-colors duration-200 ${
                        isActive ? 'text-[#b88a2c]' : 'text-[#6b5438]/70 group-hover:text-[#2e1f12]'
                      }`}>
                        {disc.title}
                      </span>
                    </div>
                  </button>
                );
              })}

              {/* Coordinates around container edges */}
              <div className="absolute top-1 left-1/2 -translate-x-1/2 font-mono text-[7px] text-[#6b5438]/45">17°24′00″N</div>
              <div className="absolute bottom-1 left-1/2 -translate-x-1/2 font-mono text-[7px] text-[#6b5438]/45">17°18′00″N</div>
              <div className="absolute left-1 top-1/2 -translate-y-1/2 -rotate-90 font-mono text-[7px] text-[#6b5438]/45">78°24′00″E</div>
              <div className="absolute right-1 top-1/2 -translate-y-1/2 rotate-90 font-mono text-[7px] text-[#6b5438]/45">78°32′00″E</div>

            </div>

            {/* Map footer credits */}
            <div className="border-t border-[#6b5438]/30 pt-2 flex justify-between items-center text-[8.5px] font-mono text-[#6b5438] font-bold select-none z-20">
              <span>LEADER: G. Dhanush Kumar</span>
              <span className="flex items-center gap-1">
                <Footprints className="w-3.5 h-3.5 text-[#b88a2c]" /> 17°22′N 78°28′E
              </span>
            </div>

          </div>

          {/* RIGHT SIDE: Detailed Scrollable Project Cards (55-60% width) */}
          <div className="lg:col-span-7 space-y-12 pr-1">
            {discoveries.map((disc, idx) => {
              const isActive = activeIndex === idx;
              return (
                <div
                  key={disc.id}
                  ref={cardRefs[idx]}
                  className={`relative p-6 sm:p-8 rounded-2xl border-2 transition-all duration-300 flex flex-col justify-between overflow-hidden ${
                    isActive
                      ? 'bg-[#efe6d3] border-[#2e1f12] shadow-[0_16px_36px_rgba(50,30,15,0.16)] scale-[1.01]'
                      : 'bg-[#efe6d3]/70 border-[#6b5438]/30 shadow-sm opacity-60 hover:opacity-85'
                  }`}
                  style={{
                    backgroundImage: `radial-gradient(circle at top right, #e3d3b3 0%, transparent 70%)`
                  }}
                >
                  {/* Left accent color rule to match node active color */}
                  <div className={`absolute left-0 top-0 bottom-0 w-1.5 transition-colors duration-300 ${
                    isActive ? 'bg-[#b88a2c]' : 'bg-[#6b5438]/20'
                  }`} />

                  {/* Header / ID / badge */}
                  <div className="flex justify-between items-start gap-3 mb-5 select-none">
                    <div className="flex items-center gap-2">
                      <div className={`w-7 h-7 rounded-full flex items-center justify-center font-mono text-[10px] font-black border transition-colors duration-300 ${
                        isActive ? 'bg-[#2e1f12] text-[#efe6d3] border-[#2e1f12]' : 'bg-[#6b5438]/10 text-[#6b5438] border-[#6b5438]/20'
                      }`}>
                        {disc.discoveryId}
                      </div>
                      <span className="font-mono text-[9px] font-black tracking-widest text-[#6b5438] uppercase">{disc.coords}</span>
                    </div>
                    
                    <span className={`font-mono text-[8.5px] font-black px-2.5 py-0.5 rounded border transition-colors duration-300 ${
                      isActive ? 'bg-[#b88a2c]/15 border-[#b88a2c]/40 text-[#92703a]' : 'bg-[#6b5438]/5 border-[#6b5438]/20 text-[#6b5438]'
                    }`}>
                      {disc.badge}
                    </span>
                  </div>

                  {/* Title & record logs */}
                  <div className="mb-5">
                    <h4 className="font-display text-2xl font-black text-[#2e1f12] mb-1.5">{disc.title}</h4>
                    <p className="font-sans text-[11.5px] text-[#6b5438] font-bold leading-relaxed uppercase tracking-wider mb-3">{disc.subtitle}</p>
                    <p className="font-sans text-xs sm:text-[13px] text-[#2e1f12]/90 leading-relaxed italic border-l-2 border-[#6b5438]/40 pl-3.5 my-4">
                      "{disc.records}"
                    </p>
                  </div>

                  {/* Milestones list */}
                  <div className="mb-6 bg-[#e3d3b3]/45 p-4 rounded-xl border border-[#6b5438]/25">
                    <span className="font-mono text-[9.5px] uppercase tracking-wider text-[#2e1f12] block mb-3 font-black">✦ Field Notes & Milestones</span>
                    <ul className="space-y-2">
                      {disc.mission.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs text-[#2e1f12] leading-relaxed">
                          <span className="text-[#92703a] font-mono select-none">›</span>
                          <span className="font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack tags */}
                  <div className="mb-5 flex flex-wrap gap-2">
                    {disc.tools.map((tool) => (
                      <span
                        key={tool}
                        className="font-mono text-[9px] px-2.5 py-1 rounded bg-[#e3d3b3]/60 border border-[#6b5438]/30 text-[#2e1f12] font-black"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  {/* Footer actions & awards */}
                  <div className="flex items-center justify-between border-t border-[#6b5438]/20 pt-4 mt-2">
                    <span className="font-mono text-[10px] text-[#92703a] flex items-center gap-1.5 font-bold">
                      <Award className="w-4 h-4 text-[#b88a2c]" /> {disc.reward}
                    </span>
                    
                    <div className="flex items-center gap-1">
                      <a
                        href={disc.github}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-lg hover:bg-[#e3d3b3]/70 text-[#2e1f12] transition-colors"
                        title="Repository"
                      >
                        <Github className="w-4.5 h-4.5" />
                      </a>
                      {disc.demo && (
                        <a
                          href={disc.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2 rounded-lg hover:bg-[#e3d3b3]/70 text-[#2e1f12] transition-colors"
                          title="Explore Demo"
                        >
                          <ExternalLink className="w-4.5 h-4.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
        </div>

      </div>

    </section>
  );
}
