import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Face Melt AR',
    tags: ['Spark AR', 'Distortion', 'Interaction'],
    color: 'from-fuchsia-500/40 to-cyan-400/40',
    egg: '(* ^▽^ *) secret melt!',
    link: '#',
  },
  {
    title: 'Glitch Garden',
    tags: ['WebGL', 'Shaders', 'Audio-reactive'],
    color: 'from-violet-500/40 to-emerald-400/40',
    egg: '¯\\_(ツ)_/¯ blossom glitch',
    link: '#',
  },
  {
    title: 'Depth Drip',
    tags: ['TikTok Effect', 'Depth', 'Particles'],
    color: 'from-cyan-400/40 to-rose-500/40',
    egg: '滴 drop drop drop',
    link: '#',
  },
  {
    title: 'Neon Trails',
    tags: ['Three.js', 'PostFX', 'Perf art'],
    color: 'from-amber-400/40 to-fuchsia-500/40',
    egg: '◎ trail captured',
    link: '#',
  },
  {
    title: 'Spectral Self',
    tags: ['Face Tracking', 'RGB Split'],
    color: 'from-emerald-400/40 to-blue-500/40',
    egg: '👻 boo! spectral mode',
    link: '#',
  },
  {
    title: 'Data Bloom',
    tags: ['Generative', 'Viz', 'Realtime'],
    color: 'from-pink-500/40 to-indigo-400/40',
    egg: '✿ data flowers',
    link: '#',
  },
];

export default function ProjectGrid() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16" id="experiments">
      <div className="flex items-end justify-between mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Projects & Experiments</h2>
        <span className="text-white/60 text-sm">Hover for surprises</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, idx) => (
          <ProjectCard key={p.title} project={p} delay={idx * 0.05} />
        ))}
      </div>

      <style>{`
        .card {
          position: relative;
          transform-style: preserve-3d;
          will-change: transform, filter;
        }
        .card:hover .card-egg {
          opacity: 1;
          transform: translateY(0) rotate(-1deg);
        }
        .card:hover .card-title {
          text-shadow: -1px 0 #22d3ee, 1px 0 #f472b6;
        }
        .rgb-split::before, .rgb-split::after {
          content: '';
          position: absolute; inset: 0; border-radius: 1rem;
          mix-blend-mode: screen; pointer-events: none; opacity: 0;
        }
        .rgb-split::before { box-shadow: 6px 0 0 rgba(34,211,238,0.25); transform: translateX(-2px); }
        .rgb-split::after { box-shadow: -6px 0 0 rgba(244,114,182,0.25); transform: translateX(2px); }
        .card:hover .rgb-split::before, .card:hover .rgb-split::after { opacity: 1; }
        .scanline { position: absolute; left:0; right:0; height: 2px; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent); opacity: 0; }
        .card:hover .scanline { animation: scan 900ms linear infinite; opacity: 1; }
        @keyframes scan { 0% { top: 0% } 100% { top: 100% } }
        .jitter:hover { animation: jitter 220ms steps(2, jump-none) infinite; }
        @keyframes jitter { 50% { transform: translate(1px, -1px) rotate(-0.2deg) } }
      `}</style>
    </section>
  );
}

function ProjectCard({ project, delay = 0 }) {
  return (
    <motion.a
      href={project.link}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, delay }}
      className="card group rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden hover:bg-white/[0.04] transition-colors"
    >
      <div className={`relative h-48 sm:h-56 bg-gradient-to-br ${project.color} overflow-hidden`}> 
        <div className="absolute inset-0 rgb-split" />
        <div className="scanline" />
        <NoiseTexture />
        <div className="absolute inset-0 flex items-end p-4">
          <div className="card-egg text-xs text-black bg-white/90 rounded-full px-3 py-1 translate-y-2 opacity-0 transition-all duration-300 shadow">
            {project.egg}
          </div>
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="card-title text-lg font-semibold tracking-tight jitter">{project.title}</h3>
          <span className="text-[10px] uppercase tracking-widest text-white/60 group-hover:text-white/80 transition-colors">Open</span>
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span key={t} className="text-xs text-white/70 bg-white/5 border border-white/10 rounded-full px-2 py-1">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
}

function NoiseTexture() {
  return (
    <div
      className="absolute inset-0 opacity-20 mix-blend-overlay"
      style={{
        backgroundImage:
          "url('data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'100\\' height=\\'100\\' viewBox=\\'0 0 100 100\\'%3E%3Cdefs%3E%3Cfilter id=\\'n\\'%3E%3CfeTurbulence type=\\'fractalNoise\\' baseFrequency=\\'0.8\\' numOctaves=\\'4\\' stitchTiles=\\'stitch\\'/%3E%3CfeColorMatrix type=\\'saturate\\' values=\\'0\\'/%3E%3C/filter%3E%3C/defs%3E%3Crect width=\\'100%25\\' height=\\'100%25\\' filter=\\'url(%23n)\\'/%3E%3C/svg%3E')",
      }}
    />
  );
}
