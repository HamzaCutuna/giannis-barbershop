import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://giannisbarbershop.ba'),
  title: "Gianni's Barbershop Sarajevo | Brijačnica",
  description: "Barbershop in Sarajevo. Professional haircuts, beard trims, and traditional shaves since 2013. Čekaluša 13, Sarajevo.",
  keywords: "brijačnica sarajevo, muški frizer sarajevo, gianni's barbershop, brijanje brade sarajevo, muško šišanje sarajevo",
  openGraph: {
    title: "Gianni's Barbershop Sarajevo | Brijačnica",
    description: "Barbershop in Sarajevo. Professional haircuts, beard trims, and traditional shaves since 2013. Čekaluša 13, Sarajevo.",
    url: "https://giannisbarbershop.ba",
    siteName: "Gianni's Barbershop Sarajevo",
    locale: "bs_BA",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Gianni's Barbershop Sarajevo - Brijačnica",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://giannisbarbershop.ba",
  },
  verification: {
    google: "your-google-verification-code",
  },
  authors: [{ name: "Gianni's Barbershop" }],
  creator: "Gianni's Barbershop",
  formatDetection: {
    telephone: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bs">
      <head>
        <link rel="alternate" hrefLang="bs-BA" href="https://giannisbarbershop.ba" />
        <meta name="geo.region" content="BA-SA" />
        <meta name="geo.placename" content="Sarajevo" />
        <meta name="geo.position" content="43.8563;18.4131" />
        <meta name="ICBM" content="43.8563, 18.4131" />
      </head>
      <body className={plusJakartaSans.className}>
        {children}
      </body>
    </html>
  );
}
