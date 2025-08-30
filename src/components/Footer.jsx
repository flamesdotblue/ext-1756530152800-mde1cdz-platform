import React from 'react';
import { Github, Instagram, Mail, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-20" id="about">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="font-semibold tracking-tight text-lg">About</h3>
          <p className="text-white/70 mt-3 text-sm leading-relaxed">
            I build playful AR filters and experimental web experiences blending design, code, and a hint of chaos. Available for collaborations, commissions, and R&D.
          </p>
        </div>
        <div>
          <h3 className="font-semibold tracking-tight text-lg">Capabilities</h3>
          <ul className="mt-3 text-sm text-white/70 space-y-1">
            <li>— AR Effects (Instagram, TikTok)</li>
            <li>— Creative Coding, WebGL, Three.js</li>
            <li>— Generative Visuals, Audio-reactive</li>
            <li>— Rapid Prototyping & Experiments</li>
          </ul>
        </div>
        <div id="contact">
          <h3 className="font-semibold tracking-tight text-lg">Contact</h3>
          <div className="mt-4 flex flex-col gap-2">
            <a href="mailto:hello@example.com" className="inline-flex items-center gap-2 text-sm hover:text-white">
              <Mail size={16} /> hello@example.com
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm hover:text-white">
              <Github size={16} /> GitHub <ArrowUpRight size={14} className="opacity-60" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm hover:text-white">
              <Instagram size={16} /> Instagram <ArrowUpRight size={14} className="opacity-60" />
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-10 flex items-center justify-between text-xs text-white/50">
        <span>© {new Date().getFullYear()} glitch.lab — Built with love and weirdness</span>
        <span>Be kind • Stay curious</span>
      </div>
    </footer>
  );
}
