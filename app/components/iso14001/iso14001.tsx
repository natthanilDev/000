'use client';
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import Iso_btn from "../iso_btn/iso_btn";
import { Image } from "antd";

export default function Iso14001() {
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
      alt: "ISO 14001 Certification - Environmental Management Standard by JIEI Thailand",
    },
  ];

  return (
    <>
      <Head>
        {/* 🔹 Basic SEO */}
        <title>ISO 14001 Certification | JIEI Thailand - Environmental Management</title>
        <meta
          name="description"
          content="JIEI Thailand Co., Ltd. is ISO 14001 certified, meeting international environmental management standards for sustainable automotive parts manufacturing in Chonburi, Thailand."
        />
        <meta
          name="keywords"
          content="ISO 14001, Environmental Management System, EMS, Sustainability, Green Manufacturing, JIEI Thailand, Automotive Industry, Chonburi Manufacturer"
        />

        {/* 🔹 Canonical */}
        <link rel="canonical" href="https://www.jiei-thai.co.th/iso14001" />

        {/* 🔹 Open Graph */}
        <meta property="og:title" content="ISO 14001 Certification - JIEI Thailand" />
        <meta
          property="og:description"
          content="ISO 14001 Certification demonstrates JIEI Thailand’s commitment to sustainable and environmentally responsible manufacturing."
        />
        <meta property="og:image" content="/iso14001.png" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="JIEI Thailand Co., Ltd." />
        <meta property="og:locale" content="th_TH" />
        <meta property="og:locale:alternate" content="en_US" />
        <meta property="og:locale:alternate" content="ja_JP" />

        {/* 🔹 Alternate Languages */}
        <link rel="alternate" hrefLang="th" href="https://www.jiei-thai.co.th/iso14001" />
        <link rel="alternate" hrefLang="en" href="https://www.jiei-thai.co.th/en/iso14001" />
        <link rel="alternate" hrefLang="ja" href="https://www.jiei-thai.co.th/jp/iso14001" />

        {/* 🔹 Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* 🔹 Schema.org (Organization + BreadcrumbList) */}
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
                  name: "ISO 14001 Certification",
                  item: "https://www.jiei-thai.co.th/iso14001"
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
            <h1 className="ISO9001 text-center text-3xl font-bold">
              ISO 14001
            </h1>
          </motion.div>

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
            <p className="text-iso text-center text-xl mt-2">
              {lang === ('th')
                ? "มาตรฐานระบบการจัดการสิ่งแวดล้อมระดับสากล"
                : lang === ('en')
                  ? "International standard for environmental management systems"
                  : "環境マネジメントシステムの国際規格"}
            </p>
          </motion.div>
        </header>


        {/* ✅ Gallery */}
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
            <p className="description-iso max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
              {lang === ('th')
                ? "ISO 14001 คือมาตรฐานสากลสำหรับระบบการจัดการสิ่งแวดล้อม (Environmental Management System: EMS) ที่กำหนดโดยองค์การมาตรฐานสากล (ISO) เพื่อให้องค์กรสามารถควบคุมและลดผลกระทบต่อสิ่งแวดล้อมจากการดำเนินงานของตนอย่างมีประสิทธิภาพ ส่งเสริมความยั่งยืนในระยะยาว"
                : lang === ('en')
                  ? "ISO 14001 is an international standard for Environmental Management Systems (EMS) established by the International Organization for Standardization (ISO). It enables organizations to systematically control and reduce environmental impact, ensuring sustainable development and responsible production."
                  : "ISO 14001は、国際標準化機構（ISO）が定めた環境マネジメントシステム（EMS）の国際規格です。組織が環境への影響を管理・低減し、持続可能な生産と責任ある事業活動を推進することを目的としています。"}
            </p>
          </motion.div>
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
          }}

        >
          <Iso_btn />
        </motion.div>
      </section>
    </>
  );
}
