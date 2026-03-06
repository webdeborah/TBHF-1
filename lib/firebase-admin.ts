import admin from "firebase-admin";
import type { Firestore } from "firebase-admin/firestore";

function formatPrivateKey(key: string): string {
  return key.replace(/\\n/g, "\n");
}

let adminDb: Firestore | null = null;

export function getAdminDb(): Firestore | null {
  if (adminDb) return adminDb;

  const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;
  const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
  const privateKey = process.env.FIREBASE_PRIVATE_KEY;

  if (!projectId || !clientEmail || !privateKey) {
    return null;
  }

  if (admin.apps.length === 0) {
    admin.initializeApp({
      credential: admin.credential.cert({
        projectId,
        clientEmail,
        privateKey: formatPrivateKey(privateKey),
      }),
      projectId,
    });
  }

  adminDb = admin.firestore();
  return adminDb;
}
