"use client";

import React, { useEffect, useRef, useState } from 'react';

interface CounterProps {
  start?: number;
  end: number | string;
  duration?: number;
  label: string;
  delay?: number;
}

export function Counter({ start = 0, end, duration = 2000, label, delay = 0 }: CounterProps) {
  const [count, setCount] = useState(start);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [delay, isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const startValue = start;
    const endValue = typeof end === 'string' ? parseInt((end as string).replace(/\D/g, '')) : end;
    
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(startValue + (endValue - startValue) * easeOutQuart);
      
      setCount(currentCount);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(endValue);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, start, end, duration]);

  const formatNumber = (num: number) => {
    if (typeof end === 'string' && (end as string).includes('+')) {
      return `${num.toLocaleString('de-DE')}+`;
    }
    return num.toLocaleString('de-DE');
  };

  return (
    <div ref={counterRef} className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
        {formatNumber(count)}
      </div>
      <div className="text-sm md:text-base text-gray-600 font-medium">
        {label}
      </div>
    </div>
  );
}
