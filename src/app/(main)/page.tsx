import type { Metadata } from 'next'
import HomeClient from './HomeClient'

export const metadata: Metadata = {
  title: "Luxury Construction & Remodeling",
  description: "Aesthetic Design & Construction specializes in high-end luxury construction, remodeling, and interior design. Let us build your dream space.",
}

export default function HomePage() {
  return <HomeClient />
}
