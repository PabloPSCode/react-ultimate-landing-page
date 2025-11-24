/* eslint-disable @typescript-eslint/ban-ts-comment */
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
//@ts-ignore
import "../styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "React Ultimate - Biblioteca de Componentes React",
  description: "Acelere seu desenvolvimento com React Ultimate, a biblioteca definitiva de componentes React para criar interfaces incríveis com facilidade e rapidez.",
  keywords: [
    "React Ultimate",
    "biblioteca de componentes React",
    "componentes React prontos para uso",
    "desenvolvimento web",
    "UI components",
    "React UI library",
    "componentes responsivos",
    "dark mode React",
    "TypeScript React components",
    "React design system",
  ],
  authors: [
    {
      name: "Pablo Silva",
      url: "https://www.pablosilvadev.com.br",
    },
  ],
  openGraph: {
    title: "React Ultimate - Biblioteca de Componentes React",
    description:
      "Acelere seu desenvolvimento com React Ultimate, a biblioteca definitiva de componentes React para criar interfaces incríveis com facilidade e rapidez.",
    url: "https://reactultimate.com.br",
    siteName: "React Ultimate",
    images: [
      {
        url: "https://reactultimate.com.br/og-image.png",
        width: 1200,
        height: 630,
        alt: "React Ultimate - Biblioteca de Componentes React",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="notranslate" translate="no">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
