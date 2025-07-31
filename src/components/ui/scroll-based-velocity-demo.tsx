"use client";
import { VelocityScroll } from "@/components/ui/scroll-based-velocity";
import { cn } from "@/lib/utils";
import React from "react";

export function ScrollBasedVelocityDemo() {
  return (
    <div className="min-h-[200vh] w-full relative">
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-full max-w-5xl mx-auto p-4">
          <div
            className={cn(
              "rounded-xl w-full h-[500px]",
              "border border-neutral-200 dark:border-neutral-800",
              "bg-neutral-100/50 dark:bg-neutral-900/50 backdrop-blur-sm",
              "flex items-center justify-center"
            )}
          >
            <VelocityScroll
              text="Sevgi • Hoşgörü • Adalet • Liebe • Toleranz • Gerechtigkeit"
              default_velocity={3}
              className="font-display text-center text-2xl font-bold tracking-[-0.02em] text-gray-800 drop-shadow-sm dark:text-white md:text-4xl md:leading-[3rem] pointer-events-auto"
            />
          </div>
        </div>
      </div>

      <div className="h-[200vh]" aria-hidden="true" />
    </div>
  );
}