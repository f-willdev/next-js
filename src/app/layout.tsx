import type { Metadata } from "next";
import "./globals.css";
import Menu from "@/components/menu"
import "../styles/output.css";

export const metadata: Metadata = {
  title: "Estudando Next.js",
  description: "Criado por Fábio Willian",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="text-blue-700">
        <Menu />
        {children}    
      </body>
    </html>
  );
}
