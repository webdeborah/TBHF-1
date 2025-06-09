"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "../common/AnimatedSection";
import SectionHeading from "../common/SectionHeading";

const CruiseItinerary = () => {
  const [activeTab, setActiveTab] = useState(0);

  const itineraryData = [
    {
      day: "Day 1",
      location: "Miami, Florida",
      title: "Embarkation",
      description:
        "Begin your journey in Miami with a special embarkation ceremony. Settle into your cabin and join us for a welcome reception featuring keynote speakers discussing the historical significance of our voyage.",
      activities: [
        "Check-in and cabin assignment",
        "Ship orientation tour",
        "Welcome ceremony",
        "Keynote address: 'The African Diaspora in the Caribbean'",
        "Dinner and entertainment",
      ],
    },
    {
      day: "Day 2",
      location: "At Sea",
      title: "Educational Sessions",
      description:
        "Our first full day at sea features a series of workshops, lectures, and panel discussions from renowned historians and cultural experts focusing on the African influences in Caribbean culture.",
      activities: [
        "Morning yoga on deck",
        "Workshop: 'Tracing Your African Roots'",
        "Panel: 'The Middle Passage and Its Legacy'",
        "Afternoon film screening: 'Diaspora Stories'",
        "Evening cultural performance",
      ],
    },
    {
      day: "Day 3",
      location: "Nassau, Bahamas",
      title: "Historical Exploration",
      description:
        "Explore Nassau's rich history with guided tours focusing on the role of the Bahamas in the abolition movement and as a haven for freed enslaved people. Visit key historical sites and engage with local historians.",
      activities: [
        "Tour of historic downtown Nassau",
        "Visit to Pompey Museum of Slavery & Emancipation",
        "Traditional Bahamian lunch experience",
        "Lecture: 'The Bahamas in the Abolition Movement'",
        "Free time for beach relaxation or shopping",
      ],
    },
    {
      day: "Day 4",
      location: "San Juan, Puerto Rico",
      title: "Afro-Caribbean Culture",
      description:
        "Experience the vibrant Afro-Caribbean culture of Puerto Rico through tours of historic sites, cultural demonstrations, and immersive experiences showcasing the island's African heritage.",
      activities: [
        "Tour of El Morro fortress",
        "Visit to Casa de Africa museum",
        "Traditional bomba dance workshop",
        "Puerto Rican cuisine tasting experience",
        "Evening music performance in Old San Juan",
      ],
    },
    {
      day: "Day 5",
      location: "Saint-Domingue, Haiti",
      title: "Revolutionary History",
      description:
        "Discover the profound history of Haiti, the first Black republic established through revolution. Visit significant sites related to the Haitian Revolution and learn about the nation's impact on global Black liberation movements.",
      activities: [
        "Visit to Citadelle Laferrière",
        "Tour of Sans-Souci Palace",
        "Lecture: 'Haiti's Revolutionary Legacy'",
        "Traditional Haitian art workshop",
        "Community engagement with local historians",
      ],
    },
    {
      day: "Day 6",
      location: "Montego Bay, Jamaica",
      title: "Resistance & Resilience",
      description:
        "Explore Jamaica's history of resistance and resilience, from Maroon communities to the development of Rastafarianism. Experience the island's rich cultural traditions and their connections to African heritage.",
      activities: [
        "Visit to historic Maroon community",
        "Tour of Rose Hall Great House",
        "Reggae history and music experience",
        "Traditional cooking demonstration",
        "Evening cultural showcase",
      ],
    },
    {
      day: "Day 7",
      location: "At Sea",
      title: "Reflection & Celebration",
      description:
        "Our final day at sea is dedicated to reflection, discussion, and celebration. Participate in workshops to process the experiences of the week and join our gala dinner celebrating the richness of Black history and culture.",
      activities: [
        "Morning reflection circle",
        "Workshop: 'Bringing History Home'",
        "Community project planning session",
        "Farewell ceremony",
        "Gala dinner and cultural celebration",
      ],
    },
  ];

  return (
    <section id="itinerary" className="py-20 bg-ocean">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <SectionHeading
            subtitle="7-Day Journey"
            title="Your Voyage Itinerary"
            description="Follow our carefully curated route through the Caribbean, designed to highlight key historical sites and cultural experiences."
            centered
          />
        </AnimatedSection>

        <div className="mt-12 bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="flex overflow-x-auto scrollbar-hide bg-gray-50 border-b border-gray-200">
            {itineraryData.map((day, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-4 text-left flex-shrink-0 focus:outline-none transition-colors flex-1 duration-300 ${
                  activeTab === index
                    ? "bg-primary text-white"
                    : "hover:bg-gray-100"
                }`}
              >
                <p className="font-neue-kabel font-bold">{day.day}</p>
                <p className="font-helvetica text-sm opacity-80">
                  {day.location}
                </p>
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="p-6 md:p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <h3 className="font-neue-kabel font-bold text-2xl text-navy mb-3">
                      {itineraryData[activeTab].title}
                    </h3>
                    <p className="font-helvetica text-secondary mb-6">
                      {itineraryData[activeTab].description}
                    </p>

                    <h4 className="font-neue-kabel font-medium text-lg text-navy mb-3">
                      Daily Activities
                    </h4>
                    <ul className="space-y-2">
                      {itineraryData[activeTab].activities.map(
                        (activity, i) => (
                          <li key={i} className="flex items-start">
                            <svg
                              className="h-5 w-5 mt-1 mr-2 text-secondary"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
                                clipRule="evenodd"
                                fillRule="evenodd"
                              ></path>
                            </svg>
                            <span className="font-helvetica">{activity}</span>
                          </li>
                        ),
                      )}
                    </ul>
                  </div>

                  <div className="bg-ocean rounded-lg p-6">
                    <h4 className="font-neue-kabel font-bold text-xl text-navy mb-4">
                      {itineraryData[activeTab].day} Highlights
                    </h4>
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center mr-3">
                          <svg
                            className="h-5 w-5 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                        <div>
                          <p className="font-helvetica font-bold">Duration</p>
                          <p className="font-helvetica text-sm text-secondary">
                            Full Day
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center">
                        <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center mr-3">
                          <svg
                            className="h-5 w-5 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                            />
                          </svg>
                        </div>
                        <div>
                          <p className="font-helvetica font-bold">Location</p>
                          <p className="font-helvetica text-sm text-secondary">
                            {itineraryData[activeTab].location}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center">
                        <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center mr-3">
                          <svg
                            className="h-5 w-5 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            />
                          </svg>
                        </div>
                        <div>
                          <p className="font-helvetica font-bold">Guide</p>
                          <p className="font-helvetica text-sm text-secondary">
                            Local Historian & TBHF Expert
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center">
                        <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center mr-3">
                          <svg
                            className="h-5 w-5 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                            />
                          </svg>
                        </div>
                        <div>
                          <p className="font-helvetica font-bold">Included</p>
                          <p className="font-helvetica text-sm text-secondary">
                            All meals, transportation & activities
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <p className="font-helvetica text-sm text-navy opacity-75">
                        Note: Itinerary subject to change based on weather
                        conditions and local circumstances. All efforts will be
                        made to maintain the educational and cultural integrity
                        of the experience.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CruiseItinerary;
