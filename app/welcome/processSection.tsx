import type { JSX } from 'react';

type ProcessStep = {
  title: string;
  description: string;
};

const PROCESS_STEPS: ProcessStep[] = [
  {
    title: "Discovery & Requirements",
    description:
      "We start by understanding business goals, technical requirements, and constraints to ensure alignment before development begins."
  },
  {
    title: "Architecture & Planning",
    description:
      "I design a scalable and secure system architecture, select appropriate technologies, and define a clear development roadmap."
  },
  {
    title: "Development & Iteration",
    description:
      "Features are implemented with clean, maintainable code, regular feedback cycles, and continuous quality assurance."
  },
  {
    title: "Delivery & Support",
    description:
      "The solution is delivered production-ready, with documentation, monitoring, and ongoing support as needed."
  }
];

export function ProcessSection(): JSX.Element {
  return (
    <section className="bg-gray-900 py-28">
      <div className="max-w-7xl mx-auto px-8">

        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center motion-safe:animate-fadeUp">
          <h2 className="text-3xl font-semibold">
            How We Work
          </h2>
          <p className="mt-5 text-lg text-gray-400 leading-relaxed">
            A structured and transparent approach to delivering reliable web,
            mobile, and AI-driven software solutions.
          </p>
        </div>

        {/* Process Steps */}
        <div className="mt-20 grid gap-12 md:grid-cols-4">
          {PROCESS_STEPS.map((step, index) => (
            <div
              key={index}
              className="
                text-center
                motion-safe:animate-fadeUp
                transition
                hover:-translate-y-1
              "
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <div className="
                mx-auto w-14 h-14 rounded-full
                bg-gray-600 text-white
                flex items-center justify-center
                text-lg font-semibold
                transition
              ">
                {index + 1}
              </div>

              <h3 className="mt-6 text-xl font-semibold">
                {step.title}
              </h3>

              <p className="mt-4 text-sm text-gray-400 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trust Note */}
        <div className="mt-20 max-w-4xl mx-auto text-center motion-safe:animate-fadeUp">
          <p className="text-gray-400 leading-relaxed">
            This process ensures clear communication, predictable timelines,
            and software that is built to scale and evolve with your business.
          </p>
        </div>

      </div>
    </section>
  );
}
