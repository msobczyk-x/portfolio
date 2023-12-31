import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "msobczyk.dev - Software Developer",
  description: "Portfolio website of Maciej Sobczyk",

};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth overflow-x-hidden">
      <body className={inter.className + " bg-primary"}>{children}</body>
    </html>
  );
}
