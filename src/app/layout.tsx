import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./component/Header"; // import client header
import SideBar from "./component/SideBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nanaade Ai",
  description: "Template Project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <title>Nanaade Ai</title>
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <div className="h-screen w-full bg-gray-100 flex gap-4">
        <div className="max-md:hidden basis-[20%] shadow-md border-r border-gray-300">
          <SideBar />
        </div>

        <div className="basis-[80%] max-md:basis-full">
          {children}
        </div>
        </div>
      </body>
    </html>
  );
}
