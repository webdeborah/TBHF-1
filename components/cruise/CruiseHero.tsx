"use client";

import { motion } from "framer-motion";
import Button from "../common/Button";

const CruiseHero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-navy to-primary pt-20 pb-16">
      {/* Animated waves in background */}
      <div className="absolute inset-0 z-0 opacity-20">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bottom-0 left-0 w-full h-24 md:h-32"
            style={{
              bottom: `${i * 10}%`,
              zIndex: 5 - i,
            }}
            animate={{
              x: i % 2 === 0 ? [0, 100, 0] : [0, -100, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 10 + i * 2,
              ease: "easeInOut",
            }}
          >
            <svg
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className="w-full h-full"
            >
              <path
                d="M0,0 C150,40 350,0 500,30 C650,60 700,0 900,20 C1050,40 1200,10 1200,10 L1200,120 L0,120 Z"
                className="fill-white"
              ></path>
            </svg>
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-secondary text-navy font-helvetica font-medium text-sm mb-4">
              Summer 2025 Voyage
            </span>
            <h1 className="font-neue-kabel font-black text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
              TBHF Black History
              <span className="block text-secondary"> Caribbean Cruise</span>
            </h1>
            <p className="font-helvetica text-lg md:text-xl text-white opacity-90 mb-8 max-w-xl">
              Join us on our annual voyage celebrating Black heritage and culture across the Caribbean. Experience history, education, and relaxation in one unforgettable journey.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                href="#registration" 
                variant="secondary" 
                size="lg"
                className="shadow-lg"
              >
                Reserve Your Cabin
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
                <p className="font-neue-kabel font-bold text-2xl md:text-3xl text-secondary">7</p>
                <p className="font-helvetica text-white text-sm md:text-base">Days</p>
              </div>
              <div className="text-center">
                <p className="font-neue-kabel font-bold text-2xl md:text-3xl text-secondary">4</p>
                <p className="font-helvetica text-white text-sm md:text-base">Islands</p>
              </div>
              <div className="text-center">
                <p className="font-neue-kabel font-bold text-2xl md:text-3xl text-secondary">∞</p>
                <p className="font-helvetica text-white text-sm md:text-base">Memories</p>
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
                  Limited<br />Cabins!
                </span>
              </div>
              <img
                src="/images/cruise-ship.jpg"
                alt="Luxury Cruise Ship"
                className="rounded-lg shadow-2xl border-4 border-white"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1548574505-5e239809ee19?q=80&w=1064";
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