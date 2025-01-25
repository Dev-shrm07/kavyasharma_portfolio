import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import { Geist_Mono } from "next/font/google"; // Ensure you import Geist_Mono if it's not already imported
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Load the Ubuntu font
const ubuntu = Ubuntu({
  weight: "300",
  subsets: ["latin"], // Specify subsets as needed
});

// Load Geist Mono font
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kavya Sharma",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/favicon.ico" sizes="any" />
      </head>
      <body className={`${ubuntu.className} ${geistMono.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
