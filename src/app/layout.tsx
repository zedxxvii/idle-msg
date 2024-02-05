
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import UserProvider from "@/contexts/UserContext";
import { useEffect } from "react";
import router from "next/router";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Idle Monster Saga",
  description: "Idle Monster Saga Official Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='bg-[#8AAAE5]'>
        <UserProvider>
          {children}
        </UserProvider>
      </body>
    </html>
  );
}
function setUser(arg0: { token: string; }) {
  throw new Error("Function not implemented.");
}

