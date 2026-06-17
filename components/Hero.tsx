"use client";

import React, { useRef, useMemo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface HeroProps {
  onOpenCodex: () => void;
}

/* ══════════════════════════════════════════════
 /* ══════════════════════════════════════════════
   STAR FIELD — three layers of depth, elegant, twinkling
   ══════════════════════════════════════════════ */
const StarField = () => {
  const layers = useMemo(() => {
    // 3 layers: small, medium, bright
    const smallStars = Array.from({ length: 55 }, (_, i) => ({
      id: `s-${i}`,
      size: 0.8 + Math.random() * 0.4,
      top: Math.random() * 65,
      left: Math.random() * 100,
      opacity: 0.12 + Math.random() * 0.18,
      dur: 4.5 + Math.random() * 4.5,
      delay: Math.random() * 8,
    }));
    
    const medStars = Array.from({ length: 32 }, (_, i) => ({
      id: `m-${i}`,
      size: 1.4 + Math.random() * 0.4,
      top: Math.random() * 60,
      left: Math.random() * 100,
      opacity: 0.32 + Math.random() * 0.22,
      dur: 3.2 + Math.random() * 3.5,
      delay: Math.random() * 6,
    }));

    const brightStars = Array.from({ length: 16 }, (_, i) => ({
      id: `b-${i}`,
      size: 2.2 + Math.random() * 0.6,
      top: Math.random() * 55,
      left: Math.random() * 100,
      opacity: 0.55 + Math.random() * 0.25,
      dur: 2.2 + Math.random() * 2.2,
      delay: Math.random() * 4,
    }));

    return { smallStars, medStars, brightStars };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none z-[1]">
      {/* Small stars layer */}
      {layers.smallStars.map((s) => (
        <motion.div
          key={s.id}
          className="absolute rounded-full bg-white"
          style={{
            width: s.size,
            height: s.size,
            top: `${s.top}%`,
            left: `${s.left}%`,
            opacity: s.opacity,
          }}
          animate={{ opacity: [s.opacity, s.opacity * 0.25, s.opacity * 0.85, s.opacity] }}
          transition={{ duration: s.dur, repeat: Infinity, ease: "easeInOut", delay: s.delay }}
        />
      ))}
      {/* Medium stars layer */}
      {layers.medStars.map((s) => (
        <motion.div
          key={s.id}
          className="absolute rounded-full bg-white"
          style={{
            width: s.size,
            height: s.size,
            top: `${s.top}%`,
            left: `${s.left}%`,
            opacity: s.opacity,
          }}
          animate={{ opacity: [s.opacity, s.opacity * 0.2, s.opacity * 0.9, s.opacity] }}
          transition={{ duration: s.dur, repeat: Infinity, ease: "easeInOut", delay: s.delay }}
        />
      ))}
      {/* Bright stars layer */}
      {layers.brightStars.map((s) => (
        <motion.div
          key={s.id}
          className="absolute rounded-full bg-white"
          style={{
            width: s.size,
            height: s.size,
            top: `${s.top}%`,
            left: `${s.left}%`,
            opacity: s.opacity,
            boxShadow: "0 0 3px 0.5px rgba(255,255,255,0.35)",
          }}
          animate={{ 
            opacity: [s.opacity, s.opacity * 0.15, s.opacity * 0.95, s.opacity],
            scale: [1, 1.12, 0.92, 1]
          }}
          transition={{ duration: s.dur, repeat: Infinity, ease: "easeInOut", delay: s.delay }}
        />
      ))}
    </div>
  );
};

/* ══════════════════════════════════════════════
   MOON — upper right, glowing, cinematic
   ══════════════════════════════════════════════ */
const Moon = () => (
  <div
    className="absolute z-[2] pointer-events-none"
    style={{ top: "5%", right: "7%", width: 112, height: 112 }}
  >
    {/* Extra wide soft atmospheric haze glow */}
    <div
      className="absolute inset-0 rounded-full"
      style={{
        background: "radial-gradient(circle, rgba(255,248,220,0.015) 30%, transparent 85%)",
        transform: "scale(5.2)",
      }}
    />
    {/* Outer halo — very soft */}
    <div
      className="absolute inset-0 rounded-full"
      style={{
        background: "radial-gradient(circle, rgba(255,248,220,0.035) 40%, transparent 80%)",
        transform: "scale(3.5)",
      }}
    />
    {/* Mid glow ring */}
    <div
      className="absolute inset-0 rounded-full"
      style={{
        background: "radial-gradient(circle, rgba(255,248,220,0.075) 40%, transparent 75%)",
        transform: "scale(2)",
      }}
    />
    {/* Inner warm glow */}
    <div
      className="absolute inset-0 rounded-full"
      style={{
        background: "radial-gradient(circle, rgba(255,252,235,0.16) 50%, transparent 80%)",
        transform: "scale(1.4)",
        filter: "blur(8px)",
      }}
    />
    {/* Moon disc */}
    <div
      className="absolute inset-0 rounded-full"
      style={{
        background: "radial-gradient(circle at 38% 38%, #FAFAF0 0%, #EDE8D0 50%, #D8D0B8 100%)",
        boxShadow: "0 0 40px 15px rgba(255,248,200,0.12), 0 0 80px 30px rgba(255,240,180,0.07)",
      }}
    />
  </div>
);

/* ══════════════════════════════════════════════
   SHOOTING STARS — rare, slow, elegant (every 8-15 seconds)
   ══════════════════════════════════════════════ */
const ShootingStars = () => {
  const shooters = [
    { top: "9%", left: "8%", delay: 1.5, dur: 1.45, rotate: 23, length: 230, dx: 420, dy: 165, rep: 9 },
    { top: "18%", left: "47%", delay: 5.2, dur: 1.25, rotate: 20, length: 190, dx: 360, dy: 140, rep: 12 },
    { top: "6%", left: "28%", delay: 9.8, dur: 1.65, rotate: 27, length: 250, dx: 460, dy: 185, rep: 15 },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none z-[3] overflow-hidden">
      {shooters.map((s, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ top: s.top, left: s.left }}
          initial={{ opacity: 0, x: 0, y: 0 }}
          animate={{
            opacity: [0, 0.25, 1, 0.8, 0],
            x: [0, s.dx * 0.38, s.dx],
            y: [0, s.dy * 0.38, s.dy],
          }}
          transition={{
            duration: s.dur,
            delay: s.delay,
            repeat: Infinity,
            repeatDelay: s.rep,
            ease: [0.2, 0.9, 0.3, 1],
          }}
        >
          <motion.div
            style={{
              position: "relative",
              width: s.length,
              height: 3,
              rotate: s.rotate,
              transformOrigin: "left center",
            }}
            animate={{
              scaleX: [0.35, 1, 1, 0.95],
              opacity: [0, 0.9, 1, 0.7, 0],
            }}
            transition={{
              duration: s.dur,
              repeat: Infinity,
              repeatDelay: s.rep,
              ease: "easeOut",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: 999,
                background: "linear-gradient(90deg, rgba(170,210,255,0) 0%, rgba(190,225,255,0.16) 40%, rgba(225,242,255,0.72) 82%, rgba(248,252,255,0.98) 100%)",
                filter: "blur(0.4px)",
              }}
            />
            <div
              style={{
                position: "absolute",
                right: -4,
                top: "50%",
                width: 7,
                height: 7,
                borderRadius: "50%",
                transform: "translateY(-50%)",
                background: "#F8FDFF",
                boxShadow: "0 0 10px 4px rgba(220,245,255,0.75), 0 0 22px 8px rgba(180,225,255,0.35)",
              }}
            />
            <motion.div
              style={{
                position: "absolute",
                right: -9,
                top: "50%",
                width: 16,
                height: 16,
                borderRadius: "50%",
                transform: "translateY(-50%)",
                background: "radial-gradient(circle, rgba(230,248,255,0.45) 0%, rgba(180,225,255,0.18) 45%, transparent 75%)",
                filter: "blur(1.4px)",
              }}
              animate={{ scale: [0.85, 1.18, 0.92], opacity: [0.6, 1, 0.7] }}
              transition={{ duration: 0.22, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

/* ══════════════════════════════════════════════
   FIREFLIES — warm golden, low opacity, life
   ══════════════════════════════════════════════ */
const Fireflies = () => {
  const flies = useMemo(() =>
    Array.from({ length: 12 }, (_, i) => ({
      id: i,
      size: 1.2 + (i % 3) * 0.5,
      left: 6 + ((i * 8.7) % 88),
      top: 50 + ((i * 6.5) % 32),
      dx: ((i % 5) - 2) * 30,
      dy: -35 - (i % 4) * 25,
      dur: 14 + (i % 5) * 3,
      delay: i * 0.9,
    })), []
  );

  return (
    <div className="absolute inset-0 pointer-events-none z-[15] overflow-hidden">
      {flies.map((f) => (
        <motion.div
          key={f.id}
          className="absolute rounded-full"
          style={{
            width: f.size,
            height: f.size,
            left: `${f.left}%`,
            top: `${f.top}%`,
            background: "#F5A623",
            boxShadow: `0 0 ${f.size * 3}px ${f.size}px rgba(245,166,35,0.45)`,
          }}
          animate={{
            y: [0, f.dy, f.dy * 1.25],
            x: [0, f.dx, f.dx * 0.85],
            opacity: [0, 0.45, 0.28, 0],
          }}
          transition={{
            duration: f.dur,
            repeat: Infinity,
            ease: "easeInOut",
            delay: f.delay,
          }}
        />
      ))}
    </div>
  );
};

/* ══════════════════════════════════════════════
   LANDSCAPE LAYERS — cinematic depth
   ══════════════════════════════════════════════ */
const LandscapeLayers = ({ scrollY }: { scrollY: any }) => {
  const y1 = useTransform(scrollY, [0, 600], [0, -18]);
  const y2 = useTransform(scrollY, [0, 600], [0, -10]);
  const y3 = useTransform(scrollY, [0, 600], [0, -5]);
  const y4 = useTransform(scrollY, [0, 600], [0, -2]);
  const y5 = useTransform(scrollY, [0, 600], [0, 0]);

  return (
    <div className="absolute inset-x-0 bottom-0 w-full h-[55vh] pointer-events-none select-none">
      {/* Subtle horizon atmospheric haze near horizon (treeline) */}
      <div
        className="absolute inset-x-0 bottom-[16%] h-[28%] z-[7] pointer-events-none"
        style={{
          background: "linear-gradient(to top, rgba(10, 35, 79, 0.22) 0%, transparent 100%)",
        }}
      />

      {/* Layer 1 — Distant mountains, deep blue-grey */}
      <motion.svg
        style={{ y: y1 }}
        className="absolute inset-0 w-full h-full z-[4]"
        viewBox="0 0 1440 380"
        preserveAspectRatio="xMidYMax meet"
      >
        <path
          fill="#0C1A2E"
          d="M0 200 C120 155 260 120 400 148 C520 172 600 130 720 145 C840 160 930 118 1060 140 C1180 160 1310 145 1440 162 L1440 380 L0 380 Z"
        />
      </motion.svg>

      {/* Layer 2 — Far hills, dark forest green */}
      <motion.svg
        style={{ y: y2 }}
        className="absolute inset-0 w-full h-full z-[5]"
        viewBox="0 0 1440 380"
        preserveAspectRatio="xMidYMax meet"
      >
        <path
          fill="#0A1F10"
          d="M0 240 C80 210 180 190 280 205 C370 218 430 195 520 208 C610 222 680 200 780 215 C880 230 960 205 1060 218 C1160 232 1290 215 1440 228 L1440 380 L0 380 Z"
        />
      </motion.svg>

      {/* Layer 3 — Mid forest with tree silhouettes */}
      <motion.svg
        style={{ y: y3 }}
        className="absolute inset-0 w-full h-full z-[6]"
        viewBox="0 0 1440 380"
        preserveAspectRatio="xMidYMax meet"
      >
        {/* Base hill */}
        <path
          fill="#0D2415"
          d="M0 270 C60 255 140 248 210 260 C280 272 340 255 410 265 C490 276 560 258 640 268 C720 278 810 260 900 272 C990 284 1080 265 1170 275 C1260 285 1350 270 1440 278 L1440 380 L0 380 Z"
        />
        {/* Pine tree silhouettes — left cluster */}
        <polygon points="50,268 65,240 80,268" fill="#091B0C" />
        <polygon points="85,268 103,235 121,268" fill="#091B0C" />
        <polygon points="120,268 136,245 152,268" fill="#0A1E0D" />
        <polygon points="155,268 168,252 181,268" fill="#091B0C" />
        <polygon points="190,268 208,238 226,268" fill="#091B0C" />
        {/* Center trees - sparse around campfire area */}
        <polygon points="540,268 555,248 570,268" fill="#091B0C" />
        <polygon points="575,268 588,252 601,268" fill="#0A1E0D" />
        {/* Skip campfire area (640-800) for visibility */}
        <polygon points="820,268 836,250 852,268" fill="#091B0C" />
        <polygon points="855,268 870,242 885,268" fill="#091B0C" />
        {/* Right cluster */}
        <polygon points="1060,268 1076,244 1092,268" fill="#091B0C" />
        <polygon points="1095,268 1114,236 1133,268" fill="#091B0C" />
        <polygon points="1138,268 1155,248 1172,268" fill="#0A1E0D" />
        <polygon points="1200,268 1216,250 1232,268" fill="#091B0C" />
        <polygon points="1260,268 1278,240 1296,268" fill="#091B0C" />
        <polygon points="1310,268 1324,252 1338,268" fill="#0A1E0D" />
        <polygon points="1360,268 1376,244 1392,268" fill="#091B0C" />
      </motion.svg>

      {/* Layer 4 — Near dark ground with foreground trees */}
      <motion.svg
        style={{ y: y4 }}
        className="absolute inset-0 w-full h-full z-[7]"
        viewBox="0 0 1440 380"
        preserveAspectRatio="xMidYMax meet"
      >
        <path
          fill="#091910"
          d="M0 300 C50 292 120 285 200 295 C280 305 350 290 430 298 C510 306 580 293 660 300 C740 307 820 295 900 302 C980 309 1060 296 1150 303 C1240 310 1340 298 1440 304 L1440 380 L0 380 Z"
        />
        {/* Larger foreground trees — left side */}
        <polygon points="-10,300 15,255 40,300" fill="#060E08" />
        <polygon points="30,300 60,248 90,300" fill="#070F09" />
        <polygon points="95,300 118,268 141,300" fill="#060E08" />
        {/* Right side large trees */}
        <polygon points="1310,300 1338,252 1366,300" fill="#060E08" />
        <polygon points="1370,300 1398,260 1426,300" fill="#070F09" />
        <polygon points="1420,300 1445,270 1470,300" fill="#060E08" />
      </motion.svg>

      {/* Layer 5 — Foreground ground (darkest) */}
      <motion.svg
        style={{ y: y5 }}
        className="absolute inset-0 w-full h-full z-[8]"
        viewBox="0 0 1440 380"
        preserveAspectRatio="xMidYMax meet"
      >
        <path
          fill="#060D07"
          d="M0 330 C160 322 320 316 480 326 C600 334 680 320 720 325 C760 330 840 318 1000 326 C1160 334 1300 322 1440 328 L1440 380 L0 380 Z"
        />
        {/* Ground patch under campfire — slightly lighter warm earth */}
        <ellipse cx="720" cy="360" rx="90" ry="18" fill="#0F1608" opacity="0.6" />
      </motion.svg>
    </div>
  );
};

/* ══════════════════════════════════════════════
   ROOT & VINE TRANSITION SYSTEM
   Organic roots connecting hero → About
   ══════════════════════════════════════════════ */
const RootVineTransition = ({ scrollY }: { scrollY: any }) => {
  const opacity = useTransform(scrollY, [0, 200, 500], [0, 0.6, 1]);
  const y = useTransform(scrollY, [0, 400], [30, 0]);

  return (
    <motion.div
      style={{ opacity, y, height: "220px" }}
      className="absolute bottom-0 left-0 right-0 z-[20] pointer-events-none select-none"
    >
      <svg
        width="100%"
        height="220"
        viewBox="0 0 1440 220"
        preserveAspectRatio="xMidYMax meet"
        fill="none"
      >
        {/* Main root trunk from campfire center */}
        {/* Left main root */}
        <motion.path
          d="M720,0 C680,30 600,55 520,90 C440,125 360,140 280,160 C200,180 130,175 60,195"
          stroke="#1A2E0A"
          strokeWidth="3.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.5, delay: 1.5, ease: "easeInOut" }}
        />
        {/* Left branch 1 */}
        <motion.path
          d="M620,50 C580,70 540,88 500,108"
          stroke="#162608"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.8, delay: 2.2, ease: "easeInOut" }}
        />
        {/* Left branch 2 */}
        <motion.path
          d="M520,90 C490,105 460,118 430,135"
          stroke="#122005"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 2.6, ease: "easeInOut" }}
        />
        {/* Left branch leaf-lets */}
        <motion.path
          d="M500,108 C488,114 476,122 465,132"
          stroke="#0E1C04"
          strokeWidth="1"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, delay: 3.0, ease: "easeInOut" }}
        />
        <motion.path
          d="M430,135 C418,142 406,150 395,160"
          stroke="#0E1C04"
          strokeWidth="1"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, delay: 3.2, ease: "easeInOut" }}
        />

        {/* Right main root */}
        <motion.path
          d="M720,0 C760,30 840,55 920,90 C1000,125 1080,140 1160,160 C1240,180 1310,175 1380,195"
          stroke="#1A2E0A"
          strokeWidth="3.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.5, delay: 1.5, ease: "easeInOut" }}
        />
        {/* Right branch 1 */}
        <motion.path
          d="M820,50 C860,70 900,88 940,108"
          stroke="#162608"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.8, delay: 2.2, ease: "easeInOut" }}
        />
        {/* Right branch 2 */}
        <motion.path
          d="M920,90 C950,105 980,118 1010,135"
          stroke="#122005"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 2.6, ease: "easeInOut" }}
        />
        <motion.path
          d="M940,108 C952,114 964,122 975,132"
          stroke="#0E1C04"
          strokeWidth="1"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, delay: 3.0, ease: "easeInOut" }}
        />
        <motion.path
          d="M1010,135 C1022,142 1034,150 1045,160"
          stroke="#0E1C04"
          strokeWidth="1"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, delay: 3.2, ease: "easeInOut" }}
        />

        {/* Center downward root — goes straight into About */}
        <motion.path
          d="M720,0 C716,40 712,80 718,120 C722,155 716,185 720,220"
          stroke="#1A2E0A"
          strokeWidth="4"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.8, delay: 1.3, ease: "easeInOut" }}
        />
        {/* Center sub-root left */}
        <motion.path
          d="M716,80 C700,100 685,115 668,135"
          stroke="#152206"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.6, delay: 2.4, ease: "easeInOut" }}
        />
        {/* Center sub-root right */}
        <motion.path
          d="M718,120 C734,138 748,152 762,168"
          stroke="#152206"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.6, delay: 2.7, ease: "easeInOut" }}
        />

        {/* Leaf shapes on roots */}
        <motion.ellipse cx="500" cy="108" rx="8" ry="4" fill="#1A3A08" opacity="0.7"
          transform="rotate(-35 500 108)"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.55 }}
          transition={{ duration: 0.6, delay: 3.1 }}
        />
        <motion.ellipse cx="430" cy="135" rx="7" ry="3.5" fill="#172F07" opacity="0.65"
          transform="rotate(-25 430 135)"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.5 }}
          transition={{ duration: 0.6, delay: 3.4 }}
        />
        <motion.ellipse cx="940" cy="108" rx="8" ry="4" fill="#1A3A08" opacity="0.7"
          transform="rotate(35 940 108)"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.55 }}
          transition={{ duration: 0.6, delay: 3.1 }}
        />
        <motion.ellipse cx="1010" cy="135" rx="7" ry="3.5" fill="#172F07" opacity="0.65"
          transform="rotate(25 1010 135)"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.5 }}
          transition={{ duration: 0.6, delay: 3.4 }}
        />

        {/* Small glowing particles on roots */}
        {[
          { cx: 580, cy: 65 }, { cx: 460, cy: 120 }, { cx: 860, cy: 65 },
          { cx: 980, cy: 120 }, { cx: 720, cy: 90 }, { cx: 700, cy: 155 },
        ].map((pt, i) => (
          <motion.circle
            key={i}
            cx={pt.cx}
            cy={pt.cy}
            r="2.5"
            fill="#3F8F2A"
            opacity="0"
            animate={{ opacity: [0, 0.5, 0], scale: [0.8, 1.4, 0.8] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: 3.5 + i * 0.5 }}
          />
        ))}
      </svg>

      {/* Colour gradient — bleeds hero dark blue into About's earthy dark */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to bottom, transparent 0%, #0A0C06 55%, #12100A 80%, #17110D 100%)",
        }}
      />
    </motion.div>
  );
};

