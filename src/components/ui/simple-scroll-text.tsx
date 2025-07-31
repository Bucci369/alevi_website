"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SimpleScrollTextProps {
  text: string;
  speed?: number;
  className?: string;
}

export function SimpleScrollText({ text, speed = 50, className }: SimpleScrollTextProps) {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Nach rechts */}
      <div className="w-full overflow-hidden whitespace-nowrap mb-4">
        <motion.div
          className={cn("inline-block", className)}
          animate={{
            x: ["-100%", "100%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: speed,
              ease: "linear",
            },
          }}
        >
          {text} • {text} • {text} • {text} • {text} •
        </motion.div>
      </div>
      
      {/* Nach links */}
      <div className="w-full overflow-hidden whitespace-nowrap">
        <motion.div
          className={cn("inline-block", className)}
          animate={{
            x: ["100%", "-100%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: speed,
              ease: "linear",
            },
          }}
        >
          {text} • {text} • {text} • {text} • {text} •
        </motion.div>
      </div>
    </div>
  );
}