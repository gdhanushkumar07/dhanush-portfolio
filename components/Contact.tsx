"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';

/* ══════════════════════════════════════════════
   LIGHTHOUSE BEAM
══════════════════════════════════════════════ */
const LighthouseBeam = () => (
  <div className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none z-0 overflow-hidden w-full" style={{ height: "450px" }}>
    <motion.div
      animate={{ rotate: [0, 18, -18, 0] }}
      transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-0 left-1/2 w-[700px] origin-top-left"
      style={{
        height: "420px",
        background: "linear-gradient(to bottom, rgba(201,168,76,0.09) 0%, transparent 100%)",
        clipPath: "polygon(0 0, 50px 0, 100% 100%, -80% 100%)",
        transformOrigin: "0 0",
      }}
    />
    {/* Central glow point */}
    <div
      className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-1"
      style={{ boxShadow: "0 0 100px 50px rgba(201,168,76,0.12), 0 0 200px 100px rgba(180,120,30,0.07)" }}
    />
  </div>
);

/* ══════════════════════════════════════════════
   HARBOR OUTPOST DECORATIONS
══════════════════════════════════════════════ */
const HarborDecorations = () => (
  <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0">
    {/* Navigation chart grid */}
    <svg className="absolute inset-0 w-full h-full opacity-[0.022]" preserveAspectRatio="none">
      <defs>
        <pattern id="navgrid" width="100" height="100" patternUnits="userSpaceOnUse">
          <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#C9A84C" strokeWidth="0.4" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#navgrid)" />
    </svg>

    {/* Lighthouse silhouette */}
    <svg className="absolute right-[5%] bottom-[12%] w-20 h-40 opacity-[0.065]" viewBox="0 0 50 100" fill="none" stroke="#C9A84C" strokeWidth="0.9" strokeLinecap="round">
      <path d="M20 90 L24 90 L27 62 L17 62 Z" />
      <rect x="15" y="44" width="18" height="18" />
      <path d="M13 44 L35 44" />
      <path d="M16 38 L32 38 L30 44 L18 44 Z" />
      <circle cx="24" cy="33" r="6" />
      <path d="M10 33 L15 33 M33 33 L38 33" strokeWidth="0.7" />
      <path d="M24 27 V22" />
      <path d="M9 22 L14 27 M34 27 L39 22" strokeWidth="0.7" />
      {/* Signal light glow */}
      <circle cx="24" cy="33" r="9" opacity="0.2" />
    </svg>

    {/* Ship silhouette */}
    <svg className="absolute left-[3%] bottom-[18%] w-28 h-20 opacity-[0.055]" viewBox="0 0 80 55" fill="none" stroke="#C9A84C" strokeWidth="0.8" strokeLinecap="round">
      <path d="M8 42 Q40 28 72 42" />
      <path d="M40 42 V10" />
      <path d="M40 13 L58 30 L40 30" />
      <path d="M40 17 L22 34 L40 34" />
      <path d="M4 48 Q40 58 76 48" />
    </svg>

    {/* Second smaller ship */}
    <svg className="absolute left-[18%] bottom-[16%] w-16 h-12 opacity-[0.04]" viewBox="0 0 60 40" fill="none" stroke="#C9A84C" strokeWidth="0.7" strokeLinecap="round">
      <path d="M5 30 Q30 20 55 30" />
      <path d="M30 30 V8" />
      <path d="M30 10 L44 22 L30 22" />
    </svg>

    {/* Harbor dock */}
    <svg className="absolute bottom-0 left-0 right-0 w-full opacity-[0.055]" viewBox="0 0 1200 60" preserveAspectRatio="none" fill="none" stroke="#C9A84C" strokeWidth="0.5">
      <line x1="0" y1="16" x2="1200" y2="16" />
      <line x1="0" y1="30" x2="1200" y2="30" />
      <line x1="0" y1="44" x2="1200" y2="44" />
      {[80, 200, 320, 480, 600, 720, 880, 1000, 1120].map((x, i) => (
        <line key={i} x1={x} y1="0" x2={x} y2="60" />
      ))}
    </svg>

    {/* Wave patterns */}
    <svg className="absolute top-0 left-0 right-0 w-full opacity-[0.04]" viewBox="0 0 1200 30" preserveAspectRatio="none" fill="none" stroke="#C9A84C" strokeWidth="0.7">
      <path d="M0 15 Q150 5 300 15 T600 15 T900 15 T1200 15" />
      <path d="M0 22 Q150 12 300 22 T600 22 T900 22 T1200 22" />
    </svg>

    {/* Message bottle */}
    <svg className="absolute right-[18%] bottom-[22%] w-6 h-10 opacity-[0.065]" viewBox="0 0 20 36" fill="none" stroke="#C9A84C" strokeWidth="0.9" strokeLinecap="round">
      <path d="M8 4 C8 2 12 2 12 4 L12 8 C16 10 16 28 10 32 C4 28 4 10 8 8 Z" />
      <path d="M8 8 L12 8" />
      <path d="M7 4 L13 4" />
      <path d="M7 4 L8 2 L12 2 L13 4" />
      <path d="M8 16 L12 20 M8 22 L12 18" strokeWidth="0.6" />
    </svg>

    {/* Signal fire */}
    <svg className="absolute left-[8%] bottom-[24%] w-12 h-14 opacity-[0.06]" viewBox="0 0 40 48" fill="none" stroke="#C9A84C" strokeWidth="0.9">
      {/* Log base */}
      <path d="M8 40 L32 40 M10 44 L30 44" strokeLinecap="round" />
      <path d="M12 44 V40 M20 44 V40 M28 44 V40" />
      {/* Flames */}
      <path d="M20 38 Q14 30 18 20 Q22 28 20 22 Q24 30 22 20 Q26 30 20 38Z" strokeLinecap="round" />
    </svg>

    {/* Compass */}
    <svg className="absolute left-[12%] top-[20%] w-14 h-14 opacity-[0.05]" viewBox="0 0 56 56" fill="none" stroke="#C9A84C" strokeWidth="0.7">
      <circle cx="28" cy="28" r="24" /><circle cx="28" cy="28" r="16" /><circle cx="28" cy="28" r="4" />
      <path d="M28 4 L31 18 L28 22 L25 18 Z" fill="#C9A84C" opacity="0.6" stroke="none" />
      <path d="M28 52 L31 38 L28 34 L25 38 Z" fill="#C9A84C" opacity="0.3" stroke="none" />
      <path d="M4 28 L18 31 L22 28 L18 25 Z" fill="#C9A84C" opacity="0.3" stroke="none" />
      <path d="M52 28 L38 31 L34 28 L38 25 Z" fill="#C9A84C" opacity="0.6" stroke="none" />
    </svg>

    {/* Golden coins */}
    {[
      { x: "5%", y: "40%" }, { x: "95%", y: "55%" }, { x: "40%", y: "90%" },
    ].map((pos, i) => (
      <svg key={i} className="absolute w-3 h-3" style={{ left: pos.x, top: pos.y, opacity: 0.09 }}>
        <circle cx="6" cy="6" r="5" fill="#C6930A" />
        <circle cx="6" cy="6" r="3" fill="none" stroke="#FFD700" strokeWidth="0.5" />
      </svg>
    ))}

    {/* Floating dots */}
    {[
      { x: "8%", y: "22%" }, { x: "20%", y: "68%" }, { x: "58%", y: "12%" },
      { x: "78%", y: "55%" }, { x: "90%", y: "25%" }, { x: "45%", y: "78%" },
    ].map((pos, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 rounded-full bg-[#C9A84C]"
        style={{ left: pos.x, top: pos.y, opacity: 0.08 }}
        animate={{ y: [0, -20, 0], opacity: [0.04, 0.14, 0.04] }}
        transition={{ duration: 6 + i * 0.7, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
      />
    ))}

    {/* Expedition annotation */}
    <div className="absolute top-[12%] left-[6%] opacity-[0.06] -rotate-3 hidden lg:block">
      <span className="font-serif text-[9px] italic text-[#C9A84C] tracking-wide">final outpost · all routes end here</span>
    </div>

    {/* Vignette */}
    <div className="absolute inset-0"
      style={{ background: "radial-gradient(ellipse at center, transparent 30%, rgba(8,5,2,0.75) 100%)" }} />
  </div>
);

/* ══════════════════════════════════════════════
   COORDINATE ROW
══════════════════════════════════════════════ */
const CoordRow = ({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href?: string }) => {
  const inner = (
    <div className="group flex items-center gap-3.5 p-3.5 rounded-xl transition-all duration-300 hover:bg-[rgba(201,168,76,0.05)]"
      style={{ border: "1px solid rgba(201,168,76,0.08)" }}>
      <div
        className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-200 group-hover:border-[rgba(201,168,76,0.28)]"
        style={{ background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.14)", color: "#C9A84C" }}
      >
        {icon}
      </div>
      <div className="min-w-0">
        <span className="font-mono text-[8px] text-[#C9B7A4]/38 uppercase tracking-widest block mb-0.5">{label}</span>
        <span className="font-mono text-[11px] text-[#F5F1EB] group-hover:text-[#C9A84C] transition-colors duration-200 truncate block">{value}</span>
      </div>
    </div>
  );
  if (href) return <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="block">{inner}</a>;
  return <div>{inner}</div>;
};

/* ══════════════════════════════════════════════
   MAIN CONTACT SECTION — FINAL OUTPOST
══════════════════════════════════════════════ */
export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent(true);
      setName(''); setEmail(''); setMessage('');
      setTimeout(() => setSent(false), 5000);
    }, 1500);
  };

  const inputBase = "w-full font-mono text-[12.5px] text-[#F5F1EB] placeholder:text-[#C9B7A4]/28 bg-transparent focus:outline-none transition-all duration-300 resize-none";
  const inputWrap = {
    background: "rgba(28,20,14,0.55)",
    border: "1px solid rgba(201,168,76,0.12)",
    borderRadius: "12px",
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-28"
      style={{ background: "linear-gradient(to bottom, #17110D 0%, #1A130D 50%, #17110D 100%)" }}
    >
      {/* Grain */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay z-0"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }}
      />

      <LighthouseBeam />
      <HarborDecorations />

      <div className="max-w-[1100px] mx-auto px-6 md:px-10 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 select-none"
        >
          <span className="font-mono text-[10px] tracking-[8px] uppercase block mb-3" style={{ color: "rgba(201,168,76,0.6)" }}>
            05 / THE FINAL OUTPOST
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-[2.6rem] font-extrabold text-[#F5F1EB] tracking-tight leading-tight mb-4">
            All Routes Converge Here
          </h2>
          <p className="font-sans text-[15px] text-[#C9B7A4]/65 max-w-[520px] mx-auto leading-relaxed">
            The harbor where every expedition trail ends and the next one begins. Send your signal — the outpost is always manned.
          </p>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[rgba(201,168,76,0.28)]" />
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5" opacity="0.55">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[rgba(201,168,76,0.28)]" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.45fr] gap-8 items-start">

          {/* LEFT — Signal coordinates */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className="rounded-[22px] p-7 relative overflow-hidden"
              style={{ background: "rgba(28,20,14,0.92)", border: "1px solid rgba(201,168,76,0.10)", boxShadow: "0 24px 70px rgba(0,0,0,0.32)" }}
            >
              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-px"
                style={{ background: "linear-gradient(to right, transparent, rgba(201,168,76,0.42), transparent)" }} />
              {/* Wall engraving */}
              <div className="absolute top-0 left-0 right-0 h-7 flex items-center justify-center"
                style={{ background: "rgba(201,168,76,0.04)", borderBottom: "1px solid rgba(201,168,76,0.07)" }}>
                <span className="font-mono text-[6.5px] tracking-[0.4em] uppercase" style={{ color: "rgba(201,168,76,0.35)" }}>
                  SIGNAL STATION · FINAL OUTPOST
                </span>
              </div>

              <div className="relative z-10 pt-5">
                <div className="mb-6">
                  <span className="font-mono text-[8.5px] uppercase tracking-[0.25em] block mb-2" style={{ color: "rgba(201,168,76,0.55)" }}>
                    ✦ OUTPOST COORDINATES
                  </span>
                  <h3 className="font-serif text-[1.1rem] font-bold italic text-[#F5F1EB] leading-tight mb-2">
                    Let&apos;s write the next chapter.
                  </h3>
                  <p className="font-sans text-[11.5px] text-[#C9B7A4]/55 leading-relaxed">
                    Open to internship opportunities, freelance collaboration, and ambitious open-source ventures.
                  </p>
                </div>

                <div className="space-y-2">
                  <CoordRow icon={<Mail className="w-4 h-4" />} label="EMAIL SIGNAL" value="gdhanushkumar19@gmail.com" href="mailto:gdhanushkumar19@gmail.com" />
                  <CoordRow icon={<Phone className="w-4 h-4" />} label="VOICE CHANNEL" value="+91 9346740035" />
                  <CoordRow icon={<MapPin className="w-4 h-4" />} label="OUTPOST LOCATION" value="Hyderabad, Telangana, India" />
                  <CoordRow icon={<Linkedin className="w-4 h-4" />} label="LINKEDIN PORT" value="linkedin.com/in/gdhanushkumar" href="https://linkedin.com/" />
                  <CoordRow icon={<Github className="w-4 h-4" />} label="GITHUB VAULT" value="github.com/gdhanushkumar07" href="https://github.com/" />
                </div>

                {/* Active beacon status */}
                <div className="mt-6 pt-5 border-t border-[rgba(201,168,76,0.07)]">
                  <div className="flex items-start gap-3">
                    <div className="relative flex h-2.5 w-2.5 mt-1">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22C55E] opacity-70" />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#22C55E]" />
                    </div>
                    <div>
                      <span className="font-mono text-[9.5px] text-[#F5F1EB] uppercase tracking-widest font-bold block">
                        BEACON: <span className="text-[#22C55E]">OUTPOST ACTIVE</span>
                      </span>
                      <p className="font-sans text-[10px] text-[#C9B7A4]/38 mt-0.5">
                        Seeking Summer 2027 internships · GMT+5:30
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT — Message Scroll form */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          >
            <div
              className="rounded-[22px] overflow-hidden relative"
              style={{ background: "rgba(28,20,14,0.92)", border: "1px solid rgba(201,168,76,0.10)", boxShadow: "0 24px 70px rgba(0,0,0,0.32)" }}
            >
              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-px"
                style={{ background: "linear-gradient(to right, transparent, rgba(201,168,76,0.42), transparent)" }} />
              {/* Wall engraving */}
              <div className="absolute top-0 left-0 right-0 h-7 flex items-center justify-center"
                style={{ background: "rgba(201,168,76,0.04)", borderBottom: "1px solid rgba(201,168,76,0.07)" }}>
                <span className="font-mono text-[6.5px] tracking-[0.4em] uppercase" style={{ color: "rgba(201,168,76,0.35)" }}>
                  MESSAGE SCROLL · TRANSCRIBE YOUR SIGNAL
                </span>
              </div>

              <div className="relative z-10 p-8 pt-10">
                <div className="mb-7">
                  <span className="font-mono text-[8.5px] uppercase tracking-[0.25em] block mb-2" style={{ color: "rgba(201,168,76,0.55)" }}>
                    ✦ DISPATCH A MESSAGE SCROLL
                  </span>
                  <h3 className="font-serif text-[1.1rem] font-bold italic text-[#F5F1EB]">
                    Send a Signal to the Expedition Base
                  </h3>
                  <p className="font-sans text-[11px] text-[#C9B7A4]/45 mt-1">
                    Your scroll will be received and answered within the next expedition cycle.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Explorer Name */}
                  <div>
                    <label className="block font-mono text-[9px] uppercase tracking-[0.22em] text-[#C9B7A4]/42 mb-1.5">Explorer Name</label>
                    <div className="px-4 py-3" style={inputWrap}>
                      <input
                        id="contact-name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Arjun Mehta"
                        className={inputBase}
                        required
                      />
                    </div>
                  </div>

                  {/* Reply Coordinates */}
                  <div>
                    <label className="block font-mono text-[9px] uppercase tracking-[0.22em] text-[#C9B7A4]/42 mb-1.5">Reply Coordinates</label>
                    <div className="px-4 py-3" style={inputWrap}>
                      <input
                        id="contact-email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. arjun@cbit.ac.in"
                        className={inputBase}
                        required
                      />
                    </div>
                  </div>

                  {/* Message Scroll */}
                  <div>
                    <label className="block font-mono text-[9px] uppercase tracking-[0.22em] text-[#C9B7A4]/42 mb-1.5">Message Scroll</label>
                    <div className="px-4 py-3" style={inputWrap}>
                      <textarea
                        id="contact-message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Describe your expedition proposal, collaboration intent, or signal..."
                        rows={5}
                        className={inputBase}
                        required
                      />
                    </div>
                  </div>

                  {/* Launch Signal button */}
                  <button
                    id="contact-submit-btn"
                    type="submit"
                    disabled={sending || sent}
                    className="w-full font-mono text-[10.5px] font-bold uppercase tracking-widest py-4 px-6 rounded-xl transition-all duration-300 flex justify-center items-center gap-2.5 select-none relative overflow-hidden group"
                    style={{
                      background: sent
                        ? "rgba(34,197,94,0.14)"
                        : "rgba(201,168,76,0.11)",
                      border: sent
                        ? "1px solid rgba(34,197,94,0.38)"
                        : "1px solid rgba(201,168,76,0.28)",
                      color: sent ? "#22C55E" : "#C9A84C",
                    }}
                  >
                    {/* Hover shimmer */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.06), transparent)" }} />

                    {sent ? (
                      <>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M20 6L9 17l-5-5" /></svg>
                        SIGNAL LAUNCHED — SAFE HARBORS
                      </>
                    ) : sending ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 0.9, repeat: Infinity, ease: "linear" }}
                          className="w-3.5 h-3.5 border-2 border-[#C9A84C]/28 border-t-[#C9A84C] rounded-full"
                        />
                        TRANSMITTING SIGNAL...
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        LAUNCH SIGNAL
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Footer — expedition log closing */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="text-center mt-20 select-none"
        >
          <div className="h-px w-36 bg-gradient-to-r from-transparent via-[rgba(201,168,76,0.14)] to-transparent mx-auto mb-5" />
          <p className="font-mono text-[8.5px] text-[#C9B7A4]/22 uppercase tracking-[0.4em]">
            EXPEDITION LOG · GOLCONDA DHANUSH KUMAR · 17°22′N 78°28′E
          </p>
          <p className="font-mono text-[8.5px] text-[#C9B7A4]/18 uppercase tracking-[0.35em] mt-1">
            Curiosity today. Impact tomorrow.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
