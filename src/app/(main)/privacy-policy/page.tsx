import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Our privacy policy regarding your data.",
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen p-8 bg-primary-base">
      <h1 className="text-4xl font-bold text-primary-contrast mb-6">Privacy Policy</h1>
    </main>
  );
}
