import Layout from "@/components/common/Layout";
import HeroSection from "@/components/home/HeroSection";
import MissionSection from "@/components/home/MissionSection";
import ProgramsSection from "@/components/home/ProgramsSection";
import CampaignSection from "@/components/home/CampaignSection";
import GetInvolvedSection from "@/components/home/GetInvolvedSection";
import FaqSection from "@/components/home/FaqSection";
import NewsletterSection from "@/components/home/NewsletterSection";

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