/* ══════════════════════════════════════════════
   AMBIENT DISCOVERY HINTS — ultra subtle
   ══════════════════════════════════════════════ */
const DiscoveryHints = () => (
  <div className="absolute inset-0 pointer-events-none select-none z-[3] overflow-hidden">
    {/* Compass — faded, top area */}
    <svg className="absolute top-[6%] left-[5%] w-14 h-14 opacity-[0.06]" viewBox="0 0 56 56" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="0.5">
      <circle cx="28" cy="28" r="24" />
      <circle cx="28" cy="28" r="16" />
      <circle cx="28" cy="28" r="4" />
      <path d="M28 4 L31 18 L28 22 L25 18 Z" fill="rgba(255,255,255,0.6)" stroke="none" />
      <path d="M28 52 L31 38 L28 34 L25 38 Z" fill="rgba(255,255,255,0.3)" stroke="none" />
      <path d="M4 28 L18 31 L22 28 L18 25 Z" fill="rgba(255,255,255,0.3)" stroke="none" />
      <path d="M52 28 L38 31 L34 28 L38 25 Z" fill="rgba(255,255,255,0.6)" stroke="none" />
      <text x="28" y="8" textAnchor="middle" fontSize="5" fill="rgba(255,255,255,0.5)" fontFamily="serif">N</text>
    </svg>

    {/* Coordinate markings — top left */}
    <div className="absolute top-5 left-5 opacity-[0.07]">
      <span className="font-mono text-[7px] text-white tracking-widest block">17°22′N</span>
      <span className="font-mono text-[7px] text-white tracking-widest block">78°28′E</span>
    </div>

    {/* Explorer flag marker — right side mid */}
    <svg className="absolute right-[12%] top-[42%] w-5 h-7 opacity-[0.08]" viewBox="0 0 16 24" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="0.8">
      <line x1="3" y1="1" x2="3" y2="23" strokeLinecap="round" />
      <path d="M3 2 L14 6 L3 10 Z" fill="rgba(255,255,255,0.4)" />
    </svg>

    {/* Explorer symbol — bottom left area */}
    <svg className="absolute left-[8%] bottom-[36%] w-8 h-8 opacity-[0.06]" viewBox="0 0 32 32" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="0.7">
      <circle cx="16" cy="16" r="13" />
      <path d="M16 3 V29 M3 16 H29" strokeDasharray="2,3" opacity="0.6" />
      <circle cx="16" cy="16" r="3" />
    </svg>

    {/* Chart scale line — bottom right */}
    <div className="absolute bottom-[28%] right-[6%] opacity-[0.06]">
      <div className="flex items-center gap-0.5">
        <div className="w-px h-3 bg-white" />
        <div className="w-10 h-px bg-white" />
        <div className="w-px h-3 bg-white" />
      </div>
      <span className="font-mono text-[6px] text-white tracking-widest block mt-0.5 text-center">1:250k</span>
    </div>
  </div>
);

