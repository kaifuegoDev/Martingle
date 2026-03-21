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
  title: "Martingle",
  description: "Martingle is the ultimate eSports tournament platform, providing elite competition, precise tracking, and rewarding experiences for gamers.",
  applicationName: "Martingle",
  keywords: ["Martingle", "Martingle Esports", "Tournament Platform", "Free Fire Tournament App", "Esports Tournament App", "Gaming Community"],
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
    title: "Martingle",
    description: "Battle in elite eSports tournaments and win big on Martingle.",
    url: "https://martingle.vercel.app",
    siteName: "Martingle",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/icon.png",
        width: 512,
        height: 512,
        alt: "Martingle Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Martingle",
    description: "Battle in elite eSports tournaments and win big on Martingle.",
    images: ["/icon.png"],
    creator: "@Martingle",
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
    icon: [
      { url: "/icon3.png", type: "image/png" },
    ],
    apple: [
      { url: "/icon3.png", type: "image/png" },
    ],
  },
  verification: {
    google: "google7cb34a1368345c32",
  },
  appleWebApp: {
    title: "Martingle",
    statusBarStyle: "black-translucent",
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
              "description": "Martingle - Battle in elite eSports tournaments and win big.",
              "applicationCategory": "GamingApplication",
              "operatingSystem": "All",
            }),
          }}
        />
        {children}
      </body>
    </html>

  );
}
