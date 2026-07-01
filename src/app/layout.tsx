import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "TDME | Transport Data & Mobility Engineering",
  description:
    "De la donnée terrain à la décision. Ingénierie des transports et data mobilité, en France et à l'international.",
  keywords: [
    "ingénierie des transports",
    "data mobilité",
    "étude de trafic",
    "évaluation économique",
    "modélisation transport",
    "TDME",
    "Transport Data Mobility Engineering",
    "Malek Belkhir",
    "bureau d'études transport",
    "mobilité urbaine",
    "Afrique",
    "France",
    "international",
  ],
  authors: [{ name: "TDME", url: "https://tdme.fr" }],
  openGraph: {
    title: "TDME | Transport Data & Mobility Engineering",
    description:
      "De la donnée terrain à la décision. Ingénierie des transports et data mobilité, en France et à l'international.",
    url: "https://tdme.fr",
    siteName: "TDME",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TDME - Transport Data & Mobility Engineering",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TDME | Transport Data & Mobility Engineering",
    description:
      "De la donnée terrain à la décision. Ingénierie des transports et data mobilité.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
