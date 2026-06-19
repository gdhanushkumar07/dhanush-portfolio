"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

/* ══════════════════════════════════════════════
   CONSTANTS — SVG PATH
   The route travels top→mid→bottom inside a 
   340×900 viewBox. Node positions match the path.
   ══════════════════════════════════════════════ */
const ROUTE_PATH =
  "M 170 80 C 200 110 240 140 220 180 C 200 220 140 240 130 290 C 120 340 160 370 170 420 C 180 470 150 500 130 550 C 110 600 140 640 160 700 C 180 760 170 800 165 840";

const NODE_POSITIONS = [
  { x: 170, y: 80 },   // ContentIQ — top
  { x: 130, y: 550 },  // Arogya — mid-lower
  { x: 165, y: 840 },  // Trade Route — bottom
];

interface Discovery {
  id: number;
  number: string;
  region: string;
  coords: string;
  level: string;
  title: string;
  subtitle: string;
  badge: string;
  summary: string;
  notes: string[];
  tools: string[];
  reward: string;
  github: string;
  demo: string;
}

const discoveries: Discovery[] = [
  {
    id: 0,
    number: "01",
    region: "Isle of Intelligence",
    coords: "17°24′N · 78°25′E",
    level: "Lv. 21",
    title: "ContentIQ",
    subtitle: "AI Media Creation & Distribution Platform",
    badge: "completed",
    summary: "Engineered an AI-powered platform that analyzes video and audio content to produce scene-level insights, scripts, and engagement predictions.",
    notes: [
      "Developed during AI for Bharat Hackathon",
      "Integrated multimodal media analysis and automated content optimization using AWS services including S3, Lambda, Bedrock, and Transcribe",
      "Implemented capabilities such as video intelligence, script generation, multilingual dubbing, background music recommendation, and automated social media distribution",
    ],
    tools: ["React", "TypeScript", "AWS"],
    reward: "AI For Bharat 2026 — National Finalist",
    github: "https://github.com/gdhanushkumar07/ContentIQ",
    demo: "http://98.89.43.72:3000",
  },
  {
    id: 1,
    number: "02",
    region: "Valley of Healing",
    coords: "17°22′N · 78°28′E",
    level: "Lv. 20",
    title: "Arogya Sarathi",
    subtitle: "Rural Healthcare Communication Platform",
    badge: "completed",
    summary: "Created a low-bandwidth healthcare web platform enabling rural patients to share symptoms, images, and voice notes with doctors asynchronously.",
    notes: [
      "Designed an offline-first architecture using browser local storage, client-side compression, and Base64 encoding to support unstable network environments",
      "Implemented a full-stack system using React (TypeScript), Node.js, and Express.js to enable reliable medical communication in remote regions",
      "Hackathon Project – Healthcare Accessibility Solution",
    ],
    tools: ["React", "Node.js", "Express"],
    reward: "Healthcare Track — Outstanding Merit",
    github: "https://github.com/gdhanushkumar07/Arogya-Sarathi-final-",
    demo: "",
  },
  {
    id: 2,
    number: "03",
    region: "Merchant's Crossing",
    coords: "17°17′N · 78°33′E",
    level: "Lv. 19",
    title: "E-Commerce Platform",
    subtitle: "Trade Route",
    badge: "completed",
    summary: "A modern e-commerce website featuring premium product showcases, interactive menu browsing, customer reviews, location integration, and seamless online ordering experience.",
    notes: [
      "Interactive product showcase",
      "Responsive commerce experience",
      "Order flow optimization",
      "Performance & SEO improvements",
    ],
    tools: ["React", "TypeScript", "Vite", "Node.js", "Tailwind"],
    reward: "Live Deployment — Production Ready",
    github: "https://github.com/gdhanushkumar07",
    demo: "",
  },
];

/* ══════════════════════════════════════════════
   MARKER COMPONENT — glides along path
   ══════════════════════════════════════════════ */
