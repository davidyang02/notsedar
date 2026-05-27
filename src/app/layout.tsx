import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NotSedarHeader } from "@/components/NotSedarHeader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NotSEDAR — Canadian public filings, BamSEC-style",
  description:
    "A faster, cleaner browser for Canadian public-company filings. SEDAR+ data, BamSEC-style UI. Demo preview.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-900">
        <NotSedarHeader />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
