import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import UserProvider from "@/contexts/UserContext";

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
  // Get token and then validate it if token exists and valid pass return value into the user context

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
