import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lottus Premiação",
  description: "Plataforma institucional Lottus Premiação",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