/* ══════════════════════════════════════════════
   HERO CONTENT — centered, clean, premium
   ══════════════════════════════════════════════ */
const HeroContent = ({ onOpenCodex }: { onOpenCodex: () => void }) => {
  return (
    <div
      className="relative z-[12] flex flex-col items-center text-center max-w-3xl px-4"
      style={{ marginTop: "-8vh" }}
    >
      {/* Eyebrow */}
      <span
        className="font-mono text-[9px] sm:text-[10px] tracking-[0.55em] uppercase font-semibold mb-5"
        style={{ color: "rgba(245,166,35,0.6)" }}
      >
        THE EXPEDITION BEGINS
      </span>

      {/* Name */}
      <h1
        className="font-display font-extrabold leading-[0.9] tracking-tight mb-5"
        style={{
          fontSize: "clamp(4rem,9vw,7.5rem)",
          color: "#F5F1EB",
          textShadow: "0 2px 40px rgba(0,0,0,0.6), 0 0 80px rgba(245,166,35,0.07)",
        }}
      >
        Dhanush
      </h1>

      {/* Role strip */}
      <p
        className="font-sans text-sm sm:text-base font-light mb-4 tracking-wide"
        style={{ color: "rgba(200,190,170,0.7)" }}
      >
        Full-Stack Developer&nbsp;&nbsp;·&nbsp;&nbsp;Backend Engineer&nbsp;&nbsp;·&nbsp;&nbsp;Builder
      </p>

      {/* Description */}
      <p
        className="font-sans text-[14px] sm:text-[15px] font-light max-w-[520px] leading-relaxed mb-10"
        style={{ color: "rgba(200,190,170,0.5)" }}
      >
        Crafting scalable systems, intelligent products,
        and meaningful digital experiences.
      </p>

      {/* CTA */}
      <button
        onClick={onOpenCodex}
        className="group relative flex flex-col items-center gap-2 cursor-pointer focus:outline-none"
      >
        <span
          className="font-mono text-[9px] uppercase tracking-[0.35em] transition-colors duration-300"
          style={{ color: "rgba(245,166,35,0.5)" }}
        >
          Begin The Journey
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-4 h-4" style={{ color: "rgba(245,166,35,0.4)" }} />
        </motion.div>
      </button>
    </div>
  );
};

