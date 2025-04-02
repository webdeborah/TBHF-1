import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Black History Foundation",
  description: "Protect, Preserve, Empower - Safeguarding Black history for future generations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}