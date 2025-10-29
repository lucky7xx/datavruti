import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-neutral-50 flex items-center justify-center px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-secondary-200/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* 404 Number - Large and Eye-catching */}
        <div className="mb-8">
          <h1 className="text-[150px] md:text-[200px] lg:text-[250px] font-black leading-none">
            <span className="bg-gradient-to-r from-primary-600 via-accent-600 to-secondary-600 bg-clip-text text-transparent animate-gradient">
              404
            </span>
          </h1>
        </div>

        {/* Icon */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-accent-400 to-secondary-500 rounded-full blur-xl opacity-50 animate-pulse"></div>

            {/* Icon container */}
            <div className="relative w-24 h-24 bg-white rounded-full shadow-2xl flex items-center justify-center border-4 border-accent-100">
              <svg className="w-12 h-12 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Message */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
          Oops! Page Not Found
        </h2>
        <p className="text-lg md:text-xl text-neutral-600 mb-8 max-w-2xl mx-auto">
          The page you're looking for seems to have wandered off. Don't worry, even the best talent gets lost sometimes. Let's get you back on track!
        </p>

        {/* Quick Links */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Link
            href="/"
            className="group relative px-8 py-4 bg-gradient-to-r from-accent-600 to-secondary-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></span>
            <span className="relative flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Back to Home
            </span>
          </Link>

          <Link
            href="/contact"
            className="px-8 py-4 bg-white text-neutral-900 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-neutral-200 hover:border-accent-300"
          >
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact Us
            </span>
          </Link>
        </div>

        {/* Popular Pages */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-neutral-200">
          <h3 className="text-xl font-bold text-neutral-900 mb-6">Popular Pages</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link
              href="/services"
              className="group p-4 bg-neutral-50 hover:bg-accent-50 rounded-xl transition-all duration-300 hover:shadow-md border border-neutral-200 hover:border-accent-300"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-accent-500 to-accent-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="font-semibold text-neutral-900 group-hover:text-accent-700 transition-colors">Services</span>
              </div>
            </Link>

            <Link
              href="/about"
              className="group p-4 bg-neutral-50 hover:bg-secondary-50 rounded-xl transition-all duration-300 hover:shadow-md border border-neutral-200 hover:border-secondary-300"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="font-semibold text-neutral-900 group-hover:text-secondary-700 transition-colors">About Us</span>
              </div>
            </Link>

            <Link
              href="/candidates"
              className="group p-4 bg-neutral-50 hover:bg-primary-50 rounded-xl transition-all duration-300 hover:shadow-md border border-neutral-200 hover:border-primary-300"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <span className="font-semibold text-neutral-900 group-hover:text-primary-700 transition-colors">Candidates</span>
              </div>
            </Link>

            <Link
              href="/case-studies"
              className="group p-4 bg-neutral-50 hover:bg-accent-50 rounded-xl transition-all duration-300 hover:shadow-md border border-neutral-200 hover:border-accent-300"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-accent-500 to-accent-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <span className="font-semibold text-neutral-900 group-hover:text-accent-700 transition-colors">Case Studies</span>
              </div>
            </Link>
          </div>
        </div>

        {/* Help Text */}
        <p className="mt-8 mb-8 text-sm text-neutral-500">
          Need help? Contact us at{' '}
          <a href="mailto:sales@datavruti.com" className="text-accent-600 hover:text-accent-700 font-semibold underline">
            sales@datavruti.com
          </a>
          {' '}or call{' '}
          <a href="tel:+919378092086" className="text-accent-600 hover:text-accent-700 font-semibold underline">
            +91 9378092086
          </a>
        </p>
      </div>
    </div>
  );
}
