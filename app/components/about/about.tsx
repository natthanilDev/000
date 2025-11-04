'use client'
import { useState, useEffect } from 'react';
import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import ScrollReveal from '../ScrollReveal/ScrollReveal';
import Head from 'next/head';
// import Employee from './employee';

export default function About() {
    const [lang, setLang] = useState<'th' | 'en' | 'jp'>('th');
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedLang = localStorage.getItem('lang') as 'th' | 'en' | 'jp' | null;
            if (storedLang) setLang(storedLang);
        }
    }, []);
    const logo_partners = [
        '/logo-partners (1).png',
        '/logo-partners (2).png',
        '/logo-partners (3).png',
        '/logo-partners (4).png',
        '/logo-partners (5).png',
        '/logo-partners (6).png',
        '/logoPartner/cs.png',
        '/logoPartner/csj.png',
        '/logoPartner/honda.png',
        '/logoPartner/ht.png',
        '/logoPartner/jg.png',
        '/logoPartner/sum.png'

    ]
    const logo_partners1 = [
        '/logo-partners (7).png',
        '/logo-partners (8).png',
        '/logo-partners (9).png',
        '/logo-partners (10).png',
        '/logo-partners (11).png',
        '/logo-partners (12).png',
        '/logoPartner/Tabuchielectric.png',
        '/logoPartner/te.png',
        '/logoPartner/Tec.png',
        '/logoPartner/thairung.png',
        '/logoPartner/toacs.png',
        '/logoPartner/y-tec.png'

    ]




    return (
        <>

            <Head>
                <title>JIEI Thai | ผู้ผลิตชิ้นส่วนยางรถยนต์ ชลบุรี | Automotive Rubber Parts Manufacturer</title>
                <meta name="description" content="บริษัท เจไออีไอ (ประเทศไทย) จำกัด ผู้ผลิตชิ้นส่วนยางรถยนต์คุณภาพสูง จังหวัดชลบุรี มาตรฐาน ISO 9001, ISO 14001 และ IATF 16949 สำหรับอุตสาหกรรมยานยนต์ทั่วโลก" />
                <meta name="keywords" content="JIEI Thai, ผู้ผลิตชิ้นส่วนยางรถยนต์, โรงงานยางรถยนต์ ชลบุรี, Automotive Rubber Parts Thailand, ยางรถยนต์คุณภาพสูง, ISO 9001, IATF 16949" />
                <meta property="og:title" content="JIEI Thai | ผู้ผลิตชิ้นส่วนยางรถยนต์ ชลบุรี" />
                <meta property="og:description" content="โรงงานผลิตยางรถยนต์คุณภาพสูงในชลบุรี ได้รับมาตรฐานสากล ISO/IATF16949 พร้อมทีมงานมืออาชีพ" />
                <meta property="og:image" content="/meta-jiei.jpg" />
                <meta property="og:url" content="https://jiei-thai.co.th/about" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://jiei-thai.co.th/about" />

                {/* 🔎 Structured Data */}
                <script type="application/ld+json" dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "JIEI (Thailand) Co., Ltd.",
                        "url": "https://jiei-thai.co.th",
                        "logo": "https://jiei-thai.co.th/logo.png",
                        "description": "ผู้ผลิตชิ้นส่วนยางรถยนต์คุณภาพสูง จังหวัดชลบุรี ได้รับมาตรฐาน ISO/IATF16949",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "Pinthong 4 Industrial Estate, Unit G18, 180/3 Moo 6, T.Bueng, A.Sriracha, Chonburi 20230",
                            "addressCountry": "Thailand"
                        },
                        "sameAs": [
                            "https://www.facebook.com/jieithai",
                            "https://www.linkedin.com/company/jiei-thailand"
                        ]
                    })
                }} />
            </Head>
            <div className='about-page'>
                <div className="background-company-profile">

                    <div className='j'>
                    </div>
                    <div className="company-profile-text-ji">
                        <ScrollReveal>
                            <h1 className='company-text-ji'>{lang.includes('th') ? "โปรไฟล์" : lang.includes('en') ? "Company" : "会社"}</h1>
                            <h1 className='company-text-ji1'>{lang.includes('th') ? "บริษัท" : lang.includes('en') ? "Profile" : "概要"}</h1>
                            <h3 className='company-text-ji2'>Jiei (Thailand).Co.,Ltd</h3>
                        </ScrollReveal>
                    </div>
                </div>
                <section className="company-profile">
                    <div className="why-chose-jiei">
                        <ScrollReveal>
                            <h1 className='AboutUS'> {lang.includes('th') ? "เกี่ยวกับเรา | โปรไฟล์บริษัท" : lang.includes('en') ? "ABOUT US | Company Profile" : "私たちについて | 会社案内"} </h1>
                            <div className="line"></div>
                        </ScrollReveal>
                        <ScrollReveal>
                            <h1 className='text-jiei-about-page'>{lang.includes('th') ? "บริษัท เจไออีไอ (ประเทศไทย) จำกัด – ผู้ผลิตชิ้นส่วนยางรถยนต์" : lang.includes('en') ? "JIEI (Thailand) Co., Ltd. - Automotive Rubber Parts Manufacturer" : "JIEI（Thailand）株式会社 – 自動車用ゴム部品メーカー"}
                            </h1>
                        </ScrollReveal>
                        <ScrollReveal>
                            <p className='text-center'>
                                {lang.includes('th') ? "บริษัท เจไออีไอ (ประเทศไทย) จำกัด เป็นผู้ผลิต ชิ้นส่วนยางรถยนต์คุณภาพสูง สำหรับอุตสาหกรรมยานยนต์ในประเทศไทยและต่างประเทศ โรงงานตั้งอยู่ที่จังหวัดชลบุรี พร้อมมาตรฐานสากล ISO 9001, ISO 14001 และ IATF 16949 ที่รับรองคุณภาพการผลิตทุกขั้นตอน" : lang.includes('en') ? "JIEI (Thailand) Co., Ltd. is a manufacturer of high-quality automotive rubber parts for the automotive industry in Thailand and overseas. Our factory is located in Chonburi Province and operates under international standards ISO 9001, ISO 14001, and IATF 16949, ensuring quality at every stage of production." : "JIEI（Thailand）株式会社は、タイ国内および海外の自動車産業向けに高品質な自動車用ゴム部品を製造するメーカーです。工場はチョンブリー県に位置し、ISO 9001、ISO 14001、IATF 16949といった国際規格に基づき、生産のあらゆる工程で品質を保証しています。"}
                            </p>
                        </ScrollReveal>
                    </div>
                    <div className="aboutUs-page">
                        <div className="about-grid">
                            <ScrollReveal>
                                <h2 className='text-center'>{lang.includes('th') ? "เกี่ยวกับเรา" : lang.includes('en') ? "About Us" : "私たちについて"}    </h2>
                            </ScrollReveal>
                            <ScrollReveal>
                                <h2 className='company-profile-text1'>{lang.includes('th') ? "โปรไฟล์บริษัท" : lang.includes('en') ? "Company Profile" : "会社案内"}  </h2>
                                <h4 className='company-profile-text'>{lang.includes('th') ? "ขอบคุณเป็นอย่างยิ่งที่สละเวลาเยี่ยมชมเว็บไซต์ของเรา" : lang.includes('en') ? "Thank you very much for taking the time to visit our website." : "私たちのウェブサイトをご覧いただき、誠にありがとうございます。"}</h4>
                                <p className='company-profile-text'>{lang.includes('th') ? "บริษัท เจไออีไอ (ไทยแลนด์) จำกัด ก่อตั้งขึ้นเมื่อเดือนพฤศจิกายน พ.ศ. 2554 ในฐานะบริษัทย่อยของ กลุ่ม Kasei Kogyo Co., Ltd. ซึ่งมีประวัติยาวนานตั้งแต่ปี พ.ศ. 2509 และเป็นผู้เชี่ยวชาญด้าน การผลิตยางอัดรีดสำหรับอุตสาหกรรมยานยนต์ (Rubber Extrusion for Automobiles) ควบคู่มากับการพัฒนาของอุตสาหกรรมยานยนต์ระดับโลก" : lang.includes('en') ? "JIEI (Thailand) Co., Ltd. was established in November 2011 as a subsidiary of Kasei Kogyo Co., Ltd., a company with a long history dating back to 1966. The group specializes in rubber extrusion for automobiles, growing in parallel with the development of the global automotive industry." : "JIEI（Thailand）株式会社は、2011年11月にKasei Kogyo Co., Ltd.グループの子会社として設立されました。同グループは1966年に創業し、自動車産業向けのゴム押出成形における専門知識を有し、世界の自動車産業の発展と共に成長してきました。"}</p>
                                <p className='company-profile-text'>{lang.includes('th') ? "เรามุ่งเน้นการทำงานครบวงจร ตั้งแต่ การวางแผน การวิจัยและพัฒนา การผลิตด้วยเทคโนโลยีขั้นสูง เพื่อให้ได้ ชิ้นส่วนยางรถยนต์คุณภาพสูง ที่ตอบสนองความต้องการของลูกค้าหลากหลายประเภท ทั้งในญี่ปุ่น อเมริกา จีน และเอเชีย" : lang.includes('en') ? "We focus on a fully integrated process, from planning and research & development to high-tech production, to deliver high-quality automotive rubber parts that meet the diverse needs of customers in Japan, the United States, China, and across Asia." : "当社は、企画、研究開発から先端技術を用いた生産まで、一貫したプロセスに注力し、日本、アメリカ、中国、そしてアジア各国のお客様の多様なニーズに応える高品質な自動車用ゴム部品を提供しています。"}</p>
                                <p className='company-profile-text'>{lang.includes('th') ? "กลุ่มบริษัท Kasei Kogyo ได้รับการยอมรับในฐานะองค์กรที่สามารถตอบสนองต่อความเปลี่ยนแปลงอย่างรวดเร็วของอุตสาหกรรมยานยนต์ ด้วยความรู้ความเชี่ยวชาญ (Know-how) และประสบการณ์ด้าน การผลิตชิ้นส่วนยางรถยนต์ (Automotive Rubber Parts Manufacturing) มากกว่า 50 ปี" : lang.includes('en') ? "The Kasei Kogyo Group is recognized as an organization capable of responding to the rapid changes in the automotive industry, backed by over 50 years of know-how and experience in automotive rubber parts manufacturing." : "Kasei Kogyoグループは、自動車産業の急速な変化に対応できる組織として認められており、自動車用ゴム部品製造における50年以上のノウハウと経験を有しています。"}</p>
                                <p className='company-profile-text'>{lang.includes('th') ? "ในอนาคต บริษัทเจไออีไอ (ไทยแลนด์) จำกัด จะยังคงมุ่งมั่นพัฒนานวัตกรรมอย่างไม่หยุดยั้ง เพื่อสร้างสรรค์ผลิตภัณฑ์ที่มี คุณภาพ ความแม่นยำ และมาตรฐานสากล พร้อมก้าวสู่การเป็น ผู้ผลิตชิ้นส่วนยางรถยนต์ระดับโลก (Global Automotive Rubber Parts Manufacturer) ที่สร้างคุณค่าและประโยชน์ให้กับสังคมโลก" : lang.includes('en') ? "In the future, JIEI (Thailand) Co., Ltd. will continue to pursue relentless innovation to create products of exceptional quality, precision, and international standards. Our goal is to become a global automotive rubber parts manufacturer that delivers value and benefits to the global community." : "将来に向けて、JIEI（Thailand）株式会社は、優れた品質、精度、そして国際規格を備えた製品を生み出すため、絶え間ない革新を追求し続けます。私たちは、世界に価値と利益をもたらすグローバルな自動車用ゴム部品メーカーを目指しています。"}</p>
                            </ScrollReveal>
                        </div>
                        <ScrollReveal>
                            <div className="president-image-box">
                                <div className="president-image">
                                    <Image className='image-president-company' src={'/imageUser.png'} alt='บริษัท เจไออีไอ (ประเทศไทย) จำกัด ผู้ผลิต ชิ้นส่วนยางรถยนต์ จังหวัดชลบุรี' priority width={1000} height={1000} />
                                </div>
                                <div className="president-content">
                                    <ScrollReveal>
                                        <h2 className='position-topmanager'>{lang === "th" ? "ประธานบริษัท" : lang === "en" ? "President" : "代表取締役社長"} </h2>
                                        <p className='top-manager-name'>{lang === 'th' ? "คุณมาซาชิ เอซากะ" : lang.includes('en') ? "Mr.Masashi Ezaka" : "江坂 正志"}</p>
                                    </ScrollReveal>
                                </div>
                            </div>
                        </ScrollReveal>


                        {/* <ScrollReveal>
                            <div className="about-grid-image">
                            </div>
                        </ScrollReveal> */}
                    </div>
                    <ScrollReveal>
                            <div className="about-grid-image">
                            </div>
                        </ScrollReveal>
                </section >
                <ScrollReveal>
                    <h1 className='about-company-name'>{lang.includes('th') ? "บริษัท เจไออีไอ (ประเทศไทย) จำกัด" : lang.includes('en') ? "JIEI (Thailand) Co., Ltd." : "ジェイアイ (タイランド)株式会社"} </h1>
                </ScrollReveal>

                <ScrollReveal>
                    <div className="table-company-profile">
                        <div className="tr-about">
                            <div className='content-inthe-table'>
                                <div className="content-in-aboutBox">
                                    <span className="title-about-text"> {lang.includes('th') ? "ชื่อบริษัท" : lang.includes('en') ? "Company Name" : "会社名"}</span>
                                </div>
                                <div className="content-in-aboutBox">
                                    {lang.includes('th') ? "บริษัท เจไออีไอ (ประเทศไทย) จำกัด" : lang.includes('en') ? "JIEI (Thailand) Co., Ltd." : "ジェイアイイーアイ（タイランド）株式会社"}
                                </div>
                            </div>
                            <div className='content-inthe-table1'>
                                <div className="content-in-aboutBox">

                                    <span className="title-about-text">   {lang.includes('th') ? "ที่อยู่" : lang.includes('en') ? "Address" : "住所"}</span>
                                </div>
                                <div className="content-in-aboutBox">

                                    {lang.includes('th') ? " นิคมอุตสาหกรรมปิ่นทอง 4 หน่วย G18 180/3 หมู่ 6 ต.บึง อ.ศรีราชา ชลบุรี 20230 ประเทศไทย โทร. 033136581-4" : lang.includes('en') ? "Pinthong Industrial Estate 4, Unit G18 180/3 Moo 6, Bueng Sub-district,Si Racha District, Chonburi 20230, Thailand Tel: +66 (0)33-136581-4" : "ピントン工業団地4、G18号ユニット 180/3 ムー6、ブン地区 シラチャー郡、チョンブリー県 20230 タイ王国 電話: +66 (0)33-136581-4"}
                                </div>
                            </div>
                            <div className='content-inthe-table'>
                                <div className="content-in-aboutBox">
                                    <span className="title-about-text"> {lang.includes('th') ? "ก่อตั้งเมื่อ" : lang.includes('en') ? "Established on" : "設立日"} </span>
                                </div>
                                <div className="content-in-aboutBox">
                                    {lang.includes('th') ? "11/11/2554" : lang.includes('en') ? "11/11/2011" : "2011年11月11日"}
                                </div>
                            </div>
                            <div className='content-inthe-table1'>
                                <div className="content-in-aboutBox">
                                    <span className="title-about-text">{lang.includes('th') ? "ทุนจดทะเบียน" : lang.includes('en') ? "Registered Capital" : "登録資本金"}</span>
                                </div>
                                <div className="content-in-aboutBox">

                                    {lang.includes('th') ? "150,000,000 บาท" : lang.includes('en') ? "150,000,000 Baht" : "1億5,000万バーツ"}
                                </div>
                            </div>
                            <div className='content-inthe-table'>
                                <div className="content-in-aboutBox">
                                    <span className="title-about-text">  {lang.includes('th') ? "จำนวนพนักงาน" : lang.includes('en') ? "Number of Employees" : "従業員数"}</span>
                                </div>
                                <div className="content-in-aboutBox">
                                    {lang.includes('th') ? "276 คน" : lang.includes('en') ? "276" : "276人"}
                                </div>
                            </div>
                        </div>

                    </div>
                </ScrollReveal>
                <ScrollReveal>
                    <div className="google-map-box">
                        <label htmlFor="btn-showMap">
                            <p className='btn-googlemap' >
                                {lang.includes('th') ? "แผนที่" : lang.includes('en') ? "Map" : "地図"} <i className="bi bi-search-heart"></i>
                            </p>
                        </label>
                        <input className='btn-showMap d-none' type="checkbox" id="btn-showMap" />

                        <div className='map-jiei'>
                            <Link href={"/Map.png"} target='_blank'>
                                <div className='google-popup'>
                                    <Image className='image-map' src={'/Map.png'} alt='' width={1000} height={1000} loading='lazy' />
                                </div>
                            </Link>
                        </div>
                    </div>
                </ScrollReveal>


                {/* <Employee /> */}


                <div className="partners-box">
                    <div className="partners-text">
                        <br />
                        <ScrollReveal>
                            <h1 className='thePartner'>{lang.includes('th') ? "คู่ค้าหลัก" : lang.includes('en') ? "The main trading partners" : "主要取引先"}</h1>
                        </ScrollReveal>
                        <div className="border-manager"></div>
                    </div>
                    <div className="logo-partners-box">
                        <div className="logo-partners">
                            {logo_partners.map((item, idx) => (

                                <Image key={idx} src={item} alt='บริษัท เจไออีไอ (ประเทศไทย) จำกัด
                        เป็นผู้ผลิต ชิ้นส่วนยางรถยนต์คุณภาพสูง
                        สำหรับอุตสาหกรรมยานยนต์ในประเทศไทยและต่างประเทศ
                        โรงงานตั้งอยู่ที่จังหวัดชลบุรี พร้อมมาตรฐานสากล' width={2000} height={2000} className='partners-Image' />
                            )
                            )}
                        </div>
                    </div>
                    <div className="logo-partners-box">
                        <div className="logo-partners1">
                            {logo_partners1.map((item, idx) => (
                                <Image key={idx} src={item} alt='บริษัท เจไออีไอ (ประเทศไทย) จำกัด
                        เป็นผู้ผลิต ชิ้นส่วนยางรถยนต์คุณภาพสูง
                        สำหรับอุตสาหกรรมยานยนต์ในประเทศไทยและต่างประเทศ
                        โรงงานตั้งอยู่ที่จังหวัดชลบุรี พร้อมมาตรฐานสากล' width={2000} height={2000} className='partners-Image' />
                            )
                            )}
                        </div>

                        <h4 className='thy text-center'>{lang.includes('th') ? "ขอขอบพระคุณทุกท่านสำหรับการสนับสนุน และเราหวังว่าจะได้รับความไว้วางใจจากท่านอย่างต่อเนื่องต่อไป" : lang.includes('en') ? "We sincerely thank everyone for their support and look forward to continuing to earn your trust." : "皆様のご支援に心より感謝申し上げます。今後とも変わらぬご信頼を賜りますようお願い申し上げます。"}</h4>

                    </div>
                </div>
            </div >
        </>
    )
}
