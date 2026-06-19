"use client";

import React, { useEffect, useState, useRef } from 'react';
import { motion, useAnimationFrame } from 'framer-motion';
import { Mail, Github, Linkedin, FileText, Send, MapPin, Briefcase, Code2, ArrowUpRight } from 'lucide-react';

/* ══════════════════════════════════════════════
   HIGH-PERFORMANCE INTERACTIVE CHAMBER BACKGROUND
   ══════════════════════════════════════════════ */
const InteractiveBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [stars, setStars] = useState<{ x: number; y: number; size: number; delay: number }[]>([]);

  // Generate background stars/particles once on mount
  useEffect(() => {
    const generatedStars = Array.from({ length: 18 }).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 1.5 + 0.8,
      delay: Math.random() * -15,
    }));
    setStars(generatedStars);
  }, []);

  // Track mouse coordinates efficiently via CSS variables to prevent React re-renders
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      container.style.setProperty("--mouse-x", `${x}px`);
      container.style.setProperty("--mouse-y", `${y}px`);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0"
    >
      {/* Dynamic Cursor Spotlight Glow */}
      <div 
        className="absolute inset-0 transition-opacity duration-500 opacity-60 mix-blend-screen"
        style={{
          background: "radial-gradient(550px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(212, 175, 55, 0.05), transparent 80%)",
        }}
      />

      {/* Ambient static lighting */}
      <div 
        className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] rounded-full pointer-events-none mix-blend-screen opacity-[0.04]"
        style={{ background: "radial-gradient(circle, #FFAA50 0%, transparent 70%)" }}
      />
      <div 
        className="absolute bottom-[10%] right-[-10%] w-[600px] h-[600px] rounded-full pointer-events-none mix-blend-screen opacity-[0.03]"
        style={{ background: "radial-gradient(circle, #E18A42 0%, transparent 70%)" }}
      />

      {/* Astrolabe / Orrery Mechanics SVG */}
      <div className="absolute left-[8%] top-1/2 -translate-y-1/2 w-[350px] sm:w-[480px] h-[350px] sm:h-[480px] opacity-[0.035] transition-all">
        <svg viewBox="0 0 200 200" fill="none" stroke="#FDFAF5" strokeWidth="0.3" className="w-full h-full animate-[spin_360s_linear_infinite]">
          {/* Degree markings ring */}
          <circle cx="100" cy="100" r="95" />
          <circle cx="100" cy="100" r="90" strokeDasharray="0.5 1.5" />
          <circle cx="100" cy="100" r="85" />
          
          {/* Inner Zodiac/Constellation Ring */}
          <circle cx="100" cy="100" r="60" strokeDasharray="4 2" />
          <circle cx="100" cy="100" r="50" />
          
          {/* Geometric Alignment Arcs */}
          <path d="M 15 100 A 85 85 0 0 1 185 100" strokeWidth="0.15" />
          <path d="M 100 15 A 85 85 0 0 1 100 185" strokeWidth="0.15" />
          <path d="M 39.8 39.8 L 160.2 160.2" strokeWidth="0.1" strokeDasharray="1 1" />
          <path d="M 39.8 160.2 L 160.2 39.8" strokeWidth="0.1" strokeDasharray="1 1" />

          {/* Compass rose triangles */}
          <polygon points="100,5 103,85 97,85" fill="rgba(253,250,245,0.4)" stroke="none" />
          <polygon points="100,195 103,115 97,115" fill="rgba(253,250,245,0.15)" stroke="none" />
          <polygon points="5,100 85,103 85,97" fill="rgba(253,250,245,0.15)" stroke="none" />
          <polygon points="195,100 115,103 115,97" fill="rgba(253,250,245,0.4)" stroke="none" />
        </svg>
      </div>

      {/* Topographic Mapping & Navigation Lines SVG */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.02]" fill="none" stroke="#FDFAF5" strokeWidth="0.35">
        <defs>
          <pattern id="connectblueprint" width="80" height="80" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="80" y2="0" />
            <line x1="0" y1="0" x2="0" y2="80" />
            <circle cx="40" cy="40" r="1" fill="#FDFAF5" opacity="0.3" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#connectblueprint)" />

        {/* Topographic Contour Curves */}
        <path d="M-100,200 C150,150 250,450 500,300 C750,150 850,550 1200,400" />
        <path d="M-100,230 C150,180 250,480 500,330 C750,180 850,580 1200,430" strokeDasharray="2 3" />
        <path d="M-100,260 C150,210 250,510 500,360 C750,210 850,610 1200,460" />
        
        {/* Focus locator arcs */}
        <circle cx="85%" cy="65%" r="120" strokeDasharray="3 5" />
        <circle cx="85%" cy="65%" r="90" />
        <circle cx="85%" cy="65%" r="40" strokeDasharray="1 2" />
        <line x1="85%" y1="65%" x2="50%" y2="80%" strokeDasharray="2 4" />
      </svg>

      {/* Floating Dust / Star Particles */}
      {stars.map((star, idx) => (
        <motion.div
          key={idx}
          className="absolute rounded-full bg-[#FFAA50]"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
          }}
          animate={{
            y: [0, -45, 0],
            opacity: [0.03, 0.25, 0.03],
          }}
          transition={{
            duration: 10 + star.size * 5,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Bottom telemetry logs */}
      <div className="absolute right-8 bottom-8 opacity-[0.04] font-mono text-[7px] text-[#FDFAF5] tracking-[0.3em] uppercase select-none flex flex-col items-end gap-1">
        <span>GRID STATION // CONNECT.05</span>
        <span>LAT: 17.3700° N · LON: 78.4800° E</span>
      </div>
    </div>
  );
};

