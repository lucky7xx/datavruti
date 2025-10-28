import { notFound } from 'next/navigation';
import Link from 'next/link';
import GlowCard from '@/components/ui/GlowCard';
import IconBadge from '@/components/ui/IconBadge';
import AnimatedBackground from '@/components/ui/AnimatedBackground';
import CTAButton from '@/components/CTAButton';
import caseStudies from '@/content/case-studies.json';

interface CaseStudyPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata({ params }: CaseStudyPageProps) {
  const caseStudy = caseStudies.find((study) => study.slug === params.slug);

  if (!caseStudy) {
    return {
      title: 'Case Study Not Found | datavruti',
    };
  }

  return {
    title: `${caseStudy.title} | datavruti Case Studies`,
    description: caseStudy.challenge,
  };
}

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
  const caseStudy = caseStudies.find((study) => study.slug === params.slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white pt-32 pb-20">
        <AnimatedBackground variant="vibrant" />

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors duration-300 mb-6 group"
            >
              <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="font-medium">Back to Case Studies</span>
            </Link>
            <div className="mb-6">
              <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-primary-500/20 to-accent-500/20 backdrop-blur-sm border border-primary-400/30 rounded-full text-sm font-semibold text-primary-300">
                {caseStudy.industry}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-white via-primary-200 to-white bg-clip-text text-transparent">
              {caseStudy.title}
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8">
              {caseStudy.client}
            </p>
            <div className="flex gap-8">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl px-6 py-4 border border-slate-700/50">
                <p className="text-sm text-slate-400 mb-1">Timeframe</p>
                <p className="text-2xl font-bold text-white">{caseStudy.timeframe}</p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl px-6 py-4 border border-slate-700/50">
                <p className="text-sm text-slate-400 mb-1">Placements</p>
                <p className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                  {caseStudy.placements}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
              {/* Challenge */}
              <div className="md:col-span-3">
                <GlowCard gradientFrom="from-primary-600" gradientVia="via-accent-600" gradientTo="to-secondary-600" className="bg-gradient-to-br from-neutral-50 to-white">
                  <div className="flex items-center gap-3 mb-4">
                    <IconBadge
                      icon={
                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                      }
                      gradientFrom="from-primary-500"
                      gradientTo="to-accent-600"
                    />
                    <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">The Challenge</h2>
                  </div>
                  <p className="text-lg text-neutral-700 leading-relaxed">
                    {caseStudy.challenge}
                  </p>
                </GlowCard>
              </div>

              {/* Solution */}
              <div className="md:col-span-3">
                <GlowCard gradientFrom="from-accent-600" gradientVia="via-secondary-600" gradientTo="to-primary-600" className="bg-gradient-to-br from-white to-accent-50/30">
                  <div className="flex items-center gap-3 mb-4">
                    <IconBadge
                      icon={
                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      }
                      gradientFrom="from-accent-500"
                      gradientTo="to-secondary-600"
                    />
                    <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">Our Solution</h2>
                  </div>
                  <p className="text-lg text-neutral-700 leading-relaxed">
                    {caseStudy.solution}
                  </p>
                </GlowCard>
              </div>

              {/* Result */}
              <div className="md:col-span-3">
                <GlowCard gradientFrom="from-secondary-600" gradientVia="via-primary-600" gradientTo="to-accent-600" className="bg-gradient-to-br from-primary-50/50 to-white">
                  <div className="flex items-center gap-3 mb-4">
                    <IconBadge
                      icon={
                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      }
                      gradientFrom="from-secondary-500"
                      gradientTo="to-primary-600"
                    />
                    <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">The Results</h2>
                  </div>
                  <p className="text-lg text-neutral-700 leading-relaxed">
                    {caseStudy.result}
                  </p>
                </GlowCard>
              </div>
            </div>

            {/* CTA Section */}
            <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-12 text-center">
              <AnimatedBackground variant="subtle" />

              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Ready for Similar Results?
                </h2>
                <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                  Let us help you build a world-class data team that drives real business impact.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <CTAButton href="/contact" variant="primary" size="lg">
                    Start Your Success Story
                  </CTAButton>
                  <CTAButton href="/case-studies" variant="outline-light" size="lg">
                    View More Case Studies
                  </CTAButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
