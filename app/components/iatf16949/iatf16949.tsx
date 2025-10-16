'use client';
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
        {/* 🔹 Basic SEO */}
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

        {/* 🔹 Open Graph */}
        <meta property="og:title" content="IATF 16949 Certification | JIEI Thailand" />
        <meta property="og:description" content="Certified IATF 16949 automotive rubber parts manufacturer in Chonburi, Thailand." />
        <meta property="og:image" content="/iatf16949(1).png" />
        <meta property="og:url" content="https://www.jiei-thai.co.th/iatf16949" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="JIEI Thailand Co., Ltd." />
        <meta property="og:locale" content="th_TH" />
        <meta property="og:locale:alternate" content="en_US" />
        <meta property="og:locale:alternate" content="ja_JP" />

        {/* 🔹 Alternate Languages */}
        <link rel="alternate" hrefLang="th" href="https://www.jiei-thai.co.th/iatf16949" />
        <link rel="alternate" hrefLang="en" href="https://www.jiei-thai.co.th/en/iatf16949" />
        <link rel="alternate" hrefLang="ja" href="https://www.jiei-thai.co.th/jp/iatf16949" />

        {/* 🔹 Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* 🔹 Schema.org Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "JIEI Thailand",
              url: "https://www.jiei-thai.co.th",
              logo: "https://www.jiei-thai.co.th/logo.png",
              description: "IATF 16949 Certified Automotive Rubber Parts Manufacturer in Chonburi, Thailand.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Pinthong 4 Industrial Estate, Unit G18, 180/3 Moo 6",
                addressLocality: "Si Racha",
                addressRegion: "Chonburi",
                postalCode: "20230",
                addressCountry: "TH"
              },
              sameAs: [
                "https://www.facebook.com/jieithailand",
                "https://www.linkedin.com/company/jiei-thailand/"
              ],
              hasCertification: {
                "@type": "CreativeWork",
                name: "IATF 16949",
                description: "Automotive Quality Management System Certification"
              }
            })
          }}
        />
        {/* 🔹 Breadcrumb */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://www.jiei-thai.co.th/" },
                { "@type": "ListItem", position: 2, name: "IATF 16949 Certification", item: "https://www.jiei-thai.co.th/iatf16949" }
              ]
            })
          }}
        />
      </Head>

      <section className="p-6">
        <header>
          <ScrollReveal>
            <h1 className="ISO9001 text-center text-3xl font-bold">
              {lang === 'th' ? "การรับรองมาตรฐาน IATF 16949" :
               lang === "en" ? "IATF 16949 Certification" :
               "IATF 16949認証"}
            </h1>
          </ScrollReveal>

          <ScrollReveal>
            <p className="text-iso text-center text-xl mt-2">
              {lang === "th"
                ? "มาตรฐานระบบบริหารคุณภาพระดับโลกสำหรับอุตสาหกรรมยานยนต์ โดย JIEI Thailand ผู้ผลิตชิ้นส่วนยางรถยนต์ชั้นนำในจังหวัดชลบุรี"
                : lang === "en"
                ? "Global automotive quality management standard achieved by JIEI Thailand, a leading rubber parts manufacturer in Chonburi."
                : "JIEI Thailandは、チョンブリにある自動車用ゴム部品メーカーであり、IATF 16949品質マネジメントシステムを取得しています。"}
            </p>
          </ScrollReveal>
        </header>

        <div className="line my-4 mx-auto w-20 border-b-2 border-gray-300" />

        {/* Gallery */}
        <ScrollReveal>
          <div className="image-iso-box">
            {images.map((image, index) => (
              <Image
                width={1000}
                height={1000}
                priority={index === 0}
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
                alt="IATF 16949 Certificate - JIEI Thailand"
                className="image-iso9001 max-w-3xl rounded-lg shadow-lg"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Description */}
        <div className="iso-box-description">
          <ScrollReveal>
            <h2 className="iso-name">IATF 16949</h2>
          </ScrollReveal>
          <ScrollReveal>
            <p className="description-iso">
              {lang === "th"
                ? "JIEI Thailand ได้รับการรับรองมาตรฐาน IATF 16949 ซึ่งเป็นมาตรฐานระบบการจัดการคุณภาพสำหรับอุตสาหกรรมยานยนต์ ช่วยยืนยันถึงคุณภาพ ความปลอดภัย และความน่าเชื่อถือของชิ้นส่วนยางรถยนต์ที่ผลิตในประเทศไทย"
                : lang === "en"
                ? "JIEI Thailand is certified with IATF 16949, ensuring excellence in automotive quality management, product reliability, and continuous improvement in our rubber parts manufacturing process."
                : "JIEI ThailandはIATF 16949認証を取得しており、自動車用ゴム部品の品質、信頼性、継続的な改善を保証しています。"}
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal>
          <Iso_btn />
        </ScrollReveal>
      </section>
    </>
  );
}
