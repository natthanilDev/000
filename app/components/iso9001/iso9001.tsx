'use client';
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Head from "next/head";
import Iso_btn from "../iso_btn/iso_btn";
import Image from "next/image";
import ScrollReveal from "../../components/ScrollReveal/ScrollReveal";

export default function Iso9001() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const [lang, setLang] = useState<'th' | 'en' | 'jp'>('th');

  const images = [
    {
      src: "/iso9001.png",
      alt: "ISO 9001 Certification - International Quality Management Standard by JIEI Thailand",
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
        {/* 🔹 Basic SEO */}
        <title>ISO 9001 Certification | JIEI Thailand - Quality Management Standard</title>
        <meta name="description" content="JIEI Thailand Co., Ltd. is ISO 9001 certified, ensuring international quality management standards in automotive rubber parts manufacturing located in Chonburi, Thailand." />
        <meta name="keywords" content="ISO 9001, Quality Management, Automotive Rubber Parts, JIEI Thailand, Chonburi Manufacturer, Quality Standard, IATF 16949, Automotive Industry Thailand" />
        <link rel="canonical" href="https://www.jiei-thai.co.th/iso9001" />
        <meta property="og:title" content="ISO 9001 Certification - JIEI Thailand" />
        <meta property="og:description" content="ISO 9001 Certification demonstrates JIEI Thailand’s commitment to international quality management standards for automotive parts." />
        <meta property="og:image" content="/iso9001.png" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="JIEI Thailand Co., Ltd." />
        <meta property="og:locale" content="th_TH" />
        <meta property="og:locale:alternate" content="en_US" />
        <meta property="og:locale:alternate" content="ja_JP" />

        {/* 🔹 Alternate Languages */}
        <link rel="alternate" hrefLang="th" href="https://www.jiei-thai.co.th/iso9001" />
        <link rel="alternate" hrefLang="en" href="https://www.jiei-thai.co.th/en/iso9001" />
        <link rel="alternate" hrefLang="ja" href="https://www.jiei-thai.co.th/jp/iso9001" />

        {/* 🔹 Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* 🔹 Schema.org (Organization + Breadcrumbs) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "JIEI Thailand Co., Ltd.",
              url: "https://www.jiei-thai.co.th",
              logo: "https://www.jiei-thai.co.th/jiei-thailand-logo.png",
              sameAs: [
                "https://www.facebook.com/jieithailand",
                "https://www.linkedin.com/company/jiei-thailand"
              ],
              contactPoint: [{
                "@type": "ContactPoint",
                telephone: "+66-33-136581-4",
                contactType: "Customer Service",
                availableLanguage: ["Thai", "English", "Japanese"]
              }],
              address: {
                "@type": "PostalAddress",
                streetAddress: "180/3 Moo 6, T. Bueng, A. Sriracha",
                addressLocality: "Chonburi",
                postalCode: "20230",
                addressCountry: "TH"
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://www.jiei-thai.co.th/"
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "ISO 9001 Certification",
                  item: "https://www.jiei-thai.co.th/iso9001"
                }
              ]
            })
          }}
        />
      </Head>

      <section className="p-6">
        <header>
          <ScrollReveal>
            <h1 className="ISO9001 text-center text-3xl font-bold">
              {lang===('th')
                ? "การรับรองมาตรฐาน ISO 9001"
                : lang===('en')
                  ? "ISO 9001 Certification"
                  : "ISO 9001認証"}
            </h1>
          </ScrollReveal>
          <ScrollReveal>
            <p className="text-iso text-center text-xl mt-2">
              {lang===('th')
                ? "มาตรฐานระบบบริหารคุณภาพระดับสากลสำหรับอุตสาหกรรมยานยนต์"
                : lang===('en')
                  ? "International quality management standard for the automotive industry"
                  : "自動車産業向けの国際的な品質マネジメント規格"}
            </p>
          </ScrollReveal>
        </header>

        <div className="line my-4 mx-auto w-20 border-b-2 border-gray-300" />

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
                priority={index === 0}
                loading={index === 0 ? "eager" : "lazy"}
              />
            ))}
          </div>
        </ScrollReveal>

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

        <div className="iso-box-description mt-8 text-center">
          <ScrollReveal delay={0.8}>
            <motion.h2
              className="iso-name text-2xl font-semibold text-gray-800 mb-3"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              ISO 9001
            </motion.h2>
          </ScrollReveal>

          <ScrollReveal delay={1}>
            <motion.p
              className="description-iso max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              {lang===('th')
                ? "ISO 9001 คือมาตรฐานสากลสำหรับระบบการจัดการคุณภาพ (Quality Management System: QMS) ที่กำหนดโดยองค์การระหว่างประเทศว่าด้วยการมาตรฐาน (ISO) เพื่อช่วยให้องค์กรสร้างกระบวนการทำงานที่มีคุณภาพ มีการควบคุม และปรับปรุงอย่างต่อเนื่อง เพื่อส่งมอบสินค้าที่มีคุณภาพแก่ลูกค้าอย่างสม่ำเสมอ"
                : lang===('en')
                  ? "ISO 9001 is an international standard for Quality Management Systems (QMS), established by the International Organization for Standardization (ISO). It helps organizations build consistent, controlled, and continuously improving processes to deliver quality products to customers."
                  : "ISO 9001は、国際標準化機構（ISO）が制定した品質マネジメントシステム（QMS）の国際規格です。品質の一貫性を確保し、継続的な改善を通じてお客様に高品質な製品を提供するための基盤を提供します。"}
            </motion.p>
          </ScrollReveal>
        </div>

        <ScrollReveal>
          <Iso_btn />
        </ScrollReveal>
      </section >
    </>
  );
}
