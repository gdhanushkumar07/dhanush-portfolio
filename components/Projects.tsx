"use client";

import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Compass } from 'lucide-react';

// Real Project Data
const projects = [
  {
    id: 1,
    title: "ContentIQ",
    treasureName: "Ancient Knowledge Vault",
    theme: "AI Media Creation & Distribution",
    nodeColor: "#D4AF37", // Gold
    level: "Lv. 01",
    tag: "C", // ContentIQ
    description: "Flagship AI media generation and distribution platform built during the AI For Bharat Hackathon, designed to automate complex scene-level analysis, script writing, and multilingual dubbing.",
    highlights: [
      "Advanced scene-level video and audio intelligence analysis.",
      "Automated script generation and engagement predictability.",
      "Multilingual dubbing with automated AI voice cloning.",
      "Smart background music recommendations.",
      "Automated multi-channel social distribution pipelines."
    ],
    tech: ["React", "TypeScript", "AWS (S3, Lambda, Bedrock, Transcribe)"],
    achievement: "AI For Bharat Hackathon Winner",
    github: "https://github.com/",
    demo: "https://contentiq.demo/",
    stamp: "VAULT SECURED"
  },
  {
    id: 2,
    title: "Arogya Sarathi",
    treasureName: "Healing Temple",
    theme: "Rural healthcare expedition",
    nodeColor: "#2E7D20", // Forest Green
    level: "Lv. 02",
    tag: "A", // Arogya Sarathi
    description: "An AI-powered rural healthcare platform designed to establish vital diagnostic support and doctor-patient routing in low-connectivity regions.",
    highlights: [
      "Offline-first triage sync for remote village clinics.",
      "Prescription image parsing and local database querying.",
      "Intelligent patient-doctor workflow synchronization.",
      "Low-bandwidth data compression pipelines."
    ],
    tech: ["React", "Node.js", "AI Processing", "Offline Storage"],
    achievement: "AI For Bharat Hackathon Winner",
    github: "https://github.com/",
    demo: "https://arogyasarathi.demo/",
    stamp: "SANCTUM FOUND"
  },
  {
    id: 3,
    title: "Dynosaur Website",
    treasureName: "Merchant Trading Port",
    theme: "Digital business craftsmanship",
    nodeColor: "#D95F1A", // Warm Orange
    level: "Lv. 03",
    tag: "D", // Dynosaur
    description: "Premium editorial marketing website built for Dynosaur French Ice Cream & Cookies, focusing on brand storytelling and fluid parallax showcases.",
    highlights: [
      "Dynamic infinite dessert product menu showcase.",
      "Custom physics-based scroll-driven animations.",
      "Integrated Swiggy delivery API and Google Maps."
    ],
    tech: ["React", "TypeScript", "Vite", "Framer Motion"],
    achievement: "Real Client Deployment",
    github: "https://github.com/",
    demo: "https://dynosaur.demo/",
    stamp: "PORT UNLOCKED"
  }
];

// Sparkle Particle Animation
const Sparkle = ({ delay, x, y }: { delay: number; x: number; y: number }) => (
  <motion.svg
    initial={{ scale: 0, opacity: 0, rotate: 0 }}
    animate={{ 
      scale: [0, 1.3, 0], 
      opacity: [0, 1, 0],
      rotate: [0, 90, 180]
    }}
    transition={{ 
      duration: 1.6, 
      repeat: Infinity, 
      delay, 
      ease: "easeInOut" 
    }}
    className="absolute w-4 h-4 text-[#C6930A] pointer-events-none z-20"
    style={{ left: x, top: y }}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9Z" />
  </motion.svg>
);

// Floating Dust Speck Spec Animation for Notebook Cards
const DustParticle = ({ delay, x, y }: { delay: number; x: number; y: number }) => (
  <motion.div
    initial={{ y: 0, opacity: 0, scale: 0.8 }}
    animate={{ 
      y: [-15, -60], 
      x: [0, (Math.random() - 0.5) * 25],
      opacity: [0, 0.45, 0], 
      scale: [0.8, 1.1, 0.6] 
    }}
    transition={{ duration: 3.5, repeat: Infinity, delay, ease: "easeOut" }}
    className="absolute w-1 h-1 rounded-full bg-[#8B6F58]/25 pointer-events-none z-0"
    style={{ left: x, top: y }}
  />
);

