import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { globalFormData } from "../globalFormData";
import Nav from "@/components/nav/Nav";
import EditGlobalFormData from "@/components/editGlobalForm/EditGlobalFormData";
import React from "react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: globalFormData.siteInfo.title,
  description: globalFormData.siteInfo.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ "--color1": globalFormData.siteInfo.colors[0], "--color2": globalFormData.siteInfo.colors[1], "--color3": globalFormData.siteInfo.colors[2], "--color4": globalFormData.siteInfo.colors[3], "--color5": globalFormData.siteInfo.colors[4], } as React.CSSProperties}
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* in dev load form */}
        {process.env.IN_DEVELOPMENT === "TRUE" && <EditGlobalFormData />}

        <Nav />
        {children}
      </body>
    </html>
  );
}
