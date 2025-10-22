'use client';

import { useState, useEffect } from 'react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 group animate-fade-in-up"
          aria-label="Scroll to top"
        >
          <div className="relative">
            {/* Outer glow ring */}
            <div className="absolute -inset-2 bg-gradient-to-r from-primary-500 via-accent-500 to-secondary-500 rounded-full opacity-60 group-hover:opacity-90 blur-lg transition-all duration-500 animate-pulse"></div>

            {/* Middle ring */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 via-accent-600 to-secondary-600 rounded-full opacity-80 group-hover:opacity-100 transition-all duration-300"></div>

            {/* Button */}
            <div className="relative w-14 h-14 bg-gradient-to-br from-primary-600 via-accent-600 to-secondary-600 rounded-full flex items-center justify-center text-white shadow-2xl group-hover:shadow-[0_20px_60px_rgba(231,60,55,0.5)] transition-all duration-300 group-hover:scale-110 border-2 border-white/20">
              {/* Shimmer effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer transition-opacity duration-300"></div>

              {/* Icon */}
              <svg
                className="relative w-6 h-6 group-hover:-translate-y-1 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 15l7-7 7 7"
                />
              </svg>
            </div>

            {/* Tooltip */}
            <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-xl whitespace-nowrap">
                Back to top
                <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-900"></div>
              </div>
            </div>
          </div>
        </button>
      )}
    </>
  );
}
