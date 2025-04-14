"use client";

import { motion } from "framer-motion";
import Button from "../common/Button";

const VolunteerHero = () => {
  return (
    <section className="relative pt-32 pb-20 bg-[#90181b] text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-40">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="smallGrid"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 20 0 L 0 0 0 20"
                fill="none"
                stroke="white"
                strokeWidth="0.5"
              />
            </pattern>
            <pattern
              id="grid"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <rect width="100" height="100" fill="url(#smallGrid)" />
              <path
                d="M 100 0 L 0 0 0 100"
                fill="none"
                stroke="white"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-neue-kabel font-black text-4xl md:text-5xl lg:text-6xl mb-6">
              Be a Guardian of{" "}
              <span className="text-[var(--secondary)]">Black History</span>
            </h1>

            <p className="font-helvetica text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
              Black history is more than a collection of dates and events—it is
              the story of resilience, culture, and contributions that have
              shaped the world. However, much of this history is at risk of
              being lost, erased, or misrepresented. By becoming a volunteer
              with The Black History Foundation, you play a crucial role in
              safeguarding and sharing these stories for generations to come.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <Button href="#opportunities" variant="secondary" size="lg">
              Explore Opportunities
            </Button>
            <Button
              href="#apply"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-[var(--primary)]"
            >
              Apply Now
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VolunteerHero;
