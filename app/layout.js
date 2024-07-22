import { PT_Serif, Nanum_Myeongjo } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const inter = Nanum_Myeongjo({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "Perini Global",
  description: "Perini Global",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
