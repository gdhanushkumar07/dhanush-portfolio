"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, FileText, ArrowRight, Twitter } from 'lucide-react';

/* ══════════════════════════════════════════════
   CUSTOM BRAND ICONS MATCHING THE REFERENCE IMAGE
   ══════════════════════════════════════════════ */
const ChestIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 10C3 7 6 5 12 5C18 5 21 7 21 10H3Z" fill="#A88243" />
    <rect x="3" y="10" width="18" height="9" rx="1" fill="#8E6A2F" />
    <rect x="11" y="9" width="2" height="3.5" fill="#E6C029" rx="0.5" />
    <line x1="6" y1="5" x2="6" y2="19" stroke="#5E431B" strokeWidth="1" />
    <line x1="18" y1="5" x2="18" y2="19" stroke="#5E431B" strokeWidth="1" />
  </svg>
);

/* ══════════════════════════════════════════════
   PARCHMENT / SAGE GRADIENT BACKGROUND SYSTEM
   ══════════════════════════════════════════════ */
const ParchmentBackground = () => (
  <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0 bg-[#EFF5E8]">
    {/* Faint paper texture */}
    <div
      className="absolute inset-0 opacity-[0.025] pointer-events-none mix-blend-overlay z-0"
      style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }}
    />
  </div>
);

/* ══════════════════════════════════════════════
   MAIN EXPORT
   ══════════════════════════════════════════════ */
