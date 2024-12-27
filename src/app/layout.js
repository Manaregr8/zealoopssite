"use client";
import React, { useState, useEffect } from "react";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Loader from "./components/loader";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


export default function RootLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => setIsLoading(false);
    // Simulate a delay to show loader for better UX
    const timeout = setTimeout(handleLoad, 1500); 

    return () => clearTimeout(timeout); // Clean up timeout on unmount
  }, []);

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {isLoading ? (
          <Loader /> // Display loader while loading
        ) : (
          <>
            <Navbar />
            {children}
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}
