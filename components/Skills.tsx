"use client";

import React from 'react';
import { motion } from 'framer-motion';

/* ══════════════════════════════════════════════
   ARSENAL DATA — Artifacts & Relics
══════════════════════════════════════════════ */
const arsenal = [
  {
    id: "languages",
    name: "Kingdom of Languages",
    subtitle: "The foundational scripts of every expedition",
    regionColor: "#C6930A",
    bgColor: "rgba(198,147,10,0.06)",
    borderColor: "rgba(198,147,10,0.22)",
    coord: "01·A",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M4 7V4h16v3" /><path d="M9 20h6" /><path d="M12 4v16" />
      </svg>
    ),
    artifacts: [
      { name: "Java", label: "Relic" },
      { name: "Python", label: "Tome" },
      { name: "C", label: "Ancient Script" },
      { name: "C++", label: "Relic" },
      { name: "JavaScript", label: "Scroll" },
      { name: "TypeScript", label: "Scroll" },
      { name: "SQL", label: "Codex" },
    ],
  },
  {
    id: "web",
    name: "Web Frontier",
    subtitle: "Territories of the modern interface world",
    regionColor: "#4A9E35",
    bgColor: "rgba(74,158,53,0.06)",
    borderColor: "rgba(74,158,53,0.22)",
    coord: "02·B",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2c-3 4-3 16 0 20M12 2c3 4 3 16 0 20" />
      </svg>
    ),
    artifacts: [
      { name: "React.js", label: "Beacon" },
      { name: "Node.js", label: "Engine" },
      { name: "Express.js", label: "Framework" },
      { name: "HTML5", label: "Blueprint" },
      { name: "CSS3", label: "Pigment" },
      { name: "Tailwind CSS", label: "Loom" },
    ],
  },
  {
    id: "cloud",
    name: "Cloud Citadel",
    subtitle: "Strongholds of deployment and infrastructure",
    regionColor: "#5A7FAA",
    bgColor: "rgba(90,127,170,0.06)",
    borderColor: "rgba(90,127,170,0.22)",
    coord: "03·C",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
      </svg>
    ),
    artifacts: [
      { name: "AWS S3", label: "Vault" },
      { name: "AWS Lambda", label: "Catalyst" },
      { name: "AWS Bedrock", label: "Oracle" },
      { name: "Docker", label: "Crate" },
      { name: "Git", label: "Compass" },
      { name: "GitHub", label: "Repository" },
      { name: "VS Code", label: "Workshop" },
      { name: "Postman", label: "Courier" },
    ],
  },
  {
    id: "data",
    name: "Data Observatory",
    subtitle: "Where patterns and intelligence are decoded",
    regionColor: "#8B6F9E",
    bgColor: "rgba(139,111,158,0.06)",
    borderColor: "rgba(139,111,158,0.22)",
    coord: "04·D",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    artifacts: [
      { name: "NumPy", label: "Array Relic" },
      { name: "Pandas", label: "Data Tome" },
      { name: "Matplotlib", label: "Lens" },
      { name: "Gemini API", label: "Oracle Stone" },
      { name: "Prompt Eng.", label: "Incantation" },
    ],
  },
  {
    id: "databases",
    name: "Engineer's Workshop",
    subtitle: "Ancient vaults of structured knowledge",
    regionColor: "#AA7A3A",
    bgColor: "rgba(170,122,58,0.06)",
    borderColor: "rgba(170,122,58,0.22)",
    coord: "05·E",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
        <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" />
      </svg>
    ),
    artifacts: [
      { name: "MySQL", label: "Vault" },
      { name: "MongoDB", label: "Chest" },
      { name: "Oracle DB", label: "Ancient Vault" },
    ],
  },
];

