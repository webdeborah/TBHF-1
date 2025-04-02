"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}

const SectionHeading = ({
  subtitle,
  title,
  description,
  centered = false,
  light = false,
}: SectionHeadingProps) => {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      {subtitle && (
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className={`font-neue-kabel font-medium text-sm md:text-base uppercase tracking-wider ${
            light ? "text-[var(--secondary)]" : "text-[var(--primary)]"
          }`}
        >
          {subtitle}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className={`font-neue-kabel font-black text-3xl md:text-4xl lg:text-5xl mt-2 mb-4 ${
          light ? "text-white" : "text-[var(--text-primary)]"
        }`}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className={`font-helvetica text-base md:text-lg max-w-3xl font-medium ${
            centered ? "mx-auto" : ""
          } ${light ? "text-gray-200" : "text-[var(--text-secondary)]"}`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeading;