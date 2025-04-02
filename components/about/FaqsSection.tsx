"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionHeading from "../common/SectionHeading";

const FaqsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is the 'Save Black History' campaign?",
      answer: "The Save Black History Fundraising Campaign is a Call To Action to Preserve, Protect, and Promote African history and heritage. This campaign aims to raise $5M over the next two years to ensure that The Black History Foundation (TBHF) successfully implements its Roadmap to Direct Services for 2025 by securing the necessary financial resources to sustain and scale its programs."
    },
    {
      question: "How can I get involved as a volunteer?",
      answer: "You can sign up to volunteer to research historical records, assist with community outreach, support fundraising efforts, or lend your skills in education, technology, or media. Visit our Volunteer page to learn about current opportunities and complete an application form."
    },
    {
      question: "Where does my donation go?",
      answer: "Your donation goes to support the Roadmap of Direct Services that covers Educational Programs, Technology-Based Solutions, Cultural Preservation Efforts, and Community Engagement and Sustainability. We provide transparent reporting on how funds are allocated and the impact they create."
    },
    {
      question: "Do you accept all types of payments?",
      answer: "Yes, we accept various forms of payments, including credit cards, debit cards, PayPal, bank transfers, and other common payment methods. We additionally accept leading cryptocurrencies so we can show our transparency in use of donations."
    },
    {
      question: "Do you accept cryptocurrency donations?",
      answer: "Yes, we accept cryptocurrency donations, including USDT, Bitcoin (BTC), Ethereum (ETH), and other major cryptocurrencies. Visit our Donate page for details on how to make a crypto donation."
    },
    {
      question: "Is my donation tax-deductible?",
      answer: "Yes, The Black History Foundation is a registered 501(c)(3) nonprofit, and all donations are tax-deductible to the extent allowed by law. You will receive a tax receipt for your donation."
    },
    {
      question: "How can educational institutions partner with TBHF?",
      answer: "Educational institutions can partner with us through our curriculum development program, teacher training workshops, student engagement initiatives, or by hosting exhibitions and events. Contact us through our Partnership form to discuss collaboration opportunities."
    },
    {
      question: "Do you offer internship or fellowship opportunities?",
      answer: "Yes, we offer internships for college students and recent graduates, as well as fellowships for researchers and professionals in relevant fields. These positions are posted on our Careers page when available, typically with application periods in spring and fall."
    }
  ];

  return (
    <section id="faqs" ref={ref} className="py-16 md:py-24 bg-[var(--bg-secondary)]">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionHeading
          subtitle="Common Questions"
          title="Frequently Asked Questions"
          description="Find answers to commonly asked questions about The Black History Foundation, our programs, and how you can get involved."
          centered
        />
        
        <div className="mt-12 max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: 0.2 + (index * 0.1) }}
              className="mb-4"
            >
              <button
                onClick={() => toggleFaq(index)}
                className={`w-full text-left p-5 rounded-lg flex justify-between items-center transition-all ${
                  openIndex === index
                    ? "bg-[var(--primary)] text-white"
                    : "bg-white hover:bg-gray-100"
                }`}
              >
                <span className="font-neue-kabel font-bold text-lg pr-8">{faq.question}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 flex-shrink-0 transition-transform ${
                    openIndex === index ? "transform rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-5 bg-white border border-gray-200 border-t-0 rounded-b-lg">
                      <p className="font-helvetica text-[var(--text-secondary)]">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="font-helvetica text-[var(--text-secondary)] mb-6">
            Can't find the answer you're looking for? Feel free to reach out directly.
          </p>
          <a
            href="/contact"
            className="inline-block font-helvetica font-bold bg-[var(--primary)] text-white px-6 py-3 rounded-md hover:bg-[var(--primary-dark)] transition-colors"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FaqsSection;