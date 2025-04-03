"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AnimatedSection from "../common/AnimatedSection";

const MissionVision = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="mission" ref={ref} className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={
                  inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
                }
                transition={{ duration: 0.6 }}
                className="rounded-lg overflow-hidden shadow-xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1515658323406-25d61c141a6e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y3VsdHVyZXxlbnwwfHwwfHx8MA%3D%3D"
                  alt="Our mission"
                  className="w-full h-auto rounded-lg"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute -bottom-6 -right-6 bg-[var(--accent-black)] text-white p-8 rounded-lg max-w-xs hidden md:block"
              >
                <h3 className="font-neue-kabel font-bold text-xl mb-2 text-[var(--secondary)]">
                  Our Values
                </h3>
                <ul className="font-helvetica text-sm space-y-2">
                  <li className="flex items-center">
                    <span className="mr-2 text-[var(--secondary)]">✓</span>{" "}
                    Education
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-[var(--secondary)]">✓</span>{" "}
                    Community
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-[var(--secondary)]">✓</span>{" "}
                    Innovation
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-[var(--secondary)]">✓</span>{" "}
                    Cultural Heritage
                  </li>
                </ul>
              </motion.div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="left">
            <div className="lg:pl-8">
              <span className="font-neue-kabel uppercase text-sm tracking-wider text-[var(--primary)]">
                Who We Are
              </span>
              <h2 className="font-neue-kabel font-bold text-3xl md:text-4xl mt-2 mb-6">
                Our Mission & Vision
              </h2>

              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="font-neue-kabel font-bold text-2xl text-[var(--accent-black)]">
                    Mission
                  </h3>
                  <p className="font-helvetica text-[var(--text-secondary)] leading-relaxed">
                    Our mission is to empower the African diaspora through
                    education, cultural celebration, and the preservation of our
                    history. We believe that protecting our past is the key to
                    shaping a stronger, more unified future.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="font-neue-kabel font-bold text-2xl text-[var(--accent-black)]">
                    Vision
                  </h3>
                  <p className="font-helvetica text-[var(--text-secondary)] leading-relaxed">
                    A future where Black history is accurately preserved and
                    integrated into mainstream narratives, where cultural
                    heritage is celebrated, and where every person of African
                    descent has access to their historical roots.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="font-neue-kabel font-bold text-2xl text-[var(--accent-black)]">
                    Our Approach
                  </h3>
                  <p className="font-helvetica text-[var(--text-secondary)] leading-relaxed">
                    We take a comprehensive approach to preserving Black history
                    through four key pillars: educational programs,
                    technology-based solutions, cultural preservation efforts,
                    and community engagement. By addressing these areas
                    simultaneously, we create sustainable, lasting impact.
                  </p>
                </div>

                {/* Mobile view for values */}
                <div className="md:hidden space-y-4">
                  <h3 className="font-neue-kabel font-bold text-2xl text-[var(--accent-black)]">
                    Our Values
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-[var(--bg-secondary)] p-4 rounded-lg">
                      <span className="text-[var(--primary)] font-bold">
                        Education
                      </span>
                    </div>
                    <div className="bg-[var(--bg-secondary)] p-4 rounded-lg">
                      <span className="text-[var(--primary)] font-bold">
                        Community
                      </span>
                    </div>
                    <div className="bg-[var(--bg-secondary)] p-4 rounded-lg">
                      <span className="text-[var(--primary)] font-bold">
                        Innovation
                      </span>
                    </div>
                    <div className="bg-[var(--bg-secondary)] p-4 rounded-lg">
                      <span className="text-[var(--primary)] font-bold">
                        Cultural Heritage
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
