import Hero from '@/components/Hero';
import CaseStudyCard from '@/components/CaseStudyCard';
import SectionHeader from '@/components/ui/SectionHeader';
import CTASection from '@/components/ui/CTASection';
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

      <section className="section-padding bg-gradient-to-br from-neutral-50 via-white to-accent-50/30">
        <div className="container-custom">
          <SectionHeader
            badge="Success Stories"
            title="Proven Results Across Industries"
            subtitle="Discover how we've helped companies build world-class data teams and achieve measurable business outcomes."
            align="center"
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((caseStudy) => (
              <CaseStudyCard
                key={caseStudy.id}
                slug={caseStudy.slug}
                title={caseStudy.title}
                client={caseStudy.client}
                industry={caseStudy.industry}
                result={caseStudy.result}
                timeframe={caseStudy.timeframe}
                placements={caseStudy.placements}
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
