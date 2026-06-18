"use client";

import { useState } from "react";

export default function CodeBlock({ title, description, language, code }) {
  const [label, setLabel] = useState("Copy");

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setLabel("Copied");
    } catch {
      setLabel("Failed");
    }

    window.setTimeout(() => setLabel("Copy"), 1600);
  };

  return (
    <article className="overflow-hidden rounded-[2rem] border border-slate-900/10 bg-white/90 shadow-sm backdrop-blur">
      <div className="flex flex-wrap items-start justify-between gap-4 border-b border-slate-900/10 px-5 py-4 sm:px-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-700">
            {language}
          </p>
          <h3 className="mt-2 font-[family-name:var(--font-display)] text-2xl text-slate-950">
            {title}
          </h3>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">{description}</p>
        </div>

        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex items-center justify-center rounded-full border border-slate-900/10 bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          {label}
        </button>
      </div>

      <pre className="overflow-x-auto bg-slate-950 p-5 text-[13px] leading-7 text-slate-100 sm:p-6">
        <code className="block font-mono">{code}</code>
      </pre>
    </article>
  );
}