import type { JSX } from 'react';

type Feature = {
  title: string;
  description: string;
};

const FEATURES: Feature[] = [
  {
    title: "15+ Years of Production Experience",
    description:
      "Extensive hands-on experience delivering and maintaining large-scale web and mobile applications in real-world production environments."
  },
  {
    title: "Web & Mobile Engineering Excellence",
    description:
      "Deep expertise in modern web and mobile technologies, building responsive, high-performance applications with long-term maintainability."
  },
  {
    title: "AI & Intelligent Systems",
    description:
      "Experience integrating AI-driven features such as automation, analytics, and intelligent workflows into production systems."
  },
  {
    title: "Scalable System Architecture",
    description:
      "Designing clean, scalable architectures that support growth, performance, and evolving business requirements."
  },
  {
    title: "Quality, Security & Best Practices",
    description:
      "Strong emphasis on clean code, testing strategies, and secure development practices."
  },
  {
    title: "Leadership & Communication",
    description:
      "Proven ability to collaborate with stakeholders, lead development efforts, and communicate technical decisions clearly."
  }
];

export function FeaturesSection(): JSX.Element {
  return (
    <section className="bg-gray-900 py-28">
      <div className="max-w-7xl mx-auto px-8">

        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-semibold">
            Expertise & Capabilities
          </h2>
          <p className="mt-4 text-lg text-gray-400 leading-relaxed">
            Senior-level experience across web, mobile, and AI-driven software
            development.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm motion-safe:animate-fadeUp transition hover:-translate-y-1 hover:shadow-md"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <h3 className="text-gray-700 text-xl font-semibold">
                {feature.title}
              </h3>
              <p className="mt-4 text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
