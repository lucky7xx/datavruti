import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';
import CTAButton from '@/components/CTAButton';
import SectionHeader from '@/components/ui/SectionHeader';
import CTASection from '@/components/ui/CTASection';
import services from '@/content/services.json';
import testimonials from '@/content/testimonials.json';
import { organizationSchema } from '@/utils/seo-config';

export default function Home() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      {/* Hero Section */}
      <Hero
        title="Connecting companies with top data talent — fast."
        subtitle="We specialize in hiring data engineers, data scientists, and analytics professionals who drive business impact."
        primaryCTA={{ text: 'Hire Talent', href: '/contact' }}
        secondaryCTA={{ text: 'Join as Candidate', href: '/candidates' }}
        variant="dark"
      />

      {/* Why Choose Us - Features */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Why Choose DataVruti
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              We're not just recruiters—we're data hiring specialists who understand your unique challenges
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: (
                  <svg className="w-10 h-10 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: 'Specialized Focus',
                description: 'Exclusively focused on data, analytics, and AI roles—we speak your language.',
              },
              {
                icon: (
                  <svg className="w-10 h-10 text-secondary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: 'Fast Turnaround',
                description: 'Average 3 weeks to hire. We respect your timeline and move with urgency.',
              },
              {
                icon: (
                  <svg className="w-10 h-10 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: 'Quality Screening',
                description: 'Rigorous technical vetting ensures you only meet pre-qualified candidates.',
              },
              {
                icon: (
                  <svg className="w-10 h-10 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
                title: 'Long-term Partnership',
                description: '18+ months average retention. We focus on cultural fit, not just skills.',
              },
            ].map((feature, index) => {
              const bgColors = [
                'bg-gradient-to-br from-accent-100 to-accent-50',
                'bg-gradient-to-br from-secondary-100 to-secondary-50',
                'bg-gradient-to-br from-primary-100 to-primary-50',
                'bg-gradient-to-br from-accent-100 to-accent-50'
              ];
              return (
                <div key={index} className="text-center group">
                  <div className={`w-20 h-20 ${bgColors[index]} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
                About DataVruti
              </h2>
              <p className="text-xl text-neutral-600 leading-relaxed mb-6">
                DataVruti is India's premier recruitment agency specializing exclusively in data, analytics, and AI talent. We bridge the gap between innovative companies and exceptional data professionals.
              </p>
              <p className="text-lg text-neutral-600 leading-relaxed">
                Founded by data professionals who understand the unique challenges of hiring in this domain, we combine deep technical expertise with proven recruitment excellence. Our mission is simple: connect the right talent with the right opportunity, every time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Our Specialized Services
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto mb-4">
              We focus exclusively on data, analytics, and AI roles—from junior analysts to Chief Data Officers
            </p>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Our specialized approach means we understand the technical nuances of every role and can accurately assess candidate capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.shortDescription}
                href={`/services/${service.slug}`}
                icon={service.icon}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <CTAButton href="/services" variant="outline" size="lg">
              View All Services
            </CTAButton>
          </div>
        </div>
      </section>

      {/* How We Work - Process */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              How We Work
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Our proven 4-step process ensures you get the best data talent, quickly and efficiently
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  step: '01',
                  title: 'Discovery & Requirements',
                  description: 'We start with a deep dive into your needs—technical stack, team culture, growth plans, and specific role requirements. We believe in understanding the "why" behind every hire.',
                  icon: (
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  ),
                  gradient: 'from-accent-500 to-accent-600',
                },
                {
                  step: '02',
                  title: 'Sourcing & Screening',
                  description: 'Leveraging our extensive network and technical expertise, we identify and vet candidates. Every professional goes through rigorous technical and cultural assessments.',
                  icon: (
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  ),
                  gradient: 'from-secondary-600 to-secondary-700',
                },
                {
                  step: '03',
                  title: 'Candidate Presentation',
                  description: 'We present only the best-matched candidates with detailed profiles, technical assessments, and our insights. Quality over quantity—always.',
                  icon: (
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  ),
                  gradient: 'from-primary-600 to-primary-700',
                },
                {
                  step: '04',
                  title: 'Interview & Onboarding Support',
                  description: 'We facilitate the interview process, provide feedback coordination, and support salary negotiations. Our partnership continues through successful onboarding.',
                  icon: (
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  gradient: 'from-accent-500 to-accent-600',
                },
              ].map((process, index) => {
                const stepColors = [
                  'text-accent-100',
                  'text-secondary-100',
                  'text-primary-100',
                  'text-accent-100'
                ];
                return (
                  <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 relative">
                    <div className={`absolute top-4 right-4 text-6xl font-bold ${stepColors[index]}`}>
                      {process.step}
                    </div>
                    <div className={`w-16 h-16 bg-gradient-to-br ${process.gradient} rounded-xl flex items-center justify-center mb-6 shadow-md`}>
                      {process.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                      {process.title}
                    </h3>
                    <p className="text-neutral-600 leading-relaxed">
                      {process.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              We've successfully placed data professionals across diverse industries
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              {
                name: 'Fintech',
                icon: (
                  <svg className="w-12 h-12 text-accent-600 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              },
              {
                name: 'E-commerce',
                icon: (
                  <svg className="w-12 h-12 text-secondary-600 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                )
              },
              {
                name: 'Healthcare',
                icon: (
                  <svg className="w-12 h-12 text-primary-600 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                )
              },
              {
                name: 'SaaS',
                icon: (
                  <svg className="w-12 h-12 text-primary-600 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                )
              },
              {
                name: 'Consulting',
                icon: (
                  <svg className="w-12 h-12 text-primary-600 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                )
              },
              {
                name: 'Startups',
                icon: (
                  <svg className="w-12 h-12 text-secondary-600 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                )
              },
            ].map((industry, index) => (
              <div key={index} className="text-center p-6 bg-neutral-50 rounded-xl hover:bg-primary-50 hover:shadow-md transition-all duration-300 group">
                <div className="mb-4 group-hover:scale-110 transition-transform">
                  {industry.icon}
                </div>
                <p className="font-semibold text-neutral-900">{industry.name}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              From early-stage startups to established enterprises, we understand the unique data hiring needs of each industry and company stage.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-600/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-secondary-500/15 rounded-full blur-3xl"></div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Trusted by Leading Companies
            </h2>
            <p className="text-xl text-neutral-300">
              Our track record speaks for itself
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { number: '500+', label: 'Successful Placements', desc: 'Data professionals placed' },
              { number: '95%', label: 'Client Satisfaction', desc: 'Would recommend us' },
              { number: '18+', label: 'Months Retention', desc: 'Average placement duration' },
              { number: '3', label: 'Weeks to Hire', desc: 'Average time to placement' },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 group-hover:bg-white/10 transition-all duration-300 group-hover:scale-105">
                  <p className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400 bg-clip-text text-transparent">
                    {stat.number}
                  </p>
                  <p className="text-white font-semibold mb-1">{stat.label}</p>
                  <p className="text-sm text-neutral-400">{stat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roles We Fill */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Roles We Fill
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              From technical specialists to leadership positions, we recruit across all data functions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                category: 'Data Engineering',
                roles: ['Data Engineer', 'ETL Developer', 'Data Architect', 'ML Engineer', 'Platform Engineer'],
              },
              {
                category: 'Data Science & Analytics',
                roles: ['Data Scientist', 'ML Scientist', 'Research Scientist', 'Applied Scientist', 'AI Engineer'],
              },
              {
                category: 'Business Intelligence',
                roles: ['BI Developer', 'Analytics Engineer', 'Data Analyst', 'Business Analyst', 'Visualization Specialist'],
              },
              {
                category: 'Data Leadership',
                roles: ['Chief Data Officer', 'VP of Data', 'Head of Analytics', 'Data Science Manager', 'Engineering Manager'],
              },
              {
                category: 'Specialized Roles',
                roles: ['MLOps Engineer', 'Data Quality Engineer', 'Analytics Consultant', 'DataOps Engineer', 'BI Architect'],
              },
              {
                category: 'Emerging Tech',
                roles: ['Prompt Engineer', 'LLM Engineer', 'AI Product Manager', 'GenAI Specialist', 'AI Ethics Lead'],
              },
            ].map((roleGroup, index) => (
              <div key={index} className="bg-gradient-to-br from-neutral-50 to-white p-8 rounded-2xl border border-neutral-200 hover:border-primary-300 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold text-neutral-900 mb-4 pb-3 border-b border-neutral-200">
                  {roleGroup.category}
                </h3>
                <ul className="space-y-2">
                  {roleGroup.roles.map((role, idx) => {
                    const iconColors = ['text-accent-600', 'text-secondary-600', 'text-primary-600'];
                    const colorClass = iconColors[idx % 3];
                    return (
                      <li key={idx} className="flex items-center text-neutral-700">
                        <svg className={`w-5 h-5 ${colorClass} mr-3 flex-shrink-0`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {role}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto mb-6">
              Don't see the exact role you're looking for? We work across all data, analytics, and AI positions. Get in touch to discuss your specific hiring needs.
            </p>
            <CTAButton href="/contact" variant="primary" size="lg">
              Discuss Your Hiring Needs
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-gradient-to-b from-neutral-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Trusted by leading companies for data hiring excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                name={testimonial.name}
                position={testimonial.position}
                company={testimonial.company}
                content={testimonial.content}
                rating={testimonial.rating}
                image={testimonial.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTASection
        title="Ready to Build Your Data Team?"
        subtitle="Let's connect you with top data professionals who can drive your business forward."
        actions={[
          { label: 'Hire Talent', href: '/contact', variant: 'primary' },
          { label: 'Join as Candidate', href: '/candidates', variant: 'outline-light' },
        ]}
      />
    </>
  );
}
