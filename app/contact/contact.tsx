import type { JSX } from 'react';

export function Contact(): JSX.Element {
  return (
    <main className="bg-slate-950 text-white min-h-screen">

      {/* Header */}
      <section className="py-32">
        <div className="max-w-5xl mx-auto px-8">
          <h1 className="text-4xl font-semibold">
            Get in Touch
          </h1>

          <p className="mt-6 text-lg text-slate-300 max-w-3xl">
            If you’d like to discuss a project, collaboration, or senior-level
            opportunity, feel free to reach out. I typically respond within
            one business day.
          </p>
        </div>
      </section>

      {/* Contact Panel */}
      <section className="pb-32">
        <div className="max-w-6xl mx-auto px-8 grid gap-16 md:grid-cols-2">

          {/* Left: Info */}
          <div className="space-y-8">
            <div className="bg-slate-900 p-8 rounded-xl border border-slate-800">
              <h2 className="text-xl font-semibold">
                Contact Information
              </h2>

              <ul className="mt-6 space-y-4 text-slate-300">
                <li>
                  <span className="block text-sm text-slate-400">
                    Email
                  </span>
                  <a
                    href="mailto:mateo.james.busin@hotmail.com"
                    className="hover:underline"
                  >
                    mateo.james.busin@hotmail.com
                  </a>
                </li>

                <li>
                  <span className="block text-sm text-slate-400">
                    Availability
                  </span>
                  Open to long-term contracts and consulting
                </li>

                <li>
                  <span className="block text-sm text-slate-400">
                    Location
                  </span>
                  Remote / Global
                </li>
              </ul>
            </div>

            <div className="bg-slate-900 p-8 rounded-xl border border-slate-800">
              <h2 className="text-xl font-semibold">
                Preferred Communication
              </h2>

              <p className="mt-4 text-slate-300 leading-relaxed">
                Email is the fastest way to reach me. Once connected, I’m happy
                to move the conversation to a real-time channel if needed.
              </p>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-slate-900 p-10 rounded-xl border border-slate-800">

            <h2 className="text-xl font-semibold">
              Send a Message
            </h2>

            <form
              className="mt-8 space-y-6"
              action="mailto:your@email.com"
              method="POST"
              encType="text/plain"
            >
              <div>
                <label className="block text-sm text-slate-400">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="
                    mt-2 w-full rounded-lg bg-slate-950 border border-slate-700
                    px-4 py-3 text-white
                    focus:outline-none focus:ring-2 focus:ring-slate-600
                  "
                />
              </div>

              <div>
                <label className="block text-sm text-slate-400">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="
                    mt-2 w-full rounded-lg bg-slate-950 border border-slate-700
                    px-4 py-3 text-white
                    focus:outline-none focus:ring-2 focus:ring-slate-600
                  "
                />
              </div>

              <div>
                <label className="block text-sm text-slate-400">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  className="
                    mt-2 w-full rounded-lg bg-slate-950 border border-slate-700
                    px-4 py-3 text-white
                    resize-none
                    focus:outline-none focus:ring-2 focus:ring-slate-600
                  "
                />
              </div>

              <button
                type="submit"
                className="
                  w-full py-3 rounded-lg
                  bg-white text-slate-900 font-medium
                  transition
                  hover:bg-slate-200
                "
              >
                Send Message
              </button>
            </form>

          </div>

        </div>
      </section>

    </main>
  );
}

