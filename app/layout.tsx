import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Golconda Dhanush Kumar | Portfolio",
  description: "Computer Science Undergrad at CBIT Hyderabad · Full-Stack Developer building high-performance full-stack applications with intelligent architectures.",
  keywords: [
    "Golconda Dhanush Kumar",
    "Dhanush Kumar Portfolio",
    "CBIT Hyderabad",
    "Full-Stack Developer",
    "Software Engineer India"
  ],
  authors: [{ name: "Golconda Dhanush Kumar" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
