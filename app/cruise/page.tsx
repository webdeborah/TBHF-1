import CruiseLayout from "@/components/cruise/CruiseLayout";
import CruiseHero from "@/components/cruise/CruiseHero";
import CruiseHighlights from "@/components/cruise/CruiseHighlights";
import CruiseItinerary from "@/components/cruise/CruiseItinerary";
import CruiseActivities from "@/components/cruise/CruiseActivities";
import CruiseRegistration from "@/components/cruise/CruiseRegistration";

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