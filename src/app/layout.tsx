import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";

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
  title: "Astrophysics Portfolio | Research & AI Experience",
  description:
    "Clean, professional portfolio showcasing astrophysics research and AI experience with smooth animations and an astronomy-themed aesthetic.",
  keywords: ["astrophysics", "AI", "machine learning", "portfolio", "research", "data science"],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Astrophysics Portfolio",
    description: "Showcasing astrophysics research and AI experience",
    type: "website",
    locale: "en_US",
    url: "https://your-domain.com",
    siteName: "Astrophysics Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Astrophysics Portfolio",
    description: "Showcasing astrophysics research and AI experience",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
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
        <Navbar />
        <div className="relative pt-16">{children}</div>
      </body>
    </html>
  );
}
