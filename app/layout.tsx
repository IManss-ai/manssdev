import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mansur Zhiger",
  description: "Indie dev in Almaty. 17.",
  openGraph: {
    title: "Mansur Zhiger",
    description: "Indie dev in Almaty. 17.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistMono.variable}`}>
      <body className="font-mono antialiased bg-[#0a0a0a] text-[#ededed]">
        {children}
      </body>
    </html>
  );
}
