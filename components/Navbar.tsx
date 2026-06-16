"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Compass, Sparkles } from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
  href: string;
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navItems: NavItem[] = [
    { id: 'about', label: 'About', href: '#about' },
    { id: 'projects', label: 'Projects', href: '#projects' },
    { id: 'skills', label: 'Skills', href: '#skills' },
    { id: 'achievements', label: 'Achievements', href: '#achievements' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple intersection tracker
      const scrollPosition = window.scrollY + 200;
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
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      id="main-nav"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bg-void/85 border-b border-border-dim/80 backdrop-blur-md py-4 shadow-2xl'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 flex justify-between items-center animate-fade-in">
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

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8" id="nav-desktop-items">
          <ul className="flex space-x-6 items-center">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={item.href}
                    onClick={(e) => handleScrollTo(e, item.href)}
                    className="group relative py-2 px-1 text-sm font-medium tracking-wide transition-colors duration-200"
                    id={`nav-item-${item.id}`}
                  >
                    <span
                      className={`relative z-10 transition-colors duration-200 ${
                        isActive
                          ? 'text-accent-amber font-semibold'
                          : 'text-text-fog group-hover:text-text-primary'
                      }`}
                    >
                      {item.label}
                    </span>
                    {/* Glowing highlight indicator */}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent-amber rounded-full shadow-[0_0_8px_rgba(245,166,35,0.8)]" />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="h-4 w-px bg-border-dim/60" />

          {/* Quick Connect Beacon / Resume button */}
          <button
            onClick={() => {
              alert("Interactive Resume PDF download simulation.");
            }}
            className="cursor-pointer group flex items-center space-x-2 bg-[#F5A623]/5 border border-[#F5A623]/50 hover:border-accent-amber text-accent-amber text-xs font-semibold px-4.5 py-2 rounded-full transition-all duration-300 shadow-[0_0_12px_rgba(245,166,35,0.05)] hover:bg-accent-amber hover:text-bg-void"
            id="nav-resume-btn"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Interactive Resume</span>
          </button>
        </div>

        {/* Mobile Hamburger menu */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-text-primary hover:text-accent-amber focus:outline-none focus:ring-1 focus:ring-accent-amber/30 p-2 rounded"
          aria-label="Toggle navigation menu"
          id="nav-hamburger"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 top-[68px] h-[calc(100vh-68px)] bg-bg-void/98 backdrop-blur-xl flex flex-col justify-start px-8 pt-10 space-y-8 z-40"
          id="nav-mobile-overlay"
        >
          <ul className="space-y-4">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={item.href}
                    onClick={(e) => handleScrollTo(e, item.href)}
                    className="flex items-center justify-between border-b border-border-dim/40 pb-4 group"
                    id={`mobile-nav-item-${item.id}`}
                  >
                    <span
                      className={`font-display text-xl tracking-tight transition-colors ${
                        isActive ? 'text-accent-amber font-bold' : 'text-text-fog group-hover:text-text-primary'
                      }`}
                    >
                      {item.label}
                    </span>
                    {isActive ? (
                      <Sparkles className="w-4 h-4 text-accent-amber" />
                    ) : (
                      <Compass className="w-4 h-4 text-text-fog/30 transition-transform group-hover:rotate-45" />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          <button
            onClick={() => {
              setIsOpen(false);
              alert("Resume PDF Download Simulation.");
            }}
            className="cursor-pointer flex justify-center items-center gap-2 border border-accent-amber text-accent-amber py-3.5 px-6 rounded-xl font-medium tracking-wide transition duration-300 hover:bg-accent-amber hover:text-bg-void w-full"
            id="mobile-nav-resume-btn"
          >
            <FileText className="w-4 h-4" />
            <span>Download Journey Resume</span>
          </button>
        </div>
      )}
    </nav>
  );
}
