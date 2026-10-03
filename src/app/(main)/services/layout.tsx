import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Our Services",
  description: "Explore our comprehensive suite of construction services, from custom home building and full-scale remodeling to premium interior decorating.",
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
