'use client'
import { useState, useEffect } from 'react'
import Head from 'next/head'
import Form_contact from "../form_contact/form_contact"
import Link from 'next/link';

export default function Contact() {
  const [lang, setLang] = useState<'th' | 'en' | 'jp'>('th');


  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedLang = localStorage.getItem('lang') as 'th' | 'en' | 'jp' | null;
      if (storedLang) setLang(storedLang);
    }
  }, []);
  const icon = [
    "icon-contact bi bi-telephone-fill",
    "icon-contact bi bi-globe",
    "icon-contact bi bi-envelope-at-fill",
    "icon-contact bi bi-geo-alt-fill"
  ]
  const link = [
    "tel:033-136581-4",
    "https://jieithai.co.th",
    "mailto:info@jiei-thai.co.th",
    "https://maps.app.goo.gl/rymNPgK529UiEo2g6"
  ]
  const titleTH = [
    'โทรศัพท์',
    'เว็บไซต์',
    'อีเมล',
    'ที่อยู่',
  ]
  const titleEN = [
    "Phone",
    "Website",
    "E-Mail",
    "Address"
  ]
  const titleJP = [
    '電話番号',
    'ウェブサイト',
    'メール',
    '住所',
  ]

  const contact = [
    '033-136581-4',
    'https://jieithai.co.th',
    'info@jiei-thai.co.th',
    'Pinthong 4 Industrial Estate, Unit G18, 180/3 Moo 6, T.Bueng, A.Sriracha, Chonburi 20230 Thailand'
  ]

  return (
    <div className='contact-box'>
      <Head>
        <title>Contact Us | JIEI Thailand</title>
        <meta name="description" content="Get in touch with JIEI Thailand. Contact us via phone, email, or visit our address in Chonburi. We’re here to help you!" />
        <link rel="canonical" href="https://www.jiei-thai.co.th/contact" />

        {/* Open Graph */}
        <meta property="og:title" content="Contact Us | JIEI Thailand" />
        <meta property="og:description" content="Get in touch with JIEI Thailand. Contact us via phone, email, or visit our address in Chonburi. We’re here to help you!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.jiei-thai.co.th/contact" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Contact Us | JIEI Thailand" />
        <meta name="twitter:description" content="Get in touch with JIEI Thailand. Contact us via phone, email, or visit our address in Chonburi. We’re here to help you!" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "บริษัท เจไออีไอ (ประเทศไทย) จำกัด ผลิตอะไร?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "บริษัท เจไออีไอ (ประเทศไทย) จำกัด เป็นผู้ผลิตชิ้นส่วนยางรถยนต์และยางอุตสาหกรรมคุณภาพสูง สำหรับอุตสาหกรรมยานยนต์ทั้งในและต่างประเทศ"
                  }
                },
                {
                  "@type": "Question",
                  "name": "โรงงานของ JIEI Thailand อยู่ที่ไหน?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "โรงงานตั้งอยู่ในนิคมอุตสาหกรรมปิ่นทอง 4 จังหวัดชลบุรี ประเทศไทย"
                  }
                },
                {
                  "@type": "Question",
                  "name": "ติดต่อบริษัทได้ช่องทางไหนบ้าง?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "สามารถติดต่อได้ทางโทรศัพท์ 033-136581-4 อีเมล info@jiei-thai.co.th หรือกรอกแบบฟอร์มในหน้าเว็บไซต์"
                  }
                }
              ]
            })
          }}
        />


      </Head>
      <>
        <div className="contact-level">
          <div className="contact-contactUs">
            <div className="box-w">
              <h1 className='contactUsTitle'> {lang.includes('th') ? "ติดต่อเรา" : lang.includes('en') ? "CONTACT US" : "お問い合わせ"}</h1>
              <h2 className='text-title'>{lang.includes('th')? "ติดต่อโรงงานผลิตชิ้นส่วนยางรถยนต์ JIEI Thailand" : lang.includes('en')? "Contact JIEI Thailand Automotive Rubber Parts Manufacturing Factory" : "JIEI Thailand 自動車用ゴム部品製造工場へのお問い合わせ"}</h2>
              <h3 className='content-contact'>{lang.includes('th') ? "เราเป็นผู้ผลิตยางรถยนต์มาตรฐานญี่ปุ่นในจังหวัดชลบุรี" : lang.includes('en') ? "We are a Japanese-standard automotive rubber parts manufacturer located in Chonburi Province." : "私たちはチョンブリー県にある日本品質の自動車用ゴム部品メーカーです。"}</h3>

              <h5 className='here-you'>  {lang.includes('th') ? "เราพร้อมให้ความช่วยเหลือคุณ!" : lang.includes('en') ? "We’re here to help you!" : "私たちはあなたをサポートするためにここにいます！"}</h5>
              <div className="line-contact"></div>

              <div className="container-icon">
                {icon.map((item, index) => (
                  <Link className='a' href={link[index]} key={index}>
                    <div className="contact-box-icon">
                      <div className="icon">
                        <i className={item}></i>
                      </div>
                      <div className="title-box-icon">
                        <p className="text-icon">{lang.includes('th') ? titleTH[index] : lang.includes('en') ? titleEN[index] : titleJP[index]}</p>
                        <p className='link-icon'>{contact[index]}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="contact-form">
            <Form_contact />

          </div>


        </div>
       
      </>

    </div>


  )
}
