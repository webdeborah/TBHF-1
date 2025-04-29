"use client";

import { motion } from "framer-motion";
import AnimatedSection from "../common/AnimatedSection";
import SectionHeading from "../common/SectionHeading";

const CruiseHighlights = () => {
  const highlights = [
    {
      icon: "🏛️",
      title: "Historical Sites",
      description:
        "Visit significant historical sites across the Caribbean relating to African diaspora and the transatlantic experience",
    },
    {
      icon: "🎓",
      title: "Educational Workshops",
      description:
        "Engage in daily workshops led by renowned historians, authors, and cultural experts",
    },
    {
      icon: "🎭",
      title: "Cultural Performances",
      description:
        "Experience authentic cultural performances showcasing music, dance, and storytelling traditions",
    },
    {
      icon: "🍽️",
      title: "Culinary Experiences",
      description:
        "Savor traditional African and Caribbean cuisine with cooking demonstrations from celebrated chefs",
    },
    {
      icon: "🏊",
      title: "Leisure Activities",
      description:
        "Enjoy the luxurious amenities of our cruise ship including pools, spa services, and entertainment",
    },
    {
      icon: "🤝",
      title: "Networking",
      description:
        "Connect with like-minded individuals passionate about preserving and celebrating Black history",
    },
  ];

  return (
    <section id="highlights" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <SectionHeading
            subtitle="Voyage Highlights"
            title="An Unforgettable Cultural Experience"
            description="Our Caribbean cruise isn't just a vacation—it's a journey through history, culture, and heritage that combines education with relaxation."
            centered
          />
        </AnimatedSection>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-ocean rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-start">
                <div className="mr-4 text-4xl">{highlight.icon}</div>
                <div>
                  <h3 className="font-neue-kabel font-bold text-lg mb-2 text-navy">
                    {highlight.title}
                  </h3>
                  <p className="font-helvetica text-secondary-text">
                    {highlight.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 bg-primary rounded-xl overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-12 flex items-center">
              <div>
                <h3 className="font-neue-kabel font-bold text-2xl md:text-3xl text-white mb-4">
                  All-Inclusive Experience
                </h3>
                <p className="font-helvetica text-white opacity-90 mb-6">
                  Your cruise package includes all accommodations, meals,
                  activities, workshops, and excursions. We&apos;ve taken care
                  of everything so you can focus on immersing yourself in the
                  experience.
                </p>
                <ul className="space-y-2">
                  {[
                    "Luxury accommodations",
                    "All meals and beverages",
                    "Cultural excursions",
                    "Educational workshops",
                    "Evening entertainment",
                  ].map((item, i) => (
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
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="bg-secondary h-full flex items-center justify-center p-8">
              <div className="text-center">
                <p className="font-helvetica font-medium text-navy">
                  Starting from
                </p>
                <p className="font-neue-kabel font-black text-5xl md:text-6xl text-navy mt-2 mb-4">
                  $2,499
                </p>
                <p className="font-helvetica text-navy">per person</p>
                <p className="font-helvetica text-sm text-navy opacity-75 mt-2">
                  Based on double occupancy
                </p>
                <div className="mt-6">
                  <a
                    href="#registration"
                    className="inline-block bg-navy hover:bg-opacity-90 text-white font-helvetica font-bold py-3 px-8 rounded-full transition-colors duration-300"
                  >
                    Prepare for later
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CruiseHighlights;
