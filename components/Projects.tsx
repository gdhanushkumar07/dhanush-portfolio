"use client";

import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Compass } from 'lucide-react';

// Simplified real project data matching the requested details exactly
const projects = [
  {
    id: 1,
    title: "ContentIQ",
    role: "AI Media Creation Platform",
    summary: [
      "Built during AI For Bharat Hackathon.",
      "Scene-level intelligence.",
      "Script generation.",
      "Multilingual dubbing.",
      "Media distribution automation."
    ],
    tech: ["React", "TypeScript", "AWS", "Bedrock", "Transcribe"],
    nodeColor: "#D4AF37", // Gold
    tag: 'C',
    github: "https://github.com/",
    demo: "https://contentiq.demo/"
  },
  {
    id: 2,
    title: "Arogya Sarathi",
    role: "Healthcare Accessibility Platform",
    summary: [
      "Offline-first rural healthcare platform.",
      "Prescription parsing.",
      "Patient routing.",
      "Medical assistance.",
      "Low-connectivity support."
    ],
    tech: ["React", "Node.js", "Express", "MongoDB"],
    nodeColor: "#2E7D20", // Forest Green
    tag: 'A',
    github: "https://github.com/",
    demo: "" // No demo button
  },
  {
    id: 3,
    title: "Dynosaur Website",
    role: "Premium Brand Experience Platform",
    summary: [
      "Interactive website for Dynosaur Ice Cream.",
      "Immersive storytelling.",
      "Motion design.",
      "Menu showcase.",
      "Ordering integration."
    ],
    tech: ["React", "TypeScript", "Framer Motion", "Vite"],
    nodeColor: "#D95F1A", // Burnt Orange
    tag: 'D',
    github: "https://github.com/",
    demo: "https://dynosaur.demo/"
  }
];

// Medallion Node Component (Increased size: 80px, glow, pulse, shine sweep)
const MedallionNode = ({ proj, isActive }: { proj: any; isActive: boolean }) => {
  const renderIcon = () => {
    switch (proj.tag) {
      case 'C': // Gold Compass
        return (
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="12" r="9" />
            <path d="M12 3v2M12 19v2M3 12h2M19 12h2" />
            <polygon points="12,12 14.5,7.5 12,5 9.5,7.5" fill="currentColor" stroke="none" />
            <polygon points="12,12 14.5,16.5 12,19 9.5,16.5" opacity="0.4" fill="currentColor" stroke="none" />
          </svg>
        );
      case 'A': // Green Seal (Healing marker)
        return (
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="12" r="9" strokeDasharray="3,2" />
            <path d="M12 5 C 15 8, 17 12, 12 19 C 7 12, 9 8, 12 5 Z" fill="currentColor" fillOpacity="0.2" />
            <path d="M12 5 V 19 M12 10 Q 14 12 15 11" strokeLinecap="round" />
          </svg>
        );
      case 'D': // Orange Anchor (Merchant marker)
        return (
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            <circle cx="12" cy="12" r="4" />
            <path d="M 12,4 V 16 M 12,16 C 9,16 6,14 6,10 M 12,16 C 15,16 18,14 18,10 M 6,10 H 4 M 18,10 H 20" />
            <circle cx="12" cy="4" r="1.2" fill="currentColor" />
          </svg>
        );
      default:
        return <Compass className="w-8 h-8" />;
    }
  };

  return (
    <div className="relative flex items-center justify-center">
      {/* Concentric Pulsing Ring for active node */}
      {isActive && (
        <motion.div
          animate={{
            scale: [1, 1.4],
            opacity: [0.6, 0]
          }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            ease: "easeOut"
          }}
          className="absolute inset-0 rounded-full border-2 pointer-events-none"
          style={{ borderColor: proj.nodeColor }}
        />
      )}

      {/* Inner Medallion */}
      <motion.div
        animate={{
          scale: isActive ? 1.06 : 1.0,
          borderColor: isActive ? proj.nodeColor : "rgba(139, 111, 88, 0.28)",
          boxShadow: isActive 
            ? `0 0 24px 6px ${proj.nodeColor}35` 
            : "0 4px 10px rgba(58,43,32,0.05)"
        }}
        transition={{ duration: 0.3 }}
        className="w-20 h-20 rounded-full border-3 bg-[#F9F0E4] flex flex-col items-center justify-center z-10 relative overflow-hidden select-none"
        style={{
          borderWidth: "3px",
        }}
      >
        {/* Shine Sweep animation on active */}
        {isActive && (
          <motion.div
            animate={{
              x: ["-100%", "200%"]
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              repeatDelay: 1.5
            }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/45 to-transparent -skew-x-12 pointer-events-none z-15"
          />
        )}

        {/* Project Initial Letter */}
        <span 
          className="font-serif text-lg font-bold select-none leading-none mb-1 opacity-90"
          style={{ color: isActive ? proj.nodeColor : "rgba(139, 111, 88, 0.6)" }}
        >
          {proj.title[0]}
        </span>

        {/* Icon */}
        <span style={{ color: isActive ? proj.nodeColor : "rgba(139, 111, 88, 0.45)" }}>
          {renderIcon()}
        </span>
      </motion.div>

      {/* Faint sparkles */}
      {isActive && (
        <>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: [0, 0.8, 0], scale: [0.5, 1, 0.5] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-4 -right-4 text-[#C6930A] pointer-events-none z-20"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9Z" />
            </svg>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: [0, 0.8, 0], scale: [0.5, 1, 0.5] }}
            transition={{ duration: 2.2, repeat: Infinity, delay: 1.1, ease: "easeInOut" }}
            className="absolute -bottom-3.5 -left-3.5 text-[#C6930A] pointer-events-none z-20"
          >
            <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9Z" />
            </svg>
          </motion.div>
        </>
      )}
    </div>
  );
};

