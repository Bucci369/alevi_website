"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface SimpleCssScrollProps {
  text: string;
  speed?: number;
  className?: string;
}

export function SimpleCssScroll({ text, speed = 30, className }: SimpleCssScrollProps) {
  const repeatedText = Array(10).fill(text).join(" • ");
  
  return (
    <div className="relative w-full overflow-hidden">
      {/* Nach rechts */}
      <div className="w-full overflow-hidden whitespace-nowrap mb-4">
        <div
          className={cn("inline-block animate-scroll-right", className)}
          style={{
            animationDuration: `${speed}s`
          }}
        >
          {repeatedText} • {repeatedText}
        </div>
      </div>
      
      {/* Nach links */}
      <div className="w-full overflow-hidden whitespace-nowrap">
        <div
          className={cn("inline-block animate-scroll-left", className)}
          style={{
            animationDuration: `${speed}s`
          }}
        >
          {repeatedText} • {repeatedText}
        </div>
      </div>
      
      <style jsx>{`
        @keyframes scroll-right {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        
        @keyframes scroll-left {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        
        .animate-scroll-right {
          animation: scroll-right linear infinite;
        }
        
        .animate-scroll-left {
          animation: scroll-left linear infinite;
        }
      `}</style>
    </div>
  );
}