import type { JSX } from "react";
import { useState, useEffect } from "react";

type Category = "All" | "Web" | "Mobile" | "AI";

type Project = {
  id: number;
  title: string;
  category: Exclude<Category, "All">;
  description: string;
  details: string;
  skills: string[];
  screenshots: string[];
};

const CATEGORIES: Category[] = ["All", "Web", "Mobile", "AI"];

const BASE = import.meta.env.BASE_URL || "/";

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Enterprise Web Platform",
    category: "Web",
    description: "Scalable enterprise-grade web platform.",
    details:
      "Led architecture and implementation for a multi-tenant platform serving enterprise users with high availability and security requirements.",
    skills: ["React", "TypeScript", "Node.js", "Cloud Architecture"],
    screenshots: [`${BASE}screenshots/web-platform-1.png`],
  },
  {
    id: 2,
    title: "Mobile Application Suite",
    category: "Mobile",
    description: "Cross-platform mobile applications.",
    details:
      "Designed shared mobile architecture, optimized performance, and delivered production-ready applications.",
    skills: ["React Native", "TypeScript", "Mobile UX"],
    screenshots: [
      `${BASE}screenshots/mobile-platform-1.png`,
      `${BASE}screenshots/mobile-platform-2.png`
    ],
  },
  {
    id: 3,
    title: "AI Analytics Dashboard",
    category: "AI",
    description: "AI-driven analytics and automation tools.",
    details:
      "Integrated AI pipelines and analytics dashboards to support business decision-making.",
    skills: ["AI Integration", "Data Pipelines", "Python", "Visualization"],
    screenshots: [
      `${BASE}screenshots/ai-platform-1.png`,
      `${BASE}screenshots/ai-platform-2.png`
    ],
  },
  {
    id: 4,
    title: "AI-Generated Ad Creative",
    category: "AI",
    description: "AI-powered platform that generates and optimizes ad creatives using generative models and real-time performance data.",
    details:
      "Built a modular AI system combining generative models, prompt orchestration, and analytics pipelines to produce and optimize ad creatives. Enabled automated variant generation, experimentation, and performance-driven refinement at scale.",
    skills: ["Generative AI", "LLMs", "React", "TypeScript", "AI Optimization"],
    screenshots: [
      `${BASE}screenshots/ai-generated-1.png`
    ],
  },
  {
    id: 5,
    title: "Real Estate Platform",
    category: "Web",
    description: "Modern real estate web platform built with Vue.js, delivering fast property discovery, intuitive navigation, and a responsive user experience across devices.",
    details:
      "Developed a component-based Vue.js frontend for property listings and detail views. Implemented advanced search, filtering, and sorting by location, price, and property type. Built responsive layouts optimized for desktop, tablet, and mobile.Integrated dynamic image galleries, maps, and contact forms. Optimized performance, SEO, and accessibility for public-facing pages",
    skills: ["Vuejs", "JavaScript/TypeScript", "Vuex", "Tailwind CSS / SCSS", "Responsive Design", "RESTful APIs", "SEO optimization", "Express.js", "MongoDB", "AWS"],
    screenshots: [`${BASE}screenshots/real-estate-1.png`],
  },
];

export function Portfolio(): JSX.Element {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    activeCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === activeCategory);

  useEffect(() => {
    setSelectedProject(null);
  }, [activeCategory]);

  return (
    <main className="bg-neutral-950 text-neutral-100 min-h-screen">
      {/* Header */}
      <section className="py-28">
        <div className="max-w-6xl mx-auto px-8">
          <h1 className="text-5xl font-semibold">Portfolio</h1>
        </div>
      </section>
      
      <section className="pb-12">
        <div className="max-w-6xl mx-auto px-8 flex flex-wrap gap-4">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`
                px-5 py-2 rounded-full text-sm font-medium
                border transition
                ${
                  activeCategory === category
                    ? "bg-white text-neutral-900 border-white"
                    : "border-neutral-700 text-neutral-400 hover:border-neutral-500"
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="pb-32">
        <div className="max-w-6xl mx-auto px-8 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-neutral-900 rounded-xl border border-neutral-800 overflow-hidden"
              >
                {/* Screenshot */}
                <img
                  src={project.screenshots[0]}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full aspect-video object-cover"
                />

                {/* Content */}
                <div className="p-6">
                  <span className="text-xs text-neutral-500">
                    {project.category}
                  </span>

                  <h3 className="mt-2 text-lg font-semibold">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-sm text-neutral-400">
                    {project.description}
                  </p>

                  {/* Skills */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs px-3 py-1 rounded-full bg-neutral-800 text-neutral-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="mt-6 text-sm font-medium hover:underline"
                  >
                    View Details →
                  </button>
                </div>
              </div>
            ))}

            {filteredProjects.length === 0 && (
              <p className="text-neutral-500">
                No projects found for this category.
              </p>
            )}
          </div>
      </section>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6">
          <div className="bg-neutral-900 max-w-3xl w-full rounded-xl border border-neutral-800 overflow-y-auto max-h-[90vh]">
            {/* Header */}
            <div className="p-6 border-b border-neutral-800 flex justify-between items-start">
              <div>
                <h2 className="text-2xl font-semibold">
                  {selectedProject.title}
                </h2>
                <p className="mt-2 text-sm text-neutral-400">
                  {selectedProject.category}
                </p>
              </div>

              <button
                onClick={() => setSelectedProject(null)}
                className="text-neutral-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            {/* Body */}
            <div className="p-6 space-y-6">
              <p className="text-neutral-300 leading-relaxed">
                {selectedProject.details}
              </p>

              {/* Skills */}
              <div>
                <h3 className="text-sm font-semibold mb-2">Related Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-3 py-1 rounded-full bg-neutral-800 text-neutral-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Screenshots */}
              <div className="grid gap-4 sm:grid-cols-2">
                {selectedProject.screenshots.map((src, index) => (
                  <img
                    key={index}
                    src={src}
                    alt={`${selectedProject.title} screenshot ${index + 1}`}
                    loading="lazy"
                    decoding="async"
                    className="rounded-lg border border-neutral-800"
                  />
                ))}
              </div>

              {/* NDA fallback */}
              {selectedProject.screenshots.length === 0 && (
                <p className="text-sm text-neutral-500">
                  Screenshots available upon request due to NDA.
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
