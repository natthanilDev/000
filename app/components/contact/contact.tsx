'use client'
import { useState, useEffect } from 'react'
import Head from 'next/head'
import Form_contact from "../form_contact/form_contact"

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
    "icon-contact bi bi-geo-alt-fill"
  ]



  const contact = [
    '033-136581-4',
    'https://jiei-thai.co.th',
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


      </Head>
      <>
        <div className="contact-level">
          <h1 className='contactUsTitle'> {lang === ('th') ? "ติดต่อเรา" : lang === ('en') ? "CONTACT US" : "お問い合わせ"}</h1>
          <h2 className='text-title'>{lang === ('th') ? "บริษัท เจไออีไอ (ไทยแลนด์) จํากัด" : lang === ('en') ? "JIEI (Thailand) Co., Ltd." : "JIEI (THAILAND) CO., LTD."}</h2>
          {/* <h3 className='content-contact'>{lang===('th') ? "เราเป็นผู้ผลิตยางรถยนต์มาตรฐานญี่ปุ่นในจังหวัดชลบุรี" : lang===('en') ? "We are a Japanese-standard automotive rubber parts manufacturer located in Chonburi Province." : "私たちはチョンブリー県にある日本品質の自動車用ゴム部品メーカーです。"}</h3> */}

          <div className="contact-page">
            <div className="contact-contactUs">
              <div className="box-w">
                <div className="container-icon">
                  <h1 className="text-2xl font-bold mb-4 text-contact-1">
                    {lang === ('th') ? "ติดต่อเรา | กรุณากรอกข้อมูลของคุณ!" :
                      lang === ('en') ? "Contact Us | Please fill in your information!" :
                        "お問い合わせ | 情報をご入力ください！"}
                  </h1>

                  <p className="mb-6">
                    {lang === ('th') ? "ต้องการข้อมูลเพิ่มเติมเกี่ยวกับผลิตภัณฑ์หรือบริการของเรา? กรอกแบบฟอร์มด้านล่างแล้วทีมงาน JIEI Thailand จะติดต่อกลับโดยเร็วที่สุด" :
                      lang === ('en') ? "Do you want more information about our products or services? Please fill out the form below, and the JIEI Thailand team will get back to you as soon as possible." :
                        "当社の製品やサービスに関する詳細情報をご希望ですか？ 以下のフォームにご記入いただくと、JIEI Thailandのチームができるだけ早くご連絡いたします。"}
                  </p>
                  <h5 className='here-you'>  {lang === ('th') ? "เราพร้อมให้ความช่วยเหลือคุณ!" : lang === ('en') ? "We’re here to help you!" : "私たちはあなたをサポートするためにここにいます！"}</h5>

                  <div className="line-contact" />
                  <div className="icon-contact-web">
                    {icon.map((item, index) => (
                      <div className="icon-contact-1 bg-gray-200" key={index}>
                        <div className="contact-box-icon">
                          <div className="icon">
                            <i className={`${item} item-icon`} />
                          </div>
                          <div className="title-box-icon">
                            <p className='link-icon'>{contact[index]}</p>
                          </div>
                        </div>
                      </div>


                    ))}
                  </div>

                </div>
              </div>
            </div>
            <div className="contact-form">
              <Form_contact />
            </div>
          </div>

        </div>
      </>
    </div>
  )
}
