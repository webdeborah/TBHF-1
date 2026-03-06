"use client";

import { AdminAuthProvider } from "@/context/AdminAuthContext";
import Link from "next/link";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AdminAuthProvider>
      <div className="min-h-screen bg-gray-100">
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link
              href="/admin"
              className="font-neue-kabel font-bold text-xl text-[var(--primary)]"
            >
              TBHF Admin
            </Link>
            <Link
              href="/"
              className="font-helvetica text-sm text-gray-600 hover:text-[var(--primary)]"
            >
              Home
            </Link>
          </div>
        </header>
        <main>{children}</main>
      </div>
    </AdminAuthProvider>
  );
}
