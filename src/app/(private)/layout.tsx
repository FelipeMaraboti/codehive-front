'use client'

import Asidebar from "@/components/aplication_asidebar/Asidebar";
import "./globals.css";
import { SessionProvider } from "next-auth/react";

export default function PrivateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionProvider>
      <Asidebar />
      {children}
    </SessionProvider>
  );
}
