import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { StarfieldCanvas } from "@/components/shared/StarfieldCanvas";
import PageTransition from "@/components/shared/PageTransition";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "Zavier Kamath | %s",
    default: "Zavier Kamath | Astrophysics & AI Research"
  },
  description:
    "Physics graduate turned AI researcher. From dark matter constraints to neural networks, bridging theoretical physics and machine learning at Huntington National Bank.",
  keywords: [
    "Zavier Kamath",
    "astrophysics",
    "AI researcher",
    "machine learning",
    "physics",
    "data science",
    "Ohio State University",
    "Huntington National Bank",
    "dark matter research",
    "neural networks",
    "Bayesian statistics",
    "Monte Carlo methods"
  ],
  authors: [{ name: "Zavier Kamath", url: "https://zavierkamath.com" }],
  creator: "Zavier Kamath",
  openGraph: {
    title: "Zavier Kamath | Astrophysics & AI Research",
    description: "Physics graduate turned AI researcher. From dark matter constraints to neural networks.",
    type: "website",
    locale: "en_US",
    url: "https://zavierkamath.com",
    siteName: "Zavier Kamath Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zavier Kamath - Astrophysics & AI Research"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Zavier Kamath | Astrophysics & AI Research",
    description: "Physics graduate turned AI researcher. From dark matter constraints to neural networks.",
    images: ["/og-image.jpg"]
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
  verification: {
    google: "google-site-verification-code"
  },
  category: "portfolio"
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#1e1b4b"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} ${spaceGrotesk.variable}`}
    >
      <body className="min-h-screen bg-space-black text-moonlight-gray antialiased">
        <StarfieldCanvas />
        <Navbar />
        <PageTransition>
          <div className="relative pt-16">{children}</div>
        </PageTransition>
      </body>
    </html>
  );
}
