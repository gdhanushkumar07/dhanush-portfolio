"use client";

import React from 'react';
import { motion } from 'framer-motion';

// Hanging Forest Vines Leaves Definitions (Desaturated forest green colors, matching About exactly)
const leftVineLeaves = [
  { x: 16, y: 50, rotate: -35, scale: 0.8, color: "#3F8F2A" },
  { x: 18, y: 110, rotate: 145, scale: 0.85, color: "#2E7D20" },
  { x: 12, y: 170, rotate: -40, scale: 0.75, color: "#5CAF38" },
  { x: 23, y: 230, rotate: 50, scale: 0.85, color: "#3F8F2A" },
  { x: 28, y: 290, rotate: 160, scale: 0.8, color: "#2E7D20" },
  { x: 22, y: 350, rotate: -35, scale: 0.75, color: "#5CAF38" },
  { x: 19, y: 410, rotate: 130, scale: 0.85, color: "#3F8F2A" },
  
  // Leaves on sub-branches
  { x: 30, y: 145, rotate: 20, scale: 0.7, color: "#3F8F2A" },
  { x: 34, y: 180, rotate: 160, scale: 0.7, color: "#2E7D20" },
  { x: 32, y: 290, rotate: 30, scale: 0.7, color: "#5CAF38" },
  { x: 29, y: 335, rotate: 150, scale: 0.7, color: "#3F8F2A" },
];

const rightVineLeaves = [
  { x: 74, y: 50, rotate: 45, scale: 0.8, color: "#3F8F2A" },
  { x: 72, y: 110, rotate: -135, scale: 0.85, color: "#2E7D20" },
  { x: 78, y: 170, rotate: 30, scale: 0.75, color: "#5CAF38" },
  { x: 58, y: 230, rotate: 150, scale: 0.85, color: "#3F8F2A" },
  { x: 52, y: 290, rotate: -45, scale: 0.8, color: "#2E7D20" },
  { x: 68, y: 350, rotate: 120, scale: 0.75, color: "#5CAF38" },
  { x: 62, y: 410, rotate: 45, scale: 0.85, color: "#3F8F2A" },

  // Leaves on sub-branches
  { x: 60, y: 145, rotate: -20, scale: 0.7, color: "#3F8F2A" },
  { x: 56, y: 180, rotate: -160, scale: 0.7, color: "#2E7D20" },
  { x: 58, y: 290, rotate: -30, scale: 0.7, color: "#5CAF38" },
  { x: 61, y: 335, rotate: -150, scale: 0.7, color: "#3F8F2A" },
];

/* ══════════════════════════════════════════════
   TREASURES & RELICS DATA
   ══════════════════════════════════════════════ */
interface Relic {
  id: number;
  relicName: string;
  relicIcon: React.ReactNode;
  title: string;
  recoveredFrom: string;
  discoveryDate: string;
  classification: string;
  expeditionRecord: string;
  impactDetail: string;
  seal: string;
}

