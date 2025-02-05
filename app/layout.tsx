import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import Providers from "@/providers/Providers";
// import Navbar from "./components/navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "E-Commerce Website",
  description: "E-commerce website using next.js exp",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <main className="flex flex-col">
          <Providers>{children}</Providers>
        </main>
      </body>
    </html>
  );
}
