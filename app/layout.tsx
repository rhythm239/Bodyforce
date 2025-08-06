import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header"; // <-- Import the Header

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gym Brand - Premium Equipment",
  description: "The best gym equipment for your fitness journey.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header /> {/* <-- Add the Header here */}
        <main>{children}</main>
      </body>
    </html>
  );
}