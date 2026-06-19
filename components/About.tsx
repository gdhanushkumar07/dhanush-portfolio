"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';

// Hanging Forest Vines Leaves Definitions (Desaturated forest green colors)
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
  <div className={`absolute pointer-events-none select-none z-10 hidden md:block ${className}`} style={{ willChange: "transform" }}>
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
  <div className={`absolute pointer-events-none select-none z-30 hidden md:block ${className}`}>
    <div className="relative w-[30px] h-[80px]">
      <svg width="30" height="80" viewBox="0 0 30 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Flame (Organic layered paths matching hero section style) */}
        {/* Outer Flame */}
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
        {/* Mid Flame */}
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
        {/* Inner Flame */}
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
        {/* Core Flame */}
        <motion.ellipse
          cx="15" cy="26" rx="2.2" ry="4.2"
          fill="#FFF3C0"
          animate={{ scaleY: [1, 1.25, 0.82, 1.15, 1], opacity: [0.78, 1, 0.72, 0.92, 0.78] }}
          style={{ transformOrigin: "15px 26px" }}
          transition={{ duration: 0.44, repeat: Infinity, ease: "easeInOut", delay: 0.12 }}
        />

        {/* Metal Cup / Torch Head (Dark bronze holder) */}
        <path d="M 10,32 H 20 L 18,36 H 12 Z" fill="#3D3025" stroke="#251C15" strokeWidth="0.75" />

        {/* Straight Wooden Handle (Dark wood stick) */}
        <path d="M 15,36 V 70" stroke="#4A382A" strokeWidth="3.5" strokeLinecap="round" />

        {/* Wall Mount Metal Bracket Holder */}
        <path d="M 8,50 H 22 M 8,47 V 53 M 22,47 V 53" stroke="#3D3025" strokeWidth="1.5" />
        <path d="M 12,50 H 18" stroke="#251C15" strokeWidth="2.5" />
      </svg>

      {/* Floating embers rising from flame */}
      <div className="absolute w-1 h-1 rounded-full bg-[#FFAA50] animate-torch-ember-0" style={{ left: "14px", bottom: "45px" }} />
      <div className="absolute w-1 h-1 rounded-full bg-[#FFAA50] animate-torch-ember-1" style={{ left: "14px", bottom: "45px" }} />
      <div className="absolute w-1 h-1 rounded-full bg-[#FFAA50] animate-torch-ember-2" style={{ left: "14px", bottom: "45px" }} />
      <div className="absolute w-1 h-1 rounded-full bg-[#FFAA50] animate-torch-ember-3" style={{ left: "14px", bottom: "45px" }} />
    </div>
  </div>
);