export default function Contact() {
  const cardsData = [
    {
      name: "Resume",
      href: "/Dhanush-resume.pdf",
      label: "Full adventure log.",
      actionText: "LOOT",
      icon: <ChestIcon />,
      btnStyle: "bg-[#FFF9EA] text-[#C29D38] hover:bg-[#FFF3D2] border-[#F7EAC4]",
      borderColor: "border-[#EDE8D8]"
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/g-dhanush-kumar-8b4b48334",
      label: "Join the party.",
      actionText: "CONNECT",
      icon: <Linkedin className="w-8 h-8 text-[#0A66C2]" fill="#0A66C2" />,
      btnStyle: "bg-[#EDF5FF] text-[#0A66C2] hover:bg-[#DCEBFF] border-[#D4E6FC]",
      borderColor: "border-[#E2EAF4]"
    },
    {
      name: "Email",
      href: "mailto:gdhanushkumar19@gmail.com",
      label: "Send a raven.",
      actionText: "MESSAGE",
      icon: <Mail className="w-8 h-8 text-[#E65F2B]" />,
      btnStyle: "bg-[#FFF0EB] text-[#E65F2B] hover:bg-[#FFE0D5] border-[#FCD6C9]",
      borderColor: "border-[#F5ECE8]"
    },
    {
      name: "GitHub",
      href: "https://github.com/gdhanushkumar07",
      label: "Explore the forge.",
      actionText: "FORGE",
      icon: <Github className="w-8 h-8 text-[#24292E]" fill="#24292E" />,
      btnStyle: "bg-[#F5F5F5] text-[#24292E] hover:bg-[#EAEAEA] border-[#E5E5E5]",
      borderColor: "border-[#EAEAEA]"
    },
  ];

  const socialLinks = [
    { name: "LinkedIn", href: "https://www.linkedin.com/in/g-dhanush-kumar-8b4b48334", icon: <Linkedin className="w-4 h-4" /> },
    { name: "Email", href: "mailto:gdhanushkumar19@gmail.com", icon: <Mail className="w-4 h-4" /> },
    { name: "GitHub", href: "https://github.com/gdhanushkumar07", icon: <Github className="w-4 h-4" /> },
    { name: "Twitter", href: "https://github.com/gdhanushkumar07", icon: <Twitter className="w-4 h-4" /> },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const }
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden flex flex-col justify-between min-h-[90vh] z-10 bg-[#EFF5E8] optimize-section-contact"
    >
      {/* Light Pale Green / Cream Section */}
      <div className="relative flex-grow flex flex-col justify-center py-24 px-6 sm:px-10 z-10 w-full">
        <ParchmentBackground />

        <div className="max-w-[1020px] mx-auto relative z-10 w-full flex flex-col items-center gap-14">
          
          {/* HEADER SECTION */}
          <div className="flex flex-col items-center text-center select-none max-w-[600px] mx-auto px-4">
            <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-[#b59c77] mb-3 block">
              TREASURE FOUND
            </span>
            <h2 className="font-serif text-2xl sm:text-3.5xl md:text-4.5xl font-extrabold text-[#1B4314] tracking-tight mb-4 leading-tight">
              Let&apos;s Connect
            </h2>
            <p className="font-sans text-[12px] sm:text-[14px] leading-relaxed text-[#8FA282] tracking-wide font-medium">
              take what you need, adventurer.
            </p>
          </div>

          {/* CONTACT CARDS GRID (4 Columns) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full"
          >
            {cardsData.map((card) => (
              <motion.a
                key={card.name}
                href={card.href}
                target="_blank"
                rel="noreferrer"
                variants={itemVariants}
                className={`group relative flex flex-col items-center justify-between p-7.5 py-9 rounded-2xl border bg-white ${card.borderColor} shadow-[0_5px_20px_rgba(42,32,28,0.015)] hover:-translate-y-2 hover:shadow-[0_15px_35px_rgba(42,32,28,0.06)] transition-all duration-300 ease-out cursor-pointer select-none`}
              >
                {/* Large Icon Container */}
                <div className="w-14 h-14 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  {card.icon}
                </div>

                {/* Card Labels */}
                <div className="text-center my-6 flex-grow flex flex-col justify-center">
                  <span className="font-serif text-[18px] text-[#1B4314] font-extrabold block mb-1">
                    {card.name}
                  </span>
                  <span className="font-sans text-[11px] text-[#A2AE99] font-medium leading-normal block">
                    {card.label}
                  </span>
                </div>

                {/* Pill Action Button */}
                <div className={`inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full border ${card.btnStyle} transition-all duration-300 font-sans text-[10.5px] font-extrabold tracking-wider`}>
                  <span>{card.actionText}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* DARK FOREST GREEN / BLACK BOTTOM TRANSITION ZONE */}
      <div className="w-full bg-[#051007] py-16 flex flex-col items-center justify-center gap-6 relative select-none z-10 border-t border-[#0A200F]">
        
        {/* Glow behind mini campfire */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-40 rounded-full pointer-events-none opacity-25 filter blur-2xl bg-orange-500/20" />

        {/* Enlarge Campfire Illustration */}
        <div className="relative w-14 h-14 z-10">
          <svg className="w-full h-full overflow-visible" viewBox="0 0 32 32" fill="none">
            {/* Wooden crossed logs */}
            <line x1="6" y1="26" x2="26" y2="22" stroke="#4A342B" strokeWidth="3" strokeLinecap="round" />
            <line x1="26" y1="26" x2="6" y2="22" stroke="#4A342B" strokeWidth="3" strokeLinecap="round" />
            <line x1="16" y1="27" x2="16" y2="20" stroke="#3D291F" strokeWidth="3.5" strokeLinecap="round" />
            
            {/* Detailed Flicker Flames */}
            <motion.path 
              d="M16 4C16 4 12 11 12 17C12 21 14 24 16 24C18 24 20 21 20 17C20 11 16 4 16 4Z" 
              fill="#FF3D00" 
              animate={{ scaleY: [1, 1.15, 0.95, 1.1, 1], scaleX: [1, 1.05, 0.95, 1.05, 1], y: [0, -1, 0.5, -0.5, 0] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.path 
              d="M16 9C16 9 13.5 14 13.5 18C13.5 20.5 14.5 22.5 16 22.5C17.5 22.5 18.5 20.5 18.5 18C18.5 14 16 9 16 9Z" 
              fill="#FF9100" 
              animate={{ scaleY: [1, 1.2, 0.9, 1.15, 1], scaleX: [1, 1.08, 0.92, 1.04, 1], y: [0, -0.5, 0.3, -0.3, 0] }}
              transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut", delay: 0.1 }}
            />
            <motion.path 
              d="M16 14C16 14 14.5 17 14.5 20C14.5 21.5 15 22.5 16 22.5C17 22.5 17.5 21.5 17.5 20C17.5 17 16 14 16 14Z" 
              fill="#FFEA00" 
              animate={{ scaleY: [1, 1.25, 0.85, 1.18, 1] }}
              transition={{ duration: 0.9, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
            />
          </svg>
        </div>

        {/* Circular social icons row */}
        <div className="flex items-center gap-3 z-10">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-full border border-emerald-950/40 bg-emerald-950/10 flex items-center justify-center text-emerald-800/50 hover:text-amber-500 hover:border-amber-500/40 hover:bg-emerald-950/20 transition-all duration-300"
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Callback Monospace message */}
        <span className="font-mono text-[9px] text-emerald-800/40 uppercase tracking-[0.25em] z-10">
          the adventure never ends.
        </span>
      </div>
    </section>
  );
}
