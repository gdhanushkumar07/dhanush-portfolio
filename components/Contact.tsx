"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, FileText, Send, MapPin, Briefcase } from 'lucide-react';

/* ══════════════════════════════════════════════
   CHAMBER BACKGROUND — Subtle blueprint map & compass rose
   ══════════════════════════════════════════════ */
const ChamberBackground = () => (
  <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0">
    {/* Background Compass Rose (Visual Anchor behind profile card) */}
    <div 
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.02] z-0"
      style={{ width: "650px", height: "650px" }}
    >
      <svg viewBox="0 0 200 200" fill="none" stroke="#FDFAF5" strokeWidth="0.4" className="w-full h-full animate-[spin_320s_linear_infinite]">
        <circle cx="100" cy="100" r="95" />
        <circle cx="100" cy="100" r="90" strokeDasharray="1 2" />
        <circle cx="100" cy="100" r="75" />
        <circle cx="100" cy="100" r="45" strokeDasharray="2 3" />
        
        <polygon points="100,10 104,90 96,90" fill="rgba(253,250,245,0.5)" stroke="none" />
        <polygon points="100,190 104,110 96,110" fill="rgba(253,250,245,0.2)" stroke="none" />
        <polygon points="10,100 90,104 90,96" fill="rgba(253,250,245,0.2)" stroke="none" />
        <polygon points="190,100 110,104 110,96" fill="rgba(253,250,245,0.5)" stroke="none" />

        <text x="100" y="24" textAnchor="middle" fontSize="10" fill="#FDFAF5" fontFamily="serif" fontWeight="bold">N</text>
        <text x="100" y="184" textAnchor="middle" fontSize="10" fill="#FDFAF5" fontFamily="serif" fontWeight="bold">S</text>
      </svg>
    </div>

    {/* Technical Blueprint layout */}
    <svg className="absolute inset-0 w-full h-full opacity-[0.015]" fill="none" stroke="#FDFAF5" strokeWidth="0.4">
      <defs>
        <pattern id="connectblueprint" width="120" height="120" patternUnits="userSpaceOnUse">
          <line x1="0" y1="0" x2="120" y2="0" />
          <line x1="0" y1="0" x2="0" y2="120" />
          <circle cx="60" cy="60" r="1" fill="#FDFAF5" opacity="0.3" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#connectblueprint)" />

      {/* Grid arcs and lines */}
      <circle cx="10%" cy="80%" r="60" strokeDasharray="2 3" />
      <path d="M120,80 Q320,160 520,80" strokeDasharray="3 3" />
      <circle cx="85%" cy="25%" r="75" />
      <line x1="5%" y1="90%" x2="95%" y2="90%" strokeDasharray="4 4" />
    </svg>

    {/* Subtle coordinates */}
    <div className="absolute left-6 bottom-8 opacity-[0.03] font-mono text-[7px] text-[#FDFAF5] select-none">
      COORD // 17.3700° N, 78.4800° E
    </div>
  </div>
);

/* ══════════════════════════════════════════════
   MAIN CONNECT SECTION
   ══════════════════════════════════════════════ */
