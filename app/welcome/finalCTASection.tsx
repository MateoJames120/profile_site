import type { JSX } from 'react';

export function FinalCTASection(): JSX.Element {
  return (
    <section className="bg-gray-900 text-white py-28">
      <div className="max-w-4xl mx-auto px-8 text-center">

        <h2 className="text-3xl font-semibold">
          Ready to Work Together?
        </h2>

        <p className="mt-6 text-lg text-gray-300 leading-relaxed">
          If you’re looking for a senior engineer who can design, build,
          and deliver reliable web, mobile, and AI-driven software,
          I’d be happy to discuss your project.
        </p>

        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          <a
            href="/resume.pdf"
            className="
              px-8 py-3 rounded-lg
              border border-gray-600
              text-gray-300
              font-medium
              transition
              hover:border-gray-400 hover:text-white
            "
          >
            View Resume
          </a>
        </div>

        <p className="mt-10 text-sm text-gray-400">
          Available for long-term contracts, consulting, and senior-level roles.
        </p>

      </div>
    </section>
  );
}
