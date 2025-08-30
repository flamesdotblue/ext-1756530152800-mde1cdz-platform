import React from 'react';
import { Rocket, Star } from 'lucide-react';
import { motion } from 'framer-motion';

export default function NavBar() {
  const links = [
    { href: '#work', label: 'Work' },
    { href: '#experiments', label: 'Experiments' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <motion.a
          href="#"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 font-semibold tracking-tight"
        >
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-tr from-fuchsia-500 to-cyan-400 text-black">
            <Rocket size={16} />
          </span>
          <span className="text-white">glitch.lab</span>
        </motion.a>

        <ul className="hidden md:flex items-center gap-6 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative text-white/80 hover:text-white transition-colors"
              >
                <span className="glitch-link">{l.label}</span>
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full bg-white text-black px-4 py-2 text-sm font-medium hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-shadow"
        >
          <Star size={16} />
          Hire me
        </a>
      </nav>
      <style>{`
        .glitch-link {
          position: relative;
          display: inline-block;
        }
        .glitch-link::before, .glitch-link::after {
          content: attr(data-text);
          content: attr(data-text) / ""; /* safari fix */
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          overflow: hidden;
          clip-path: inset(0 0 0 0);
          opacity: 0;
          pointer-events: none;
        }
        .glitch-link:hover::before {
          opacity: 1;
          color: #22d3ee;
          transform: translate(1px, -1px);
          text-shadow: -1px 0 #06b6d4;
          animation: glitchShift 500ms steps(2, jump-none) infinite;
        }
        .glitch-link:hover::after {
          opacity: 1;
          color: #f472b6;
          transform: translate(-1px, 1px);
          text-shadow: 1px 0 #e879f9;
          animation: glitchShift2 500ms steps(2, jump-none) infinite;
        }
        @keyframes glitchShift { 50% { transform: translate(2px, -2px) } }
        @keyframes glitchShift2 { 50% { transform: translate(-2px, 2px) } }
      `}</style>
    </header>
  );
}
