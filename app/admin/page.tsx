"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAdminAuth } from "@/context/AdminAuthContext";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const { user, isAdmin, loading, login } = useAdminAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && user && isAdmin) {
      router.replace("/admin/dashboard");
    }
  }, [user, isAdmin, loading, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    try {
      const isAdminUser = await login(email, password);
      if (isAdminUser) {
        router.replace("/admin/dashboard");
      } else {
        setError("You do not have admin access.");
      }
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Invalid email or password."
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin h-8 w-8 border-2 border-[var(--primary)] border-t-transparent rounded-full" />
      </div>
    );
  }

  if (user && isAdmin) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-16 max-w-md">
      <div className="bg-white rounded-lg shadow-md p-8">
        <h1 className="font-neue-kabel font-bold text-2xl mb-2">
          Admin Login
        </h1>
        <p className="font-helvetica text-gray-600 text-sm mb-6">
          Sign in to manage newsletter subscribers, contact messages, volunteer
          applications, positions, Board of Directors, and coming soon cards on the educational page.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="p-3 bg-red-50 text-red-700 rounded-md text-sm">
              {error}
            </div>
          )}
          <div>
            <label
              htmlFor="email"
              className="block font-helvetica font-bold mb-2 text-sm"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block font-helvetica font-bold mb-2 text-sm"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
            />
          </div>
          <button
            type="submit"
            disabled={submitting}
            className="w-full py-3 bg-[var(--primary)] text-white font-helvetica font-bold rounded-md hover:bg-[var(--primary-dark)] disabled:opacity-70 transition-colors"
          >
            {submitting ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}
