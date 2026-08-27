import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Our Story",
  description: "Learn about the history, mission, and dedication behind Aesthetic Design & Construction. We build more than structures; we build legacies.",
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
