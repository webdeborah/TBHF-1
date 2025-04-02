"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Button from "../common/Button";

const NewsletterSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setSubscribed(true);
      setLoading(false);
    }, 1500);
  };

  return (
    <section
      ref={ref}
      className="py-16 bg-[var(--primary)] text-white relative overflow-hidden"
    >
      {/* Background pattern */}
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
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-neue-kabel font-bold text-3xl md:text-4xl mb-4">
              Stay Updated on Our Mission
            </h2>
            <p className="font-helvetica text-gray-200 mb-8">
              Subscribe to our newsletter for updates on our programs, events, and how you can contribute to preserving Black history.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {!subscribed ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="flex-grow px-4 py-3 rounded-md bg-white bg-opacity-20 border border-white border-opacity-30 placeholder-white placeholder-opacity-75 focus:outline-none focus:ring-2 focus:ring-white text-white backdrop-blur-sm"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-[var(--secondary)] text-[var(--accent-black)] font-bold py-3 px-6 rounded-md transition-all hover:bg-opacity-90 disabled:opacity-70 flex justify-center items-center"
                >
                  {loading ? (
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : (
                    "Subscribe"
                  )}
                </button>
              </form>
            ) : (
              <div className="bg-white bg-opacity-20 rounded-md p-6 border border-white border-opacity-30 backdrop-blur-sm">
                <div className="text-4xl mb-4">✓</div>
                <h3 className="font-neue-kabel font-bold text-xl mb-2">Thank You for Subscribing!</h3>
                <p className="font-helvetica text-gray-100">
                  You've been added to our newsletter. Watch your inbox for updates on our mission to preserve Black history.
                </p>
              </div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 text-sm text-gray-300 font-helvetica"
          >
            By subscribing, you agree to our Privacy Policy and consent to receive updates from The Black History Foundation.
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;