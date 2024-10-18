import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { globalFormData } from "../globalFormData";
import Nav from "@/components/nav/Nav";
import EditGlobalFormData from "@/components/editGlobalForm/EditGlobalFormData";

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
      <body
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
