import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import Navigation from "@/components/navigation";

export const metadata = {
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

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#453066",
};

export default function RootLayout({
  children,
}) {
  return (
    <html
      lang="en"
      className={GeistMono.variable}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
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
