"use client";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";

export default function Footer() {
  return (
    <footer
      id="Contact"
      className="font-poppins relative overflow-hidden"
      style={{ background: "#09011e" }}
    >
      {/* ── Watermark ── */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden">
        <span
          className="font-black leading-none whitespace-nowrap"
          style={{
            fontSize: "clamp(48px, 22vw, 320px)",
            letterSpacing: "-0.03em",
            color: "#150730",
          }}
        >
          Neuronix
        </span>
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 flex flex-col items-center px-4 sm:px-8 md:px-10 pt-10 sm:pt-12 md:pt-[44px] pb-4 sm:pb-6">

        {/* Nav */}
        <nav className="flex flex-wrap justify-center gap-x-5 gap-y-3 sm:gap-x-8 md:gap-x-9 mb-5 sm:mb-6">
          {[
            { label: "Home", highlight: true, id: "Home" },
            { label: "Our Platform", id: "OurPlatform" },
            { label: "Features", id: "Features" },
            { label: "FAQ", id: "FAQ" },
            { label: "Contact", id: "Contact" },
          ].map((item) => (
            <a
              key={item.label}
              href={`#${item.id}`}
              className="text-xs sm:text-[12.5px] tracking-wide transition-colors hover:opacity-80"
              style={{ color: item.highlight ? "#9C63E7" : "#EFE5FC" }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Tagline */}
        <p className="text-sm sm:text-base text-[#c3b5f3] text-center tracking-wide my-4 sm:my-5 md:my-[22px] max-w-xs sm:max-w-md md:max-w-xl">
          Smart financial tools that help businesses operate securely, stay reliable, and grow with confidence.
        </p>

        {/* Social icons */}
        <div className="flex gap-7 sm:gap-10 text-[#c3b5f3] text-2xl sm:text-[30px] md:text-[34px] mb-12 sm:mb-16 md:mb-[76px]">
          <a href="#" className="hover:text-white transition-colors"><FaSquareFacebook /></a>
          <a href="#" className="hover:text-white transition-colors"><FaLinkedin /></a>
          <a href="#" className="hover:text-white transition-colors"><AiFillInstagram /></a>
          <a href="#" className="hover:text-white transition-colors"><BsTwitterX /></a>
        </div>

        {/* Bottom bar */}
        <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0 pb-1 text-center sm:text-left">
          
          {/* Left */}
          <a href="#" className="text-xs sm:text-[15px] text-[#BAA6E2] hover:text-white transition-colors">
            Privacy Policy
          </a>

          {/* Center */}
          <span className="text-[10px] sm:text-[11.5px] text-[#BAA6E2]">
            © {new Date().getFullYear()} Neuronix. All rights reserved
          </span>

          {/* Right */}
          <a href="#" className="text-xs sm:text-[15px] text-[#BAA6E2] hover:text-white transition-colors">
            Terms of Service
          </a>
        </div>

      </div>
    </footer>
  );
}