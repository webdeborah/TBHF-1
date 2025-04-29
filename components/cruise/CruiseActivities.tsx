"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "../common/AnimatedSection";
import SectionHeading from "../common/SectionHeading";

const CruiseActivities = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Activities" },
    { id: "educational", name: "Educational" },
    { id: "cultural", name: "Cultural" },
    { id: "leisure", name: "Leisure" },
    { id: "dining", name: "Dining" },
  ];

  const activities = [
    {
      title: "Historical Lectures",
      description:
        "Daily lectures from renowned historians focusing on African diaspora in the Caribbean",
      category: "educational",
      icon: "🎓",
    },
    {
      title: "Cultural Workshops",
      description:
        "Hands-on workshops exploring Caribbean arts, music, dance, and culinary traditions",
      category: "cultural",
      icon: "🎭",
    },
    {
      title: "Heritage Site Tours",
      description:
        "Guided excursions to significant historical sites on each island we visit",
      category: "educational",
      icon: "🏛️",
    },
    {
      title: "Panel Discussions",
      description:
        "Engaging discussions with experts on preservation of Black history and culture",
      category: "educational",
      icon: "💬",
    },
    {
      title: "Caribbean Dance Classes",
      description:
        "Learn traditional and contemporary dance styles from professional instructors",
      category: "cultural",
      icon: "💃",
    },
    {
      title: "Culinary Demonstrations",
      description:
        "Watch and participate in cooking demonstrations featuring traditional Caribbean cuisine",
      category: "dining",
      icon: "👨‍🍳",
    },
    {
      title: "Poolside Relaxation",
      description:
        "Enjoy our luxury pools, hot tubs, and sundecks with Caribbean views",
      category: "leisure",
      icon: "🏊",
    },
    {
      title: "Evening Entertainment",
      description:
        "Nightly shows featuring music, dance, and performances celebrating Black culture",
      category: "cultural",
      icon: "🎺",
    },
    {
      title: "Spa & Wellness",
      description:
        "Rejuvenate with spa treatments inspired by traditional Caribbean healing practices",
      category: "leisure",
      icon: "💆",
    },
    {
      title: "Fitness Classes",
      description:
        "Stay active with daily fitness classes including yoga, Caribbean cardio, and more",
      category: "leisure",
      icon: "🧘",
    },
    {
      title: "Film Screenings",
      description:
        "Watch documentaries and films about Black history and the Caribbean experience",
      category: "educational",
      icon: "🎬",
    },
    {
      title: "Gourmet Dining",
      description:
        "Experience themed dinner nights featuring cuisine from different Caribbean islands",
      category: "dining",
      icon: "🍽️",
    },
  ];

  const filteredActivities =
    activeCategory === "all"
      ? activities
      : activities.filter((activity) => activity.category === activeCategory);

  return (
    <section id="activities" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <SectionHeading
            subtitle="Onboard & Offshore"
            title="Cruise Activities"
            description="Our cruise offers a wide range of activities designed to educate, entertain, and enrich your understanding of Black history in the Caribbean."
            centered
          />
        </AnimatedSection>

        {/* Category Filters */}
        <div className="mt-8 flex justify-center flex-wrap gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full font-helvetica transition-colors ${
                activeCategory === category.id
                  ? "bg-primary text-white"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-800"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredActivities.map((activity, index) => (
            <motion.div
              key={`${activity.title}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="bg-ocean rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="text-4xl mb-4">{activity.icon}</div>
                <h3 className="font-neue-kabel font-bold text-xl text-navy mb-2">
                  {activity.title}
                </h3>
                <p className="font-helvetica text-secondary">
                  {activity.description}
                </p>

                <div className="mt-4 pt-2 border-t border-blue-100">
                  <span className="inline-block text-white px-3 py-1 bg-primary bg-opacity-10 text-primary rounded-full text-sm font-helvetica font-medium capitalize">
                    {activity.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured Activity */}
        <div className="mt-16">
          <div className="bg-navy rounded-xl overflow-hidden shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 md:p-12">
                <span className="inline-block py-1 px-3 rounded-full bg-secondary text-navy font-helvetica font-medium text-sm mb-4">
                  Featured Experience
                </span>
                <h3 className="font-neue-kabel font-bold text-2xl md:text-3xl text-white mb-4">
                  Exclusive Evening Events
                </h3>
                <p className="font-helvetica text-white opacity-90 mb-6">
                  Each evening of our cruise features special themed events
                  showcasing different aspects of Black Caribbean heritage
                  through music, dance, food, and storytelling.
                </p>
                <ul className="space-y-3">
                  {[
                    "Welcome Gala: 'Celebrating the Diaspora'",
                    "Cultural Night: 'Rhythms of Resistance'",
                    "Historical Reflection: 'Path to Freedom'",
                    "Creative Showcase: 'Contemporary Black Excellence'",
                    "Community Building: 'Unity in Diversity'",
                    "Farewell Celebration: 'Connected by Heritage'",
                  ].map((event, i) => (
                    <li
                      key={i}
                      className="flex items-center text-white font-helvetica"
                    >
                      <svg
                        className="h-5 w-5 mr-2 text-secondary"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {event}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-br from-primary to-primary-dark h-64 lg:h-auto">
                <div className="h-full w-full flex items-center justify-center p-8">
                  <img
                    src="https://plus.unsplash.com/premium_photo-1738067044357-0b9c92242572?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fEV2ZW5pbmclMjBwZXJmb3JtYW5jZXxlbnwwfHwwfHx8MA%3D%3D"
                    alt="Evening performance"
                    className="h-full w-full object-cover rounded-lg"
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=1169";
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CruiseActivities;
