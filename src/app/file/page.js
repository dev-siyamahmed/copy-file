import CodeBlock from '@/components/CodeBlock'
import { codeSnippets } from '@/data/site'
import Link from 'next/link'
import React from 'react'

export default function FilePage() {
  return (
      <div className="relative mx-auto max-w-7xl px-6 py-6 lg:px-8 lg:py-8">
          <section id="code" className="mt-14 grid gap-4 sm:grid-cols-2">
        <Link href="/">Home</Link>  
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
    </div>
  )
}
