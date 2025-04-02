"use client";

import { motion } from "framer-motion";

const ContactHero = () => {
  return (
    <section className="relative pt-32 pb-20 bg-[var(--bg-accent)] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-neue-kabel font-black text-4xl md:text-5xl lg:text-6xl mb-6">
              Contact <span className="text-[var(--primary)]">Us</span>
            </h1>
            
            <p className="font-helvetica text-lg md:text-xl text-[var(--text-secondary)] mb-8">
              We'd love to hear from you. Reach out with questions about our programs, volunteering opportunities, donation inquiries, or partnership possibilities.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
          >
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-[var(--primary)] mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-neue-kabel font-bold text-lg mb-2">Email Us</h3>
              <p className="font-helvetica text-[var(--text-secondary)]">
                <a href="mailto:info@blackhistoryfoundation.org" className="hover:text-[var(--primary)]">
                  info@blackhistoryfoundation.org
                </a>
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-[var(--primary)] mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="font-neue-kabel font-bold text-lg mb-2">Call Us</h3>
              <p className="font-helvetica text-[var(--text-secondary)]">
                <a href="tel:+12025551234" className="hover:text-[var(--primary)]">
                  (202) 555-1234
                </a>
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-[var(--primary)] mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-neue-kabel font-bold text-lg mb-2">Visit Us</h3>
              <p className="font-helvetica text-[var(--text-secondary)]">
                1234 History Lane<br />
                Washington, DC 20001
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;