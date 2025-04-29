import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  // Basic metadata
  title: "Mak Ute Cafe & Resto | Authentic Indonesian Cuisine in Belitung",
  description:
    "Experience authentic Indonesian cuisine with ocean views at Mak Ute Cafe & Resto in Sijuk, Belitung. Fresh seafood, traditional dishes, and coffee in a relaxing beachfront setting.",

  // Viewport settings
  viewport: "width=device-width, initial-scale=1",

  // Keywords for SEO
  keywords: [
    "Mak Ute Cafe",
    "Belitung restaurant",
    "Indonesian cuisine",
    "seafood Belitung",
    "beachfront cafe",
    "Sijuk restaurant",
    "traditional Indonesian food",
    "Tanjung Kelayang",
    "best cafe Belitung",
    "authentic local cuisine",
  ],

  // Open Graph metadata for social sharing
  openGraph: {
    type: "website",
    url: "", // Replace with your actual domain
    title: "Mak Ute Cafe & Resto | Beachfront Dining in Belitung",
    description:
      "Enjoy fresh seafood and authentic Indonesian cuisine with stunning ocean views at Mak Ute Cafe & Resto in Belitung Island.",
    siteName: "Mak Ute Cafe & Resto",
    images: [
      {
        url: "icon1.jpg", // Replace with actual image path
        width: 1200,
        height: 630,
        alt: "Mak Ute Cafe & Resto oceanfront view",
      },
    ],
    locale: "en_US",
  },

  // Robots directive
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  // Additional metadata
  generator: "Next.js",
  applicationName: "Mak Ute Cafe & Resto",
  referrer: "origin",
  creator: "Mak Ute Cafe & Resto",
  publisher: "Mak Ute Cafe & Resto",
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },

  // Location info for local SEO
  other: {
    "geo.region": "ID-BB", // Bangka Belitung region code
    "geo.placename": "Belitung, Sijuk",
    "geo.position": "-2.6924463,107.6270864", // Your coordinates from the map
    ICBM: "-2.6924463,107.6270864", // Same coordinates in ICBM format
  },
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
