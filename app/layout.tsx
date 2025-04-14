import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { generateOrganizationSchema, generateNonprofitSchema } from './structured-data';
import Script from 'next/script';

export const metadata: Metadata = {
  title: "The Black History Foundation",
  description: "Protect, Preserve, Empower - Safeguarding Black history for future generations",
  metadataBase: new URL('https://theblackhistoryfoundation.org'),
  keywords: "Black history, cultural preservation, African heritage, education, history foundation",
  authors: [{ name: "The Black History Foundation" }],
  colorScheme: "light dark",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "The Black History Foundation",
    title: "The Black History Foundation",
    description: "Protect, Preserve, Empower - Safeguarding Black history for future generations",
    images: [
      {
        url: "/Logos/TBHF_Logo_Full Color.png", 
        width: 1200,
        height: 630,
        alt: "The Black History Foundation Logo"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Black History Foundation",
    description: "Protect, Preserve, Empower - Safeguarding Black history for future generations",
    images: ["/Logos/TBHF_Logo_Full Color.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          id="organization-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(generateOrganizationSchema()) }}
        />
        <Script
          id="nonprofit-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(generateNonprofitSchema()) }}
        />
      </head>
      <body>{children}</body>
      <Analytics />
    </html>
  );
}
