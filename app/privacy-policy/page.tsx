import Layout from "@/components/common/Layout";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | The Black History Foundation",
  description:
    "Privacy Policy for The Black History Foundation. Learn how we collect, use, and protect your personal information.",
  openGraph: {
    title: "Privacy Policy | The Black History Foundation",
    description:
      "Privacy Policy for The Black History Foundation. Learn how we collect, use, and protect your personal information.",
    url: "/privacy-policy",
    siteName: "The Black History Foundation",
  },
};

export default function PrivacyPolicy() {
  return (
    <Layout>
      <section className="relative pt-32 pb-20 bg-[var(--accent-black)] text-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="smallGrid"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 20 0 L 0 0 0 20"
                  fill="none"
                  stroke="white"
                  strokeWidth="0.5"
                />
              </pattern>
              <pattern
                id="grid"
                width="100"
                height="100"
                patternUnits="userSpaceOnUse"
              >
                <rect width="100" height="100" fill="url(#smallGrid)" />
                <path
                  d="M 100 0 L 0 0 0 100"
                  fill="none"
                  stroke="white"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-neue-kabel font-black text-4xl md:text-5xl lg:text-6xl mb-6">
              Privacy <span className="text-[var(--secondary)]">Policy</span>
            </h1>
            <p className="font-helvetica text-lg text-gray-300">
              Last updated: March 6, 2025
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto font-helvetica text-gray-700 space-y-8">
            <div>
              <h2 className="font-neue-kabel font-bold text-xl text-[var(--accent-black)] mb-4">
                Introduction
              </h2>
              <p>
                The Black History Foundation (&quot;TBHF,&quot; &quot;we,&quot;
                &quot;us,&quot; or &quot;our&quot;) is committed to protecting
                your privacy. This Privacy Policy explains how we collect, use,
                disclose, and safeguard your information when you visit our
                website or use our services.
              </p>
            </div>

            <div>
              <h2 className="font-neue-kabel font-bold text-xl text-[var(--accent-black)] mb-4">
                Information We Collect
              </h2>
              <p className="mb-4">
                We may collect information that you voluntarily provide when you:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Subscribe to our newsletter</li>
                <li>Make a donation</li>
                <li>Apply to volunteer</li>
                <li>Contact us through our contact form</li>
                <li>Register for events or programs</li>
              </ul>
              <p className="mt-4">
                This information may include your name, email address, phone
                number, mailing address, and any other details you choose to
                provide.
              </p>
            </div>

            <div>
              <h2 className="font-neue-kabel font-bold text-xl text-[var(--accent-black)] mb-4">
                Newsletter Subscription
              </h2>
              <p>
                When you subscribe to our newsletter, we collect your email
                address to send you updates about our mission, programs, events,
                and opportunities to get involved. We use a double opt-in
                process: you will receive a confirmation email and must click the
                link to complete your subscription. You may unsubscribe at any
                time by following the link in our emails or by contacting us.
                We do not sell or share your email address with third parties
                for marketing purposes.
              </p>
            </div>

            <div>
              <h2 className="font-neue-kabel font-bold text-xl text-[var(--accent-black)] mb-4">
                How We Use Your Information
              </h2>
              <p className="mb-4">We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Send newsletter updates and communications</li>
                <li>Process donations and send acknowledgments</li>
                <li>Respond to your inquiries and requests</li>
                <li>Manage volunteer applications and participation</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="font-neue-kabel font-bold text-xl text-[var(--accent-black)] mb-4">
                Information Sharing
              </h2>
              <p>
                We do not sell, trade, or rent your personal information to third
                parties. We may share your information with trusted service
                providers who assist us in operating our website and conducting
                our activities (such as email delivery services), subject to
                confidentiality agreements. We may also disclose information
                when required by law or to protect our rights and safety.
              </p>
            </div>

            <div>
              <h2 className="font-neue-kabel font-bold text-xl text-[var(--accent-black)] mb-4">
                Data Security
              </h2>
              <p>
                We implement appropriate technical and organizational measures to
                protect your personal information against unauthorized access,
                alteration, disclosure, or destruction. However, no method of
                transmission over the Internet or electronic storage is 100%
                secure.
              </p>
            </div>

            <div>
              <h2 className="font-neue-kabel font-bold text-xl text-[var(--accent-black)] mb-4">
                Cookies and Analytics
              </h2>
              <p>
                Our website may use cookies and similar technologies to enhance
                your experience, analyze site traffic, and understand how
                visitors use our site. You can set your browser to refuse
                cookies, though some features may not function properly without
                them.
              </p>
            </div>

            <div>
              <h2 className="font-neue-kabel font-bold text-xl text-[var(--accent-black)] mb-4">
                Your Rights
              </h2>
              <p>
                Depending on your location, you may have the right to access,
                correct, or delete your personal information, or to opt out of
                certain uses. To exercise these rights or if you have questions
                about your data, please contact us through our{" "}
                <Link
                  href="/contact"
                  className="text-[var(--secondary)] hover:underline font-medium"
                >
                  contact page
                </Link>
                .
              </p>
            </div>

            <div>
              <h2 className="font-neue-kabel font-bold text-xl text-[var(--accent-black)] mb-4">
                Changes to This Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. We will
                notify you of any material changes by posting the updated policy
                on this page and updating the &quot;Last updated&quot; date.
                We encourage you to review this policy periodically.
              </p>
            </div>

            <div>
              <h2 className="font-neue-kabel font-bold text-xl text-[var(--accent-black)] mb-4">
                Contact Us
              </h2>
              <p>
                If you have questions about this Privacy Policy or our data
                practices, please contact us through our{" "}
                <Link
                  href="/contact"
                  className="text-[var(--secondary)] hover:underline font-medium"
                >
                  contact page
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
