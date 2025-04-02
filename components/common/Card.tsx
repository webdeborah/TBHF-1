"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface CardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  image?: string;
  href?: string;
  variant?: "default" | "outlined" | "elevated";
  className?: string;
}

const Card = ({
  title,
  description,
  icon,
  image,
  href,
  variant = "default",
  className = "",
}: CardProps) => {
  const variantClasses = {
    default: "bg-[var(--bg-primary)]",
    outlined: "bg-[var(--bg-primary)] border border-gray-200",
    elevated: "bg-[var(--bg-primary)] shadow-lg",
  };

  const cardContent = (
    <>
      {image && (
        <div className="w-full h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}
      <div className="p-6">
        {icon && <div className="mb-4 text-[var(--primary)]">{icon}</div>}
        <h3 className="font-neue-kabel font-bold text-xl mb-2 text-[var(--text-primary)]">{title}</h3>
        <p className="font-helvetica text-[var(--text-secondary)] font-medium">{description}</p>
      </div>
    </>
  );

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className={`rounded-lg overflow-hidden group ${variantClasses[variant]} ${className}`}
    >
      {href ? (
        <Link href={href} className="block h-full">
          {cardContent}
        </Link>
      ) : (
        cardContent
      )}
    </motion.div>
  );
};

export default Card;