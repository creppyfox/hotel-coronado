import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hotel Coronado | Elegancia en Barcelona",
  description: "Elegancia, calma y autenticidad en el corazón de Sants-Montjuïc, Barcelona.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans bg-warm-white text-dark-warm-gray antialiased selection:bg-soft-gold selection:text-white">
        {children}
      </body>
    </html>
  );
}
