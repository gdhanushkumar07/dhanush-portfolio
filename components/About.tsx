"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';

// Hanging Forest Vines Leaves Definitions (Desaturated forest green colors)
const leftVineLeaves = [
  { x: 16, y: 50, rotate: -35, scale: 0.6, color: "#2A5A2A" },
  { x: 18, y: 110, rotate: 145, scale: 0.65, color: "#224D22" },
  { x: 12, y: 170, rotate: -40, scale: 0.55, color: "#305F30" },
  { x: 23, y: 230, rotate: 50, scale: 0.65, color: "#2A5A2A" },
  { x: 28, y: 290, rotate: 160, scale: 0.6, color: "#224D22" },
  { x: 22, y: 350, rotate: -35, scale: 0.55, color: "#305F30" },
  { x: 19, y: 410, rotate: 130, scale: 0.65, color: "#2A5A2A" },
  
  // Leaves on sub-branches
  { x: 30, y: 145, rotate: 20, scale: 0.5, color: "#2A5A2A" },
  { x: 34, y: 180, rotate: 160, scale: 0.5, color: "#224D22" },
  { x: 32, y: 290, rotate: 30, scale: 0.5, color: "#305F30" },
  { x: 29, y: 335, rotate: 150, scale: 0.5, color: "#2A5A2A" },
];

const rightVineLeaves = [
  { x: 74, y: 50, rotate: 45, scale: 0.6, color: "#2A5A2A" },
  { x: 72, y: 110, rotate: -135, scale: 0.65, color: "#224D22" },
  { x: 78, y: 170, rotate: 30, scale: 0.55, color: "#305F30" },
  { x: 58, y: 230, rotate: 150, scale: 0.65, color: "#2A5A2A" },
  { x: 52, y: 290, rotate: -45, scale: 0.6, color: "#224D22" },
  { x: 68, y: 350, rotate: 120, scale: 0.55, color: "#305F30" },
  { x: 62, y: 410, rotate: 45, scale: 0.65, color: "#2A5A2A" },

  // Leaves on sub-branches
  { x: 60, y: 145, rotate: -20, scale: 0.5, color: "#2A5A2A" },
  { x: 56, y: 180, rotate: -160, scale: 0.5, color: "#224D22" },
  { x: 58, y: 290, rotate: -30, scale: 0.5, color: "#305F30" },
  { x: 61, y: 335, rotate: -150, scale: 0.5, color: "#2A5A2A" },
];

// Static background particles for ambient layout depth
const backgroundParticles = [
  { x: 12, y: 15, size: 3, duration: 24, delay: -2 },
  { x: 25, y: 40, size: 2.5, duration: 18, delay: -5 },
  { x: 8, y: 75, size: 4, duration: 28, delay: -1 },
  { x: 88, y: 20, size: 2, duration: 22, delay: -8 },
  { x: 92, y: 65, size: 3.5, duration: 26, delay: -3 },
  { x: 45, y: 85, size: 3, duration: 20, delay: -4 },
  { x: 60, y: 10, size: 2.5, duration: 16, delay: -7 },
  { x: 75, y: 55, size: 4, duration: 30, delay: -12 },
  { x: 18, y: 92, size: 2, duration: 18, delay: -9 },
  { x: 35, y: 60, size: 3, duration: 22, delay: -15 },
  { x: 52, y: 30, size: 2.5, duration: 24, delay: -6 },
  { x: 80, y: 80, size: 3.5, duration: 28, delay: -10 }
];

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

        {/* Metal Cup / Torch Head (Dark bronze holder) */}
        <path d="M 10,32 H 20 L 18,36 H 12 Z" fill="#3D3025" stroke="#251C15" strokeWidth="0.75" />

        {/* Straight Wooden Handle (Dark wood stick) */}
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

