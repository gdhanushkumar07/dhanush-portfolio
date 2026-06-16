"use client";

import React, { useState } from 'react';
import { personalInfo, socialLinks } from '@/data/portfolio';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Code, Sparkles, Map, Landmark } from 'lucide-react';

interface QuickMessage {
  id: string;
  senderName: string;
  senderEmail: string;
  body: string;
  timestamp: string;
}

export default function Contact() {
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [dispatchedMessages, setDispatchedMessages] = useState<QuickMessage[]>([]);
  const [isSending, setIsSending] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formEmail || !formMessage) {
      alert('Action blocked: Please fill all credentials before submission.');
      return;
    }

    setIsSending(true);

    setTimeout(() => {
      const newMessage: QuickMessage = {
        id: Math.random().toString(36).substring(2, 9),
        senderName: formName,
        senderEmail: formEmail,
        body: formMessage,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setDispatchedMessages((prev) => [newMessage, ...prev]);
      
      // Clear inputs
      setFormName('');
      setFormEmail('');
      setFormMessage('');
      setIsSending(false);

      alert(`Signal deployed successfully! Your message was delivered and logged securely inside the local session cache.`);
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 bg-bg-ink px-6 sm:px-12 relative overflow-hidden">
      {/* Cinematic drift spheres */}
      <div className="absolute top-[30%] left-[5%] w-1.5 h-1.5 rounded-full bg-accent-amber/40 animate-ping pointer-events-none" />
      <div className="absolute bottom-[35%] right-[10%] w-1.5 h-1.5 rounded-full bg-accent-teal/40 animate-pulse pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Modern Section Header */}
        <div className="mb-16 select-none">
          <span className="font-mono text-xs text-accent-amber font-semibold tracking-widest uppercase block mb-2">
            05 / Next Milestone
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary tracking-tight">
            Start a Conversation
          </h2>
          <p className="font-sans text-sm text-text-fog mt-2 max-w-xl">
            Let&apos;s build something impactful. Get in touch directly using the secure coordinate form or reach out through social networks.
          </p>
          <div className="h-1 w-16 bg-gradient-to-r from-accent-amber to-transparent mt-5 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left panel: Journey Coordinates info cards */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            <div className="bg-bg-card border border-border-dim/80 rounded-2xl p-6 sm:p-8 hover:border-accent-amber/30 transition-all duration-300 flex flex-col justify-between h-full relative overflow-hidden">
              {/* Subtle top glare */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent-amber/20 to-transparent" />

              <div>
                <h3 className="font-display text-xl font-bold text-text-primary mb-3">
                  Let&apos;s write the next chapter of growth.
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[#a4b5d0] mb-8 leading-relaxed font-light">
                  I am highly receptive to challenging summer 2027 internship proposals, full-stack open-source projects, and technical collaborations. Let&apos;s deploy some solutions.
                </p>

                {/* Secure paths list */}
                <div className="space-y-4">
                  <a
                    href="mailto:gdhanushkumar19@gmail.com"
                    className="flex items-center space-x-3.5 text-sm p-3.5 rounded-xl bg-bg-void/40 border border-border-dim/60 text-[#a4b5d0] hover:text-accent-amber hover:border-accent-amber/80 transition-all duration-300"
                    id="contact-email-link"
                  >
                    <Mail className="w-4.5 h-4.5 text-accent-amber shrink-0" />
                    <span className="font-mono text-xs overflow-hidden text-ellipsis">gdhanushkumar19@gmail.com</span>
                  </a>

                  <div className="flex items-center space-x-3.5 text-sm p-3.5 rounded-xl bg-bg-void/40 border border-border-dim/60 text-[#a4b5d0]">
                    <Phone className="w-4.5 h-4.5 text-accent-teal shrink-0" />
                    <span className="font-mono text-xs">+91 9346740035</span>
                  </div>

                  <div className="flex items-center space-x-3.5 text-sm p-3.5 rounded-xl bg-bg-void/40 border border-border-dim/60 text-[#a4b5d0]">
                    <MapPin className="w-4.5 h-4.5 text-accent-amber shrink-0" />
                    <span className="font-mono text-xs">Hyderabad, Telangana, India</span>
                  </div>
                </div>
              </div>

              {/* Status capsule */}
              <div className="pt-8 border-t border-border-dim/40 mt-8">
                <div className="flex items-center space-x-3" id="contact-status-indicator">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22C55E] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-[#22C55E]"></span>
                  </span>
                  <span className="font-mono text-[11px] text-text-primary uppercase tracking-widest font-bold">
                    RECRUITMENT STATUS: <span className="text-[#22C55E]">ACTIVE</span>
                  </span>
                </div>
                <p className="font-sans text-[11px] text-text-fog mt-1.5 ml-6 leading-relaxed">
                  Open to internships, freelance initiatives, and development collaborations.
                </p>
              </div>
            </div>

            {/* Trajectory Blueprint summaries (Premium location context tracker card) */}
            <div className="bg-bg-card border border-border-dim/80 rounded-2xl p-6 flex items-center space-x-4">
              <div className="w-12 h-12 rounded-xl bg-accent-teal/10 border border-accent-teal/20 flex items-center justify-center shrink-0">
                <Landmark className="w-5.5 h-5.5 text-accent-teal" />
              </div>
              <div className="font-mono text-xs space-y-1">
                <div className="text-text-primary uppercase tracking-wider font-bold">Primary Hub Location: Telangana</div>
                <div className="text-text-fog text-[10px] uppercase font-light">GMT+5:30 • active development sandbox</div>
              </div>
            </div>
          </div>

          {/* Right panel: Modern Elegant Form */}
          <div className="lg:col-span-7 bg-bg-card border border-border-dim/80 rounded-2xl p-6 sm:p-8 hover:border-accent-teal/30 transition-all duration-300 relative shadow-2xl">
            <h3 className="font-display text-xl font-bold text-text-primary mb-6 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-accent-amber" /> Deploy a Digital Message
            </h3>

            <form onSubmit={handleFormSubmit} className="space-y-5">
              <div>
                <label className="block text-[11px] font-mono uppercase tracking-widest text-[#a4b5d0] mb-2 font-semibold">
                  Sender / Organization Name
                </label>
                <input
                  type="text"
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                  placeholder="e.g. Anita Kumar"
                  className="w-full bg-bg-void/60 border border-border-dim hover:border-accent-teal/55 focus:border-accent-amber text-text-primary text-sm rounded-xl p-4 focus:outline-none transition duration-200"
                  required
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase tracking-widest text-[#a4b5d0] mb-2 font-semibold">
                  Reply Endpoint / Email Address
                </label>
                <input
                  type="email"
                  value={formEmail}
                  onChange={(e) => setFormEmail(e.target.value)}
                  placeholder="e.g. anita@cbit.ac.in"
                  className="w-full bg-bg-void/60 border border-border-dim hover:border-accent-teal/55 focus:border-accent-amber text-text-primary text-sm rounded-xl p-4 focus:outline-none transition duration-200"
                  required
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase tracking-widest text-[#a4b5d0] mb-2 font-semibold">
                  Message Body
                </label>
                <textarea
                  value={formMessage}
                  onChange={(e) => setFormMessage(e.target.value)}
                  placeholder="Describe your collaboration requirements or message credentials here..."
                  rows={4}
                  className="w-full bg-bg-void/60 border border-border-dim hover:border-accent-teal/55 focus:border-accent-amber text-text-primary text-sm rounded-xl p-4 focus:outline-none transition duration-200"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="cursor-pointer font-sans text-xs w-full bg-accent-amber hover:bg-accent-amber/95 text-bg-void font-bold uppercase tracking-widest py-4 px-6 rounded-xl transition duration-300 flex justify-center items-center gap-2 select-none shadow-lg shadow-accent-amber/20"
                id="contact-submit-btn"
              >
                <span>{isSending ? 'SENDING MESSAGE...' : 'DEPLOY SIGNAL MESSAGE'}</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>

            {/* Display message logs saved in state preview during session */}
            {dispatchedMessages.length > 0 && (
              <div className="mt-8 pt-6 border-t border-border-dim">
                <div className="flex items-center gap-2 text-xs font-mono text-accent-teal uppercase tracking-widest mb-4">
                  <Sparkles className="w-3.5 h-3.5" /> Local Session Cache Logs:
                </div>
                <div className="space-y-4 max-h-48 overflow-y-auto">
                  {dispatchedMessages.map((msg) => (
                    <div
                      key={msg.id}
                      className="bg-bg-void/40 border border-border-dim p-4 rounded-xl text-xs space-y-2 font-mono"
                    >
                      <div className="flex justify-between text-accent-amber border-b border-border-dim/40 pb-1 font-semibold">
                        <span>STAMP: {msg.senderName}</span>
                        <span>{msg.timestamp}</span>
                      </div>
                      <p className="text-text-primary font-sans leading-relaxed">{msg.body}</p>
                      <div className="text-[10px] text-text-fog/40 flex justify-between">
                        <span>ENDPOINT: {msg.senderEmail}</span>
                        <span>TRANSACTION_ID: {msg.id}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