// Map Sketches Background Component (Low-opacity sketches covering map)
const MapSketches = ({ opacity }: { opacity: any }) => (
  <motion.div style={{ opacity }} className="absolute inset-0 pointer-events-none select-none z-0">
    {/* Compass Rose (Top Right) */}
    <div className="absolute top-[6%] right-[12%] text-[#3A2B20]/4">
      <Compass className="w-40 h-40 stroke-[0.75]" />
    </div>

    {/* Mountain silhouettes (Few, low opacity) */}
    <svg className="absolute left-[6%] top-[15%] text-[#3A2B20]/5 w-24 h-16" viewBox="0 0 100 50" fill="none">
      <path d="M 10,40 L 30,15 L 50,40 M 40,40 L 55,25 L 75,40" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
    </svg>

    <svg className="absolute right-[8%] top-[72%] text-[#3A2B20]/5 w-24 h-16" viewBox="0 0 100 50" fill="none">
      <path d="M 15,45 L 35,20 L 55,45 M 45,45 L 60,30 L 80,45" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
    </svg>

    {/* Sailing Ship near the center-left bend */}
    <div className="absolute left-[8%] top-[40%] text-[#3A2B20]/6 w-16 h-16">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round">
        <path d="M2 17h20M5 17c0-3 3-5 7-5s7 2 7 5 M12 12V3 M12 6h5L12 9" />
        <path d="M3 19c2 0 3-1 5-1s3 1 5 1 3-1 5-1 3 1 5 1" strokeDasharray="2,2" />
      </svg>
    </div>

    {/* Wave Sketches */}
    <svg className="absolute left-[38%] top-[25%] text-[#3A2B20]/3 w-20 h-10" viewBox="0 0 60 20" fill="none">
      <path d="M 0,10 Q 15,5 30,10 T 60,10 M 0,15 Q 15,10 30,15 T 60,15" stroke="currentColor" strokeWidth="0.5" />
    </svg>

    {/* Waypoint symbols & Faint navigation sketches */}
    <svg className="absolute right-[15%] top-[42%] text-[#3A2B20]/4 w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.75">
      <path d="M12 2L2 22h20L12 2zm0 6l6 10H6l6-10z" />
    </svg>

    <svg className="absolute left-[18%] top-[80%] text-[#3A2B20]/4 w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.75">
      <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z M12 7v10M7 12h10" />
    </svg>

    {/* Treasure X Markers */}
    <svg className="absolute left-[10%] top-[62%] text-[#E15A42]/7 w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>

    <svg className="absolute right-[22%] top-[20%] text-[#E15A42]/7 w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M18 6L6 18M6 6l12 12" />
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

  // Section background color morphs from About forest brown (#26180F) to parchment sand (#F3ECE0)
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.45],
    ["#26180F", "#F3ECE0"]
  );

  // Text/Title colors morph from wood-white to dark explorer brown
  const textColor = useTransform(
    scrollYProgress,
    [0, 0.45],
    ["rgba(245,241,235,0.78)", "rgba(58, 43, 32, 0.8)"]
  );
  
  const headingColor = useTransform(
    scrollYProgress,
    [0, 0.45],
    ["#F5F1EB", "#3A2B20"]
  );

  const labelColor = useTransform(
    scrollYProgress,
    [0, 0.45],
    ["rgba(255,170,80,0.9)", "rgba(58, 43, 32, 0.65)"]
  );

  // Fade out elements from About section early in the transition
  const vinesOpacity = useTransform(scrollYProgress, [0, 0.22], [0.8, 0]);
  const torchGlowOpacity = useTransform(scrollYProgress, [0, 0.22], [1, 0]);
  
  // Fade in parchment assets and texture
  const sketchesOpacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 0.12]);
  const vignetteOpacity = useTransform(scrollYProgress, [0.15, 0.45], [0, 0.15]);
  const noiseOpacity = useTransform(scrollYProgress, [0.15, 0.45], [0, 0.04]);
  const trailDrawOpacity = useTransform(scrollYProgress, [0.35, 0.5], [0, 1]);

  // Section scroll tracker for main active index thresholds and trail drawing
  const { scrollYProgress: sectionScrollProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  useMotionValueEvent(sectionScrollProgress, "change", (latest) => {
    // Staggered node activations covering the entire scroll height
    if (latest < 0.35) {
      setActiveIndex(0);
    } else if (latest < 0.70) {
      setActiveIndex(1);
    } else {
      setActiveIndex(2);
    }
  });

  // Path draws itself smoothly as user scrolls through the section (1800 height)
  const trailDrawLength = useTransform(sectionScrollProgress, [0.05, 0.85], [0, 1]);

  // Get current active project content
  const activeProj = projects[activeIndex];

  return (
    <motion.section
      ref={sectionRef}
      id="projects"
      style={{ backgroundColor }}
      className="relative z-20 min-h-[300vh] flex flex-col justify-start overflow-hidden pt-24 pb-32"
    >
      
      {/* 1. MORPHING OVERLAY LAYER (Stage 1 to Stage 3 Transition) */}
      <motion.div 
        style={{ opacity: vinesOpacity }} 
        className="absolute inset-0 pointer-events-none z-10 origin-top"
      >
        {/* Softening Torch Glows */}
        <motion.div 
          style={{ 
            opacity: torchGlowOpacity,
            boxShadow: "0 0 100px 40px rgba(255,140,66,0.18)"
          }} 
          className="absolute left-[10%] top-[10%] w-[1px] h-[1px] rounded-full hidden md:block"
        />
        <motion.div 
          style={{ 
            opacity: torchGlowOpacity,
            boxShadow: "0 0 100px 40px rgba(255,140,66,0.18)"
          }} 
          className="absolute right-[10%] top-[10%] w-[1px] h-[1px] rounded-full hidden md:block"
        />

        {/* About vines fading out smoothly */}
        <svg className="absolute left-[30px] top-0 w-[120px] h-[450px]" viewBox="0 0 120 450" fill="none">
          <path d="M 15,0 C 30,80 5,160 20,240 C 35,320 15,380 25,440" stroke="#1C5A13" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <path d="M 15,0 C 30,80 5,160 20,240 C 35,320 15,380 25,440" stroke="#2E7D20" strokeWidth="0.5" fill="none" strokeLinecap="round" />
        </svg>

        <svg className="absolute right-[35px] top-0 w-[120px] h-[450px]" viewBox="0 0 120 450" fill="none">
          <path d="M 75,0 C 60,80 85,160 70,240 C 55,320 75,380 65,440" stroke="#1C5A13" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <path d="M 75,0 C 60,80 85,160 70,240 C 55,320 75,380 65,440" stroke="#2E7D20" strokeWidth="0.5" fill="none" strokeLinecap="round" />
        </svg>
      </motion.div>

      {/* Aged Paper Texture Overlay */}
      <motion.div 
        style={{ 
          opacity: noiseOpacity,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` 
        }}
        className="absolute inset-0 pointer-events-none mix-blend-multiply z-0" 
      />

      {/* Paper Fold Creases (Light & Shadow creases for a folded map look) */}
      <div className="absolute inset-0 pointer-events-none z-10 mix-blend-multiply opacity-[0.04] bg-[linear-gradient(to_right,transparent_49%,rgba(0,0,0,0.5)_50%,transparent_51%),linear-gradient(to_bottom,transparent_49%,rgba(0,0,0,0.5)_50%,transparent_51%)]" />
      <div className="absolute inset-0 pointer-events-none z-10 mix-blend-screen opacity-[0.02] bg-[linear-gradient(to_right,transparent_48%,rgba(255,255,255,0.7)_49.5%,transparent_51%),linear-gradient(to_bottom,transparent_48%,rgba(255,255,255,0.7)_49.5%,transparent_51%)]" />

      {/* Light vignette frame */}
      <motion.div 
        style={{ 
          opacity: vignetteOpacity,
          background: "radial-gradient(ellipse at center, transparent 40%, rgba(58, 43, 32, 0.12) 100%)",
        }}
        className="absolute inset-0 pointer-events-none z-0"
      />

      {/* Decorative sketches & folds */}
      <MapSketches opacity={sketchesOpacity} />

      {/* 2. MAIN CONTENT ZONE */}
      <div className="max-w-[1150px] w-full mx-auto px-6 md:px-8 z-10 relative flex-grow flex flex-col justify-start">
        
        {/* SECTION HEADER */}
        <motion.div className="mb-20 select-none max-w-[800px] mx-auto text-center space-y-3">
          <motion.span 
            style={{ color: labelColor }}
            className="font-mono text-[12px] tracking-[8px] uppercase block font-semibold"
          >
            02 / THE EXPEDITION
          </motion.span>
          <motion.h2 
            style={{ color: headingColor }}
            className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight whitespace-nowrap"
          >
            A Journey Through Things I Have Built
          </motion.h2>
          <motion.p 
            style={{ color: textColor }}
            className="font-sans text-[15px] md:text-[17px] leading-[1.6] font-light max-w-[550px] mx-auto"
          >
            Follow the winding trail map to discover hidden project milestones, platform integrations, and command centers.
          </motion.p>
        </motion.div>

        {/* Desktop Interactive Layout (65% Map, 35% Card) */}
        <motion.div 
          style={{ opacity: trailDrawOpacity }}
          className="hidden lg:grid grid-cols-[65%_35%] relative w-full h-[1800px] z-10 gap-10"
        >
          {/* Left Side (65%): Explorer Map with Centered Expedition Route */}
          <div className="w-full h-full relative flex items-center justify-center border border-[rgba(139,111,88,0.08)] bg-[#FDFBF7]/10 rounded-2xl overflow-hidden backdrop-blur-[0.5px]">
            
            {/* Winding Route Path SVG (Thick visual centerpiece) */}
            <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
              <svg className="w-full h-full" viewBox="0 0 500 1800" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Secondary offset sketched route (For hand-sketched aesthetic) */}
                <path
                  d="M 250,0 C 250,150 150,250 150,400 C 150,600 350,750 350,950 C 350,1150 150,1300 150,1500 C 150,1650 250,1720 250,1800"
                  stroke="#8B6F58"
                  strokeWidth="1.5"
                  strokeDasharray="6,8"
                  strokeLinecap="round"
                  opacity="0.1"
                  transform="translate(2.5, -1)"
                />

                {/* Main route base line */}
                <path
                  d="M 250,0 C 250,150 150,250 150,400 C 150,600 350,750 350,950 C 350,1150 150,1300 150,1500 C 150,1650 250,1720 250,1800"
                  stroke="#8B6F58"
                  strokeWidth="5"
                  strokeDasharray="8,10"
                  strokeLinecap="round"
                  opacity="0.25"
                />

                {/* Traversed route highlight segment */}
                <motion.path
                  d="M 250,0 C 250,150 150,250 150,400 C 150,600 350,750 350,950 C 350,1150 150,1300 150,1500 C 150,1650 250,1720 250,1800"
                  stroke="#5C4A3C"
                  strokeWidth="5"
                  strokeDasharray="8,10"
                  strokeLinecap="round"
                  style={{ pathLength: trailDrawLength }}
                  opacity="0.75"
                />
              </svg>
            </div>

            {/* Checkpoint Nodes positioned precisely on path */}
            <div className="absolute top-[400px] left-[30%] -translate-x-1/2 -translate-y-1/2">
              <MedallionNode proj={projects[0]} isActive={activeIndex === 0} />
            </div>
            {/* Cursive italic waypoints next to nodes */}
            <div className="absolute top-[365px] left-[38%] pointer-events-none select-none hidden xl:block">
              <span className="font-serif text-[13px] italic font-semibold text-[#8B6F58]/75 tracking-wider block">
                Isle of Intelligence
              </span>
            </div>

            <div className="absolute top-[950px] left-[70%] -translate-x-1/2 -translate-y-1/2">
              <MedallionNode proj={projects[1]} isActive={activeIndex === 1} />
            </div>
            <div className="absolute top-[915px] left-[48%] pointer-events-none select-none text-right hidden xl:block">
              <span className="font-serif text-[13px] italic font-semibold text-[#8B6F58]/75 tracking-wider block">
                Valley of Healing
              </span>
            </div>

            <div className="absolute top-[1500px] left-[30%] -translate-x-1/2 -translate-y-1/2">
              <MedallionNode proj={projects[2]} isActive={activeIndex === 2} />
            </div>
            <div className="absolute top-[1465px] left-[38%] pointer-events-none select-none hidden xl:block">
              <span className="font-serif text-[13px] italic font-semibold text-[#8B6F58]/75 tracking-wider block">
                Merchant Reef
              </span>
            </div>

          </div>

          {/* Right Side (35%): Fixed Sticky Explorer Journal Card */}
          <div className="w-full pl-2 relative">
            <div className="sticky top-[220px] w-full flex items-start justify-start">
              
              {/* 3D Perspective Wrapper for paper flip transitions */}
              <div style={{ perspective: 1200 }} className="w-full max-w-[390px] min-h-[460px] relative">
                
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ rotateY: 90, opacity: 0, scale: 0.98 }}
                    animate={{ rotateY: 0, opacity: 1, scale: 1 }}
                    exit={{ rotateY: -90, opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.75, ease: [0.25, 1, 0.5, 1] }}
                    style={{ transformOrigin: "left center", backfaceVisibility: "hidden" }}
                    className="w-full rounded-[16px] p-8 bg-[#F9F0E4] text-[#3A2B20] border border-[rgba(58,43,32,0.12)] shadow-[0_12px_40px_rgba(58,43,32,0.06)] relative overflow-hidden"
                  >
                    {/* Bound ledger journal margin stitch line */}
                    <div className="absolute left-6 top-0 bottom-0 w-[1px] bg-red-400/20 pointer-events-none" />
                    
                    {/* Subtle notebook lines detail */}
                    <div 
                      className="absolute inset-0 pointer-events-none opacity-[0.04]"
                      style={{
                        backgroundImage: "linear-gradient(rgba(58,43,32,0.2) 1px, transparent 1px)",
                        backgroundSize: "100% 28px",
                        backgroundPosition: "0 10px"
                      }}
                    />

                    <div className="pl-3 space-y-5 relative z-10">
                      {/* Plaque Header */}
                      <div className="border-b border-[#CDB38D]/35 pb-2.5">
                        <div className="flex items-center justify-between">
                          <h3 className="font-serif text-lg font-bold tracking-tight">
                            {activeProj.title}
                          </h3>
                          <span className="font-mono text-[10px] uppercase tracking-wider bg-[#E8D5B5]/60 px-2.5 py-0.5 rounded border border-[#CDB38D]/30">
                            LOG 0{activeProj.id}
                          </span>
                        </div>
                        <span className="font-sans text-[11px] text-[#8B6F58] tracking-wider block font-semibold mt-1 uppercase">
                          {activeProj.role}
                        </span>
                      </div>

                      {/* Summary Bullet Points */}
                      <div className="space-y-2.5">
                        <span className="font-mono text-[9px] uppercase tracking-wider text-[#8B6F58] block">MISSION BRIEF</span>
                        <ul className="space-y-2 text-[12px] font-sans text-[#3A2B20]/90 font-light leading-relaxed">
                          {activeProj.summary.map((h: string, hIdx: number) => (
                            <li key={hIdx} className="flex items-start">
                              <span className="text-[#8B6F58] font-mono mr-2.5 shrink-0">•</span>
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tech Pills */}
                      <div className="space-y-2.5 pt-1.5">
                        <span className="font-mono text-[9px] uppercase tracking-wider text-[#8B6F58] block">TOOLKIT</span>
                        <div className="flex flex-wrap gap-1.5">
                          {activeProj.tech.map((t: string) => (
                            <span 
                              key={t}
                              className="font-mono text-[9.5px] text-[#3A2B20]/80 bg-[#E8D5B5]/35 border border-[#CDB38D]/30 px-2 py-0.5 rounded"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action buttons */}
                      <div className="pt-4 border-t border-[#CDB38D]/20 flex gap-2">
                        <a
                          href={activeProj.github}
                          target="_blank"
                          rel="noreferrer"
                          className="cursor-pointer border border-[#8B6F58]/45 hover:border-[#3A2B20] bg-transparent hover:bg-[#E8D5B5]/20 text-[#3A2B20] font-semibold text-[11px] py-1.5 px-3 rounded-lg flex items-center gap-1.5 transition-all duration-200"
                        >
                          <Github className="w-3.5 h-3.5" />
                          <span>Repository</span>
                        </a>
                        {activeProj.demo && (
                          <a
                            href={activeProj.demo}
                            target="_blank"
                            rel="noreferrer"
                            className="cursor-pointer bg-[#3A2B20] hover:bg-[#3A2B20]/90 text-[#F9F0E4] font-semibold text-[11px] py-1.5 px-3.5 rounded-lg flex items-center gap-1.5 transition-all duration-200"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                            <span>{activeProj.title === 'Dynosaur Website' ? 'Live Site' : 'Demo'}</span>
                          </a>
                        )}
                      </div>
                    </div>

                  </motion.div>
                </AnimatePresence>

              </div>

            </div>
          </div>

        </motion.div>

        {/* Mobile Layout (Sequential stacked waypoints) */}
        <div className="lg:hidden relative w-full px-2 space-y-16 z-10 mt-6">
          {projects.map((proj) => (
            <div key={proj.id} className="flex flex-col items-center">
              {/* Medallion Node */}
              <div className="mb-4">
                <MedallionNode proj={proj} isActive={true} />
              </div>
              
              {/* Card */}
              <div className="w-full max-w-[340px] rounded-[16px] p-6.5 bg-[#F9F0E4] text-[#3A2B20] border border-[rgba(58,43,32,0.12)] shadow-[0_12px_40px_rgba(58,43,32,0.06)] relative overflow-hidden">
                <div className="absolute left-6 top-0 bottom-0 w-[1px] bg-red-400/20 pointer-events-none" />
                <div className="pl-3 space-y-4">
                  <div className="border-b border-[#CDB38D]/35 pb-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-serif text-base font-bold tracking-tight">
                        {proj.title}
                      </h3>
                      <span className="font-mono text-[9px] uppercase tracking-wider bg-[#E8D5B5]/50 px-2 py-0.5 rounded border border-[#CDB38D]/30">
                        0{proj.id}
                      </span>
                    </div>
                    <span className="font-sans text-[10.5px] text-[#8B6F58] tracking-wider block font-semibold mt-0.5 uppercase">
                      {proj.role}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <span className="font-mono text-[9px] uppercase tracking-wider text-[#8B6F58] block">MISSION BRIEF</span>
                    <ul className="space-y-1.5 text-[11.5px] font-sans text-[#3A2B20]/90 font-light leading-relaxed">
                      {proj.summary.map((h: string, hIdx: number) => (
                        <li key={hIdx} className="flex items-start">
                          <span className="text-[#8B6F58] font-mono mr-2.5 shrink-0">•</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-2 pt-1">
                    <span className="font-mono text-[9px] uppercase tracking-wider text-[#8B6F58] block">TOOLKIT</span>
                    <div className="flex flex-wrap gap-1">
                      {proj.tech.map((t: string) => (
                        <span 
                          key={t}
                          className="font-mono text-[9px] text-[#3A2B20]/80 bg-[#E8D5B5]/30 border border-[#CDB38D]/25 px-2 py-0.5 rounded"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-[#CDB38D]/20 flex gap-2">
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noreferrer"
                      className="cursor-pointer border border-[#8B6F58]/40 hover:border-[#3A2B20] bg-transparent hover:bg-[#E8D5B5]/20 text-[#3A2B20] font-semibold text-[10px] py-1.5 px-3 rounded-lg flex items-center gap-1.5 transition-all duration-200"
                    >
                      <Github className="w-3 h-3" />
                      <span>Repository</span>
                    </a>
                    {proj.demo && (
                      <a
                        href={proj.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="cursor-pointer bg-[#3A2B20] hover:bg-[#3A2B20]/90 text-[#F9F0E4] font-semibold text-[10px] py-1.5 px-3.5 rounded-lg flex items-center gap-1.5 transition-all duration-200"
                      >
                        <ExternalLink className="w-3 h-3" />
                        <span>{proj.title === 'Dynosaur Website' ? 'Live Site' : 'Demo'}</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* 3. BOTTOM GRADIENT TRANSITION ZONE (Blends into Skills dark void cover) */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none z-10"
        style={{
          background: "linear-gradient(to top, #0A0705 0%, transparent 100%)",
        }}
      />

    </motion.section>
  );
}
