import { PortableTextComponents } from '@portabletext/react'
import Link from 'next/link'

export const portableTextComponents: PortableTextComponents = {
  block: {
    h1: ({children}) => <h1 className="font-outfit text-4xl md:text-5xl font-bold mt-12 mb-6 text-primary-contrast">{children}</h1>,
    h2: ({children}) => <h2 className="font-outfit text-3xl font-bold mt-10 mb-5 text-primary-contrast">{children}</h2>,
    h3: ({children}) => <h3 className="font-outfit text-2xl font-semibold mt-8 mb-4 text-primary-contrast">{children}</h3>,
    h4: ({children}) => <h4 className="font-outfit text-xl font-medium mt-6 mb-3 text-primary-contrast">{children}</h4>,
    normal: ({children}) => <p className="text-primary-contrast/80 text-lg leading-relaxed mb-6">{children}</p>,
    blockquote: ({children}) => <blockquote className="border-l-4 border-highlight pl-6 py-2 italic text-primary-contrast/70 my-8 bg-highlight/5 rounded-r-lg">{children}</blockquote>,
  },
  list: {
    bullet: ({children}) => <ul className="list-disc pl-6 mb-6 space-y-2 text-primary-contrast/80 text-lg marker:text-highlight">{children}</ul>,
    number: ({children}) => <ol className="list-decimal pl-6 mb-6 space-y-2 text-primary-contrast/80 text-lg marker:text-highlight font-medium">{children}</ol>,
  },
  marks: {
    strong: ({children}) => <strong className="font-semibold text-primary-contrast">{children}</strong>,
    em: ({children}) => <em className="italic">{children}</em>,
    link: ({value, children}) => {
      const target = (value?.href || '').startsWith('http') ? '_blank' : undefined
      const rel = target === '_blank' ? 'noopener noreferrer' : undefined
      return (
        <Link href={value?.href || '/'} target={target} rel={rel} className="text-highlight hover:text-[#A34F3A] underline decoration-highlight/30 hover:decoration-highlight underline-offset-4 font-medium transition-all">
          {children}
        </Link>
      )
    },
  },
}
