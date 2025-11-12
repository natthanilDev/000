import React from 'react'
import ScrollReveal from '../ScrollReveal/ScrollReveal'
import { useEffect , useState } from 'react';
import Image from 'next/image'
export default function AboutJIEI() {
    const [lang, setLang] = useState<'th' | 'en' | 'jp'>('th');
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedLang = localStorage.getItem('lang') as 'th' | 'en' | 'jp' | null;
            if (storedLang) setLang(storedLang);
        }
    }, []);
    const aboutTH = [
        "บริษัท เจไออีไอ (ไทยแลนด์) จำกัด ก่อตั้งขึ้นเมื่อ วันที่ 11 เดือน พฤศจิกายน พ.ศ. 2554 ในฐานะบริษัทย่อยของ กลุ่ม Kasei Kogyo Co., Ltd. ซึ่งมีประวัติยาวนานตั้งแต่ปี พ.ศ. 2509 และเป็นผู้เชี่ยวชาญด้าน การผลิตยางอัดรีดสำหรับอุตสาหกรรมยานยนต์ (Rubber Extrusion for Automobiles) ควบคู่มากับการพัฒนาของอุตสาหกรรมยานยนต์ระดับโลก",
        "เรามุ่งเน้นการทำงานครบวงจร ตั้งแต่ การวางแผน การวิจัยและพัฒนา การผลิตด้วยเทคโนโลยีขั้นสูง เพื่อให้ได้ ชิ้นส่วนยางรถยนต์คุณภาพสูง ที่ตอบสนองความต้องการของลูกค้าหลากหลายประเภท ทั้งในญี่ปุ่น อเมริกา จีน และเอเชีย",
        "กลุ่มบริษัท Kasei Kogyo ได้รับการยอมรับในฐานะองค์กรที่สามารถตอบสนองต่อความเปลี่ยนแปลงอย่างรวดเร็วของอุตสาหกรรมยานยนต์ ด้วยความรู้ความเชี่ยวชาญ (Know-how) และประสบการณ์ด้าน การผลิตชิ้นส่วนยางรถยนต์ (Automotive Rubber Parts Manufacturing) มากกว่า 50 ปี",
        "ในอนาคต บริษัทเจไออีไอ (ไทยแลนด์) จำกัด จะยังคงมุ่งมั่นพัฒนานวัตกรรมอย่างไม่หยุดยั้ง เพื่อสร้างสรรค์ผลิตภัณฑ์ที่มี คุณภาพ ความแม่นยำ และมาตรฐานสากล พร้อมก้าวสู่การเป็น ผู้ผลิตชิ้นส่วนยางรถยนต์ระดับโลก (Global Automotive Rubber Parts Manufacturer) ที่สร้างคุณค่าและประโยชน์ให้กับสังคมโลก"
    ]
    const aboutEN = [
        "JIEI (Thailand) Co., Ltd. was founded on November 11, 2011, as a subsidiary of the Kasei Kogyo Co., Ltd. group, which has a long history dating back to 1966. The group specializes in rubber extrusion for the automotive industry, growing alongside the development of the global automotive sector.",
        "We focus on a fully integrated process, from planning and research & development to high-tech production, to deliver high-quality automotive rubber parts that meet the diverse needs of customers in Japan, the United States, China, and across Asia.",
        "The Kasei Kogyo Group is recognized as an organization capable of responding to the rapid changes in the automotive industry, backed by over 50 years of know-how and experience in automotive rubber parts manufacturing.",
        "In the future, JIEI (Thailand) Co., Ltd. will continue to pursue relentless innovation to create products of exceptional quality, precision, and international standards. Our goal is to become a global automotive rubber parts manufacturer that delivers value and benefits to the global community.",
    ]
    const aboutJP = [
        "JIEI（Thailand）株式会社は、2011年11月にKasei Kogyo Co., Ltd.グループの子会社として設立されました。同グループは1966年に創業し、自動車産業向けのゴム押出成形における専門知識を有し、世界の自動車産業の発展と共に成長してきました。",
        "当社は、企画、研究開発から先端技術を用いた生産まで、一貫したプロセスに注力し、日本、アメリカ、中国、そしてアジア各国のお客様の多様なニーズに応える高品質な自動車用ゴム部品を提供しています。",
        "Kasei Kogyoグループは、自動車産業の急速な変化に対応できる組織として認められており、自動車用ゴム部品製造における50年以上のノウハウと経験を有しています。",
        "将来に向けて、JIEI（Thailand）株式会社は、優れた品質、精度、そして国際規格を備えた製品を生み出すため、絶え間ない革新を追求し続けます。私たちは、世界に価値と利益をもたらすグローバルな自動車用ゴム部品メーカーを目指しています。",
    ]
    return (
        <div>
            <section className="company-profile">
                <div className="why-chose-jiei">
                    <ScrollReveal>
                        <h1 className='AboutUS'> {lang === ('th') ? "เกี่ยวกับเรา | โปรไฟล์บริษัท" : lang === ('en') ? "ABOUT US | Company Profile" : "私たちについて | 会社案内"} </h1>
                        <div className="line"></div>
                    </ScrollReveal>
                    <ScrollReveal>
                        <h1 className='text-jiei-about-page'>{lang === ('th') ? "บริษัท เจไออีไอ (ประเทศไทย) จำกัด – ผู้ผลิตชิ้นส่วนยางรถยนต์" : lang === ('en') ? "JIEI (Thailand) Co., Ltd. - Automotive Rubber Parts Manufacturer" : "JIEI（Thailand）株式会社 – 自動車用ゴム部品メーカー"}
                        </h1>
                    </ScrollReveal>
                    <ScrollReveal>
                        <p className='text-center'>
                            {lang === ('th') ? "บริษัท เจไออีไอ (ประเทศไทย) จำกัด เป็นผู้ผลิต ชิ้นส่วนยางรถยนต์คุณภาพสูง สำหรับอุตสาหกรรมยานยนต์ในประเทศไทยและต่างประเทศ โรงงานตั้งอยู่ที่จังหวัดชลบุรี พร้อมมาตรฐานสากล ISO 9001, ISO 14001 และ IATF 16949 ที่รับรองคุณภาพการผลิตทุกขั้นตอน" : lang === ('en') ? "JIEI (Thailand) Co., Ltd. is a manufacturer of high-quality automotive rubber parts for the automotive industry in Thailand and overseas. Our factory is located in Chonburi Province and operates under international standards ISO 9001, ISO 14001, and IATF 16949, ensuring quality at every stage of production." : "JIEI（Thailand）株式会社は、タイ国内および海外の自動車産業向けに高品質な自動車用ゴム部品を製造するメーカーです。工場はチョンブリー県に位置し、ISO 9001、ISO 14001、IATF 16949といった国際規格に基づき、生産のあらゆる工程で品質を保証しています。"}
                        </p>
                    </ScrollReveal>
                </div>
                <div className="aboutUs-page">
                    <div className="about-grid">
                        <ScrollReveal>
                            <h2 className='text-center'>{lang === ('th') ? "เกี่ยวกับเรา" : lang === ('en') ? "About Us" : "私たちについて"}    </h2>
                        </ScrollReveal>
                        <ScrollReveal>
                            <h2 className='company-profile-text1'>{lang === ('th') ? "โปรไฟล์บริษัท" : lang === ('en') ? "Company Profile" : "会社案内"}  </h2>
                            <h4 className='company-profile-text'>{lang === ('th') ? "ขอบคุณเป็นอย่างยิ่งที่สละเวลาเยี่ยมชมเว็บไซต์ของเรา" : lang === ('en') ? "Thank you very much for taking the time to visit our website." : "私たちのウェブサイトをご覧いただき、誠にありがとうございます。"}</h4>
                            {aboutTH.map((item, index) => (
                                <p key={index} className='company-profile-text'>{lang === ('th') ? item : lang === ('en') ? aboutEN[index] : aboutJP[index]}</p>
                            ))}

                        </ScrollReveal>
                    </div>
                    <ScrollReveal>
                        <div className="president-image-box">
                            <div className="president-image">
                                <Image className='image-president-company' src={'/imageUser.png'} alt='บริษัท เจไออีไอ (ประเทศไทย) จำกัด ผู้ผลิต ชิ้นส่วนยางรถยนต์ จังหวัดชลบุรี' priority width={1000} height={1000} />
                            </div>
                            <div className="president-content">
                                <ScrollReveal>
                                    <h2 className='position-topmanager'>{lang === "th" ? "ประธานกรรมการผู้จัดการ" : lang === "en" ? "Managing Director" : "代表取締役社長"} </h2>
                                    <p className='top-manager-name'>{lang === "th" ? "คุณโยชิคัตสึ อินาดะ" : lang === "en" ? "Mr.Yoshikatsu Inada" : "稲田 義勝"}</p>

                                </ScrollReveal>
                            </div>
                        </div>
                    </ScrollReveal>



                </div>

            </section >
        </div>
    )
}
