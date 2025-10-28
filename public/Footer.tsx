'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import Toast from '@/components/Toast';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [showToast, setShowToast] = useState(false);

  const handleComingSoon = () => {
    setShowToast(true);
  };

  return (
    <>
      {showToast && (
        <Toast
          message="Coming Soon!"
          type="info"
          onClose={() => setShowToast(false)}
        />
      )}
      <footer className="bg-slate-900 text-neutral-300 relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-850 to-slate-900"></div>

      {/* Very subtle orbs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary-500/8 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent-500/8 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-secondary-500/6 rounded-full blur-3xl"></div>

      <div className="container-custom py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-5">
            <div className="flex items-center space-x-3 mb-6 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-secondary-500 to-accent-600 rounded-xl blur opacity-50 group-hover:opacity-70 transition-opacity"></div>
                <div className="relative w-13 h-11 rounded-xl flex items-center justify-center shadow-lg overflow-hidden">
                  <Image
                    src="/datavruti-logo.png"
                    alt="datavruti Logo"
                    width={52}
                    height={44}
                    className="object-contain"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white font-heading">datavruti</h3>
                <div className="text-[10px] text-neutral-400 -mt-1 font-medium tracking-wide">GLOBAL DATA TALENT</div>
              </div>
            </div>
            <p className="text-neutral-400 mb-8 leading-relaxed text-base">
              Connecting companies with exceptional data talent. We specialize in hiring data engineers, data scientists, and analytics professionals.
            </p>
            <div className="flex gap-3">
              {/* Social media links */}
              <button type="button" onClick={handleComingSoon} className="group relative w-11 h-11 bg-slate-800 hover:bg-gradient-to-br hover:from-primary-600 hover:to-primary-700 rounded-xl flex items-center justify-center text-neutral-400 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary-500/30 hover:scale-110 transform overflow-hidden" aria-label="Facebook">
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></span>
                <svg className="relative h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </button>
              <button type="button" onClick={handleComingSoon} className="group relative w-11 h-11 bg-slate-800 hover:bg-gradient-to-br hover:from-secondary-600 hover:to-secondary-700 rounded-xl flex items-center justify-center text-neutral-400 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-secondary-500/30 hover:scale-110 transform overflow-hidden" aria-label="X (formerly Twitter)">
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></span>
                <svg className="relative h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </button>
              <a href="https://in.linkedin.com/company/datavruti" target="_blank" rel="noopener noreferrer" className="group relative w-11 h-11 bg-slate-800 hover:bg-gradient-to-br hover:from-accent-600 hover:to-accent-700 rounded-xl flex items-center justify-center text-neutral-400 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-accent-500/30 hover:scale-110 transform overflow-hidden" aria-label="LinkedIn">
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></span>
                <svg className="relative h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1 md:col-span-3">
            <h4 className="text-white font-bold mb-6 text-base font-heading tracking-wide">QUICK LINKS</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-neutral-400 hover:text-white transition-all duration-200 flex items-center gap-2 group">
                  <span className="text-accent-500 group-hover:translate-x-1 transition-transform duration-200">→</span>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-neutral-400 hover:text-white transition-all duration-200 flex items-center gap-2 group">
                  <span className="text-accent-500 group-hover:translate-x-1 transition-transform duration-200">→</span>
                  Services
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-neutral-400 hover:text-white transition-all duration-200 flex items-center gap-2 group">
                  <span className="text-accent-500 group-hover:translate-x-1 transition-transform duration-200">→</span>
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/candidates" className="text-neutral-400 hover:text-white transition-all duration-200 flex items-center gap-2 group">
                  <span className="text-accent-500 group-hover:translate-x-1 transition-transform duration-200">→</span>
                  For Candidates
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1 md:col-span-4">
            <h4 className="text-white font-bold mb-6 text-base font-heading tracking-wide">GET IN TOUCH</h4>
            <ul className="space-y-4">
              <li>
                <a href="mailto:sales@datavruti.com" className="text-neutral-400 hover:text-white transition-all duration-200 flex items-start gap-3 group">
                  <div className="w-10 h-10 bg-slate-800 group-hover:bg-accent-600 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-neutral-500 mb-1">Email</div>
                    <div className="font-medium">sales@datavruti.com</div>
                  </div>
                </a>
              </li>
              <li>
                <a href="tel:+918779190863" className="text-neutral-400 hover:text-white transition-all duration-200 flex items-start gap-3 group">
                  <div className="w-10 h-10 bg-slate-800 group-hover:bg-accent-600 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-neutral-500 mb-1">Phone</div>
                    <div className="font-medium">+91 (877) 919 0863</div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-500 text-sm">
            &copy; {currentYear} <span className="text-white font-semibold">datavruti</span>. All rights reserved.
          </p>
          <p className="text-neutral-500 text-sm">
            Connecting exceptional data talent with innovative companies.
          </p>
        </div>
      </div>
    </footer>
    </>
  );
}
