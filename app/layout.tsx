import type { Metadata } from "next";
import { Inter, Geist_Mono, Caveat } from "next/font/google";
import "./globals.css";
import Providers from "./components/Providers";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "600"],
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
    <html lang="en" className={`${inter.variable} ${geistMono.variable} ${caveat.variable}`}>
      <body className="font-sans antialiased bg-[#0a0a0a] text-[#ededed]">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
