"use client";

import { motion } from "framer-motion";
import Button from "../common/Button";
import NaturalWaves from "./waves";

const CruiseHero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-navy to-primary pt-20 pb-16">
      <NaturalWaves />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-secondary text-navy font-helvetica font-medium text-sm mb-4">
              Coming Soon to Donators
            </span>
            <h1 className="font-neue-kabel font-black text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
              TBHF Black History
              <span className="block text-white"> Caribbean Cruise</span>
            </h1>
            <p className="font-helvetica text-lg md:text-xl text-gray-200 opacity-90 mb-8 max-w-xl">
              Join us on our annual voyage celebrating Black heritage and
              culture across the Caribbean. Experience history, education, and
              relaxation in one unforgettable journey.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="#registration"
                variant="secondary"
                size="lg"
                className="shadow-lg"
              >
                Coming Soon
              </Button>
              <Button
                href="#itinerary"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/20"
              >
                View Itinerary
              </Button>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-4 md:gap-8">
              <div className="text-center">
                <p className="font-neue-kabel font-bold text-2xl md:text-3xl text-secondary">
                  7
                </p>
                <p className="font-helvetica text-white text-sm md:text-base">
                  Days
                </p>
              </div>
              <div className="text-center">
                <p className="font-neue-kabel font-bold text-2xl md:text-3xl text-secondary">
                  4
                </p>
                <p className="font-helvetica text-white text-sm md:text-base">
                  Islands
                </p>
              </div>
              <div className="text-center">
                <p className="font-neue-kabel font-bold text-2xl md:text-3xl text-secondary">
                  ∞
                </p>
                <p className="font-helvetica text-white text-sm md:text-base">
                  Memories
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              <div className="absolute -top-5 -left-5 w-24 h-24 rounded-full bg-secondary z-10 flex items-center justify-center">
                <span className="font-neue-kabel font-bold text-navy text-center text-sm">
                  Limited
                  <br />
                  Cabins!
                </span>
              </div>
              <img
                src="https://images.unsplash.com/photo-1511316695145-4992006ffddb?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Luxury Cruise Ship"
                className="rounded-lg shadow-2xl border-4 border-white"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://images.unsplash.com/photo-1548574505-5e239809ee19?q=80&w=1064";
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CruiseHero;
