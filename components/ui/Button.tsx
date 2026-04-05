"use client";
import React from "react";
import styled, { keyframes } from "styled-components";

interface ButtonProps {
  $bg?: string;
  $text?: string;
  $bgHover?: string;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ $bg, $text, $bgHover, children }) => {
  return (
    <StyledButton $bg={$bg} $text={$text} $bgHover={$bgHover}>
      <span>{children || "NEXT"}</span>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 66 43">
        <polygon points="39.58,4.46 44.11,0 66,21.5 44.11,43 39.58,38.54 56.94,21.5" />
        <polygon points="19.79,4.46 24.32,0 46.21,21.5 24.32,43 19.79,38.54 37.15,21.5" />
        <polygon points="0,4.46 4.53,0 26.42,21.5 4.53,43 0,38.54 17.36,21.5" />
      </svg>
    </StyledButton>
  );
};

const ripple = keyframes`
  0% { outline: 0em solid transparent; outline-offset: -0.1em; }
  50% { outline: 0.2em solid rgba(255,255,255,0.25); outline-offset: 0.2em; }
  100% { outline: 0.4em solid transparent; outline-offset: 0.4em; }
`;

const colorize = keyframes<{ $bg?: string; $bgHover?: string }>`
  0% { background: ${props => props.$bg || "#ff135a"}; }
  50% { background: ${props => props.$bgHover || "#ff1472"}; }
  100% { background: ${props => props.$bg || "#ff135a"}; }
`;

const opacity = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`;

const StyledButton = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  border: none;
  border-radius: 999px;
  padding: 12px 20px;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.01em;
  background: ${props => props.$bg || "#ff135a"};
  color: ${props => props.$text || "#fff"};
  width: fit-content;
  transition: 0.5s;

  @media (min-width: 640px) {
    padding: 16px 28px;
    font-size: 17px;
  }

  @media (min-width: 768px) {
    padding: 20px 34px;
    font-size: 20px;
  }

  span {
    margin-right: 0.4em;
    transition: 0.5s;
    text-shadow: none;
    opacity: 1;
    color: ${props => props.$text || "#fff"};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    backface-visibility: hidden;
  }

  svg {
    height: 0.8em;
    fill: ${props => props.$text || "#fff"};
    margin-left: 0.2em;
    transition: 0.5s;
  }

  &:hover {
    animation: ${ripple} 1s linear infinite, ${colorize} 1s infinite;

    svg {
      margin-left: 0.4em;
      filter: drop-shadow(3px 3px 2px rgba(0,0,0,0.2));
    }

    svg polygon:nth-child(1) { transform: translateX(0%); animation: ${opacity} 1s infinite 0.6s; }
    svg polygon:nth-child(2) { transform: translateX(0%); animation: ${opacity} 1s infinite 0.4s; }
    svg polygon:nth-child(3) { animation: ${opacity} 1s infinite 0.2s; }
  }

  &:active {
    transform: scale(0.95);
    span { text-shadow: none; }
    svg { filter: none; }
  }
`;

export default Button;