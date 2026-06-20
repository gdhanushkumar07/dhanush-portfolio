"use client";

import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

const BrassCorner = ({ position }: { position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' }) => {
  const rotation = {
    'top-left': 'rotate-0 top-2.5 left-2.5',
    'top-right': 'rotate-90 top-2.5 right-2.5',
    'bottom-left': 'rotate-270 bottom-2.5 left-2.5',
    'bottom-right': 'rotate-180 bottom-2.5 right-2.5',
  }[position];

  return (
    <div className={`absolute w-8 h-8 pointer-events-none select-none text-[#8B6914]/40 ${rotation}`}>
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M 2 2 H 30 V 8 H 8 V 30 H 2 Z" fill="currentColor" opacity="0.25" />
        <path d="M 2 2 H 30 V 8 H 8 V 30 H 2 Z" stroke="currentColor" strokeWidth="1.2" />
        <circle cx="5" cy="5" r="2.2" fill="#A88120" stroke="#4A3B1F" strokeWidth="0.5" />
        <circle cx="20" cy="5" r="1.8" fill="#8B6914" stroke="#4A3B1F" strokeWidth="0.5" />
        <circle cx="5" cy="20" r="1.8" fill="#8B6914" stroke="#4A3B1F" strokeWidth="0.5" />
      </svg>
    </div>
  );
};

/* ══════════════════════════════════════════════
   TYPES & INTERFACES
   ══════════════════════════════════════════════ */
interface SkillCardData {
  chapter: string;
  title: string;
  description: string;
  narrative: string;
  skills: string[];
  color: string;
  visual: React.ReactNode;
}

interface CardProps {
  i: number;
  card: SkillCardData;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

/* ══════════════════════════════════════════════
   DECORATIVE CONSTANTS (Hanging Vines & Embers)
   ══════════════════════════════════════════════ */
const leftVineLeaves = [
  { x: 16, y: 50, rotate: -35, scale: 0.8, color: "#3F8F2A" },
  { x: 18, y: 110, rotate: 145, scale: 0.85, color: "#2E7D20" },
  { x: 12, y: 170, rotate: -40, scale: 0.75, color: "#5CAF38" },
  { x: 23, y: 230, rotate: 50, scale: 0.85, color: "#3F8F2A" },
  { x: 28, y: 290, rotate: 160, scale: 0.8, color: "#2E7D20" },
  { x: 22, y: 350, rotate: -35, scale: 0.75, color: "#5CAF38" },
  { x: 19, y: 410, rotate: 130, scale: 0.85, color: "#3F8F2A" },
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
  { x: 60, y: 145, rotate: -20, scale: 0.7, color: "#3F8F2A" },
  { x: 56, y: 180, rotate: -160, scale: 0.7, color: "#2E7D20" },
  { x: 58, y: 290, rotate: -30, scale: 0.7, color: "#5CAF38" },
  { x: 61, y: 335, rotate: -150, scale: 0.7, color: "#3F8F2A" },
];

/* Cinematic Torch & Glow - matches About section exactly */
const TorchStyles = () => (
  <style dangerouslySetInnerHTML={{ __html: `
    @keyframes torchEmber0 {
      0% { transform: translate(0px, -5px) scale(1); opacity: 0; }
      15% { opacity: 0.9; }
      85% { opacity: 0.9; }
      100% { transform: translate(-8px, -70px) scale(0.3); opacity: 0; }
    }
    @keyframes torchEmber1 {
      0% { transform: translate(0px, -5px) scale(1); opacity: 0; }
      15% { opacity: 0.9; }
      85% { opacity: 0.9; }
      100% { transform: translate(6px, -85px) scale(0.3); opacity: 0; }
    }
    @keyframes torchEmber2 {
      0% { transform: translate(0px, -5px) scale(1); opacity: 0; }
      15% { opacity: 0.9; }
      85% { opacity: 0.9; }
      100% { transform: translate(-4px, -60px) scale(0.3); opacity: 0; }
    }
    @keyframes torchEmber3 {
      0% { transform: translate(0px, -5px) scale(1); opacity: 0; }
      15% { opacity: 0.9; }
      85% { opacity: 0.9; }
      100% { transform: translate(8px, -75px) scale(0.3); opacity: 0; }
    }
    .animate-torch-ember-0 {
      animation: torchEmber0 2.2s infinite ease-out;
      will-change: transform, opacity;
    }
    .animate-torch-ember-1 {
      animation: torchEmber1 2.2s infinite ease-out;
      animation-delay: 0.6s;
      will-change: transform, opacity;
    }
    .animate-torch-ember-2 {
      animation: torchEmber2 2.2s infinite ease-out;
      animation-delay: 1.2s;
      will-change: transform, opacity;
    }
    .animate-torch-ember-3 {
      animation: torchEmber3 2.2s infinite ease-out;
      animation-delay: 1.8s;
      will-change: transform, opacity;
    }
  ` }} />
);

const TorchGlow = ({ className }: { className?: string }) => (
  <div className={`absolute pointer-events-none select-none z-10 hidden xl:block ${className}`} style={{ willChange: "transform" }}>
    <div 
      className="w-[1px] h-[1px] rounded-full"
      style={{
        boxShadow: `
          0 0 140px 65px rgba(255,140,66,0.35),
          0 0 240px 115px rgba(255,110,40,0.18),
          0 0 40px 15px rgba(255,200,100,0.2)
        `
      }}
    />
  </div>
);

const Torch = ({ className }: { className?: string }) => (
  <div className={`absolute pointer-events-none select-none z-30 hidden xl:block ${className}`}>
    <div className="relative w-[30px] h-[80px]">
      <svg width="30" height="80" viewBox="0 0 30 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          d="M 15,32 C 7,27 4,18 9,10 C 11,8 13,11 15,7 C 17,4 16,1 17,0 C 21,7 23,13 21,18 C 24,14 26,9 24,5 C 28,11 28,18 25,24 C 27,20 29,15 27,10 C 31,17 29,24 23,29 Z"
          fill="#D85808"
          animate={{
            scaleX: [1, 1.15, 0.9, 1.1, 1],
            scaleY: [1, 1.12, 0.88, 1.08, 1],
            opacity: [0.9, 1, 0.85, 0.98, 0.9],
          }}
          style={{ transformOrigin: "15px 32px" }}
          transition={{ duration: 0.78, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.path
          d="M 15,32 C 10,28 8,21 11,15 C 12,13 13,15 15,12 C 16,9 15,7 16,5 C 19,10 20,15 19,19 C 21,16 22,12 20,9 C 23,14 23,19 21,24 C 22,21 23,17 22,14 C 25,19 23,24 19,28 Z"
          fill="#F58F18"
          animate={{
            scaleY: [1, 1.18, 0.88, 1.12, 1],
            opacity: [0.85, 1, 0.8, 0.95, 0.85],
          }}
          style={{ transformOrigin: "15px 32px" }}
          transition={{ duration: 0.62, repeat: Infinity, ease: "easeInOut", delay: 0.08 }}
        />
        <motion.path
          d="M 15,32 C 12,29 11,24 13,20 C 13,18 14,19 15,17 C 16,15 15,13 16,11 C 18,15 18,19 17,22 C 18,19 19,16 18,14 C 20,18 20,22 18,25 Z"
          fill="#FFC038"
          animate={{
            scaleY: [1, 1.2, 0.85, 1.14, 1],
            opacity: [0.8, 1, 0.76, 0.93, 0.8],
          }}
          style={{ transformOrigin: "15px 32px" }}
          transition={{ duration: 0.5, repeat: Infinity, ease: "easeInOut", delay: 0.18 }}
        />
        <motion.ellipse
          cx="15" cy="26" rx="2.2" ry="4.2"
          fill="#FFF3C0"
          animate={{ scaleY: [1, 1.25, 0.82, 1.15, 1], opacity: [0.78, 1, 0.72, 0.92, 0.78] }}
          style={{ transformOrigin: "15px 26px" }}
          transition={{ duration: 0.44, repeat: Infinity, ease: "easeInOut", delay: 0.12 }}
        />
        <path d="M 10,32 H 20 L 18,36 H 12 Z" fill="#3D3025" stroke="#251C15" strokeWidth="0.75" />
        <path d="M 15,36 V 70" stroke="#4A382A" strokeWidth="3.5" strokeLinecap="round" />
        <path d="M 8,50 H 22 M 8,47 V 53 M 22,47 V 53" stroke="#3D3025" strokeWidth="1.5" />
        <path d="M 12,50 H 18" stroke="#251C15" strokeWidth="2.5" />
      </svg>
      <div className="absolute w-1 h-1 rounded-full bg-[#FFAA50] animate-torch-ember-0" style={{ left: "14px", bottom: "45px" }} />
      <div className="absolute w-1 h-1 rounded-full bg-[#FFAA50] animate-torch-ember-1" style={{ left: "14px", bottom: "45px" }} />
      <div className="absolute w-1 h-1 rounded-full bg-[#FFAA50] animate-torch-ember-2" style={{ left: "14px", bottom: "45px" }} />
      <div className="absolute w-1 h-1 rounded-full bg-[#FFAA50] animate-torch-ember-3" style={{ left: "14px", bottom: "45px" }} />
    </div>
  </div>
);

/* ══════════════════════════════════════════════
   STICKY CARD COMPONENT (Matching Reference Interaction)
   ══════════════════════════════════════════════ */
const Card = ({ i, card, progress, range, targetScale }: CardProps) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start'],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-[85vh] sm:h-screen flex items-center justify-center sticky top-0 z-20"
    >
      <motion.div
        style={{
          scale,
          top: `calc(10vh + ${i * 25}px)`,
          background: "rgba(12, 8, 6, 0.92)",
          backdropFilter: "blur(24px)",
          border: "1px solid rgba(255, 180, 80, 0.14)",
          boxShadow: "0 30px 70px rgba(0,0,0,0.9), inset 0 0 30px rgba(255,140,66,0.03)",
        }}
        className="flex flex-col h-[520px] sm:h-[480px] w-[90%] max-w-[960px] rounded-[28px] p-6 sm:p-10 origin-top relative overflow-hidden group hover:border-amber-500/40 transition-colors duration-500"
      >
        {/* Top gold highlight line */}
        <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-amber-500/45 to-transparent" />
        
        {/* Corner Brass Brackets */}
        <BrassCorner position="top-left" />
        <BrassCorner position="top-right" />
        <BrassCorner position="bottom-left" />
        <BrassCorner position="bottom-right" />

        {/* Ambient card edge light */}
        <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-amber-500/[0.02] via-transparent to-amber-500/[0.04]" />

        {/* THREE-COLUMN BENTO CONTENT LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 h-full relative z-10 items-center">
          
          {/* LEFT COLUMN: Narrative & Info (5 cols) */}
          <div className="md:col-span-5 flex flex-col justify-between h-[85%] border-r border-dashed border-amber-950/20 pr-4">
            <div>
              <span className="font-mono text-[8px] text-amber-500/60 tracking-[0.4em] uppercase block mb-2 font-bold">
                {card.chapter}
              </span>
              <h2 className="font-serif text-xl sm:text-2xl font-extrabold text-[#FDFAF5] tracking-tight mb-3">
                {card.title}
              </h2>
              <p className="font-sans text-[12.5px] text-[#C9B7A4]/80 leading-relaxed mb-4">
                {card.description}
              </p>
              <div className="bg-[#120E0C]/40 border border-amber-950/30 rounded-xl p-3.5 relative overflow-hidden">
                <div className="absolute top-0 left-0 bottom-0 w-0.5 bg-amber-500/40" />
                <p className="font-sans text-[11px] text-[#C9B7A4]/50 leading-relaxed font-light italic pl-1.5">
                  {card.narrative}
                </p>
              </div>
            </div>
            
            <div className="hidden md:flex items-center gap-2 font-mono text-[7px] text-[#C9B7A4]/35 uppercase tracking-widest mt-4">
              <span>EXPLORER LOG BOOK // CHAPTER.0{i + 1}</span>
            </div>
          </div>

          {/* MIDDLE COLUMN: Skills Boxes (4 cols) */}
          <div className="md:col-span-4 flex flex-col justify-center h-[85%] gap-2 border-r border-dashed border-amber-950/20 pr-4">
            <span className="font-mono text-[8px] text-amber-500/50 tracking-[0.25em] uppercase block mb-2 font-bold">
              UNLOCKED CAPABILITIES
            </span>
            <div className="flex flex-col gap-2">
              {card.skills.map((skill) => (
                <div
                  key={skill}
                  className="font-mono text-[10.5px] font-bold text-[#F5F1EB] bg-[#140F0D]/90 border border-amber-950/70 rounded-xl px-4 py-2.5 hover:border-amber-500/40 hover:translate-x-1 hover:shadow-[0_4px_12px_rgba(212,175,55,0.06)] hover:text-amber-400 transition-all duration-300 select-none cursor-default flex items-center gap-2.5"
                >
                  <span className="w-1 h-1 rounded-full bg-amber-500/50 group-hover:bg-amber-400" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: Visual representation (3 cols) */}
          <div className="md:col-span-3 flex flex-col justify-center items-center h-[85%] min-h-0 pl-2">
            <div className="w-full h-full rounded-xl border border-amber-950/50 bg-[#120E0C]/60 p-4 relative overflow-hidden flex flex-col items-center justify-between min-h-[140px] max-h-[220px] shadow-inner">
              {/* Technical Blueprint labels */}
              <div className="w-full flex justify-between font-mono text-[6.5px] text-amber-500/40 tracking-wider mb-2">
                <span>[ SCHEMA_V1.0 ]</span>
                <span>[ GRID_LOCK ]</span>
              </div>
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(253,250,245,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(253,250,245,0.015)_1px,transparent_1px)] bg-[size:10px_10px]" />
              <motion.div 
                style={{ scale: imageScale }} 
                className="flex-1 w-full h-full flex items-center justify-center relative z-10 opacity-75 group-hover:opacity-95 transition-opacity duration-300"
              >
                {card.visual}
              </motion.div>
            </div>
          </div>

        </div>
      </motion.div>
    </div>
  );
};

/* ══════════════════════════════════════════════
   MAIN SKILLS COMPONENT
   ══════════════════════════════════════════════ */
export default function Skills() {
  const container = useRef(null);
  const [dustParticles, setDustParticles] = useState<{ x: number; y: number; size: number; duration: number; delay: number }[]>([]);

  // Generate floating dust particles once on mount
  useEffect(() => {
    const generatedParticles = Array.from({ length: 12 }).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1.2,
      duration: Math.random() * 12 + 14,
      delay: Math.random() * -12,
    }));
    setDustParticles(generatedParticles);
  }, []);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  const cards: SkillCardData[] = [
    {
      chapter: "CHAPTER 01 / FOUNDATION",
      title: "Foundation Instruments",
      description: "The first tools used to understand programming logic, algorithms, and structured problem solving.",
      narrative: "Deep in the codebase core, these mathematical relics forged my understanding of structures, recursion dynamics, and database logic.",
      skills: ["Object-Oriented Java", "C++ Algorithms", "Python Scripting", "Relational SQL Queries"],
      color: "rgba(15, 10, 8, 0.88)",
      visual: (
        <svg viewBox="0 0 200 200" fill="none" stroke="#FFAA50" strokeWidth="0.45" className="w-48 h-48">
          <circle cx="100" cy="100" r="75" />
          <circle cx="100" cy="100" r="70" strokeDasharray="1.5 2.5" />
          <circle cx="100" cy="100" r="50" />
          <polygon points="100,28 104,95 96,95" fill="#FFAA50" opacity="0.45" stroke="none" />
          <polygon points="100,172 104,105 96,105" fill="#FFAA50" opacity="0.15" stroke="none" />
          <line x1="28" y1="100" x2="172" y2="100" />
          <line x1="100" y1="28" x2="100" y2="172" />
          <path d="M49,49 L151,151 M49,151 L151,49" strokeDasharray="2 2" />
          <text x="100" y="22" textAnchor="middle" fontSize="9" fill="#FFAA50" fontFamily="serif" fontWeight="bold">N</text>
          <text x="100" y="188" textAnchor="middle" fontSize="9" fill="#FFAA50" fontFamily="serif" fontWeight="bold">S</text>
        </svg>
      )
    },
    {
      chapter: "CHAPTER 02 / FRONTEND ENGINEERING",
      title: "Interface Workshop",
      description: "Tools used to design responsive interfaces and create interactive digital experiences.",
      narrative: "Translating mockups into modular, declarative React layouts, using state mechanisms to map fluid interfaces.",
      skills: ["Semantic HTML5 / CSS3", "Modern JavaScript (ES6+)", "TypeScript Integration", "React.js Architecture", "Next.js SSR & Routing"],
      color: "rgba(15, 10, 8, 0.88)",
      visual: (
        <svg viewBox="0 0 200 200" fill="none" stroke="#FFAA50" strokeWidth="0.45" className="w-48 h-48">
          <rect x="25" y="35" width="150" height="120" rx="6" />
          <line x1="25" y1="55" x2="175" y2="55" />
          <circle cx="37" cy="45" r="2.5" fill="#FFAA50" opacity="0.4" />
          <circle cx="47" cy="45" r="2.5" fill="#FFAA50" opacity="0.4" />
          <circle cx="57" cy="45" r="2.5" fill="#FFAA50" opacity="0.4" />
          <rect x="40" y="70" width="38" height="32" rx="2" strokeDasharray="1.5 1.5" />
          <rect x="90" y="70" width="70" height="32" rx="2" />
          <rect x="40" y="114" width="120" height="28" rx="2" />
          <circle cx="90" cy="86" r="1.5" fill="#FFAA50" />
          <circle cx="160" cy="128" r="1.5" fill="#FFAA50" />
        </svg>
      )
    },
    {
      chapter: "CHAPTER 03 / BACKEND ENGINEERING",
      title: "Systems Forge",
      description: "Technologies used to build APIs, services, and scalable application architectures.",
      narrative: "Forging routes and handlers, handling asynchronous queries, and securing communication pipelines.",
      skills: ["Node.js Runtime", "Express REST APIs", "Spring Boot Services", "RESTful Web Architectures"],
      color: "rgba(15, 10, 8, 0.88)",
      visual: (
        <svg viewBox="0 0 200 200" fill="none" stroke="#FFAA50" strokeWidth="0.45" className="w-48 h-48">
          <rect x="85" y="25" width="30" height="22" rx="3" />
          <rect x="35" y="85" width="30" height="22" rx="3" />
          <rect x="135" y="85" width="30" height="22" rx="3" />
          <rect x="85" y="145" width="30" height="22" rx="3" />
          <path d="M100,47 V85 M100,107 V145" />
          <path d="M50,85 V36 H85" />
          <path d="M150,85 V36 H115" />
          <path d="M50,107 V156 H85" />
          <path d="M150,107 V156 H115" />
          <polygon points="100,75 102,67 98,67" fill="#FFAA50" stroke="none" />
          <polygon points="100,135 102,127 98,127" fill="#FFAA50" stroke="none" />
          <polygon points="65,36 73,38 73,34" fill="#FFAA50" stroke="none" />
          <polygon points="135,156 127,158 127,154" fill="#FFAA50" stroke="none" />
        </svg>
      )
    },
    {
      chapter: "CHAPTER 04 / CLOUD & DATABASES",
      title: "Infrastructure Vault",
      description: "Tools used for deployment, storage, and scalable cloud systems.",
      narrative: "Deploying secure, serverless database pipelines, orchestrating cloud networks, and preserving transactional consistency.",
      skills: ["MongoDB Document DB", "PostgreSQL Relational DB", "AWS Serverless (S3/Lambda)", "Docker Containerization"],
      color: "rgba(15, 10, 8, 0.88)",
      visual: (
        <svg viewBox="0 0 200 200" fill="none" stroke="#FFAA50" strokeWidth="0.45" className="w-48 h-48">
          <ellipse cx="65" cy="55" rx="18" ry="6" />
          <path d="M47,55 V75 C47,79 55,81 65,81 C75,81 83,79 83,75 V55" />
          <path d="M47,75 V95 C47,99 55,101 65,101 C75,101 83,99 83,95 V75" />
          <path d="M135,120 C125,120 120,124 120,131 C120,140 135,140 145,140 C155,140 162,136 162,131 C162,124 152,120 145,120 Z" />
          <path d="M65,81 L120,129" strokeDasharray="1.5 2.5" />
          <circle cx="120" cy="129" r="2" fill="#FFAA50" />
          <circle cx="65" cy="81" r="2" fill="#FFAA50" />
        </svg>
      )
    },
    {
      chapter: "CHAPTER 05 / BUILDER TOOLKIT",
      title: "Explorer Utility Pack",
      description: "Supporting tools used during development, collaboration, debugging, and deployment.",
      narrative: "Versioning my progress through Git vaults, executing requests with Postman utilities, and orchestrating layouts on shared whiteboard canvases.",
      skills: ["Git Version Control", "GitHub Code Collaboration", "Postman API Testing", "Vercel Deployments", "Figma Interface Design"],
      color: "rgba(15, 10, 8, 0.88)",
      visual: (
        <svg viewBox="0 0 200 200" fill="none" stroke="#FFAA50" strokeWidth="0.45" className="w-48 h-48">
          <circle cx="45" cy="100" r="4.5" fill="#FFAA50" opacity="0.8" />
          <circle cx="100" cy="100" r="4" />
          <circle cx="155" cy="100" r="4.5" />
          <circle cx="100" cy="55" r="4" />
          <circle cx="140" cy="55" r="4" />
          <line x1="49.5" y1="100" x2="96" y2="100" />
          <line x1="104" y1="100" x2="150.5" y2="100" />
          <path d="M45,95.5 C45,95.5 60,55 96,55" />
          <line x1="104" y1="55" x2="136" y2="55" />
          <path d="M140,59 C140,59 148,96 150.5" strokeDasharray="1.5 2.5" />
        </svg>
      )
    }
  ];

  return (
    <section
      ref={container}
      id="skills"
      className="relative w-full bg-slate-950 optimize-section-skills"
      style={{
        background: "linear-gradient(to bottom, #110E0B 0%, #15110E 50%, #0D0A08 100%)",
      }}
    >
      <TorchStyles />
      
      {/* Grain texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none mix-blend-overlay z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Blueprint background grid */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none select-none z-0">
        <svg className="w-full h-full" fill="none" stroke="#FDFAF5" strokeWidth="0.4">
          <defs>
            <pattern id="skillsblueprint" width="100" height="100" patternUnits="userSpaceOnUse">
              <line x1="0" y1="0" x2="100" y2="0" />
              <line x1="0" y1="0" x2="0" y2="100" />
              <circle cx="50" cy="50" r="1.2" fill="#FDFAF5" opacity="0.35" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#skillsblueprint)" />
        </svg>
      </div>

      {/* ── BACKGROUND ORNAMENTS & DECORATIONS ── */}
      
      {/* Left Hanging Forest Vine */}
      <motion.svg 
        className="absolute left-[30px] top-0 w-[120px] h-[450px] pointer-events-none select-none hidden md:block z-20 opacity-85" 
        viewBox="0 0 120 450" 
        preserveAspectRatio="none"
        animate={{ rotate: [-0.6, 0.6, -0.6] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "top center", filter: "blur(0.3px)", willChange: "transform" }}
      >
        <path d="M 15,0 C 30,80 5,160 20,240 C 35,320 15,380 25,440" stroke="#1C5A13" strokeWidth="3.0" fill="none" strokeLinecap="round" />
        <path d="M 15,0 C 30,80 5,160 20,240 C 35,320 15,380 25,440" stroke="#2E7D20" strokeWidth="0.75" fill="none" strokeLinecap="round" />
        <path d="M 17,120 C 35,140 40,180 23,210" stroke="#1C5A13" strokeWidth="1.8" fill="none" strokeLinecap="round" />
        <path d="M 17,120 C 35,140 40,180 23,210" stroke="#2E7D20" strokeWidth="0.5" fill="none" strokeLinecap="round" />
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

      {/* Right Hanging Forest Vine */}
      <motion.svg 
        className="absolute right-[35px] top-0 w-[120px] h-[450px] pointer-events-none select-none hidden md:block z-20 opacity-85" 
        viewBox="0 0 120 450" 
        preserveAspectRatio="none"
        animate={{ rotate: [0.6, -0.6, 0.6] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "top center", filter: "blur(0.3px)", willChange: "transform" }}
      >
        <path d="M 75,0 C 60,80 85,160 70,240 C 55,320 75,380 65,440" stroke="#1C5A13" strokeWidth="3.0" fill="none" strokeLinecap="round" />
        <path d="M 75,0 C 60,80 85,160 70,240 C 55,320 75,380 65,440" stroke="#2E7D20" strokeWidth="0.75" fill="none" strokeLinecap="round" />
        <path d="M 73,120 C 55,140 50,180 67,210" stroke="#1C5A13" strokeWidth="1.8" fill="none" strokeLinecap="round" />
        <path d="M 73,120 C 55,140 50,180 67,210" stroke="#2E7D20" strokeWidth="0.5" fill="none" strokeLinecap="round" />
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
            willChange: "transform, opacity",
            transform: "translate3d(0, 0, 0)"
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

      {/* Wall Torches framing the top area of the chamber */}
      <TorchGlow className="left-[4vw] top-[150px] absolute" />
      <Torch className="left-[3.2vw] top-[130px] absolute" />
      <TorchGlow className="right-[4vw] top-[150px] absolute" />
      <Torch className="right-[3.2vw] top-[130px] absolute" />

      {/* Compact Narrative Section Header (Reduced Gap) */}
      <div className="w-full flex flex-col justify-center items-center relative z-10 px-6 select-none pt-16 pb-2 min-h-[20vh]">
        <span className="font-mono text-[9px] uppercase tracking-[0.35em] text-amber-500/60 mb-1 block">
          03 / TECHNICAL EVOLUTION
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#FDFAF5] tracking-tight text-center mb-3 leading-tight">
          Equipment & Artifacts <br /> Gathered
        </h1>
        <div className="h-[1px] w-14 bg-amber-500/30 mb-4" />
        <p className="font-sans text-[13px] text-[#C9B7A4]/60 text-center leading-relaxed max-w-[490px]">
          Every milestone unlocked a new set of tools. The collection below represents the technologies mastered throughout the journey. Scroll down to unpack.
        </p>
      </div>

      {/* STICKY STACKING CARDS WRAPPER */}
      <div className="relative w-full z-10">
        {cards.map((card, i) => {
          const targetScale = 1 - (cards.length - i) * 0.05;
          return (
            <Card
              key={`skill_${i}`}
              i={i}
              card={card}
              progress={scrollYProgress}
              range={[i * 0.2, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>

      {/* Static decorative footer for section */}
      <div className="h-[25vh] group bg-[#0D0A08] relative z-10 grid place-content-center text-center select-none border-t border-amber-950/20">
        <p className="font-mono text-[8px] text-[#C9B7A4]/40 uppercase tracking-[0.4em] mb-1">
          EQUIPMENT REGISTER COMPLETED
        </p>
        <p className="font-sans text-[11px] text-[#C9B7A4]/65">
          Proceeding along the trail to certifications & accolades...
        </p>
      </div>

      {/* Bottom transition to Achievements */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none z-10"
        style={{
          background: "linear-gradient(to bottom, transparent 0%, #1D140E 100%)",
        }}
      />
    </section>
  );
}
