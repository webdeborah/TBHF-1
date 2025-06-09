"use client";

import { ReactNode } from "react";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import { motion } from "framer-motion";

interface CruiseLayoutProps {
  children: ReactNode;
}

const CruiseLayout = ({ children }: CruiseLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-ocean">
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-navy to-transparent opacity-20 z-10"></div>
      <Navbar />

      <main className="flex-grow">
        {/* Wave pattern at the top */}
        <div className="relative">
          <div className="absolute top-0 left-0 w-full h-8 overflow-hidden">
            <motion.div
              className="w-[200%] h-8"
              animate={{
                x: [0, -1000],
              }}
              transition={{
                repeat: Infinity,
                duration: 20,
                ease: "linear",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 120"
                className="h-full w-full fill-primary opacity-20"
              >
                <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
              </svg>
            </motion.div>
          </div>
        </div>

        {children}
      </main>

      <Footer />
    </div>
  );
};

export default CruiseLayout;
