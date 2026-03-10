import React from 'react'
import { useEffect, useState } from 'react';
import Image from 'next/image'
import { motion } from 'framer-motion';
export default function AboutJIEI() {
    const [lang, setLang] = useState<'th' | 'en' | 'jp'>('th');
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedLang = localStorage.getItem('lang') as 'th' | 'en' | 'jp' | null;
            if (storedLang) setLang(storedLang);
        }
    }, []);
    const aboutTH = [
        "บริษัท เจไออีไอ (ไทยแลนด์) จำกัด ก่อตั้งขึ้นเมื่อวันที่ 11 พฤศจิกายน 2011 ในฐานะบริษัทในเครือของกลุ่มบริษัท Kasei Kogyo Co., Ltd. ซึ่งมีประวัติยาวนานตั้งแต่ปี 1966 และเติบโตควบคู่ไปกับการพัฒนาอุตสาหกรรมยานยนต์ของโลก ในฐานะผู้ผลิตที่เชี่ยวชาญด้านการผลิตยางแบบเอ็กซ์ทรูชัน (Rubber Extrusion) สำหรับอุตสาหกรรมยานยนต์",
        "บริษัทของเรามุ่งเน้นกระบวนการแบบครบวงจร ตั้งแต่การวางแผน การวิจัยและพัฒนา ไปจนถึงการผลิตด้วยเทคโนโลยีขั้นสูง เพื่อส่งมอบชิ้นส่วนยางสำหรับยานยนต์ที่มีคุณภาพสูง ซึ่งสามารถตอบสนองความต้องการที่หลากหลายของลูกค้าในประเทศญี่ปุ่น สหรัฐอเมริกา จีน และประเทศต่าง ๆ ในเอเชีย",
        "กลุ่มบริษัท Kasei Kogyo ได้รับการยอมรับว่าเป็นองค์กรที่สามารถปรับตัวต่อการเปลี่ยนแปลงอย่างรวดเร็วของอุตสาหกรรมยานยนต์ และมีความรู้ความชำนาญรวมถึงประสบการณ์มากกว่า 50 ปี ในการผลิตชิ้นส่วนยางสำหรับยานยนต์",
        "สำหรับอนาคต บริษัท JIEI (THAILAND) CO., LTD. จะมุ่งมั่นแสวงหานวัตกรรมอย่างต่อเนื่อง เพื่อสร้างผลิตภัณฑ์ที่มีคุณภาพ ความแม่นยำ และเป็นไปตามมาตรฐานสากล เรามุ่งหวังที่จะเป็นผู้ผลิตชิ้นส่วนยางสำหรับยานยนต์ระดับโลก ที่สามารถสร้างคุณค่าและประโยชน์ให้กับสังคมโลก"
    ]
    const aboutEN = [
        "JIEI (THAILAND) CO., LTD. was established on November 11, 2011, as a group subsidiary of Kasei Kogyo Co., Ltd. The Kasei Kogyo Group has a long history dating back to 1966 and has grown alongside the development of the global automotive industry as a specialized manufacturer of rubber extrusion for automobiles.",
        "Our company focuses on an integrated process—from planning and research & development to production using advanced technologies—to provide high-quality automotive rubber parts that meet the diverse needs of customers in Japan, the United States, China, and other Asian countries.",
        "The Kasei Kogyo Group is recognized as an organization capable of responding to the rapid changes in the automotive industry and possesses more than 50 years of know-how and experience in manufacturing automotive rubber parts.",
        "Looking toward the future, JIEI (THAILAND) CO., LTD. will continue to pursue constant innovation in order to create products with excellent quality, precision, and compliance with international standards. We aim to become a global manufacturer of automotive rubber parts that delivers value and benefits to the world.",
    ]
    const aboutJP = [
        "JIEI (THAILAND) CO.,LTD.は、2011年11月11日に化成工業株式会社のグループ子会社として設立されました。化成工業グループは1966年からの長い歴史を持ち、自動車産業向けゴム押出（Rubber Extrusion for Automobiles）専門メーカーとして、世界の自動車産業の発展とともに成長してきました。",
        "当社は、企画、研究開発から先端技術を用いた生産まで、一貫したプロセスに注力し、日本、アメリカ、中国、そしてアジア各国のお客様の多様なニーズに応える高品質な自動車用ゴム部品を提供しています。",
        "化成工業グループは、自動車産業の急速な変化に対応できる組織として認められており、自動車用ゴム部品製造における50年以上のノウハウと経験を有しています。",
        "将来に向けて、JIEI (THAILAND) CO.,LTD. は、優れた品質、精度、そして国際規格を備えた製品を生み出すため、絶え間ない革新を追求し続けます。私たちは、世界に価値と利益をもたらすグローバルな自動車用ゴム部品メーカーを目指しています。",
    ]
    return (
        <div>
            <section className="company-profile">
                <motion.div
                    className='why-chose-jiei'
                    initial={{ opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{
                        type: "spring",
                        stiffness: 80,
                        damping: 18,
                        mass: 0.8
                    }}>


                    <h1 className='AboutUS'> {lang === ('th') ? "เกี่ยวกับเรา | โปรไฟล์บริษัท" : lang === ('en') ? "ABOUT US | Company Profile" : "私たちについて | 会社案内"} </h1>
                    <h1 className='text-jiei-about-page'>{lang === ('th') ? "บริษัท เจไออีไอ (ไทยแลนด์) จำกัด – เป็นผู้ผลิตชิ้นส่วนซีลยาง" : lang === ('en') ? "JIEI (THAILAND) CO.,LTD.) - Automotive Rubber Parts Manufacturer" : "JIEI (THAILAND) CO.,LTD. – 自動車用ゴム部品メーカー"}
                    </h1>
                    <p className='text-center'>
                        {lang === ('th')
                            ? "เป็นผู้ผลิตชิ้นส่วนยางขึ้นรูปแบบเอ็กซ์ทรูชันสำหรับยานยนต์ โดยปฏิบัติตามมาตรฐานสากล ISO และ IATF และใช้เทคโนโลยีการผลิตที่ทันสมัย"
                            : lang === ('en') ? "A manufacturer of extrusion-molded rubber parts for automobiles. The company complies with international standards such as ISO and IATF and adopts advanced manufacturing technologies."
                                : "自動車用押出成形ゴム部品を製造するメーカーです。国際規格である ISO と IATF に準拠し、先進的な製造技術を採用しています。"}
                    </p>
                </motion.div>
                <div className="aboutUs-page">
                    <motion.div
                        className='about-grid'
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true, amount: 0.35 }}
                        transition={{
                            type: "spring",
                            stiffness: 80,
                            damping: 18,
                            mass: 0.8
                        }}>

                        <h2 className='text-about-us'>{lang === ('th') ? "เกี่ยวกับเรา" : lang === ('en') ? "About Us" : "私たちについて"}    </h2>
                        <h2 className='company-profile-text1'>{lang === ('th') ? "โปรไฟล์บริษัท" : lang === ('en') ? "Company Profile" : "会社案内"}  </h2>
                        <h4 className='company-profile-text'>{lang === ('th') ? "ขอขอบพระคุณเป็นอย่างยิ่งที่เข้าชมเว็บไซต์ของเรา" : lang === ('en') ? "Thank you very much for visiting our website." : "私たちのウェブサイトをご覧いただき、誠にありがとうございます。"}</h4>
                        {aboutTH.map((item, index) => (
                            <p key={index} className='company-profile-text'>{lang === ('th') ? item : lang === ('en') ? aboutEN[index] : aboutJP[index]}</p>
                        ))}
                    </motion.div>
                    <motion.div
                        className='president-image-box'
                        initial={{ x: 20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true, amount: 0.35 }}
                        transition={{
                            type: "spring",
                            stiffness: 80,
                            damping: 18,
                            mass: 0.8
                        }}>
                    
                        <div className="president-image">
                            <Image className='image-president-company' src={'/MD/MD.png'} alt='บริษัท เจไออีไอ (ไทยแลนด์) จำกัด ผู้ผลิต ชิ้นส่วนยางรถยนต์ จังหวัดชลบุรี' priority width={1000} height={1000} />
                        </div>
                        <div className="president-content">
                            <h2 className='position-topmanager'>{lang === "th" ? "ประธานกรรมการผู้จัดการ" : lang === "en" ? "Managing Director" : "代表取締役社長"} </h2>
                            <p className='top-manager-name'>{lang === "th" ? "คุณโยชิคัตสึ อินาดะ" : lang === "en" ? "Mr. Yoshikatsu Inada" : "稲田 好克"}</p>
                        </div>
                    
                    </motion.div>
                </div>

            </section >
        </div>
    )
}
