import type { Metadata } from "next";
import { Bodoni_Moda } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://aestheticdesignconstruction.com'),
  title: {
    template: '%s | Aesthetic Design & Construction',
    default: 'Aesthetic Design & Construction',
  },
  description: "Bringing design, construction, and craftsmanship together for your home.",
  openGraph: {
    title: "Aesthetic Design & Construction",
    description: "Bringing design, construction, and craftsmanship together for your home.",
    siteName: "Aesthetic Design & Construction",
    images: [
      {
        url: "/og-logo.jpg",
        width: 1200,
        height: 630,
        alt: "Aesthetic Design & Construction Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aesthetic Design & Construction",
    description: "Bringing design, construction, and craftsmanship together for your home.",
    images: ["/og-logo.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bodoni.variable} antialiased`}>
      <body className="flex flex-col font-sans relative">
        <SmoothScroll>
          {children}
        </SmoothScroll>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
