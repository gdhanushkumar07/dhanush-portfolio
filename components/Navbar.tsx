"use client";

import React, { useState, useEffect } from 'react';
import { Compass, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavItem {
  id: string;
  label: string;
  href: string;
}

export default function Navbar() {
  const [showFloatingNav, setShowFloatingNav] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: NavItem[] = [
    { id: 'hero', label: 'Home', href: '#hero' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'projects', label: 'Projects', href: '#projects' },
    { id: 'skills', label: 'Skills', href: '#skills' },
    { id: 'achievements', label: 'Achievements', href: '#achievements' },
    { id: 'contact', label: 'Connect', href: '#contact' },
  ];

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const threshold = window.innerHeight * 0.16;
          setShowFloatingNav(window.scrollY > threshold);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    const sections = ['hero', 'about', 'projects', 'skills', 'achievements', 'contact'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-25% 0px -65% 0px",
        threshold: 0,
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* 1. Immersive Top Header (Absolute, scrolls away with the page) */}
      <header className="absolute top-0 left-0 w-full z-40 bg-transparent py-6 select-none pointer-events-auto">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 flex justify-between items-center">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleScrollTo(e, '#hero')}
            className="flex items-center space-x-2.5 group focus:outline-none"
            id="nav-logo"
          >
            <div className="w-8 h-8 rounded-lg bg-accent-amber/10 border border-accent-amber/40 flex items-center justify-center transition-all duration-300 group-hover:bg-accent-amber group-hover:border-accent-amber">
              <Compass className="w-4.5 h-4.5 text-accent-amber transition-colors duration-300 group-hover:text-bg-void" />
            </div>
            <span className="font-display font-bold text-text-primary text-xl tracking-tight group-hover:text-accent-amber transition-colors">
              Dhanush<span className="text-accent-amber">.</span>
            </span>
          </a>

          {/* Desktop/Tablet Direct Items (Optional fallback if not scrolled) */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-slate-900/60 border border-white/10 text-text-primary hover:bg-slate-800 transition-colors pointer-events-auto"
            aria-label="Open Navigation Menu"
            style={{ minHeight: "44px", minWidth: "44px" }}
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* 2. Scroll-Activated Floating Navigation (Pill Navigation for Desktop) */}
      <motion.div
        initial={{ opacity: 0, y: -20, x: "-50%" }}
        animate={{
          opacity: showFloatingNav ? 1 : 0,
          y: showFloatingNav ? 0 : -20,
          x: "-50%",
          pointerEvents: showFloatingNav ? "auto" : "none"
        }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-6 left-1/2 z-50 select-none hidden md:block"
      >
        <nav
          className="flex items-center px-4 sm:px-6 py-2 bg-white/92 backdrop-blur-xl border border-white/60 shadow-[0_10px_40px_rgba(0,0,0,0.12)] rounded-full"
          style={{
            background: "rgba(255, 255, 255, 0.92)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255, 255, 255, 0.6)",
            boxShadow: "0 10px 40px rgba(0,0,0,0.12)",
            borderRadius: "999px",
          }}
          id="floating-nav-pill"
        >
          <ul className="flex items-center space-x-1 sm:space-x-4">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id} className="relative">
                  <a
                    href={item.href}
                    onClick={(e) => handleScrollTo(e, item.href)}
                    className={`px-3 py-2 text-xs font-semibold tracking-wider transition-colors duration-200 block relative uppercase ${
                      isActive ? 'text-amber-800' : 'text-slate-500 hover:text-slate-900'
                    }`}
                    style={{ minHeight: "44px", display: "flex", alignItems: "center" }}
                    id={`floating-nav-item-${item.id}`}
                  >
                    <span className="relative z-10">{item.label}</span>
                    {isActive && (
                      <motion.span
                        layoutId="activeUnderline"
                        className="absolute bottom-0.5 left-2.5 right-2.5 h-[2.5px] bg-[#D4AF37] rounded-full"
                        transition={{ type: "spring", stiffness: 350, damping: 28 }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </motion.div>

      {/* Mobile Floating Menu Button (Shows only on scroll on mobile) */}
      <div className="fixed bottom-6 right-6 z-50 md:hidden pointer-events-auto">
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: showFloatingNav ? 1 : 0,
            opacity: showFloatingNav ? 1 : 0
          }}
          onClick={() => setMobileMenuOpen(true)}
          className="w-12 h-12 rounded-full bg-white text-slate-900 shadow-xl border border-slate-200 flex items-center justify-center hover:bg-slate-100 transition-transform active:scale-95"
          style={{ minHeight: "44px", minWidth: "44px" }}
          aria-label="Open menu button"
        >
          <Menu className="w-6 h-6" />
        </motion.button>
      </div>

      {/* 3. Fully Responsive Mobile Hamburger Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black z-50 md:hidden cursor-pointer"
            />

            {/* Slide-out Drawer Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[80vw] max-w-[320px] bg-[#120a06] border-l border-amber-900/20 z-50 shadow-2xl md:hidden flex flex-col p-6 pointer-events-auto select-none"
            >
              {/* Header inside drawer */}
              <div className="flex justify-between items-center mb-10 pb-4 border-b border-amber-950/20">
                <span className="font-mono text-xs uppercase tracking-widest text-[#C58B2A] font-extrabold">
                  CHAPTER INDEX
                </span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-amber-950/10 text-text-primary hover:bg-amber-950/30"
                  aria-label="Close menu drawer"
                  style={{ minHeight: "44px", minWidth: "44px" }}
                >
                  <X className="w-5 h-5 text-[#FDFAF5]" />
                </button>
              </div>

              {/* Navigation Links inside drawer */}
              <nav className="flex-grow">
                <ul className="flex flex-col gap-3">
                  {navItems.map((item, idx) => {
                    const isActive = activeSection === item.id;
                    return (
                      <motion.li
                        key={item.id}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.05 }}
                      >
                        <a
                          href={item.href}
                          onClick={(e) => handleScrollTo(e, item.href)}
                          className={`flex items-center gap-3 w-full py-3.5 px-4 rounded-xl font-sans text-sm font-bold uppercase tracking-wider transition-all duration-200 border ${
                            isActive
                              ? 'bg-[#F1E7D4] text-[#211711] border-[#C58B2A]/30 shadow-md'
                              : 'bg-transparent text-[#C9B7A4]/80 border-transparent hover:text-white hover:bg-amber-950/10'
                          }`}
                          style={{ minHeight: "44px" }}
                        >
                          <span className="font-mono text-[9px] text-[#C58B2A] font-bold">0{idx + 1}</span>
                          <span>{item.label}</span>
                        </a>
                      </motion.li>
                    );
                  })}
                </ul>
              </nav>

              {/* Drawer footer details */}
              <div className="mt-auto pt-6 border-t border-amber-950/20 text-center font-mono text-[8px] text-[#C9B7A4]/30 uppercase tracking-[0.25em]">
                <span>EXPEDITION LIVE RECORD</span>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
