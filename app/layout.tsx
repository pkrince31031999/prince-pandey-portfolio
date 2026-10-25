import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { profile } from "@/data/resume";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const description =
  "Portfolio of Prince Pandey, a software engineer focused on backend systems, APIs, cloud infrastructure, and generative AI with Cursor, Claude, and Google ADK. Based in Noida, India.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl || "http://localhost:3000"),
  title: "Prince Pandey — Software Engineer | Backend Developer",
  description,
  applicationName: "Prince Pandey",
  authors: [{ name: profile.name }],
  keywords: [
    "Prince Pandey",
    "Software Engineer",
    "Backend Developer",
    "DevOps Engineer",
    "API Development",
    "Generative AI",
    "Cursor",
    "Claude",
    "Google ADK",
    "AWS",
    "Noida",
  ],
  alternates: siteUrl ? { canonical: siteUrl } : undefined,
  openGraph: {
    title: "Prince Pandey — Software Engineer | Backend Developer",
    description,
    type: "website",
    locale: "en_IN",
    siteName: "Prince Pandey",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prince Pandey — Software Engineer | Backend Developer",
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#090a0d",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: "Software Engineer",
  description,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Noida",
    addressRegion: "Uttar Pradesh",
    addressCountry: "IN",
  },
  knowsAbout: [
    "Backend development",
    "REST APIs",
    "SOAP APIs",
    "DevOps",
    "AWS",
    "Docker",
    "Kubernetes",
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">
        <noscript>
          <style>{`.reveal-item{opacity:1!important;transform:none!important}.words-live{display:none!important}.words-static{display:block!important}`}</style>
        </noscript>
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:rounded-full focus:bg-[#f3efe6] focus:px-4 focus:py-2 focus:text-sm focus:text-[#141311]"
        >
          Skip to content
        </a>
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-x-0 top-0 z-[70] h-px bg-[linear-gradient(90deg,transparent,#a9b6ff,transparent)]"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
