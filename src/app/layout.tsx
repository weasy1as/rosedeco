import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";

export const metadata: Metadata = {
  title: "The Rose Decorations",
  description: "Elegant floral arrangements for every occasion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {" "}
        <NavBar />
        {children}
      </body>
    </html>
  );
}
