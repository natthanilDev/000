'use client';
import React, { useRef, useEffect, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // เพิ่ม delay สำหรับแต่ละ element
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale'; // เพิ่มทิศทาง
}

export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  direction = 'down',
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  const directionClasses = {
    up: 'translate-y-10',
    down: '-translate-y-10',
    left: 'translate-x-10',
    right: '-translate-x-10',
    scale: 'scale-95',
  }[direction];

  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] transform ${
        visible
          ? 'opacity-100 translate-x-0 translate-y-0 scale-100'
          : `opacity-0 ${directionClasses}`
      }`}
    >
      {children}
    </div>
  );
}
