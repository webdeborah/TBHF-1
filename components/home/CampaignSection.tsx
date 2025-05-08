"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionHeading from "../common/SectionHeading";
import Button from "../common/Button";
import { CURRENT_DONATION_AMOUNT, DONATION_GOAL } from "../variables/donations";

const CampaignSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // Progress bar animation
  const progressVariants = {
    hidden: { width: "0%" },
    visible: { width: "4%", transition: { duration: 1.5, ease: "easeOut" } },
  };

  // Counter animation (for demonstration purposes)
  const counterVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  // Points for why this matters
  const whyItMatters = [
    "Schools lack comprehensive Black history curriculum",
    "Historical artifacts and documents are disappearing",
    "Misinformation about Black history is widespread",
    "Many historical sites are at risk of being lost forever",
  ];

  // What we're doing points
  const whatWereDoing = [
    "Developing educational programs and curriculum materials",
    "Restoring and preserving historical sites and landmarks",
    "Using AI and blockchain to preserve historical records",
    "Building community archives and oral history collections",
  ];

  return (
    <section
      ref={ref}
      className="py-16 md:py-24 bg-white relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <SectionHeading
          subtitle="Save Black History"
          title="The Fundraising Campaign"
          description="We're on a mission to raise $5 million over the next two years to implement our Roadmap to Direct Services, ensuring Black history is preserved for future generations."
          centered
        />

        {/* Fundraising progress */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto mt-12 bg-[var(--bg-secondary)] p-6 rounded-lg shadow-md"
        >
          <div className="flex justify-between mb-2">
            <span className="font-neue-kabel font-bold">
              Fundraising Progress
            </span>
            <span className="font-helvetica font-bold">
              {CURRENT_DONATION_AMOUNT} / {DONATION_GOAL}
            </span>
          </div>
          <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              variants={progressVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="h-full bg-gradient-to-r from-[var(--primary)] to-[var(--primary-light)] rounded-full"
            ></motion.div>
          </div>
          <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
            <motion.div
              variants={counterVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="text-center"
            >
              <div className="font-neue-kabel font-black text-2xl md:text-3xl text-[var(--primary)]">
                $300
              </div>
              <div className="font-helvetica text-sm text-[var(--text-secondary)]">
                Raised So Far
              </div>
            </motion.div>
            <motion.div
              variants={counterVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="font-neue-kabel font-black text-2xl md:text-3xl text-[var(--accent-black)]">
                20+
              </div>
              <div className="font-helvetica text-sm text-[var(--text-secondary)]">
                Donors
              </div>
            </motion.div>
            <motion.div
              variants={counterVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ delay: 0.4 }}
              className="text-center"
            >
              <div className="font-neue-kabel font-black text-2xl md:text-3xl text-[var(--accent-black)]">
                0.1%
              </div>
              <div className="font-helvetica text-sm text-[var(--text-secondary)]">
                Complete
              </div>
            </motion.div>
            <motion.div
              variants={counterVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ delay: 0.6 }}
              className="text-center"
            >
              <div className="font-neue-kabel font-black text-2xl md:text-3xl text-[var(--accent-black)]">
                4
              </div>
              <div className="font-helvetica text-sm text-[var(--text-secondary)]">
                Months Left
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Why this matters & what we're doing */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-[var(--primary)] text-white p-6 md:p-8 rounded-lg"
          >
            <h3 className="font-neue-kabel font-bold text-2xl mb-4">
              Why This Matters
            </h3>
            <ul className="space-y-3">
              {whyItMatters.map((point, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                  }
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="flex items-start"
                >
                  <span className="inline-block mr-3 mt-1 text-[var(--secondary)]">
                    •
                  </span>
                  <span className="font-helvetica">{point}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-[var(--bg-secondary)] p-6 md:p-8 rounded-lg border-l-4 border-[var(--secondary)]"
          >
            <h3 className="font-neue-kabel font-bold text-2xl mb-4">
              What We&apos;re Doing
            </h3>
            <ul className="space-y-3">
              {whatWereDoing.map((point, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={
                    inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }
                  }
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="flex items-start"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-3 mt-1 text-[var(--primary)]"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-helvetica">{point}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <h3 className="font-neue-kabel font-bold text-2xl mb-4">
            How You Can Help
          </h3>
          <p className="font-helvetica text-[var(--text-secondary)] max-w-2xl mx-auto mb-8">
            Join us in our mission to preserve Black history for future
            generations. Your support can make a lasting difference.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button href="/donate" variant="primary" size="lg">
              Donate Now
            </Button>
            <Button href="/volunteer" variant="outline" size="lg">
              Volunteer
            </Button>
            <Button href="/contact" variant="secondary" size="lg">
              Partner With Us
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CampaignSection;
