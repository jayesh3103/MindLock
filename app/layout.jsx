import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import NoiseOverlay from "@/components/NoiseOverlay";
import GradientMesh from "@/components/GradientMesh";
import PageTransition from "@/components/PageTransition";


export const metadata = {
  title: "MindLock",
  description: "Secure, encrypted AI mental health assistant. Your thoughts, locked with you.",
  icons: {
    icon: "/shield.svg",
  },
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} antialiased cursor-none bg-[#030303]`}
      >
        <SmoothScroll />
        <CustomCursor />
        <NoiseOverlay />
        <GradientMesh />
        <Navbar />
        <PageTransition>
          <div className="flex flex-col min-h-screen">
            {children}
            <Footer />
          </div>
        </PageTransition>
      </body>
    </html>
  );
}
