import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { StructuredData } from "@/components/structured-data"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://clawd.chiayong.com"),
  title: "SimpleClaw - Deploy OpenClaw in Under 1 Minute",
  description: "Avoid all technical complexity and one click deploy your own 24/7 active OpenClaw instance under 1 minute.",
  keywords: ["OpenClaw", "AI assistant", "one-click deploy", "Telegram bot", "Discord bot", "AI deployment"],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "SimpleClaw - Deploy OpenClaw in Under 1 Minute",
    description: "Avoid all technical complexity and one click deploy your own 24/7 active OpenClaw instance under 1 minute.",
    type: "website",
    url: "https://clawd.chiayong.com",
    siteName: "SimpleClaw",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SimpleClaw",
    description: "Deploy OpenClaw in Under 1 Minute",
    images: ["/og-image.png"],
    creator: "@saviomartin7",
  },
  other: {
    "theme-color": "#000000",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        <StructuredData />
        {children}
      </body>
    </html>
  )
}
