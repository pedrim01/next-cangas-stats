import type { Metadata } from "next";

import { Inter } from "next/font/google";
import "./globals.css";
import { TanstackProvider } from "@/components/TanstackProvider";

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
      <body className="bg-gradient-to-tr from-zinc-950 to-gray-900  text-zinc-300  antialiased ">
        <TanstackProvider>{children}</TanstackProvider>
      </body>
    </html>
  );
}
