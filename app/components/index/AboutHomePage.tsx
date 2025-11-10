'use client'
import React from 'react'
import ScrollReveal from '../ScrollReveal/ScrollReveal'
import Image from 'next/image'
import { useState, useEffect } from 'react'
export default function AboutHomePage() {
    const [lang, setLang] = useState<'th' | 'en' | 'jp'>('th');
    const aboutTH = [
        "JIEI Thailand Co., Ltd. เป็นผู้ผลิตชิ้นส่วนยางรถยนต์และยางอุตสาหกรรมคุณภาพสูง ตั้งอยู่ที่จังหวัดชลบุรี ประเทศไทย เรามีความเชี่ยวชาญด้านการออกแบบและการผลิต ยางขอบประตูรถยนต์ (Automotive Rubber Seals) และชิ้นส่วนยางที่ใช้ในอุตสาหกรรมยานยนต์มากกว่า 14 ปี",
        "บริษัทมุ่งมั่นพัฒนาเทคโนโลยีการผลิตที่ทันสมัย ควบคู่กับมาตรฐานสากล เช่น ISO/IATF16949 เพื่อตอบสนองความต้องการของผู้ผลิตรถยนต์ (OEM) และลูกค้าทั่วโลก ปัจจุบันเราได้ส่งออกสินค้าไปยัง สหรัฐอเมริกา ญี่ปุ่น และประเทศในยุโรป",
        "จุดยืนของ JIEI คือการเป็น “พันธมิตรที่ไว้ใจได้ของอุตสาหกรรมยานยนต์” โดยให้ความสำคัญกับคุณภาพ ความทนทาน และการส่งมอบตรงเวลา"
    ]
    const aboutEN = [
        "JIEI Thailand Co., Ltd. is a manufacturer of high-quality automotive and industrial rubber parts, located in Chonburi Province, Thailand. We have over 14 years of expertise in designing and producing automotive rubber seals and rubber components used in the automotive industry.",
        "The company is committed to developing advanced manufacturing technologies alongside international standards such as ISO/IATF16949 to meet the requirements of automotive manufacturers (OEMs) and customers worldwide. Currently, we export our products to the United States, Japan, and European countries.",
        "JIEI’s stance is to be a “trusted partner of the automotive industry,” focusing on quality, durability, and on-time delivery.",
    ]
    const aboutJP = [
        "JIEI Thailand株式会社は、タイ・チョンブリー県に拠点を置く高品質な自動車用および産業用ゴム部品のメーカーです。私たちは、自動車用ゴムシールや自動車産業で使用されるゴム部品の設計・製造において、14年以上の専門知識を持っています。",
        "当社は、ISO/IATF16949などの国際規格と並行して、先進的な製造技術の開発に取り組み、自動車メーカー（OEM）および世界中の顧客のニーズに応えています。現在、当社の製品はアメリカ、日本、ヨーロッパ諸国に輸出されています。",
        "JIEIの立場は、「自動車産業の信頼できるパートナー」であることであり、品質、耐久性、そして納期厳守を重視しています。"
    ]

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedLang = localStorage.getItem('lang') as 'th' | 'en' | 'jp' | null;
            if (storedLang) setLang(storedLang);
        }
    }, []);


    return (
        <div>
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
                                <h2 className="about"> {lang === ('th') ? "เกี่ยวกับเรา" : lang === ('en') ? "About Us" : "私たちについて"}</h2>
                            </ScrollReveal>
                        </div>

                        {aboutTH.map((item, index) => (
                            <ScrollReveal key={index}>
                                <p className="content-about">
                                    {lang === ('th') ? item : lang === ('en') ? aboutEN[index] : aboutJP[index]}
                                </p>
                            </ScrollReveal>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    )
}
