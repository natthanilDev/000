'use client';
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Head from "next/head";

export default function ImageGallery() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const images = [
    {
      src: "/iso9001.png",
      alt: "ISO 9001 Certification - International Quality Management Standard",
    },
  ];

  return (
    <>
      <Head>
        <title>ISO 9001 Certification | International Quality Standards</title>
        <meta
          name="description"
          content="JIEI Thailand is ISO 9001 certified, ensuring international quality standards for automotive rubber parts manufacturing."
        />
        <meta
          name="keywords"
          content="ISO 9001, quality management, JIEI Thailand, automotive rubber parts, international standard"
        />
        <meta property="og:title" content="ISO 9001 Certification - JIEI Thailand" />
        <meta
          property="og:description"
          content="ISO 9001 Certification ensures our commitment to quality in every process."
        />
        <meta property="og:image" content="/iso9001.png" />
        <meta property="og:type" content="website" />
      </Head>

      <section className="p-6">
        <header>
          <h1 className="ISO9001 text-center text-3xl font-bold">
            ISO 9001 Certification
          </h1>
          <p className="text-center text-xl mt-2">
            มาตรฐานด้านคุณภาพระดับสากลสำหรับอุตสาหกรรมยานยนต์
          </p>
        </header>

        <div className="line my-4 mx-auto w-20 border-b-2 border-gray-300" />

        {/* Gallery */}
        <div className="image-iso-box flex justify-center items-center gap-4 mt-6">
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className="rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform duration-300 w-80"
              onClick={() => setSelectedImg(image.src)}
            />
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedImg && (
            <motion.div
              className="show-image fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImg(null)}
            >
              <motion.img
                src={selectedImg}
                alt="ISO 9001 Certificate - JIEI Thailand"
                className="image-iso9001 max-w-3xl rounded-lg shadow-lg"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </>
  );
}
