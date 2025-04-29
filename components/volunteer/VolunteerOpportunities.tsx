"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionHeading from "../common/SectionHeading";
import Button from "../common/Button";

const VolunteerOpportunities = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [filter, setFilter] = useState("all");

  const opportunities = [
    {
      title: "Research Assistant",
      description:
        "Help with historical research, document digitization, and archival work. This role involves working with primary sources, organizing documents, and contributing to our digital archives.",
      commitment: "5-10 hours/week",
      location: "Remote",
      category: "research",
    },
    {
      title: "Community Outreach Coordinator",
      description:
        "Organize and participate in community events, workshops, and educational programs. This role focuses on connecting with local communities and spreading awareness about our mission.",
      commitment: "8-12 hours/week",
      location: "Local",
      category: "outreach",
    },
    {
      title: "Curriculum Developer",
      description:
        "Assist in creating educational resources, lesson plans, and teacher guides focused on Black history. Experience in education or curriculum development is beneficial for this role.",
      commitment: "6-8 hours/week",
      location: "Remote",
      category: "education",
    },
    {
      title: "Digital Content Creator",
      description:
        "Create engaging content for social media, blog posts, and multimedia presentations that highlight Black history and our foundation's work.",
      commitment: "4-8 hours/week",
      location: "Remote",
      category: "digital",
    },
    {
      title: "Event Volunteer",
      description:
        "Support our events team with planning, setup, and facilitation of fundraisers, exhibitions, and community gatherings. This is a great way to get involved on a flexible schedule.",
      commitment: "Varies by event",
      location: "Local",
      category: "outreach",
    },
    {
      title: "Oral History Collector",
      description:
        "Interview community elders and record their stories to preserve firsthand accounts of historical events and cultural traditions. Training provided.",
      commitment: "4-6 hours/week",
      location: "Local/Remote",
      category: "research",
    },
    {
      title: "Technology Volunteer",
      description:
        "Contribute technical skills to our digital preservation projects, website development, or database management. Coding skills are valuable but not required for all tech positions.",
      commitment: "6-10 hours/week",
      location: "Remote",
      category: "digital",
    },
    {
      title: "Fundraising Assistant",
      description:
        "Support our fundraising team with donor communications, grant research, and campaign planning. Help us reach our fundraising goals to sustain our programs.",
      commitment: "5-8 hours/week",
      location: "Remote",
      category: "outreach",
    },
  ];

  const filteredOpportunities =
    filter === "all"
      ? opportunities
      : opportunities.filter((opp) => opp.category === filter);

  return (
    <section
      id="opportunities"
      ref={ref}
      className="py-16 md:py-24 bg-[var(--bg-secondary)]"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <SectionHeading
          subtitle="Get Involved"
          title="Volunteer Opportunities"
          description="We offer a variety of volunteer positions to match your skills, interests, and schedule. Whether you can commit a few hours per week or want to help with specific projects, there's a place for you in our mission."
          centered
        />

        {/* Filter buttons */}
        <div className="mt-8 mb-12 flex flex-wrap justify-center gap-4">
          <button
            onClick={() => setFilter("all")}
            className={`px-5 py-2 rounded-full font-helvetica transition-colors ${
              filter === "all"
                ? "bg-[var(--primary)] text-white"
                : "bg-white hover:bg-gray-100 text-[var(--text-secondary)]"
            }`}
          >
            All Opportunities
          </button>
          <button
            onClick={() => setFilter("research")}
            className={`px-5 py-2 rounded-full font-helvetica transition-colors ${
              filter === "research"
                ? "bg-[var(--primary)] text-white"
                : "bg-white hover:bg-gray-100 text-[var(--text-secondary)]"
            }`}
          >
            Research
          </button>
          <button
            onClick={() => setFilter("outreach")}
            className={`px-5 py-2 rounded-full font-helvetica transition-colors ${
              filter === "outreach"
                ? "bg-[var(--primary)] text-white"
                : "bg-white hover:bg-gray-100 text-[var(--text-secondary)]"
            }`}
          >
            Outreach
          </button>
          <button
            onClick={() => setFilter("education")}
            className={`px-5 py-2 rounded-full font-helvetica transition-colors ${
              filter === "education"
                ? "bg-[var(--primary)] text-white"
                : "bg-white hover:bg-gray-100 text-[var(--text-secondary)]"
            }`}
          >
            Education
          </button>
          <button
            onClick={() => setFilter("digital")}
            className={`px-5 py-2 rounded-full font-helvetica transition-colors ${
              filter === "digital"
                ? "bg-[var(--primary)] text-white"
                : "bg-white hover:bg-gray-100 text-[var(--text-secondary)]"
            }`}
          >
            Digital
          </button>
        </div>

        {/* Opportunities grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredOpportunities.map((opportunity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-neue-kabel font-bold text-xl">
                    {opportunity.title}
                  </h3>
                  <span
                    className={`text-xs px-3 py-1 rounded-full ${
                      opportunity.location === "Remote"
                        ? "bg-blue-100 text-blue-800"
                        : opportunity.location === "Local"
                          ? "bg-green-100 text-green-800"
                          : "bg-purple-100 text-purple-800"
                    }`}
                  >
                    {opportunity.location}
                  </span>
                </div>

                <p className="font-helvetica text-[var(--text-secondary)] mb-4">
                  {opportunity.description}
                </p>

                <div className="flex justify-between items-center mt-6">
                  <div className="font-helvetica text-sm text-[var(--text-light)]">
                    <span className="font-bold">Time:</span>{" "}
                    {opportunity.commitment}
                  </div>
                  <a
                    href="#apply"
                    className="font-helvetica font-medium text-[var(--primary)] hover:text-[var(--primary-dark)] transition-colors"
                  >
                    Apply →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="font-helvetica text-[var(--text-secondary)] max-w-2xl mx-auto mb-8">
            Don&apos;t see a role that matches your skills? We&apos;re always
            open to new ideas and ways volunteers can contribute to our mission.
            Contact us to discuss custom volunteer opportunities.
          </p>
          <Button href="#apply" variant="primary" size="lg">
            Apply to Volunteer
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default VolunteerOpportunities;
