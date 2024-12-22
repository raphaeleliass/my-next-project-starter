import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  fallback: ["sans-serif"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  fallback: ["sans-serif"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Custom Next.js Boilerplate - Start Your Projects Faster",
  description:
    "A highly customizable boilerplate for Next.js projects. Pre-configured with best practices, modern tools, and ready for production.",
  keywords: [
    "next.js",
    "react",
    "typescript",
    "tailwindcss",
    "jest",
    "testing-library",
    "storybook",
    "eslint",
    "prettier",
    "husky",
    "lint-staged",
    "cypress",
  ],
  openGraph: {
    title: "Custom Next.js Boilerplate",
    description:
      "Boost your Next.js project development with this customizable and production-ready boilerplate.",
    url: "https://seusite.com",
    siteName: "Custom Next.js Boilerplate",
    images: [
      {
        url: "https://seusite.com/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "Custom Next.js Boilerplate Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Next.js Boilerplate",
    description:
      "Kickstart your Next.js projects with this customizable boilerplate.",
    images: ["https://seusite.com/assets/twitter-image.png"],
    site: "@your_site",
    creator: "@your_user",
  },
  viewport: "width=device-width, initial-scale=1, viewport-fit=cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