export default function About() {
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
      className="pt-32 pb-40 px-6 md:px-20 relative overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #17110D 0%, #1B120D 30%, #21160E 70%, #26180F 100%)"
      }}
    >
      <TorchStyles />
      
      {/* Hero to About transition layer */}
      <div 
        className="absolute top-0 left-0 right-0 h-48 pointer-events-none z-10"
        style={{
          background: "linear-gradient(to bottom, #100C09 0%, #17110D 100%)",
          maskImage: "linear-gradient(to bottom, black 0%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 0%, transparent 100%)",
        }}
      />

      {/* Transition hill SVG */}
      <div className="absolute top-0 inset-x-0 h-32 pointer-events-none z-0">
        <svg className="w-full h-full text-[#100C09]" viewBox="0 0 1440 120" preserveAspectRatio="none">
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
        }}
      />

      {/* Subtle warm amber-brown fog behind the card panel */}
      <div 
        className="absolute top-[35%] left-1/2 -translate-x-1/2 w-[80%] h-[600px] pointer-events-none z-0"
        style={{
          background: "radial-gradient(circle, rgba(225, 138, 66, 0.05) 0%, rgba(139, 90, 43, 0.02) 60%, transparent 100%)",
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
        style={{ transformOrigin: "top center", filter: "blur(0.3px)", willChange: "transform" }}
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

      {/* Right Hanging Forest Vine */}
      <motion.svg 
        className="absolute right-[35px] top-0 w-[120px] h-[450px] pointer-events-none select-none hidden md:block z-20 opacity-85" 
        viewBox="0 0 120 450" 
        preserveAspectRatio="none"
        animate={{ rotate: [0.6, -0.6, 0.6] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "top center", filter: "blur(0.3px)", willChange: "transform" }}
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
            className="rounded-[24px] border overflow-hidden w-full p-6 md:p-10 transition-all duration-500 hover:border-[#FFAA50]/25"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={panelReveal}
            style={{
              background: "rgba(28,22,20,0.92)",
              border: "1px solid rgba(255,170,80,0.10)",
              boxShadow: "0 20px 80px rgba(0,0,0,0.4), 0 0 60px rgba(255,120,40,0.04)"
            }}
          >
            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-[38%_62%] gap-8 lg:gap-12 items-stretch"
              variants={revealContainer}
            >
              
              {/* LEFT COLUMN: Clean Identity Plaque (38%) */}
              <motion.div 
                className="space-y-8 pb-10 lg:pb-0 lg:pr-12 flex flex-col justify-between"
                style={{ borderRight: "1px solid rgba(255,170,80,0.08)" }}
                variants={fadeUp}
              >
                <div className="flex flex-col justify-between h-full p-6 md:p-8 rounded-2xl border border-[rgba(255,170,80,0.06)] bg-[rgba(255,255,255,0.01)] relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[rgba(255,170,80,0.02)] to-transparent pointer-events-none" />
                  
                  <div className="space-y-6">
                    {/* Compass Emblem */}
                    <div className="w-10 h-10 rounded-xl border border-[rgba(255,170,80,0.2)] bg-[rgba(255,170,80,0.05)] flex items-center justify-center text-[rgba(255,170,80,0.8)]">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <circle cx="12" cy="12" r="10" />
                        <polygon points="16.24,7.76 14.12,14.12 7.76,16.24 9.88,9.88" />
                      </svg>
                    </div>

                    <div className="space-y-1">
                      <span className="font-mono text-[10px] text-[#FFAA50]/60 tracking-[0.2em] uppercase">IDENTITY PLAQUE</span>
                      <h3 className="font-display text-2xl font-extrabold text-[#F5F1EB] tracking-tight">
                        Golconda Dhanush Kumar
                      </h3>
                      <p className="font-mono text-xs text-[#FFAA50]/90 font-medium">
                        CSE Student
                      </p>
                    </div>

                    <div className="h-[1px] w-full bg-[rgba(255,170,80,0.08)]" />

                    <div className="grid grid-cols-2 gap-4 text-xs font-mono">
                      <div>
                        <span className="text-[#C9B7A4]/40 block uppercase tracking-wider text-[9px]">EDUCATION</span>
                        <span className="text-[#F5F1EB] font-medium block mt-1">CBIT Hyderabad</span>
                      </div>
                      <div>
                        <span className="text-[#C9B7A4]/40 block uppercase tracking-wider text-[9px]">GRADUATION</span>
                        <span className="text-[#F5F1EB] font-medium block mt-1">Class of 2028</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 border-t border-[rgba(255,170,80,0.08)] pt-5">
                    <span className="text-[#C9B7A4]/40 font-mono text-[9px] block uppercase tracking-wider mb-2">PERSONAL MISSION</span>
                    <p className="font-sans text-sm text-[rgba(245,241,235,0.78)] font-light leading-relaxed italic">
                      "Building software that transforms ideas into scalable systems."
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* RIGHT COLUMN: Bio, Education, Skills, Connections (62%) */}
              <motion.div 
                className="space-y-6 flex flex-col justify-between"
                variants={fadeUp}
              >
                <div className="space-y-6">
                  {/* Biography (max 4 lines) */}
                  <div className="pb-5" style={{ borderBottom: "1px solid rgba(255,170,80,0.08)" }}>
                    <span className="font-mono text-[12px] tracking-[5px] uppercase block mb-3 text-[rgba(255,170,80,0.8)]">
                      THE RECORD
                    </span>
                    <div className="font-sans text-[16px] leading-[1.8] text-[rgba(245,241,235,0.78)] font-light mt-4">
                      <p>
                        Hi, I'm Dhanush, a Computer Science student at CBIT Hyderabad. I love building robust, high-performance systems and exploring intelligent tools. My learning journey revolves around crafting clean architectures, exploring cloud pipelines, and <span className="underline decoration-[#E18A42] underline-offset-4 decoration-1 font-medium">solving complex algorithmic challenges</span>. I enjoy turning problems into scalable products and experimenting with new technologies.
                      </p>
                    </div>
                  </div>

                  {/* Education Badge */}
                  <div className="space-y-3">
                    <h4 className="font-mono text-[12px] tracking-[5px] uppercase text-[rgba(255,170,80,0.8)] font-semibold">
                      ACADEMIC JOURNEY
                    </h4>
                    <div className="flex mt-3">
                      <div 
                        className="flex items-center gap-2.5 px-4 py-2 rounded-xl text-xs font-mono text-[#FFAA50] bg-[rgba(255,170,80,0.03)] hover:bg-[rgba(255,170,80,0.06)] transition-all duration-300"
                        style={{ border: "1px solid rgba(255,170,80,0.12)" }}
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                          <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
                        </svg>
                        <span>Chaitanya Bharathi Institute of Technology (2024 - 2028)</span>
                      </div>
                    </div>
                  </div>

                  {/* Skills Chips (max 10) */}
                  <div className="space-y-3">
                    <h4 className="font-mono text-[12px] tracking-[5px] uppercase text-[rgba(255,170,80,0.8)] font-semibold">
                      TOOLKIT MASTERED
                    </h4>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {['C++', 'Python', 'Java', 'JavaScript', 'React.js', 'Node.js', 'Express.js', 'MySQL', 'MongoDB', 'Git'].map((skill) => (
                        <span
                          key={skill}
                          className="font-sans text-xs h-[42px] px-[18px] flex items-center bg-[rgba(255,255,255,0.03)] text-[#C9B7A4]/90 rounded-lg cursor-default border hover:border-[#FFAA50]/30 hover:text-[#F5F1EB] hover:-translate-y-[2px] hover:shadow-[0_8px_20px_rgba(255,170,80,0.08)] transition-all duration-300"
                          style={{ border: "1px solid rgba(255,170,80,0.12)" }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Journey Connections / Social Links */}
                  <div className="space-y-3">
                    <h4 className="font-mono text-[12px] tracking-[5px] uppercase text-[rgba(255,170,80,0.8)] font-semibold">
                      JOURNEY CONNECTIONS
                    </h4>
                    <div className="flex flex-wrap gap-4 items-center mt-4">
                      <div className="flex gap-3">
                        <a
                          href="https://github.com/gdhanushkumar07"
                          target="_blank"
                          rel="noreferrer"
                          className="w-10 h-10 rounded-full border border-[#C9B7A4]/15 bg-[#C9B7A4]/[0.02] hover:bg-[#E18A42]/5 hover:border-[#E18A42]/50 flex items-center justify-center text-[#C9B7A4]/60 hover:text-[#E18A42] transition-all duration-300 shadow-sm"
                          aria-label="GitHub"
                        >
                          <Github className="w-4.5 h-4.5" />
                        </a>
                        <a
                          href="https://www.linkedin.com/in/g-dhanush-kumar-8b4b48334"
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
                      <a
                        href="/Dhanush-resume.pdf"
                        target="_blank"
                        rel="noreferrer"
                        className="cursor-pointer border border-[#E18A42]/30 bg-[#E18A42]/5 hover:bg-[#E18A42]/10 hover:border-[#E18A42]/60 px-5 py-2.5 rounded-xl text-xs font-mono text-[#E18A42] uppercase tracking-wider flex items-center gap-2 transition-all duration-300"
                      >
                        <FileText className="w-3.5 h-3.5" />
                        <span>Resume</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Bottom Motto Footer */}
                <div className="pt-5 mt-6 flex flex-col items-center" style={{ borderTop: "1px solid rgba(255,170,80,0.08)" }}>
                  <p className="font-mono text-[9px] sm:text-[10px] text-[#C9B7A4]/40 uppercase tracking-[0.3em] select-none text-center">
                    Curiosity today. Impact tomorrow.
                  </p>
                </div>
              </motion.div>

            </motion.div>
          </motion.div>
        </div>

        {/* Small Achievement Strip (Horizontal Row, exactly 4 achievements) */}
        <motion.div 
          className="mt-16 border-t border-[rgba(255,170,80,0.06)] pt-12 max-w-[1050px] mx-auto w-full"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <span className="font-mono text-[10px] text-[#FFAA50]/60 tracking-[0.25em] uppercase block mb-8 text-center font-medium">
            ACHIEVEMENTS UNLOCKED
          </span>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-stretch justify-center">
            {[
              { badge: "🎖️", title: "AI For Bharat Finalist", desc: "National Hackathon" },
              { badge: "🥈", title: "Adobe India Hackathon", desc: "Whiteboard Sync Project" },
              { badge: "💻", title: "200+ LeetCode Problems", desc: "Algorithmic Ascent" },
              { badge: "🎯", title: "9.60 CGPA CSE", desc: "CBIT Batch Distinction" }
            ].map((ach, idx) => (
              <div 
                key={idx} 
                className="rounded-2xl p-4 flex flex-col items-center justify-center text-center border transition-all duration-300 hover:border-[rgba(255,170,80,0.20)] bg-[rgba(255,255,255,0.01)]"
                style={{
                  border: "1px solid rgba(255,170,80,0.08)"
                }}
              >
                <span className="text-2xl mb-2 filter drop-shadow-[0_0_8px_rgba(255,170,80,0.25)]">{ach.badge}</span>
                <h4 className="font-sans text-xs font-semibold text-[#F5F1EB]">{ach.title}</h4>
                <span className="font-mono text-[9px] text-[#C9B7A4]/50 uppercase tracking-wider mt-1 block">{ach.desc}</span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
