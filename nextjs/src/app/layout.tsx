import type { Metadata } from "next";
import { Hanken_Grotesk, Lato, JetBrains_Mono } from "next/font/google";
import "@/styles/tokens.css";
import "./globals.css";

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-hanken-grotesk",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://inspirelabs.in"
  ),
  title: {
    template: "%s | Inspirelabs",
    default:
      "Inspirelabs | AI-driven Performance Marketing System for Brand Growth",
  },
  description:
    "Inspirelabs operates a connected system of consumer-intent surfaces, growth platforms, AI-led workflows, and growth operators. 12+ years building. 76M+ lifetime users.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Inspirelabs",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
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
      className={`${hankenGrotesk.variable} ${lato.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen bg-[var(--paper)] text-[var(--ink)] font-[var(--font-body)] antialiased">
        {/* SiteHeader will be added in Phase 2 */}
        <main className="flex-1">{children}</main>
        {/* SiteFooter will be added in Phase 2 */}
      </body>
    </html>
  );
}
