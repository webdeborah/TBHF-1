import { NextResponse } from "next/server";
import { Resend } from "resend";
import { getAdminDb } from "@/lib/firebase-admin";
import { FieldValue } from "firebase-admin/firestore";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const token = searchParams.get("token");

  if (!token || token.length !== 64) {
    return NextResponse.redirect(
      new URL("/newsletter/confirmed?status=invalid", request.url)
    );
  }

  const db = getAdminDb();
  if (!db) {
    return NextResponse.redirect(
      new URL("/newsletter/confirmed?status=error", request.url)
    );
  }

  try {
    const snapshot = await db
      .collection("newsletter")
      .where("confirmToken", "==", token)
      .limit(1)
      .get();

    if (snapshot.empty) {
      return NextResponse.redirect(
        new URL("/newsletter/confirmed?status=expired", request.url)
      );
    }

    const doc = snapshot.docs[0];
    const data = doc.data();
    if (data?.status === "confirmed") {
      return NextResponse.redirect(new URL("/newsletter/confirmed", request.url));
    }
    const email = data?.email;

    await doc.ref.update({
      status: "confirmed",
      confirmedAt: FieldValue.serverTimestamp(),
      confirmToken: FieldValue.delete(),
    });

    const apiKey = process.env.RESEND_API_KEY;
    const fromEmail =
      process.env.RESEND_FROM_EMAIL ||
      "The Black History Foundation <onboarding@resend.dev>";

    if (apiKey?.startsWith("re_")) {
      const welcomeHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to Our Newsletter</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <h2 style="color: #1a1a2e;">Welcome to Our Newsletter!</h2>
  
  <p>Your subscription to The Black History Foundation newsletter is now confirmed.</p>
  
  <p>You'll receive updates on our programs, events, and how you can contribute to preserving and sharing Black history.</p>

  <p>Thank you for joining our community.</p>

  <p style="margin-top: 30px;">
    With gratitude,<br>
    <strong>The Black History Foundation Team</strong>
  </p>
</body>
</html>
`;
      await resend.emails.send({
        from: fromEmail,
        to: email,
        subject: "Welcome to Our Newsletter – The Black History Foundation",
        html: welcomeHtml,
      });
    }

    return NextResponse.redirect(new URL("/newsletter/confirmed", request.url));
  } catch (error) {
    console.error("Newsletter confirmation error:", error);
    return NextResponse.redirect(new URL("/newsletter/confirmed?status=error", request.url));
  }
}
