import type { Metadata } from "next";
import { Fredoka, Nunito } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({
  subsets: ["latin"],
  variable: "--font-fredoka",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alloria Learning Center — Personal Development & Leadership Workshop",
  description:
    "Empower your child with Alloria Learning Center's online personal development and leadership workshop. Small groups, interactive sessions for students aged 3-12.",
  keywords: [
    "personal development",
    "leadership workshop",
    "kids leadership",
    "public speaking for kids",
    "online summer camp",
    "confidence building",
    "alloria learning",
  ],
  authors: [{ name: "Sandip Poudel" }],
  metadataBase: new URL("https://allorialearning.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Alloria Learning Center — Personal Development Workshop",
    description:
      "Online personal development and leadership workshop for growing minds.",
    url: "https://allorialearning.com",
    siteName: "Alloria Learning Center",
    images: [
      {
        url: "/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "Alloria Learning Center",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alloria Learning Center — Personal Development Workshop",
    description:
      "Build confidence and leadership skills this summer with Alloria.",
    images: ["https://allorialearning.com/og-image.jpeg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/og-image.jpeg",
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
      className={`${fredoka.variable} ${nunito.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-body" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
