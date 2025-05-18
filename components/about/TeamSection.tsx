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
      role: "Director and President",
      bio: "Theresa brings over 15 years of experience in non-profit leadership and a passion for educational equity.",
      image: "/theresakennedy2.jpg",
    },
    {
      name: "Deborah Sieh",
      role: "Director of Web Development",
      bio: "Deborah brings expert web development skills, combining creative design with functional precision to build impactful, user-friendly digital experiences.",
      image: "/deborahsieh.jpg",
    },
    {
      name: "Mike Evans",
      role: "Director and Secretary",
      bio: "Mike ensures organizational integrity and governance while driving strategic initiatives with a strong focus on compliance and operational excellence.",
      image: "/MikeEvans.jpg",
    },
    {
      name: "Jeff St-Louis",
      role: "Director of Technology",
      bio: "Jeff leverages his expertise in digital infrastructure and innovation to drive cutting-edge tech solutions that support and scale the Foundation's mission.",
      image: "/JeffStLouis.jpg",
    },
    {
      name: "Jacqui Kennedy",
      role: "Director of Marketing",
      bio: "Jacqui has a background in museum curation and specializes in artifact preservation.",
      image: "/JacquiKennedy.jpg",
    },
    {
      name: "Simba Magwanyata",
      role: "Director and Treasurer",
      bio: "Simba brings strategic financial oversight and treasury management expertise, ensuring transparent, efficient allocation of our resources.",
      image: "/SimbaMagwanyata.jpg",
    },
  ];

  return (
    <section
      id="team"
      ref={ref}
      className="py-16 md:py-24 bg-[var(--bg-secondary)]"
    >
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
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={member.image}
                  alt={`${member.name}, ${member.role} at The Black History Foundation`}
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
            <h3 className="font-neue-kabel font-bold text-2xl mb-4">
              Join Our Team
            </h3>
            <p className="font-helvetica text-[var(--text-secondary)] mb-6">
              We&apos;re always looking for passionate individuals to join our
              mission. Whether as a board member, volunteer, or staff member,
              there are many ways to contribute your skills.
            </p>
            <a
              href="/volunteer#opportunities"
              className="inline-block font-helvetica font-bold bg-[var(--primary)] hover:text-gray-300 text-white px-6 py-3 rounded-md hover:bg-[var(--primary-dark)] transition-colors"
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
