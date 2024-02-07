import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jesus Alvarez - Portfolio",
  description: "github.com/jalvaydev/portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-neutral-900 text-slate-200 ">
      <body>{children}</body>
    </html>
  );
}
