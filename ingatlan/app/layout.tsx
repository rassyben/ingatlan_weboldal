import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "@/components/Chrome";
import { site } from "@/lib/site";
const playfair = Playfair_Display({ subsets: ["latin", "latin-ext"], variable: "--font-playfair" });
const inter = Inter({ subsets: ["latin", "latin-ext"], variable: "--font-inter" });
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "Ingatlanértékbecslés és ingatlanközvetítés", template: "%s | " + site.name },
  description: "Professzionális ingatlanértékbecslés és személyre szabott ingatlanközvetítés az első konzultációtól a sikeres ügyletig.",
  openGraph: { type: "website", locale: "hu_HU", siteName: site.name },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="hu" className={`${playfair.variable} ${inter.variable}`}><body><Header />{children}<Footer /></body></html>);
}
