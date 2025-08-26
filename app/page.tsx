'use client';
import { useEffect, useState } from 'react';
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import ScrollReveal from './components/ScrollReveal/ScrollReveal';
export default function Home() {


  const [lang, setLang] = useState<'th' | 'en' | 'jp'>('th');


  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedLang = localStorage.getItem('lang') as 'th' | 'en' | 'jp' | null;
      if (storedLang) setLang(storedLang);
    }
  }, []);
  return (
    <>
      {/* 🔹 SEO Meta Tags */}
      <Head>
        <title>
          JIEI Thailand | Automotive Rubber Parts Manufacturer in Chonburi
        </title>
        <meta
          name="description"
          content="JIEI Thailand - ผู้ผลิตชิ้นส่วนยางรถยนต์ เช่น Engine Mounts, Suspension Bushings, Seals & Gaskets และ Custom Rubber Parts ในชลบุรี ประเทศไทย"
        />
        <meta
          name="keywords"
          content="JIEI Thailand, Automotive Rubber Parts, Engine Mounts, Suspension Bushings, Seals, Gaskets, Custom Rubber Parts, ยางรถยนต์, โรงงานยาง ชลบุรี"
        />
        <link rel="canonical" href="https://www.jiei-thai.co.th/" />
        <meta name="robots" content="index, follow" />

        {/* 🔹 Open Graph (Facebook / LINE) */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="JIEI Thailand - Automotive Rubber Parts Manufacturer" />
        <meta property="og:description" content="โรงงานผลิตชิ้นส่วนยางรถยนต์มาตรฐานสากล ISO & IATF16949 ที่ชลบุรี ประเทศไทย" />
        <meta property="og:url" content="https://www.jiei-thai.co.th/" />
        <meta property="og:image" content="https://www.jiei-thai.co.th/factory-jiei-thailand.jpg" />
        <meta property="og:locale" content="th_TH" />

        {/* 🔹 Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="JIEI Thailand - Automotive Rubber Parts" />
        <meta name="twitter:description" content="ผู้ผลิตชิ้นส่วนยางรถยนต์คุณภาพสูงในประเทศไทย" />
        <meta name="twitter:image" content="https://www.jiei-thai.co.th/factory-jiei-thailand.jpg" />
      </Head>

      <div className="background">


        <section className="relative h-screen w-full overflow-hidden">
          {/* Background Video */}
          <video
            className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover z-[-1]"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/intro.mp4" type="video/mp4" />
            เบราว์เซอร์ไม่รองรับวิดีโอ
          </video>
          <ScrollReveal>
            <div className="container-Display">
              <div className="border-display ">
                <div className="company_name_box">
                  <h1 className="company_name">{lang === 'th' ? "JIEI Thailand - Automotive Rubber Parts Manufacturer in Chonburi" : lang === 'en' ? 'JIEI Thailand - Automotive Rubber Parts Manufacturer in Chonburi' : lang === 'jp' ? 'JIEIタイランド – チョンブリーの自動車用ゴム部品メーカー' : ""} </h1>
                </div>
                <div className="description_company_box">
                  <p className="description_company">
                    เราคือผู้ผลิตชิ้นส่วนยางรถยนต์คุณภาพสูงสำหรับอุตสาหกรรมยานยนต์
                    ด้วยมาตรฐานสากลและการผลิตที่ทันสมัย
                  </p>
                </div>
                <div className="button-box">
                  <button className="btn-link">
                    <Link href={'/about'} className="btn_link">
                      About Us
                    </Link>
                  </button>


                  <button className="btn-link">
                    <Link href={'/'} className="btn_link">
                      Product
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* ✅ Why Choose Us */}

        <div className="why-choose-we">
          <ScrollReveal>
            <div className="why-choose-box">
              <div className="whyText-box">
                <h1 className='why-text'>ทำไมต้องเลือกเรา?</h1>
              </div>
              <div className="why-choose-content">
                <p className='p-text-why'>ไม่ใช่แค่ผู้ผลิต แต่คือพาร์ทเนอร์ที่คุณไว้วางใจได้</p>
                <p>ที่ JIEI Thailand เรามีความเชี่ยวชาญมากกว่าทศวรรษ  ด้วยระบบมาตรฐาน ISO9001, ISO14001, IATF16949
                  เราผลิตชิ้นส่วนยางที่ผ่านการตรวจสอบทุกขั้นตอน
                  ตอบโจทย์ความแม่นยำ ความทนทาน และความเป็นมิตรต่อสิ่งแวดล้อม
                  เพราะเรารู้ว่าธุรกิจของคุณต้องการมากกว่าคุณภาพ แต่ต้องการ ความมั่นใจในทุกชิ้นงาน</p>
              </div>
              <div className="iso-why-choose">
                <h1 className='iso-text'>ISO</h1>
                <div className="iso-box-why-choose">
                  <div className="iso">
                    <h2 className='iso-btn'><Link href={'/iso9001'} className='isoiatf'>ISO9001</Link> </h2>
                    <h2 className='iso-btn'><Link href={'/iso14001'} className='isoiatf'>ISO14001</Link> </h2>
                    <h2 className='iso-btn'><Link href={'/iatf16949'} className='isoiatf'>IATF16949</Link> </h2>
                  </div>
                </div>

              </div>
            </div>
          </ScrollReveal>

          <div className="why-choose-image">
            <Image src={'/iso-iatf.png'} className='image-iso' alt='' width={1000} height={1000} priority />
          </div>
        </div>

        {/* <div className="description-box">
          <ScrollReveal>
            <div className="why-choose-us">
              <h2 className="topic-art">ทำไมต้องเลือกเรา?</h2>
              <div className="description-why">
                <p className="description-why1">ไม่ใช่แค่ผู้ผลิต แต่คือพาร์ทเนอร์ที่คุณไว้วางใจได้</p>
                <p className="description-why2">  ที่ JIEI Thailand เรามีความเชี่ยวชาญมากกว่าทศวรรษ
                  ด้วยระบบมาตรฐาน ISO9001, ISO14001, IATF16949
                  เราผลิตชิ้นส่วนยางที่ผ่านการตรวจสอบทุกขั้นตอน
                  ตอบโจทย์ความแม่นยำ ความทนทาน และความเป็นมิตรต่อสิ่งแวดล้อม
                  เพราะเรารู้ว่าธุรกิจของคุณต้องการมากกว่าคุณภาพ แต่ต้องการ ความมั่นใจในทุกชิ้นงาน
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
           
            <div className="iso-and-iatf">
              <Link href="" className="Link-iso-and-iatf">
                <div className="iso9001">
                  <h3 className="isoText">ISO9001</h3>
                </div>
              </Link>
              <div className="step">
                <i className="ls bi bi-chevron-right"></i>
              </div>
              <Link href="" className="Link-iso-and-iatf">
                <div className="iso14001">
                  <h3 className="isoText">ISO14001</h3>
                </div>
              </Link>
              <div className="step">
                <i className="ls bi bi-chevron-right"></i>
              </div>
              <Link href="" className="Link-iso-and-iatf">
                <div className="iatf16949">
                  <h3 className="iatfText">IATF16949</h3>
                </div>
              </Link>
            </div>
          </ScrollReveal>

       
          <div className="why-choose-us1">
            <ScrollReveal>
              <h2 className="topic-art1">
                ประโยชน์ของยางขอบประตูรถยนต์มีอะไรบ้าง?
              </h2>
              <h3 className="art-for">
                ยางขอบประตูรถยนต์ (Door Seal / Weatherstrip) มีประโยชน์ เช่น
              </h3>

              <div className="description-box-art">

                <div className="description1">
                  <ul>
                    <li className="data-description">
                      <h4 className="topic-list">1. ป้องกันเสียงรบกวน</h4>
                      <p className="text-description-topic-list">
                        ลดเสียงลมและถนน ทำให้ห้องโดยสารเงียบขึ้น
                      </p>
                    </li>
                    <li className="data-description">
                      <h4 className="topic-list">2. ป้องกันน้ำและฝุ่น</h4>
                      <p className="text-description-topic-list">
                        กันน้ำฝนและฝุ่นเข้าสู่ภายในรถ
                      </p>
                    </li>
                    <li className="data-description">
                      <h4 className="topic-list">3. เพิ่มความปลอดภัย</h4>
                      <p className="text-description-topic-list">
                        ลดแรงกระแทกของประตู ปิดสนิทและยืดอายุการใช้งานตัวถัง
                      </p>
                    </li>
                  </ul>

                  <ul>
                    <li className="data-description">
                      <h4 className="topic-list">4. รักษาอุณหภูมิภายในรถ</h4>
                      <p className="text-description-topic-list">
                        ช่วยให้อากาศจากแอร์ไม่รั่วออก และกันอากาศร้อนจากภายนอกไม่ให้เข้ามา
                      </p>
                    </li>
                    <li className="data-description">
                      <h4 className="topic-list"> 5. เพิ่มความนุ่มนวลในการปิดประตู</h4>
                      <p className="text-description-topic-list">
                        เมื่อปิดประตูจะนุ่มขึ้น ไม่กระแทกแข็งเกินไป
                      </p>
                    </li>

                  </ul>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div> */}

          {/* <div className="image-display">
            // animation image
          </div> */}
        <div className="About-Company-box">
          <div className="image-home-page-about">
            <Image src={'/Jiei(thailand).Co.,Ltd.jpg'} className="image-about-home-page" alt="" width={1000} height={1000} priority></Image>
          </div>
          <div className="about-box-home-page">

            <div className="content-box">
              <ScrollReveal>

                <div className="about-box">
                  <h1 className="about">เกี่ยวกับเรา</h1>
                </div>
                <p className="content-about">
                  <span>JIEI Thailand Co., Ltd.</span>  เป็นผู้ผลิตชิ้นส่วนยางรถยนต์และยางอุตสาหกรรมคุณภาพสูง ตั้งอยู่ที่จังหวัดชลบุรี ประเทศไทย เรามีความเชี่ยวชาญด้านการออกแบบและการผลิต ยางขอบประตูรถยนต์ (Automotive Rubber Seals) และชิ้นส่วนยางที่ใช้ในอุตสาหกรรมยานยนต์มากกว่า 20 ปี
                </p>
                <p className="content-about">
                  บริษัทมุ่งมั่นพัฒนาเทคโนโลยีการผลิตที่ทันสมัย ควบคู่กับมาตรฐานสากล เช่น ISO/TS16949 เพื่อตอบสนองความต้องการของผู้ผลิตรถยนต์ (OEM) และลูกค้าทั่วโลก ปัจจุบันเราได้ส่งออกสินค้าไปยัง สหรัฐอเมริกา ญี่ปุ่น และประเทศในยุโรป
                </p>
                <p className="content-about">
                  จุดยืนของ JIEI คือการเป็น “พันธมิตรที่ไว้ใจได้ของอุตสาหกรรมยานยนต์” โดยให้ความสำคัญกับคุณภาพ ความทนทาน และการส่งมอบตรงเวลา
                </p>
              </ScrollReveal>

            </div>
          </div>


        </div>
      </div >

      {/* ✅ JSON-LD Schema */}
      < script
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
            contactPoint: [
              {
                "@type": "ContactPoint",
                telephone: "+66-33-136581-4",
                contactType: "customer service",
                areaServed: "TH",
                availableLanguage: ["Thai", "English"]
              }
            ]
          })
        }
        }
      />

      {/* ✅ FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "ยางขอบประตูรถยนต์มีประโยชน์อะไร?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "ช่วยป้องกันเสียงรบกวน น้ำ ฝุ่น รักษาอุณหภูมิ และทำให้การปิดประตูนุ่มนวลขึ้น"
                }
              },
              {
                "@type": "Question",
                name: "JIEI Thailand ตั้งอยู่ที่ไหน?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "ตั้งอยู่ที่จังหวัดชลบุรี ประเทศไทย"
                }
              }
            ]
          })
        }}
      />
    </>
  );
}
