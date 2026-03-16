import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Martingle - Advanced Martingle Strategy Platform",
  description: "Martingle is an advanced platform for automated trading strategies, providing precision, control, and cutting-edge tools for traders.",
  keywords: ["Martingle", "Martingle Esports", "Tournament Platform", "Free Fire Tournament App", "Esports Tournament App",],
  authors: [{ name: "Martingle Team" }],
  creator: "Martingle",
  publisher: "Martingle",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://martingle.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Martingle - Advanced Martingle Strategy Platform",
    description: "Experience the future of automated trading strategies with precision and control.",
    url: "https://martingle.vercel.app",
    siteName: "Martingle",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Martingle - Advanced Martingle Strategy Platform",
    description: "Experience the future of automated trading strategies with precision and control.",
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
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  verification: {
    google: "google7cb34a1368345c32",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Martingle",
              "url": "https://martingle.vercel.app",
              "description": "Advanced Martingle Strategy Platform for automated trading.",
              "applicationCategory": "FinanceApplication",
              "operatingSystem": "All",
            }),
          }}
        />
        {children}
      </body>
    </html>

  );
}
