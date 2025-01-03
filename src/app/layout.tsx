import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mak Ute Cafe And Resto",
  description: "Lead your business to digital transformation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-full h-full ">
          <div className="w-full h-full  absolute">
            {children}

          </div>
          <Navbar />

        </div>
      </body>
    </html>
  );
}
