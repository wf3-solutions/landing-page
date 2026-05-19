import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WF3 Solutions — Desenvolvimento de Software e Tráfego Pago",
  description:
    "Criamos sites, apps e sistemas sob medida e geramos clientes com tráfego pago no Meta e Google Ads. Tecnologia e marketing no mesmo time.",
  keywords: [
    "desenvolvimento de software",
    "landing page",
    "aplicativo mobile",
    "sistema web",
    "tráfego pago",
    "Meta Ads",
    "Google Ads",
    "WF3 Solutions",
  ],
  openGraph: {
    title: "WF3 Solutions — Desenvolvimento de Software e Tráfego Pago",
    description:
      "Tecnologia que vende. Tráfego que traz cliente. Sites, apps e sistemas sob medida, com gestão de anúncios no mesmo time.",
    type: "website",
    locale: "pt_BR",
    siteName: "WF3 Solutions",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased  m-auto`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
