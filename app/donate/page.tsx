import Layout from "@/components/common/Layout";
import DonateHero from "@/components/donate/DonateHero";
import DonateImpact from "@/components/donate/DonateImpact";
import DonateForm from "@/components/donate/DonateForm";
import NewsletterSection from "@/components/home/NewsletterSection";

export default function Donate() {
  return (
    <Layout>
      <DonateHero />
      <DonateImpact />
      <DonateForm />
      <NewsletterSection />
    </Layout>
  );
}