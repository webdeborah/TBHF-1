"use client";

import { motion } from "framer-motion";
import Button from "../common/Button";

const DonateHero = () => {
  return (
    <section className="relative pt-32 pb-20 bg-[var(--primary)] text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-15">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="circles" patternUnits="userSpaceOnUse" width="40" height="40" patternTransform="rotate(45)">
              <circle cx="20" cy="20" r="3" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circles)" />
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
              Support Our <span className="text-[var(--secondary)]">Mission</span>
            </h1>
            
            <p className="font-helvetica text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
              Your donation to The Black History Foundation helps us preserve Black history for future generations. Every contribution, no matter the size, makes a meaningful impact on our work.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
          >
            <div className="bg-white bg-opacity-10 backdrop-blur-sm border border-white border-opacity-20 rounded-lg p-6 text-center">
              <div className="font-neue-kabel font-black text-2xl md:text-3xl mb-2 text-[var(--secondary)]">$5M</div>
              <p className="font-helvetica text-gray-200">Fundraising Goal</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm border border-white border-opacity-20 rounded-lg p-6 text-center">
              <div className="font-neue-kabel font-black text-2xl md:text-3xl mb-2 text-[var(--secondary)]">$3.25M</div>
              <p className="font-helvetica text-gray-200">Raised So Far</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm border border-white border-opacity-20 rounded-lg p-6 text-center">
              <div className="font-neue-kabel font-black text-2xl md:text-3xl mb-2 text-[var(--secondary)]">16</div>
              <p className="font-helvetica text-gray-200">Months Remaining</p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12"
          >
            <div className="w-full h-4 bg-white bg-opacity-20 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "65%" }}
                transition={{ duration: 1.5, delay: 0.8 }}
                className="h-full bg-[var(--secondary)] rounded-full"
              ></motion.div>
            </div>
            <p className="font-helvetica text-right mt-2 text-sm text-gray-200">65% of our goal</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12"
          >
            <Button
              href="#donate-form"
              variant="secondary"
              size="lg"
            >
              Donate Now
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DonateHero;