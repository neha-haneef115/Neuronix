   "use client";

import React from "react";

export default function OurPlatform() {
  return (
    <section className="min-h-screen text-white overflow-hidden relative">
     
    
      {/* Backed By Section */}
      <section className="relative z-10 px-8 py-16 text-center">
        <h2 className="text-2xl font-semibold text-gray-300 mb-12">
          Backed by 200+ Growing Businesses
        </h2>
        
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16 opacity-60">
          {/* Company logos - using styled divs as placeholders */}
          <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center text-2xl font-bold text-white">N</div>
          <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center text-2xl font-bold text-white">S</div>
          <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center text-2xl font-bold text-white">#</div>
          <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center text-2xl font-bold text-white">S</div>
          <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center text-2xl font-bold text-white">~</div>
          <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center text-xl font-bold text-white">hp</div>
          <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center text-2xl font-bold text-white">N</div>
          <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center text-2xl font-bold text-white">@</div>
        </div>
      </section>

      {/* Dashboard Preview Image */}
      <section className="relative z-10 px-8 py-16">
        <div className="relative w-full max-w-5xl mt-8 mb-8 mx-auto">
          <img 
            src="/dashboard-preview.svg" 
            alt="Dashboard Preview" 
            className="w-full rounded-lg shadow-2xl border border-purple-500/30"
          />
        </div>
      </section>
    </section>
  );
}