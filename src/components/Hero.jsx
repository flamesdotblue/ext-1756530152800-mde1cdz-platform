import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative" id="home">
      <div className="relative h-[72vh] md:h-[80vh]">
        <Spline
          scene="https://my.spline.design/animatedshapeblend-hPWufzVyleqvxFebWTsx99DT/"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black" />

        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="w-full md:max-w-2xl"
            >
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
                Creative Technologist crafting AR filters and weird web experiments
              </h1>
              <p className="mt-4 text-white/80 text-lg">
                I design playful, glitchy, and interactive digital things. Hover around—there are Easter eggs.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#work" className="rounded-full bg-white text-black px-5 py-2 font-medium hover:shadow-[0_0_40px_rgba(255,255,255,0.35)] transition-shadow">
                  View Projects
                </a>
                <a href="#contact" className="rounded-full border border-white/30 px-5 py-2 font-medium hover:border-white hover:bg-white/10 transition-colors">
                  Get in touch
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-10" id="work">
        <GlitchTicker />
      </div>
    </section>
  );
}

function GlitchTicker() {
  const words = [
    'AR', 'WebGL', 'Shaders', 'Spark AR', 'TikTok Effects', 'Creative Code', 'Three.js', 'Depth', 'Face Tracking', 'Generative', 'R&D'
  ];
  return (
    <div className="relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.02]">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent pointer-events-none" />
      <div className="flex gap-8 whitespace-nowrap py-3 text-sm tracking-wider">
        {[0,1].map((i) => (
          <motion.div
            key={i}
            className="flex gap-8 min-w-full"
            animate={{ x: ['0%', '-100%'] }}
            transition={{ duration: 18, ease: 'linear', repeat: Infinity }}
          >
            {words.map((w, idx) => (
              <span key={`${i}-${idx}`} className="px-3 text-white/70 hover:text-white transition-colors glitch-lite">
                {w}
              </span>
            ))}
          </motion.div>
        ))}
      </div>
      <style>{`
        .glitch-lite { position: relative; }
        .glitch-lite:hover { text-shadow: -1px 0 #22d3ee, 1px 0 #f472b6; }
      `}</style>
    </div>
  );
}
