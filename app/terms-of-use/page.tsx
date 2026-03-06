import Layout from "@/components/common/Layout";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use | The Black History Foundation",
  description:
    "Terms of Use for The Black History Foundation website. Read our terms and conditions for using our services and content.",
  openGraph: {
    title: "Terms of Use | The Black History Foundation",
    description:
      "Terms of Use for The Black History Foundation website. Read our terms and conditions for using our services and content.",
    url: "/terms-of-use",
    siteName: "The Black History Foundation",
  },
};

export default function TermsOfUse() {
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
              Terms of <span className="text-[var(--secondary)]">Use</span>
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
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing and using the website of The Black History
                Foundation (&quot;TBHF,&quot; &quot;we,&quot; &quot;us,&quot; or
                &quot;our&quot;), you accept and agree to be bound by these
                Terms of Use. If you do not agree to these terms, please do not
                use our website.
              </p>
            </div>

            <div>
              <h2 className="font-neue-kabel font-bold text-xl text-[var(--accent-black)] mb-4">
                2. Use of Website
              </h2>
              <p>
                You may use our website for lawful purposes only. You agree not
                to use the website in any way that violates applicable laws,
                infringes on the rights of others, or interferes with the
                operation of the website. You may not attempt to gain
                unauthorized access to any part of our systems or networks.
              </p>
            </div>

            <div>
              <h2 className="font-neue-kabel font-bold text-xl text-[var(--accent-black)] mb-4">
                3. Intellectual Property
              </h2>
              <p>
                All content on this website, including but not limited to text,
                graphics, logos, images, and software, is the property of The
                Black History Foundation or its content suppliers and is
                protected by copyright and other intellectual property laws.
                You may not reproduce, distribute, modify, or create derivative
                works from our content without our prior written consent.
              </p>
            </div>

            <div>
              <h2 className="font-neue-kabel font-bold text-xl text-[var(--accent-black)] mb-4">
                4. Donations and Contributions
              </h2>
              <p>
                Donations made through our website are voluntary and
                non-refundable. By making a donation, you confirm that you have
                the legal right to use the payment method provided. We reserve
                the right to refuse or return any donation at our discretion.
              </p>
            </div>

            <div>
              <h2 className="font-neue-kabel font-bold text-xl text-[var(--accent-black)] mb-4">
                5. Third-Party Links
              </h2>
              <p>
                Our website may contain links to third-party websites. We are not
                responsible for the content, privacy practices, or availability
                of these external sites. The inclusion of any link does not
                imply endorsement by The Black History Foundation.
              </p>
            </div>

            <div>
              <h2 className="font-neue-kabel font-bold text-xl text-[var(--accent-black)] mb-4">
                6. Disclaimer of Warranties
              </h2>
              <p>
                Our website is provided &quot;as is&quot; without warranties of
                any kind, either express or implied. We do not warrant that the
                website will be uninterrupted, error-free, or free of viruses or
                other harmful components.
              </p>
            </div>

            <div>
              <h2 className="font-neue-kabel font-bold text-xl text-[var(--accent-black)] mb-4">
                7. Limitation of Liability
              </h2>
              <p>
                To the fullest extent permitted by law, The Black History
                Foundation shall not be liable for any indirect, incidental,
                special, consequential, or punitive damages arising from your use
                of our website or any content therein.
              </p>
            </div>

            <div>
              <h2 className="font-neue-kabel font-bold text-xl text-[var(--accent-black)] mb-4">
                8. Changes to Terms
              </h2>
              <p>
                We reserve the right to modify these Terms of Use at any time.
                Changes will be effective immediately upon posting to the
                website. Your continued use of the website after any changes
                constitutes acceptance of the modified terms.
              </p>
            </div>

            <div>
              <h2 className="font-neue-kabel font-bold text-xl text-[var(--accent-black)] mb-4">
                9. Contact
              </h2>
              <p>
                If you have questions about these Terms of Use, please contact
                us through our{" "}
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
