"use client";

import React from 'react';
import { motion } from 'framer-motion';

/* ══════════════════════════════════════════════
   LEGENDARY RELICS DATA
══════════════════════════════════════════════ */
const relics = [
  {
    id: 1,
    tier: "LEGENDARY RELIC",
    tierColor: "#D4AF37",
    tierGlow: "rgba(212,175,55,0.22)",
    pedestalColor: "rgba(212,175,55,0.08)",
    relicName: "Champion's Medal",
    relicIcon: (
      <svg width="40" height="40" viewBox="0 0 56 56" fill="none" stroke="#D4AF37" strokeWidth="1.1" strokeLinecap="round">
        <path d="M16 48 H40 M21 44 H35" />
        <path d="M28 44 V34" />
        <path d="M14 10 H42 V26 C42 36 35 40 28 40 C21 40 14 36 14 26 Z" />
        <path d="M14 14 C6 14 6 24 14 24" />
        <path d="M42 14 C50 14 50 24 42 24" />
        <path d="M28 18 L30 23 L35 23 L31 26 L33 31 L28 28 L23 31 L25 26 L21 23 L26 23 Z" fill="#D4AF37" opacity="0.5" stroke="none" />
      </svg>
    ),
    title: "Dev Duel — Rank 36",
    organization: "IIT Hyderabad · Elan & nVision",
    date: "Feb 2026",
    detail: "Secured All-India Rank 36 among hundreds of professional engineering teams in a high-stakes algorithmic sprint at IIT Hyderabad's prestigious technical fest.",
    seal: "ALL-INDIA RANK 36",
    featured: true,
    wallEngraving: "ALGORITHMS · COGNITION · PRECISION",
  },
  {
    id: 2,
    tier: "GOLDEN COMPASS TROPHY",
    tierColor: "#E18A42",
    tierGlow: "rgba(225,138,66,0.22)",
    pedestalColor: "rgba(225,138,66,0.08)",
    relicName: "Golden Compass Trophy",
    relicIcon: (
      <svg width="40" height="40" viewBox="0 0 56 56" fill="none" stroke="#E18A42" strokeWidth="1.1" strokeLinecap="round">
        <circle cx="28" cy="28" r="22" />
        <circle cx="28" cy="28" r="12" />
        <circle cx="28" cy="28" r="4" fill="#E18A42" opacity="0.5" stroke="none" />
        <path d="M28 6 L31 20 L28 24 L25 20 Z" fill="#E18A42" opacity="0.8" stroke="none" />
        <path d="M28 50 L31 36 L28 32 L25 36 Z" fill="#E18A42" opacity="0.35" stroke="none" />
        <path d="M6 28 L20 31 L24 28 L20 25 Z" fill="#E18A42" opacity="0.35" stroke="none" />
        <path d="M50 28 L36 31 L32 28 L36 25 Z" fill="#E18A42" opacity="0.7" stroke="none" />
        <path d="M28 6 V10 M28 46 V50 M6 28 H10 M46 28 H50" strokeWidth="0.6" />
      </svg>
    ),
    title: "AI For Bharat — Winner",
    organization: "National Hackathon · ContentIQ",
    date: "Mar 2026",
    detail: "Won the AI For Bharat National Hackathon with ContentIQ — an AI-powered media creation platform leveraging AWS Bedrock and serverless pipelines for intelligent content generation.",
    seal: "NATIONAL CHAMPION",
    featured: true,
    wallEngraving: "INTELLIGENCE · CREATION · IMPACT",
  },
  {
    id: 3,
    tier: "KNOWLEDGE SEAL",
    tierColor: "#5E9E5E",
    tierGlow: "rgba(94,158,94,0.22)",
    pedestalColor: "rgba(94,158,94,0.08)",
    relicName: "Knowledge Seal",
    relicIcon: (
      <svg width="36" height="36" viewBox="0 0 52 52" fill="none" stroke="#5E9E5E" strokeWidth="1.1" strokeLinecap="round">
        <path d="M12 46 C8 46 6 44 6 40 L6 12 C6 8 8 6 12 6 L40 6 C44 6 46 8 46 12 V40 C46 44 44 46 40 46 Z" />
        <path d="M6 12 C6 8 8 6 12 6 L12 46 C8 46 6 44 6 40 Z" fill="#5E9E5E" opacity="0.12" stroke="none" />
        <path d="M18 18 H38 M18 24 H38 M18 30 H30" />
        <circle cx="37" cy="38" r="6" fill="#5E9E5E" opacity="0.15" />
        <path d="M37 35 L38 37 L40 37 L38 39 L39 41 L37 40 L35 41 L36 39 L34 37 L36 37 Z" fill="#5E9E5E" opacity="0.8" stroke="none" />
      </svg>
    ),
    title: "Data Science Foundation",
    organization: "Infosys Springboard",
    date: "Feb 2026",
    detail: "Certified in analytical modeling, regression metrics, statistical transformations, and programmatic data visualization using Pandas, NumPy, and Matplotlib.",
    seal: "CERTIFIED EXPLORER",
    featured: false,
    wallEngraving: "DATA · ANALYSIS · INSIGHT",
  },
  {
    id: 4,
    tier: "EXPLORER EMBLEM",
    tierColor: "#8B7355",
    tierGlow: "rgba(139,115,85,0.22)",
    pedestalColor: "rgba(139,115,85,0.08)",
    relicName: "Explorer Emblem",
    relicIcon: (
      <svg width="36" height="36" viewBox="0 0 52 52" fill="none" stroke="#8B7355" strokeWidth="1.1" strokeLinecap="round">
        <circle cx="26" cy="26" r="22" />
        <path d="M26 6 V12 M26 40 V46 M6 26 H12 M40 26 H46" strokeWidth="0.8" />
        <circle cx="26" cy="26" r="6" />
        <path d="M26 6 L30 22 L26 26 L22 22 Z" fill="#8B7355" opacity="0.6" stroke="none" />
        <path d="M26 46 L30 30 L26 26 L22 30 Z" fill="#8B7355" opacity="0.25" stroke="none" />
        <path d="M6 26 L22 30 L26 26 L22 22 Z" fill="#8B7355" opacity="0.25" stroke="none" />
        <path d="M46 26 L30 30 L26 26 L30 22 Z" fill="#8B7355" opacity="0.5" stroke="none" />
      </svg>
    ),
    title: "Adobe India Hackathon",
    organization: "Team Binary Brains",
    date: "Jan 2026",
    detail: "Built a real-time shared vector whiteboard synchronizer ensuring minimal lag across distributed clients — showcased at Adobe India's competitive design hackathon.",
    seal: "EXPEDITION PARTICIPANT",
    featured: false,
    wallEngraving: "DESIGN · SYNC · CREATIVITY",
  },
];

