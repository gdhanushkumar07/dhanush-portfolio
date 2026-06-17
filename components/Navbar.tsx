"use client";

import React, { useState, useEffect } from 'react';
import { Compass } from 'lucide-react';
import { motion } from 'framer-motion';

interface NavItem {
  id: string;
  label: string;
  href: string;
}

export default function Navbar() {
  const [showFloatingNav, setShowFloatingNav] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navItems: NavItem[] = [
    { id: 'about', label: 'About', href: '#about' },
    { id: 'projects', label: 'Projects', href: '#projects' },
    { id: 'skills', label: 'Skills', href: '#skills' },
    { id: 'achievements', label: 'Achievements', href: '#achievements' },
    { id: 'contact', label: 'Connect', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Show floating navigation after 15% to 20% viewport scroll
      const threshold = window.innerHeight * 0.16;
      setShowFloatingNav(window.scrollY > threshold);

      // Section intersection tracker
      const scrollPosition = window.scrollY + 120;
      const sections = ['hero', 'about', 'projects', 'skills', 'achievements', 'contact'];
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
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
        </div>
      </header>

      {/* 2. Scroll-Activated Floating Navigation (White Pill) */}
      <motion.div
        initial={{ opacity: 0, y: -20, x: "-50%" }}
        animate={{
          opacity: showFloatingNav ? 1 : 0,
          y: showFloatingNav ? 0 : -20,
          x: "-50%",
          pointerEvents: showFloatingNav ? "auto" : "none"
        }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-6 left-1/2 z-50 select-none"
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
                    className={`px-2.5 sm:px-3 py-1.5 text-[11px] sm:text-xs font-semibold tracking-wider transition-colors duration-200 block relative uppercase ${
                      isActive ? 'text-amber-800' : 'text-slate-500 hover:text-slate-900'
                    }`}
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
    </>
  );
}
