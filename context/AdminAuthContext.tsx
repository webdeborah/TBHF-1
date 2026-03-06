"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  type ReactNode,
} from "react";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  type User,
} from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";

interface AdminAuthContextType {
  user: User | null;
  isAdmin: boolean | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => Promise<void>;
}

const AdminAuthContext = createContext<AdminAuthContextType | undefined>(
  undefined
);

export function AdminAuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(true);

  const checkAdmin = useCallback(async (uid: string): Promise<boolean> => {
    if (!db) {
      setIsAdmin(false);
      return false;
    }
    try {
      const adminDoc = await getDoc(doc(db, "admins", uid));
      const exists = adminDoc.exists();
      setIsAdmin(exists);
      return exists;
    } catch {
      setIsAdmin(false);
      return false;
    }
  }, []);

  useEffect(() => {
    if (!auth) {
      setLoading(false);
      return;
    }
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      setUser(firebaseUser);
      if (firebaseUser) {
        await checkAdmin(firebaseUser.uid);
      } else {
        setIsAdmin(false);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, [checkAdmin]);

  const login = useCallback(
    async (email: string, password: string): Promise<boolean> => {
      if (!auth) throw new Error("Authentication is not configured.");
      const cred = await signInWithEmailAndPassword(auth, email, password);
      const admin = await checkAdmin(cred.user.uid);
      return admin;
    },
    [checkAdmin]
  );

  const logout = useCallback(async () => {
    if (auth) await signOut(auth);
    setUser(null);
    setIsAdmin(false);
  }, []);

  return (
    <AdminAuthContext.Provider
      value={{ user, isAdmin, loading, login, logout }}
    >
      {children}
    </AdminAuthContext.Provider>
  );
}

export function useAdminAuth() {
  const context = useContext(AdminAuthContext);
  if (context === undefined) {
    throw new Error("useAdminAuth must be used within AdminAuthProvider");
  }
  return context;
}
