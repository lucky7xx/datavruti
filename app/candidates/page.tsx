import Hero from '@/components/Hero';
import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'For Candidates | DataVruti - Join Our Network',
  description: 'Join DataVruti\'s network of exceptional data professionals. Connect with top companies hiring for data engineering, data science, and analytics roles.',
};

export default function CandidatesPage() {
  return (
    <>
      <Hero
        title="Join Our Network of Exceptional Data Professionals"
        subtitle="Connect with top companies actively hiring data talent"
        showCTAs={false}
      />

      {/* Why Join */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-12 text-center">
              Why Join DataVruti?
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
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-8 text-center">
              Roles We Fill
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Data Engineers',
                  skills: ['ETL/ELT', 'Data Pipelines', 'Spark', 'Kafka', 'Cloud (AWS/GCP/Azure)'],
                },
                {
                  title: 'Data Scientists',
                  skills: ['Machine Learning', 'Python/R', 'Statistical Analysis', 'Deep Learning', 'MLOps'],
                },
                {
                  title: 'Analytics Professionals',
                  skills: ['BI Tools', 'SQL', 'Data Visualization', 'Analytics Strategy', 'Reporting'],
                },
              ].map((role, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                    {role.title}
                  </h3>
                  <ul className="space-y-2">
                    {role.skills.map((skill, idx) => (
                      <li key={idx} className="flex items-center text-neutral-600">
                        <svg
                          className="w-4 h-4 text-primary-600 mr-2"
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
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                Register Your Interest
              </h2>
              <p className="text-lg text-neutral-600">
                Fill out the form below and we'll be in touch with relevant opportunities.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg border border-neutral-200">
              <ContactForm type="candidate" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