function ExpeditionMarker({
  markerRef,
  activeIndex,
}: {
  markerRef: React.RefObject<SVGGElement | null>;
  activeIndex: number;
}) {
  const activeProj = discoveries[activeIndex];
  const initialPos = NODE_POSITIONS[0];

  return (
    <g
      ref={markerRef}
      transform={`translate(${initialPos.x}, ${initialPos.y})`}
      style={{ willChange: "transform" }}
    >
      {/* Level badge above marker */}
      <g transform="translate(0, -28)">
        <rect
          x="-15"
          y="-6"
          width="30"
          height="12"
          rx="3"
          fill="#3D2E1C"
          stroke="#4F7E72"
          strokeWidth="0.5"
        />
        <text
          x="0"
          y="2.5"
          textAnchor="middle"
          fontSize="6.5"
          fontWeight="bold"
          fontFamily="monospace"
          fill="#FDFAF5"
        >
          {activeProj.level}
        </text>
      </g>

      {/* Circle Icon Badge */}
      <circle r="14" fill="#E5EFEA" stroke="#4F7E72" strokeWidth="1.8" />
      {/* Ship / Anchor icon outline */}
      <path
        d="M -6 1 L -4 5 H 4 L 6 1 Z M 0 -5 V 1 M -3 -2 H 3"
        stroke="#4F7E72"
        strokeWidth="1.2"
        fill="none"
        strokeLinecap="round"
      />

      {/* Active Stop Details Below Marker */}
      <g transform="translate(0, 24)" className="select-none">
        <text
          x="0"
          y="0"
          textAnchor="middle"
          fontSize="8.5"
          fontWeight="bold"
          fontFamily="monospace"
          fill="#3D2E1C"
        >
          {activeProj.title}
        </text>
        <text
          x="0"
          y="9"
          textAnchor="middle"
          fontSize="6.5"
          fontFamily="monospace"
          fill="#7A6548"
        >
          {activeProj.id === 0 ? "Jul 2025 — Apr 2026" : "2026"}
        </text>
        <text
          x="0"
          y="18"
          textAnchor="middle"
          fontSize="7"
          fontWeight="bold"
          fontFamily="monospace"
          fill="#2D7A6E"
        >
          You are here
        </text>
      </g>
    </g>
  );
}

/* ══════════════════════════════════════════════
   MAP PANEL (left column)
   ══════════════════════════════════════════════ */
