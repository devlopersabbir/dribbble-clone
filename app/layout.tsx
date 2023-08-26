import "./globals.css";
import { Footer, Navbar } from "@/components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dribbble Clone - ST SABBIR",
  description: "Dribbble Clone",
  authors: [
    {
      name: "Sabbir Hossain Shuvo",
      url: "https://github.com/devlopersabbir",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
