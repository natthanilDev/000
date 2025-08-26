'use client'
import React, { useRef, useEffect, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
}

export default function ScrollReveal({ children, className = '' }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        //   observer.disconnect(); // ถ้าอยากให้เกิดแค่ครั้งเดียว
        }
      },
      { threshold: 0.3 } // ปรับว่ากี่เปอร์เซ็นต์ของ element ถึง trigger
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-1000 ease-out transform ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-30'
      }`}
    >
      {children}
    </div>
  );
}



// 'use client';
// import React, { useEffect, useRef, useState } from 'react';

// export default function ScrollReveal({
//   children,
//   className = '',
// }: {
//   children: React.ReactNode;
//   className?: string;
// }) {
//   const ref = useRef<HTMLDivElement>(null);
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         setVisible(entry.isIntersecting);
//       },
//       { threshold: 0.3 }
//     );

//     if (ref.current) observer.observe(ref.current);
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div
//       ref={ref}
//       className={`${className} transition-all duration-1000 ease-in-out transform ${
//         visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-30'
//       }`}
//     >
//       {children}
//     </div>
//   );
// }
