import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mak Ute Cafe And Resto",
  description: "Mak Ute Cafe And Resto",
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
            <Footer />
          </div>
          <Navbar />

        </div>
      </body>
    </html>
  );
}
