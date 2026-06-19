
import Link from "next/link";


export default function Home() {
  return (
    <main id="top" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-[34rem] bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.18),_transparent_34%),radial-gradient(circle_at_top_right,_rgba(15,23,42,0.12),_transparent_32%)]"
      />
      <div className="relative mx-auto max-w-7xl px-6 py-6 lg:px-8 lg:py-8">
        <header className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-900/10 pb-5">
          <a href="#top" className="group inline-flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-slate-950 text-sm font-semibold text-white shadow-sm transition group-hover:-translate-y-0.5">
              EH
            </span>
            <span>
              <span className="block text-xs uppercase tracking-[0.4em] text-blue-700">
                Copy ready
              </span>
              <span className="block font-[family-name:var(--font-display)] text-xl text-slate-950">
                Education Hub
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
            <a className="transition hover:text-slate-950" href="#preview">
              Preview
            </a>
            <a className="transition hover:text-slate-950" href="#structure">
              Structure
            </a>
            <a className="transition hover:text-slate-950" href="#story">
              Article
            </a>
            <a className="transition hover:text-slate-950" href="#code">
              Code
            </a>
          </nav>

          <a
            href="#code"
            className="inline-flex items-center justify-center rounded-full border border-slate-900/10 bg-white/80 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:border-slate-900/20 hover:bg-white"
          >
            Copy snippets
          </a>
        </header>

        <section id="preview" className="mt-12 rounded-xl bg-white/60 p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-950">Preview</h2>
          <p className="mt-2 text-sm text-slate-600">A quick visual preview of the Education Hub landing.</p>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <figure className="rounded-md overflow-hidden border border-slate-100">
              <img src="/images/preview-1.svg" alt="Preview 1" className="w-full h-48 object-cover bg-white" />
              <figcaption className="p-3 text-sm text-slate-600">Landing layout mock — hero and content preview.</figcaption>
            </figure>
            <figure className="rounded-md overflow-hidden border border-slate-100">
              <img src="/images/preview-2.svg" alt="Preview 2" className="w-full h-48 object-cover bg-white" />
              <figcaption className="p-3 text-sm text-slate-600">Tip card mock — quick guidance for learners.</figcaption>
            </figure>
          </div>
        </section>

        <section id="structure" className="mt-10 rounded-xl bg-white/60 p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-950">Structure</h2>
          <p className="mt-2 text-sm text-slate-600">How this mini project is organised.</p>
          <ul className="mt-4 grid grid-cols-1 gap-2 text-sm text-slate-700 sm:grid-cols-2">
            <li>App layout and pages under <span className="font-medium">src/app</span></li>
            <li>Reusable UI under <span className="font-medium">src/components</span></li>
            <li>Site data under <span className="font-medium">src/data</span></li>
            <li>Public assets under <span className="font-medium">public/</span></li>
          </ul>
        </section>

        <section id="story" className="mt-10 rounded-xl bg-white/60 p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-950">Article</h2>
          <p className="mt-2 text-sm text-slate-600">A short article describing the Education Hub and how to use the provided snippets and structure to learn and experiment.</p>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            <div className="col-span-2">
              <p className="text-sm text-slate-700">Education Hub brings small, copy-ready examples and explanations so you can experiment quickly. Use the snippets, follow the structure, and paste components into your own project to learn by doing.</p>
              <ol className="mt-3 list-decimal pl-5 text-sm text-slate-700">
                <li>Browse previews and pick a layout.</li>
                <li>Copy the snippet from the Code section.</li>
                <li>Paste into your project and tweak styles.</li>
              </ol>
            </div>
            <aside className="rounded-md border border-slate-100 bg-slate-50 p-3 text-sm text-slate-700">
              <strong className="block text-slate-900">Static Info</strong>
              <p className="mt-1">License: MIT-like demo content — free to copy for learning.</p>
              <p className="mt-1">Contact: education@example.com</p>
            </aside>
          </div>
        </section>

        <section id="code" className="mt-10 rounded-xl bg-white/60 p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-950">Code</h2>
          <p className="mt-2 text-sm text-slate-600">Copy-ready snippets you can paste into your own projects.</p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <article className="rounded-md border border-slate-100 bg-white p-3">
              <h3 className="text-sm font-medium text-slate-900">Hero snippet</h3>
              <pre className="mt-2 rounded bg-slate-50 p-2 text-xs text-slate-700">{`<section class="hero">\n  <h1>Welcome to Education Hub</h1>\n  <p>Copy this snippet and style it with Tailwind.</p>\n</section>`}</pre>
            </article>
            <article className="rounded-md border border-slate-100 bg-white p-3">
              <h3 className="text-sm font-medium text-slate-900">Tip card</h3>
              <pre className="mt-2 rounded bg-slate-50 p-2 text-xs text-slate-700">{`<div class="card">\n  <h4>Tip</h4>\n  <p>Try resizing the window to see responsive behavior.</p>\n</div>`}</pre>
            </article>
          </div>
        </section>

        <footer className="mt-16 flex flex-col gap-3 border-t border-slate-900/10 py-8 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
          <p>Built with Next.js and Tailwind CSS.</p>
          <p>Copy the snippets,
            <Link href="/file">then paste them</Link>
            into your own project.</p>
        </footer>
      </div>
    </main>
  );
}
