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
      <body style={{
        "--color1": globalFormData.siteInfo.colors.mainColors.color1, "--color2": globalFormData.siteInfo.colors.mainColors.color2, "--color3": globalFormData.siteInfo.colors.mainColors.color3, "--color4": globalFormData.siteInfo.colors.mainColors.color4, "--color5": globalFormData.siteInfo.colors.mainColors.color5, "--color6": globalFormData.siteInfo.colors.mainColors.color6, "--color7": globalFormData.siteInfo.colors.mainColors.color7,

        "--shade1": globalFormData.siteInfo.colors.shades.shade1, "--shade2": globalFormData.siteInfo.colors.shades.shade2, "--shade3": globalFormData.siteInfo.colors.shades.shade3,

        "--bg1": globalFormData.siteInfo.colors.background.bg1, "--bg2": globalFormData.siteInfo.colors.background.bg2,
      } as React.CSSProperties}
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