/* ══════════════════════════════════════════════
   CAMPFIRE WRAPPER (positioned correctly)
══════════════════════════════════════════════ */
const CampfireWrapper = ({ scrollY }: { scrollY: any }) => {
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <motion.div
      style={{
        opacity,
        bottom: "12.8%",
        left: "50%",
        transform: "translateX(-50%) scale(1.28)",
        transformOrigin: "center bottom",
      }}
      className="absolute z-[16] pointer-events-none select-none"
    >
      {/* Ground illumination */}
      <div
        style={{
          position: "absolute",
          width: 320,
          height: 90,
          bottom: -12,
          left: "50%",
          transform: "translateX(-50%)",
          background: "radial-gradient(ellipse at center bottom, rgba(245,120,30,0.2) 0%, rgba(200,80,10,0.1) 35%, transparent 70%)",
          filter: "blur(10px)",
        }}
      />
      {/* Wider ambient glow */}
      <div
        style={{
          position: "absolute",
          width: 420,
          height: 220,
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          background: "radial-gradient(ellipse at center bottom, rgba(245,140,30,0.13) 0%, rgba(200,90,10,0.06) 42%, transparent 72%)",
          filter: "blur(28px)",
        }}
      />

      {/* Flame SVG */}
      <svg width="68" height="78" viewBox="0 0 68 78" style={{ position: "relative", zIndex: 1 }}>
        {/* Logs */}
        <ellipse cx="34" cy="66" rx="22" ry="5.5" fill="#160B04" opacity="0.9" />
        <line x1="13" y1="66" x2="55" y2="62" stroke="#261005" strokeWidth="5" strokeLinecap="round" />
        <line x1="15" y1="70" x2="53" y2="67" stroke="#1E0D04" strokeWidth="4" strokeLinecap="round" />

        {/* Outer flame */}
        <motion.path
          d="M34,60 C26,50 22,38 28,26 C30,22 32,26 34,22 C36,18 34,14 36,10 C42,20 44,30 40,40 C46,32 48,22 44,14 C50,24 50,38 46,50 C50,42 54,32 50,22 C56,36 52,50 42,58 Z"
          fill="#D85808"
          animate={{
            scaleX: [1, 1.06, 0.96, 1.04, 1],
            scaleY: [1, 1.10, 0.93, 1.07, 1],
            opacity: [0.92, 1, 0.88, 0.98, 0.92],
          }}
          style={{ transformOrigin: "34px 60px" }}
          transition={{ duration: 0.78, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Mid amber flame */}
        <motion.path
          d="M34,60 C28,52 26,42 30,32 C32,28 34,32 34,28 C36,24 34,20 36,16 C40,26 42,36 38,44 C42,36 44,28 40,20 C46,30 44,44 40,54 Z"
          fill="#F58F18"
          animate={{
            scaleY: [1, 1.14, 0.91, 1.10, 1],
            opacity: [0.88, 1, 0.84, 0.96, 0.88],
          }}
          style={{ transformOrigin: "34px 60px" }}
          transition={{ duration: 0.62, repeat: Infinity, ease: "easeInOut", delay: 0.08 }}
        />
        {/* Inner yellow */}
        <motion.path
          d="M34,60 C30,54 28,46 32,38 C33,35 34,38 34,35 C35,32 33,29 35,26 C38,32 39,40 36,46 C39,40 41,34 39,28 C43,36 41,48 37,56 Z"
          fill="#FFC038"
          animate={{
            scaleY: [1, 1.16, 0.88, 1.12, 1],
            opacity: [0.82, 1, 0.78, 0.94, 0.82],
          }}
          style={{ transformOrigin: "34px 60px" }}
          transition={{ duration: 0.5, repeat: Infinity, ease: "easeInOut", delay: 0.18 }}
        />
        {/* Core white-yellow */}
        <motion.ellipse
          cx="34" cy="50" rx="3" ry="5.5"
          fill="#FFF3C0"
          animate={{ scaleY: [1, 1.2, 0.86, 1.15, 1], opacity: [0.78, 1, 0.72, 0.92, 0.78] }}
          style={{ transformOrigin: "34px 50px" }}
          transition={{ duration: 0.44, repeat: Infinity, ease: "easeInOut", delay: 0.12 }}
        />
      </svg>

      {/* Embers */}
      {[
        { dx: -16, delay: 0,   size: 1.5, dur: 3.1 },
        { dx: 10,  delay: 0.8, size: 1.1, dur: 2.7 },
        { dx: -5,  delay: 1.4, size: 1.3, dur: 3.4 },
        { dx: 20,  delay: 0.3, size: 1.0, dur: 2.4 },
        { dx: -24, delay: 1.9, size: 1.2, dur: 3.0 },
        { dx: 13,  delay: 2.3, size: 1.1, dur: 2.6 },
        { dx: -2,  delay: 1.0, size: 1.4, dur: 3.7 },
      ].map((e, i) => (
        <motion.div
          key={i}
          style={{
            position: "absolute",
            width: e.size * 2,
            height: e.size * 2,
            borderRadius: "50%",
            background: "#FF9030",
            boxShadow: `0 0 ${e.size * 3}px ${e.size}px rgba(255,140,30,0.7)`,
            bottom: 6,
            left: `calc(50% + ${e.dx}px)`,
          }}
          animate={{
            y: [0, -60 - i * 7],
            x: [0, e.dx * 0.4],
            opacity: [0.85, 0.5, 0],
            scale: [1, 0.3],
          }}
          transition={{
            duration: e.dur,
            repeat: Infinity,
            ease: "easeOut",
            delay: e.delay,
            repeatDelay: 0.3,
          }}
        />
      ))}
    </motion.div>
  );
};

