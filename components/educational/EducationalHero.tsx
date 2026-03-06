"use client";

import { motion } from "framer-motion";

const EducationalHero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-[var(--primary-dark)] to-[var(--primary)] text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/handunderfire.svg')] bg-no-repeat bg-center bg-contain"></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Educational Resources
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl mb-6 opacity-90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            The Black History Foundation is committed to providing high-quality educational resources 
            that preserve, protect, and promote Black history and culture.
          </motion.p>
          
          <motion.p 
            className="text-lg md:text-xl opacity-90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Our curated collection includes videos, documents, and tools designed to empower educators, 
            students, and community leaders with accurate, accessible information about Black history. 
            These resources support our mission to safeguard historical narratives and ensure they are 
            passed down to future generations.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default EducationalHero;
