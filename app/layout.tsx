import type { Metadata } from "next";
import Navbar from "@/components/navbar";

import "../styles/globals.css";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: {
    template: "%s | GSAfrifa",
    absolute: "Hi 👋🏾 GSAfrifa",
  },
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
      <body className="relative font-inter">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
