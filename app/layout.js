import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "White Pebble Law LLP",
  description: "At White Pebble Law LLP, we distinguish ourselves through our comprehensive expertise in both Corporate and Testamentary law, seamlessly integrating Intellectual Property management with Wills and Probate services to offer a unique, full-service legal solution.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
