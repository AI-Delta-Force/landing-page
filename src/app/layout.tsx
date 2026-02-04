import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "SetupClaw - White-glove OpenClaw Deployment",
  description: "Professional OpenClaw deployment for founders and exec teams. AI assistant that clears your inbox, manages your calendar, and does work - on your hardware.",
  keywords: ["OpenClaw", "AI assistant", "email automation", "calendar management"],
  openGraph: {
    title: "SetupClaw - White-glove OpenClaw Deployment",
    description: "Professional AI assistant deployment for founders and exec teams.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SetupClaw",
    description: "White-glove OpenClaw deployment for founders.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
