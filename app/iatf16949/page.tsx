 'use client';
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ImageGallery() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const images = [
    "/iatf16949(1).png",
    "/iatf16949(2).png",

    
  ];

  return (
    <div className="p-6">
      <div><h1 className="ISO9001">IATF16949</h1></div>
      <div className="line" />
      {/* Gallery */}
      <div className="image-iso-box flex justify-center align-center">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Gallery ${index}`}
            className="rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform duration-300"
            onClick={() => setSelectedImg(src)}
          />
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            className="show-image bg-opacity-70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
          >
            <motion.img
              src={selectedImg}
              alt="Preview"
              className="image-iso9001 "
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
