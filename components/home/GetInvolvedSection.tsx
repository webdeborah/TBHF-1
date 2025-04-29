"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionHeading from "../common/SectionHeading";
import Button from "../common/Button";

const GetInvolvedSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const volunteering = [
    {
      title: "Research Assistant",
      description:
        "Help with historical research, document digitization, and archival work.",
      icon: "📚",
      color: "bg-blue-100",
    },
    {
      title: "Community Outreach",
      description:
        "Organize and participate in community events, workshops, and educational programs.",
      icon: "🤝",
      color: "bg-green-100",
    },
    {
      title: "Digital Content Creator",
      description:
        "Create social media content, videos, or blog posts to promote Black history.",
      icon: "📱",
      color: "bg-purple-100",
    },
    {
      title: "Fundraising Volunteer",
      description:
        "Help with fundraising campaigns, grant writing, and donor relations.",
      icon: "💰",
      color: "bg-amber-100",
    },
  ];

  const testimonials = [
    {
      quote:
        "Volunteering with TBHF has been one of the most rewarding experiences of my life. Knowing that I'm helping preserve our history for future generations gives me a sense of purpose.",
      name: "Michelle Johnson",
      role: "Research Volunteer",
      image: "/images/testimonial-1.jpg",
    },
    {
      quote:
        "As a teacher, I've witnessed firsthand how TBHF's educational materials have transformed my students' understanding of Black history. The foundation is doing vital work.",
      name: "James Wilson",
      role: "Educator & Supporter",
      image: "/images/testimonial-2.jpg",
    },
    {
      quote:
        "I started volunteering to honor my grandparents, but I've gained so much more—knowledge, community, and a deeper connection to my heritage.",
      name: "Alisha Thomas",
      role: "Community Outreach Volunteer",
      image: "/images/testimonial-3.jpg",
    },
  ];

  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const testimonialInterval = useRef<NodeJS.Timeout | null>(null);

  // Auto-advance testimonials
  useEffect(() => {
    if (inView) {
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

  return (
    <section
      ref={ref}
      className="py-16 md:py-24 relative bg-cover bg-center text-white"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url('/images/volunteer-bg.jpg')",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <SectionHeading
          subtitle="Get Involved"
          title="Be a Guardian of Black History"
          description="We need dedicated volunteers to research, document, and share Black history. Your time and skills can make a lasting impact on preserving our heritage."
          centered
          light
        />

        {/* Volunteer opportunities */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {volunteering.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 hover:bg-opacity-20 transition-all border border-white border-opacity-20"
            >
              <div
                className={`w-12 h-12 rounded-full mb-4 flex items-center justify-center text-2xl`}
              >
                {item.icon}
              </div>
              <h3 className="font-neue-kabel font-bold text-xl mb-2">
                {item.title}
              </h3>
              <p className="font-helvetica text-gray-300 mb-4">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20"
        >
          <h3 className="font-neue-kabel font-bold text-2xl mb-8 text-center">
            Volunteer Testimonials
          </h3>

          <div className="relative max-w-3xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-white bg-opacity-5 backdrop-blur-sm rounded-lg p-8 border border-white border-opacity-10"
              >
                <div className="text-center">
                  <div className="mb-6 text-[var(--secondary)] text-4xl">
                    &quot;
                  </div>
                  <p className="font-helvetica text-lg italic mb-6">
                    {testimonials[activeTestimonial].quote}
                  </p>
                  <div className="flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <img
                        src={testimonials[activeTestimonial].image}
                        alt={`${testimonials[activeTestimonial].name}, ${testimonials[activeTestimonial].role} - Volunteer testimonial for The Black History Foundation`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-left">
                      <div className="font-neue-kabel font-bold">
                        {testimonials[activeTestimonial].name}
                      </div>
                      <div className="font-helvetica text-sm text-gray-300">
                        {testimonials[activeTestimonial].role}
                      </div>
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
                      ? "bg-[var(--secondary)] w-8"
                      : "bg-white bg-opacity-50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <Button href="/volunteer" variant="secondary" size="lg">
            Join Our Volunteer Team
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default GetInvolvedSection;
