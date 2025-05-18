"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionHeading from "../common/SectionHeading";

const ProgramDetails = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeTab, setActiveTab] = useState("education");

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Handle direct navigation and browser back/forward
      const handleHashChange = () => {
        const hash = window.location.hash;
        if (hash === "#programs-nav") {
          const urlParams = new URLSearchParams(window.location.search);
          const program = urlParams.get("program");
          if (
            program &&
            ["education", "technology", "preservation", "community"].includes(
              program,
            )
          ) {
            setActiveTab(program);
            const nav = document.getElementById("programs-nav");
            if (nav) nav.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }
      };

      handleHashChange(); // Handle initial load
      window.addEventListener("hashchange", handleHashChange);
      return () => window.removeEventListener("hashchange", handleHashChange);
    }
  }, []);

  const programs = {
    education: {
      title: "Educational Programs",
      description:
        "Empowering educators, youth, and communities with resources and knowledge about African history and cultural heritage.",
      items: [
        {
          title: "Curriculum Development",
          description:
            "Creating comprehensive, historically accurate educational materials for K-12 schools and universities.",
        },
        {
          title: "Teacher Training",
          description:
            "Workshops and resources to help educators effectively teach Black history in engaging and impactful ways.",
        },
        {
          title: "Student Workshops",
          description:
            "Interactive sessions that bring history to life through storytelling, art, and technology.",
        },
        {
          title: "Community Education",
          description:
            "Public lectures, seminars, and events that make historical knowledge accessible to all.",
        },
      ],
      image: "/girlaccessingblackhistoryGPT.webp",
    },
    technology: {
      title: "Technology-Based Solutions",
      description:
        "Leveraging cutting-edge technology to preserve, protect, and promote African history and cultural heritage.",
      items: [
        {
          title: "Digital Archives",
          description:
            "Creating searchable databases of historical documents, photographs, and artifacts.",
        },
        {
          title: "Virtual Reality Experiences",
          description:
            "Immersive historical recreations that transport users to significant moments and places in Black history.",
        },
        {
          title: "Decentralized Decision-Making Environment(DDME)",
          description:
            "A blockchain-based platform that will foster collaboration and community engagement by providing digital forums and crowdsourced archives for documenting and preserving African history and culture.",
        },
        {
          title: "AI-Powered Preservation",
          description:
            "Artificial intelligence tools that help digitize, categorize, and restore historical materials.",
        },
      ],
      image:
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    preservation: {
      title: "Cultural Preservation",
      description:
        "Safeguarding African heritage by preserving artifacts, landmarks, and historical narratives.",
      items: [
        {
          title: "Artifact Conservation",
          description:
            "Techniques and resources for preserving physical items of historical significance.",
        },
        {
          title: "Landmark Restoration",
          description:
            "Identifying and rehabilitating sites of historical importance to the Black community.",
        },
        {
          title: "Oral History Collection",
          description:
            "Recording and archiving first-person accounts from elders and community members.",
        },
        {
          title: "Cultural Documentation",
          description:
            "Systematic recording of traditions, practices, and knowledge that might otherwise be lost.",
        },
      ],
      image:
        "https://plus.unsplash.com/premium_photo-1713890424186-11d3584a22fc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8RWR1Y2F0aW9uJTIwcHJvZ3JhbXxlbnwwfHwwfHx8MA%3D%3D",
    },
    community: {
      title: "Community Engagement",
      description:
        "Fostering meaningful connections within the African diaspora and promoting sustainable practices.",
      items: [
        {
          title: "Leadership Development",
          description:
            "Training programs that empower community members to become advocates for historical preservation.",
        },
        {
          title: "Intergenerational Programs",
          description:
            "Initiatives that connect elders with youth to transfer knowledge and stories across generations.",
        },
        {
          title: "Cultural Events",
          description:
            "Celebrations, performances, and gatherings that promote community cohesion and cultural pride.",
        },
        {
          title: "Economic Empowerment",
          description:
            "Resources and support for businesses and entrepreneurs preserving cultural heritage.",
        },
      ],
      image:
        "https://images.unsplash.com/photo-1527525443983-6e60c75fff46?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Q29tbXVuaXR5JTIwRW5nYWdlbWVudHxlbnwwfHwwfHx8MA%3D%3D",
    },
  };

  const handleTabClick = (key) => {
    setActiveTab(key);
    // Smooth scroll to content section
    const element = document.getElementById(`${key}-content`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={ref}
      className="py-16 md:py-24 bg-white"
      id="programs-section"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <SectionHeading
          subtitle="Our Programs"
          title="Roadmap to Direct Services"
          description="The Black History Foundation's programs fall into four key categories, each addressing a critical aspect of our mission to preserve and promote Black history."
          centered
        />

        {/* Program tabs */}
        <div className="mt-12 border-b border-gray-200" id="programs-nav">
          <nav className="flex flex-wrap -mb-px scroll-mt-24">
            {Object.keys(programs).map((key) => (
              <a
                key={key}
                href={`#${key}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleTabClick(key);
                }}
                className={`font-helvetica font-bold py-4 px-6 border-b-2 transition-colors ${
                  activeTab === key
                    ? "border-[var(--primary)] text-[var(--primary)]"
                    : "border-transparent text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-gray-300"
                }`}
                id={`${key}-tab`}
              >
                {programs[key].title}
              </a>
            ))}
          </nav>
        </div>

        {/* Program content */}
        <div className="mt-8">
          {Object.keys(programs).map((key) => (
            <div
              key={key}
              className={`${activeTab === key ? "block" : "hidden"}`}
              id={`${key}-content`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={
                    inView && activeTab === key
                      ? { opacity: 1, x: 0 }
                      : { opacity: 0, x: -30 }
                  }
                  transition={{ duration: 0.6 }}
                >
                  <h3 className="font-neue-kabel font-bold text-2xl md:text-3xl mb-4">
                    {programs[key].title}
                  </h3>
                  <p className="font-helvetica text-[var(--text-secondary)] mb-8">
                    {programs[key].description}
                  </p>

                  <div className="space-y-6">
                    {programs[key].items.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={
                          inView && activeTab === key
                            ? { opacity: 1, y: 0 }
                            : { opacity: 0, y: 20 }
                        }
                        transition={{
                          duration: 0.4,
                          delay: 0.3 + index * 0.1,
                        }}
                        className="flex"
                      >
                        <div className="flex-shrink-0 mr-4">
                          <div className="h-10 w-10 rounded-full bg-[var(--primary)] bg-opacity-10 flex items-center justify-center text-[var(--primary)]">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-neue-kabel font-bold text-lg mb-1">
                            {item.title}
                          </h4>
                          <p className="font-helvetica text-[var(--text-secondary)]">
                            {item.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={
                    inView && activeTab === key
                      ? { opacity: 1, x: 0 }
                      : { opacity: 0, x: 30 }
                  }
                  transition={{ duration: 0.6 }}
                  className="rounded-lg overflow-hidden shadow-xl"
                >
                  <img
                    src={programs[key].image}
                    alt={programs[key].title}
                    className="w-full h-auto"
                  />
                </motion.div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-6"
        >
          <div className="bg-[var(--bg-secondary)] p-6 rounded-lg text-center">
            <span className="font-neue-kabel font-black text-4xl text-[var(--primary)]">
              24
            </span>
            <p className="font-helvetica text-[var(--text-secondary)] mt-2">
              Educational Programs
            </p>
          </div>
          <div className="bg-[var(--bg-secondary)] p-6 rounded-lg text-center">
            <span className="font-neue-kabel font-black text-4xl text-[var(--primary)]">
              15
            </span>
            <p className="font-helvetica text-[var(--text-secondary)] mt-2">
              Preserved Landmarks
            </p>
          </div>
          <div className="bg-[var(--bg-secondary)] p-6 rounded-lg text-center">
            <span className="font-neue-kabel font-black text-4xl text-[var(--primary)]">
              50K+
            </span>
            <p className="font-helvetica text-[var(--text-secondary)] mt-2">
              Digitized Documents
            </p>
          </div>
          <div className="bg-[var(--bg-secondary)] p-6 rounded-lg text-center">
            <span className="font-neue-kabel font-black text-4xl text-[var(--primary)]">
              12
            </span>
            <p className="font-helvetica text-[var(--text-secondary)] mt-2">
              Community Initiatives
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProgramDetails;
