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
  metadataBase: new URL("https://zavierkamath.com"),
  title: {
    template: "Zavier Kamath | %s",
    default: "Zavier Kamath | AI Engineer & Full-Stack Developer",
  },
  description:
    "AI engineer and full-stack developer building practical agentic AI systems, data products, and production web applications.",
  keywords: [
    "Zavier Kamath",
    "AI engineer",
    "full-stack developer",
    "agentic AI",
    "AI agents",
    "RAG",
    "machine learning",
    "React",
    "TypeScript",
    "Python",
    "FastAPI",
    "data science",
    "Georgia Tech OMSCS",
    "Huntington National Bank",
    "AI enablement",
    "developer mentoring",
    "astrophysics",
    "physics",
    "dark matter research",
  ],
  authors: [{ name: "Zavier Kamath", url: "https://zavierkamath.com" }],
  creator: "Zavier Kamath",
  openGraph: {
    title: "Zavier Kamath | AI Engineer & Full-Stack Developer",
    description:
      "AI engineer and full-stack developer building practical agentic AI systems, data products, and production web applications.",
    type: "website",
    locale: "en_US",
    url: "https://zavierkamath.com",
    siteName: "Zavier Kamath Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zavier Kamath - AI Engineer and Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zavier Kamath | AI Engineer & Full-Stack Developer",
    description:
      "AI engineer and full-stack developer building practical agentic AI systems, data products, and production web applications.",
    images: ["/og-image.jpg"],
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
    google: "google-site-verification-code",
  },
  category: "portfolio",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#1e1b4b",
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
