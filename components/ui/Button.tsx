"use client";
import React, { useRef } from "react";

interface ButtonProps {
  $bg?: string;
  $text?: string;
  $bgHover?: string;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  $bg = "#ff135a",
  $text = "#fff",
  $bgHover = "#ff1472",
  children,
}) => {
  const btnRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <style>{`
        @keyframes ripple {
          0%   { outline: 0em solid transparent; outline-offset: -0.1em; }
          50%  { outline: 0.2em solid rgba(255,255,255,0.25); outline-offset: 0.2em; }
          100% { outline: 0.4em solid transparent; outline-offset: 0.4em; }
        }
        @keyframes opacity-pulse {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
        .custom-btn {
          display: inline-flex;
          align-items: center;
          cursor: pointer;
          border: none;
          border-radius: 999px;
          padding: 12px 20px;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 0.01em;
          width: fit-content;
          transition: background 0.5s, transform 0.2s;
        }
        @media (min-width: 640px) {
          .custom-btn { padding: 16px 28px; font-size: 17px; }
        }
        @media (min-width: 768px) {
          .custom-btn { padding: 20px 34px; font-size: 20px; }
        }
        .custom-btn span {
          margin-right: 0.4em;
          transition: 0.5s;
          text-shadow: none;
          opacity: 1;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          backface-visibility: hidden;
        }
        .custom-btn svg {
          height: 0.8em;
          margin-left: 0.2em;
          transition: margin 0.5s, filter 0.5s;
        }
        .custom-btn:hover {
          animation: ripple 1s linear infinite;
        }
        .custom-btn:hover svg {
          margin-left: 0.4em;
          filter: drop-shadow(3px 3px 2px rgba(0,0,0,0.2));
        }
        .custom-btn:hover svg polygon:nth-child(1) {
          animation: opacity-pulse 1s infinite 0.6s;
        }
        .custom-btn:hover svg polygon:nth-child(2) {
          animation: opacity-pulse 1s infinite 0.4s;
        }
        .custom-btn:hover svg polygon:nth-child(3) {
          animation: opacity-pulse 1s infinite 0.2s;
        }
        .custom-btn:active {
          transform: scale(0.95);
        }
        .custom-btn:active span { text-shadow: none; }
        .custom-btn:active svg  { filter: none; }
      `}</style>

      <button
        ref={btnRef}
        className="custom-btn"
        style={{ background: $bg, color: $text }}
        onMouseEnter={() => {
          if (btnRef.current) btnRef.current.style.background = $bgHover;
        }}
        onMouseLeave={() => {
          if (btnRef.current) btnRef.current.style.background = $bg;
        }}
      >
        <span style={{ color: $text }}>{children || "NEXT"}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 66 43"
          style={{ fill: $text }}
        >
          <polygon points="39.58,4.46 44.11,0 66,21.5 44.11,43 39.58,38.54 56.94,21.5" />
          <polygon points="19.79,4.46 24.32,0 46.21,21.5 24.32,43 19.79,38.54 37.15,21.5" />
          <polygon points="0,4.46 4.53,0 26.42,21.5 4.53,43 0,38.54 17.36,21.5" />
        </svg>
      </button>
    </>
  );
};

export default Button;