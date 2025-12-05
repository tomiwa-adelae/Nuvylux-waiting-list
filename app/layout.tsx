import type { Metadata } from "next";
import { Playfair_Display, Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";
import Head from "next/head";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const outfits = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const siteConfig = {
  url: `${process.env.NEXT_PUBLIC_URL}`,
};

export const metadata: Metadata = {
  title: {
    default: "NUVYLUX | The New Light of Luxury",
    template: "%s | NUVYLUX",
  },
  description:
    "NUVYLUX is a visionary house redefining beauty, fashion, and innovation for the modern world. Where creativity meets technology, and culture inspires evolution.",
  keywords: [
    "NUVYLUX",
    "luxury beauty",
    "beauty tech",
    "fashion innovation",
    "AI skin analysis",
    "beauty marketplace",
    "African luxury",
  ],
  metadataBase: new URL(siteConfig.url),
  authors: [{ name: "Hannah Chika Diei" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: "NUVYLUX | The New Light of Luxury",
    title: "NUVYLUX | The New Light of Luxury",
    description:
      "Redefining beauty, fashion, and innovation for the modern world.",
    images: "/assets/opengraph.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${outfits.className}`}>
      <Head>
        <meta property="og:image" content="/opengraph.png" />
        <meta property="og:image" content="/assets/opengraph.png" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=no"
        />
        <meta
          data-n-head="ssr"
          data-hid="viewport"
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no, maximum-scale=1"
        />
      </Head>
      <body className="antialiased">
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
