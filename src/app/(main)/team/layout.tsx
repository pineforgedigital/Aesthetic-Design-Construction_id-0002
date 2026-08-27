import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Meet The Team",
  description: "Meet the experts behind Aesthetic Design & Construction. Our team of master builders, designers, and project managers is dedicated to excellence.",
}

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
