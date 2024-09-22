import type { Metadata } from "next";
import Navbar from "@/components/navbar";

import "../styles/globals.css";

export const metadata: Metadata = {
  title: "george.dev",
  description:
    "Hello World, I am George Sarpong Afrifa, a Frontend Developer based in Accra, Ghana. I am just a mail away. Contact me",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative font-grotesk">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
