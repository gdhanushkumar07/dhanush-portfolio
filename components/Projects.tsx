"use client";

import React, { useRef, useState } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent, useTransform } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projectsList = [
  {
    id: "arogyasarathi",
    num: "01",
    title: "Arogya Sarathi",
    subtitle: "AI-Powered Rural Healthcare Platform",
    role: "Full Stack Developer",
    date: "January 2026",
    description: "Built an intelligent healthcare ecosystem designed for rural and low-connectivity environments.",
    features: [
      "AI symptom analysis",
      "Doctor-patient communication",
      "Image and voice support",
      "Medicine reminders",
      "Emergency assistance",
      "Offline-first workflows"
    ],
    tech: ["React", "Node.js", "Express", "AI Integration"],
    github: "https://github.com/",
    demo: "https://github.com/"
  },
  {
    id: "dynosaur",
    num: "02",
    title: "Dynosaur Website",
    subtitle: "Premium french ice cream & cookies business website",
    role: "Frontend Developer & Designer",
    date: "February 2026",
    description: "Designed and developed a premium storytelling website focused on visual branding, customer engagement, menu discovery, reviews, and ordering experiences.",
    features: [
      "Interactive menu showcase",
      "Customer reviews",
      "Google Maps integration",
      "Swiggy integration",
      "Premium animations",
      "Mobile-first experience",
      "SEO optimization"
    ],
    tech: ["React", "TypeScript", "Vite", "Tailwind", "Vercel"],
    github: "https://github.com/",
    demo: "https://github.com/"
  },
  {
    id: "portfolio-explorer",
    num: "03",
    title: "Portfolio Explorer",
    subtitle: "Personal Portfolio Website",
    role: "Designer & Developer",
    date: "March 2026",
    description: "Built an immersive portfolio inspired by storytelling, exploration, and adventure maps.",
    features: [
      "Journey-based navigation",
      "Interactive project timeline",
      "Forest themed visual identity",
      "Responsive animations",
      "Dynamic section transitions"
    ],
    tech: ["React", "TypeScript", "Framer Motion", "Tailwind"],
    github: "https://github.com/",
    demo: "https://github.com/"
  }
];

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const [activeIndex, setActiveIndex] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.35) {
      setActiveIndex(0);
    } else if (latest < 0.70) {
      setActiveIndex(1);
    } else {
      setActiveIndex(2);
    }
  });

  const compassRotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <section id="projects" className="relative bg-[#F4E7D3] text-[#3A2B20] overflow-hidden">
      {/* Hero to Projects Transition */}
      <div 
        className="h-[180px] w-full relative z-10 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, #113945 0%, #1c4a57 30%, #5d818d 65%, #abc3c3 85%, #F4E7D3 100%)",
        }}
      >
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1440 180" preserveAspectRatio="none">
          <path 
            d="M 720,0 C 720,60 540,120 360,180" 
            stroke="#3A2B20" 
            strokeWidth="3" 
            strokeDasharray="6 8" 
            fill="none" 
            opacity="0.35"
            className="hidden lg:block"
          />
          <path 
            d="M 720,0 V 180" 
            stroke="#3A2B20" 
            strokeWidth="3" 
            strokeDasharray="6 8" 
            fill="none" 
            opacity="0.35"
            className="lg:hidden"
          />
        </svg>
      </div>

      {/* Main Section Header */}
      <div className="max-w-[1200px] mx-auto px-6 pt-12 text-center select-none">
        <span className="font-mono text-xs tracking-[8px] uppercase block mb-3 text-[#3A2B20]/60">
          EXPLORATION LOG
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#3A2B20]">
          Projects Journey
        </h2>
        <p className="font-sans text-sm md:text-base text-[#3A2B20]/75 mt-3 max-w-xl mx-auto font-light leading-relaxed">
          Scroll to navigate through my builder achievements. Explore the milestones from my earliest initiatives to my latest work.
        </p>
        <div className="h-[1px] w-24 bg-[#3A2B20]/15 mx-auto mt-6" />
      </div>

      {/* Desktop Sticky Scroll Section */}
      <div ref={containerRef} className="relative h-[240vh] hidden lg:block">
        <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
          <div className="max-w-[1200px] w-full mx-auto grid grid-cols-[45%_55%] gap-12 px-6 items-center">
            
            {/* LEFT SIDE: Winding Journey Map */}
            <div className="relative w-full h-[580px] bg-[#F4E7D3]/65 rounded-3xl border border-[#3A2B20]/5 shadow-sm p-4 overflow-hidden">
              <svg className="w-full h-full" viewBox="0 0 400 600" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Background Grid */}
                <pattern id="map-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#3A2B20" strokeWidth="0.5" opacity="0.04" />
                </pattern>
                <rect width="100%" height="100%" fill="url(#map-grid)" />

                {/* Subtle Mountains Decor */}
                <g stroke="#3A2B20" strokeWidth="1" fill="none" opacity="0.12">
                  {/* Peaks Left */}
                  <path d="M 30,120 L 50,90 L 70,120 M 45,110 L 55,95 L 65,110" />
                  <path d="M 55,120 L 75,85 L 95,120" />
                  {/* Peaks Right */}
                  <path d="M 310,500 L 335,465 L 360,500 M 325,490 L 335,475 L 345,490" />
                  <path d="M 335,500 L 355,475 L 375,500" />
                </g>

                {/* Subtle Pine Trees Decor */}
                <g stroke="#3A2B20" strokeWidth="0.75" fill="none" opacity="0.2">
                  {/* Tree Group Left */}
                  <path d="M 60,240 L 56,247 H 58 L 54,254 H 66 L 62,247 H 64 Z M 60,254 V 258" />
                  <path d="M 75,245 L 71,251 H 73 L 69,257 H 81 L 77,251 H 79 Z M 75,257 V 261" />
                  {/* Tree Group Right */}
                  <path d="M 315,220 L 311,227 H 313 L 309,234 H 321 L 317,227 H 319 Z M 315,234 V 238" />
                  <path d="M 330,215 L 326,221 H 328 L 324,227 H 336 L 332,221 H 334 Z M 330,227 V 231" />
                </g>

                {/* Journey S-Curve Base Trail */}
                <path 
                  d="M 200,40 C 80,150 120,250 200,300 C 280,350 320,450 200,560" 
                  stroke="#3A2B20" 
                  strokeWidth="3.0" 
                  strokeDasharray="6 8" 
                  fill="none" 
                  opacity="0.18"
                  strokeLinecap="round"
                />

                {/* Active Highlighted Dotted Trail */}
                <motion.path 
                  d="M 200,40 C 80,150 120,250 200,300 C 280,350 320,450 200,560" 
                  stroke="#A67C52" 
                  strokeWidth="3.5" 
                  strokeDasharray="6 8" 
                  fill="none" 
                  style={{ pathLength: scrollYProgress }}
                  strokeLinecap="round"
                />

                {/* Vintage Compass Rose */}
                <motion.g style={{ originX: "320px", originY: "100px", rotate: compassRotate }}>
                  <circle cx="320" cy="100" r="24" stroke="#3A2B20" strokeWidth="1" fill="none" opacity="0.15" />
                  <circle cx="320" cy="100" r="2" fill="#3A2B20" opacity="0.5" />
                  <path d="M 320,78 L 323,100 L 320,97 L 317,100 Z" fill="#3A2B20" opacity="0.4" />
                  <path d="M 320,122 L 323,100 L 320,103 L 317,100 Z" fill="#3A2B20" opacity="0.15" />
                  <path d="M 342,100 L 320,103 L 323,100 L 320,97 Z" fill="#3A2B20" opacity="0.25" />
                  <path d="M 298,100 L 320,103 L 317,100 L 320,97 Z" fill="#3A2B20" opacity="0.25" />
                  <text x="320" y="74" textAnchor="middle" fontSize="6.5" fontFamily="serif" fill="#3A2B20" opacity="0.4" fontWeight="bold">N</text>
                </motion.g>

                {/* Milestone Node 1 */}
                <g 
                  className="cursor-pointer"
                  onClick={() => {
                    const target = containerRef.current;
                    if (target) {
                      const containerTop = target.getBoundingClientRect().top + window.scrollY;
                      window.scrollTo({ top: containerTop, behavior: 'smooth' });
                    }
                  }}
                >
                  <circle 
                    cx="135" 
                    cy="160" 
                    r="12" 
                    fill={activeIndex >= 0 ? "#A67C52" : "#F4E7D3"} 
                    stroke="#3A2B20" 
                    strokeWidth="1.5" 
                    className="transition-colors duration-300"
                  />
                  <text x="135" y="163" textAnchor="middle" fontSize="9" fontFamily="sans-serif" fontWeight="bold" fill={activeIndex >= 0 ? "#F4E7D3" : "#3A2B20"}>1</text>
                  <text 
                    x="120" 
                    y="145" 
                    textAnchor="end" 
                    fontSize="9.5" 
                    fontFamily="serif" 
                    fontWeight={activeIndex === 0 ? "bold" : "normal"}
                    fill="#3A2B20" 
                    opacity={activeIndex === 0 ? 0.9 : 0.4}
                    className="transition-all duration-300"
                  >
                    Arogya Sarathi (Jan 26)
                  </text>
                </g>

                {/* Milestone Node 2 */}
                <g 
                  className="cursor-pointer"
                  onClick={() => {
                    const target = containerRef.current;
                    if (target) {
                      const containerTop = target.getBoundingClientRect().top + window.scrollY;
                      const sectionHeight = target.offsetHeight;
                      window.scrollTo({ top: containerTop + sectionHeight * 0.5, behavior: 'smooth' });
                    }
                  }}
                >
                  <circle 
                    cx="200" 
                    cy="300" 
                    r="12" 
                    fill={activeIndex >= 1 ? "#A67C52" : "#F4E7D3"} 
                    stroke="#3A2B20" 
                    strokeWidth="1.5" 
                    className="transition-colors duration-300"
                  />
                  <text x="200" y="303" textAnchor="middle" fontSize="9" fontFamily="sans-serif" fontWeight="bold" fill={activeIndex >= 1 ? "#F4E7D3" : "#3A2B20"}>2</text>
                  <text 
                    x="220" 
                    y="298" 
                    textAnchor="start" 
                    fontSize="9.5" 
                    fontFamily="serif" 
                    fontWeight={activeIndex === 1 ? "bold" : "normal"}
                    fill="#3A2B20" 
                    opacity={activeIndex === 1 ? 0.9 : 0.4}
                    className="transition-all duration-300"
                  >
                    Dynosaur Web (Feb 26)
                  </text>
                </g>

                {/* Milestone Node 3 */}
                <g 
                  className="cursor-pointer"
                  onClick={() => {
                    const target = containerRef.current;
                    if (target) {
                      const containerTop = target.getBoundingClientRect().top + window.scrollY;
                      const sectionHeight = target.offsetHeight;
                      window.scrollTo({ top: containerTop + sectionHeight * 0.85, behavior: 'smooth' });
                    }
                  }}
                >
                  <circle 
                    cx="265" 
                    cy="440" 
                    r="12" 
                    fill={activeIndex >= 2 ? "#A67C52" : "#F4E7D3"} 
                    stroke="#3A2B20" 
                    strokeWidth="1.5" 
                    className="transition-colors duration-300"
                  />
                  <text x="265" y="443" textAnchor="middle" fontSize="9" fontFamily="sans-serif" fontWeight="bold" fill={activeIndex >= 2 ? "#F4E7D3" : "#3A2B20"}>3</text>
                  <text 
                    x="250" 
                    y="435" 
                    textAnchor="end" 
                    fontSize="9.5" 
                    fontFamily="serif" 
                    fontWeight={activeIndex === 2 ? "bold" : "normal"}
                    fill="#3A2B20" 
                    opacity={activeIndex === 2 ? 0.9 : 0.4}
                    className="transition-all duration-300"
                  >
                    Portfolio Explorer (Mar 26)
                  </text>
                </g>
              </svg>
            </div>

            {/* RIGHT SIDE: Active Project Detail Card */}
            <div className="relative h-[480px] flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 25, scale: 0.97 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -25, scale: 0.97 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="w-full bg-[#F4E7D3] text-[#3A2B20] border border-[rgba(58,43,32,0.08)] rounded-[24px] p-8 md:p-10 shadow-[0_12px_45px_rgba(58,43,32,0.06)] h-[460px] flex flex-col justify-between relative"
                >
                  {/* Journal Double Border Detail */}
                  <div className="absolute inset-[6px] border border-[rgba(58,43,32,0.12)] rounded-[18px] pointer-events-none" />

                  <div className="space-y-4 relative z-10">
                    <div className="flex justify-between items-center border-b border-[rgba(58,43,32,0.12)] pb-3">
                      <span className="font-mono text-xs text-[#A67C52] font-semibold tracking-wider">
                        MILESTONE 0{projectsList[activeIndex].num}
                      </span>
                      <span className="font-mono text-xs text-[#3A2B20]/60">
                        {projectsList[activeIndex].date}
                      </span>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-serif text-2xl md:text-3xl font-extrabold tracking-tight">
                        {projectsList[activeIndex].title}
                      </h3>
                      <p className="font-sans text-xs uppercase tracking-widest font-semibold text-[#A67C52]">
                        Role: {projectsList[activeIndex].role}
                      </p>
                    </div>

                    <p className="font-sans text-sm font-light leading-relaxed text-[#3A2B20]/80">
                      {projectsList[activeIndex].description}
                    </p>

                    <div className="space-y-1.5">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-[#3A2B20]/50 block">FEATURES DETECTED</span>
                      <ul className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs">
                        {projectsList[activeIndex].features.map((feature, fIdx) => (
                          <li key={fIdx} className="flex items-center gap-1.5 text-[#3A2B20]/90">
                            <span className="text-[#A67C52] text-[10px]">✦</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-4 mt-auto pt-4 border-t border-[rgba(58,43,32,0.12)] relative z-10">
                    <div className="flex flex-wrap gap-1.5">
                      {projectsList[activeIndex].tech.map((tag) => (
                        <span 
                          key={tag} 
                          className="font-mono text-[10px] px-2 py-0.5 rounded border border-[rgba(58,43,32,0.15)] bg-[rgba(58,43,32,0.02)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      {projectsList[activeIndex].github && (
                        <a 
                          href={projectsList[activeIndex].github}
                          target="_blank"
                          rel="noreferrer"
                          className="cursor-pointer font-mono text-[11px] uppercase tracking-widest border border-[#3A2B20] px-4 py-2 rounded-xl bg-transparent hover:bg-[#3A2B20] hover:text-[#F4E7D3] transition-all duration-300 flex items-center gap-2"
                        >
                          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                          <span>Repository</span>
                        </a>
                      )}
                      {projectsList[activeIndex].demo && (
                        <a 
                          href={projectsList[activeIndex].demo}
                          target="_blank"
                          rel="noreferrer"
                          className="cursor-pointer font-mono text-[11px] uppercase tracking-widest bg-[#3A2B20] text-[#F4E7D3] px-4 py-2 rounded-xl border border-[#3A2B20] hover:bg-transparent hover:text-[#3A2B20] transition-all duration-300 flex items-center gap-2"
                        >
                          <svg className="w-3.5 h-3.5 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                          </svg>
                          <span>Live Site</span>
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>
      </div>

      {/* Mobile Journey Layout */}
      <div className="block lg:hidden max-w-xl mx-auto px-6 py-12 relative">
        {/* Vertical dotted path */}
        <div className="absolute left-[34px] top-0 bottom-0 w-[1px] border-l-2 border-dashed border-[#3A2B20]/25 pointer-events-none" />

        <div className="space-y-12 relative">
          {projectsList.map((project) => (
            <div key={project.id} className="relative pl-12">
              
              {/* Circular timeline node */}
              <div className="absolute left-0 top-6 w-7 h-7 rounded-full bg-[#A67C52] border-2 border-[#F4E7D3] flex items-center justify-center text-[#F4E7D3] font-mono text-xs font-bold shadow-md">
                {project.num}
              </div>

              {/* Parchment Project Card */}
              <div className="bg-[#F4E7D3] text-[#3A2B20] border border-[rgba(58,43,32,0.08)] rounded-[20px] p-6 shadow-md relative overflow-hidden">
                <div className="absolute inset-[4px] border border-[rgba(58,43,32,0.1)] rounded-[16px] pointer-events-none" />
                
                <div className="space-y-3 relative z-10">
                  <div className="flex justify-between items-center border-b border-[rgba(58,43,32,0.1)] pb-2 text-[10px] font-mono text-[#3A2B20]/60">
                    <span>{project.date}</span>
                  </div>

                  <h3 className="font-serif text-xl font-extrabold tracking-tight">
                    {project.title}
                  </h3>
                  
                  <p className="font-sans text-[10px] uppercase tracking-widest font-semibold text-[#A67C52]">
                    Role: {project.role}
                  </p>

                  <p className="font-sans text-xs font-light leading-relaxed text-[#3A2B20]/80">
                    {project.description}
                  </p>

                  <ul className="space-y-1 text-xs">
                    {project.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-1.5 text-[#3A2B20]/90">
                        <span className="text-[#A67C52]">✦</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tech.map((tag) => (
                      <span 
                        key={tag} 
                        className="font-mono text-[9px] px-1.5 py-0.5 rounded border border-[rgba(58,43,32,0.12)] bg-[rgba(58,43,32,0.01)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-3 border-t border-[rgba(58,43,32,0.1)]">
                    {project.github && (
                      <a 
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="cursor-pointer font-mono text-[10px] uppercase tracking-wider border border-[#3A2B20] px-3 py-1.5 rounded-lg bg-transparent flex items-center gap-1.5"
                      >
                        <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        <span>Code</span>
                      </a>
                    )}
                    {project.demo && (
                      <a 
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="cursor-pointer font-mono text-[10px] uppercase tracking-wider bg-[#3A2B20] text-[#F4E7D3] px-3 py-1.5 rounded-lg border border-[#3A2B20] flex items-center gap-1.5"
                      >
                        <svg className="w-3 h-3 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                        </svg>
                        <span>Live</span>
                      </a>
                    )}
                  </div>

                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
