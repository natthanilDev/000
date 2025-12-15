'use client';
import Head from "next/head";
// import Partners from './partners';
import Btn_contactUs from "./btn-contactUs";
import Confidence from './Confidence';
import AboutHomePage from './AboutHomePage';
import ImageDescription from './imageDescription';
import WhyChooseUs from './WhyChooseUs';
import IntroIndex from './introIndex';
export default function Home() {
    return (
        <>
            <Head>
                <title>JIEI Thailand | ผู้ผลิตชิ้นส่วนยางรถยนต์ในชลบุรี มาตรฐาน ISO IATF16949</title>
                <meta name="description" content="JIEI Thailand โรงงานผู้ผลิตชิ้นส่วนยางรถยนต์มาตรฐานสากล ISO9001, ISO14001, IATF16949 ตั้งอยู่ที่ชลบุรี ผลิตยางกันเสียง ซีลยาง ยางขอบประตูรถยนต์ และชิ้นส่วนยางอุตสาหกรรม ส่งออกทั่วโลก" />
                <meta name="keywords" content="ผู้ผลิตชิ้นส่วนยางรถยนต์, โรงงานยางรถยนต์, ยางขอบประตูรถยนต์, Rubber Parts, Automotive Rubber Seals, ISO, IATF16949, JIEI Thailand, ชลบุรี" />
                <link rel="canonical" href="https://www.jiei-thai.co.th/" />
                <meta name="robots" content="index, follow" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="JIEI Thailand | ผู้ผลิตชิ้นส่วนยางรถยนต์ในชลบุรี" />
                <meta property="og:description" content="โรงงานผลิตชิ้นส่วนยางรถยนต์มาตรฐาน ISO & IATF16949 ผลิตซีลยาง ยางขอบประตูรถยนต์ ยางกันสั่นสะเทือน ส่งออกทั่วโลก" />
                <meta property="og:image" content="https://www.jiei-thai.co.th/factory-jiei-thailand.jpg" />
                <meta property="og:url" content="https://www.jiei-thai.co.th/" />
                <meta property="og:locale" content="th_TH" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="JIEI Thailand - Automotive Rubber Manufacturer" />
                <meta name="twitter:description" content="โรงงานผลิตชิ้นส่วนยางรถยนต์คุณภาพสูงในประเทศไทย มาตรฐาน ISO IATF16949" />
                <meta name="twitter:image" content="https://www.jiei-thai.co.th/factory-jiei-thailand.jpg" />


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
                            address: {
                                "@type": "PostalAddress",
                                streetAddress: "180/3 Moo 6, T. Bueng, A. Sriracha",
                                addressLocality: "Chonburi",
                                postalCode: "20230",
                                addressCountry: "TH"
                            },
                            contactPoint: [{
                                "@type": "ContactPoint",
                                telephone: "+66-33-136581-4",
                                contactType: "Customer Service",
                                areaServed: "TH",
                                availableLanguage: ["Thai", "English", "Japanese"]
                            }],
                            description:
                                "โรงงานผู้ผลิตชิ้นส่วนยางรถยนต์มาตรฐานสากลในชลบุรี ผลิตซีลยาง ยางขอบประตูรถยนต์ ยางกันสั่นสะเทือน และยางอุตสาหกรรม",
                            makesOffer: [{
                                "@type": "Offer",
                                itemOffered: {
                                    "@type": "Product",
                                    name: "ยางขอบประตูรถยนต์",
                                    category: "Automotive Rubber Parts",
                                    brand: "JIEI Thailand"
                                }
                            }]
                        })
                    }}
                />
            </Head>


            <IntroIndex />
            <WhyChooseUs />
            <ImageDescription />
            <AboutHomePage />
            <Confidence />
            {/* <Partners /> */}
            <Btn_contactUs />


            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
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
                                availableLanguage: ["Thai", "English", "Japanese"]
                            }
                        ],
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