import type { Metadata } from "next";

import { Inter } from "next/font/google";
import "./globals.css";
import { TanstackProvider } from "@/components/TanstackProvider";
// import Head from 'next/head';

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    template: "%s | Cangas Tips",
    default: "Cangas Tips",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (

    <html className={inter.variable} lang="pt">
      <head>
        <meta name="ga-site-verification" content="D88Nm96fu9qUmmTMLZJP8OqK" />
      </head>
      <body className="bg-gradient-to-tr from-zinc-950 to-gray-900  text-zinc-300  antialiased min-h-screen">
        <TanstackProvider>{children}</TanstackProvider>
      </body>
    </html>
  );
}
