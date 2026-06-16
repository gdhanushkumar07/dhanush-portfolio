"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface SkillGroup {
  category: string;
  items: string[];
}

const toolsData: SkillGroup[] = [
  {
    category: "Programming",
    items: ["Java", "Python", "C++", "JavaScript", "TypeScript"]
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "HTML", "CSS", "Tailwind"]
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
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
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
      id="skills" 
      className="py-32 px-6 md:px-[120px] relative overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #140C07 0%, #0F0905 100%)"
      }}
    >
      {/* Subtle Ambient Glow */}
      <div className="absolute top-[30%] left-[5%] w-[500px] h-[500px] bg-accent-amber/[0.02] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[5%] w-[500px] h-[500px] bg-accent-teal/[0.02] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1050px] w-full mx-auto z-10 relative">
        
        {/* Section Header */}
        <div className="mb-20 text-center select-none">
          <span className="font-mono text-xs text-accent-amber font-semibold tracking-widest uppercase block mb-3">
            03 / THE TOOLKIT
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F5F1EB] tracking-tight">
            Tools I Trust
          </h2>
          <p className="font-sans text-sm text-[rgba(245,241,235,0.70)] mt-3 max-w-xl mx-auto">
            Technologies used throughout my projects.
          </p>
          <div className="h-1 w-16 bg-gradient-to-r from-accent-amber to-transparent mt-6 mx-auto rounded-full" />
        </div>

        {/* Single Centered Container */}
        <motion.div 
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {toolsData.map((group) => (
            <motion.div 
              key={group.category}
              variants={itemVariants}
              className="space-y-4"
            >
              {/* Group Category Name */}
              <h3 className="font-mono text-xs text-accent-amber uppercase tracking-[0.25em] font-semibold text-center md:text-left">
                {group.category}
              </h3>
              
              {/* Pills Container */}
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="font-sans text-sm px-5 py-2.5 bg-[rgba(255,255,255,0.02)] text-[#C9B7A4]/90 rounded-xl cursor-default border hover:border-[#FFAA50]/30 hover:text-[#F5F1EB] hover:-translate-y-[2px] transition-all duration-300"
                    style={{
                      border: "1px solid rgba(255,140,0,0.12)"
                    }}
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
