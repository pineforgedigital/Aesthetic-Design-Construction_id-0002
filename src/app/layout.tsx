import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://aestheticdesignconstruction.com'),
  title: {
    template: '%s | Aesthetic Design & Construction',
    default: 'Aesthetic Design & Construction',
  },
  description: "High-end luxury construction, remodeling, and interior design.",
  openGraph: {
    title: "Aesthetic Design & Construction",
    description: "High-end luxury construction, remodeling, and interior design.",
    siteName: "Aesthetic Design & Construction",
    images: [
      {
        url: "/logo.jpg",
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
    description: "High-end luxury construction, remodeling, and interior design.",
    images: ["/logo.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} antialiased`}>
      <body className="flex flex-col font-sans selection:bg-secondary-accent/30 selection:text-primary-contrast relative">
        <SmoothScroll>
          {children}
        </SmoothScroll>
        <SpeedInsights />
      </body>
    </html>
  );
}
