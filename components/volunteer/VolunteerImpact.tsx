"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import SectionHeading from "../common/SectionHeading";
import { db } from "@/lib/firebase";

const VolunteerImpact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [testimonials, setTestimonials] = useState<
    { quote: string; name: string; role: string; image: string }[]
  >([]);
  const [testimonialsLoading, setTestimonialsLoading] = useState(true);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const testimonialInterval = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      if (!db) {
        setTestimonialsLoading(false);
        return;
      }
      try {
        const testimonialsRef = collection(db, "volunteerTestimonials");
        const q = query(testimonialsRef, orderBy("order", "asc"));
        const snapshot = await getDocs(q);
        const data = snapshot.docs.map((docSnap) => docSnap.data()) as {
          quote: string;
          name: string;
          role: string;
          image: string;
        }[];
        setTestimonials(data);
      } catch {
        setTestimonials([]);
      } finally {
        setTestimonialsLoading(false);
      }
    };
    fetchTestimonials();
  }, []);

  useEffect(() => {
    if (inView && testimonials.length > 0) {
      testimonialInterval.current = setInterval(() => {
        setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 6000);
    }
    return () => {
      if (testimonialInterval.current) {
        clearInterval(testimonialInterval.current);
      }
    };
  }, [inView, testimonials.length]);

  const impacts = [
    {
      title: "Help Digitize and Preserve History",
      description:
        "Work with our team to digitize historical documents, photographs, and artifacts, ensuring they're preserved for future generations.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
    },
    {
      title: "Engage in Community Outreach",
      description:
        "Help organize and participate in community events, workshops, and educational programs that promote Black history awareness.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
    {
      title: "Support Education Initiatives",
      description:
        "Contribute to developing educational materials, curriculum guides, and resources that accurately represent Black history.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section ref={ref} className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionHeading
          subtitle="Make an Impact"
          title="Why Volunteer with TBHF?"
          description="By volunteering with The Black History Foundation, you become part of a community dedicated to preserving and sharing Black history. Your contributions directly impact how future generations learn about and connect with their heritage."
          centered
        />

        {/* Impact areas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {impacts.map((impact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="bg-[var(--bg-secondary)] p-8 rounded-lg border-t-4 border-[var(--primary)]"
            >
              <div className="text-[var(--primary)] mb-4">{impact.icon}</div>
              <h3 className="font-neue-kabel font-bold text-xl mb-3">
                {impact.title}
              </h3>
              <p className="font-helvetica text-[var(--text-secondary)]">
                {impact.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Volunteer testimonials carousel - hidden when no testimonials */}
        {!testimonialsLoading && testimonials.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-16 max-w-3xl mx-auto"
          >
            <h3 className="font-neue-kabel font-bold text-2xl mb-8 text-center">
              Volunteer Testimonials
            </h3>
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                  className="bg-[var(--bg-secondary)] p-8 rounded-lg relative"
                >
                  <div className="absolute -top-5 left-8 text-5xl text-[var(--primary)]">
                    &quot;
                  </div>
                  <p className="font-helvetica text-lg italic text-[var(--text-secondary)] mt-6 mb-6">
                    {testimonials[activeTestimonial].quote}
                  </p>
                  <div className="flex items-center">
                    <div className="mr-4">
                      <img
                        src={
                          testimonials[activeTestimonial].image ||
                          `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonials[activeTestimonial].name)}&size=96&background=B22222&color=fff`
                        }
                        alt={`${testimonials[activeTestimonial].name}, ${testimonials[activeTestimonial].role} - Volunteer testimonial for The Black History Foundation`}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-neue-kabel font-bold">
                        {testimonials[activeTestimonial].name}
                      </div>
                      <div className="font-helvetica text-sm text-[var(--text-light)]">
                        {testimonials[activeTestimonial].role}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Dots navigation */}
              <div className="flex justify-center mt-6 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      activeTestimonial === index
                        ? "bg-[var(--primary)] w-8"
                        : "bg-gray-300"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default VolunteerImpact;
