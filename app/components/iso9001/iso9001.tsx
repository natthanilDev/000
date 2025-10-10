'use client';
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Head from "next/head";
import { useEffect } from "react";
import Iso_btn from "../iso_btn/iso_btn";
import Image from "next/image";
import ScrollReveal from "../../components/ScrollReveal/ScrollReveal";

export default function Iso9001() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const [lang, setLang] = useState<'th' | 'en' | 'jp'>('th');

  const images = [
    {
      src: "/iso9001.png",
      alt: "ISO 9001 Certification - International Quality Management Standard",
    },
  ];

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedLang = localStorage.getItem('lang') as 'th' | 'en' | 'jp' | null;
      if (storedLang) setLang(storedLang);
    }
  }, []);

  return (
    <>
      <Head>
        <title> ISO 9001 Certification | International Quality Standards</title>
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
          <ScrollReveal>
            <h1 className="ISO9001 text-center text-3xl font-bold">
              {lang === "th" ? "การรับรองมาตรฐาน ISO 9001" : lang === "en" ? "ISO 9001 Certification" : "ISO 9001認証"}
            </h1>
          </ScrollReveal>
          <ScrollReveal>
            <p className="text-iso text-center text-xl mt-2">
              {lang === "th" ? "มาตรฐานด้านคุณภาพระดับสากลสำหรับอุตสาหกรรมยานยนต์" : lang === "en" ? "International quality standard for the automotive industry" : "自動車産業向けの国際的な品質規格"}
            </p>
          </ScrollReveal>
        </header>

        <div className="line my-4 mx-auto w-20 border-b-2 border-gray-300" />

        {/* Gallery */}
        <ScrollReveal>
          <div className="image-iso-box flex justify-center items-center gap-4 mt-6">
            {images.map((image, index) => (
              <Image
                key={index}
                src={image.src}
                alt={image.alt}
                width={1000}
                height={1000}
                className="rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform duration-300 w-80"
                onClick={() => setSelectedImg(image.src)}
              />
            ))}
          </div>
        </ScrollReveal>

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

        <div className="iso-box-description">
          <ScrollReveal>
            <h2 className="iso-name">ISO 9001</h2>
          </ScrollReveal>
          <ScrollReveal>
            <p className="description-iso">{lang === 'th' ? "ISO 9001 คือมาตรฐานสากลสำหรับระบบการจัดการคุณภาพ (Quality Management System: QMS) ที่กำหนดโดย องค์การระหว่างประเทศว่าด้วยการมาตรฐาน (ISO) เพื่อช่วยให้องค์กรสามารถสร้างกระบวนการทำงานที่มีคุณภาพ ควบคุมได้ และมีการปรับปรุงอย่างต่อเนื่อง" : lang === "en" ? " ISO 9001 is an international standard for Quality Management Systems (QMS) established by the International Organization for Standardization (ISO). It helps organizations create quality-controlled processes and promotes continuous improvement." : "ISO 9001は、国際標準化機構（ISO）が定めた品質マネジメントシステム（QMS）の国際規格です。組織が品質管理されたプロセスを構築し、継続的な改善を促進するのに役立ちます。"}      </p>
          </ScrollReveal>
        </div>

        <ScrollReveal>
          <Iso_btn />
        </ScrollReveal>
      </section>
    </>
  );
}
