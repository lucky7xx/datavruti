import Hero from '@/components/Hero';
import TalentPoolForm from '@/components/TalentPoolForm';
import SectionHeader from '@/components/ui/SectionHeader';

export const metadata = {
  title: 'Join Our Talent Pool | datavruti - 100+ Data Jobs',
  description: '100+ permanent & contract data jobs across all levels. Data Engineers, Scientists, Analysts, DevOps, MLOps & more. Apply now to join our curated talent pool and get matched with top companies.',
};

export default function CandidatesPage() {
  return (
    <>
      <Hero
        title="Join Our Talent Pool - 100+ Data Jobs"
        subtitle="Permanent & Contract opportunities across all levels - Data Engineers, Scientists, Analysts, DevOps, MLOps & more. Ready to start within 2 weeks."
        showCTAs={false}
      />

      {/* Why Join */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-12 text-center">
              Why Join datavruti?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: (
                    <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  title: 'Curated Opportunities',
                  description: 'We match you with roles that align with your skills, experience, and career goals.',
                },
                {
                  icon: (
                    <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  ),
                  title: 'Top Companies',
                  description: 'Access exclusive opportunities with leading startups and enterprises.',
                },
                {
                  icon: (
                    <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                  title: 'Career Guidance',
                  description: 'Receive personalized support throughout your job search and interview process.',
                },
                {
                  icon: (
                    <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  ),
                  title: 'Fast Process',
                  description: 'No lengthy applications. We focus on getting you interviews quickly.',
                },
                {
                  icon: (
                    <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  ),
                  title: 'Long-term Partnership',
                  description: 'We support your career growth beyond the initial placement.',
                },
                {
                  icon: (
                    <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  ),
                  title: 'Confidential',
                  description: 'Your information is kept confidential and only shared with your consent.',
                },
              ].map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-neutral-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Roles We Fill */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4 text-center">
              100+ Open Roles Across Levels
            </h2>
            <p className="text-center text-neutral-600 mb-12 max-w-2xl mx-auto">
              Current & forecast until Mar'25 - Permanent & contract positions in all things data
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: 'Data Engineering',
                  roles: ['Data Engineers', 'ML Engineers', 'Big Data Engineers', 'Lead Architects (12+ yrs)'],
                },
                {
                  title: 'DevOps & Cloud',
                  roles: ['DevOps Engineers', 'DevOps Architects (12+ yrs)', 'MLOps Engineers', 'Platform Architects'],
                },
                {
                  title: 'Data Science & AI',
                  roles: ['Data Scientists (Junior)', 'Data Scientists (Senior)', 'Deep Learning Experts', 'Decision Scientists'],
                },
                {
                  title: 'Architecture & Analytics',
                  roles: ['Data Architects', 'Solution Architects', 'Business Architects', 'Data Visualization Experts'],
                },
              ].map((category, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="text-lg font-bold text-neutral-900 mb-4 pb-2 border-b-2 border-accent-500">
                    {category.title}
                  </h3>
                  <ul className="space-y-2">
                    {category.roles.map((role, idx) => (
                      <li key={idx} className="flex items-start text-sm text-neutral-600">
                        <svg
                          className="w-4 h-4 text-accent-600 mr-2 mt-0.5 flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        {role}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries & Technologies */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-12 text-center">
              Industries & Technologies We Cover
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-primary-50 to-accent-50 p-8 rounded-xl">
                <h3 className="text-xl font-bold text-neutral-900 mb-4 flex items-center">
                  <svg className="w-6 h-6 text-accent-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  Industries
                </h3>
                <ul className="grid grid-cols-2 gap-3">
                  {['BFSI', 'Retail', 'Manufacturing', 'eCommerce', 'Telecom', 'Healthcare', 'Automotive', 'Chemicals'].map((industry) => (
                    <li key={industry} className="flex items-center text-neutral-700">
                      <span className="w-2 h-2 bg-accent-500 rounded-full mr-2"></span>
                      {industry}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-br from-secondary-50 to-primary-50 p-8 rounded-xl">
                <h3 className="text-xl font-bold text-neutral-900 mb-4 flex items-center">
                  <svg className="w-6 h-6 text-secondary-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                  Cloud Platforms
                </h3>
                <ul className="grid grid-cols-2 gap-3">
                  {['AWS', 'Azure', 'GCP', 'Oracle Cloud'].map((cloud) => (
                    <li key={cloud} className="flex items-center text-neutral-700">
                      <span className="w-2 h-2 bg-secondary-500 rounded-full mr-2"></span>
                      {cloud}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-6 border-t border-neutral-200">
                  <p className="text-sm text-neutral-600">
                    <strong>Work Options:</strong> Remote, Hybrid & On-site positions available
                  </p>
                  <p className="text-sm text-neutral-600 mt-2">
                    <strong>Shift Options:</strong> IST, US, UK, APAC timings
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="section-padding bg-gradient-to-b from-neutral-50 to-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              badge="Join Our Talent Pool"
              title="Apply Now"
              subtitle="Complete the 3-step application form to join our network. We'll match you with relevant opportunities from our 50+ renowned clients."
              align="center"
              className="mb-12"
            />
            <div className="bg-white p-8 md:p-12 rounded-xl shadow-xl border border-neutral-200">
              <div className="mb-8 p-6 bg-gradient-to-r from-primary-50 to-accent-50 rounded-lg border-l-4 border-primary-500">
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                  📋 Quick Application Process
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                  <div className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-accent-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-2">1</span>
                    <div>
                      <p className="text-sm font-semibold text-neutral-800">Job Information</p>
                      <p className="text-xs text-neutral-600">Role & preferences</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-accent-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-2">2</span>
                    <div>
                      <p className="text-sm font-semibold text-neutral-800">Basic Information</p>
                      <p className="text-xs text-neutral-600">Personal & experience details</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-accent-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-2">3</span>
                    <div>
                      <p className="text-sm font-semibold text-neutral-800">Professional Details</p>
                      <p className="text-xs text-neutral-600">Skills, certifications & resume</p>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-neutral-600 mt-4">
                  ⏱️ Takes only 5-7 minutes to complete • Resume upload required (PDF/Word, max 10MB)
                </p>
              </div>
              <TalentPoolForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
