import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/sections/Navbar';

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "ColourTouch",
  description: "Add Color to Your Digital Presence",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} ${poppins.variable} antialiased bg-gray-100`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