/* ══════════════════════════════════════════════
   HALL AMBIENT DECORATIONS
══════════════════════════════════════════════ */
const HallDecorations = () => (
  <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0">
    {/* Hall wall pillars — vertical architectural lines */}
    <svg className="absolute left-0 top-0 h-full w-16 opacity-[0.04]" viewBox="0 0 64 800" preserveAspectRatio="none" fill="none" stroke="#FFAA50" strokeWidth="0.5">
      <line x1="8" y1="0" x2="8" y2="800" /><line x1="20" y1="0" x2="20" y2="800" /><line x1="32" y1="0" x2="32" y2="800" />
    </svg>
    <svg className="absolute right-0 top-0 h-full w-16 opacity-[0.04]" viewBox="0 0 64 800" preserveAspectRatio="none" fill="none" stroke="#FFAA50" strokeWidth="0.5">
      <line x1="32" y1="0" x2="32" y2="800" /><line x1="44" y1="0" x2="44" y2="800" /><line x1="56" y1="0" x2="56" y2="800" />
    </svg>

    {/* Expedition banners — hanging from top */}
    {[{ x: "10%" }, { x: "25%" }, { x: "75%" }, { x: "90%" }].map((pos, i) => (
      <svg key={i} className="absolute top-0 w-3 h-16 opacity-[0.06]" style={{ left: pos.x }} viewBox="0 0 12 64" fill="none" stroke="#FFAA50" strokeWidth="0.8">
        <line x1="6" y1="0" x2="6" y2="64" />
        <path d="M6 8 L12 16 L6 24 L0 16 Z" fill="#FFAA50" opacity="0.5" />
      </svg>
    ))}

    {/* Golden coin scatter */}
    {[
      { x: "4%", y: "20%" }, { x: "94%", y: "35%" }, { x: "8%", y: "65%" },
      { x: "92%", y: "72%" }, { x: "50%", y: "5%" }, { x: "3%", y: "48%" },
    ].map((pos, i) => (
      <svg key={i} className="absolute w-3 h-3" style={{ left: pos.x, top: pos.y, opacity: 0.1 }}>
        <circle cx="6" cy="6" r="5" fill="#C6930A" />
        <circle cx="6" cy="6" r="3" fill="none" stroke="#FFD700" strokeWidth="0.5" />
      </svg>
    ))}

    {/* Ancient wall engraving ornaments */}
    <svg className="absolute top-[8%] left-[7%] w-10 h-10 opacity-[0.06]" viewBox="0 0 40 40" fill="none" stroke="#FFAA50" strokeWidth="0.8">
      <circle cx="20" cy="20" r="16" /><path d="M20 4 V36 M4 20 H36" strokeDasharray="2,4" opacity="0.5" />
      <circle cx="20" cy="20" r="4" />
    </svg>
    <svg className="absolute top-[8%] right-[7%] w-10 h-10 opacity-[0.06]" viewBox="0 0 40 40" fill="none" stroke="#FFAA50" strokeWidth="0.8">
      <circle cx="20" cy="20" r="16" /><path d="M20 4 V36 M4 20 H36" strokeDasharray="2,4" opacity="0.5" />
      <circle cx="20" cy="20" r="4" />
    </svg>

    {/* Ambient amber glow */}
    <div className="absolute top-[15%] left-[8%] w-72 h-72 rounded-full"
      style={{ background: "radial-gradient(circle, rgba(212,175,55,0.055) 0%, transparent 70%)", filter: "blur(50px)" }} />
    <div className="absolute bottom-[15%] right-[8%] w-72 h-72 rounded-full"
      style={{ background: "radial-gradient(circle, rgba(225,138,66,0.05) 0%, transparent 70%)", filter: "blur(50px)" }} />

    {/* Twinkling stars */}
    {[
      { x: "7%", y: "10%" }, { x: "91%", y: "15%" }, { x: "14%", y: "82%" },
      { x: "88%", y: "78%" }, { x: "50%", y: "4%" }, { x: "28%", y: "94%" },
      { x: "72%", y: "90%" },
    ].map((pos, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 rounded-full bg-[#FFAA50]"
        style={{ left: pos.x, top: pos.y, opacity: 0.12 }}
        animate={{ opacity: [0.06, 0.2, 0.06] }}
        transition={{ duration: 3.5 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
      />
    ))}

    {/* Vignette */}
    <div className="absolute inset-0"
      style={{ background: "radial-gradient(ellipse at center, transparent 30%, rgba(10,7,5,0.65) 100%)" }} />
  </div>
);

/* ══════════════════════════════════════════════
   FEATURED LEGEND PEDESTAL (Large)
══════════════════════════════════════════════ */
const FeaturedPedestal = ({ relic, delay }: { relic: typeof relics[0]; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1], delay }}
    className="relative rounded-[22px] overflow-hidden group"
    style={{
      background: "rgba(28,20,14,0.92)",
      border: `1px solid ${relic.tierColor}28`,
      boxShadow: `0 24px 70px rgba(0,0,0,0.35), 0 0 50px ${relic.tierColor}08`,
    }}
  >
    {/* Hover glow */}
    <div
      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-[22px]"
      style={{ background: `radial-gradient(ellipse at top left, ${relic.tierGlow}, transparent 60%)` }}
    />
    {/* Top accent */}
    <div className="absolute top-0 left-0 right-0 h-px"
      style={{ background: `linear-gradient(to right, transparent, ${relic.tierColor}65, transparent)` }} />
    {/* Wall engraving strip */}
    <div className="absolute top-0 left-0 right-0 h-7 flex items-center justify-center"
      style={{ background: `${relic.tierColor}08`, borderBottom: `1px solid ${relic.tierColor}15` }}>
      <span className="font-mono text-[7px] tracking-[0.4em] uppercase" style={{ color: `${relic.tierColor}50` }}>
        {relic.wallEngraving}
      </span>
    </div>
    {/* Corner flourish */}
    <svg className="absolute top-7 right-3 w-8 h-8 opacity-15" viewBox="0 0 30 30" fill="none" stroke={relic.tierColor} strokeWidth="0.8">
      <path d="M2 2 Q2 28 28 28" /><path d="M8 2 Q8 22 28 22" />
    </svg>

    <div className="relative z-10 p-8 pt-10">
      {/* Tier badge */}
      <div className="flex items-center justify-between mb-6">
        <span
          className="font-mono text-[8.5px] tracking-[0.25em] uppercase px-3 py-1.5 rounded-lg font-bold"
          style={{ color: relic.tierColor, background: `${relic.tierColor}16`, border: `1px solid ${relic.tierColor}38` }}
        >
          ✦ {relic.tier}
        </span>
        <span className="font-mono text-[8.5px] text-[#C9B7A4]/35 uppercase tracking-widest">{relic.date}</span>
      </div>

      <div className="flex items-start gap-6">
        {/* Pedestal + Relic icon */}
        <div className="flex flex-col items-center gap-2 flex-shrink-0">
          <div
            className="w-18 h-18 w-[72px] h-[72px] rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-105"
            style={{
              background: relic.pedestalColor,
              border: `1.5px solid ${relic.tierColor}38`,
              boxShadow: `0 0 24px 6px ${relic.tierGlow}`,
            }}
          >
            {relic.relicIcon}
          </div>
          {/* Pedestal base */}
          <div className="text-center">
            <span className="font-serif text-[9px] italic block" style={{ color: relic.tierColor, opacity: 0.7 }}>
              {relic.relicName}
            </span>
          </div>
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="font-display text-xl md:text-[1.4rem] font-extrabold text-[#F5F1EB] tracking-tight leading-tight mb-1">
            {relic.title}
          </h3>
          <p className="font-mono text-[10.5px] mb-4 uppercase tracking-wider" style={{ color: relic.tierColor }}>
            {relic.organization}
          </p>
          <p className="font-sans text-[12.5px] text-[#C9B7A4]/75 leading-relaxed font-light">{relic.detail}</p>
        </div>
      </div>

      {/* Footer seal */}
      <div className="mt-6 pt-5 border-t border-[rgba(255,170,80,0.07)] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full" style={{ background: relic.tierColor }} />
          <span className="font-mono text-[8.5px] uppercase tracking-[0.2em] text-[#C9B7A4]/35">RELIC CLAIMED</span>
        </div>
        <span
          className="font-mono text-[8.5px] px-2.5 py-1 rounded-full"
          style={{ color: relic.tierColor, border: `1px solid ${relic.tierColor}28`, background: `${relic.tierColor}0C` }}
        >
          {relic.seal}
        </span>
      </div>
    </div>
  </motion.div>
);

/* ══════════════════════════════════════════════
   STANDARD LEGEND PEDESTAL
══════════════════════════════════════════════ */
const StandardPedestal = ({ relic, delay }: { relic: typeof relics[0]; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay }}
    className="relative rounded-[20px] overflow-hidden group"
    style={{
      background: "rgba(26,18,12,0.90)",
      border: `1px solid ${relic.tierColor}22`,
      boxShadow: "0 14px 50px rgba(0,0,0,0.28)",
    }}
  >
    {/* Hover glow */}
    <div
      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[20px]"
      style={{ background: `radial-gradient(ellipse at top, ${relic.tierGlow}, transparent 65%)` }}
    />
    {/* Wall engraving strip */}
    <div className="absolute top-0 left-0 right-0 h-6 flex items-center justify-center"
      style={{ background: `${relic.tierColor}06`, borderBottom: `1px solid ${relic.tierColor}12` }}>
      <span className="font-mono text-[6.5px] tracking-[0.35em] uppercase" style={{ color: `${relic.tierColor}45` }}>
        {relic.wallEngraving}
      </span>
    </div>
    {/* Top line */}
    <div className="absolute top-0 left-0 right-0 h-px"
      style={{ background: `linear-gradient(to right, transparent, ${relic.tierColor}50, transparent)` }} />

    <div className="relative z-10 p-6 pt-9">
      <div className="flex items-start justify-between mb-5">
        <div
          className="w-[52px] h-[52px] rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-105"
          style={{ background: relic.pedestalColor, border: `1.5px solid ${relic.tierColor}30`, boxShadow: `0 0 14px 3px ${relic.tierGlow}` }}
        >
          <div className="scale-[0.8]">{relic.relicIcon}</div>
        </div>
        <span
          className="font-mono text-[7.5px] tracking-[0.2em] uppercase px-2.5 py-1 rounded-lg ml-3"
          style={{ color: relic.tierColor, background: `${relic.tierColor}12`, border: `1px solid ${relic.tierColor}28` }}
        >
          {relic.tier}
        </span>
      </div>

      <h3 className="font-display text-[1rem] font-extrabold text-[#F5F1EB] tracking-tight mb-0.5">{relic.title}</h3>
      <p className="font-mono text-[9.5px] uppercase tracking-wider mb-3" style={{ color: relic.tierColor }}>{relic.organization}</p>
      <p className="font-sans text-[11.5px] text-[#C9B7A4]/68 leading-relaxed font-light">{relic.detail}</p>

      <div className="mt-5 pt-4 border-t border-[rgba(255,170,80,0.06)] flex items-center justify-between">
        <span className="font-mono text-[8px] text-[#C9B7A4]/30 uppercase tracking-widest">{relic.date}</span>
        <span className="font-mono text-[8px]" style={{ color: `${relic.tierColor}65` }}>✦ {relic.seal}</span>
      </div>
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
        background: "linear-gradient(to bottom, #2A1C12 0%, #1F140D 45%, #17110D 100%)",
      }}
    >
      {/* Grain */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Hall decorations */}
      <HallDecorations />

      <div className="max-w-[1100px] mx-auto px-6 md:px-10 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 select-none"
        >
          <span className="font-mono text-[10px] tracking-[8px] uppercase block mb-3" style={{ color: "rgba(255,170,80,0.6)" }}>
            04 / HALL OF LEGENDS
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-[2.6rem] font-extrabold text-[#F5F1EB] tracking-tight leading-tight mb-4">
            Legendary Relics of the Expedition
          </h2>
          <p className="font-sans text-[15px] text-[#C9B7A4]/65 max-w-[500px] mx-auto leading-relaxed">
            Each victory sealed in ancient stone — a permanent mark on the explorer&apos;s chronicle of discovery.
          </p>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[rgba(255,170,80,0.28)]" />
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#FFAA50" opacity="0.5">
              <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9Z" />
            </svg>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[rgba(255,170,80,0.28)]" />
          </div>
        </motion.div>

        {/* Featured Pedestals — 2 col */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {relics.filter((r) => r.featured).map((relic, i) => (
            <FeaturedPedestal key={relic.id} relic={relic} delay={i * 0.12} />
          ))}
        </div>

        {/* Standard Pedestals — 2 col */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {relics.filter((r) => !r.featured).map((relic, i) => (
            <StandardPedestal key={relic.id} relic={relic} delay={i * 0.1} />
          ))}
        </div>

        {/* Hall motto */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="text-center mt-16 select-none"
        >
          <div className="h-px w-28 bg-gradient-to-r from-transparent via-[rgba(255,170,80,0.18)] to-transparent mx-auto mb-4" />
          <p className="font-mono text-[8.5px] text-[#C9B7A4]/28 uppercase tracking-[0.4em]">
            Every relic a story · Every story a lesson · Every lesson a stepping stone
          </p>
        </motion.div>

      </div>

      {/* Bottom transition → Contact */}
      <div
        className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none z-10"
        style={{ background: "linear-gradient(to bottom, transparent 0%, #17110D 100%)" }}
      />
    </section>
  );
}
