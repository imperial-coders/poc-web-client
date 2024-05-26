import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/utils/tailwind";
import { ClientProviders } from "./providers";

const interFont = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Web POC",
  description: "Web Client BFF POC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          interFont.className,
          "bg-white text-black font-normal text-base min-w-screen"
        )}
      >
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
