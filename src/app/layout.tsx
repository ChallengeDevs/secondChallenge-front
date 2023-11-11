import "atropos/css";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

const outfit = Outfit({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ScoreSlam",
  description: "Platform to follow basketball games in real time",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/imgs/logo.svg" sizes="any" />
      </head>
      <body className={`${outfit.className} `}>{children}</body>
    </html>
  );
}
