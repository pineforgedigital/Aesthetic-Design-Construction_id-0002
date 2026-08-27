import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Our Services",
  description: "Explore our comprehensive suite of luxury construction services, from custom home building and full-scale remodeling to premium interior design.",
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
