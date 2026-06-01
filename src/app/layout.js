import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "@/app/globals.css";
import "@/assets/styles/index.css";
import "@/assets/styles/serv.css";
import "@/assets/styles/about.css";
import "@/assets/styles/contact.css";
import "@/assets/styles/equip.css";
import "@/assets/styles/footer.css";
import "@/assets/styles/maintanencePlan.css";
import "@/assets/styles/schedule.css";
import "@/assets/styles/serv.css";
import "@/assets/styles/buttons.css";
import "@/assets/styles/navbar.css";
import "@/assets/styles/areas.css";

import Navbar from "@/layout/navbar";
import Footer from "@/layout/footer";

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Hritsev Remodel",
  description:
    "Professional remodeling and renovation services in Sarasota, FL",

  icons: {
    icon: [
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
