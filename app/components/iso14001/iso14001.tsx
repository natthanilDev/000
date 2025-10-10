'use client';
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Head from "next/head";
import Iso_btn from "../iso_btn/iso_btn";
import Image from "next/image";
import ScrollReveal from "../../components/ScrollReveal/ScrollReveal";

export default function Iso14001() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const [lang, setLang] = useState<'th' | 'en' | 'jp'>('th');


  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedLang = localStorage.getItem('lang') as 'th' | 'en' | 'jp' | null;
      if (storedLang) setLang(storedLang);
    }
  }, []);
  const images = [
    {
      src: "/iso14001.png",
      alt: "ISO 14001 Certification - Environmental Management Standard",
    },
  ];

  return (
    <>
      <Head>
        <title>ISO 14001 Certification | Environmental Management Standards</title>
        <meta
          name="description"
          content="JIEI Thailand is ISO 14001 certified, ensuring international standards in environmental management for sustainable automotive manufacturing."
        />
        <meta
          name="keywords"
          content="ISO 14001, environmental management, sustainability, JIEI Thailand, automotive manufacturing"
        />
        <meta property="og:title" content="ISO 14001 Certification - JIEI Thailand" />
        <meta
          property="og:description"
          content="ISO 14001 Certification demonstrates our commitment to environmental responsibility and sustainable production."
        />
        <meta property="og:image" content="/iso14001.png" />
        <meta property="og:type" content="website" />
      </Head>

      <section className="p-6">
        <header>
          <ScrollReveal>
            <h1 className="ISO9001 text-center text-3xl font-bold">
              {lang === "th" ? "การรับรองมาตรฐาน ISO 14001" : lang === "en" ? "ISO 14001 Certification " : "ISO 14001認証"}
            </h1>
          </ScrollReveal>
          <ScrollReveal>
            <p className="text-iso text-center text-xl mt-2">
              {lang === 'en' ? " International standard for environmental management systems" : lang === "jp" ? "環境マネジメントシステムの国際規格" : "มาตรฐานระบบการจัดการสิ่งแวดล้อมระดับสากล"}
            </p>
          </ScrollReveal>
        </header>

        <div className="line my-4 mx-auto w-20 border-b-2 border-gray-300" />

        {/* Gallery */}
        <ScrollReveal>
          <div className="image-iso-box flex justify-center items-center gap-4 mt-6">
            {images.map((image, index) => (
              <Image
                width={1000}
                height={1000}
                priority
                key={index}
                src={image.src}
                alt={image.alt}
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
                alt="ISO 14001 Certificate - JIEI Thailand"
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
            <h2 className="iso-name">ISO 14001</h2>
          </ScrollReveal>
          <ScrollReveal>
            <p className="description-iso">{lang === "th" ? "ISO 14001 คือมาตรฐานสากลสำหรับ ระบบการจัดการสิ่งแวดล้อม (Environmental Management System: EMS) ที่กำหนดโดยองค์การมาตรฐานสากล (ISO) เพื่อให้องค์กรสามารถควบคุมและลดผลกระทบต่อสิ่งแวดล้อมจากการดำเนินงานของตน" : lang === "en" ? "ISO 14001 is an international standard for Environmental Management Systems (EMS) established by the International Organization for Standardization (ISO). It enables organizations to control and reduce the environmental impact of their operations." : " ISO 14001は、国際標準化機構（ISO）が定めた環境マネジメントシステム（EMS）の国際規格です。組織が事業活動による環境への影響を管理し、低減することを可能にします。"} </p>
          </ScrollReveal>
        </div>


        <ScrollReveal>
          <Iso_btn />
        </ScrollReveal>
      </section>
    </>
  );
}
