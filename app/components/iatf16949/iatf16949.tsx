'use client'
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Head from "next/head";
import Iso_btn from "../iso_btn/iso_btn";
import Image from "next/image";
import ScrollReveal from "../../components/ScrollReveal/ScrollReveal";

export default function Iatf16949() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const [lang, setLang] = useState<'th' | 'en' | 'jp'>('th');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedLang = localStorage.getItem('lang') as 'th' | 'en' | 'jp' | null;
      if (storedLang) setLang(storedLang);
    }
  }, []);

  const images = [
    { src: "/iatf16949(1).png", alt: "IATF 16949 Certification - Automotive Quality Management System" },
    { src: "/iatf16949(2).png", alt: "IATF 16949 Certificate - JIEI Thailand" },
  ];

  return (
    <>
      <Head>
        <title>IATF 16949 Certification | JIEI Thailand – Automotive Rubber Parts Manufacturer</title>
        <meta
          name="description"
          content="JIEI Thailand, a leading automotive rubber parts manufacturer in Chonburi, is certified under IATF 16949 – ensuring world-class quality management, product reliability, and continuous improvement."
        />
        <meta
          name="keywords"
          content="IATF 16949, automotive quality Thailand, JIEI Thailand, automotive rubber parts, Chonburi factory, ISO certification, quality management system, automotive supplier"
        />
        <link rel="canonical" href="https://www.jiei-thai.co.th/iatf16949" />
      </Head>

      <section className="p-6">
        <header>
          <ScrollReveal delay={0.2}>
            <motion.h1
              className="ISO9001 text-center text-3xl font-bold tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              {lang === 'th' ? "การรับรองมาตรฐาน IATF 16949"
                : lang === 'en' ? "IATF 16949 Certification"
                : "IATF 16949認証"}
            </motion.h1>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <motion.p
              className="text-iso text-center text-xl mt-3 text-gray-600"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              {lang === 'th'
                ? "มาตรฐานระบบบริหารคุณภาพระดับโลกสำหรับอุตสาหกรรมยานยนต์ โดย JIEI Thailand ผู้ผลิตชิ้นส่วนยางรถยนต์ชั้นนำในจังหวัดชลบุรี"
                : lang === 'en'
                ? "Global automotive quality management standard achieved by JIEI Thailand, a leading rubber parts manufacturer in Chonburi."
                : "JIEI Thailandは、チョンブリにある自動車用ゴム部品メーカーであり、IATF 16949品質マネジメントシステムを取得しています。"}
            </motion.p>
          </ScrollReveal>
        </header>

        <div className="line my-4 mx-auto w-20 border-b-2 border-gray-300" />

        {/* Gallery */}
        <ScrollReveal delay={0.6}>
          <motion.div
            className="image-iso-box flex flex-wrap justify-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            {images.map((image, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.04 }}
                transition={{ type: "spring", stiffness: 120 }}
              >
                <Image
                  width={1000}
                  height={1000}
                  priority={index === 0}
                  src={image.src}
                  alt={image.alt}
                  className="rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-500 w-80 cursor-pointer"
                  onClick={() => setSelectedImg(image.src)}
                />
              </motion.div>
            ))}
          </motion.div>
        </ScrollReveal>

        {/* Modal (ละมุนขั้นเทพ) */}
        <AnimatePresence>
          {selectedImg && (
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImg(null)}
            >
              <motion.img
                src={selectedImg}
                alt="IATF 16949 Certificate - JIEI Thailand"
                className="max-w-3xl rounded-xl shadow-2xl border border-gray-700"
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Description */}
        <div className="iso-box-description mt-8 text-center">
          <ScrollReveal delay={0.8}>
            <motion.h2
              className="iso-name text-2xl font-semibold text-gray-800 mb-3"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              IATF 16949
            </motion.h2>
          </ScrollReveal>

          <ScrollReveal delay={1}>
            <motion.p
              className="description-iso max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              {lang === 'th'
                ? "JIEI Thailand ได้รับการรับรองมาตรฐาน IATF 16949 ซึ่งเป็นมาตรฐานระบบการจัดการคุณภาพสำหรับอุตสาหกรรมยานยนต์ ช่วยยืนยันถึงคุณภาพ ความปลอดภัย และความน่าเชื่อถือของชิ้นส่วนยางรถยนต์ที่ผลิตในประเทศไทย"
                : lang === 'en'
                ? "JIEI Thailand is certified with IATF 16949, ensuring excellence in automotive quality management, product reliability, and continuous improvement in our rubber parts manufacturing process."
                : "JIEI ThailandはIATF 16949認証を取得しており、自動車用ゴム部品の品質、信頼性、継続的な改善を保証しています。"}
            </motion.p>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={1.2}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <Iso_btn />
          </motion.div>
        </ScrollReveal>
      </section>
    </>
  );
}
