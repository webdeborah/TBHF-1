import CruiseLayout from "@/components/cruise/CruiseLayout";
import CruiseHero from "@/components/cruise/CruiseHero";
import CruiseHighlights from "@/components/cruise/CruiseHighlights";
import CruiseItinerary from "@/components/cruise/CruiseItinerary";
import CruiseActivities from "@/components/cruise/CruiseActivities";
import CruiseRegistration from "@/components/cruise/CruiseRegistration";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Black History Cruise | The Black History Foundation",
  description: "Join our educational cruise experience celebrating Black history and culture with expert speakers, cultural activities, and meaningful connections.",
  keywords: "Black history cruise, cultural cruise, African heritage, educational travel, Black culture experience, historical journey at sea",
  openGraph: {
    title: "Black History Cruise | The Black History Foundation",
    description: "Join our educational cruise experience celebrating Black history and culture with expert speakers, cultural activities, and meaningful connections.",
    url: "/cruise",
    siteName: "The Black History Foundation",
    images: [
      {
        url: "/Logos/TBHF_Logo_Full Color.png",
        width: 1200,
        height: 630,
        alt: "The Black History Foundation Cruise Experience"
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Black History Cruise | The Black History Foundation",
    description: "Join our educational cruise experience celebrating Black history and culture with expert speakers, cultural activities, and meaningful connections.",
    images: ["/Logos/TBHF_Logo_Full Color.png"],
  },
};

export default function CruisePage() {
  return (
    <CruiseLayout>
      <CruiseHero />
      <CruiseHighlights />
      <CruiseItinerary />
      <CruiseActivities />
      <CruiseRegistration />
    </CruiseLayout>
  );
}