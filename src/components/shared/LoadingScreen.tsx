"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";

export function LoadingScreen() {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] }
          }}
          className="fixed inset-0 z-[999] bg-ag-white flex flex-col items-center justify-center p-6 overflow-hidden"
        >
          {/* Subtle Background Texture/Grid */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
               style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #B87333 1px, transparent 0)', backgroundSize: '40px 40px' }} />
          
          <div className="relative z-10 flex flex-col items-center">
            <div className="overflow-hidden mb-6">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-5xl md:text-7xl font-display font-semibold tracking-tighter text-ag-black"
              >
                GURUKRIPA
              </motion.h1>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="flex flex-col items-center"
            >
              <span className="text-ag-copper font-mono text-[10px] uppercase tracking-[0.5em] mb-12">
                Surface • Excellence • Heritage
              </span>

              {/* Sophisticated Loading Bar */}
              <div className="w-64 h-[1px] bg-ag-stone/10 relative overflow-hidden">
                <motion.div 
                  initial={{ left: "-100%" }}
                  animate={{ left: "100%" }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                  className="absolute top-0 w-1/2 h-full bg-gradient-to-r from-transparent via-ag-copper to-transparent"
                />
              </div>
            </motion.div>
          </div>

          {/* Bottom Luxury Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="absolute bottom-12 text-center"
          >
            <p className="text-ag-mist/40 italic font-display text-sm">
              "Every slab tells a story of the earth's deep legacy."
            </p>
          </motion.div>

          {/* Decorative Corner Accents */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 2 }}
            className="absolute top-10 left-10 w-20 h-20 border-t border-l border-ag-copper/20" 
          />
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 2 }}
            className="absolute bottom-10 right-10 w-20 h-20 border-b border-r border-ag-copper/20" 
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
