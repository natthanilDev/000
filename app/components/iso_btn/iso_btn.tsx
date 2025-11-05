'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function IsoBtn() {
  const buttons = [
    { href: '/iso9001', label: 'ISO 9001' },
    { href: '/iso14001', label: 'ISO 14001' },
    { href: '/iatf16949', label: 'IATF 16949' },
  ];

  return (
    <div className="iso_button flex justify-center mt-8">
      <nav aria-label="ISO Certification Navigation" className="iso-box-why-choose flex gap-4 flex-wrap justify-center">
        {buttons.map((btn, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 300, damping: 15 }}
          >
            <Link href={btn.href} className="btn-iso">
              {btn.label}
            </Link>
            
          </motion.div>
        ))}
      </nav>
    </div>
  );
}
