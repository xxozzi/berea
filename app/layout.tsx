import type { Metadata } from "next";
import localFont from 'next/font/local';
import "./globals.css";

const ppMori = localFont({
  src: '../public/fonts/PPMori-Regular.otf',
  variable: '--font-mori',
  display: 'swap',
});

const ppEditorial = localFont({
  src: '../public/fonts/PPEditorialNew-Italic.otf',
  variable: '--font-editorial',
  display: 'swap',
  style: 'italic',
});

export const metadata: Metadata = {
  title: "Berea - Folk art and Sustainability Hub",
  description: "Serving the underserved.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ppMori.variable} ${ppEditorial.variable} antialiased`}
        style={{ fontFamily: 'var(--font-mori)' }}
      >
        {children}
      </body>
    </html>
  );
}
