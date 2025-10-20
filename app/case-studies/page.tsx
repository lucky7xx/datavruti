import Hero from '@/components/Hero';
import CaseStudyCard from '@/components/CaseStudyCard';
import CTAButton from '@/components/CTAButton';
import caseStudies from '@/content/case-studies.json';

export const metadata = {
  title: 'Case Studies | DataVruti - Success Stories',
  description: 'See how DataVruti has helped companies build exceptional data teams. Real results from our data hiring and recruitment services.',
};

export default function CaseStudiesPage() {
  return (
    <>
      <Hero
        title="Case Studies"
        subtitle="Real results from our data hiring partnerships"
        showCTAs={false}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {caseStudies.map((caseStudy) => (
              <CaseStudyCard
                key={caseStudy.id}
                title={caseStudy.title}
                client={caseStudy.client}
                industry={caseStudy.industry}
                result={caseStudy.result}
                timeframe={caseStudy.timeframe}
                placements={caseStudy.placements}
              />
            ))}
          </div>

          {/* Detailed Case Studies */}
          <div className="space-y-16">
            {caseStudies.map((caseStudy, index) => (
              <div
                key={caseStudy.id}
                className="bg-neutral-50 rounded-xl p-8 md:p-12"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs font-semibold text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                    {caseStudy.industry}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
                  {caseStudy.title}
                </h2>
                <p className="text-lg text-neutral-600 mb-8">{caseStudy.client}</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                      Challenge
                    </h3>
                    <p className="text-neutral-600">{caseStudy.challenge}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                      Solution
                    </h3>
                    <p className="text-neutral-600">{caseStudy.solution}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                      Result
                    </h3>
                    <p className="text-neutral-600">{caseStudy.result}</p>
                  </div>
                </div>

                <div className="flex gap-8 mt-8 pt-8 border-t border-neutral-200">
                  <div>
                    <p className="text-sm text-neutral-500 mb-1">Timeframe</p>
                    <p className="text-lg font-semibold text-neutral-900">
                      {caseStudy.timeframe}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-neutral-500 mb-1">Placements</p>
                    <p className="text-lg font-semibold text-neutral-900">
                      {caseStudy.placements}
                    </p>
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
