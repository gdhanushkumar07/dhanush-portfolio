"use client";

import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { Github, ExternalLink, Compass } from 'lucide-react';

// Real Project Data (Simplified details to fit in 8-10 lines)
const projects = [
  {
    id: 1,
    title: "ContentIQ",
    subtitle: "AI Media Creation Platform",
    highlights: [
      "Scene-level intelligence",
      "Multilingual dubbing",
      "Automated distribution"
    ],
    tech: ["AWS", "React", "TypeScript"],
    nodeColor: "#D4AF37", // Gold
    tag: 'C',
    github: "https://github.com/",
    demo: "https://contentiq.demo/"
  },
  {
    id: 2,
    title: "Arogya Sarathi",
    subtitle: "Healthcare Accessibility Platform",
    highlights: [
      "Offline-first architecture",
      "Prescription analysis",
      "Rural healthcare communication"
    ],
    tech: ["React", "Node", "Express"],
    nodeColor: "#2E7D20", // Green
    tag: 'A',
    github: "https://github.com/",
    demo: "" // No demo button
  },
  {
    id: 3,
    title: "Dynosaur Website",
    subtitle: "Premium Brand Experience",
    highlights: [
      "Interactive menu showcase",
      "Swiggy integration",
      "Storytelling-focused design"
    ],
    tech: ["React", "TypeScript", "Framer Motion"],
    nodeColor: "#D95F1A", // Orange
    tag: 'D',
    github: "https://github.com/",
    demo: "https://dynosaur.demo/"
  }
];

// Medallion Node Component
const MedallionNode = ({ proj, isActive }: { proj: any; isActive: boolean }) => {
  const renderIcon = () => {
    switch (proj.tag) {
      case 'C': // Golden Compass
        return (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="12" r="9" />
            <path d="M12 3v2M12 19v2M3 12h2M19 12h2" />
            <polygon points="12,12 14.5,7.5 12,5 9.5,7.5" fill="currentColor" stroke="none" />
            <polygon points="12,12 14.5,16.5 12,19 9.5,16.5" opacity="0.4" fill="currentColor" stroke="none" />
          </svg>
        );
      case 'A': // Forest Seal
        return (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="12" r="9" strokeDasharray="3,2" />
            <path d="M12 5 C 15 8, 17 12, 12 19 C 7 12, 9 8, 12 5 Z" fill="currentColor" fillOpacity="0.2" />
            <path d="M12 5 V 19 M12 10 Q 14 12 15 11" strokeLinecap="round" />
          </svg>
        );
      case 'D': // Anchor Compass
        return (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            <circle cx="12" cy="12" r="4" />
            <path d="M 12,4 V 16 M 12,16 C 9,16 6,14 6,10 M 12,16 C 15,16 18,14 18,10 M 6,10 H 4 M 18,10 H 20" />
            <circle cx="12" cy="4" r="1.2" fill="currentColor" />
          </svg>
        );
      default:
        return <Compass className="w-5 h-5" />;
    }
  };

  return (
    <div className="relative flex items-center justify-center animate-fade-in">
      {/* Inner medallion ring */}
      <motion.div
        animate={{
          scale: isActive ? 1.05 : 1.0,
          borderColor: isActive ? proj.nodeColor : "rgba(139, 111, 88, 0.25)",
          boxShadow: isActive 
            ? `0 0 12px 2px ${proj.nodeColor}20` 
            : "0 1px 3px rgba(58,43,32,0.03)"
        }}
        transition={{ duration: 0.3 }}
        className="w-10 h-10 rounded-full border bg-[#F9F0E4] flex items-center justify-center z-10"
        style={{
          borderWidth: "1.5px",
        }}
      >
        <span style={{ color: isActive ? proj.nodeColor : "rgba(139, 111, 88, 0.5)" }}>
          {renderIcon()}
        </span>
      </motion.div>

      {/* Sparkles around active node */}
      {isActive && (
        <>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: [0, 0.8, 0], scale: [0.5, 1, 0.5] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-3.5 -right-3.5 text-[#C6930A] pointer-events-none z-20"
          >
            <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9Z" />
            </svg>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: [0, 0.8, 0], scale: [0.5, 1, 0.5] }}
            transition={{ duration: 2.2, repeat: Infinity, delay: 1.1, ease: "easeInOut" }}
            className="absolute -bottom-3 -left-3 text-[#C6930A] pointer-events-none z-20"
          >
            <svg width="8" height="8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9Z" />
            </svg>
          </motion.div>
        </>
      )}
    </div>
  );
};

