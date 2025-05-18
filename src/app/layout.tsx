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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Jacky weds Vinny</title>
        <meta name="description" content="The story of life together begins here" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Jacky weds Vinny" />
        <meta property="og:description" content="The story of life together begins here" />
        <meta property="og:image" content="https://jackywedsvinny.vercel.app/favicon.jpg" />
        <meta property="og:url" content="https://jackywedsvinny.vercel.app/" />
        <meta property="og:type" content="website" />


      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
