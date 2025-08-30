import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import ProjectGrid from './components/ProjectGrid';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-fuchsia-500 selection:text-white">
      <BackgroundFX />
      <NavBar />
      <Hero />
      <ProjectGrid />
      <Footer />
    </div>
  );
}

function BackgroundFX() {
  return (
    <>
      <div className="fixed inset-0 pointer-events-none" aria-hidden>
        <div className="absolute inset-0 opacity-40 mix-blend-screen" style={{
          background: 'radial-gradient(1200px 600px at 10% 10%, rgba(236,72,153,0.25), transparent 60%), radial-gradient(1000px 500px at 90% 20%, rgba(56,189,248,0.2), transparent 60%), radial-gradient(1000px 700px at 50% 90%, rgba(139,92,246,0.2), transparent 60%)'
        }} />
        <div className="absolute inset-0 opacity-[0.08]" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'100\' height=\'100\' viewBox=\'0 0 100 100\'%3E%3Cdefs%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3CfeColorMatrix type=\'saturate\' values=\'0\'/%3E%3C/filter%3E%3C/defs%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")'
        }} />
      </div>
    </>
  );
}