const CornerBrassScrew = ({ position }: { position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' }) => {
  const alignment = {
    'top-left': 'top-2.5 left-2.5',
    'top-right': 'top-2.5 right-2.5',
    'bottom-left': 'bottom-2.5 left-2.5',
    'bottom-right': 'bottom-2.5 right-2.5',
  }[position];

  return (
    <div className={`absolute w-2 h-2 rounded-full bg-[#1A1412] border border-amber-500/35 flex items-center justify-center pointer-events-none opacity-70 ${alignment}`}>
      <div className="w-[4px] h-[0.75px] bg-amber-500/50 rotate-45" />
    </div>
  );
};

/* ══════════════════════════════════════════════
   MAIN CONNECT SECTION
   ══════════════════════════════════════════════ */
export default function Contact() {
  const connectionCards = [
    {
      id: 'linkedin',
      title: 'LinkedIn',
      subtitle: 'Professional Hub',
      content: 'g-dhanush-kumar-8b4b48334',
      href: 'https://www.linkedin.com/in/g-dhanush-kumar-8b4b48334',
      icon: <Linkedin className="w-5 h-5 text-amber-500/80 group-hover:text-amber-400 transition-colors" />,
    },
    {
      id: 'github',
      title: 'GitHub',
      subtitle: 'Repository Vault',
      content: 'gdhanushkumar07',
      href: 'https://github.com/gdhanushkumar07',
      icon: <Github className="w-5 h-5 text-amber-500/80 group-hover:text-amber-400 transition-colors" />,
    },
    {
      id: 'leetcode',
      title: 'LeetCode',
      subtitle: 'Algorithmic Trial Ground',
      content: '200+ Solved · GDhanush_07',
      href: 'https://leetcode.com/u/GDhanush_07/',
      icon: <Code2 className="w-5 h-5 text-amber-500/80 group-hover:text-amber-400 transition-colors" />,
    },
    {
      id: 'email',
      title: 'Direct Dispatch',
      subtitle: 'Communication Channel',
      content: 'gdhanushkumar19@gmail.com',
      href: 'mailto:gdhanushkumar19@gmail.com',
      icon: <Mail className="w-5 h-5 text-amber-500/80 group-hover:text-amber-400 transition-colors" />,
    },
  ];

  const availabilityItems = [
    'Internships',
    'Freelance Projects',
    'Hackathons',
    'Collaborations'
  ];

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-32 flex flex-col justify-center min-h-[90vh]"
      style={{
        background: "linear-gradient(to bottom, #110E0B 0%, #15110E 50%, #0D0A08 100%)",
      }}
    >
      {/* Texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none mix-blend-overlay z-0"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }}
      />

      <InteractiveBackground />

      <div className="max-w-[1100px] mx-auto px-6 sm:px-10 relative z-10 w-full flex flex-col items-center">
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center mb-16 select-none">
          <span className="font-mono text-[9px] uppercase tracking-[0.35em] text-amber-500/60 mb-2 block">
            05 / Let&apos;s Connect
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#FDFAF5] tracking-tight text-center mb-4">
            Connect Station
          </h2>
          <div className="h-[1px] w-12 bg-amber-500/30 mb-4" />
          <p className="font-sans text-[14px] text-[#C9B7A4]/60 max-w-[460px] text-center leading-relaxed">
            Ready to collaborate on high-performance full-stack applications, serverless systems, and AI-powered products.
          </p>
        </div>

        {/* TWO-COLUMN PREMIUM BENTO GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full max-w-[1000px]">
          
          {/* LEFT BENTO CELL: Consolidated Commander Console */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 p-8 rounded-2xl border border-amber-950/45 bg-[#17120F]/90 shadow-2xl relative overflow-hidden flex flex-col justify-between"
            style={{
              boxShadow: "0 20px 45px rgba(0,0,0,0.5), inset 0 0 15px rgba(212,175,55,0.02)",
            }}
          >
            <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />
            <CornerBrassScrew position="top-left" />
            <CornerBrassScrew position="top-right" />
            <CornerBrassScrew position="bottom-left" />
            <CornerBrassScrew position="bottom-right" />

            <div>
              <div className="flex items-center gap-2.5 mb-6">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
                <span className="font-mono text-[9px] text-[#C9B7A4]/50 tracking-[0.2em] uppercase">SYSTEM ONLINE // CBIT HYD</span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-[#FDFAF5] tracking-tight mb-2">
                Golconda Dhanush Kumar
              </h3>
              
              <div className="font-mono text-[10px] text-amber-500/70 tracking-widest uppercase mb-6 flex flex-wrap items-center gap-x-2 gap-y-1">
                <span>Computer Science Undergrad</span>
                <span className="text-[#C9B7A4]/30">·</span>
                <span className="inline-flex items-center gap-0.5 text-[#C9B7A4]/60">
                  <MapPin className="w-3 h-3 text-amber-500/60" /> Hyderabad, India
                </span>
              </div>
              
              <p className="font-sans text-[13.5px] text-[#C9B7A4]/75 leading-relaxed mb-8">
                Mastering full-stack workflows, building telemedicine frameworks, and maintaining a continuous 9.60 CGPA. Hit me up for ambitious initiatives.
              </p>
            </div>

            <div className="space-y-6">
              {/* Availability Plaque */}
              <div className="p-4 rounded-xl border border-amber-950/40 bg-[#120E0C]/60">
                <span className="font-mono text-[8.5px] text-amber-500/70 tracking-wider uppercase font-bold flex items-center gap-1.5 mb-3">
                  <Briefcase className="w-3.5 h-3.5 text-amber-500/60" /> ACTIVE DESPATCH FOR:
                </span>
                <div className="flex flex-wrap gap-2">
                  {availabilityItems.map((item, idx) => (
                    <span 
                      key={idx} 
                      className="font-sans text-[11px] text-[#C9B7A4]/75 px-2.5 py-1 rounded bg-[#1D1714] border border-amber-950/50 flex items-center gap-1.5"
                    >
                      <span className="w-1 h-1 rounded-full bg-amber-500/50" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Main Mail CTA Button */}
              <a
                href="mailto:gdhanushkumar19@gmail.com"
                className="group relative w-full flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl border border-amber-600/40 bg-gradient-to-r from-[#201815] to-[#17120F] text-[#FDFAF5] font-mono text-[10px] font-bold uppercase tracking-wider hover:border-amber-500 transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.15)] overflow-hidden"
              >
                <div className="absolute inset-0 bg-amber-500/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <Send className="w-4 h-4 text-amber-500/80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                <span>Transmit Message</span>
              </a>
            </div>
          </motion.div>

          {/* RIGHT BENTO CELL: Social Grid & Download Deck */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Social Grid (2x2) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {connectionCards.map((card) => (
                <a
                  key={card.id}
                  href={card.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative p-5 rounded-xl border border-amber-950/45 bg-[#14100E]/85 hover:bg-[#1C1613] transition-all duration-300 hover:border-amber-600/40 hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(212,175,55,0.04)] flex flex-col justify-between min-h-[120px]"
                >
                  <CornerBrassScrew position="top-left" />
                  <CornerBrassScrew position="bottom-right" />
                  
                  <div className="flex items-start justify-between">
                    <div className="w-9 h-9 rounded-lg bg-[#1E1714] border border-amber-900/15 flex items-center justify-center group-hover:border-amber-500/25 group-hover:bg-[#28201B] transition-colors">
                      {card.icon}
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#C9B7A4]/30 group-hover:text-amber-500/70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                  
                  <div className="mt-4">
                    <span className="font-mono text-[8px] text-amber-500/50 uppercase tracking-widest block mb-0.5">
                      {card.subtitle}
                    </span>
                    <span className="font-serif text-sm text-[#FDFAF5] font-semibold block mb-1 group-hover:text-amber-400 transition-colors">
                      {card.title}
                    </span>
                    <span className="font-sans text-[11px] text-[#C9B7A4]/50 truncate block">
                      {card.content}
                    </span>
                  </div>
                </a>
              ))}
            </motion.div>

            {/* Resume Deck Panel */}
            <motion.a
              href="/Dhanush-resume.pdf"
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="group p-6 rounded-xl border border-amber-950/45 bg-[#14100E]/85 hover:bg-[#1C1613] transition-all duration-300 hover:border-amber-600/40 hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(212,175,55,0.04)] flex items-center justify-between cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1E1714] border border-amber-900/25 flex items-center justify-center group-hover:border-amber-500/30 group-hover:bg-[#28201B] transition-all">
                  <FileText className="w-5 h-5 text-amber-500/80 group-hover:scale-105 transition-transform" />
                </div>
                <div>
                  <h4 className="font-serif text-sm md:text-base text-[#FDFAF5] font-semibold group-hover:text-amber-400 transition-colors">
                    Dhanush-resume.pdf
                  </h4>
                  <p className="font-sans text-[11px] text-[#C9B7A4]/50 mt-0.5">
                    Download complete technical blueprint & credential archives
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 font-mono text-[9px] text-[#C9B7A4]/40 group-hover:text-amber-500/70 border border-amber-950/60 group-hover:border-amber-500/30 px-3 py-1.5 rounded-lg bg-[#110E0B] transition-all">
                <span>DOWNLOAD DECREE</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </motion.a>

          </div>

        </div>

        {/* Footer info logs */}
        <div className="text-center mt-20 select-none opacity-40">
          <div className="h-px w-20 bg-gradient-to-r from-transparent via-amber-500/25 to-transparent mx-auto mb-4" />
          <p className="font-mono text-[8px] text-[#C9B7A4]/40 uppercase tracking-[0.25em]">
            G Dhanush Kumar · Hyderabad, India · CBIT CSE
          </p>
        </div>
      </div>
    </section>
  );
}
