import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import Navigation from "@/components/navigation";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.rspoddar.org"),
  title: "Free Funeral Van & Medical Equipment in Jaipur | RS Poddar",
  description:
    "Free funeral van (Swarg Rath) & rent-free medical equipment in Jaipur. 24/7 dead body transportation by R. S. Poddar Charitable Trust. Call 9251412412.",
  keywords:
    "free funeral van service, dead body transportation, rent-free medical equipment, medical equipment rental, home care equipment, funeral service Jaipur, free funeral service, Swarg Rath, charitable trust Jaipur, R. S. Poddar Charitable Trust",
  openGraph: {
    title: "Free Funeral Van & Medical Equipment in Jaipur | RS Poddar",
    description:
      "Free funeral van (Swarg Rath) & rent-free medical equipment in Jaipur. 24/7 dead body transportation by R. S. Poddar Charitable Trust. Call 9251412412.",
      url : "https://www.rspoddar.org",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  // Users must stay able to zoom — never lock maximumScale/userScalable
  viewportFit: "cover",
  themeColor: "#453066",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={GeistMono.variable /* exposes --font-geist-mono */}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      {/* Browser extensions (Grammarly, ColorZilla) inject attributes on <body> */}
      <body
        className={`${GeistSans.className} antialiased overflow-x-hidden`}
        suppressHydrationWarning
      >
        <Navigation />
        <main className="w-full">{children}</main>
      </body>
    </html>
  );
}
