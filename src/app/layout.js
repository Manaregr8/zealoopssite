"use client";
import React, { useState, useEffect } from "react";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Loader from "./components/loader";
import Head from "next/head";

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
    const timeout = setTimeout(handleLoad, 1500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Head>
          <link rel="preload" as="image" href="/logo.png" />
          <link rel="preload" as="image" href="/banner.jpg" />
          <link rel="preload" as="image" href="/g8.png" />
          <link rel="preload" as="image" href="/g3.png" />
          <link rel="preload" as="image" href="/g2.png" />
        </Head>

        {isLoading ? (
          <Loader />
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
