import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import React from "react";
import SubNavbar from "@/components/global/sub-navbar";
import Navbar from "@/components/global/navbar";
import Footer from "@/components/global/footer";
import { ThemeProvider } from "@/utils/ThemeContext";


const poppins = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "AYNcore E-commerce",
  description: "Made with AYNcore",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={poppins.className}>
  
      <body className={`w-screen relative`}>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
          <div className="w-full">
            <Navbar />
            <SubNavbar />
          </div>
          <main className="main flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