// Medallion Node Component
const MedallionNode = ({ proj, isActive }: { proj: any; isActive: boolean }) => {
  const renderIcon = () => {
    switch (proj.tag) {
      case 'C': // Golden Compass
        return (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="12" r="9" />
            <path d="M12 3v2M12 19v2M3 12h2M19 12h2" />
            <polygon points="12,12 14.5,7.5 12,5 9.5,7.5" fill="currentColor" stroke="none" />
            <polygon points="12,12 14.5,16.5 12,19 9.5,16.5" opacity="0.4" fill="currentColor" stroke="none" />
          </svg>
        );
      case 'A': // Forest Seal (Healing Temple)
        return (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="12" r="9" strokeDasharray="3,2" />
            <path d="M12 5 C 15 8, 17 12, 12 19 C 7 12, 9 8, 12 5 Z" fill="currentColor" fillOpacity="0.2" />
            <path d="M12 5 V 19 M12 10 Q 14 12 15 11 M12 14 Q 10 16 9 15" strokeLinecap="round" />
          </svg>
        );
      case 'D': // Anchor Compass (Trading Port)
        return (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            <circle cx="12" cy="12" r="4" />
            <path d="M 12,4 V 16 M 12,16 C 9,16 6,14 6,10 M 12,16 C 15,16 18,14 18,10 M 6,10 H 4 M 18,10 H 20" />
            <circle cx="12" cy="4" r="1.5" fill="currentColor" />
          </svg>
        );
      default:
        return <Compass className="w-6 h-6" />;
    }
  };

  return (
    <div className="relative flex items-center justify-center">
      {/* Inner medallion ring */}
      <motion.div
        animate={{
          scale: isActive ? 1.25 : 1.0,
          rotate: isActive ? 360 : 0,
          boxShadow: isActive 
            ? `0 0 25px 8px ${proj.nodeColor}35, inset 0 0 10px rgba(58,43,32,0.15)`
            : "0 4px 12px rgba(58,43,32,0.12)"
        }}
        transition={{ 
          rotate: { duration: 12, repeat: Infinity, ease: "linear" },
          scale: { type: "spring", stiffness: 200, damping: 15 }
        }}
        className="w-14 h-14 rounded-full border-4 bg-[#F9F0E4] flex items-center justify-center z-10 cursor-pointer"
        style={{
          borderColor: proj.nodeColor,
          borderStyle: "double",
        }}
      >
        {/* Ancient compass marks inside active medallion */}
        {isActive && (
          <div className="absolute inset-0 rounded-full border border-dashed border-[#8B6F58]/35 animate-spin-slow" />
        )}
        
        <span style={{ color: proj.nodeColor }}>
          {renderIcon()}
        </span>
      </motion.div>

      {/* Medallion outer compass ticks */}
      <motion.svg 
        animate={{ rotate: isActive ? 90 : 0 }}
        transition={{ duration: 0.5 }}
        className="absolute w-20 h-20 text-[#8B6F58]/35 pointer-events-none" 
        viewBox="0 0 100 100"
      >
        <line x1="50" y1="5" x2="50" y2="15" stroke="currentColor" strokeWidth="1.5" />
        <line x1="50" y1="85" x2="50" y2="95" stroke="currentColor" strokeWidth="1.5" />
        <line x1="5" y1="50" x2="15" y2="50" stroke="currentColor" strokeWidth="1.5" />
        <line x1="85" y1="50" x2="95" y2="50" stroke="currentColor" strokeWidth="1.5" />
      </motion.svg>

      {/* Sparkles around active node */}
      {isActive && (
        <>
          <Sparkle delay={0} x={-15} y={-15} />
          <Sparkle delay={0.4} x={45} y={-8} />
          <Sparkle delay={0.8} x={-8} y={45} />
          <Sparkle delay={1.2} x={40} y={40} />
        </>
      )}
    </div>
  );
};

