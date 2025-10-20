import CTAButton from '@/components/CTAButton';
import Hero from '@/components/Hero';
import PartnerLogoCarousel from '@/components/PartnerLogoCarousel';
import aboutData from '@/content/about.json';

export const metadata = {
  title: 'About Us | DataVruti',
  description: 'Learn about DataVruti - our mission, vision, and commitment to connecting companies with exceptional data talent.',
};

export default function AboutPage() {
  const partnerLogos = aboutData.partnerLogos ?? [];

  return (
    <>
      <Hero
        title="About DataVruti"
        subtitle="Bridging the gap between exceptional data talent and innovative companies"
        showCTAs={false}
      />

      {/* Mission & Vision */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">Our Mission</h2>
              <p className="text-lg text-neutral-600">{aboutData.mission}</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">Our Vision</h2>
              <p className="text-lg text-neutral-600">{aboutData.vision}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6 text-center">
              Our Story
            </h2>
            <div className="prose prose-lg max-w-none">
              {aboutData.story.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-neutral-600 mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-12 text-center">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aboutData.values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-primary-600">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-neutral-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative overflow-hidden bg-slate-900 text-white pt-24 pb-40 md:py-32 md:mb-0 -mb-28">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-850 to-slate-900"></div>

        {/* Very subtle orbs */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary-500/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl"></div>

        <div className="container-custom relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-heading">
            Our Impact
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {aboutData.stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 hover:bg-slate-800/50 transition-all duration-300 hover:scale-105 border border-slate-700/30 hover:border-primary-500/30">
                  <p className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">{stat.number}</p>
                  <p className="text-slate-300">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Logos */}
      {partnerLogos.length > 0 && (
        <section className="py-16 md:py-20 bg-white relative">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-600">
                Attracting Top Talent
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mt-4 mb-4">
                Attracting top talent from great companies
              </h2>
              <p className="text-lg text-neutral-600">
                The data leaders we place come from some of the most admired companies in the world.
              </p>
            </div>

            <PartnerLogoCarousel logos={partnerLogos} />
          </div>
        </section>
      )}

      {/* CTA Banner */}
      <section className="relative overflow-hidden bg-slate-900 text-white pt-24 pb-40 md:py-32 md:mb-0 -mb-28">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-850 to-slate-900"></div>

        {/* Very subtle animated orbs */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary-500/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl"></div>

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