/* ══════════════════════════════════════════════
   MAP NAVIGATOR GRID BACKGROUND
══════════════════════════════════════════════ */
const MapGrid = () => (
  <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
    {/* Grid lines */}
    <svg className="w-full h-full opacity-[0.022]" preserveAspectRatio="none">
      <defs>
        <pattern id="arsgrid" width="90" height="90" patternUnits="userSpaceOnUse">
          <path d="M 90 0 L 0 0 0 90" fill="none" stroke="#5C4A3C" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#arsgrid)" />
    </svg>

    {/* Compass rose watermark */}
    <svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 opacity-[0.022]" viewBox="0 0 200 200" fill="none" stroke="#5C4A3C" strokeWidth="0.5">
      <circle cx="100" cy="100" r="90" /><circle cx="100" cy="100" r="60" /><circle cx="100" cy="100" r="10" />
      <path d="M100 10 L104 65 L100 85 L96 65 Z" fill="#5C4A3C" />
      <path d="M100 190 L104 135 L100 115 L96 135 Z" fill="#5C4A3C" opacity="0.5" />
      <path d="M10 100 L65 96 L85 100 L65 104 Z" fill="#5C4A3C" opacity="0.5" />
      <path d="M190 100 L135 96 L115 100 L135 104 Z" fill="#5C4A3C" />
    </svg>

    {/* Corner scroll flourishes */}
    {[
      "absolute top-4 left-4",
      "absolute top-4 right-4 scale-x-[-1]",
      "absolute bottom-4 left-4 scale-y-[-1]",
      "absolute bottom-4 right-4 scale-[-1]",
    ].map((cls, i) => (
      <svg key={i} className={`${cls} w-14 h-14 opacity-[0.055]`} viewBox="0 0 56 56" fill="none" stroke="#5C4A3C" strokeWidth="0.8">
        <path d="M4 52 Q4 4 52 4" /><path d="M4 52 Q10 52 10 46 Q10 10 46 10 Q52 10 52 4" />
      </svg>
    ))}

    {/* Small treasure chests scattered */}
    <svg className="absolute left-[6%] top-[25%] w-7 h-5 opacity-[0.055]" viewBox="0 0 28 20" fill="none" stroke="#8B6010" strokeWidth="0.8">
      <rect x="1" y="9" width="26" height="11" rx="1" /><path d="M1 9 Q14 3 27 9" /><circle cx="14" cy="12" r="1.5" fill="#C6930A" opacity="0.5" stroke="none" />
    </svg>
    <svg className="absolute right-[7%] bottom-[22%] w-7 h-5 opacity-[0.05]" viewBox="0 0 28 20" fill="none" stroke="#8B6010" strokeWidth="0.8">
      <rect x="1" y="9" width="26" height="11" rx="1" /><path d="M1 9 Q14 3 27 9" /><circle cx="14" cy="12" r="1.5" fill="#C6930A" opacity="0.5" stroke="none" />
    </svg>

    {/* X markers */}
    <svg className="absolute right-[14%] top-[12%] w-4 h-4 opacity-[0.07]" viewBox="0 0 16 16" fill="none" stroke="#8B2020" strokeWidth="2" strokeLinecap="round">
      <path d="M2 2L14 14M2 14L14 2" />
    </svg>
    <svg className="absolute left-[20%] bottom-[14%] w-4 h-4 opacity-[0.06]" viewBox="0 0 16 16" fill="none" stroke="#8B2020" strokeWidth="2" strokeLinecap="round">
      <path d="M2 2L14 14M2 14L14 2" />
    </svg>
  </div>
);

/* ══════════════════════════════════════════════
   ARTIFACT TOKEN
══════════════════════════════════════════════ */
const ArtifactToken = ({
  name,
  label,
  color,
}: {
  name: string;
  label: string;
  color: string;
}) => (
  <motion.div
    whileHover={{ y: -3, scale: 1.04 }}
    transition={{ duration: 0.15 }}
    className="flex flex-col items-center gap-0.5 cursor-default select-none"
  >
    <div
      className="px-3 py-2 rounded-xl text-center transition-all duration-200"
      style={{
        background: `${color}0C`,
        border: `1px solid ${color}28`,
        minWidth: "70px",
      }}
    >
      <span className="font-mono text-[10.5px] font-semibold text-[#2A1F14] block">{name}</span>
    </div>
    <span
      className="font-mono text-[7px] uppercase tracking-widest block"
      style={{ color: `${color}80` }}
    >
      {label}
    </span>
  </motion.div>
);

