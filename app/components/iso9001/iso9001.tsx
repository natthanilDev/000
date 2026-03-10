'use client';
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import Iso_btn from "../iso_btn/iso_btn";

import { Image } from "antd";
export default function Iso9001() {
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
              ISO 9001
            </h1>

            <p className="text-iso">
              {lang === ('th')
                ? "มาตรฐานระบบบริหารคุณภาพระดับสากลสำหรับอุตสาหกรรมยานยนต์"
                : lang === ('en')
                  ? "International quality management standard for the automotive industry"
                  : "自動車産業向けの国際的な品質マネジメント規格"}
            </p>

          </motion.div>
        </header>

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




        <motion.div
          className="text-center"
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

          <p className="description-iso max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
            {lang === ('th')
              ? "ISO 9001 คือมาตรฐานสากลสำหรับระบบการจัดการคุณภาพ (Quality Management System: QMS) ที่กำหนดโดยองค์การระหว่างประเทศว่าด้วยการมาตรฐาน (ISO) เพื่อช่วยให้องค์กรสร้างกระบวนการทำงานที่มีคุณภาพ มีการควบคุม และปรับปรุงอย่างต่อเนื่อง เพื่อส่งมอบสินค้าที่มีคุณภาพแก่ลูกค้าอย่างสม่ำเสมอ"
              : lang === ('en')
                ? "ISO 9001 is an international standard for Quality Management Systems (QMS), established by the International Organization for Standardization (ISO). It helps organizations build consistent, controlled, and continuously improving processes to deliver quality products to customers."
                : "ISO 9001は、国際標準化機構（ISO）が制定した品質マネジメントシステム（QMS）の国際規格です。品質の一貫性を確保し、継続的な改善を通じてお客様に高品質な製品を提供するための基盤を提供します。"}
          </p>

        </motion.div>

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
          }}

        >
          <Iso_btn />
        </motion.div>
      </section >
    </>
  );
}
