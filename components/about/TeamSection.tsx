"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionHeading from "../common/SectionHeading";

const TeamSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Team members data
  const teamMembers = [
    {
      name: "Theresa Kennedy",
      role: "President",
      bio: "Theresa brings over 15 years of experience in non-profit leadership and a passion for educational equity.",
      image: "/images/team-1.jpg"
    },
    {
      name: "Deborah Sieh",
      role: "Board Member",
      bio: "Deborah is a historian specializing in African diaspora studies with extensive research experience.",
      image: "/images/team-2.jpg"
    },
    {
      name: "Mike Evans",
      role: "Board Member",
      bio: "Mike has a background in technology and focuses on digital preservation strategies.",
      image: "/images/team-3.jpg"
    },
    {
      name: "Jeff St-Louis",
      role: "Board Member",
      bio: "Jeff brings financial expertise and has a passion for community development and cultural preservation.",
      image: "/images/team-4.jpg"
    },
    {
      name: "Jacqui Kennedy",
      role: "Board Member",
      bio: "Jacqui has a background in museum curation and specializes in artifact preservation.",
      image: "/images/team-5.jpg"
    },
    {
      name: "Angie Wang",
      role: "Marketing Director",
      bio: "Angie leads our outreach efforts with over a decade of experience in non-profit marketing.",
      image: "/images/team-6.jpg"
    }
  ];

  return (
    <section id="team" ref={ref} className="py-16 md:py-24 bg-[var(--bg-secondary)]">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionHeading
          subtitle="Leadership"
          title="Meet Our Team"
          description="Our dedicated team brings diverse expertise in history, education, technology, and community organizing to fulfill our mission of preserving Black history."
          centered
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-neue-kabel font-bold text-xl text-[var(--accent-black)]">
                  {member.name}
                </h3>
                <p className="font-helvetica text-[var(--primary)] font-medium mb-3">
                  {member.role}
                </p>
                <p className="font-helvetica text-[var(--text-secondary)]">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 max-w-3xl mx-auto text-center"
        >
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
            <h3 className="font-neue-kabel font-bold text-2xl mb-4">Join Our Team</h3>
            <p className="font-helvetica text-[var(--text-secondary)] mb-6">
              We're always looking for passionate individuals to join our mission. Whether as a board member, volunteer, or staff member, there are many ways to contribute your skills.
            </p>
            <a 
              href="/contact#careers" 
              className="inline-block font-helvetica font-bold bg-[var(--primary)] text-white px-6 py-3 rounded-md hover:bg-[var(--primary-dark)] transition-colors"
            >
              View Open Positions
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;