const relics: Relic[] = [
  {
    id: 1,
    relicName: "Champion's Medal",
    relicIcon: (
      <svg width="32" height="32" viewBox="0 0 56 56" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
        <path d="M16 48 H40 M21 44 H35" />
        <path d="M28 44 V34" />
        <path d="M14 10 H42 V26 C42 36 35 40 28 40 C21 40 14 36 14 26 Z" />
        <path d="M14 14 C6 14 6 24 14 24" />
        <path d="M42 14 C50 14 50 24 42 24" />
        <circle cx="28" cy="22" r="4" fill="currentColor" opacity="0.15" />
      </svg>
    ),
    title: "Dev Duel — Rank 36",
    recoveredFrom: "IIT Hyderabad · Elan & nVision grounds",
    discoveryDate: "Feb 2026",
    classification: "Algorithmic Speed Relic",
    expeditionRecord: "Secured All-India Rank 36 among hundreds of professional engineering teams.",
    impactDetail: "Wielded algorithmic optimization strategies and data architectures during a high-stakes competitive speed coding calculation sprint at IIT Hyderabad.",
    seal: "AIR 36 VALIDATED",
  },
  {
    id: 2,
    relicName: "Golden Compass Trophy",
    relicIcon: (
      <svg width="32" height="32" viewBox="0 0 56 56" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
        <circle cx="28" cy="28" r="22" />
        <circle cx="28" cy="28" r="12" />
        <path d="M28 6 L31 20 L28 24 L25 20 Z" fill="currentColor" opacity="0.3" />
        <path d="M28 50 L31 36 L28 32 L25 36 Z" fill="currentColor" opacity="0.1" />
        <path d="M6 28 L20 31 L24 28 L20 25 Z" fill="currentColor" opacity="0.1" />
        <path d="M50 28 L36 31 L32 28 L36 25 Z" fill="currentColor" opacity="0.3" />
      </svg>
    ),
    title: "AI For Bharat — Winner",
    recoveredFrom: "National AWS Proving Grounds",
    discoveryDate: "Mar 2026",
    classification: "Cognitive Intelligence Catalyst",
    expeditionRecord: "Awarded First Place nationally for building ContentIQ media engine.",
    impactDetail: "Engineered serverless pipelines using AWS Bedrock and Lambda triggers to automatically analyze inputs and compile them into media scripts.",
    seal: "CHAMPIONSHIP GOLD",
  },
  {
    id: 3,
    relicName: "Seal of Foundation",
    relicIcon: (
      <svg width="30" height="30" viewBox="0 0 52 52" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
        <path d="M12 46 C8 46 6 44 6 40 L6 12 C6 8 8 6 12 6 L40 6 C44 6 46 8 46 12 V40 C46 44 44 46 40 46 Z" />
        <path d="M18 18 H38 M18 24 H38 M18 30 H30" />
        <circle cx="37" cy="38" r="5" fill="currentColor" opacity="0.15" />
      </svg>
    ),
    title: "Data Science Foundation",
    recoveredFrom: "Infosys Analytical Trials",
    discoveryDate: "Feb 2026",
    classification: "Structured Wisdom Seal",
    expeditionRecord: "Certified in analytical modeling and statistical transformations.",
    impactDetail: "Decoded multi-dimensional charts, plotted arrays, and established statistical models using NumPy, Pandas, and data visualization tools.",
    seal: "RESEARCHER CERTIFIED",
  },
  {
    id: 4,
    relicName: "Synchronizer Core",
    relicIcon: (
      <svg width="30" height="30" viewBox="0 0 52 52" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
        <circle cx="26" cy="26" r="22" />
        <path d="M26 6 V12 M26 40 V46 M6 26 H12 M40 26 H46" strokeWidth="0.8" />
        <circle cx="26" cy="26" r="6" />
        <path d="M26 6 L30 22 L26 26 L22 22 Z" fill="currentColor" opacity="0.3" />
      </svg>
    ),
    title: "Adobe India Hackathon",
    recoveredFrom: "Adobe Collaborative Design Vault",
    discoveryDate: "Jan 2026",
    classification: "Real-Time Sync Engine",
    expeditionRecord: "Constructed a multi-client shared vector sync whiteboard.",
    impactDetail: "Designed dynamic synchronization protocols allowing team explorers to map ideas concurrently on a canvas with minimal data latency.",
    seal: "EXPEDITION ENTRY",
  },
];