function MapPanel({
  pathRef,
  markerRef,
  activeIndex,
}: {
  pathRef: React.RefObject<SVGPathElement | null>;
  markerRef: React.RefObject<SVGGElement | null>;
  activeIndex: number;
}) {
  return (
    <div className="w-full max-w-[420px] mx-auto relative select-none" style={{ aspectRatio: "340 / 900" }}>
      <svg
        className="w-full h-full"
        viewBox="0 0 340 900"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="cartGrid" width="34" height="34" patternUnits="userSpaceOnUse">
            <path d="M34 0 L0 0 0 34" fill="none" stroke="#7a6548" strokeWidth="0.5"/>
          </pattern>
        </defs>

        <rect width="340" height="900" fill="url(#cartGrid)" opacity="0.1"/>

        {/* ── Coordinate edge tick marks ── */}
        {[0,1,2,3,4,5,6,7,8,9].map(i => (
          <React.Fragment key={`tick-h${i}`}>
            <line x1={30+i*32} y1={0} x2={30+i*32} y2={5} stroke="#7a6548" strokeWidth="0.7" opacity="0.25"/>
            <line x1={30+i*32} y1={895} x2={30+i*32} y2={900} stroke="#7a6548" strokeWidth="0.7" opacity="0.25"/>
          </React.Fragment>
        ))}
        {[0,1,2,3,4,5,6,7,8,9].map(i => (
          <React.Fragment key={`tick-v${i}`}>
            <line x1={0} y1={50+i*88} x2={5} y2={50+i*88} stroke="#7a6548" strokeWidth="0.7" opacity="0.25"/>
            <line x1={335} y1={50+i*88} x2={340} y2={50+i*88} stroke="#7a6548" strokeWidth="0.7" opacity="0.25"/>
          </React.Fragment>
        ))}

        {/* ── Coordinate text labels ── */}
        <text x="170" y="11" textAnchor="middle" fontSize="7" fill="#7a6548" opacity="0.35" fontFamily="monospace">17°24′N</text>
        <text x="170" y="893" textAnchor="middle" fontSize="7" fill="#7a6548" opacity="0.35" fontFamily="monospace">17°17′N</text>
        <text x="6" y="450" textAnchor="middle" fontSize="7" fill="#7a6548" opacity="0.35" fontFamily="monospace" transform="rotate(-90 6 450)">78°25′E</text>
        <text x="334" y="450" textAnchor="middle" fontSize="7" fill="#7a6548" opacity="0.35" fontFamily="monospace" transform="rotate(90 334 450)">78°34′E</text>

        {/* ── Survey contour circles ── */}
        <circle cx="170" cy="80"  r="42" fill="none" stroke="#7a6548" strokeWidth="0.8" strokeDasharray="3,7" opacity="0.3"/>
        <circle cx="130" cy="550" r="48" fill="none" stroke="#7a6548" strokeWidth="0.8" strokeDasharray="3,7" opacity="0.25"/>
        <circle cx="165" cy="840" r="44" fill="none" stroke="#7a6548" strokeWidth="0.8" strokeDasharray="3,7" opacity="0.28"/>

        {/* ── TOPOLOGY (Flat Mountain Triangles as in reference) ── */}
        <g fill="#BBA588" opacity="0.5" stroke="#5C4A3C" strokeWidth="0.6">
          {/* Mountain Top Left */}
          <polygon points="20,160 35,125 50,160" />
          <polygon points="40,165 52,135 64,165" />
          <polygon points="12,170 25,145 38,170" />

          {/* Mountain Mid Right */}
          <polygon points="270,580 285,550 300,580" />
          <polygon points="290,585 302,560 314,585" />

          {/* Mountain Bottom Left */}
          <polygon points="40,780 55,745 70,780" />
          <polygon points="60,785 72,760 84,785" />
        </g>

        {/* Faint Outline Trees */}
        <g stroke="#5C4A3C" strokeWidth="0.8" fill="none" opacity="0.45">
          <path d="M 290 150 V 162 M 290 150 L 294 154 M 290 150 L 286 154" />
          <path d="M 305 155 V 167 M 305 155 L 309 159 M 305 155 L 301 159" />
          <path d="M 35 320 V 332 M 35 320 L 39 324 M 35 320 L 31 324" />
          <path d="M 50 325 V 337 M 50 325 L 54 329 M 50 325 L 46 329" />
        </g>

        {/* Region Labels */}
        {discoveries.map((disc, idx) => {
          const isActive = activeIndex === idx;
          const labelY = idx === 0 ? 40 : idx === 1 ? 510 : 800;
          const labelX = idx === 1 ? 230 : 55;
          const anchor = idx === 1 ? "end" : "start";
          return (
            <g key={`label-${idx}`} opacity={isActive ? 0.38 : 0.08}>
              <text
                x={labelX}
                y={labelY}
                fontSize="11"
                fontWeight="900"
                fontFamily="'Space Grotesk', sans-serif"
                fill="#2e1f12"
                textAnchor={anchor as "start" | "end" | "middle"}
                letterSpacing="2"
                style={{ textTransform: "uppercase" }}
              >
                {disc.region}
              </text>
              <text
                x={labelX}
                y={labelY + 13}
                fontSize="7"
                fontFamily="'JetBrains Mono', monospace"
                fill="#7a6548"
                textAnchor={anchor as "start" | "end" | "middle"}
              >
                {disc.coords}
              </text>
            </g>
          );
        })}

        {/* ── BASE ROUTE — faded dashes (always visible) ── */}
        <path
          d={ROUTE_PATH}
          fill="none"
          stroke="#4E3E30"
          strokeWidth="2.2"
          strokeDasharray="6,8"
          strokeLinecap="round"
          opacity="0.45"
        />

        {/* ── COMPLETED ROUTE — solid path line ── */}
        <path
          ref={pathRef}
          d={ROUTE_PATH}
          fill="none"
          stroke="#9E7815"
          strokeWidth="3.2"
          strokeLinecap="round"
          opacity="0.9"
          strokeDasharray="0 1000"
        />

        {/* ── DISCOVERY NODES / FUTURE STOPS ── */}
        {discoveries.map((disc, idx) => {
          const pos = NODE_POSITIONS[idx];
          const isCompleted = idx < activeIndex;
          const isFuture = idx > activeIndex;

          return (
            <g key={`node-${idx}`}>
              {/* Completed Node */}
              {isCompleted && (
                <>
                  <circle cx={pos.x} cy={pos.y} r="8" fill="#7a6548" stroke="#7a6548" strokeWidth="1.2" />
                  <g stroke="#FDFAF5" strokeWidth="1.2" strokeLinecap="round" fill="none">
                    <path d={`M ${pos.x - 2.5} ${pos.y} L ${pos.x - 0.5} ${pos.y + 2} L ${pos.x + 3} ${pos.y - 2}`} />
                  </g>
                </>
              )}

              {/* Future Node — Red "X" and "What's next?" script */}
              {isFuture && (
                <g>
                  {/* Red X marker */}
                  <line x1={pos.x - 6} y1={pos.y - 6} x2={pos.x + 6} y2={pos.y + 6} stroke="#A63A3A" strokeWidth="2.2" strokeLinecap="round" />
                  <line x1={pos.x + 6} y1={pos.y - 6} x2={pos.x - 6} y2={pos.y + 6} stroke="#A63A3A" strokeWidth="2.2" strokeLinecap="round" />
                  <text
                    x={pos.x}
                    y={pos.y + 16}
                    textAnchor="middle"
                    fontSize="7"
                    fontStyle="italic"
                    fontFamily="serif"
                    fill="#7A6548"
                  >
                    What&apos;s next?
                  </text>
                </g>
              )}
            </g>
          );
        })}

        {/* Sailboat sailing near the route */}
        <g transform="translate(152, 310)" opacity="0.95">
          <path d="M -8 2 L -6 6 H 6 L 8 2 Z" fill="#4E3E30" />
          <line x1="0" y1="2" x2="0" y2="-8" stroke="#4E3E30" strokeWidth="1.5" />
          <path d="M 0 -8 L 6 0 H 0 Z" fill="#998064" />
          <path d="M 0 -8 L -5 -1 H 0 Z" fill="#8A7356" opacity="0.85" />
        </g>

        {/* Sea monster tail outline */}
        <path
          d="M 40 680 Q 25 660 30 640 Q 35 620 50 630 Q 65 640 60 660 Q 55 680 40 680 Z"
          fill="none"
          stroke="#4E3E30"
          strokeWidth="1.0"
          strokeDasharray="2,3"
          opacity="0.45"
        />

        {/* Compass Rose Wind Star */}
        <g transform="translate(280, 720)" opacity="0.55" stroke="#4E3E30" strokeWidth="1.0" fill="none">
          <circle cx="0" cy="0" r="15" strokeDasharray="2,2" />
          <line x1="-22" y1="0" x2="22" y2="0" />
          <line x1="0" y1="-22" x2="0" y2="22" />
          <polygon points="0,-22 4,-6 0,0 -4,-6" fill="#4E3E30" opacity="0.65" />
          <polygon points="0,22 4,6 0,0 -4,6" fill="#4E3E30" opacity="0.65" />
          <polygon points="-22,0 -6,-4 0,0 -6,4" fill="#4E3E30" opacity="0.65" />
          <polygon points="22,0 6,-4 0,0 6,4" fill="#4E3E30" opacity="0.65" />
          <text x="0" y="-25" textAnchor="middle" fontSize="6.5" fontWeight="bold" fill="#4E3E30" fontFamily="monospace">N</text>
        </g>

        {/* ── TRAVELING EXPEDITION MARKER ── */}
        <ExpeditionMarker markerRef={markerRef} activeIndex={activeIndex} />
      </svg>
    </div>
  );
}