export default function Contact() {
  const connectionCards = [
    {
      id: 'email',
      title: 'Email',
      content: 'Open communication channel',
      href: 'mailto:gdhanushkumar19@gmail.com',
      icon: <Mail className="w-4.5 h-4.5 text-amber-500/80" />,
    },
    {
      id: 'linkedin',
      title: 'LinkedIn',
      content: 'Professional network',
      href: 'https://linkedin.com/in/gdhanushkumar',
      icon: <Linkedin className="w-4.5 h-4.5 text-amber-500/80" />,
    },
    {
      id: 'github',
      title: 'GitHub',
      content: 'Code repositories & work',
      href: 'https://github.com/gdhanushkumar07',
      icon: <Github className="w-4.5 h-4.5 text-amber-500/80" />,
    },
    {
      id: 'resume',
      title: 'Resume',
      content: 'Complete professional record',
      href: '#',
      icon: <FileText className="w-4.5 h-4.5 text-amber-500/80" />,
    },
  ];

  const availabilityItems = [
    'Internships',
    'Freelance Projects',
    'Hackathons',
    'Collaborations'
  ];

  // Staggered variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const }
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-28 flex flex-col justify-center min-h-[70vh]"
      style={{
        background: "linear-gradient(to bottom, #110E0B 0%, #16120F 50%, #0D0B09 100%)",
      }}
    >
      {/* Texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay z-0"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }}
      />

      {/* Ambient glows */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none z-0"
        style={{
          background: "radial-gradient(circle, rgba(184,138,44,0.02) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <ChamberBackground />

      <div className="max-w-[840px] mx-auto px-6 relative z-10 w-full flex flex-col items-center">
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center mb-12 select-none">
          <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-amber-500/60 mb-2 block">
            05 / Let&apos;s Connect
          </span>
          <h2 className="font-display text-3xl font-extrabold text-[#FDFAF5] tracking-tight text-center mb-3">
            Connect
          </h2>
          <p className="font-sans text-[13.5px] text-[#C9B7A4]/60 max-w-[420px] text-center leading-relaxed">
            Open to internships, freelance work, collaborations, hackathons, and ambitious projects.
          </p>
        </div>

        {/* Bento/Centered Panel Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="w-full flex flex-col gap-6 items-center"
        >
          {/* Centered Profile Card */}
          <motion.div
            variants={itemVariants}
            className="w-full max-w-[550px] p-6 rounded-xl border border-amber-950/45 bg-[#17120F]/90 shadow-2xl relative overflow-hidden"
            style={{
              boxShadow: "0 15px 40px rgba(0,0,0,0.4)",
            }}
          >
            {/* Top border accent */}
            <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />

            <div className="flex flex-col items-center text-center">
              <h3 className="font-serif text-lg font-bold text-[#FDFAF5] tracking-tight mb-1">
                G Dhanush Kumar
              </h3>
              <p className="font-mono text-[9px] text-amber-500/70 tracking-widest uppercase mb-4 flex items-center gap-1.5 justify-center">
                Computer Science Student&nbsp;&nbsp;·&nbsp;&nbsp;
                <span className="inline-flex items-center gap-0.5 text-[#C9B7A4]/60">
                  <MapPin className="w-2.5 h-2.5 text-[#C9B7A4]/50" /> Hyderabad, India
                </span>
              </p>
              
              <p className="font-sans text-[12.5px] text-[#C9B7A4]/75 max-w-[380px] leading-relaxed">
                Building full-stack applications, AI-powered products, and scalable systems.
              </p>
            </div>
          </motion.div>

          {/* Availability horizontal block */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2.5 py-3 px-6 rounded-full border border-amber-950/35 bg-[#14100E]/40"
          >
            <span className="font-mono text-[8.5px] text-amber-500/70 tracking-wider uppercase font-bold flex items-center gap-1.5">
              <Briefcase className="w-3 h-3 text-amber-500/60" /> Available For:
            </span>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
              {availabilityItems.map((item, idx) => (
                <span key={idx} className="font-sans text-[11px] text-[#C9B7A4]/65 flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-amber-500/40" />
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Compact Connection Tiles */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-[680px] mt-4"
          >
            {connectionCards.map((card) => (
              <a
                key={card.id}
                href={card.href}
                target={card.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="group relative flex flex-col items-center p-4.5 rounded-xl border border-amber-950/40 bg-[#130F0D]/90 hover:bg-[#1A1411] transition-all duration-300 hover:border-amber-600/50 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(212,175,55,0.06)] cursor-pointer select-none text-center"
              >
                <div className="w-8.5 h-8.5 rounded-lg bg-[#1D1714] border border-amber-900/20 flex items-center justify-center mb-3 group-hover:border-amber-500/30 group-hover:bg-[#251E1A] transition-colors duration-300">
                  {card.icon}
                </div>
                
                <span className="font-serif text-[12px] text-[#FDFAF5] font-semibold block mb-0.5 group-hover:text-amber-400 transition-colors duration-300">
                  {card.title}
                </span>
                <span className="font-sans text-[9.5px] text-[#C9B7A4]/40 leading-normal">
                  {card.content}
                </span>
              </a>
            ))}
          </motion.div>

          {/* Direct CTA Signal */}
          <motion.div
            variants={itemVariants}
            className="mt-6"
          >
            <a
              href="mailto:gdhanushkumar19@gmail.com"
              className="group relative flex items-center gap-2 px-6 py-2.5 rounded-full border border-amber-600/40 bg-[#1D1714] text-[#FDFAF5] font-mono text-[9px] font-bold uppercase tracking-wider hover:bg-amber-600 hover:border-amber-500 transition-all duration-300 hover:shadow-[0_0_15px_rgba(212,175,55,0.2)]"
            >
              <Send className="w-3.5 h-3.5" />
              Start A Conversation
            </a>
          </motion.div>
        </motion.div>

        {/* Footer info logs */}
        <div className="text-center mt-16 select-none opacity-40">
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent mx-auto mb-3" />
          <p className="font-mono text-[7.5px] text-[#C9B7A4]/50 uppercase tracking-[0.25em]">
            G Dhanush Kumar · Hyderabad, India
          </p>
        </div>
      </div>
    </section>
  );
}