// Elegant Compact Discovery Card (8-10 lines visible)
const DiscoveryCard = ({ proj, opacity, y }: { proj: any; opacity: any; y: any }) => (
  <motion.div
    style={{ opacity, y }}
    className="w-[280px] rounded-[16px] p-4.5 bg-[#F9F0E4] text-[#3A2B20] border border-[rgba(58,43,32,0.08)] shadow-[0_4px_20px_rgba(58,43,32,0.03)] relative overflow-hidden"
  >
    <div className="space-y-3">
      {/* Header */}
      <div className="border-b border-[#CDB38D]/20 pb-1.5">
        <h3 className="font-serif text-sm font-bold tracking-tight">
          {proj.title}
        </h3>
        <span className="font-sans text-[10px] text-[#8B6F58] tracking-wider block font-medium mt-0.5">
          {proj.subtitle}
        </span>
      </div>

      {/* 3 Achievements (Bulleted list) */}
      <ul className="space-y-1 text-[10.5px] font-sans text-[#3A2B20]/85 font-light leading-relaxed">
        {proj.highlights.map((h: string, hIdx: number) => (
          <li key={hIdx} className="flex items-start">
            <span className="text-[#8B6F58]/70 font-mono mr-1.5 shrink-0">•</span>
            <span>{h}</span>
          </li>
        ))}
      </ul>

      {/* Tech pills */}
      <div className="flex flex-wrap gap-1 pt-0.5">
        {proj.tech.map((t: string) => (
          <span 
            key={t}
            className="font-mono text-[8.5px] text-[#3A2B20]/80 bg-[#E8D5B5]/25 border border-[#CDB38D]/20 px-1.5 py-0.5 rounded"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Buttons */}
      <div className="pt-2.5 border-t border-[#CDB38D]/15 flex gap-1.5">
        <a
          href={proj.github}
          target="_blank"
          rel="noreferrer"
          className="cursor-pointer border border-[#8B6F58]/30 hover:border-[#3A2B20] bg-transparent hover:bg-[#E8D5B5]/15 text-[#3A2B20] font-semibold text-[9.5px] py-1 px-2.5 rounded flex items-center gap-1 transition-all duration-150"
        >
          <Github className="w-2.5 h-2.5" />
          <span>Repository</span>
        </a>
        {proj.demo && (
          <a
            href={proj.demo}
            target="_blank"
            rel="noreferrer"
            className="cursor-pointer bg-[#3A2B20] hover:bg-[#3A2B20]/90 text-[#F9F0E4] font-semibold text-[9.5px] py-1 px-3 rounded flex items-center gap-1 transition-all duration-150"
          >
            <ExternalLink className="w-2.5 h-2.5" />
            <span>{proj.title === 'Dynosaur Website' ? 'Live Site' : 'Demo'}</span>
          </a>
        )}
      </div>
    </div>
  </motion.div>
);

// Map Sketches Background Component (Minimal annotations - 50% reduction)
const MapSketches = ({ opacity }: { opacity: any }) => (
  <motion.div style={{ opacity }} className="absolute inset-0 pointer-events-none select-none z-0">
    {/* 1 Compass Rose (Top Right) */}
    <div className="absolute top-[10%] right-[12%] text-[#3A2B20]/4">
      <Compass className="w-32 h-32 stroke-[0.75]" />
    </div>

    {/* Mountain silhouettes (Few, low opacity) */}
    <svg className="absolute left-[8%] top-[25%] text-[#3A2B20]/4 w-16 h-10" viewBox="0 0 100 50" fill="none">
      <path d="M 10,40 L 30,15 L 50,40 M 40,40 L 55,25 L 75,40" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
    </svg>

    <svg className="absolute right-[8%] top-[65%] text-[#3A2B20]/4 w-16 h-10" viewBox="0 0 100 50" fill="none">
      <path d="M 15,45 L 35,20 L 55,45 M 45,45 L 60,30 L 80,45" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
    </svg>

    {/* 2 Treasure X Markers (Subtle, desaturated) */}
    <svg className="absolute left-[15%] top-[55%] text-[#E15A42]/8 w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>

    <svg className="absolute right-[18%] top-[30%] text-[#E15A42]/8 w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  </motion.div>
);

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(-1);

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

  // Fade out elements from About section (Vines, Torch Glows, Forest Fog) early in the transition
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
    // Staggered node activations matching the card visibilities
    if (latest >= 0.05 && latest <= 0.28) {
      setActiveIndex(0);
    } else if (latest >= 0.38 && latest <= 0.62) {
      setActiveIndex(1);
    } else if (latest >= 0.72 && latest <= 0.95) {
      setActiveIndex(2);
    } else {
      setActiveIndex(-1);
    }
  });

  // Card Opacities and Y-shifts (fading to 0 in between nodes to preserve whitespace)
  const card1Opacity = useTransform(sectionScrollProgress, [0.02, 0.08, 0.22, 0.28], [0, 1, 1, 0]);
  const card2Opacity = useTransform(sectionScrollProgress, [0.35, 0.42, 0.56, 0.62], [0, 1, 1, 0]);
  const card3Opacity = useTransform(sectionScrollProgress, [0.68, 0.75, 0.88, 0.95], [0, 1, 1, 0]);

  const card1Y = useTransform(sectionScrollProgress, [0.02, 0.08, 0.22, 0.28], [8, 0, 0, -8]);
  const card2Y = useTransform(sectionScrollProgress, [0.35, 0.42, 0.56, 0.62], [8, 0, 0, -8]);
  const card3Y = useTransform(sectionScrollProgress, [0.68, 0.75, 0.88, 0.95], [8, 0, 0, -8]);

  // Path draws itself smoothly as user scrolls through the section
  const trailDrawLength = useTransform(sectionScrollProgress, [0.05, 0.9], [0, 1]);

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
      <div className="max-w-[1000px] w-full mx-auto px-6 md:px-16 z-10 relative flex-grow flex flex-col justify-start">
        
        {/* SECTION HEADER */}
        <motion.div className="mb-24 select-none max-w-[800px] mx-auto text-center space-y-3">
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

        {/* Desktop Map Layout (Alternating path nodes and cards with massive whitespace) */}
        <motion.div 
          style={{ opacity: trailDrawOpacity }}
          className="hidden lg:flex relative w-full h-[1200px] z-10"
        >
          {/* Left Column: Winding Trail Map (40% width) */}
          <div className="w-[40%] h-full relative flex items-center justify-center">
            
            {/* Winding Route Path SVG */}
            <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
              <svg className="w-full h-full" viewBox="0 0 300 1200" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Main Winding Route Dashed Line */}
                <path
                  d="M 150,0 C 150,100 100,150 100,250 C 100,380 200,470 200,600 C 200,730 100,820 100,950 C 100,1050 150,1100 150,1200"
                  stroke="#8B6F58"
                  strokeWidth="1.2"
                  strokeDasharray="4,6"
                  strokeLinecap="round"
                  opacity="0.12"
                />

                {/* Active Route Highlight Track */}
                <motion.path
                  d="M 150,0 C 150,100 100,150 100,250 C 100,380 200,470 200,600 C 200,730 100,820 100,950 C 100,1050 150,1100 150,1200"
                  stroke="#5C4A3C"
                  strokeWidth="1.2"
                  strokeDasharray="4,6"
                  strokeLinecap="round"
                  style={{ pathLength: trailDrawLength }}
                  opacity="0.45"
                />
              </svg>
            </div>

            {/* Checkpoint Nodes positioned on path */}
            <div className="absolute top-[250px] left-[33.3%] -translate-x-1/2 -translate-y-1/2">
              <MedallionNode proj={projects[0]} isActive={activeIndex === 0} />
            </div>

            <div className="absolute top-[600px] left-[66.6%] -translate-x-1/2 -translate-y-1/2">
              <MedallionNode proj={projects[1]} isActive={activeIndex === 1} />
            </div>

            <div className="absolute top-[950px] left-[33.3%] -translate-x-1/2 -translate-y-1/2">
              <MedallionNode proj={projects[2]} isActive={activeIndex === 2} />
            </div>

          </div>

          {/* Right Column: Sticky Project Details Card with Massive Whitespace */}
          <div className="w-[60%] pl-24 relative">
            <div className="sticky top-[250px] h-[300px] w-full flex items-center justify-start">
              
              <div className="relative w-full">
                {/* Card 1 */}
                <div className="absolute inset-x-0 top-0">
                  <DiscoveryCard proj={projects[0]} opacity={card1Opacity} y={card1Y} />
                </div>

                {/* Card 2 */}
                <div className="absolute inset-x-0 top-0">
                  <DiscoveryCard proj={projects[1]} opacity={card2Opacity} y={card2Y} />
                </div>

                {/* Card 3 */}
                <div className="absolute inset-x-0 top-0">
                  <DiscoveryCard proj={projects[2]} opacity={card3Opacity} y={card3Y} />
                </div>
              </div>

            </div>
          </div>

        </motion.div>

        {/* Mobile Stack Layout (Clean stacked flow) */}
        <div className="lg:hidden relative w-full px-2 space-y-16 z-10 mt-6">
          {projects.map((proj) => (
            <div key={proj.id} className="flex flex-col items-center">
              {/* Medallion Node above the card */}
              <div className="mb-4">
                <MedallionNode proj={proj} isActive={true} />
              </div>
              
              {/* The Discovery Card */}
              <DiscoveryCard proj={proj} opacity={1.0} y={0} />
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
