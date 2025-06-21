"use client"

import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

export function BoltBadge() {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === 'system' ? systemTheme : theme;
  const isDark = currentTheme === 'dark';

  // Choose the appropriate badge image based on theme
  const badgeImage = isDark 
    ? "https://storage.bolt.army/white_circle_360x360.png" 
    : "https://storage.bolt.army/black_circle_360x360.png";

  return (
    <>
      <style jsx>{`
        .bolt-badge {
          transition: all 0.3s ease;
        }
        @keyframes badgeIntro {
          0% { transform: rotateY(-90deg); opacity: 0; }
          100% { transform: rotateY(0deg); opacity: 1; }
        }
        .bolt-badge-intro {
          animation: badgeIntro 0.8s ease-out 1s both;
        }
        .bolt-badge-intro.animated {
          animation: none;
        }
        @keyframes badgeHover {
          0% { transform: scale(1) rotate(0deg); }
          50% { transform: scale(1.1) rotate(22deg); }
          100% { transform: scale(1) rotate(0deg); }
        }
        .bolt-badge:hover {
          animation: badgeHover 0.6s ease-in-out;
        }
      `}</style>
      <div className="fixed top-4 right-4 z-50">
        <a 
          href="https://bolt.new" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="block transition-all duration-300 hover:shadow-2xl"
        >
          <img 
            src={badgeImage}
            alt="Built with Bolt.new badge" 
            className="w-20 h-20 md:w-28 md:h-28 rounded-full shadow-lg bolt-badge bolt-badge-intro"
            onAnimationEnd={(e) => e.currentTarget.classList.add('animated')}
          />
        </a>
      </div>
    </>
  );
}