import { Geist, Geist_Mono } from "next/font/google";
import { Amiri_Quran, Inter, Poppins } from "next/font/google";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


// New font imports
const amiriQuran = Amiri_Quran({
  variable: "--font-amiri-quran",
  subsets: ["latin"],
  weight:"400"
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight:["400" , "500" , "600" , "700"]
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight:["400" , "500" , "600" , "700"]
});


export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${amiriQuran.variable} ${inter.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
