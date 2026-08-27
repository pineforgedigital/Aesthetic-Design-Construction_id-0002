import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Our terms of service and conditions.",
}

export default function TermsPage() {
  return (
    <main className="min-h-screen p-8 bg-primary-base">
      <h1 className="text-4xl font-bold text-primary-contrast mb-6">Terms of Service</h1>
    </main>
  );
}
