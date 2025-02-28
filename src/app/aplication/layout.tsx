'use client'

import Asidebar from "./Asidebar";
import "./globals.css";

export default function PrivateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Asidebar />
        {children}
      </body>
    </html>
  );
}