/* ══════════════════════════════════════════════
   TERRITORY PANEL
══════════════════════════════════════════════ */
const TerritoryPanel = ({
  territory,
  index,
}: {
  territory: typeof arsenal[0];
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 38, scale: 0.97 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true, margin: "-55px" }}
    transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: index * 0.07 }}
    className="relative rounded-2xl overflow-hidden group cursor-default"
    style={{
      background: "linear-gradient(140deg, #FDF8F0 0%, #EDE4D3 60%, #E6D8C0 100%)",
      border: `1.5px solid ${territory.borderColor}`,
      boxShadow: "0 8px 30px rgba(58,43,32,0.08), 0 2px 8px rgba(58,43,32,0.06)",
    }}
  >
    {/* Notebook lines */}
    <div
      className="absolute inset-0 pointer-events-none opacity-[0.028]"
      style={{
        backgroundImage: "linear-gradient(rgba(58,43,32,0.5) 1px, transparent 1px)",
        backgroundSize: "100% 24px",
        backgroundPosition: "0 14px",
      }}
    />
    {/* Top accent */}
    <div
      className="absolute top-0 left-0 right-0 h-0.5 opacity-60 group-hover:opacity-100 transition-opacity duration-400"
      style={{ background: `linear-gradient(to right, transparent, ${territory.regionColor}, transparent)` }}
    />
    {/* Aged corner */}
    <div className="absolute top-0 right-0 w-10 h-10 pointer-events-none"
      style={{ background: "linear-gradient(225deg, rgba(180,150,110,0.18) 0%, transparent 60%)" }} />

    {/* Hover glow */}
    <div
      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
      style={{ background: `radial-gradient(ellipse at top left, ${territory.bgColor}, transparent 65%)` }}
    />

    <div className="relative z-10 p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-105"
            style={{
              background: territory.bgColor,
              border: `1.5px solid ${territory.borderColor}`,
              color: territory.regionColor,
            }}
          >
            {territory.icon}
          </div>
          <div>
            <h3 className="font-serif text-[13px] font-bold italic text-[#2A1F14] leading-tight">{territory.name}</h3>
            <p className="font-sans text-[9.5px] text-[#8B6F58] mt-0.5 leading-relaxed">{territory.subtitle}</p>
          </div>
        </div>
        <span
          className="font-mono text-[8px] tracking-widest px-2 py-0.5 rounded flex-shrink-0"
          style={{ color: territory.regionColor, background: territory.bgColor, border: `1px solid ${territory.borderColor}` }}
        >
          {territory.coord}
        </span>
      </div>

      {/* Dotted divider */}
      <div className="flex items-center gap-2 mb-4">
        <div className="h-px flex-1" style={{ borderTop: `1px dashed ${territory.regionColor}28` }} />
        <svg width="8" height="8" viewBox="0 0 8 8" fill={territory.regionColor} opacity="0.45">
          <path d="M4 0L5 3L8 4L5 5L4 8L3 5L0 4L3 3Z" />
        </svg>
        <div className="h-px flex-1" style={{ borderTop: `1px dashed ${territory.regionColor}28` }} />
      </div>

      {/* Artifact tokens */}
      <div className="flex flex-wrap gap-2.5">
        {territory.artifacts.map((art) => (
          <ArtifactToken key={art.name} name={art.name} label={art.label} color={territory.regionColor} />
        ))}
      </div>

      {/* Footer */}
      <div className="mt-5 pt-3 border-t border-[#CDB38D]/22 flex items-center justify-between">
        <span className="font-mono text-[7.5px] text-[#8B6F58]/45 uppercase tracking-widest">TERRITORY CHARTED</span>
        <span className="font-mono text-[7.5px]" style={{ color: `${territory.regionColor}70` }}>
          ✦ {territory.artifacts.length} ARTIFACTS
        </span>
      </div>
    </div>
  </motion.div>
);

