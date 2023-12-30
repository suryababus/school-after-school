import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "School after School",
  description:
    "Apart from education Ethics and Morals are basis for survival Human society and global harmony",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="tool-bar">tab bar</div>
        {children}
      </body>
    </html>
  );
}