export default function About() {
  const handleResumeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    alert("Interactive Resume PDF Download Simulation.");
  };

  const easeCurve: [number, number, number, number] = [0.22, 1, 0.36, 1];

  // Motion variants
  const revealContainer = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeCurve } }
  };

  const panelReveal = {
    initial: { opacity: 0, y: 40, scale: 0.98 },
    animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.9, ease: easeCurve } }
  };

  return (
    <section 
      id="about" 
      className="pt-32 pb-40 px-6 md:px-[120px] relative overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #17110D 0%, #1B120D 30%, #21160E 70%, #26180F 100%)"
      }}
    >
      
      {/* Hero to About transition layer */}
      <div 
        className="absolute top-0 left-0 right-0 h-48 pointer-events-none z-10"
        style={{
          background: "linear-gradient(to bottom, #113945 0%, #17110D 100%)",
          maskImage: "linear-gradient(to bottom, black 0%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 0%, transparent 100%)",
        }}
      />

      {/* Transition hill SVG */}
      <div className="absolute top-0 inset-x-0 h-32 pointer-events-none z-0">
        <svg className="w-full h-full text-[#113945]" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path 
            d="M0 0 L1440 0 L1440 40 C1100 60, 800 30, 400 80 C200 100, 100 80, 0 100 Z" 
            fill="currentColor" 
          />
          <path 
            d="M0 0 L1440 0 L1440 20 C1200 50, 900 10, 500 60 C300 80, 150 50, 0 80 Z" 
            fill="#17110D" 
            opacity="0.8"
          />
        </svg>
      </div>

      {/* Layer 2: Vignette overlay */}
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: "radial-gradient(ellipse at center, transparent 30%, rgba(10, 7, 5, 0.9) 100%)",
        }}
      />

      {/* Layer 3: Campfire amber glow from top center */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-[700px] pointer-events-none z-0"
        style={{
          background: "radial-gradient(circle at top center, rgba(225, 138, 66, 0.12) 0%, rgba(225, 138, 66, 0.03) 50%, transparent 80%)",
          filter: "blur(50px)",
        }}
      />

      {/* Subtle warm amber-brown fog behind the card panel */}
      <div 
        className="absolute top-[35%] left-1/2 -translate-x-1/2 w-[80%] h-[600px] pointer-events-none z-0"
        style={{
          background: "radial-gradient(circle, rgba(225, 138, 66, 0.05) 0%, rgba(139, 90, 43, 0.02) 60%, transparent 100%)",
          filter: "blur(70px)",
        }}
      />

      {/* Grain texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay z-0" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` 
        }} 
      />

      {/* Floating Amber Particles */}
      {backgroundParticles.map((p, idx) => (
        <motion.div
          key={idx}
          className="absolute bg-[#FFAA50] rounded-full pointer-events-none z-0"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            opacity: 0.15,
          }}
          animate={{
            y: [0, -35, 0],
            x: [0, 10, 0],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Layer 2 (Z-10): Repositioned Torch Glows beside the card (Aligned with top-[440px], Glow center top-[458px]) */}
      {/* Left Hanging Forest Vine */}
      <motion.svg 
        className="absolute left-[30px] top-0 w-[120px] h-[450px] pointer-events-none select-none hidden md:block z-20 opacity-85" 
        viewBox="0 0 120 450" 
        preserveAspectRatio="none"
        animate={{ rotate: [-0.6, 0.6, -0.6] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "top center", filter: "blur(0.3px)" }}
      >
        {/* Main Vine Stem */}
        <path d="M 15,0 C 30,80 5,160 20,240 C 35,320 15,380 25,440" stroke="#224D22" strokeWidth="3.0" fill="none" strokeLinecap="round" />
        <path d="M 15,0 C 30,80 5,160 20,240 C 35,320 15,380 25,440" stroke="#2A5A2A" strokeWidth="0.75" fill="none" strokeLinecap="round" />

        {/* Sub-branch 1 */}
        <path d="M 17,120 C 35,140 40,180 23,210" stroke="#224D22" strokeWidth="1.8" fill="none" strokeLinecap="round" />
        <path d="M 17,120 C 35,140 40,180 23,210" stroke="#2A5A2A" strokeWidth="0.5" fill="none" strokeLinecap="round" />

        {/* Sub-branch 2 */}
        <path d="M 22,260 C 38,280 36,320 20,350" stroke="#224D22" strokeWidth="1.8" fill="none" strokeLinecap="round" />
        <path d="M 22,260 C 38,280 36,320 20,350" stroke="#2A5A2A" strokeWidth="0.5" fill="none" strokeLinecap="round" />

        {leftVineLeaves.map((leaf, idx) => (
          <g key={idx} transform={`translate(${leaf.x}, ${leaf.y}) rotate(${leaf.rotate}) scale(${leaf.scale})`}>
            <path 
              d="M0 0 C 8 -12, 22 -8, 25 0 C 22 8, 8 12, 0 0 Z" 
              fill={leaf.color} 
              stroke="#123016" 
              strokeWidth="0.75" 
              style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.4))" }}
            />
            <path d="M0 0 Q 12.5 -2 22 0" fill="none" stroke="#2A5A2A" strokeWidth="0.5" />
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
        style={{ transformOrigin: "top center", filter: "blur(0.3px)" }}
      >
        {/* Main Vine Stem */}
        <path d="M 75,0 C 60,80 85,160 70,240 C 55,320 75,380 65,440" stroke="#224D22" strokeWidth="3.0" fill="none" strokeLinecap="round" />
        <path d="M 75,0 C 60,80 85,160 70,240 C 55,320 75,380 65,440" stroke="#2A5A2A" strokeWidth="0.75" fill="none" strokeLinecap="round" />

        {/* Sub-branch 1 */}
        <path d="M 73,120 C 55,140 50,180 67,210" stroke="#224D22" strokeWidth="1.8" fill="none" strokeLinecap="round" />
        <path d="M 73,120 C 55,140 50,180 67,210" stroke="#2A5A2A" strokeWidth="0.5" fill="none" strokeLinecap="round" />

        {/* Sub-branch 2 */}
        <path d="M 68,260 C 52,280 54,320 70,350" stroke="#224D22" strokeWidth="1.8" fill="none" strokeLinecap="round" />
        <path d="M 68,260 C 52,280 54,320 70,350" stroke="#2A5A2A" strokeWidth="0.5" fill="none" strokeLinecap="round" />

        {rightVineLeaves.map((leaf, idx) => (
          <g key={idx} transform={`translate(${leaf.x}, ${leaf.y}) rotate(${leaf.rotate}) scale(${leaf.scale})`}>
            <path 
              d="M0 0 C 8 -12, 22 -8, 25 0 C 22 8, 8 12, 0 0 Z" 
              fill={leaf.color} 
              stroke="#123016" 
              strokeWidth="0.75" 
              style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.4))" }}
            />
            <path d="M0 0 Q 12.5 -2 22 0" fill="none" stroke="#2A5A2A" strokeWidth="0.5" />
          </g>
        ))}
      </motion.svg>

      {/* Ancient Glowing Runes */}
      <div className="absolute left-12 lg:left-20 top-[15%] opacity-15 text-[#E18A42]/40 hover:text-[#E18A42]/70 transition-colors duration-500 pointer-events-none select-none hidden lg:block z-10">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25">
          <path d="M12 3 V21 M3 12 H21 M12 6 L18 12 L12 18 L6 12 Z M12 9 A3 3 0 1 0 12 15 A3 3 0 1 0 12 9 Z" />
        </svg>
      </div>

      <div className="absolute left-12 lg:left-20 top-[65%] opacity-15 text-[#E18A42]/40 hover:text-[#E18A42]/70 transition-colors duration-500 pointer-events-none select-none hidden lg:block z-10">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25">
          <path d="M4 12 C6 14 8 14 10 12 C12 14 14 14 16 12 M7 12 A0.5 0.5 0 1 0 7 12.01 M13 12 A0.5 0.5 0 1 0 13 12.01" />
        </svg>
      </div>

      <div className="absolute right-12 lg:right-20 top-[20%] opacity-15 text-[#E18A42]/40 hover:text-[#E18A42]/70 transition-colors duration-500 pointer-events-none select-none hidden lg:block z-10">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25">
          <path d="M12 2 L14 8 L20 8 L15 12 L17 18 L12 14 L7 18 L9 12 L4 8 L10 8 Z" />
        </svg>
      </div>

      {/* Backdrop Large Ambient Glow Centered behind Panel (Size 1000px, Blur 200px) */}
      <div 
        className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[1000px] h-[1000px] pointer-events-none z-0 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(255,120,40,0.06) 0%, transparent 70%)",
          filter: "blur(200px)",
        }}
      />

      {/* Layer 5 (Z-40): Monumental Layout Panel */}
      <div className="max-w-[1200px] w-full mx-auto z-40 relative">
        
        {/* MONUMENTAL HEADER ZONE */}
        <motion.div 
          className="mb-12 select-none max-w-[800px] mx-auto text-center space-y-4"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <span className="font-mono text-[12px] tracking-[8px] uppercase block text-[rgba(255,170,80,0.9)]">
            ABOUT
          </span>
          <h2 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#F5F1EB] tracking-tight leading-tight max-w-none whitespace-nowrap">
            The Builder Behind The Journey
          </h2>
          <p className="font-sans text-[16px] md:text-[18px] leading-[1.6] text-[rgba(245,241,235,0.78)] font-light max-w-[600px] mx-auto">
            Crafting scalable systems, intelligent products, and meaningful digital experiences.
          </p>
        </motion.div>

        {/* RPG-STYLE CHARACTER PROFILE PANEL (Single unified premium card with fade-in scale) */}
        <div className="relative max-w-[1050px] mx-auto">
          {/* Torch & Glow (Left side) */}
          <TorchGlow className="left-[-41px] top-[168px]" />
          <Torch className="left-[-56px] top-[150px]" />

          {/* Torch & Glow (Right side) */}
          <TorchGlow className="right-[-41px] top-[168px]" />
          <Torch className="right-[-56px] top-[150px]" />

          <motion.div 
            className="rounded-[24px] border overflow-hidden w-full p-6 md:p-10 transition-all duration-500 hover:border-[rgba(255,140,0,0.35)]"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={panelReveal}
            style={{
              background: "rgba(32,22,18,0.92)",
              border: "1px solid rgba(255,140,0,0.18)",
              boxShadow: "0 20px 80px rgba(0,0,0,0.5), 0 0 60px rgba(255,140,0,0.04)"
            }}
          >
            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-[38%_62%] gap-8 lg:gap-12 items-stretch"
              variants={revealContainer}
            >
              
              {/* LEFT COLUMN: Clean Identity Plaque & Bio (38%) */}
              <motion.div 
                className="space-y-6 pb-10 lg:pb-0 lg:pr-12 flex flex-col justify-center"
                style={{ borderRight: "1px solid rgba(255,140,0,0.08)" }}
                variants={fadeUp}
              >
                <div className="space-y-4">
                  <span className="font-mono text-[10px] text-[#FFAA50]/60 tracking-[0.2em] uppercase">ABOUT ME</span>
                  <h3 className="font-display text-2xl font-extrabold text-[#F5F1EB] tracking-tight">
                    Golconda Dhanush Kumar
                  </h3>
                  <p className="font-mono text-xs text-[#FFAA50]/90 font-medium">
                    CSE Student
                  </p>
                  <div className="h-[1px] w-12 bg-[#FFAA50]/20" />
                  <p className="font-sans text-sm text-[rgba(245,241,235,0.78)] font-light leading-relaxed">
                    I am a Computer Science student at CBIT Hyderabad, passionate about building robust, high-performance systems and <span className="underline decoration-[#E18A42] underline-offset-4 decoration-1 font-medium">solving complex algorithmic challenges</span>.
                  </p>
                </div>
              </motion.div>

              {/* RIGHT COLUMN: Education, Tech Chips, Socials, Resume (62%) */}
              <motion.div 
                className="space-y-6 flex flex-col justify-between"
                variants={fadeUp}
              >
                <div className="space-y-6">
                  {/* Education Badge */}
                  <div className="space-y-3">
                    <h4 className="font-mono text-[12px] tracking-[5px] uppercase text-[rgba(255,140,0,0.8)] font-semibold">
                      ACADEMIC JOURNEY
                    </h4>
                    <div className="flex mt-3">
                      <div 
                        className="flex items-center gap-2.5 px-4 py-2 rounded-xl text-xs font-mono text-[#FFAA50] bg-[rgba(255,170,80,0.03)] hover:bg-[rgba(255,170,80,0.06)] transition-all duration-300"
                        style={{ border: "1px solid rgba(255,140,0,0.12)" }}
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                          <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
                        </svg>
                        <span>CBIT Hyderabad (2024 - 2028)</span>
                      </div>
                    </div>
                  </div>

                  {/* Skills Chips (max 10) */}
                  <div className="space-y-3">
                    <h4 className="font-mono text-[12px] tracking-[5px] uppercase text-[rgba(255,140,0,0.8)] font-semibold">
                      TOOLKIT MASTERED
                    </h4>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {['Java', 'Spring Boot', 'React', 'Next.js', 'Node.js', 'PostgreSQL', 'MongoDB', 'AWS', 'Docker', 'TypeScript'].map((skill) => (
                        <span
                          key={skill}
                          className="font-sans text-xs h-[36px] px-[14px] flex items-center bg-[rgba(255,255,255,0.03)] text-[#C9B7A4]/90 rounded-lg cursor-default border hover:border-[#FFAA50]/30 hover:text-[#F5F1EB] transition-all duration-300"
                          style={{ border: "1px solid rgba(255,140,0,0.12)" }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Journey Connections / Social Links */}
                  <div className="space-y-3">
                    <h4 className="font-mono text-[12px] tracking-[5px] uppercase text-[rgba(255,140,0,0.8)] font-semibold">
                      JOURNEY CONNECTIONS
                    </h4>
                    <div className="flex flex-wrap gap-4 items-center mt-4">
                      <div className="flex gap-3">
                        <a
                          href="https://github.com/"
                          target="_blank"
                          rel="noreferrer"
                          className="w-10 h-10 rounded-full border border-[#C9B7A4]/15 bg-[#C9B7A4]/[0.02] hover:bg-[#E18A42]/5 hover:border-[#E18A42]/50 flex items-center justify-center text-[#C9B7A4]/60 hover:text-[#E18A42] transition-all duration-300 shadow-sm"
                          aria-label="GitHub"
                        >
                          <Github className="w-4.5 h-4.5" />
                        </a>
                        <a
                          href="https://linkedin.com/"
                          target="_blank"
                          rel="noreferrer"
                          className="w-10 h-10 rounded-full border border-[#C9B7A4]/15 bg-[#C9B7A4]/[0.02] hover:bg-[#E18A42]/5 hover:border-[#E18A42]/50 flex items-center justify-center text-[#C9B7A4]/60 hover:text-[#E18A42] transition-all duration-300 shadow-sm"
                          aria-label="LinkedIn"
                        >
                          <Linkedin className="w-4.5 h-4.5" />
                        </a>
                        <a
                          href="mailto:gdhanushkumar19@gmail.com"
                          className="w-10 h-10 rounded-full border border-[#C9B7A4]/15 bg-[#C9B7A4]/[0.02] hover:bg-[#E18A42]/5 hover:border-[#E18A42]/50 flex items-center justify-center text-[#C9B7A4]/60 hover:text-[#E18A42] transition-all duration-300 shadow-sm"
                          aria-label="Email"
                        >
                          <Mail className="w-4.5 h-4.5" />
                        </a>
                      </div>
                      <button
                        onClick={handleResumeClick}
                        className="cursor-pointer border border-[#E18A42]/30 bg-[#E18A42]/5 hover:bg-[#E18A42]/10 hover:border-[#E18A42]/60 px-5 py-2.5 rounded-xl text-xs font-mono text-[#E18A42] uppercase tracking-wider flex items-center gap-2 transition-all duration-300"
                      >
                        <FileText className="w-3.5 h-3.5" />
                        <span>Resume</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Bottom Motto Footer */}
                <div className="pt-4 mt-4 flex flex-col items-center" style={{ borderTop: "1px solid rgba(255,170,80,0.08)" }}>
                  <p className="font-mono text-[9px] sm:text-[10px] text-[#C9B7A4]/40 uppercase tracking-[0.3em] select-none text-center">
                    Curiosity today. Impact tomorrow.
                  </p>
                </div>
              </motion.div>

            </motion.div>
          </motion.div>
        </div>

      {/* About to Projects transition trail */}
      <div className="absolute bottom-0 inset-x-0 h-32 pointer-events-none z-10 flex justify-center">
        <svg className="w-32 h-full text-[rgba(255,170,80,0.15)]" viewBox="0 0 120 120" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M 60,0 C 60,30 50,90 60,120" stroke="currentColor" strokeWidth="2.5" strokeDasharray="6 6" />
        </svg>
      </div>

      </div>
    </section>
  );
}
