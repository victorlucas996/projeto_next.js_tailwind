import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "victor | Next.js",
  description: "Site desenvolvido com Next.js e Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-zinc-900 text-zinc-100">
        <Header />
        <main className="flex-1 max-w-6xl w-full mx-auto p-6">{children}</main>
        <footer className="bg-zinc-950 border-t border-zinc-800 text-center py-6 text-sm text-zinc-500">
          © 2026 Victor  - Todos os direitos reservados.
        </footer>
      </body>
    </html>
  );
}
