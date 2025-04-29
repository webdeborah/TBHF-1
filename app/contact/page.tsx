import Layout from "@/components/common/Layout";
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactMap from "@/components/contact/ContactMap";
import NewsletterSection from "@/components/home/NewsletterSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | The Black History Foundation",
  description:
    "Get in touch with The Black History Foundation for questions, partnerships, or to join our mission of preserving Black history and culture.",
  keywords:
    "contact Black History Foundation, email, phone, location, inquiries, partnership, support",
  openGraph: {
    title: "Contact Us | The Black History Foundation",
    description:
      "Get in touch with The Black History Foundation for questions, partnerships, or to join our mission of preserving Black history and culture.",
    url: "/contact",
    siteName: "The Black History Foundation",
    images: [
      {
        url: "/Logos/TBHF_Logo_Full Color.png",
        width: 1200,
        height: 630,
        alt: "The Black History Foundation Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | The Black History Foundation",
    description:
      "Get in touch with The Black History Foundation for questions, partnerships, or to join our mission of preserving Black history and culture.",
    images: ["/Logos/TBHF_Logo_Full Color.png"],
  },
};

export default function Contact() {
  return (
    <Layout>
      <ContactHero />
      <ContactForm />
      <NewsletterSection />
    </Layout>
  );
}
