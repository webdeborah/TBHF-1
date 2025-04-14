import Layout from "@/components/common/Layout";
import AboutHero from "@/components/about/AboutHero";
import MissionVision from "@/components/about/MissionVision";
import ProgramDetails from "@/components/about/ProgramDetails";
import TeamSection from "@/components/about/TeamSection";
import FaqsSection from "@/components/about/FaqsSection";
import NewsletterSection from "@/components/home/NewsletterSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | The Black History Foundation",
  description: "Learn about our mission, vision, programs, and the team behind The Black History Foundation dedicated to preserving Black history and culture.",
  keywords: "Black history foundation, mission, vision, team, programs, cultural preservation, Black history education",
  openGraph: {
    title: "About Us | The Black History Foundation",
    description: "Learn about our mission, vision, programs, and the team behind The Black History Foundation dedicated to preserving Black history and culture.",
    url: "/about",
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
    title: "About Us | The Black History Foundation",
    description: "Learn about our mission, vision, programs, and the team behind The Black History Foundation dedicated to preserving Black history and culture.",
    images: ["/Logos/TBHF_Logo_Full Color.png"],
  },
};

export default function About() {
  return (
    <Layout>
      <AboutHero />
      <MissionVision />
      <ProgramDetails />
      <TeamSection />
      <FaqsSection />
      <NewsletterSection />
    </Layout>
  );
}