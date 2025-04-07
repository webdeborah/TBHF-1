"use client";

import { motion } from "framer-motion";

const AboutHero = () => {
  return (
    <section className="relative pt-32 pb-20 bg-[var(--accent-black)] text-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-10">
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
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-neue-kabel font-black text-4xl md:text-5xl lg:text-6xl mb-6">
              About <span className="text-[var(--secondary)]">TBHF</span>
            </h1>

            <p className="font-helvetica text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              Our mission is to empower the African diaspora through education,
              cultural celebration, and the preservation of our history. We
              believe that protecting our past is the key to shaping a stronger,
              more unified future.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-8 mt-10"
          >
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-lg border border-white border-opacity-20 text-center w-full sm:w-60">
              <h3 className="font-neue-kabel font-bold text-[var(--secondary)] mb-2">
                Founded
              </h3>
              <p className="font-helvetica text-2xl">2023</p>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-lg border border-white border-opacity-20 text-center w-full sm:w-60">
              <h3 className="font-neue-kabel font-bold text-[var(--secondary)] mb-2">
                Communities
              </h3>
              <p className="font-helvetica text-2xl">10+</p>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-lg border border-white border-opacity-20 text-center w-full sm:w-60">
              <h3 className="font-neue-kabel font-bold text-[var(--secondary)] mb-2">
                Volunteers
              </h3>
              <p className="font-helvetica text-2xl">100+</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
