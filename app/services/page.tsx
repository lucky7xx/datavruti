import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import CTAButton from '@/components/CTAButton';
import services from '@/content/services.json';

export const metadata = {
  title: 'Our Services | DataVruti - Data & Analytics Hiring',
  description: 'Specialized recruitment services for data engineers, data scientists, and analytics consultants. Expert hiring solutions for your data team.',
};

export default function ServicesPage() {
  return (
    <>
      <Hero
        title="Our Services"
        subtitle="Specialized hiring solutions for every data role"
        showCTAs={false}
      />

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                href={`/services/${service.slug}`}
                icon={service.icon}
              />
            ))}
          </div>

          {/* Detailed Services */}
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } gap-12 items-center`}
              >
                <div className="flex-1">
                  <div className="inline-flex items-center px-4 py-2 bg-accent-100 text-accent-700 rounded-full text-sm font-semibold mb-4">
                    {service.icon && (
                      <span className="mr-2 inline-flex">
                        {service.icon === 'database' ? (
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                          </svg>
                        ) : service.icon === 'chart' ? (
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                          </svg>
                        ) : (
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                          </svg>
                        )}
                      </span>
                    )}
                    {service.title}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
                    {service.description}
                  </h3>
                  <ul className="space-y-3">
                    {service.benefits.map((benefit, idx) => {
                      const iconColors = ['text-accent-600', 'text-secondary-600', 'text-primary-600'];
                      const colorClass = iconColors[idx % 3];
                      return (
                        <li key={idx} className="flex items-start">
                          <svg
                            className={`w-6 h-6 ${colorClass} mr-3 flex-shrink-0 mt-0.5`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="text-neutral-600">{benefit}</span>
                        </li>
                      );
                    })}
                  </ul>
                  <div className="mt-6">
                    <CTAButton href={`/services/${service.slug}`} variant="primary">
                      Learn More
                    </CTAButton>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="bg-gradient-to-br from-accent-100 via-secondary-50 to-primary-50 rounded-xl p-12 h-64 flex items-center justify-center">
                    {service.icon === 'database' ? (
                      <svg className="w-32 h-32 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                      </svg>
                    ) : service.icon === 'chart' ? (
                      <svg className="w-32 h-32 text-secondary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    ) : (
                      <svg className="w-32 h-32 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative overflow-hidden bg-slate-900 text-white pt-24 pb-40 md:py-32 md:mb-0 -mb-28">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-850 to-slate-900"></div>

        {/* Very subtle animated orbs */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary-500/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent-500/8 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-secondary-500/6 rounded-full blur-3xl"></div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight font-heading">
              Ready to Build Your Data Team?
            </h2>
            <p className="text-xl md:text-2xl text-slate-300 mb-10 leading-relaxed max-w-3xl mx-auto">
              Let's connect you with top data professionals who can drive your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <CTAButton href="/contact" variant="primary" size="lg">
                Hire Talent
              </CTAButton>
              <CTAButton href="/candidates" variant="outline-light" size="lg">
                Join as Candidate
              </CTAButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
