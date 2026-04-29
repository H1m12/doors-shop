import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ДВЕРНОЙ ДОМ — Премиум двери в Москве",
  description: "Входные и межкомнатные двери от производителя. Гарантия 10 лет. Доставка и установка.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
