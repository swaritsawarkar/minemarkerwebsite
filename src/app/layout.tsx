import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://minemarkerwebsite.vercel.app"),
  title: "MineMarker - Minecraft Creator Timeline Assistant",
  description:
    "MineMarker is a pre-release Minecraft creator tool that turns long gameplay recordings into organized editing timelines with manual markers, automatic events, and exportable editing notes.",
  openGraph: {
    title: "MineMarker - Minecraft Creator Timeline Assistant",
    description:
      "Turn raw Minecraft gameplay into an organized editing timeline.",
    type: "website",
    images: [
      {
        url: "/og-minemarker.png",
        width: 1792,
        height: 1024,
        alt: "MineMarker cinematic product website preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MineMarker - Minecraft Creator Timeline Assistant",
    description:
      "Turn raw Minecraft gameplay into an organized editing timeline.",
    images: ["/og-minemarker.png"],
  },
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
