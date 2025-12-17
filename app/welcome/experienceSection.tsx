import type { JSX } from 'react';

type ExperienceMetric = {
  value: string;
  label: string;
};

const EXPERIENCE_METRICS: ExperienceMetric[] = [
  { value: "15+ Years", label: "Professional Experience" },
  { value: "Web & Mobile", label: "Production Applications" },
  { value: "AI-Driven", label: "Solutions Delivered" },
  { value: "Long-Term", label: "Client Engagements" }
];

export function ExperienceSection(): JSX.Element {
  return (
    <section className="py-28">
      <div className="max-w-6xl mx-auto px-8">

        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-semibold">
            Proven Experience & Trust
          </h2>
          <p className="mt-5 text-lg text-gray-600 leading-relaxed">
            With over 15 years of hands-on experience, I have collaborated with
            startups, agencies, and U.S.-based organizations to deliver reliable
            web, mobile, and AI-driven software solutions.
          </p>
        </div>

        {/* Metrics */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {EXPERIENCE_METRICS.map((metric, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-gray-200"
            >
              <div className="text-3xl font-semibold">
                {metric.value}
              </div>
              <div className="mt-2 text-sm text-gray-500">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* Trust Statement */}
        <div className="mt-20 max-w-4xl mx-auto text-center">
          <p className="text-gray-600 leading-relaxed">
            My approach emphasizes clear architecture, secure development
            practices, and transparent communication—ensuring systems remain
            maintainable, scalable, and aligned with business objectives.
          </p>
        </div>

      </div>
    </section>
  );
}

