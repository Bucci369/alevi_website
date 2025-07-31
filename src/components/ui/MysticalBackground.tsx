"use client";
import React from "react";
import { SparklesCore } from "@/components/ui/sparkles";

interface MysticalBackgroundProps {
  children: React.ReactNode;
}

export function MysticalBackground({ children }: MysticalBackgroundProps) {
  return (
    <div className="min-h-screen relative w-full bg-black overflow-hidden">
      {/* Deep Space Background with Nebula Clouds */}
      <div className="absolute inset-0 bg-black">
        {/* Purple Nebula Clouds */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-900/30 rounded-full blur-3xl opacity-60 animate-pulse"></div>
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-violet-800/20 rounded-full blur-3xl opacity-50 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-indigo-900/25 rounded-full blur-3xl opacity-40 animate-pulse" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-purple-700/15 rounded-full blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '6s' }}></div>
        <div className="absolute bottom-1/4 right-0 w-88 h-88 bg-violet-900/20 rounded-full blur-3xl opacity-45 animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        {/* Additional smaller nebula patches */}
        <div className="absolute top-1/3 left-1/4 w-48 h-48 bg-purple-600/10 rounded-full blur-2xl opacity-25 animate-pulse" style={{ animationDelay: '3s' }}></div>
        <div className="absolute bottom-1/3 right-1/3 w-56 h-56 bg-indigo-700/15 rounded-full blur-2xl opacity-35 animate-pulse" style={{ animationDelay: '5s' }}></div>
      </div>

      {/* Sparkles Background */}
      <div className="w-full absolute inset-0 h-full">
        <SparklesCore
          id="mystical-sparkles"
          background="transparent"
          minSize={0.6}
          maxSize={2}
          particleDensity={80}
          className="w-full h-full"
          particleColor="#ffffff"
          speed={0.5}
        />
      </div>

      {/* Moon Crescent */}
      <div className="absolute top-20 right-10 z-10">
        <div className="relative w-24 h-24 md:w-32 md:h-32">
          {/* Moon glow */}
          <div className="absolute inset-0 bg-yellow-200/20 rounded-full blur-xl animate-pulse"></div>
          {/* Moon crescent */}
          <div className="relative w-full h-full">
            <div className="w-full h-full bg-yellow-50/95 rounded-full shadow-2xl"></div>
            <div className="absolute top-2 right-2 w-5/6 h-5/6 bg-black rounded-full"></div>
          </div>
          {/* Moon rays */}
          <div className="absolute -inset-8">
            <div className="w-full h-full opacity-30">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-px h-6 bg-gradient-to-t from-transparent to-yellow-200"
                  style={{
                    top: '50%',
                    left: '50%',
                    transformOrigin: 'bottom',
                    transform: `translate(-50%, -100%) rotate(${i * 45}deg)`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Additional mystical elements - distant stars */}
      <div className="absolute top-1/4 left-10 w-1 h-1 bg-white rounded-full animate-pulse opacity-70"></div>
      <div className="absolute top-1/3 right-1/4 w-0.5 h-0.5 bg-blue-100 rounded-full animate-pulse opacity-60"></div>
      <div className="absolute bottom-1/4 left-1/4 w-1.5 h-1.5 bg-white rounded-full animate-pulse opacity-50"></div>
      <div className="absolute bottom-1/3 right-10 w-0.5 h-0.5 bg-purple-100 rounded-full animate-pulse opacity-40"></div>
      <div className="absolute top-2/3 left-1/2 w-1 h-1 bg-white rounded-full animate-pulse opacity-60"></div>
      <div className="absolute top-1/6 right-1/3 w-0.5 h-0.5 bg-blue-50 rounded-full animate-pulse opacity-50"></div>

      {/* Deep space gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-20">
        {children}
      </div>
    </div>
  );
}
