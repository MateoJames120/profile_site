import type { JSX } from 'react';

export function About(): JSX.Element {
  return (
    <main className="bg-gray-900 text-white max-w-5xl mx-auto ">

      {/* Intro */}
      <section className="py-28">
        <div className="px-8 motion-safe:animate-fadeUp">
          <h1 className="text-4xl font-semibold">
            About Me
          </h1>

          <p className="mt-6 text-lg text-gray-300 leading-relaxed max-w-3xl">
            Experienced and results-oriented Full-Stack Developer with a deep passion for the role and a Computer Science 
            degree. Offering meticulous attention to detail, excellent problem-solving abilities, and the capability to thrive in 
            fast-paced team environments. I am a dependable individual committed to meeting and surpassing all assigned 
            goals.
          </p>
        </div>
      </section>

      <hr className="border-gray-800" />

      {/* Background & Focus */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-8 grid gap-16 md:grid-cols-2">

          <div
            className="motion-safe:animate-fadeUp"
            style={{ animationDelay: "120ms" }}
          >
            <h2 className="text-2xl font-semibold">
              Professional Background
            </h2>

            <p className="mt-6 text-gray-300 leading-relaxed">
              I have collaborated with U.S.-based companies, startups, and
              agencies as both an individual contributor and technical lead.
              My focus is building systems that remain reliable and maintainable
              over time.
            </p>

            <p className="mt-4 text-gray-300 leading-relaxed">
              My experience spans full-stack web development, mobile engineering,
              and integrating AI-powered capabilities into production systems.
            </p>
          </div>

          <div
            className="motion-safe:animate-fadeUp"
            style={{ animationDelay: "240ms" }}
          >
            <h2 className="text-2xl font-semibold">
              What I Focus On
            </h2>

            <ul className="mt-6 space-y-4 text-gray-300">
              <li>• Scalable and maintainable architectures</li>
              <li>• Clean, testable, and secure codebases</li>
              <li>• Performance, reliability, and observability</li>
              <li>• Custom Software Development</li>
              <li>• Data Engineering & Analytics</li>
              <li>• AI & Machine Learning</li>
              <li>• Blockchain & Web3</li>
              <li>• Clear communication and long-term alignment</li>
            </ul>
          </div>

        </div>
      </section>

      <hr className="border-gray-800" />

      {/* Expertise */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-8">

          <h2 className="text-2xl font-semibold text-center motion-safe:animate-fadeUp">
            Areas of Expertise
          </h2>

          <div className="mt-16 grid gap-10 md:grid-cols-3">
            {[
              {
                title: "Web & Mobile Development",
                desc: "High-performance, responsive applications built with modern frameworks."
              },
              {
                title: "AI & Intelligent Systems",
                desc: "Practical AI integrations that enhance workflows, automation, and insights."
              },
              {
                title: "Technical Leadership",
                desc: "Architecture guidance, mentoring, and engineering best practices."
              }
            ].map((item, index) => (
              <div
                key={item.title}
                className="
                  bg-gray-800 p-8 rounded-xl
                  motion-safe:animate-fadeUp
                  transition
                  hover:-translate-y-1
                "
                style={{ animationDelay: `${index * 120 + 200}ms` }}
              >
                <h3 className="text-lg font-semibold">
                  {item.title}
                </h3>
                <p className="mt-4 text-gray-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      <hr className="border-gray-800" />

      {/* Closing */}
      <section className="py-28">
        <div
          className="max-w-4xl mx-auto px-8 text-center motion-safe:animate-fadeUp"
          style={{ animationDelay: "500ms" }}
        >
          <h2 className="text-2xl font-semibold">
            How I Work
          </h2>

          <p className="mt-6 text-gray-300 leading-relaxed">
            I prioritize thoughtful planning, transparent communication, and
            long-term partnerships. My goal is to build software that continues
            to deliver value well beyond its initial release.
          </p>

          <p className="mt-4 text-gray-300 leading-relaxed">
            If you’re looking for a senior developer with depth, reliability,
            and a pragmatic approach, I’d be glad to connect.
          </p>
        </div>
      </section>

    </main>
  );
}
