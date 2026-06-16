"use client";

import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface HeroProps {
  onOpenCodex: () => void;
}

export default function Hero({ onOpenCodex }: HeroProps) {
  const [mounted, setMounted] = React.useState(false);

  // Programmatically generate 120 random stars in the upper sky
  const stars = useMemo(() => {
    if (!mounted) return [];
    return Array.from({ length: 120 }).map((_, i) => {
      const size = Math.random() * 2 + 1; // 1px to 3px
      const opacity = Math.random() * 0.6 + 0.2; // 20% to 80%
      const top = Math.random() * 65; // top 65% of viewport
      const left = Math.random() * 100; // 0% to 100%
      const duration = Math.random() * 3 + 3; // 3s to 6s
      const delay = Math.random() * 5; // 0s to 5s delay
      return { id: i, size, opacity, top, left, duration, delay };
    });
  }, [mounted]);

  // Programmatically generate 14 floating firefly particles drifting slowly and randomly
  const fireflies = useMemo(() => {
    if (!mounted) return [];
    return Array.from({ length: 14 }).map((_, i) => {
      const size = Math.random() * 2 + 1.5; // 1.5px to 3.5px
      const initialLeft = Math.random() * 80 + 10; // 10% to 90% across screen
      const initialTop = Math.random() * 30 + 55; // lower area of viewport (55% to 85%)
      const duration = Math.random() * 10 + 10; // very slow drift (10s to 20s)
      const delay = Math.random() * 6; // 0s to 6s delay
      const driftX = Math.random() * 120 - 60; // horizontal drift -60px to 60px
      const driftY = Math.random() * 150 - 250; // vertical rise -250px to -100px
      return { id: i, size, initialLeft, initialTop, duration, delay, driftX, driftY };
    });
  }, [mounted]);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Animation variants for staggered text entry
  const containerVariants: import('framer-motion').Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.8,
      },
    },
  };

  const textItemVariants: import('framer-motion').Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const landscapeVariants = (delay: number): import('framer-motion').Variants => ({
    hidden: { opacity: 0, y: 120 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.5,
        delay: delay,
        ease: [0.16, 1, 0.3, 1] as any, // easeOutExponential
      },
    },
  });

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden px-6 select-none bg-gradient-to-b from-[#020B24] via-[#041A4D] to-[#071D42]"
    >
      {/* 1. Deep Night Sky (Stars Layer) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 pointer-events-none z-0"
      >
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute rounded-full bg-white"
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              top: `${star.top}%`,
              left: `${star.left}%`,
              opacity: star.opacity,
            }}
            animate={{
              opacity: [star.opacity, star.opacity * 0.25, star.opacity],
            }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: star.delay,
            }}
          />
        ))}
      </motion.div>

      {/* 2. Atmosphere-Integrated Moon (Top Right, Reduced brightness and 20% smaller size) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, x: 20 }}
        animate={{ opacity: 0.7, scale: 1, x: 0 }}
        transition={{ duration: 2.0, delay: 0.4, ease: "easeOut" }}
        className="absolute top-16 right-16 sm:top-24 sm:right-28 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#E5E2D9] moon-glow z-10"
      />

      {/* 3. Soft, Massive Centered Ambient Glow (rgba(245,166,35,0.08) for maximum breathing room) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.2, delay: 0.6 }}
        className="absolute w-[600px] h-[600px] sm:w-[900px] sm:h-[900px] bg-[#F5A623]/[0.08] rounded-full blur-[160px] pointer-events-none z-10"
      />

      {/* 4. Text & Heading Content Area */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-20 flex flex-col items-center text-center max-w-4xl px-4 mt-[-40px]"
      >
        {/* Eyebrow */}
        <motion.span
          variants={textItemVariants}
          className="font-mono text-[10px] sm:text-xs text-[#F5F0E6]/50 tracking-[0.5em] uppercase mb-4 sm:mb-5 font-semibold"
        >
          THE JOURNEY OF A BUILDER
        </motion.span>

        {/* Heading (Sized 15% smaller, on two lines instead of three) */}
        <motion.h1
          variants={textItemVariants}
          className="font-display font-extrabold text-[clamp(3.1rem,7vw,5.5rem)] md:text-[clamp(4.2rem,8.5vw,7.4rem)] leading-[0.95] tracking-tight text-glow mb-6 sm:mb-8"
        >
          <span className="block text-accent-amber">Dhanush</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={textItemVariants}
          className="font-sans text-sm sm:text-base md:text-md text-white/75 max-w-[660px] leading-relaxed font-light mb-8 sm:mb-10"
        >
          Full-Stack Developer crafting scalable systems, intelligent products, and meaningful digital experiences.
        </motion.p>

        {/* Step Preamble Quote */}
        <motion.span
          variants={textItemVariants}
          className="font-mono text-[11px] text-accent-teal/80 mb-6 tracking-wider font-medium"
        >
          &quot;Every project is a step forward.&quot;
        </motion.span>

        {/* Scroll Cue (Elegant journey cue with floating chevron) */}
        <motion.button
          variants={textItemVariants}
          onClick={onOpenCodex}
          className="cursor-pointer group flex flex-col items-center gap-2 font-mono text-[9px] text-[#FAF9F6]/60 hover:text-accent-amber uppercase tracking-[0.3em] transition-colors focus:outline-none"
        >
          <span>Explore Journey</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ChevronDown className="w-3.5 h-3.5 text-[#FAF9F6]/60 group-hover:text-accent-amber transition-colors" />
          </motion.div>
        </motion.button>
      </motion.div>

      {/* 5. Landscape Hills (SVG Paths, 5 Layers with Opacity Gradients & Separation) */}
      <div className="absolute inset-x-0 bottom-0 w-full h-[32vh] sm:h-[37vh] md:h-[42vh] pointer-events-none z-30 select-none">
        
        {/* Layer 1 (Furthest, Darkest, Opacity 0.35) */}
        <motion.svg
          variants={landscapeVariants(0.05)}
          initial="hidden"
          animate="visible"
          className="absolute inset-0 w-full h-full opacity-[0.35]"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#030c14"
            d="M0 150 C 300 110, 600 90, 900 130 C 1200 170, 1320 150, 1440 180 L 1440 320 L 0 320 Z"
          />
        </motion.svg>

        {/* Layer 2 (Opacity 0.55) */}
        <motion.svg
          variants={landscapeVariants(0.18)}
          initial="hidden"
          animate="visible"
          className="absolute inset-0 w-full h-full opacity-[0.55]"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#06151c"
            d="M0 185 C 240 150, 480 140, 720 170 C 960 200, 1200 175, 1440 215 L 1440 320 L 0 320 Z"
          />
        </motion.svg>

        {/* Layer 3 (Opacity 0.75) */}
        <motion.svg
          variants={landscapeVariants(0.32)}
          initial="hidden"
          animate="visible"
          className="absolute inset-0 w-full h-full opacity-[0.75]"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#0a2128"
            d="M0 220 C 350 190, 700 180, 1050 210 C 1250 230, 1350 215, 1440 245 L 1440 320 L 0 320 Z"
          />
        </motion.svg>

        {/* Layer 4 (Opacity 0.90) */}
        <motion.svg
          variants={landscapeVariants(0.45)}
          initial="hidden"
          animate="visible"
          className="absolute inset-0 w-full h-full opacity-[0.90]"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#0d2b34"
            d="M0 250 C 200 230, 400 210, 700 235 C 1000 260, 1200 240, 1440 270 L 1440 320 L 0 320 Z"
          />
        </motion.svg>

        {/* Layer 5 (Foreground, Closest, Opacity 1.0) */}
        <motion.svg
          variants={landscapeVariants(0.58)}
          initial="hidden"
          animate="visible"
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#113945"
            d="M0 280 C 400 265, 800 250, 1100 275 C 1300 290, 1380 280, 1440 295 L 1440 320 L 0 320 Z"
          />
        </motion.svg>
      </div>

      {/* 6. Central Glowing Waypoint Beacon (Pulsing Journey Marker) & Fireflies */}
      <div className="absolute inset-0 pointer-events-none z-40">
        
        {/* Pulsing Beacon Light Source (Bottom Center) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.8, delay: 1.0, ease: "easeOut" }}
          className="absolute bottom-11 sm:bottom-12 left-1/2 transform -translate-x-1/2 w-8 h-8 flex items-center justify-center"
        >
          {/* Subtle Outer Pulsing Wave Ring */}
          <motion.div
            animate={{ scale: [1, 2.2, 1], opacity: [0.6, 0, 0.6] }}
            transition={{
              duration: 3.0,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute w-full h-full rounded-full border border-accent-amber/50 bg-accent-amber/5"
          />
          {/* Circular Beacon Hub */}
          <div className="w-2.5 h-2.5 rounded-full bg-accent-amber shadow-[0_0_12px_3px_rgba(245,166,35,0.8)]" />
        </motion.div>

        {/* Floating Fireflies drifting slowly across the landscape */}
        {fireflies.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-accent-amber"
            style={{
              width: `${p.size}px`,
              height: `${p.size}px`,
              left: `${p.initialLeft}%`,
              top: `${p.initialTop}%`,
              opacity: 0.7,
              boxShadow: "0 0 6px 1.5px rgba(245, 166, 35, 0.4)",
            }}
            animate={{
              y: [0, p.driftY, p.driftY * 1.3],
              x: [0, p.driftX, p.driftX * 1.2],
              opacity: [0, 0.8, 0.5, 0],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: p.delay,
            }}
          />
        ))}
      </div>
    </section>
  );
}