const IronCorner = ({ position }: { position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' }) => {
  const rotation = {
    'top-left': 'rotate-0 top-2.5 left-2.5',
    'top-right': 'rotate-90 top-2.5 right-2.5',
    'bottom-left': 'rotate-270 bottom-2.5 left-2.5',
    'bottom-right': 'rotate-180 bottom-2.5 right-2.5',
  }[position];

  return (
    <div className={`absolute w-8 h-8 pointer-events-none select-none text-[#5A4232]/50 ${rotation}`}>
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M 2 2 H 30 V 8 H 8 V 30 H 2 Z" fill="currentColor" opacity="0.2" />
        <path d="M 2 2 H 30 V 8 H 8 V 30 H 2 Z" stroke="currentColor" strokeWidth="1.2" />
        <circle cx="5" cy="5" r="2.5" fill="#2E1F15" stroke="#5A4232" strokeWidth="0.75" />
        <circle cx="20" cy="5" r="2" fill="#2E1F15" stroke="#5A4232" strokeWidth="0.75" />
        <circle cx="5" cy="20" r="2" fill="#2E1F15" stroke="#5A4232" strokeWidth="0.75" />
      </svg>
    </div>
  );
};

const RelicSpotlights = () => (
  <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0">
    {/* Left Column Spotlight */}
    <div 
      className="absolute top-0 left-[18%] w-[150px] h-[550px] opacity-[0.06]"
      style={{
        background: "linear-gradient(175deg, rgba(255, 170, 80, 0.45) 0%, transparent 80%)",
        clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
        filter: "blur(25px)"
      }}
    />
    {/* Center Spotlight */}
    <div 
      className="absolute top-0 left-1/2 -translate-x-1/2 w-[280px] h-[650px] opacity-[0.08]"
      style={{
        background: "linear-gradient(180deg, rgba(255, 170, 80, 0.5) 0%, transparent 85%)",
        clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
        filter: "blur(35px)"
      }}
    />
    {/* Right Column Spotlight */}
    <div 
      className="absolute top-0 right-[18%] w-[150px] h-[550px] opacity-[0.06]"
      style={{
        background: "linear-gradient(185deg, rgba(255, 170, 80, 0.45) 0%, transparent 80%)",
        clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
        filter: "blur(25px)"
      }}
    />
  </div>
);

const dustParticles = [
  { x: 15, y: 20, size: 2, duration: 16, delay: -1 },
  { x: 30, y: 50, size: 3, duration: 22, delay: -4 },
  { x: 45, y: 15, size: 1.5, duration: 18, delay: -8 },
  { x: 55, y: 65, size: 2.5, duration: 25, delay: -2 },
  { x: 70, y: 35, size: 3.5, duration: 20, delay: -12 },
  { x: 85, y: 55, size: 2, duration: 24, delay: -6 },
  { x: 25, y: 80, size: 1.5, duration: 19, delay: -5 },
  { x: 65, y: 85, size: 2, duration: 21, delay: -9 }
];

/* Cinematic Torch & Glow - matches About section exactly */
const TorchGlow = ({ className }: { className?: string }) => (
  <div className={`absolute pointer-events-none select-none z-10 hidden md:block ${className}`}>
    <div 
      className="w-[1px] h-[1px] rounded-full"
      style={{
        boxShadow: `
          0 0 120px 55px rgba(255,140,66,0.32),
          0 0 200px 95px rgba(255,110,40,0.15)
        `
      }}
    />
  </div>
);

const Torch = ({ className }: { className?: string }) => (
  <div className={`absolute pointer-events-none select-none z-30 hidden md:block ${className}`}>
    <div className="relative w-[30px] h-[80px]">
      <svg width="30" height="80" viewBox="0 0 30 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Flame (Animated teardrop shape) */}
        <motion.g
          animate={{ 
            scaleY: [1, 1.03, 0.98, 1.02, 1], 
            scaleX: [1, 0.98, 1.02, 0.99, 1],
            opacity: [0.95, 1, 0.97, 1, 0.95],
            rotate: [0, 0.5, -0.5, 0.2, 0],
            y: [0, -0.5, 0.2, 0]
          }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          style={{ originX: "15px", originY: "30px" }}
        >
          {/* Outer Flame (#FF8C42) */}
          <path d="M 15,5 C 9,15 8,25 15,32 C 22,25 21,15 15,5 Z" fill="#FF8C42" />
          {/* Middle Flame (#FFB347) */}
          <path d="M 15,12 C 11,18 10,25 15,32 C 20,25 19,18 15,12 Z" fill="#FFB347" />
          {/* Inner Flame Core (#FFD166) */}
          <path d="M 15,18 C 12,22 12,27 15,32 C 18,27 18,22 15,18 Z" fill="#FFD166" />
        </motion.g>

        {/* Metal Cup / Torch Head */}
        <path d="M 10,32 H 20 L 18,36 H 12 Z" fill="#3D3025" stroke="#251C15" strokeWidth="0.75" />

        {/* Straight Wooden Handle */}
        <path d="M 15,36 V 70" stroke="#4A382A" strokeWidth="3.5" strokeLinecap="round" />

        {/* Wall Mount Metal Bracket Holder */}
        <path d="M 8,50 H 22 M 8,47 V 53 M 22,47 V 53" stroke="#3D3025" strokeWidth="1.5" />
        <path d="M 12,50 H 18" stroke="#251C15" strokeWidth="2.5" />
      </svg>

      {/* Floating embers rising from flame */}
      {Array.from({ length: 3 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-[#FFAA50]"
          style={{ left: "14px", bottom: "45px", opacity: 0 }}
          animate={{
            y: [-10, -50],
            x: [0, (i - 1) * 6, (i - 1) * 3],
            opacity: [0, 0.8, 0],
            scale: [0.8, 1.2, 0.4]
          }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            delay: i * 0.7,
            ease: "easeOut"
          }}
        />
      ))}
    </div>
  </div>
);

/* ══════════════════════════════════════════════
   VAULT ROOM VISUAL DECORATIONS
   ══════════════════════════════════════════════ */
const VaultDecorations = () => (
  <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0">
    {/* Large ancient circular engravings in background (Mayan/Aztec/astronomical relief rings) */}
    <svg className="absolute left-[5%] top-[10%] w-[45%] h-[50%] opacity-[0.05]" viewBox="0 0 400 400" fill="none" stroke="#FFAA50" strokeWidth="0.8">
      <circle cx="200" cy="200" r="180" />
      <circle cx="200" cy="200" r="170" strokeDasharray="3 5" />
      <circle cx="200" cy="200" r="140" />
      <circle cx="200" cy="200" r="100" />
      <circle cx="200" cy="200" r="90" strokeDasharray="10 6" />
      <circle cx="200" cy="200" r="60" />
      {[...Array(16)].map((_, i) => {
        const angle = (i * 360) / 16;
        return (
          <line key={i} x1="200" y1="20" x2="200" y2="40" transform={`rotate(${angle} 200 200)`} stroke="#FFAA50" />
        );
      })}
    </svg>

    <svg className="absolute right-[5%] bottom-[10%] w-[45%] h-[50%] opacity-[0.05]" viewBox="0 0 400 400" fill="none" stroke="#FFAA50" strokeWidth="0.8">
      <circle cx="200" cy="200" r="180" />
      <circle cx="200" cy="200" r="170" strokeDasharray="3 5" />
      <circle cx="200" cy="200" r="140" />
      <circle cx="200" cy="200" r="100" />
      <circle cx="200" cy="200" r="90" strokeDasharray="10 6" />
      <circle cx="200" cy="200" r="60" />
      {[...Array(16)].map((_, i) => {
        const angle = (i * 360) / 16;
        return (
          <line key={i} x1="200" y1="20" x2="200" y2="40" transform={`rotate(${angle} 200 200)`} stroke="#FFAA50" />
        );
      })}
    </svg>

    {/* Large Monumental Vault Chamber Archways and Brickwork (organic, deep feeling) */}
    <svg className="absolute inset-0 w-full h-full opacity-[0.07]" viewBox="0 0 1200 900" fill="none" stroke="#5A4232" strokeWidth="1">
      {/* Massive stone vault ribs/arches */}
      <path d="M 0 900 V 450 Q 0 100 600 100 Q 1200 100 1200 450 V 900" strokeWidth="3" />
      <path d="M 60 900 V 480 Q 60 160 600 160 Q 1140 160 1140 480 V 900" strokeWidth="1.5" strokeDasharray="4 6" />
      <path d="M 120 900 V 510 Q 120 220 600 220 Q 1080 220 1080 510 V 900" />

      {/* Vault ceiling lines connecting to center */}
      <line x1="600" y1="100" x2="600" y2="220" strokeWidth="2" />
      <line x1="0" y1="450" x2="120" y2="510" />
      <line x1="1200" y1="450" x2="1080" y2="510" />
      
      {/* Stone block joints */}
      <line x1="300" y1="175" x2="260" y2="230" />
      <line x1="900" y1="175" x2="940" y2="230" />
      <line x1="450" y1="125" x2="425" y2="200" />
      <line x1="750" y1="125" x2="775" y2="200" />

      {/* Pillars details */}
      <line x1="60" y1="480" x2="120" y2="510" />
      <line x1="1140" y1="480" x2="1080" y2="510" />
    </svg>

    {/* Rolling Cinematic Fog / Smoke Layers using Framer Motion */}
    <motion.div 
      className="absolute top-[15%] left-[-10%] w-[60%] h-[55%] pointer-events-none mix-blend-screen opacity-30"
      style={{
        background: "radial-gradient(circle, rgba(225,138,66,0.08) 0%, rgba(139,90,43,0.02) 50%, transparent 100%)",
        filter: "blur(60px)",
      }}
      animate={{
        x: [-20, 20, -20],
        y: [-10, 10, -10],
      }}
      transition={{
        duration: 25,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
    <motion.div 
      className="absolute bottom-[5%] right-[-10%] w-[65%] h-[60%] pointer-events-none mix-blend-screen opacity-25"
      style={{
        background: "radial-gradient(circle, rgba(225,138,66,0.07) 0%, rgba(139,90,43,0.01) 60%, transparent 100%)",
        filter: "blur(70px)",
      }}
      animate={{
        x: [20, -20, 20],
        y: [10, -10, 10],
      }}
      transition={{
        duration: 30,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />

    {/* Amber room lights glow */}
    <div className="absolute top-[20%] left-[10%] w-[450px] h-[450px] rounded-full"
      style={{ background: "radial-gradient(circle, rgba(255,140,66,0.06) 0%, transparent 70%)", filter: "blur(60px)" }} />
    <div className="absolute bottom-[20%] right-[10%] w-[450px] h-[450px] rounded-full"
      style={{ background: "radial-gradient(circle, rgba(255,140,66,0.06) 0%, transparent 70%)", filter: "blur(60px)" }} />
  </div>
);

/* ══════════════════════════════════════════════
   EXHIBIT SHOWCASE CARD
   ══════════════════════════════════════════════ */
const ExhibitCase = ({ relic, delay }: { relic: Relic; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 35 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay }}
    className="relative rounded-xl overflow-hidden group flex flex-col justify-between"
    style={{
      background: "rgba(28, 22, 20, 0.9)",
      border: "1px solid rgba(255, 170, 80, 0.12)",
      boxShadow: "0 10px 40px rgba(0,0,0,0.3), inset 0 0 12px rgba(255,170,80,0.02)",
    }}
    whileHover={{
      y: -2,
      borderColor: "rgba(255, 170, 80, 0.3)",
      boxShadow: "0 14px 48px rgba(0,0,0,0.45)",
    }}
  >
    {/* Relic Class header strip */}
    <div className="px-6 py-2.5 bg-[rgba(255,255,255,0.02)] border-b border-[rgba(255,170,80,0.08)] flex items-center justify-between">
      <span className="font-mono text-[7px] tracking-[0.2em] text-[#C9B7A4]/70 uppercase">
        {relic.classification}
      </span>
      <span className="font-mono text-[7px] text-[#FFAA50] uppercase tracking-wider">
        DISCOVERY: {relic.discoveryDate}
      </span>
    </div>

    <div className="p-6 pt-6 flex-1 flex flex-col">
      <div className="flex items-start gap-4 flex-1">
        {/* Museum display pedestal */}
        <div className="flex flex-col items-center gap-1.5 flex-shrink-0">
          <div
            className="w-[50px] h-[50px] rounded-lg flex items-center justify-center border border-[rgba(255,170,80,0.12)] bg-[rgba(255,170,80,0.02)] text-[#FFAA50] transition-all duration-300 group-hover:scale-105"
          >
            {relic.relicIcon}
          </div>
          <span className="font-serif text-[7.5px] italic text-[#C9B7A4]/70 text-center block max-w-[54px] truncate">
            {relic.relicName}
          </span>
        </div>

        {/* Labels & Notebook Entry */}
        <div className="flex-1 min-w-0">
          <h3 className="font-display text-base md:text-[17px] font-extrabold text-[#F5F1EB] tracking-tight leading-snug mb-0.5">
            {relic.title}
          </h3>
          <span className="font-mono text-[7.5px] text-[#C9B7A4]/60 uppercase tracking-widest block mb-2.5">
            RECOVERED FROM: <span className="text-[#FFAA50] font-bold">{relic.recoveredFrom}</span>
          </span>

          <div className="space-y-2.5 font-sans text-[12px] text-[#C9B7A4]">
            <div>
              <span className="font-mono text-[7px] text-[#C9B7A4]/50 uppercase tracking-wider block mb-0.5">
                Expedition Record
              </span>
              <p className="font-semibold leading-relaxed text-[#F5F1EB]">
                {relic.expeditionRecord}
              </p>
            </div>
            <div>
              <span className="font-mono text-[7px] text-[#C9B7A4]/50 uppercase tracking-wider block mb-0.5">
                Treasure Impact
              </span>
              <p className="leading-relaxed font-light">
                {relic.impactDetail}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Exhibit catalog footer */}
    <div className="px-6 py-3 bg-[rgba(255,255,255,0.02)] border-t border-[rgba(255,170,80,0.08)] flex items-center justify-between">
      <div className="flex items-center gap-1.5">
        <div className="w-1.5 h-1.5 rounded-full bg-[#FFAA50]" />
        <span className="font-mono text-[7px] text-[#C9B7A4]/50 uppercase tracking-widest">EXPEDITION SEAL SECURED</span>
      </div>
      <span className="font-mono text-[7px] px-2 py-0.5 rounded-[2px] border border-[rgba(255,170,80,0.15)] text-[#FFAA50] bg-[rgba(255,170,80,0.04)] font-bold">
        {relic.seal}
      </span>
    </div>
  </motion.div>
);

/* ══════════════════════════════════════════════
   MAIN ACHIEVEMENTS SECTION
   ══════════════════════════════════════════════ */
export default function Achievements() {
  return (
    <section
      id="achievements"
      className="relative overflow-hidden py-28"
      style={{
        background: "linear-gradient(to bottom, #1D140E 0%, #150D08 50%, #0C0704 100%)",
      }}
    >
      {/* Paper grain overlay */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none mix-blend-overlay z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      <RelicSpotlights />
      <VaultDecorations />

      {/* Left Hanging Forest Vine (matching About section exactly) */}
      <motion.svg 
        className="absolute left-[30px] top-0 w-[120px] h-[450px] pointer-events-none select-none hidden md:block z-20 opacity-85" 
        viewBox="0 0 120 450" 
        preserveAspectRatio="none"
        animate={{ rotate: [-0.6, 0.6, -0.6] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "top center", filter: "blur(0.3px)" }}
      >
        {/* Main Vine Stem */}
        <path d="M 15,0 C 30,80 5,160 20,240 C 35,320 15,380 25,440" stroke="#1C5A13" strokeWidth="3.0" fill="none" strokeLinecap="round" />
        <path d="M 15,0 C 30,80 5,160 20,240 C 35,320 15,380 25,440" stroke="#2E7D20" strokeWidth="0.75" fill="none" strokeLinecap="round" />

        {/* Sub-branch 1 */}
        <path d="M 17,120 C 35,140 40,180 23,210" stroke="#1C5A13" strokeWidth="1.8" fill="none" strokeLinecap="round" />
        <path d="M 17,120 C 35,140 40,180 23,210" stroke="#2E7D20" strokeWidth="0.5" fill="none" strokeLinecap="round" />

        {/* Sub-branch 2 */}
        <path d="M 22,260 C 38,280 36,320 20,350" stroke="#1C5A13" strokeWidth="1.8" fill="none" strokeLinecap="round" />
        <path d="M 22,260 C 38,280 36,320 20,350" stroke="#2E7D20" strokeWidth="0.5" fill="none" strokeLinecap="round" />

        {leftVineLeaves.map((leaf, idx) => (
          <g key={idx} transform={`translate(${leaf.x}, ${leaf.y}) rotate(${leaf.rotate}) scale(${leaf.scale})`}>
            <path 
              d="M0 0 C 8 -12, 22 -8, 25 0 C 22 8, 8 12, 0 0 Z" 
              fill={leaf.color} 
              stroke="#123016" 
              strokeWidth="0.75" 
              style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.4))" }}
            />
            <path d="M0 0 Q 12.5 -2 22 0" fill="none" stroke="#5CAF38" strokeWidth="0.5" />
          </g>
        ))}
      </motion.svg>

      {/* Right Hanging Forest Vine (matching About section exactly) */}
      <motion.svg 
        className="absolute right-[35px] top-0 w-[120px] h-[450px] pointer-events-none select-none hidden md:block z-20 opacity-85" 
        viewBox="0 0 120 450" 
        preserveAspectRatio="none"
        animate={{ rotate: [0.6, -0.6, 0.6] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "top center", filter: "blur(0.3px)" }}
      >
        {/* Main Vine Stem */}
        <path d="M 75,0 C 60,80 85,160 70,240 C 55,320 75,380 65,440" stroke="#1C5A13" strokeWidth="3.0" fill="none" strokeLinecap="round" />
        <path d="M 75,0 C 60,80 85,160 70,240 C 55,320 75,380 65,440" stroke="#2E7D20" strokeWidth="0.75" fill="none" strokeLinecap="round" />

        {/* Sub-branch 1 */}
        <path d="M 73,120 C 55,140 50,180 67,210" stroke="#1C5A13" strokeWidth="1.8" fill="none" strokeLinecap="round" />
        <path d="M 73,120 C 55,140 50,180 67,210" stroke="#2E7D20" strokeWidth="0.5" fill="none" strokeLinecap="round" />

        {/* Sub-branch 2 */}
        <path d="M 68,260 C 52,280 54,320 70,350" stroke="#1C5A13" strokeWidth="1.8" fill="none" strokeLinecap="round" />
        <path d="M 68,260 C 52,280 54,320 70,350" stroke="#2E7D20" strokeWidth="0.5" fill="none" strokeLinecap="round" />

        {rightVineLeaves.map((leaf, idx) => (
          <g key={idx} transform={`translate(${leaf.x}, ${leaf.y}) rotate(${leaf.rotate}) scale(${leaf.scale})`}>
            <path 
              d="M0 0 C 8 -12, 22 -8, 25 0 C 22 8, 8 12, 0 0 Z" 
              fill={leaf.color} 
              stroke="#123016" 
              strokeWidth="0.75" 
              style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.4))" }}
            />
            <path d="M0 0 Q 12.5 -2 22 0" fill="none" stroke="#5CAF38" strokeWidth="0.5" />
          </g>
        ))}
      </motion.svg>

      {/* Floating Amber/Gold Dust Particles */}
      {dustParticles.map((p, idx) => (
        <motion.div
          key={idx}
          className="absolute bg-[#FFAA50]/40 rounded-full pointer-events-none z-0"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            opacity: 0.12,
          }}
          animate={{
            y: [0, -60, 0],
            x: [0, 8, 0],
            opacity: [0.03, 0.18, 0.03],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="max-w-[1100px] mx-auto px-6 md:px-10 relative z-10">

        {/* Story Transition Entry from Skills */}
        <div className="flex flex-col items-center justify-center mb-16 select-none">
          <div className="flex items-center gap-3 mb-2">
            <div className="h-0.5 w-8 bg-gradient-to-r from-transparent to-[#C9B7A4]/30" />
            <span className="font-serif text-[10px] italic text-[#C9B7A4]/80 tracking-widest uppercase">
              The expedition reaches the treasure vault.
            </span>
            <div className="h-0.5 w-8 bg-gradient-to-l from-transparent to-[#C9B7A4]/30" />
          </div>
          <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#C9B7A4]/40">
            [ Recovered Artifacts Room ]
          </span>
        </div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 select-none"
        >
          <span className="font-mono text-[10px] tracking-[6px] uppercase block mb-3 text-[#C9B7A4]/60">
            04 / HISTORICAL ARTIFACTS
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-[2.5rem] font-extrabold text-[#FDFAF5] tracking-tight leading-tight mb-4">
            Treasures Recovered From the Route
          </h2>
          <p className="font-sans text-[15px] text-[#C9B7A4]/80 max-w-[530px] mx-auto leading-relaxed">
            A secured showcase of accolades and relics claimed across hacking sprints and data science trials.
          </p>
        </motion.div>

        {/* GRAND VAULT ALCOVE FRAME */}
        <div className="relative max-w-[1100px] mx-auto mt-6">
          <TorchGlow className="left-[-41px] top-[188px]" />
          <Torch className="left-[-56px] top-[170px]" />
          <TorchGlow className="right-[-41px] top-[188px]" />
          <Torch className="right-[-56px] top-[170px]" />

          <div className="absolute inset-0 pointer-events-none rounded-[28px]"
            style={{
              boxShadow: "inset 0 0 100px rgba(0,0,0,0.85), 0 0 80px rgba(255,140,66,0.02)"
            }}
          />

          <motion.div
            className="rounded-[28px] border overflow-hidden w-full p-8 md:p-12 relative"
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
            style={{
              background: "rgba(28, 22, 20, 0.92)",
              border: "1px solid rgba(255, 170, 80, 0.10)",
              boxShadow: "0 20px 80px rgba(0,0,0,0.4), 0 0 60px rgba(255,120,40,0.04)"
            }}
          >
            <IronCorner position="top-left" />
            <IronCorner position="top-right" />
            <IronCorner position="bottom-left" />
            <IronCorner position="bottom-right" />

            {/* Subdued chamber header detail */}
            <div className="w-full flex items-center justify-between mb-8 border-b border-[rgba(255,170,80,0.1)] pb-4 font-mono text-[9px] text-[#C9B7A4]/50 tracking-[0.2em] uppercase">
              <span>[ CHAMBER: RELICS_VAULT_04 ]</span>
              <span>[ ARCHIVE RECORDS: ALL_ACTIVE ]</span>
            </div>

            {/* Relic Exhibits Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              {relics.slice(0, 2).map((relic, i) => (
                <ExhibitCase key={relic.id} relic={relic} delay={i * 0.08} />
              ))}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {relics.slice(2).map((relic, i) => (
                <ExhibitCase key={relic.id} relic={relic} delay={(i + 2) * 0.08} />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Story Transition Exit to Contact */}
        <div className="flex flex-col items-center justify-center mt-20 select-none">
          <div className="h-px w-28 bg-gradient-to-r from-transparent via-[#C9B7A4]/15 to-transparent mb-5" />
          <p className="font-mono text-[8px] text-[#C9B7A4]/40 uppercase tracking-[0.35em] mb-2 text-center">
            Every relic a story · Every story a lesson · Every lesson a stepping stone
          </p>
          <div className="flex items-center gap-2 mt-4 opacity-40">
            <span className="font-serif text-[9.5px] italic text-[#C9B7A4]">
              Beginning final descent back to base camp...
            </span>
          </div>
        </div>

      </div>

      {/* Bottom transition → Contact Section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none z-10"
        style={{
          background: "linear-gradient(to bottom, transparent 0%, #1C140E 100%)",
        }}
      />
    </section>
  );
}
