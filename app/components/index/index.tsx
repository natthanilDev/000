'use client';
import { useEffect, useState } from 'react';
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import ScrollReveal from '../ScrollReveal/ScrollReveal';
import Iso_btn from '../iso_btn/iso_btn';

export default function Home() {
    const [lang, setLang] = useState<'th' | 'en' | 'jp'>('th');

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedLang = localStorage.getItem('lang') as 'th' | 'en' | 'jp' | null;
            if (storedLang) setLang(storedLang);
        }
    }, []);

    const partner = [
        '/logo-partners (1).png',
        '/logo-partners (2).png',
        '/logo-partners (3).png',
        '/logo-partners (4).png',
        '/logo-partners (5).png',
        '/logo-partners (6).png',
        '/logo-partners (7).png',
        '/logo-partners (8).png',
        '/logo-partners (9).png',
        '/logo-partners (10).png',
        '/logo-partners (11).png',
        '/logo-partners (12).png',
    ];

    const image_support = [
        "/support (1).png",
        "/support (2).png",
        "/support (3).png",
        "/support (4).png",
    ]
    const content_supportEN = [
        "Our company, JIEI (Thailand) is focused on the ASEAN region and offers a variety of rubber products for construction materials, automobiles, and other industrial uses."
        , "Our high-precision technology utilizes proprietary techniques and boasts real results in supporting the creation of beautiful and comfortable vehicles."
        , "Committed to responding to the demands of our customers, we are always incorporating the latest state-of-the-art technology.",
        "We fully support a schedule that extends from richly-experienced design planning and material development to mass production through industrial methods development."
    ]
    const content_supportTH = [
        "บริษัทของเรา JIEI (ประเทศไทย) มุ่งเน้นตลาดในภูมิภาคอาเซียน และนำเสนอผลิตภัณฑ์ยางหลากหลายประเภทสำหรับวัสดุก่อสร้าง ยานยนต์ และการใช้งานในอุตสาหกรรมอื่น ๆ",
        "เทคโนโลยีความแม่นยำสูงของเราใช้เทคนิคเฉพาะตัว และมีผลงานจริงในการสนับสนุนการสร้างยานยนต์ที่สวยงามและสะดวกสบาย",
        "เรามุ่งมั่นที่จะตอบสนองความต้องการของลูกค้าอยู่เสมอ โดยการนำเทคโนโลยีล้ำสมัยล่าสุดเข้ามาใช้อย่างต่อเนื่อง",
        "เราสนับสนุนกระบวนการอย่างเต็มรูปแบบ ตั้งแต่การวางแผนการออกแบบอย่างมีประสบการณ์ การพัฒนาวัสดุ ไปจนถึงการผลิตจำนวนมากผ่านการพัฒนากระบวนการทางอุตสาหกรรม",
    ]
    const content_supportJP = [
        "当社、JIEI（タイ）はASEAN地域に注力しており、建設資材、自動車、その他の工業用途向けのさまざまなゴム製品を提供しています。",
        "当社の高精度技術は独自の手法を活用しており、美しく快適な車両の創造を支援する実績があります。",
        "お客様のニーズに応えることを使命とし、常に最新の最先端技術を取り入れています。",
        "豊富な経験に基づく設計計画や素材開発から、産業的手法による量産まで、一貫したサポートを提供しています。"
    ]

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
                <link rel="canonical" href="https://www.jiei-thai.co.th/" />
                <meta name="robots" content="index, follow" />

                {/* Hreflang สำหรับหลายภาษา */}
                <link rel="alternate" href="https://www.jiei-thai.co.th/" hrefLang="th" />
                <link rel="alternate" href="https://www.jiei-thai.co.th/" hrefLang="x-default" />
                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content="JIEI Thailand - Automotive Rubber Parts Manufacturer" />
                <meta property="og:description" content="โรงงานผลิตชิ้นส่วนยางรถยนต์มาตรฐานสากล ISO & IATF16949 ที่ชลบุรี ประเทศไทย" />
                <meta property="og:url" content="https://www.jiei-thai.co.th/" />
                <meta property="og:image" content="https://www.jiei-thai.co.th/factory-jiei-thailand.jpg" />
                <meta property="og:locale" content="th_TH" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="JIEI Thailand - Automotive Rubber Parts" />
                <meta name="twitter:description" content="ผู้ผลิตชิ้นส่วนยางรถยนต์คุณภาพสูงในประเทศไทย" />
                <meta name="twitter:image" content="https://www.jiei-thai.co.th/factory-jiei-thailand.jpg" />
                <meta
                    name="description"
                    content={
                        lang === "th"
                            ? "JIEI Thailand - ผู้ผลิตชิ้นส่วนยางรถยนต์ เช่น Engine Mounts, Suspension Bushings, Seals & Gaskets และ Custom Rubber Parts ในชลบุรี ประเทศไทย"
                            : lang === "en"
                                ? "JIEI Thailand - Manufacturer of automotive rubber parts such as engine mounts, suspension bushings, seals & gaskets, and custom rubber components in Chonburi, Thailand."
                                : "JIEIタイランド - エンジンマウント、サスペンションブッシュ、シール＆ガスケット、カスタムゴム部品などを製造するタイ・チョンブリーの自動車用ゴム部品メーカー。"
                    }
                />
                {/* Preload Video for Performance */}
                <link rel="preload" as="video" href="/intro.mp4" type="video/mp4" />
                <link rel="preload" as="video" href="/background-video.mp4" type="video/mp4" />

            </Head>

            <div className="background" >
                <section className="relative h-screen w-full overflow-hidden">
                    <video
                        className="video_intro absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover z-[-1]"
                        autoPlay
                        muted
                        loop
                        playsInline
                        poster='/JIEI-New-Factory-scaled.jpg'>
                        <source src="/video.mp4" type="video/mp4" />
                        เบราว์เซอร์ไม่รองรับวิดีโอ
                    </video>

                    <ScrollReveal>
                        <div className="container-Display">
                            <div className="border-display">
                                <div className="company_name_box">
                                    <h1 className="company_name">
                                        {lang === 'th'
                                            ? "JIEI Thailand – ผู้ผลิตชิ้นส่วนยางสำหรับยานยนต์ จังหวัดชลบุรี"
                                            : lang === 'en'
                                                ? 'JIEI Thailand - Automotive Rubber Parts Manufacturer in Chonburi'
                                                : 'JIEIタイランド – チョンブリーの自動車用ゴム部品メーカー'}
                                    </h1>
                                </div>
                                <div className="description_company_box">
                                    <p className="description_company">
                                        {lang === 'th'
                                            ? "เราคือผู้ผลิตชิ้นส่วนยางรถยนต์คุณภาพสูงสำหรับอุตสาหกรรมยานยนต์ ด้วยมาตรฐานสากลและการผลิตที่ทันสมัย"
                                            : lang === "en"
                                                ? "We are a manufacturer of high-quality automotive rubber parts for the automotive industry, built on international standards and advanced production technology."
                                                : "私たちは、自動車業界向けの高品質な自動車用ゴム部品を製造しており、国際規格と最新の生産技術を備えています。"}
                                    </p>
                                </div>
                                <div className="button-box">
                                    <Link href="/about" className="btn_link1">
                                        {lang === "th"
                                            ? "เกี่ยวกับเรา"
                                            : lang === "en"
                                                ? "About Us"
                                                : "会社概要"}
                                    </Link>

                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </section>



                <div className="why-choose-we">

                    <div className="why-choose-box">
                        <div className="whyText-box">
                            <ScrollReveal>
                                <h2 className='why-text'>{lang === 'en' ? 'Why Choose Us?' : lang === 'th' ? "ทำไมต้องเลือกเรา?" : "なぜ私たちを選ぶのか？"}  </h2>
                            </ScrollReveal>
                        </div>

                        <div className="why-choose-content">
                            <ScrollReveal>
                                <p className='p-text-why'>{lang === "th" ? "ไม่ใช่แค่ผู้ผลิต แต่คือพาร์ทเนอร์ที่คุณไว้วางใจได้" : lang === "en" ? "Not just a manufacturer, but a partner you can trust." : "単なるメーカーではなく、信頼できるパートナーです。"}</p>
                                <p className='t-w-y'>{lang === 'th' ? "ที่ JIEI Thailand เรามีความเชี่ยวชาญมากกว่าทศวรรษ  ด้วยระบบมาตรฐาน ISO9001, ISO14001, IATF16949 เราผลิตชิ้นส่วนยางที่ผ่านการตรวจสอบทุกขั้นตอน ตอบโจทย์ความแม่นยำ ความทนทาน และความเป็นมิตรต่อสิ่งแวดล้อม เพราะเรารู้ว่าธุรกิจของคุณต้องการมากกว่าคุณภาพ แต่ต้องการ ความมั่นใจในทุกชิ้นงาน" : lang === "en" ? "At JIEI Thailand, we have over a decade of expertise, certified with ISO 9001, ISO 14001, and IATF 16949. We manufacture rubber parts inspected at every stage, ensuring precision, durability, and environmental friendliness. Because we know your business needs more than just quality—it needs confidence in every product." : "JIEI Thailandでは、ISO9001、ISO14001、IATF16949の認証を取得し、10年以上の専門知識を有しています。当社は、すべての工程で検査を行ったゴム部品を製造し、精度、耐久性、環境への配慮を確保しています。 お客様のビジネスに必要なのは単なる品質だけでなく、すべての製品に対する信頼です。"}</p>
                            </ScrollReveal>

                        </div>
                        <div className="iso-why-choose">
                            <ScrollReveal>
                                <h2 className='iso-text'>ISO</h2>
                            </ScrollReveal>
                            <ScrollReveal>
                                <Iso_btn />
                            </ScrollReveal>

                        </div>
                    </div>


                    <div className="why-choose-image">
                        <ScrollReveal>
                            <Image src={'/Home-car.png'} className='image-iso' alt='โรงงานผลิตชิ้นส่วนยางรถยนต์มาตรฐานสากล ISO & IATF16949 ที่ชลบุรี ประเทศไทย"' width={1000} height={1000} loading="lazy" />
                        </ScrollReveal>
                    </div>

                </div >

                <div className="support">

                    <div className="support-box">

                        {image_support.map((item, index) =>
                            <div key={index} className="card-support-box">
                                <div className="card-support">
                                    <div className="card-support-image">
                                        <ScrollReveal>
                                            <Image src={item} alt='โรงงานผลิตชิ้นส่วนยางรถยนต์มาตรฐานสากล' className='icon-support' width={1000} height={1000} loading="lazy" />
                                        </ScrollReveal>
                                    </div>
                                    <div className="card-support-content">
                                        <ScrollReveal>
                                            <p className="content-support">
                                                {lang === "th" ? content_supportTH[index] : lang === "en" ? content_supportEN[index] : content_supportJP[index]}
                                            </p>
                                        </ScrollReveal>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>


                <div className="About-Company-box">
                    <div className="image-home-page-about">
                        <ScrollReveal>
                            <Image src={'/Jiei(thailand).Co.,Ltd.jpg'} className="image-about-home-page" alt="โรงงานผลิตชิ้นส่วนยางรถยนต์มาตรฐานสากล ISO & IATF16949 ที่ชลบุรี ประเทศไทย" width={1000} height={1000} priority></Image>
                        </ScrollReveal>
                    </div>
                    
                    <div className="about-box-home-page">

                        <div className="content-box">

                            <div className="about-box">
                                <ScrollReveal>
                                    <h2 className="about"> {lang === "th" ? "เกี่ยวกับเรา" : lang === "en" ? "About Us" : "私たちについて"}</h2>
                                </ScrollReveal>
                            </div>
                            <ScrollReveal>
                                <p className="content-about">
                                    {lang === "th" ? "JIEI Thailand Co., Ltd. เป็นผู้ผลิตชิ้นส่วนยางรถยนต์และยางอุตสาหกรรมคุณภาพสูง ตั้งอยู่ที่จังหวัดชลบุรี ประเทศไทย เรามีความเชี่ยวชาญด้านการออกแบบและการผลิต ยางขอบประตูรถยนต์ (Automotive Rubber Seals) และชิ้นส่วนยางที่ใช้ในอุตสาหกรรมยานยนต์มากกว่า 20 ปี" : lang === "en" ? "JIEI Thailand Co., Ltd. is a manufacturer of high-quality automotive and industrial rubber parts, located in Chonburi Province, Thailand. We have over 20 years of expertise in designing and producing automotive rubber seals and rubber components used in the automotive industry." : "JIEI Thailand株式会社は、タイ・チョンブリー県に拠点を置く高品質な自動車用および産業用ゴム部品のメーカーです。私たちは、自動車用ゴムシールや自動車産業で使用されるゴム部品の設計・製造において、20年以上の専門知識を持っています。"}
                                </p>
                            </ScrollReveal>
                            <ScrollReveal>
                                <p className="content-about">
                                    {lang === "th" ? "บริษัทมุ่งมั่นพัฒนาเทคโนโลยีการผลิตที่ทันสมัย ควบคู่กับมาตรฐานสากล เช่น ISO/TS16949 เพื่อตอบสนองความต้องการของผู้ผลิตรถยนต์ (OEM) และลูกค้าทั่วโลก ปัจจุบันเราได้ส่งออกสินค้าไปยัง สหรัฐอเมริกา ญี่ปุ่น และประเทศในยุโรป" : lang === "en" ? "The company is committed to developing advanced manufacturing technologies alongside international standards such as ISO/TS16949 to meet the requirements of automotive manufacturers (OEMs) and customers worldwide. Currently, we export our products to the United States, Japan, and European countries." : "当社は、ISO/TS16949などの国際規格と並行して、先進的な製造技術の開発に取り組み、自動車メーカー（OEM）および世界中の顧客のニーズに応えています。現在、当社の製品はアメリカ、日本、ヨーロッパ諸国に輸出されています。"}
                                </p>
                            </ScrollReveal>
                            <ScrollReveal>
                                <p className="content-about">
                                    {lang === "th" ? " จุดยืนของ JIEI คือการเป็น “พันธมิตรที่ไว้ใจได้ของอุตสาหกรรมยานยนต์” โดยให้ความสำคัญกับคุณภาพ ความทนทาน และการส่งมอบตรงเวลา" : lang === "en" ? "JIEI’s stance is to be a “trusted partner of the automotive industry,” focusing on quality, durability, and on-time delivery." : "JIEIの立場は、「自動車産業の信頼できるパートナー」であることであり、品質、耐久性、そして納期厳守を重視しています。"}
                                </p>
                            </ScrollReveal>

                        </div>
                    </div>
                </div>


                <div className="background-video-box">
                    <div className="box-bc">


                        <ScrollReveal>
                            <h2 className='video-text'>
                                {lang === "th" ? "มั่นใจทุกการขับขี่" : lang === "en" ? "Confidence in Every Drive" : "すべてのドライブで自信を"}
                            </h2>
                        </ScrollReveal>
                        <ScrollReveal>
                            <video className="video-car" autoPlay muted loop playsInline poster='/JIEI-New-Factory-scaled.jpg'>
                                <source src="/background-video.mp4" type="video/mp4" />
                                เบราว์เซอร์ไม่รองรับวิดีโอ
                            </video>
                        </ScrollReveal>
                        <div className="description-box">
                            <div className="why-choose-us1">
                                <ScrollReveal>
                                    <h2 className="topic-art1">
                                        {lang === "th" ? "ประโยชน์ของยางขอบประตูรถยนต์มีอะไรบ้าง?" : lang === "en" ? "Benefits of car door rubber" : "自動車ドアゴムの利点"}
                                    </h2>
                                </ScrollReveal>

                                <ScrollReveal>

                                    <h3 className="art-for">
                                        {lang === 'th' ? "ยางขอบประตูรถยนต์ (Door Seal / Weatherstrip) มีประโยชน์ เช่น" : lang === "en" ? "Car door rubber (Door Seal / Weatherstrip) has benefits such as" : "自動車のドアゴム（ドアシール／ウェザーストリップ）には、次のような利点があります。"}
                                    </h3>
                                </ScrollReveal>


                                <div className="description-box-art">

                                    <div className="description1">
                                        <ul>
                                            <li className="data-description">
                                                <ScrollReveal>
                                                    <h4 className="topic-list">{lang === 'th' ? "1. ป้องกันเสียงรบกวน" : lang === "en" ? "1. Reduces noise" : "1. 騒音を低減する"}</h4>
                                                    <p className="text-description-topic-list">
                                                        {lang === "th" ? "ลดเสียงลมและถนน ทำให้ห้องโดยสารเงียบขึ้น" : lang === "en" ? "Reduces wind and road noise, making the cabin quieter." : "風や道路の騒音を減らし、車内をより静かにします。"}
                                                    </p>
                                                </ScrollReveal>

                                            </li>
                                            <li className="data-description">
                                                <ScrollReveal>
                                                    <h4 className="topic-list">{lang === "th" ? "2. ป้องกันน้ำและฝุ่น" : lang === "en" ? "2. Prevents water and dust" : "2. 水やほこりを防ぐ"} </h4>
                                                    <p className="text-description-topic-list">
                                                        {lang === "th" ? "กันน้ำฝนและฝุ่นเข้าสู่ภายในรถ" : lang === "en" ? "Prevents rainwater and dust from entering the vehicle interior." : "雨水やほこりが車内に入るのを防ぐ"}
                                                    </p>
                                                </ScrollReveal>

                                            </li>
                                            <li className="data-description">
                                                <ScrollReveal>
                                                    <h4 className="topic-list">{lang === "th" ? "3. เพิ่มความปลอดภัย " : lang === "en" ? "3. Enhances safety" : "3. 安全性を高める"}   </h4>
                                                    <p className="text-description-topic-list">
                                                        {lang === "th" ? "ลดแรงกระแทกของประตู ปิดสนิทและยืดอายุการใช้งานตัวถัง" : lang === "en" ? "Reduces door impact, ensures tight closure, and extends the body’s lifespan." : "ドアの衝撃を軽減し、しっかり閉じ、車体の寿命を延ばす"}
                                                    </p>
                                                </ScrollReveal>

                                            </li>
                                        </ul>

                                        <ul>
                                            <li className="data-description">
                                                <ScrollReveal>
                                                    <h4 className="topic-list">{lang === "th" ? "4. รักษาอุณหภูมิภายในรถ" : lang === "en" ? "4. Maintains the interior temperature of the vehicle" : "4. 車内の温度を保つ"}</h4>
                                                    <p className="text-description-topic-list">
                                                        {lang === "th" ? "ช่วยให้อากาศจากแอร์ไม่รั่วออก และกันอากาศร้อนจากภายนอกไม่ให้เข้ามา" : lang === "en" ? "Prevents air from the AC from leaking out and blocks hot air from entering from outside." : "エアコンの空気が漏れないようにし、外からの熱い空気の侵入を防ぐ"}
                                                    </p>
                                                </ScrollReveal>
                                            </li>
                                            <li className="data-description">
                                                <ScrollReveal>
                                                    <h4 className="topic-list">{lang === "th" ? "5. เพิ่มความนุ่มนวลในการปิดประตู" : lang === "en" ? "5. Provides smoother door closing" : "5. ドアの閉まりをよりスムーズにする"} </h4>
                                                    <p className="text-description-topic-list">
                                                        {lang === "th" ? "เมื่อปิดประตูจะนุ่มขึ้น ไม่กระแทกแข็งเกินไป" : lang === "en" ? "The door closes more softly, without slamming harshly. " : "ドアを閉めるときに柔らかく閉まり、強くぶつからない"}
                                                    </p>
                                                </ScrollReveal>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>


                <div className="partner-homepage">
                    <h2 className="partner-text">{lang === "th" ? "องค์กรชั้นนำที่ไว้วางใจ JIEI Thailand เป็นผู้ผลิตชิ้นส่วนยางรถยนต์" : lang === "en" ? "Leading Companies Trust JIEI Thailand – Automotive Rubber Parts Manufacturer" : "大手企業から信頼されるJIEI Thailand – 自動車用ゴム部品メーカー"}</h2>

                    <div className="image-logo-partner-homepage">
                        {partner.map((image, index) => (
                            <ScrollReveal key={index}>
                                <Image  className='image-partner-homepage' src={image} alt='โรงงานผลิตชิ้นส่วนยางรถยนต์มาตรฐานสากล ISO & IATF16949 ที่ชลบุรี ประเทศไทย' width={1000} height={1000} loading="lazy" />
                            </ScrollReveal>
                        ))}
                    </div>
                </div>

            </div >


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