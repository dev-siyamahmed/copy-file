import CodeBlock from "@/components/CodeBlock";
import { codeSnippets,} from "@/data/site";


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


        <section id="code" className="mt-14 grid gap-4">
          {codeSnippets.map((snippet) => (
            <CodeBlock
              key={snippet.id}
              title={snippet.title}
              description={snippet.description}
              language={snippet.language}
              code={snippet.code}
            />
          ))}
        </section>

        <footer className="mt-16 flex flex-col gap-3 border-t border-slate-900/10 py-8 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
          <p>Built with Next.js and Tailwind CSS.</p>
          <p>Copy the snippets, then paste them into your own project.</p>
        </footer>
      </div>
    </main>
  );
}
