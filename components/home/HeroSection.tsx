"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Button from "../common/Button";
import {
  CURRENT_DONATION_AMOUNT,
  DONATION_GOAL,
  REMAINING_TIME,
} from "../variables/donations";
import NaturalWaves from "../ui/NaturalWaves";

const DonateHero = () => {
  const heroRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Check initially
    checkMobile();

    // Add resize listener to update when orientation changes
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Optimized scroll effect with throttling
  useEffect(() => {
    if (typeof window === "undefined") return;

    let ticking = false;
    const parallaxMultiplier = isMobile ? 0.05 : 0.15; // Reduced effect for mobile

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!heroRef.current) return;

          const scrollPosition = window.scrollY;
          const contentElement =
            heroRef.current.querySelector(".content-wrapper");

          if (contentElement) {
            // Apply less dramatic transform on mobile for smoother scrolling
            contentElement.style.transform = `translateY(${
              scrollPosition * parallaxMultiplier
            }px)`;
          }

          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMobile]);

  return (
    <section
      ref={heroRef}
      className="relative py-16 md:py-24 bg-[var(--primary)] text-white overflow-hidden"
    >
      {/* Background pattern - using more efficient pattern for mobile */}
      <div className="absolute inset-0 opacity-10">
        {isMobile ? (
          // Simplified background pattern for mobile
          <div className="h-full w-full bg-[url('/assets/simplified-pattern.svg')]"></div>
        ) : (
          // Original SVG pattern for desktop
          <svg width="100%" height="100%">
            <defs>
              <pattern
                id="circles"
                patternUnits="userSpaceOnUse"
                width="40"
                height="40"
                patternTransform="rotate(45)"
              >
                <circle cx="20" cy="20" r="3" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circles)" />
          </svg>
        )}
      </div>

      {/* Alternatively, use NaturalWaves for a more dynamic background */}
      {/* <div className="absolute inset-0 z-0">
        <NaturalWaves />
      </div> */}

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="content-wrapper max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="font-neue-kabel font-black text-4xl md:text-5xl lg:text-6xl mb-6">
              Support Our{" "}
              <span className="text-[var(--secondary)]">Mission</span>
            </h1>

            <p className="font-helvetica text-lg text-gray-200 mb-8 leading-relaxed">
              Your donation to The Black History Foundation helps us preserve
              Black history for future generations. Every contribution, no
              matter the size, makes a meaningful impact on our work.
            </p>
          </motion.div>

          {/* Stats cards with better mobile layout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-10"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              {/* Using CSS Grid for better control on different screen sizes */}
              <div className="bg-white bg-opacity-10 backdrop-blur-sm border border-white border-opacity-20 rounded-lg p-4 md:p-6 text-center">
                <div className="font-neue-kabel font-black text-2xl md:text-3xl mb-2 text-[var(--secondary)]">
                  {DONATION_GOAL}
                </div>
                <p className="font-helvetica text-gray-200">Fundraising Goal</p>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-sm border border-white border-opacity-20 rounded-lg p-4 md:p-6 text-center">
                <div className="font-neue-kabel font-black text-2xl md:text-3xl mb-2 text-[var(--secondary)]">
                  {CURRENT_DONATION_AMOUNT}
                </div>
                <p className="font-helvetica text-gray-200">Raised So Far</p>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-sm border border-white border-opacity-20 rounded-lg p-4 md:p-6 text-center">
                <div className="font-neue-kabel font-black text-2xl md:text-3xl mb-2 text-[var(--secondary)]">
                  {REMAINING_TIME}
                </div>
                <p className="font-helvetica text-gray-200">Months Remaining</p>
              </div>
            </div>
          </motion.div>

          {/* Progress Bar - optimized animation */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10"
          >
            <div className="w-full h-4 bg-white bg-opacity-20 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "4%" }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.2,
                  delay: 0.2,
                  ease: "easeOut",
                }}
                className="h-full bg-[var(--secondary)] rounded-full"
              ></motion.div>
            </div>
            <p className="font-helvetica text-right mt-2 text-sm text-gray-200">
              1% of our goal
            </p>
          </motion.div>

          {/* Call to action - improved for mobile */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-10 text-center"
          >
            <Button
              href="#donate-form"
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto"
            >
              Donate Now
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Optional scroll indicator for better UX */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="w-5 h-8 border-2 border-white rounded-full flex justify-center pt-1"
        >
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="w-1 h-2 bg-white rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default DonateHero;
