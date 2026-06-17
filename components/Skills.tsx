"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Hanging Forest Vines Leaves Definitions (Desaturated forest green colors, matching About exactly)
const leftVineLeaves = [
  { x: 16, y: 50, rotate: -35, scale: 0.8, color: "#3F8F2A" },
  { x: 18, y: 110, rotate: 145, scale: 0.85, color: "#2E7D20" },
  { x: 12, y: 170, rotate: -40, scale: 0.75, color: "#5CAF38" },
  { x: 23, y: 230, rotate: 50, scale: 0.85, color: "#3F8F2A" },
  { x: 28, y: 290, rotate: 160, scale: 0.8, color: "#2E7D20" },
  { x: 22, y: 350, rotate: -35, scale: 0.75, color: "#5CAF38" },
  { x: 19, y: 410, rotate: 130, scale: 0.85, color: "#3F8F2A" },
  
  // Leaves on sub-branches
  { x: 30, y: 145, rotate: 20, scale: 0.7, color: "#3F8F2A" },
  { x: 34, y: 180, rotate: 160, scale: 0.7, color: "#2E7D20" },
  { x: 32, y: 290, rotate: 30, scale: 0.7, color: "#5CAF38" },
  { x: 29, y: 335, rotate: 150, scale: 0.7, color: "#3F8F2A" },
];

const rightVineLeaves = [
  { x: 74, y: 50, rotate: 45, scale: 0.8, color: "#3F8F2A" },
  { x: 72, y: 110, rotate: -135, scale: 0.85, color: "#2E7D20" },
  { x: 78, y: 170, rotate: 30, scale: 0.75, color: "#5CAF38" },
  { x: 58, y: 230, rotate: 150, scale: 0.85, color: "#3F8F2A" },
  { x: 52, y: 290, rotate: -45, scale: 0.8, color: "#2E7D20" },
  { x: 68, y: 350, rotate: 120, scale: 0.75, color: "#5CAF38" },
  { x: 62, y: 410, rotate: 45, scale: 0.85, color: "#3F8F2A" },

  // Leaves on sub-branches
  { x: 60, y: 145, rotate: -20, scale: 0.7, color: "#3F8F2A" },
  { x: 56, y: 180, rotate: -160, scale: 0.7, color: "#2E7D20" },
  { x: 58, y: 290, rotate: -30, scale: 0.7, color: "#5CAF38" },
  { x: 61, y: 335, rotate: -150, scale: 0.7, color: "#3F8F2A" },
];

/* ══════════════════════════════════════════════
   THE EXPLORER'S BACKPACK INVENTORY DATA
   All technologies mapped to narrative physical instruments.
   ══════════════════════════════════════════════ */
interface BackpackItem {
  name: string;
  narrativeName: string;
  classification: string;
  useCase: string;
  notes: string;
  catalog: string;
}

interface Compartment {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  items: BackpackItem[];
}

