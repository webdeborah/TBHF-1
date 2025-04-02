import Layout from "@/components/common/Layout";
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactMap from "@/components/contact/ContactMap";
import NewsletterSection from "@/components/home/NewsletterSection";

export default function Contact() {
  return (
    <Layout>
      <ContactHero />
      <ContactForm />
      <ContactMap />
      <NewsletterSection />
    </Layout>
  );
}