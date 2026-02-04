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
  title: "SetupClaw - White-glove OpenClaw Deployment",
  description: "Professional OpenClaw deployment for founders and exec teams. AI assistant that clears your inbox, manages your calendar, and does work - on your hardware.",
  keywords: ["OpenClaw", "AI assistant", "email automation", "calendar management", "executive assistant", "AI deployment"],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "SetupClaw - White-glove OpenClaw Deployment",
    description: "Professional AI assistant deployment for founders and exec teams.",
    type: "website",
    url: "https://clawd.chiayong.com",
    siteName: "SetupClaw",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SetupClaw",
    description: "White-glove OpenClaw deployment for founders.",
    images: ["/og-image.png"],
    creator: "@michael_chomsky",
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
