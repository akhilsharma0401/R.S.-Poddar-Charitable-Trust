import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import Navigation from "@/components/navigation"

export const metadata: Metadata = {
  title: "R.S. Poddar Charitable Trust - Serving Humanity with Dignity since 2020",
  description:
    "Free funeral van service (dead body transportation) and rent-free medical equipment in Jaipur, Rajasthan. 24/7 free funeral service, medical equipment rental, home care equipment. R.S. Poddar Charitable Trust serving families since 2020.",
  keywords:
    "free funeral van service, dead body transportation, rent-free medical equipment, medical equipment rental, home care equipment, funeral service Jaipur, free funeral service, Swarg Rath, charitable trust Jaipur, R.S. Poddar Charitable Trust",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
