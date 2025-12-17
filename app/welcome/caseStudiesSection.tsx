import type { JSX } from 'react';

type CaseStudy = {
  title: string;
  domain: string;
  summary: string;
  highlights: string[];
};

const CASE_STUDIES: CaseStudy[] = [
  {
    title: "Enterprise SaaS Platform",
    domain: "Web Application",
    summary:
      "Designed and scaled a multi-tenant SaaS platform supporting thousands of active users.",
    highlights: [
      "Scalable backend architecture",
      "Performance optimization",
      "Security and compliance improvements"
    ]
  },
  {
    title: "Mobile Application Ecosystem",
    domain: "iOS & Android",
    summary:
      "Led development of cross-platform mobile applications with real-time data synchronization.",
    highlights: [
      "High-performance mobile UX",
      "Offline-first architecture",
      "Stable API integrations"
    ]
  },
  {
    title: "AI-Powered Data Platform",
    domain: "AI & Machine Learning",
    summary:
      "Integrated AI-driven features to automate workflows and deliver actionable insights.",
    highlights: [
      "Machine learning integration",
      "Optimized data pipelines",
      "Production-grade AI deployment"
    ]
  }
];

export function CaseStudiesSection(): JSX.Element {
  return (
    <section className="py-28">
      <div className="max-w-7xl mx-auto px-8">

        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-semibold">
            Selected Work & Case Studies
          </h2>
          <p className="mt-5 text-lg text-gray-600 leading-relaxed">
            A selection of projects demonstrating senior-level execution across
            web, mobile, and AI-driven systems.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="mt-20 grid gap-12 md:grid-cols-3">
          {CASE_STUDIES.map((item, index) => (
            <div
              key={index}
              className="p-8 rounded-xl border border-gray-200 transition hover:shadow-sm"
            >
              <span className="text-sm text-gray-500">
                {item.domain}
              </span>

              <h3 className="mt-3 text-xl font-semibold">
                {item.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                {item.summary}
              </p>

              <ul className="mt-6 space-y-2 text-sm text-gray-600">
                {item.highlights.map((point, i) => (
                  <li key={i} className="flex gap-2 items-start">
                    <span className="mt-2 w-1.5 h-1.5 bg-gray-400 rounded-full" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Trust Note */}
        <div className="mt-20 text-center">
          <p className="text-gray-600">
            Additional project details are available upon request.
          </p>
        </div>

      </div>
    </section>
  );
}
