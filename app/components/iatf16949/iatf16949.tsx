'use client'
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import Iso_btn from "../iso_btn/iso_btn";
import { Image } from "antd";
import ScrollReveal from "../../components/ScrollReveal/ScrollReveal";

export default function Iatf16949() {
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

      <section className="iso-doc">
        <header>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 18,
              mass: 0.8
            }}
          >
            <h1 className="ISO">
              IATF 16949
            </h1>

            <p className="text-iso">
              {lang === 'th'
                ? "มาตรฐานระบบบริหารคุณภาพระดับโลกสำหรับอุตสาหกรรมยานยนต์"
                : lang === 'en'
                  ? "Global quality management system standard for the automotive industry"
                  : "自動車産業向けの国際的な品質管理システム標準"}
            </p>
          </motion.div>
        </header>


        {/* Gallery */}
        <motion.div
          className="image-iso-box-iso-page"
          initial={{ opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{
            type: "spring",
            stiffness: 80,
            damping: 18,
            mass: 0.8
          }}

        >
          {images.map((image, index) => (
            <Image
              key={index}
              src={image.src}
              alt={image.alt}
              className="image-iso-doc"
              loading={index === 0 ? "eager" : "lazy"}
            />
          ))}

        </motion.div>


        <div className="iso-box-description mt-8 text-center">


          <ScrollReveal delay={1}>
            <motion.p
              className="description-iso max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              {lang === 'th'
                ? "เป็นมาตรฐานระบบการจัดการคุณภาพสำหรับอุตสาหกรรมยานยนต์ ช่วยยืนยันถึงคุณภาพ ความปลอดภัย และความน่าเชื่อถือของชิ้นส่วนยางรถยนต์ที่ผลิตในประเทศไทย"
                : lang === 'en'
                  ? "It is a quality management system standard for the automotive industry, ensuring the quality, safety, and reliability of automotive rubber parts manufactured in Thailand."
                  : "これは自動車産業向けの品質管理システムの標準であり、タイで製造された自動車用ゴム部品の品質、安全性、信頼性を保証します。"}
            </motion.p>
          </ScrollReveal>
        </div>

        <motion.div
          className="btn-iso-nav"
          initial={{ opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{
            type: "spring",
            stiffness: 80,
            damping: 18,
            mass: 0.8
          }}>
          <Iso_btn />
        </motion.div>
      </section>
    </>
  );
}
