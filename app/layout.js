import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "White Pebble Law LLP - Trademarks, Copyrights, Intellectual Property",
  description: "White Pebble Law LLP is a full service intellectual property firm offering solutions in the process of trademarks, copyrights and agreement registration.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
