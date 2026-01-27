import type { Metadata } from "next";
import "./globals.css";
import { roboto400, roboto700 } from "@/fonts/fonts";

export const metadata: Metadata = {
  title: "Portfolio Lorenzo L'Hostis",
  description: "Présentation de mes projets et compétences en developpement.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto400.variable} ${roboto700.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
