"use client";

import React from 'react';
import { motion } from 'framer-motion';

const skillGroups = [
  {
    category: "Programming",
    items: ["Java", "Python", "C++", "JavaScript", "TypeScript"]
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "Tailwind", "HTML", "CSS"]
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "REST APIs"]
  },
  {
    category: "Database",
    items: ["MongoDB", "MySQL", "PostgreSQL"]
  },
  {
    category: "Cloud & Tools",
    items: ["AWS", "Git", "Docker", "Vercel"]
  }
];

export default function Skills() {
  const easeCurve: [number, number, number, number] = [0.22, 1, 0.36, 1];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: easeCurve }
    }
  };

  return (
    <section 
      id="skills" 
      className="pt-32 pb-40 px-6 md:px-12 relative overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #0C101B 0%, #16110D 100%)"
      }}
    >
      {/* Parchment to Dark Forest transition */}
      <div 
        className="absolute top-0 left-0 w-full h-[120px] pointer-events-none z-10"
        style={{
          background: "linear-gradient(to bottom, #F4E7D3 0%, #a2b1b5 35%, #5a6e74 65%, #0C101B 100%)",
        }}
      />

      {/* Ambient Glows */}
      <div className="absolute top-[30%] left-[-10%] w-[600px] h-[600px] bg-[#FFAA50]/[0.03] rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute bottom-[30%] right-[-10%] w-[600px] h-[600px] bg-[#E18A42]/[0.03] rounded-full blur-[140px] pointer-events-none z-0" />

      {/* Main Container */}
      <div className="max-w-[1200px] w-full mx-auto z-10 relative">
        
        {/* Section Header */}
        <motion.div 
          className="mb-16 select-none max-w-[800px] mx-auto text-center space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: easeCurve }}
        >
          <span className="font-mono text-[12px] tracking-[8px] uppercase block text-[rgba(255,170,80,0.9)]">
            SKILLS
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#F5F1EB] tracking-tight leading-tight">
            Tools I Trust
          </h2>
          <p className="font-sans text-[16px] md:text-[18px] leading-[1.6] text-[rgba(245,241,235,0.78)] font-light max-w-[600px] mx-auto">
            Technologies used throughout my projects.
          </p>
          <div className="h-[1px] w-16 bg-[#FFAA50]/20 mx-auto mt-4" />
        </motion.div>

        {/* Categories Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-stretch"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skillGroups.map((group) => (
            <motion.div
              key={group.category}
              variants={itemVariants}
              className="rounded-2xl border p-6 transition-all duration-500 hover:border-[#FFAA50]/20 flex flex-col justify-start relative group"
              style={{
                background: "rgba(28, 22, 20, 0.4)",
                border: "1px solid rgba(255, 170, 80, 0.06)",
                boxShadow: "0 10px 40px rgba(0, 0, 0, 0.15)"
              }}
            >
              {/* Subtle inner card glow on hover */}
              <div className="absolute inset-0 rounded-2xl bg-[#FFAA50]/[0.01] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <h3 className="font-mono text-xs uppercase tracking-[3px] text-[#FFAA50]/80 font-bold mb-5 pb-2 border-b border-[rgba(255,170,80,0.08)]">
                {group.category}
              </h3>

              <div className="flex flex-wrap gap-2 relative z-10">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="font-sans text-xs h-[38px] px-4 flex items-center bg-[rgba(255,255,255,0.02)] text-[#C9B7A4]/90 rounded-lg cursor-default border border-[rgba(255,170,80,0.12)] hover:border-[#FFAA50]/30 hover:text-[#F5F1EB] hover:-translate-y-[2px] hover:shadow-[0_8px_20px_rgba(255,170,80,0.08)] transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
