import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

const roboto = Roboto({
  subsets: ["latin"],
  weight: [
    "100",
    "300",
    "400",
    "500",
    "700",
    "900",
  ]
});

export const metadata: Metadata = {
  title: "Footy Table",
  description: "A football league table and fixtures prediction app.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.className}>
      <body
        className="bg-[#323437] h-full"
      >
        <Navbar />
        <div className="
          px-2.5
          pt-[25px]
          md:pt-[60px]
          lg:px-[110px] 
          "
        >
          {children}
        </div>
      </body>
    </html>
  );
}