/* ══════════════════════════════════════════════
   MAIN SKILLS SECTION
══════════════════════════════════════════════ */
export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden py-24"
      style={{
        background: "linear-gradient(to bottom, #E8E0D0 0%, #E4DAC8 40%, #DDD4BC 100%)",
      }}
    >
      {/* Parchment noise */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none mix-blend-multiply z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Map grid */}
      <MapGrid />

      <div className="max-w-[1100px] mx-auto px-6 md:px-10 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14 select-none"
        >
          <span className="font-mono text-[10px] tracking-[8px] uppercase block text-[#8B6F58] mb-3">
            03 / EXPLORER&apos;S ARSENAL
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-[2.6rem] font-extrabold text-[#2A1F14] tracking-tight leading-tight mb-4">
            Tools Gathered Across the Journey
          </h2>
          <p className="font-sans text-[15px] text-[#7A6040] max-w-[500px] mx-auto leading-relaxed">
            Every territory explored left behind an artifact — a relic mastered, a scroll earned, a tool wielded.
          </p>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#8B6F58]/35" />
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8B6F58" strokeWidth="1.5" opacity="0.55">
              <circle cx="12" cy="12" r="10" />
              <polygon points="16.24,7.76 14.12,14.12 7.76,16.24 9.88,9.88" fill="#8B6F58" stroke="none" />
            </svg>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#8B6F58]/35" />
          </div>
        </motion.div>

        {/* Territory grid — 3 cols top, 2 cols bottom */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
          {arsenal.slice(0, 3).map((t, i) => (
            <TerritoryPanel key={t.id} territory={t} index={i} />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[700px] mx-auto">
          {arsenal.slice(3).map((t, i) => (
            <TerritoryPanel key={t.id} territory={t} index={i + 3} />
          ))}
        </div>

        {/* LeetCode — Legendary feat banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          className="mt-10 relative rounded-2xl overflow-hidden p-7"
          style={{
            background: "linear-gradient(140deg, #FDF8F0 0%, #EDE4D3 100%)",
            border: "1.5px solid rgba(139,111,88,0.24)",
            boxShadow: "0 8px 32px rgba(58,43,32,0.09)",
          }}
        >
          {/* Notebook lines */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.028]"
            style={{ backgroundImage: "linear-gradient(rgba(58,43,32,0.5) 1px, transparent 1px)", backgroundSize: "100% 24px" }} />

          <div className="flex flex-col md:flex-row items-center gap-6 relative z-10">
            <div
              className="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center"
              style={{ background: "rgba(198,147,10,0.1)", border: "1.5px solid rgba(198,147,10,0.28)" }}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C6930A" strokeWidth="1.5" strokeLinecap="round">
                <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9Z" />
              </svg>
            </div>
            <div className="flex-1 text-center md:text-left">
              <span className="font-mono text-[8.5px] uppercase tracking-[0.2em] text-[#8B6F58] block mb-1">✦ LEGENDARY FEAT UNLOCKED</span>
              <h4 className="font-serif text-xl font-bold italic text-[#2A1F14] mb-1">
                200+ Algorithmic Challenges Conquered
              </h4>
              <p className="font-sans text-[12px] text-[#7A6040] leading-relaxed">
                The proving grounds of LeetCode — daily expeditions into arrays, graphs, and dynamic programming.
              </p>
            </div>
            <a
              href="https://leetcode.com/"
              target="_blank"
              rel="noreferrer"
              className="flex-shrink-0 flex items-center gap-2 font-mono text-[10px] font-bold px-5 py-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
              style={{ background: "#3A2B20", color: "#F9F0E4" }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
              </svg>
              VIEW SOLUTIONS
            </a>
          </div>
        </motion.div>

      </div>

      {/* Bottom transition → Achievements dark */}
      <div
        className="absolute bottom-0 left-0 right-0 h-44 pointer-events-none z-10"
        style={{ background: "linear-gradient(to bottom, transparent 0%, #2A1C12 100%)" }}
      />
    </section>
  );
}
