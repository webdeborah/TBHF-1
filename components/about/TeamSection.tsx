"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { DEFAULT_BOARD_MEMBERS } from "@/lib/board-of-directors";
import type { BoardMember } from "@/lib/board-of-directors";
import SectionHeading from "../common/SectionHeading";

const TeamSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [teamMembers, setTeamMembers] = useState<(BoardMember & { id?: string })[]>(DEFAULT_BOARD_MEMBERS);

  useEffect(() => {
    if (!db) return;
    const fetchMembers = async () => {
      try {
        const q = query(
          collection(db, "boardOfDirectors"),
          orderBy("order", "asc")
        );
        const snapshot = await getDocs(q);
        if (snapshot.empty) return;
        const data = snapshot.docs.map((docSnap) => ({
          id: docSnap.id,
          ...docSnap.data(),
          order: docSnap.data().order ?? 0,
        })) as (BoardMember & { id: string })[];
        setTeamMembers(data);
      } catch (err) {
        console.error("Failed to fetch board members:", err);
      }
    };
    fetchMembers();
  }, []);

  return (
    <section
      id="team"
      ref={ref}
      className="py-16 md:py-24 bg-[var(--bg-secondary)]"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <SectionHeading
          subtitle="Governance"
          title="Board of Directors"
          description="Our dedicated board brings diverse expertise in history, education, technology, and community organizing to fulfill our mission of preserving Black history."
          centered
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id ?? `${member.name}-${index}`}
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