// Discovery Card Component (Notebook / Journal Page)
const DiscoveryCard = ({ proj, isActive }: { proj: any; isActive: boolean }) => (
  <motion.div
    initial={{ opacity: 0, y: 40, scale: 0.96 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    animate={{ 
      rotateX: isActive ? 0 : -12, 
      opacity: isActive ? 1 : 0.45, 
      scale: isActive ? 1.0 : 0.95,
      y: isActive ? 0 : 20
    }}
    style={{ transformPerspective: 1000, transformOrigin: "top center" }}
    className="w-full max-w-[460px] rounded-[24px] p-6 bg-[#F9F0E4] text-[#3A2B20] border-2 border-[#CDB38D]/40 shadow-[0_15px_45px_rgba(58,43,32,0.06)] relative overflow-hidden group"
  >
    {/* Page lines background detail to feel like a notebook */}
    <div className="absolute inset-0 opacity-[0.06] pointer-events-none"
         style={{
           backgroundImage: "linear-gradient(#3A2B20 1px, transparent 1px)",
           backgroundSize: "100% 24px",
           backgroundPosition: "0 8px"
         }}
    />

    {/* Floating Dust specs */}
    {isActive && (
      <>
        <DustParticle delay={0} x={30} y={150} />
        <DustParticle delay={0.8} x={160} y={180} />
        <DustParticle delay={1.6} x={290} y={120} />
      </>
    )}

    {/* Discovery Ink Stamp Slam Down */}
    <AnimatePresence>
      {isActive && (
        <motion.div
          initial={{ scale: 3, opacity: 0, rotate: -45 }}
          animate={{ scale: 1, opacity: 0.85, rotate: -15 }}
          exit={{ scale: 1.5, opacity: 0 }}
          transition={{ type: "spring", stiffness: 140, damping: 12, delay: 0.4 }}
          className="absolute bottom-6 right-6 pointer-events-none select-none z-20 border-4 border-dashed rounded-md px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-widest"
          style={{
            borderColor: proj.nodeColor,
            color: proj.nodeColor,
          }}
        >
          {proj.stamp}
        </motion.div>
      )}
    </AnimatePresence>

    <div className="space-y-4 relative z-10">
      {/* Card Header */}
      <div className="flex items-center justify-between border-b border-[#CDB38D]/35 pb-3">
        <div className="flex items-center gap-2.5">
          <div 
            className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold font-serif shadow-sm"
            style={{ backgroundColor: proj.nodeColor }}
          >
            {proj.tag}
          </div>
          <div>
            <h3 className="font-serif text-lg font-bold tracking-tight">
              {proj.title}
            </h3>
            <span className="font-mono text-[9px] text-[#8B6F58] tracking-wider block uppercase font-medium">
              {proj.treasureName}
            </span>
          </div>
        </div>
        <span className="font-mono text-[10px] text-[#3A2B20] font-bold bg-[#E8D5B5]/40 px-2.5 py-0.5 rounded-full border border-[#CDB38D]/50 shadow-sm">
          {proj.level}
        </span>
      </div>

      {/* Description */}
      <p className="font-sans text-xs sm:text-sm leading-relaxed text-[#3A2B20]/90 font-light italic">
        "{proj.description}"
      </p>

      {/* Highlights / Mission Completed */}
      <div className="space-y-2">
        <span className="font-mono text-[9px] text-[#8B6F58] uppercase tracking-wider block font-bold">
          ✦ MISSION COMPLETED:
        </span>
        <ul className="space-y-1.5 text-xs font-sans text-[#3A2B20]/85 font-light">
          {proj.highlights.map((h: string, hIdx: number) => (
            <li key={hIdx} className="flex items-start">
              <span className="text-[#8B6F58] font-mono mr-2 shrink-0">✔</span>
              <span>{h}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Tech stack */}
      <div className="space-y-1.5">
        <span className="font-mono text-[9px] text-[#8B6F58] uppercase tracking-wider block font-bold">
          ✦ TOOLS DEPLOYED:
        </span>
        <div className="flex flex-wrap gap-1">
          {proj.tech.map((t: string) => (
            <span 
              key={t}
              className="font-mono text-[9px] text-[#3A2B20] bg-[#E8D5B5]/25 border border-[#CDB38D]/40 px-2 py-0.5 rounded"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Achievement & Theme Info */}
      <div className="grid grid-cols-2 gap-3 pt-2.5 text-[10px] font-mono border-t border-[#CDB38D]/25">
        <div>
          <span className="text-[#8B6F58] block uppercase tracking-wider">REWARD ACHIEVED:</span>
          <span className="text-[#3A2B20] font-semibold block mt-0.5">{proj.achievement}</span>
        </div>
        <div>
          <span className="text-[#8B6F58] block uppercase tracking-wider">THEME:</span>
          <span className="text-[#3A2B20] font-semibold block mt-0.5">{proj.theme}</span>
        </div>
      </div>

      {/* Links */}
      <div className="pt-2 flex gap-2">
        <a
          href={proj.github}
          target="_blank"
          rel="noreferrer"
          className="cursor-pointer border border-[#8B6F58]/50 hover:border-[#3A2B20] bg-transparent hover:bg-[#E8D5B5]/30 text-[#3A2B20] font-semibold text-[11px] py-1.5 px-3 rounded-lg flex items-center gap-1.5 transition-all duration-300"
        >
          <Github className="w-3.5 h-3.5" />
          <span>Repository</span>
        </a>
        <a
          href={proj.demo}
          target="_blank"
          rel="noreferrer"
          className="cursor-pointer bg-[#3A2B20] hover:bg-[#3A2B20]/90 text-[#F9F0E4] font-semibold text-[11px] py-1.5 px-3.5 rounded-lg flex items-center gap-1.5 transition-all duration-300 shadow-sm"
        >
          <ExternalLink className="w-3.5 h-3.5" />
          <span>Discovery Demo</span>
        </a>
      </div>
    </div>
  </motion.div>
);

// Map Sketches Background Component
const MapSketches = ({ opacity }: { opacity: any }) => (
  <motion.div style={{ opacity }} className="absolute inset-0 pointer-events-none select-none z-0">
    {/* Compass Rose top-right */}
    <div className="absolute top-[6%] right-[8%] text-[#3A2B20]/6">
      <Compass className="w-48 h-48 stroke-[0.75]" />
    </div>

    {/* Map Folds lines */}
    <svg className="absolute inset-0 w-full h-full text-[#3A2B20]/4 opacity-25" fill="none">
      <line x1="0" y1="530" x2="2000" y2="530" stroke="currentColor" strokeWidth="1" strokeDasharray="3,3" />
      <line x1="0" y1="1060" x2="2000" y2="1060" stroke="currentColor" strokeWidth="1" strokeDasharray="3,3" />
      <line x1="500" y1="0" x2="500" y2="2000" stroke="currentColor" strokeWidth="1" strokeDasharray="3,3" />
    </svg>

    {/* Map coordinates */}
    <div className="absolute top-12 left-8 font-mono text-[9px] text-[#3A2B20]/25 tracking-widest uppercase rotate-90 origin-top-left">
      SEC N 17° 26' 48\" / E 78° 23' 15\"
    </div>
    <div className="absolute bottom-12 right-12 font-mono text-[9px] text-[#3A2B20]/25 tracking-widest uppercase">
      GRID SECTOR 03 / EXPEDITION
    </div>

    {/* Island Sketch 1 (Top Left) */}
    <svg className="absolute left-[4%] top-[10%] text-[#3A2B20]/6 w-36 h-24" viewBox="0 0 150 100" fill="none">
      <path d="M 20,40 C 40,20 80,15 110,30 C 130,40 140,70 120,85 C 90,95 50,90 30,80 C 15,70 10,55 20,40 Z" stroke="currentColor" strokeWidth="1" strokeDasharray="4,4" />
      <path d="M 30,45 C 45,30 75,25 100,38 C 115,45 125,65 110,75" stroke="currentColor" strokeWidth="0.5" />
      <text x="50" y="60" className="font-serif text-[9px] fill-[#3A2B20]/35 tracking-wider">Isle of Healing</text>
    </svg>

    {/* Island Sketch 2 (Middle Right) */}
    <svg className="absolute right-[3%] top-[45%] text-[#3A2B20]/6 w-40 h-28" viewBox="0 0 150 100" fill="none">
      <path d="M 30,30 C 60,10 120,20 130,50 C 140,75 110,90 80,85 C 50,80 20,90 15,65 C 10,45 15,35 30,30 Z" stroke="currentColor" strokeWidth="1" strokeDasharray="4,4" />
      <text x="35" y="55" className="font-serif text-[9px] fill-[#3A2B20]/35 tracking-wider">Trading Lagoon</text>
    </svg>

    {/* Island Sketch 3 (Bottom Left) */}
    <svg className="absolute left-[3%] top-[72%] text-[#3A2B20]/6 w-36 h-24" viewBox="0 0 150 100" fill="none">
      <path d="M 25,25 C 55,15 95,25 105,45 C 115,65 90,85 70,80 C 50,75 25,85 20,60 C 15,40 15,30 25,25 Z" stroke="currentColor" strokeWidth="1" strokeDasharray="4,4" />
      <text x="35" y="52" className="font-serif text-[9px] fill-[#3A2B20]/35 tracking-wider">HQ Archipelago</text>
    </svg>

    {/* Mountain Ridges Left side */}
    <svg className="absolute left-[8%] top-[25%] text-[#3A2B20]/6 w-24 h-16" viewBox="0 0 100 50" fill="none">
      <path d="M 10,40 L 30,10 L 50,40 M 40,40 L 55,20 L 75,40" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
      <text x="22" y="47" className="font-mono text-[7px] fill-[#3A2B20]/25 tracking-wider">CBIT RIDGE</text>
    </svg>

    {/* Mountain Ridges Right side */}
    <svg className="absolute right-[8%] top-[20%] text-[#3A2B20]/6 w-24 h-16" viewBox="0 0 100 50" fill="none">
      <path d="M 10,40 L 30,10 L 50,40 M 40,40 L 55,20 L 75,40" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
    </svg>

    {/* Group of Pine Trees */}
    <svg className="absolute left-[12%] top-[55%] text-[#3A2B20]/6 w-20 h-24" viewBox="0 0 80 100" fill="none">
      <path d="M 20,60 V 80 M 20,40 L 10,55 H 30 Z M 20,25 L 12,38 H 28 Z" stroke="currentColor" strokeWidth="1.2" fill="none" />
      <path d="M 45,70 V 90 M 45,55 L 35,68 H 55 Z M 45,42 L 38,53 H 52 Z" stroke="currentColor" strokeWidth="1.2" fill="none" />
      <text x="12" y="93" className="font-mono text-[7px] fill-[#3A2B20]/25 tracking-wider">DEEP WOODS</text>
    </svg>
  </motion.div>
);

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Scroll tracking across the Projects section viewport entry/exit
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start start"]
  });

  // Section background color morphs from About forest brown (#26180F) to parchment sand (#E8D5B5)
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.45],
    ["#26180F", "#E8D5B5"]
  );

  // Title/Text colors morph from light wood to dark explorer brown
  const textColor = useTransform(
    scrollYProgress,
    [0, 0.45],
    ["rgba(245,241,235,0.78)", "#3A2B20"]
  );
  
  const headingColor = useTransform(
    scrollYProgress,
    [0, 0.45],
    ["#F5F1EB", "#3A2B20"]
  );

  const labelColor = useTransform(
    scrollYProgress,
    [0, 0.45],
    ["rgba(255,170,80,0.9)", "rgba(58,43,32,0.65)"]
  );

  // Fade out elements from About section (Vines, Torch Glows, Forest Fog) as we scroll down into Projects parchment
  const morphOverlayOpacity = useTransform(scrollYProgress, [0, 0.35], [1, 0]);
  const sketchesOpacity = useTransform(scrollYProgress, [0.25, 0.55], [0, 0.08]);
  const trailDrawOpacity = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);

  // Section scroll tracker for active index thresholds
  const { scrollYProgress: sectionScrollProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  useMotionValueEvent(sectionScrollProgress, "change", (latest) => {
    if (latest < 0.35) {
      setActiveIndex(0);
    } else if (latest < 0.7) {
      setActiveIndex(1);
    } else {
      setActiveIndex(2);
    }
  });

  // Dynamic path length illumination: 22% for node 1, 55% for node 2, 100% for node 3
  const activePathLength = activeIndex === 0 ? 0.22 : activeIndex === 1 ? 0.55 : 1.0;
  const activePathColor = activeIndex === 0 ? "#D4AF37" : activeIndex === 1 ? "#2E7D20" : "#D95F1A";

  return (
    <motion.section
      ref={sectionRef}
      id="projects"
      style={{ backgroundColor }}
      className="relative z-20 min-h-[200vh] flex flex-col justify-start overflow-hidden pt-24 pb-32"
    >
      
      {/* 1. MORPHING OVERLAY LAYER (Stage 1 to Stage 3 Transformation) */}
      <motion.div 
        style={{ opacity: morphOverlayOpacity }} 
        className="absolute inset-0 pointer-events-none z-10 bg-[#26180F] origin-top"
      >
        {/* Soft amber forest fog overlay */}
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            background: "radial-gradient(circle at top center, rgba(225, 138, 66, 0.12) 0%, transparent 80%)",
            filter: "blur(40px)",
          }}
        />

        {/* Softening Torch Glows */}
        <div className="absolute left-[10%] top-[10%] w-[1px] h-[1px] rounded-full hidden md:block"
             style={{ boxShadow: "0 0 100px 40px rgba(255,140,66,0.2)" }} />
        <div className="absolute right-[10%] top-[10%] w-[1px] h-[1px] rounded-full hidden md:block"
             style={{ boxShadow: "0 0 100px 40px rgba(255,140,66,0.2)" }} />

        {/* Vines that fade away naturally */}
        <svg className="absolute left-[30px] top-0 w-[120px] h-[450px] opacity-80" viewBox="0 0 120 450" fill="none">
          <path d="M 15,0 C 30,80 5,160 20,240 C 35,320 15,380 25,440" stroke="#1C5A13" strokeWidth="3.0" fill="none" strokeLinecap="round" />
          <path d="M 15,0 C 30,80 5,160 20,240 C 35,320 15,380 25,440" stroke="#2E7D20" strokeWidth="0.75" fill="none" strokeLinecap="round" />
          {/* A few quick leaves */}
          <path d="M 16,50 C 24,38 38,42 41,50 C 38,58 24,62 16,50 Z" fill="#3F8F2A" stroke="#123016" strokeWidth="0.75" />
          <path d="M 18,110 C 26,98 40,102 43,110 C 40,118 26,122 18,110 Z" fill="#2E7D20" stroke="#123016" strokeWidth="0.75" />
          <path d="M 12,170 C 20,158 34,162 37,170 C 34,178 20,182 12,170 Z" fill="#5CAF38" stroke="#123016" strokeWidth="0.75" />
        </svg>

        <svg className="absolute right-[35px] top-0 w-[120px] h-[450px] opacity-80" viewBox="0 0 120 450" fill="none">
          <path d="M 75,0 C 60,80 85,160 70,240 C 55,320 75,380 65,440" stroke="#1C5A13" strokeWidth="3.0" fill="none" strokeLinecap="round" />
          <path d="M 75,0 C 60,80 85,160 70,240 C 55,320 75,380 65,440" stroke="#2E7D20" strokeWidth="0.75" fill="none" strokeLinecap="round" />
          {/* A few quick leaves */}
          <path d="M 74,50 C 66,38 52,42 49,50 C 52,58 66,62 74,50 Z" fill="#3F8F2A" stroke="#123016" strokeWidth="0.75" />
          <path d="M 72,110 C 64,98 50,102 47,110 C 50,118 64,122 72,110 Z" fill="#2E7D20" stroke="#123016" strokeWidth="0.75" />
          <path d="M 78,170 C 70,158 56,162 53,170 C 56,178 70,182 78,170 Z" fill="#5CAF38" stroke="#123016" strokeWidth="0.75" />
        </svg>
      </motion.div>

      {/* Aged Paper Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-multiply z-0" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` 
        }} 
      />

      {/* Light vignette frame */}
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: "radial-gradient(ellipse at center, transparent 40%, rgba(58, 43, 32, 0.15) 100%)",
        }}
      />

      {/* Decorative sketches & folds */}
      <MapSketches opacity={sketchesOpacity} />

      {/* 2. MAIN CONTENT ZONE */}
      <div className="max-w-[1200px] w-full mx-auto px-6 md:px-20 z-10 relative flex-grow flex flex-col justify-start">
        
        {/* SECTION HEADER */}
        <motion.div className="mb-24 select-none max-w-[800px] mx-auto text-center space-y-4">
          <motion.span 
            style={{ color: labelColor }}
            className="font-mono text-[12px] tracking-[8px] uppercase block font-semibold"
          >
            03 / THE EXPEDITION
          </motion.span>
          <motion.h2 
            style={{ color: headingColor }}
            className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight whitespace-nowrap"
          >
            A Journey Through Things I Have Built
          </motion.h2>
          <motion.p 
            style={{ color: textColor }}
            className="font-sans text-[16px] md:text-[18px] leading-[1.6] font-light max-w-[600px] mx-auto"
          >
            Follow the winding trail map to discover hidden project milestones, platform integrations, and command centers.
          </motion.p>
        </motion.div>

        {/* Desktop Map Layout (Alternating path nodes and cards) */}
        <motion.div 
          style={{ opacity: trailDrawOpacity }}
          className="hidden lg:block relative w-full h-[1500px] z-10"
        >
          {/* Centered Winding Route Path SVG */}
          <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
            <svg className="w-full h-full" viewBox="0 0 1000 1500" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Main Winding Route Dashed Line */}
              <path
                d="M 500,0 C 500,120 380,180 380,300 C 380,420 620,450 620,600 C 620,720 620,750 620,800 C 620,950 380,1100 380,1250 C 380,1350 500,1420 500,1500"
                stroke="#8B6F58"
                strokeWidth="3.5"
                strokeDasharray="8,8"
                strokeLinecap="round"
                opacity="0.25"
              />

              {/* Active Route Highlight Track */}
              <motion.path
                d="M 500,0 C 500,120 380,180 380,300 C 380,420 620,450 620,600 C 620,720 620,750 620,800 C 620,950 380,1100 380,1250 C 380,1350 500,1420 500,1500"
                stroke={activePathColor}
                strokeWidth="4"
                strokeDasharray="8,8"
                strokeLinecap="round"
                animate={{ pathLength: activePathLength }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
              />

              {/* DETOUR / FORK 1: from Node 1 (380, 300) to a secret chest */}
              <path
                d="M 380,300 C 320,350 250,420 250,480"
                stroke="#8B6F58"
                strokeWidth="2"
                strokeDasharray="6,6"
                opacity="0.2"
              />
              <text x="240" y="495" fontSize="18" opacity="0.3">❌</text>

              {/* DETOUR / FORK 2: from Node 2 (620, 800) to a camp tent */}
              <path
                d="M 620,800 C 680,850 750,920 750,980"
                stroke="#8B6F58"
                strokeWidth="2"
                strokeDasharray="6,6"
                opacity="0.2"
              />
              <text x="740" y="995" fontSize="18" opacity="0.3">⛺</text>
            </svg>
          </div>

          {/* PROJECT DESTINATION 01 (ContentIQ - Medallion Left, Card Right) */}
          <div className="absolute top-[200px] inset-x-0 grid grid-cols-2 items-center">
            {/* Left: Node Medallion */}
            <div className="flex justify-end pr-28 relative">
              <MedallionNode proj={projects[0]} isActive={activeIndex === 0} />
            </div>
            {/* Right: Discovery Card */}
            <div className="flex justify-start pl-8">
              <DiscoveryCard proj={projects[0]} isActive={activeIndex === 0} />
            </div>
          </div>

          {/* PROJECT DESTINATION 02 (Arogya Sarathi - Card Left, Medallion Right) */}
          <div className="absolute top-[680px] inset-x-0 grid grid-cols-2 items-center">
            {/* Left: Discovery Card */}
            <div className="flex justify-end pr-8">
              <DiscoveryCard proj={projects[1]} isActive={activeIndex === 1} />
            </div>
            {/* Right: Node Medallion */}
            <div className="flex justify-start pl-28 relative">
              <MedallionNode proj={projects[1]} isActive={activeIndex === 1} />
            </div>
          </div>

          {/* PROJECT DESTINATION 03 (Dynosaur Website - Medallion Left, Card Right) */}
          <div className="absolute top-[1150px] inset-x-0 grid grid-cols-2 items-center">
            {/* Left: Node Medallion */}
            <div className="flex justify-end pr-28 relative">
              <MedallionNode proj={projects[2]} isActive={activeIndex === 2} />
            </div>
            {/* Right: Discovery Card */}
            <div className="flex justify-start pl-8">
              <DiscoveryCard proj={projects[2]} isActive={activeIndex === 2} />
            </div>
          </div>

        </motion.div>

        {/* Mobile Stack Layout */}
        <div className="lg:hidden relative w-full px-2 space-y-20 z-10 mt-6">
          {projects.map((proj, idx) => (
            <div key={proj.id} className="flex flex-col items-center">
              {/* Medallion Node above the card */}
              <div className="mb-6">
                <MedallionNode proj={proj} isActive={activeIndex === idx} />
                <div className="text-center mt-3">
                  <span className="font-mono text-[9px] uppercase tracking-wider opacity-60" style={{ color: "#3A2B20" }}>
                    {proj.level} • {proj.treasureName}
                  </span>
                </div>
              </div>
              
              {/* The Discovery Card */}
              <DiscoveryCard proj={proj} isActive={activeIndex === idx} />
            </div>
          ))}
        </div>

      </div>

      {/* 3. BOTTOM GRADIENT TRANSITION ZONE (Seamlessly blends into parchment / manual top of Skills) */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none z-10"
        style={{
          background: "linear-gradient(to top, #0A0705 0%, transparent 100%)",
        }}
      />

    </motion.section>
  );
}
