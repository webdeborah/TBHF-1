"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ContactMap = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-16 md:py-24 bg-[var(--bg-secondary)]">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="font-neue-kabel font-bold text-3xl md:text-4xl mb-4">
              Our Location
            </h2>
            <p className="font-helvetica text-[var(--text-secondary)] max-w-2xl mx-auto">
              Our headquarters is located in Sheridan, WY.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="aspect-w-16 aspect-h-9 h-[400px]">
              {/* Replace this with an actual map component or iframe */}
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="font-helvetica text-gray-500">
                    Interactive map would be displayed here.<br />
                    (Google Maps or other mapping service)
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-neue-kabel font-bold text-lg mb-2">Address</h3>
                <p className="font-helvetica text-[var(--text-secondary)]">
                  30 Gould Street Ste R<br />
                  Sheridan, WY 82801<br />
                  United States
                </p>
              </div>
              
              <div>
                <h3 className="font-neue-kabel font-bold text-lg mb-2">Office Hours</h3>
                <p className="font-helvetica text-[var(--text-secondary)]">
                  Monday - Friday<br />
                  9:00 AM - 5:00 PM<br />
                  Closed on weekends and federal holidays
                </p>
              </div>          
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactMap;