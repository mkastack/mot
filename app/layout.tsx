import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import PageTransition from "./components/PageTransition";
import FloatingContactButton from "./components/FloatingContactButton";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://mikeontech.com"),
  title: {
    default: "MikeOnTech (MOT) — Founder & CEO Portfolio",
    template: "%s — MikeOnTech (MOT)",
  },
  description:
    "Official executive portfolio of Mike (MikeOnTech / MOT), Founder, CEO, and technology leader pioneering scalable digital infrastructure, fintech systems, and next-generation venture ecosystems.",
  icons: {
    icon: "/mot-logo-tight.png",
    apple: "/mot-logo-tight.png",
  },
  openGraph: {
    title: "MikeOnTech (MOT) — Founder & CEO Portfolio",
    description: "Official executive portfolio of Mike (MikeOnTech / MOT). Connect for venture advisory, tech architecture, and keynote speaking.",
    images: [{ url: "/mot-logo-tight.png" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#F5F0EB] selection:bg-[#00A3FF]/20 selection:text-[#0066FF]">
        <PageTransition>{children}</PageTransition>
        <FloatingContactButton />
      </body>
    </html>
  );
}
