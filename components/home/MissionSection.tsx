"use client";

import { motion } from "framer-motion";
import AnimatedSection from "../common/AnimatedSection";
import SectionHeading from "../common/SectionHeading";
import Button from "../common/Button";

const MissionSection = () => {
  return (
    <section className="bg-[var(--bg-secondary)] py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection className="order-2 lg:order-1">
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="rounded-lg overflow-hidden"
              >
                <img
                  src="/images/mission-image.jpg"
                  alt="Black history preservation"
                  className="w-full h-auto rounded-lg"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="absolute -bottom-10 -right-10 bg-[var(--primary)] text-white p-6 rounded-lg max-w-xs hidden md:block"
              >
                <h3 className="font-neue-kabel font-bold text-xl mb-2">Your Support Makes a Difference</h3>
                <p className="font-helvetica text-sm">
                  Help us digitize documents, restore landmarks, and fund educational programs that keep Black history alive.
                </p>
              </motion.div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection className="order-1 lg:order-2" direction="left">
            <SectionHeading
              subtitle="Our Mission"
              title="Preserve our legacy"
              description="Black history is more than a collection of dates and events—it is the story of resilience, culture, and contributions that have shaped the world. However, much of this history is at risk of being lost, erased, or misrepresented."
            />
            
            <div className="space-y-6 mt-8">
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="h-12 w-12 rounded-full bg-[var(--secondary)] flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[var(--accent-black)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="font-neue-kabel font-bold text-xl mb-1">Digitize and Preserve</h3>
                  <p className="font-helvetica text-[var(--text-secondary)]">
                    We're using advanced technology to digitize and preserve historical documents, photographs, and artifacts for future generations.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="h-12 w-12 rounded-full bg-[var(--secondary)] flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[var(--accent-black)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="font-neue-kabel font-bold text-xl mb-1">Restore and Protect</h3>
                  <p className="font-helvetica text-[var(--text-secondary)]">
                    We work to restore and protect historical landmarks and sites significant to Black history across the country.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="h-12 w-12 rounded-full bg-[var(--secondary)] flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[var(--accent-black)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="font-neue-kabel font-bold text-xl mb-1">Educate and Empower</h3>
                  <p className="font-helvetica text-[var(--text-secondary)]">
                    We develop educational programs and resources to ensure Black history is accurately taught and integrated into mainstream education.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <Button href="/about" variant="primary">
                Learn More About Our Work
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;