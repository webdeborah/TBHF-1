import Layout from "@/components/common/Layout";
import HeroSection from "@/components/home/HeroSection";
import MissionSection from "@/components/home/MissionSection";
import ProgramsSection from "@/components/home/ProgramsSection";
import CampaignSection from "@/components/home/CampaignSection";
import GetInvolvedSection from "@/components/home/GetInvolvedSection";
import FaqSection from "@/components/home/FaqSection";
import NewsletterSection from "@/components/home/NewsletterSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | The Black History Foundation",
  description: "Join our mission to protect, preserve, and empower Black history for future generations through education, preservation, and community engagement.",
  keywords: "Black history, preservation, African heritage, cultural preservation, Black education, history foundation",
  openGraph: {
    title: "Home | The Black History Foundation",
    description: "Join our mission to protect, preserve, and empower Black history for future generations through education, preservation, and community engagement.",
    url: "/",
    siteName: "The Black History Foundation",
    images: [
      {
        url: "/Logos/TBHF_Logo_Full Color.png",
        width: 1200,
        height: 630,
        alt: "The Black History Foundation Logo"
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Home | The Black History Foundation",
    description: "Join our mission to protect, preserve, and empower Black history for future generations through education, preservation, and community engagement.",
    images: ["/Logos/TBHF_Logo_Full Color.png"],
  },
};

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <MissionSection />
      <ProgramsSection />
      <CampaignSection />
      <GetInvolvedSection />
      <FaqSection />
      <NewsletterSection />
    </Layout>
  );
}