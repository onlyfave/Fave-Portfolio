import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-nunito",
});
export const metadata: Metadata = {
  title: "Fave's Portfolio",
  description: "This is a portfolio website for Fave",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.className} bg-[#F9FAFF]`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
