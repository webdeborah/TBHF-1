"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Button from "../common/Button";
import { Waves } from "../ui/waves-background";
import { useTheme } from "next-themes";

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  // Parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;

      const scrollPosition = window.scrollY;
      const overlayElement = heroRef.current.querySelector(
        ".overlay",
      ) as HTMLElement;
      const contentElement = heroRef.current.querySelector(
        ".content",
      ) as HTMLElement;

      if (overlayElement) {
        overlayElement.style.opacity = (
          0.5 +
          scrollPosition * 0.001
        ).toString();
      }

      if (contentElement) {
        contentElement.style.transform = `translateY(${scrollPosition * 0.3}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative w-full h-screen overflow-hidden bg-[var(--accent-black)]"
    >
      {/* Waves background */}
      <div className="absolute inset-0">
        <Waves
          lineColor={
            theme === "dark"
              ? "rgba(255, 255, 255, 0.15)"
              : "rgba(255, 255, 255, 0.2)"
          }
          backgroundColor="transparent"
          backgroundImage="https://cloud-1de12d.b-cdn.net/media/iW=5000&iH=any/e58b0a2345f56497aaa24fad2967a498/une-photo-numerique-en-plusieur-cadre-regroupant-des-lideurs-noire-homme-et-femme-comme-nelson-mandelamatin-luter-king-et-bien-dautre-aspect-169-style-REALISTIC-.png"
          backgroundOpacity={0.15}
          waveSpeedX={0.015}
          waveSpeedY={0.008}
          waveAmpX={30}
          waveAmpY={15}
          friction={0.95}
          tension={0.008}
          maxCursorMove={100}
          xGap={16}
          yGap={42}
        />
      </div>

      {/* Dark overlay with gradient */}
      <div className="overlay absolute inset-0 bg-gradient-to-b from-[var(--accent-black)] from-10% via-[var(--accent-black)]/70 to-[var(--accent-black)]/90 opacity-50"></div>

      {/* Content */}
      <div className="content relative z-10 container mx-auto h-full flex flex-col justify-center px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl"
        >
          <h1 className="font-neue-kabel font-black text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white leading-tight">
            Save Black History
            <br />
            <span className="text-[var(--secondary)]">
              Protect, Preserve, Empower
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-helvetica mt-6 text-lg md:text-xl text-gray-300 max-w-2xl"
          >
            Black history is at risk of being erased. Join our movement to
            safeguard our past and ensure future generations know their roots.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <Button href="/donate" variant="secondary" size="lg">
              Donate Now
            </Button>
            <Button
              href="/volunteer"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-black"
            >
              Get Involved
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <span className="font-helvetica text-white text-sm mb-2">
          Scroll to explore
        </span>
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="w-6 h-9 border-2 border-white rounded-full flex justify-center pt-1"
        >
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="w-1 h-2 bg-white rounded-full"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