const compartments: Compartment[] = [
  {
    id: "foundation",
    name: "Foundation Instruments",
    description: "Core scripting tools and compilers used to navigate complex algorithms.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
        <path d="M4 7V4h16v3" /><path d="M9 20h6" /><path d="M12 4v16" />
      </svg>
    ),
    items: [
      {
        name: "Java",
        narrativeName: "Ancient Engineering Compass",
        classification: "Foundational Compiler",
        useCase: "Object-oriented structuring of high-volume data pathways.",
        notes: "Solid, reliable, and carries the weight of enterprise architecture. Wielded in major academic and core development tasks.",
        catalog: "FL-JV-8"
      },
      {
        name: "Python",
        narrativeName: "Scripture Deciphering Quill",
        classification: "Dynamic Scripting Tool",
        useCase: "Rapid scripting, data processing, and interfacing with AI models.",
        notes: "Fast, versatile, and readable. Discovered to be highly effective for building data observatories and LLM pipelines.",
        catalog: "FL-PY-3"
      },
      {
        name: "C++",
        narrativeName: "High-Velocity Gearwork",
        classification: "Low-Level Engine",
        useCase: "High-performance computation and hardware-level memory control.",
        notes: "Extremely fast, but demands strict caution. Wielded during competitive algorithms at IIT Hyderabad's Dev Duel.",
        catalog: "FL-CP-17"
      },
      {
        name: "C",
        narrativeName: "Foundational Iron Key",
        classification: "System Script",
        useCase: "Low-level system interactions and memory management.",
        notes: "The mother of all tools. Small, simple, and gives absolute control over the machine memory.",
        catalog: "FL-CC-99"
      },
      {
        name: "JavaScript",
        narrativeName: "Fluid Interaction Scroll",
        classification: "Frontier Script",
        useCase: "Breathing life and dynamic motion into web interfaces.",
        notes: "Ubiquitous scroll of the web. Essential for creating modern real-time shared vector whiteboards and interactive routes.",
        catalog: "FL-JS-6"
      },
      {
        name: "TypeScript",
        narrativeName: "Strict Structure Blueprint",
        classification: "Typed Script Extension",
        useCase: "Type-safe interface compilation and large-scale web systems.",
        notes: "Adds an layer of steel reinforcement to JavaScript. Keeps the developer from stepping on algorithmic traps during compile time.",
        catalog: "FL-TS-4"
      },
      {
        name: "SQL",
        narrativeName: "Relational Ledger Quill",
        classification: "Query Ledger",
        useCase: "Extracting facts and structured knowledge from relational databases.",
        notes: "Used to declare query structures for finding connections within relational vaults.",
        catalog: "FL-SQ-92"
      }
    ]
  },
  {
    id: "frontier",
    name: "Frontier Crafting Gear",
    description: "Dynamic engines and UI looms used to construct beautiful web interfaces.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2c-3 4-3 16 0 20M12 2c3 4 3 16 0 20" />
      </svg>
    ),
    items: [
      {
        name: "React.js",
        narrativeName: "Interface Weaver Loom",
        classification: "UI Assembly Engine",
        useCase: "Weaving components and views into reactive single-page maps.",
        notes: "The standard loom for interactive expeditions. Wielded to create Arogya Sarathi and this portfolio chronicle.",
        catalog: "FC-RE-18"
      },
      {
        name: "Node.js",
        narrativeName: "Runtime Propulsion Engine",
        classification: "JS Propulsion System",
        useCase: "Executing JavaScript logic outside browser boundaries.",
        notes: "Highly concurrent, event-driven engine. Powers back-end communication networks and socket pipelines.",
        catalog: "FC-ND-16"
      },
      {
        name: "Express.js",
        narrativeName: "Signal Routing Map",
        classification: "Micro-framework Router",
        useCase: "Building microservice REST API endpoints.",
        notes: "Lightweight and modular. Connects the user front-end interface directly to server vaults and database chest.",
        catalog: "FC-EX-4"
      },
      {
        name: "HTML5 & CSS3",
        narrativeName: "Document Slate & Pigments",
        classification: "Structural Foundation",
        useCase: "Structuring document data and painting parchment colors.",
        notes: "The raw elements of every web creation. Ensures visual harmony, layouts, and accessibility.",
        catalog: "FC-HC-5"
      },
      {
        name: "Tailwind CSS",
        narrativeName: "Style Weaving Loom",
        classification: "Utility Styling Palette",
        useCase: "Rapid visual styling using utility rules.",
        notes: "Speeds up design rendering significantly. Used to establish cohesive layouts, parchment backgrounds, and text scales.",
        catalog: "FC-TW-3"
      }
    ]
  },
  {
    id: "survival",
    name: "Citadel Survival Gear",
    description: "Cloud vessels, version vaults, and workspace forges that secure the expedition.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
      </svg>
    ),
    items: [
      {
        name: "AWS S3 & Lambda",
        narrativeName: "Cloud Vault & Trigger Spark",
        classification: "Serverless Cloud Tool",
        useCase: "Storing media objects and executing event-driven server functions.",
        notes: "Discovered during the AI For Bharat Hackathon. Triggers instant image conversions and serverless content generation.",
        catalog: "CS-AW-2"
      },
      {
        name: "AWS Bedrock",
        narrativeName: "Cognitive Oracle Core",
        classification: "AI Model Gateway",
        useCase: "Accessing foundational frontier AI models (Claude, Llama, Jurassic).",
        notes: "The oracle that fuels media generation in ContentIQ. Capable of interpreting prompts into fully-formed creations.",
        catalog: "CS-BD-1"
      },
      {
        name: "Docker",
        narrativeName: "Secure Containment Vessel",
        classification: "Container Sandbox",
        useCase: "Packing code libraries and environment variables into portable crates.",
        notes: "Guarantees that code running locally will run identically inside remote production systems.",
        catalog: "CS-DK-20"
      },
      {
        name: "Git & GitHub",
        narrativeName: "Chronicle Tracker & Shared Vault",
        classification: "Version Control Archive",
        useCase: "Tracking source changes and syncing logs with team explorers.",
        notes: "Saves code commits as historical milestones. Ensures no explorer overrides another's maps.",
        catalog: "CS-GT-9"
      },
      {
        name: "VS Code",
        narrativeName: "Craftsman's Workshop Forge",
        classification: "Integrated Editor",
        useCase: "Writing, compiling, and debugging expedition code files.",
        notes: "The primary virtual workspace. Extensible, responsive, and equipped with analytical lenses.",
        catalog: "CS-VS-1"
      }
    ]
  },
  {
    id: "observatory",
    name: "Observatory Lenses",
    description: "Analytical scopes, AI models, and charts used to decode data secrets.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    items: [
      {
        name: "Pandas & NumPy",
        narrativeName: "Data Ledger & Matrix Grid",
        classification: "Data Structuring Tool",
        useCase: "Processing tables, transforming metrics, and running matrices.",
        notes: "Core pillars of data science. Wielded during Infosys Springboard data modeling certification trials.",
        catalog: "OB-PN-12"
      },
      {
        name: "Matplotlib",
        narrativeName: "Pattern Visualization Lens",
        classification: "Graphic Plotter",
        useCase: "Plotting mathematical charts and mapping trends.",
        notes: "Translates abstract data arrays into visual representations and routes, helping the explorer trace paths.",
        catalog: "OB-MP-5"
      },
      {
        name: "Gemini API",
        narrativeName: "Cognitive AI Catalyst",
        classification: "Language Intelligence Scope",
        useCase: "Orchestrating agentic workflows and multi-modal inference.",
        notes: "Allows the application to process visual inputs and complex files directly, reasoning about them in real-time.",
        catalog: "OB-GM-1"
      },
      {
        name: "Prompt Eng.",
        narrativeName: "Oracle Incantation Guide",
        classification: "Cognitive Instruction Set",
        useCase: "Guiding LLMs to output structured data schemas.",
        notes: "The craft of phrasing commands to yield predictable, highly-accurate outputs from complex neural layers.",
        catalog: "OB-PE-9"
      }
    ]
  },
  {
    id: "vaults",
    name: "Database Vaults",
    description: "Structured and unstructured chests used to preserve secure knowledge records.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
        <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" />
      </svg>
    ),
    items: [
      {
        name: "MySQL & Oracle",
        narrativeName: "Structured Vault Lockers",
        classification: "Relational Storage Chest",
        useCase: "Storing transactional explorer records inside tables.",
        notes: "Strict schema models. Guarantees consistency and structure across all record collections.",
        catalog: "VT-MS-11"
      },
      {
        name: "MongoDB",
        narrativeName: "Unstructured Document Cache",
        classification: "NoSQL JSON Repository",
        useCase: "Storing flexible, high-speed documents.",
        notes: "Dynamic schema matching. Highly responsive for real-time whiteboards and flexible user profile files.",
        catalog: "VT-MD-7"
      }
    ]
  },
];