/* ══════════════════════════════════════════════
   PROJECT CARD — simple design matching reference file
   ══════════════════════════════════════════════ */
function ProjectCard({
  disc,
  isActive,
  cardRef,
}: {
  disc: Discovery;
  isActive: boolean;
  cardRef: React.RefObject<HTMLDivElement | null>;
}) {
  const initial = disc.title.charAt(0);
  const isCurrent = disc.badge === "current";

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      style={{ opacity: isActive ? 1 : 0.55, transition: "opacity 0.4s ease" }}
    >
      <div
        className="rounded-xl p-6 md:p-8"
        style={{
          background: "#F4ECE1",
          border: isActive
            ? "1px solid rgba(122, 101, 72, 0.22)"
            : "1px solid rgba(122, 101, 72, 0.12)",
          boxShadow: isActive
            ? "inset 0 0 30px rgba(188, 163, 133, 0.5), 0 8px 30px rgba(46, 31, 18, 0.06)"
            : "inset 0 0 20px rgba(188, 163, 133, 0.35), 0 2px 8px rgba(46, 31, 18, 0.02)",
          transition: "all 0.4s ease",
        }}
      >
        {/* Top Header Row */}
        <div className="flex items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-3">
            {/* Circular Logo/Initial Badge */}
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm"
              style={{
                background: isCurrent ? "#E2ECE9" : "#F0EBE6",
                color: isCurrent ? "#2D7A6E" : "#7a6548",
                border: `1.5px solid ${isCurrent ? "#B0CDC3" : "#DCD3C7"}`,
              }}
            >
              {initial}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-sans font-bold text-base text-[#1E140C]">
                  {disc.title}
                </span>
                {isCurrent && (
                  <span
                    className="font-sans text-[10px] font-medium px-2 py-0.5 rounded-full italic"
                    style={{
                      background: "#E2ECE9",
                      color: "#2D7A6E",
                      border: "1.5px solid #C4DFD5",
                    }}
                  >
                    current
                  </span>
                )}
              </div>
            </div>
          </div>
          {/* Level Pill */}
          <span
            className="font-mono text-[9.5px] font-bold px-2.5 py-0.5 rounded bg-[#F4ECE1] border border-[#E6DCD0] text-[#7a6548]"
          >
            {disc.level}
          </span>
        </div>

        {/* Subtitle & Date */}
        <div className="mb-3">
          <h4 className="font-sans font-bold text-[15px] text-[#1E140C] leading-snug">
            {disc.subtitle}
          </h4>
          <span className="font-sans text-[12px] text-[#7a6548]/80 block mt-0.5">
            {disc.id === 0 ? "Jul 2025 — Apr 2026" : disc.id === 1 ? "Jan 2026 — Mar 2026" : "May 2026 — Present"}
          </span>
        </div>

        {/* Summary Description */}
        <p className="font-sans text-[13px] leading-relaxed text-[#4A3B32] mb-5">
          {disc.summary}
        </p>

        {/* Bottom tags & links */}
        <div className="pt-4 border-t border-[rgba(122,101,72,0.1)] flex items-center justify-between flex-wrap gap-3">
          <div className="flex flex-wrap gap-1.5">
            {disc.tools.map((tool) => (
              <span
                key={tool}
                className="font-sans text-[11px] px-3 py-1 rounded-full bg-[#F4ECE1] border border-[#E6DCD0] text-[#7A6548]"
              >
                {tool}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-2">
            {disc.github && (
              <a
                href={disc.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full hover:bg-[rgba(107,84,56,0.08)] text-[#7a6548]"
              >
                <Github size={14} />
              </a>
            )}
            {disc.demo && (
              <a
                href={disc.demo}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full hover:bg-[rgba(107,84,56,0.08)] text-[#7a6548]"
              >
                <ExternalLink size={14} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ══════════════════════════════════════════════
   MAIN EXPORT
   ══════════════════════════════════════════════ */
export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const markerRef = useRef<SVGGElement>(null);

  const cardRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];

  const rAFRef = useRef<number | null>(null);
  const progressRef = useRef({ current: 0.06, target: 0.06 });
  const activeIndexRef = useRef(0);
  const pathLengthRef = useRef<number>(0);
  const metricsRef = useRef({ topFirst: 0, totalDistance: 0 });

  /* Scroll tracking — continuous scroll progress mapped to route path */
  useEffect(() => {
    // 1. Cache the total length of the SVG path once on mount
    const pathEl = pathRef.current;
    if (pathEl) {
      pathLengthRef.current = pathEl.getTotalLength();
    }

    // 2. Cache coordinates of cards on load/resize
    const updateMetrics = () => {
      const elFirst = cardRefs[0].current;
      const elLast = cardRefs[2].current;
      if (elFirst && elLast) {
        const rectFirst = elFirst.getBoundingClientRect();
        const rectLast = elLast.getBoundingClientRect();
        
        const scrollY = window.scrollY;
        const pageTopFirst = rectFirst.top + scrollY;
        const pageTopLast = rectLast.top + scrollY;
        
        metricsRef.current = {
          topFirst: pageTopFirst,
          totalDistance: pageTopLast - pageTopFirst,
        };
      }
    };

    updateMetrics();
    window.addEventListener("resize", updateMetrics);
    const initialMetricsTimeout = setTimeout(updateMetrics, 500);

    // 3. Easing animation handler using cached path length
    const animate = () => {
      const p = progressRef.current;
      const diff = p.target - p.current;
      const len = pathLengthRef.current;

      if (Math.abs(diff) > 0.0002 && len > 0) {
        p.current += diff * 0.12; // Easing (lerp) for smooth glide

        const pathEl = pathRef.current;
        const markerEl = markerRef.current;
        if (pathEl && markerEl) {
          const pt = pathEl.getPointAtLength(p.current * len);
          markerEl.setAttribute("transform", `translate(${pt.x}, ${pt.y})`);

          // Update path line drawing
          const completedDash = p.current * len;
          const remainingDash = len - completedDash;
          pathEl.setAttribute("stroke-dasharray", `${completedDash} ${remainingDash + 1}`);
        }
        rAFRef.current = requestAnimationFrame(animate);
      } else {
        p.current = p.target;
        const pathEl = pathRef.current;
        const markerEl = markerRef.current;
        if (pathEl && markerEl && len > 0) {
          const pt = pathEl.getPointAtLength(p.current * len);
          markerEl.setAttribute("transform", `translate(${pt.x}, ${pt.y})`);

          const completedDash = p.current * len;
          const remainingDash = len - completedDash;
          pathEl.setAttribute("stroke-dasharray", `${completedDash} ${remainingDash + 1}`);
        }
        rAFRef.current = null;
      }
    };

    // 4. Mathematical scroll tracking (100% layout-free)
    const handleScroll = () => {
      const { topFirst, totalDistance } = metricsRef.current;
      if (totalDistance <= 0) return;

      const scrollY = window.scrollY;
      const currentDistance = -(topFirst - scrollY) + window.innerHeight * 0.45;

      const progress = currentDistance / totalDistance;
      const clampedProgress = Math.max(0, Math.min(1, progress));

      // Map progress [0, 1] to path values [0.06, 0.97]
      const pathProgress = 0.06 + clampedProgress * (0.97 - 0.06);
      
      progressRef.current.target = pathProgress;
      if (!rAFRef.current) {
        rAFRef.current = requestAnimationFrame(animate);
      }
    };

    // 5. Section visibility observer. Activate scroll listener ONLY when visible
    let isListening = false;
    const registerScroll = () => {
      if (!isListening) {
        window.addEventListener("scroll", handleScroll, { passive: true });
        isListening = true;
        handleScroll();
      }
    };
    const unregisterScroll = () => {
      if (isListening) {
        window.removeEventListener("scroll", handleScroll);
        isListening = false;
      }
    };

    const sectionEl = sectionRef.current;
    const sectionObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          registerScroll();
        } else {
          unregisterScroll();
        }
      },
      { root: null, rootMargin: "10% 0px 10% 0px", threshold: 0 }
    );

    if (sectionEl) {
      sectionObserver.observe(sectionEl);
    }

    // 6. IntersectionObserver on cards to detect active card index (no DOM layout calls)
    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardEl = entry.target as HTMLDivElement;
            const idx = cardRefs.findIndex(ref => ref.current === cardEl);
            if (idx !== -1 && idx !== activeIndexRef.current) {
              activeIndexRef.current = idx;
              setActiveIndex(idx);
            }
          }
        });
      },
      {
        root: null,
        rootMargin: "-25% 0px -40% 0px",
        threshold: 0.1,
      }
    );

    cardRefs.forEach((ref) => {
      if (ref.current) cardObserver.observe(ref.current);
    });

    return () => {
      unregisterScroll();
      window.removeEventListener("resize", updateMetrics);
      clearTimeout(initialMetricsTimeout);
      if (sectionEl) sectionObserver.unobserve(sectionEl);
      sectionObserver.disconnect();
      cardObserver.disconnect();
      if (rAFRef.current) {
        cancelAnimationFrame(rAFRef.current);
      }
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{
        background: "radial-gradient(circle at 35% 50%, #C6B59C 0%, #C0AF95 40%, #A8957A 75%, #7A6B58 100%)",
        borderTop: "2px solid #2B1E13",
      }}
    >
      {/* Paper grain overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-0 opacity-[0.08] mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "256px",
        }}
      />
      {/* Fold crease */}
      <div
        className="absolute inset-0 pointer-events-none z-0 mix-blend-multiply opacity-[0.03]"
        style={{
          background:
            "linear-gradient(to right, transparent 33.1%, rgba(46,31,18,0.5) 33.35%, transparent 33.6%)," +
            "linear-gradient(to bottom, transparent 49.4%, rgba(46,31,18,0.4) 49.65%, transparent 49.9%)",
        }}
      />


      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 py-24 relative z-10">
        {/* ── TWO-COLUMN EXPEDITION LAYOUT ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-8 lg:gap-14 items-start">
          
          {/* LEFT COLUMN — HEADER & STICKY MAP WORLD */}
          <div className="space-y-6 lg:sticky lg:top-24">
            {/* Left Header matching reference screenshot style */}
            <div className="select-none pl-2">
              <span
                className="font-sans text-[11px] tracking-[0.25em] uppercase block mb-2 text-[#5C4A3C] font-bold"
              >
                JOURNEY SO FAR
              </span>
              <h2
                className="font-display font-black leading-none mb-3 text-[#1e140c]"
                style={{
                  fontSize: "clamp(2.2rem, 4.5vw, 3.2rem)",
                }}
              >
                Expedition Log
              </h2>
              <p
                className="font-sans text-xs leading-relaxed text-[#5C4A3C]/80"
              >
                Every stop, a story. Every project, a relic.
              </p>
            </div>

            <div className="hidden lg:block">
              <MapPanel
                pathRef={pathRef}
                markerRef={markerRef}
                activeIndex={activeIndex}
              />
            </div>
          </div>

          {/* RIGHT COLUMN — EXPEDITION DISCOVERY CARDS */}
          <div className="space-y-8">
            <div className="select-none lg:mt-6 pl-1">
              <span
                className="font-sans text-[10px] tracking-[0.2em] uppercase block text-[#5C4A3C] font-bold"
              >
                CAMPSITES ALONG THE TRAIL
              </span>
            </div>

            <div className="space-y-8">
              {discoveries.map((disc, idx) => (
                <ProjectCard
                  key={disc.id}
                  disc={disc}
                  isActive={activeIndex === idx}
                  cardRef={cardRefs[idx]}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none z-10"
        style={{ background: "linear-gradient(to bottom, transparent, rgba(198,181,156,0.3))" }}
      />
    </section>
  );
}
