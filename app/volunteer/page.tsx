import Layout from "@/components/common/Layout";
import VolunteerHero from "@/components/volunteer/VolunteerHero";
import VolunteerImpact from "@/components/volunteer/VolunteerImpact";
import VolunteerOpportunities from "@/components/volunteer/VolunteerOpportunities";
import ApplicationForm from "@/components/volunteer/ApplicationForm";
import NewsletterSection from "@/components/home/NewsletterSection";

export default function Volunteer() {
  return (
    <Layout>
      <VolunteerHero />
      <VolunteerImpact />
      <VolunteerOpportunities />
      <ApplicationForm />
      <NewsletterSection />
    </Layout>
  );
}