const BrassCorner = ({ position }: { position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' }) => {
  const rotation = {
    'top-left': 'rotate-0 top-2 left-2',
    'top-right': 'rotate-90 top-2 right-2',
    'bottom-left': 'rotate-270 bottom-2 left-2',
    'bottom-right': 'rotate-180 bottom-2 right-2',
  }[position];

  return (
    <div className={`absolute w-8 h-8 pointer-events-none select-none text-[#8B6914]/40 ${rotation}`}>
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M 2 2 H 30 V 8 H 8 V 30 H 2 Z" fill="currentColor" opacity="0.2" />
        <path d="M 2 2 H 30 V 8 H 8 V 30 H 2 Z" stroke="currentColor" strokeWidth="1" />
        <circle cx="5" cy="5" r="2.2" fill="#A88120" stroke="#4A3B1F" strokeWidth="0.5" />
        <circle cx="20" cy="5" r="1.8" fill="#8B6914" stroke="#4A3B1F" strokeWidth="0.5" />
        <circle cx="5" cy="20" r="1.8" fill="#8B6914" stroke="#4A3B1F" strokeWidth="0.5" />
      </svg>
    </div>
  );
};

/* Workshop Torch — matches About section Torch exactly */
const WorkshopTorchGlow = ({ className }: { className?: string }) => (
  <div className={`absolute pointer-events-none select-none z-10 hidden md:block ${className}`}>
    <div 
      className="w-[1px] h-[1px] rounded-full"
      style={{
        boxShadow: `
          0 0 120px 55px rgba(255,140,66,0.32),
          0 0 200px 95px rgba(255,110,40,0.15)
        `
      }}
    />
  </div>
);

const WorkshopTorch = ({ className }: { className?: string }) => (
  <div className={`absolute pointer-events-none select-none z-30 hidden md:block ${className}`}>
    <div className="relative w-[30px] h-[80px]">
      <svg width="30" height="80" viewBox="0 0 30 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Flame (Animated teardrop shape) */}
        <motion.g
          animate={{ 
            scaleY: [1, 1.03, 0.98, 1.02, 1], 
            scaleX: [1, 0.98, 1.02, 0.99, 1],
            opacity: [0.95, 1, 0.97, 1, 0.95],
            rotate: [0, 0.5, -0.5, 0.2, 0],
            y: [0, -0.5, 0.2, 0]
          }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          style={{ originX: "15px", originY: "30px" }}
        >
          {/* Outer Flame (#FF8C42) */}
          <path d="M 15,5 C 9,15 8,25 15,32 C 22,25 21,15 15,5 Z" fill="#FF8C42" />
          {/* Middle Flame (#FFB347) */}
          <path d="M 15,12 C 11,18 10,25 15,32 C 20,25 19,18 15,12 Z" fill="#FFB347" />
          {/* Inner Flame Core (#FFD166) */}
          <path d="M 15,18 C 12,22 12,27 15,32 C 18,27 18,22 15,18 Z" fill="#FFD166" />
        </motion.g>

        {/* Metal Cup / Torch Head */}
        <path d="M 10,32 H 20 L 18,36 H 12 Z" fill="#3D3025" stroke="#251C15" strokeWidth="0.75" />

        {/* Straight Wooden Handle */}
        <path d="M 15,36 V 70" stroke="#4A382A" strokeWidth="3.5" strokeLinecap="round" />

        {/* Wall Mount Metal Bracket Holder */}
        <path d="M 8,50 H 22 M 8,47 V 53 M 22,47 V 53" stroke="#3D3025" strokeWidth="1.5" />
        <path d="M 12,50 H 18" stroke="#251C15" strokeWidth="2.5" />
      </svg>

      {/* Floating embers rising from flame */}
      {Array.from({ length: 3 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-[#FFAA50]"
          style={{ left: "14px", bottom: "45px", opacity: 0 }}
          animate={{
            y: [-10, -50],
            x: [0, (i - 1) * 6, (i - 1) * 3],
            opacity: [0, 0.8, 0],
            scale: [0.8, 1.2, 0.4]
          }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            delay: i * 0.7,
            ease: "easeOut"
          }}
        />
      ))}
    </div>
  </div>
);

/* Workshop Background — dark expedition camp atmosphere matching About section */
const WorkshopBackground = () => (
  <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none">
    {/* Deep vignette — identical to About section */}
    <div 
      className="absolute inset-0"
      style={{
        background: "radial-gradient(ellipse at center, transparent 30%, rgba(10, 7, 5, 0.9) 100%)",
      }}
    />

    {/* Campfire amber glow from top center — identical to About section */}
    <div 
      className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-[700px]"
      style={{
        background: "radial-gradient(circle at top center, rgba(225, 138, 66, 0.12) 0%, rgba(225, 138, 66, 0.03) 50%, transparent 80%)",
        filter: "blur(50px)",
      }}
    />

    {/* Subtle warm amber fog behind center — identical to About section */}
    <div 
      className="absolute top-[35%] left-1/2 -translate-x-1/2 w-[80%] h-[600px]"
      style={{
        background: "radial-gradient(circle, rgba(225, 138, 66, 0.05) 0%, rgba(139, 90, 43, 0.02) 60%, transparent 100%)",
        filter: "blur(70px)",
      }}
    />

    {/* Wooden Workshop Plank lines - extremely subtle dark amber stripes */}
    <svg className="absolute inset-0 w-full h-full opacity-[0.035]" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="woodPlanksPattern" width="120" height="1000" patternUnits="userSpaceOnUse">
          {/* Vertical plank lines */}
          <line x1="0" y1="0" x2="0" y2="1000" stroke="#8B6914" strokeWidth="2" />
          <line x1="120" y1="0" x2="120" y2="1000" stroke="#8B6914" strokeWidth="2" />
          {/* Faint wood grain lines inside each plank */}
          <path d="M 20,0 Q 40,250 15,500 T 30,1000" stroke="#8B6914" strokeWidth="0.5" fill="none" opacity="0.3" />
          <path d="M 60,0 Q 80,300 55,600 T 70,1000" stroke="#8B6914" strokeWidth="0.5" fill="none" opacity="0.2" />
          <path d="M 100,0 Q 110,200 95,500 T 105,1000" stroke="#8B6914" strokeWidth="0.5" fill="none" opacity="0.3" />
          {/* Wood knots */}
          <ellipse cx="60" cy="400" rx="6" ry="12" stroke="#8B6914" strokeWidth="0.5" fill="none" opacity="0.2" />
          <circle cx="60" cy="400" r="2" fill="#8B6914" opacity="0.2" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#woodPlanksPattern)" />
    </svg>

    {/* Blueprint grid — amber toned to feel warm, not clinical (Faded further) */}
    <svg className="w-full h-full opacity-[0.02]" preserveAspectRatio="none">
      <defs>
        <pattern id="skillsgridpattern" width="100" height="100" patternUnits="userSpaceOnUse">
          <rect width="100" height="100" fill="none" />
          <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#8B6914" strokeWidth="0.5" />
          <path d="M 50 0 L 50 100 M 0 50 L 100 50" fill="none" stroke="#8B6914" strokeWidth="0.25" strokeDasharray="3 5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#skillsgridpattern)" />
    </svg>

    {/* Angled drafting sheets — amber tones (Faded further) */}
    <div className="absolute inset-0 opacity-[0.02] flex items-center justify-center">
      <div className="w-[1200px] h-[800px] rotate-[-4deg] border border-[#8B6914] border-dashed rounded-md relative">
        <div className="absolute top-4 left-4 font-mono text-[9px] text-[#8B6914]">[ WORKSHOP DRAFTING TABLE · SECTOR 03 ]</div>
        <div className="absolute bottom-4 right-4 font-mono text-[9px] text-[#8B6914]">[ EXPEDITION REGION: 03 ]</div>
        <div className="absolute top-[20%] left-[10%] w-[80%] h-[60%] border border-[#8B6914]/40" />
      </div>
    </div>

    {/* Large compass drafting overlay — amber tones (Faded further) */}
    <svg className="absolute top-[10%] left-[-10%] w-[120%] h-[80%] opacity-[0.02]" viewBox="0 0 1000 600" fill="none" stroke="#8B6914" strokeWidth="0.6">
      <circle cx="500" cy="300" r="280" />
      <circle cx="500" cy="300" r="240" strokeDasharray="5 5" />
      <circle cx="500" cy="300" r="160" />
      <circle cx="500" cy="300" r="10" fill="#8B6914" opacity="0.3" stroke="none" />
      <line x1="100" y1="300" x2="900" y2="300" />
      <line x1="500" y1="0" x2="500" y2="600" />
      <line x1="200" y1="0" x2="800" y2="600" strokeWidth="0.4" strokeDasharray="4 4" />
      <line x1="800" y1="0" x2="200" y2="600" strokeWidth="0.4" strokeDasharray="4 4" />
      <g transform="translate(500, 300) scale(1.6)">
        <circle cx="0" cy="-120" r="6" />
        <line x1="0" y1="-120" x2="0" y2="-90" strokeWidth="1.2" />
        <path d="M 0 -90 L -60 120" strokeWidth="1.5" />
        <path d="M -60 120 L -65 130" strokeWidth="2.5" />
        <path d="M 0 -90 L 60 120" strokeWidth="1.5" />
        <path d="M 60 120 L 65 130" strokeWidth="2.5" />
        <path d="M -40 30 H 40" strokeWidth="0.8" />
        <circle cx="0" cy="30" r="4" fill="#8B6914" stroke="none" />
      </g>
      <text x="520" y="50" className="font-mono text-[6px] fill-[#8B6914] tracking-widest font-bold">EXPEDITION ROUTE ANALYSIS MATRIX</text>
      <text x="210" y="290" className="font-mono text-[7px] fill-[#8B6914]">ARC RAD: 280.00mm</text>
      <text x="690" y="290" className="font-mono text-[7px] fill-[#8B6914]">SECTOR INDEX: 03</text>
    </svg>

    {/* Gear mechanism draft — bottom right, amber toned (Faded further) */}
    <svg className="absolute right-[5%] bottom-[5%] w-[320px] h-[320px] opacity-[0.02]" viewBox="0 0 200 200" fill="none" stroke="#8B6914" strokeWidth="0.6">
      <circle cx="100" cy="100" r="70" />
      <circle cx="100" cy="100" r="62" strokeDasharray="4 2" />
      {[...Array(24)].map((_, i) => {
        const angle = (i * 360) / 24;
        return (
          <line key={i} x1="100" y1="25" x2="100" y2="33" transform={`rotate(${angle} 100 100)`} strokeWidth="1.2" />
        );
      })}
      <circle cx="100" cy="100" r="30" />
      <circle cx="100" cy="100" r="8" fill="#8B6914" opacity="0.3" stroke="none" />
      <line x1="40" y1="100" x2="160" y2="100" />
      <line x1="100" y1="40" x2="100" y2="160" />
      <text x="106" y="80" className="font-mono text-[5px] fill-[#8B6914]">GEAR A: D30</text>
      <text x="106" y="125" className="font-mono text-[5px] fill-[#8B6914]">RATIO: 1:1.618</text>
    </svg>

    {/* Drafting ruler — amber (Faded further) */}
    <svg className="absolute left-0 top-[10%] w-10 h-[80%] opacity-[0.02]" viewBox="0 0 40 800" fill="none" stroke="#8B6914" strokeWidth="0.8">
      <line x1="30" y1="0" x2="30" y2="800" />
      {[...Array(80)].map((_, i) => {
        const y = i * 10;
        const length = i % 10 === 0 ? 25 : i % 5 === 0 ? 15 : 8;
        return (
          <g key={i}>
            <line x1={30 - length} y1={y} x2="30" y2={y} />
            {i % 10 === 0 && (
              <text x="3" y={y + 3} className="font-mono text-[6px] fill-[#8B6914]">{i * 10}mm</text>
            )}
          </g>
        );
      })}
    </svg>
  </div>
);

export default function Skills() {
  const [activeTab, setActiveTab] = useState<string>("foundation");
  const [selectedItem, setSelectedItem] = useState<BackpackItem>(compartments[0].items[0]);

  const currentCompartment = compartments.find(c => c.id === activeTab) || compartments[0];

  const easeCurve: [number, number, number, number] = [0.22, 1, 0.36, 1];
  const panelReveal = {
    initial: { opacity: 0, y: 40, scale: 0.98 },
    animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.9, ease: easeCurve } }
  };

  return (
    <section
      id="skills"
      className="relative overflow-hidden py-24"
      style={{
        background: "linear-gradient(to bottom, #17110D 0%, #1B120D 30%, #21160E 70%, #26180F 100%)",
      }}
    >
      {/* Grain texture overlay — identical to About section */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <WorkshopBackground />

      {/* Left Hanging Forest Vine (matching About section exactly) */}
      <motion.svg 
        className="absolute left-[30px] top-0 w-[120px] h-[450px] pointer-events-none select-none hidden md:block z-20 opacity-85" 
        viewBox="0 0 120 450" 
        preserveAspectRatio="none"
        animate={{ rotate: [-0.6, 0.6, -0.6] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "top center", filter: "blur(0.3px)" }}
      >
        {/* Main Vine Stem */}
        <path d="M 15,0 C 30,80 5,160 20,240 C 35,320 15,380 25,440" stroke="#1C5A13" strokeWidth="3.0" fill="none" strokeLinecap="round" />
        <path d="M 15,0 C 30,80 5,160 20,240 C 35,320 15,380 25,440" stroke="#2E7D20" strokeWidth="0.75" fill="none" strokeLinecap="round" />

        {/* Sub-branch 1 */}
        <path d="M 17,120 C 35,140 40,180 23,210" stroke="#1C5A13" strokeWidth="1.8" fill="none" strokeLinecap="round" />
        <path d="M 17,120 C 35,140 40,180 23,210" stroke="#2E7D20" strokeWidth="0.5" fill="none" strokeLinecap="round" />

        {/* Sub-branch 2 */}
        <path d="M 22,260 C 38,280 36,320 20,350" stroke="#1C5A13" strokeWidth="1.8" fill="none" strokeLinecap="round" />
        <path d="M 22,260 C 38,280 36,320 20,350" stroke="#2E7D20" strokeWidth="0.5" fill="none" strokeLinecap="round" />

        {leftVineLeaves.map((leaf, idx) => (
          <g key={idx} transform={`translate(${leaf.x}, ${leaf.y}) rotate(${leaf.rotate}) scale(${leaf.scale})`}>
            <path 
              d="M0 0 C 8 -12, 22 -8, 25 0 C 22 8, 8 12, 0 0 Z" 
              fill={leaf.color} 
              stroke="#123016" 
              strokeWidth="0.75" 
              style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.4))" }}
            />
            <path d="M0 0 Q 12.5 -2 22 0" fill="none" stroke="#5CAF38" strokeWidth="0.5" />
          </g>
        ))}
      </motion.svg>

      {/* Right Hanging Forest Vine (matching About section exactly) */}
      <motion.svg 
        className="absolute right-[35px] top-0 w-[120px] h-[450px] pointer-events-none select-none hidden md:block z-20 opacity-85" 
        viewBox="0 0 120 450" 
        preserveAspectRatio="none"
        animate={{ rotate: [0.6, -0.6, 0.6] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "top center", filter: "blur(0.3px)" }}
      >
        {/* Main Vine Stem */}
        <path d="M 75,0 C 60,80 85,160 70,240 C 55,320 75,380 65,440" stroke="#1C5A13" strokeWidth="3.0" fill="none" strokeLinecap="round" />
        <path d="M 75,0 C 60,80 85,160 70,240 C 55,320 75,380 65,440" stroke="#2E7D20" strokeWidth="0.75" fill="none" strokeLinecap="round" />

        {/* Sub-branch 1 */}
        <path d="M 73,120 C 55,140 50,180 67,210" stroke="#1C5A13" strokeWidth="1.8" fill="none" strokeLinecap="round" />
        <path d="M 73,120 C 55,140 50,180 67,210" stroke="#2E7D20" strokeWidth="0.5" fill="none" strokeLinecap="round" />

        {/* Sub-branch 2 */}
        <path d="M 68,260 C 52,280 54,320 70,350" stroke="#1C5A13" strokeWidth="1.8" fill="none" strokeLinecap="round" />
        <path d="M 68,260 C 52,280 54,320 70,350" stroke="#2E7D20" strokeWidth="0.5" fill="none" strokeLinecap="round" />

        {rightVineLeaves.map((leaf, idx) => (
          <g key={idx} transform={`translate(${leaf.x}, ${leaf.y}) rotate(${leaf.rotate}) scale(${leaf.scale})`}>
            <path 
              d="M0 0 C 8 -12, 22 -8, 25 0 C 22 8, 8 12, 0 0 Z" 
              fill={leaf.color} 
              stroke="#123016" 
              strokeWidth="0.75" 
              style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.4))" }}
            />
            <path d="M0 0 Q 12.5 -2 22 0" fill="none" stroke="#5CAF38" strokeWidth="0.5" />
          </g>
        ))}
      </motion.svg>

      <div className="max-w-[1100px] mx-auto px-6 md:px-10 relative z-10">
        
        {/* Story Transition Entry from Projects */}
        <div className="flex flex-col items-center justify-center mb-16 select-none">
          <div className="flex items-center gap-3 mb-2">
            <div className="h-0.5 w-8 bg-gradient-to-r from-transparent to-[#FFAA50]/30" />
            <span className="font-serif text-[10px] italic text-[#FFAA50]/70 tracking-widest uppercase">
              The route reaches a supply camp.
            </span>
            <div className="h-0.5 w-8 bg-gradient-to-l from-transparent to-[#FFAA50]/30" />
          </div>
          <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#C9B7A4]/40">
            [ Milestone Reached · Inventory Check ]
          </span>
        </div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14 select-none"
        >
          <span className="font-mono text-[10px] tracking-[6px] uppercase block text-[#C9B7A4]/60 mb-3">
            03 / THE EXPLORER&apos;S BACKPACK
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-[2.5rem] font-extrabold text-[#FDFAF5] tracking-tight leading-tight mb-4">
            Equipment &amp; Artifacts Gathered
          </h2>
          <p className="font-sans text-[15px] text-[#C9B7A4]/80 max-w-[540px] mx-auto leading-relaxed">
            Every route explored and milestone crossed left behind technical artifacts — tools collected, mastered, and organized inside the pack.
          </p>
        </motion.div>

        {/* LARGE WORKBENCH FRAMED CONTAINER */}
        <div className="relative max-w-[1100px] mx-auto mt-6">
          <WorkshopTorchGlow className="left-[-41px] top-[168px]" />
          <WorkshopTorch className="left-[-56px] top-[150px]" />
          <WorkshopTorchGlow className="right-[-41px] top-[168px]" />
          <WorkshopTorch className="right-[-56px] top-[150px]" />

          <motion.div
            className="rounded-[24px] border overflow-hidden w-full p-6 md:p-10 transition-all duration-500 hover:border-[#FFAA50]/25 relative"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={panelReveal}
            style={{
              background: "rgba(28, 22, 20, 0.92)",
              border: "1px solid rgba(255, 170, 80, 0.10)",
              boxShadow: "0 20px 80px rgba(0,0,0,0.4), 0 0 60px rgba(255,120,40,0.04)"
            }}
          >
            <BrassCorner position="top-left" />
            <BrassCorner position="top-right" />
            <BrassCorner position="bottom-left" />
            <BrassCorner position="bottom-right" />

            {/* INTERACTIVE BACKPACK SYSTEM */}
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-8 items-start">
          
          {/* LEFT — Backpack Compartments Selector & Grid */}
          <div className="flex flex-col gap-6">
            
            {/* Compartment Tabs (Leather Flaps) */}
            <div className="flex flex-col gap-2">
              <span className="font-mono text-[8px] text-[#C9B7A4]/50 uppercase tracking-widest px-1">
                Select Compartment
              </span>
              <div className="flex flex-wrap gap-2">
                {compartments.map((comp) => {
                  const isActive = activeTab === comp.id;
                  return (
                    <button
                      key={comp.id}
                      onClick={() => {
                        setActiveTab(comp.id);
                        setSelectedItem(comp.items[0]);
                      }}
                      className={`flex items-center gap-2 px-3.5 py-2.5 rounded-[4px] border font-mono text-[10.5px] font-bold uppercase transition-all duration-200 ${
                        isActive
                          ? "bg-[rgba(255,170,80,0.1)] border-[#FFAA50]/40 text-[#FFAA50] shadow-sm"
                          : "bg-[rgba(255,255,255,0.02)] border-[rgba(255,170,80,0.08)] text-[#C9B7A4] hover:border-[rgba(255,170,80,0.2)] hover:text-[#F5F1EB]"
                      }`}
                    >
                      <span className="opacity-70">{comp.icon}</span>
                      {comp.name.split(" ")[0]}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Inventory Slots Inside Active Compartment */}
            <div
              className="rounded-xl p-6 bg-[rgba(20,15,12,0.9)] border border-[rgba(255,170,80,0.08)]"
              style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.2)" }}
            >
              <div className="mb-4">
                <h3 className="font-serif text-sm font-bold text-[#F5F1EB] leading-tight">
                  {currentCompartment.name}
                </h3>
                <p className="font-sans text-[11px] text-[#C9B7A4]/75 mt-0.5">
                  {currentCompartment.description}
                </p>
              </div>

              <div className="h-px bg-[rgba(255,170,80,0.08)] mb-5" />

              {/* Grid of Slots */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {currentCompartment.items.map((item) => {
                  const isSelected = selectedItem.name === item.name;
                  return (
                    <button
                      key={item.name}
                      onClick={() => setSelectedItem(item)}
                      className={`flex flex-col items-start p-3 rounded-[3px] border text-left transition-all duration-150 ${
                        isSelected
                          ? "bg-[rgba(255,170,80,0.08)] border-[#FFAA50]/40 ring-1 ring-[#FFAA50]/10"
                          : "bg-[rgba(255,255,255,0.01)] border-[rgba(255,170,80,0.06)] hover:border-[rgba(255,170,80,0.18)]"
                      }`}
                    >
                      <span className="font-mono text-[6.5px] text-[#C9B7A4]/40 tracking-wider block mb-1">
                        {item.catalog}
                      </span>
                      <span className={`font-mono text-[11.5px] font-bold block ${isSelected ? "text-[#FFAA50]" : "text-[#F5F1EB]"}`}>
                        {item.name}
                      </span>
                      <span className="font-sans text-[8px] text-[#C9B7A4]/60 truncate w-full mt-0.5 block">
                        {item.narrativeName}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* RIGHT — Instrument Inspection Lens */}
          <div className="lg:sticky lg:top-24">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedItem.name}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -12 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
                className="rounded-xl overflow-hidden border border-[rgba(255,170,80,0.12)] bg-[rgba(20,15,12,0.9)]"
                style={{
                  boxShadow: "0 10px 40px rgba(0,0,0,0.3)",
                }}
              >
                {/* Visual Card Top Flap */}
                <div className="px-6 py-2.5 bg-[rgba(255,255,255,0.02)] border-b border-[rgba(255,170,80,0.08)] flex items-center justify-between">
                  <span className="font-mono text-[7.5px] tracking-widest text-[#C9B7A4]/50 uppercase">
                    INSPECTION LENS
                  </span>
                  <span className="font-mono text-[7.5px] text-[#FFAA50] font-bold">
                    ITEM REF: {selectedItem.catalog}
                  </span>
                </div>

                <div className="p-7">
                  {/* Title & Narrative */}
                  <div className="mb-5">
                    <span className="font-mono text-[8px] text-[#FFAA50] uppercase tracking-widest block mb-1">
                      ✦ {selectedItem.classification}
                    </span>
                    <h3 className="font-display text-[1.4rem] font-extrabold text-[#F5F1EB] tracking-tight leading-tight">
                      {selectedItem.name}
                    </h3>
                    <h4 className="font-serif text-[13px] font-bold italic text-[#C9B7A4] mt-0.5">
                      &quot;{selectedItem.narrativeName}&quot;
                    </h4>
                  </div>

                  <div className="h-px bg-gradient-to-r from-[rgba(255,170,80,0.12)] via-transparent to-transparent mb-5" />

                  {/* Primary Details */}
                  <div className="space-y-4 font-sans text-[12.5px] text-[#C9B7A4]">
                    <div>
                      <span className="font-mono text-[8px] text-[#C9B7A4]/50 uppercase tracking-wider block mb-1">
                        Primary Expedition Function
                      </span>
                      <p className="leading-relaxed text-[#F5F1EB]/90">
                        {selectedItem.useCase}
                      </p>
                    </div>

                    <div>
                      <span className="font-mono text-[8px] text-[#C9B7A4]/50 uppercase tracking-wider block mb-1">
                        Explorer Field Notes
                      </span>
                      <p className="leading-relaxed font-light italic font-serif">
                        {selectedItem.notes}
                      </p>
                    </div>
                  </div>

                  {/* Stamp Seal */}
                  <div className="mt-8 pt-5 border-t border-[rgba(255,170,80,0.08)] flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#FFAA50" strokeWidth="2">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span className="font-mono text-[7.5px] text-[#C9B7A4]/60 uppercase tracking-widest">
                        FUNCTION VERIFIED
                      </span>
                    </div>
                    <span className="font-mono text-[7.5px] px-2.5 py-0.5 rounded-[2px] border border-[rgba(255,170,80,0.15)] bg-[rgba(255,170,80,0.03)] text-[#FFAA50] uppercase tracking-wider">
                      RECOVERED GEAR
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </motion.div>
    </div>

  </div>

      {/* Bottom transition to Achievements — dark warm to darker */}
      <div
        className="absolute bottom-0 left-0 right-0 h-36 pointer-events-none z-10"
        style={{
          background: "linear-gradient(to bottom, transparent 0%, #1D140E 100%)",
        }}
      />
    </section>
  );
}
