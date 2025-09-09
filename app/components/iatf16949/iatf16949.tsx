'use client';
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Head from "next/head";
import Iso_btn from "../iso_btn/iso_btn";
import Image from "next/image";
import { useEffect } from "react";
export default function Iatf16949() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const images = [
    {
      src: "/iatf16949(1).png",
      alt: "IATF 16949 Certification - Automotive Quality Management System",
    },
    {
      src: "/iatf16949(2).png",
      alt: "IATF 16949 Certificate - JIEI Thailand",
    },
  ];

  const [lang, setLang] = useState<'th' | 'en' | 'jp'>('th');


  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedLang = localStorage.getItem('lang') as 'th' | 'en' | 'jp' | null;
      if (storedLang) setLang(storedLang);
    }
  }, []);

  return (
    <>
      <Head>
        <title>IATF 16949 Certification | Automotive Quality Standards</title>
        <meta
          name="description"
          content="JIEI Thailand holds IATF 16949 certification, ensuring world-class quality management in automotive parts manufacturing."
        />
        <meta
          name="keywords"
          content="IATF 16949, automotive quality, quality management system, JIEI Thailand, automotive manufacturing standards"
        />
        <meta property="og:title" content="IATF 16949 Certification - JIEI Thailand" />
        <meta
          property="og:description"
          content="IATF 16949 Certification demonstrates our commitment to global automotive quality standards."
        />
        <meta property="og:image" content="/iatf16949(1).png" />
        <meta property="og:type" content="website" />
      </Head>

      <section className="p-6">
        <header>
          <h1 className="ISO9001 text-center text-3xl font-bold">
            {lang === 'th' ? "การรับรองมาตรฐาน IATF 16949" : lang === "en" ? "IATF 16949 Certification" : "IATF 16949認証"}
          </h1>
          <p className="text-iso text-center text-xl mt-2">
            {lang === "th" ? " มาตรฐานระบบบริหารคุณภาพสำหรับอุตสาหกรรมยานยนต์" : lang === "en" ? " Quality management system standard for the automotive industry" : " 自動車産業向けの品質マネジメントシステム規格"}



          </p>
        </header>

        <div className="line my-4 mx-auto w-20 border-b-2 border-gray-300" />

        {/* Gallery */}
        <div className="image-iso-box flex justify-center items-center gap-4 mt-6">
          {images.map((image, index) => (
            <Image
              width={1000}
              height={1000}
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
                alt="IATF 16949 Certificate - JIEI Thailand"
                className="image-iso9001 max-w-3xl rounded-lg shadow-lg"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
              />
            </motion.div>
          )}
        </AnimatePresence>
        <div className="iso-box-description">
          <h2 className="iso-name">IATF 16949</h2>
          <p className="description-iso"> {lang === "th" ? "IATF 16949 คือมาตรฐานระบบการจัดการคุณภาพเฉพาะสำหรับอุตสาหกรรมยานยนต์ กำหนดโดย International Automotive Task Force (IATF) ร่วมกับ ISO โดยอ้างอิงจาก ISO 9001 และเพิ่มข้อกำหนดเฉพาะสำหรับการผลิตชิ้นส่วนยานยนต์และบริการที่เกี่ยวข้อง" : lang === "en" ? "IATF 16949 is a quality management system standard specifically for the automotive industry, established by the International Automotive Task Force (IATF) in collaboration with ISO. It is based on ISO 9001 and includes additional requirements for the production of automotive parts and related services." : "IATF 16949は、自動車産業向けに特化した品質マネジメントシステム規格であり、国際自動車タスクフォース（IATF）がISOと共同で策定しました。この規格はISO 9001を基盤とし、自動車部品の製造および関連サービスに関する追加要件を含んでいます。"}
          </p>
        </div>


        <Iso_btn />
      </section>
    </>
  );
}
