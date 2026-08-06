import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Plantopia 🌿",
  description:
    "La tua guida digitale per conoscere, curare e far crescere le tue piante.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  );
}
