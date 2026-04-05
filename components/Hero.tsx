"use client";

import { useState } from "react";
import { Particles } from "@/components/ui/particles";
import { RippleButton } from "@/components/ui/ripple-button";

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section id="Home" className="text-white px-0 relative">
      <div className="absolute inset-0 overflow-hidden">
        <Particles quantity={30} />
      </div>

      {/* Navigation Bar */}
      <nav className="relative z-20 flex items-center justify-between px-8 py-10">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="/assets/Home/logo.png"
            alt="DataPulse Logo"
            className="h-8 w-auto"
          />
          <span className="text-3xl text-[#EFE5FC] font-bold">Neuronix</span>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden text-xs lg:flex items-center space-x-15">
          <a href="#Home" className="text-white hover:text-purple-300 transition-colors">Home</a>
          <a href="#OurPlatform" className="text-white hover:text-purple-300 transition-colors">Our Platform</a>
          <a href="#Features" className="text-white hover:text-purple-300 transition-colors">Features</a>
          <a href="#FAQ" className="text-white hover:text-purple-300 transition-colors">FAQ</a>
          <a href="#Contact" className="text-white hover:text-purple-300 transition-colors">Contact</a>
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <RippleButton>Contact Us</RippleButton>
        </div>

        {/* Hamburger Button (small/medium screens) */}
        <button
          className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-[6px] z-30 relative"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-[2px] bg-white transition-all duration-300 origin-center ${
              menuOpen ? "w-6 rotate-45 translate-y-[8px]" : "w-6"
            }`}
          />
          <span
            className={`block h-[2px] bg-white transition-all duration-300 ${
              menuOpen ? "w-0 opacity-0" : "w-6 opacity-100"
            }`}
          />
          <span
            className={`block h-[2px] bg-white transition-all duration-300 origin-center ${
              menuOpen ? "w-6 -rotate-45 -translate-y-[8px]" : "w-6"
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-10 bg-black/90 backdrop-blur-md flex flex-col items-center justify-center gap-8 transition-all duration-300 lg:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {["Home", "OurPlatform", "Features", "FAQ", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item}`}
            onClick={() => setMenuOpen(false)}
            className="text-2xl text-white hover:text-purple-300 transition-colors font-medium"
          >
            {item === "OurPlatform" ? "Our Platform" : item}
          </a>
        ))}
        <RippleButton>Contact Us</RippleButton>
      </div>

      {/* Hero Content */}
      <div
        className="relative z-10 flex flex-col items-center justify-center px-2 py-10 text-center font-poppins"
        style={{ fontFamily: "var(--font-poppins), system-ui, sans-serif" }}
      >
        <h1 className="text-5xl leading-[1.1] lg:text-[80px] font-bold mb-6 text-[#EFE5FC] font-poppins">
          See Your Data,
          <br />
          <span>Make Smarter Moves</span>
        </h1>

        <p className="text-md text-gray-300 max-w-xl mb-12 mt-10 leading-relaxed font-poppins">
          From automation to collaboration, our solution empowers your team to
          work smarter, not harder. Discover endless possibilities waiting for
          you.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <button className="bg-[#AF75FD] hover:bg-[#9C63E7] text-black/90 px-8 py-4 rounded-full font-medium transition-all transform hover:scale-105">
            Get Started Now
          </button>
          <RippleButton className="border-1 border-white/90 text-white/90 hover:bg-white/5 hover:text-white px-6 py-3 rounded-full font-medium transition-all">
            Try Tutorial Now
          </RippleButton>
        </div>
      </div>

      {/* CIRCLE WRAPPER — untouched from original */}
      <div className="absolute top-140 left-0 w-full h-full pointer-events-none">
        <div
          className="absolute left-1/2 -top-[2840px] -translate-x-1/2 w-[3000px] h-[3000px] rounded-full bg-transparent"
          style={{
            boxShadow: `inset 0 0 140px #4909aa90, inset 0 0 80px #6a07ff99`,
          }}
        />
      </div>
    </section>
  );
}