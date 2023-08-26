import { Footer, Navbar } from "@/components";

export const metadata = {
  title: "Dribbble Clone - ST SABBIR",
  description: "Dribbble Clone",
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
        {children}
        <Footer />
      </body>
    </html>
  );
}
