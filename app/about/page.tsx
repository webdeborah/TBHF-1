import Layout from "@/components/common/Layout";
import AboutHero from "@/components/about/AboutHero";
import MissionVision from "@/components/about/MissionVision";
import ProgramDetails from "@/components/about/ProgramDetails";
import TeamSection from "@/components/about/TeamSection";
import FaqsSection from "@/components/about/FaqsSection";
import NewsletterSection from "@/components/home/NewsletterSection";

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