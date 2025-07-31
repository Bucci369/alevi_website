"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface InfiniteScrollTextProps {
  text: string;
  speed?: number;
  className?: string;
}

export function InfiniteScrollText({ text, speed = 50, className }: InfiniteScrollTextProps) {
  // Mehr Text wiederholen für weicheren Übergang
  const repeatedText = Array(12).fill(text).join(" • ");
  
  return (
    <div className="relative w-full overflow-hidden">
      {/* Nach rechts - endloser Loop */}
      <div className="w-full overflow-hidden whitespace-nowrap mb-4">
        <motion.div
          className={cn("inline-block will-change-transform", className)}
          animate={{ 
            x: ["-25%", "-75%"] 
          }}
          transition={{
            duration: speed,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop"
          }}
        >
          {repeatedText} • {repeatedText} • {repeatedText}
        </motion.div>
      </div>
      
      {/* Nach links - endloser Loop */}
      <div className="w-full overflow-hidden whitespace-nowrap">
        <motion.div
          className={cn("inline-block will-change-transform", className)}
          animate={{ 
            x: ["-75%", "-25%"] 
          }}
          transition={{
            duration: speed,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop"
          }}
        >
          {repeatedText} • {repeatedText} • {repeatedText}
        </motion.div>
      </div>
    </div>
  );
}