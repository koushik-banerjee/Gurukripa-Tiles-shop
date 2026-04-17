"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";

export function LoadingScreen() {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[999] bg-ag-white flex flex-col items-center justify-center p-6 overflow-hidden"
        >
          {/* Subtle Pattern */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, #B87333 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />

          {/* Center Content */}
          <div className="relative z-10 flex flex-col items-center text-center">

            {/* Brand */}
            <div className="overflow-hidden mb-6">
              <motion.h1
                initial={{ y: "120%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl sm:text-5xl md:text-7xl font-display font-semibold tracking-tight text-ag-black"
              >
                GURUKRIPA
              </motion.h1>
            </div>

            {/* Tagline */}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-ag-copper font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.45em] mb-10"
            >
              Surface • Excellence • Heritage
            </motion.span>

            {/* Loading Bar */}
            <div className="w-48 sm:w-64 h-[1px] bg-ag-stone/20 relative overflow-hidden">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "200%" }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  willChange: "transform",
                  transform: "translateZ(0)",
                }}
                className="absolute top-0 w-1/2 h-full bg-gradient-to-r from-transparent via-ag-copper to-transparent"
              />
            </div>
          </div>

          {/* Bottom Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="absolute bottom-10 text-center px-6"
          >
            <p className="text-ag-mist/50 italic font-display text-xs sm:text-sm">
              "Every slab tells a story of the earth's deep legacy."
            </p>
          </motion.div>

          {/* Corner Accents (Thicker Copper Lines) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1.5 }}
            className="absolute top-8 left-8 w-16 sm:w-20 h-16 sm:h-20 border-t-2 border-l-2 border-ag-copper/50"
          />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1.5 }}
            className="absolute bottom-8 right-8 w-16 sm:w-20 h-16 sm:h-20 border-b-2 border-r-2 border-ag-copper/50"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}