/* ══════════════════════════════════════════════
   MAIN HERO EXPORT
══════════════════════════════════════════════ */
export default function Hero({ onOpenCodex }: HeroProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden select-none"
      style={{
        background: "linear-gradient(175deg, #020817 0%, #041530 25%, #071B45 55%, #0A234F 80%, #0B1E3A 100%)",
      }}
    >
      {/* Sky stars */}
      <StarField />

      {/* Moon */}
      <Moon />

      {/* Shooting stars */}
      <ShootingStars />

      {/* Ambient discovery hints */}
      <DiscoveryHints />

      {/* Central ambient glow — very soft moonlight */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3, delay: 1 }}
        className="absolute pointer-events-none z-[1]"
        style={{
          width: 800,
          height: 500,
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          background: "radial-gradient(ellipse, rgba(200,220,255,0.025) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* Hero text */}
      <HeroContent onOpenCodex={onOpenCodex} />

      {/* Landscape silhouette layers with parallax */}
      <LandscapeLayers scrollY={scrollY} />

      {/* Campfire — positioned at tree line */}
      <CampfireWrapper scrollY={scrollY} />

      {/* Fireflies over the landscape */}
      <Fireflies />

      {/* Root/vine organic transition — slides in as you scroll */}
      <RootVineTransition scrollY={scrollY} />

      {/* Final colour blend — hero dark blue → About's earthy brown */}
      <div
        className="absolute inset-x-0 bottom-0 h-32 pointer-events-none z-[18]"
        style={{
          background: "linear-gradient(to bottom, transparent 0%, #0A0D06 60%, #13100A 100%)",
        }}
      />
    </section>
  );
}
