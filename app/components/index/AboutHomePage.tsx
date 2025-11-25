'use client'
import React from 'react'
import ScrollReveal from '../ScrollReveal/ScrollReveal'
import Image from 'next/image'
import { useState, useEffect } from 'react'
export default function AboutHomePage() {
    const [lang, setLang] = useState<'th' | 'en' | 'jp'>('th');
    const aboutTH = [
        "บริษัท เจไออีไอ (ไทยแลนด์) จํากัด ก่อตั้งขึ้นในเดือนพฤศจิกายน 2554 ในฐานะบริษัทสมาชิกของกลุ่มบริษัท Kasei Kogyo Co., Ltd. กลุ่มบริษัท Kasei Kogyo ซึ่งดำเนินธุรกิจมาตั้งแต่ปี 1966 โดยเน้นที่การอัดขึ้นรูปยางสำหรับใช้ในรถยนต์ ได้พัฒนามาถึงปัจจุบันพร้อมกับการพัฒนาอุตสาหกรรมยานยนต์ของโลก",
        "ผ่านกระบวนการที่หลากหลาย ตั้งแต่การวางแผนและการพัฒนาในวิธีการทางอุตสาหกรรมไปจนถึงการผลิต เราให้ความสำคัญกับการตอบสนองความต้องการของโลก และมีส่วนร่วมในการผลิตผลิตภัณฑ์ที่มีความแม่นยำและคุณภาพโดยใช้เทคโนโลยีขั้นสูงที่สามารถตอบสนองความต้องการของลูกค้าหลากหลายประเภท ทั้งหมดนี้มาจากฐานการผลิตของเราไม่เพียงแต่ในญี่ปุ่นเท่านั้น แต่ยังรวมถึงอเมริกาเหนือ จีน และเอเชีย",
        "กลุ่มบริษัท Kasei Kogyo ได้จัดโครงสร้างเพื่อให้สามารถตอบสนองต่อความต้องการที่เปลี่ยนแปลงอย่างรวดเร็วของอุตสาหกรรม โดยนำความรู้ความสามารถเชิงสร้างสรรค์ที่ได้รับจากการสั่งสมประสบการณ์ในอุตสาหกรรมยานยนต์มาปฏิบัติจริง",
        "ในอนาคต เราจะทุ่มเทความพยายามอย่างเต็มที่ในฐานะองค์กร เพื่อสร้างคุณประโยชน์ที่ยิ่งใหญ่กว่าเดิมให้กับสังคมโลก เราขอขอบคุณทุกท่านที่ให้การสนับสนุนและให้กำลังใจ และหวังว่าจะได้รับความอุปถัมภ์จากท่านต่อไปในอนาคต",
    ]
    const aboutEN = [
        "JIEI (Thailand) Co., Ltd. was established in November 2011 as a member of the Kasei Kogyo Co., Ltd. group. Kasei Kogyo, which has been in business since 1966 focusing on rubber molding for automotive use, has developed over the years alongside the global automotive industry.",
        "Through a diverse process, from planning and industrial method development to production, we focus on meeting global demands and contribute to producing precise and high-quality products using advanced technology that caters to various customer needs. All of this stems from our production bases not only in Japan but also in North America, China, and Asia.",
        "The Kasei Kogyo group has structured itself to respond to the rapidly changing demands of the industry, applying the creative knowledge and expertise accumulated through experience in the automotive sector.",
        "In the future, we will dedicate ourselves as an organization to create even greater benefits for global society. We sincerely thank everyone for their support and encouragement and hope to continue receiving your patronage.",
    ]
    const aboutJP = [
        "JIEI（タイランド）株式会社は、2011年11月にKasei Kogyo株式会社グループの一員として設立されました。1966年から自動車用ゴム成形を中心に事業を展開してきたKasei Kogyoグループは、世界の自動車産業の発展とともに成長してきました。",
        "計画や工業的手法の開発から製造まで、多様なプロセスを経て、私たちは世界のニーズに応えることに重点を置き、さまざまな顧客の要求に対応できる高度な技術を用いて、精密で高品質な製品の生産に貢献しています。これらは日本だけでなく、北米、中国、アジアの生産拠点からも行われています。",
        "Kasei Kogyoグループは、急速に変化する産業の需要に対応できるように組織を整え、自動車産業で蓄積した経験から得た創造的な知識と専門知識を実践に活かしています。",
        "今後、私たちは組織として全力を尽くし、世界社会により大きな貢献をしていきます。ご支援と励ましをくださった皆様に心より感謝申し上げ、今後ともご厚誼を賜りますようお願い申し上げます。",
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
                        <Image src={'/lobby.jpg'} className="image-about-home-page" alt="โรงงานผลิตชิ้นส่วนยางรถยนต์มาตรฐานสากล ISO & IATF16949 ที่ชลบุรี ประเทศไทย" width={1000} height={1000} priority></Image>
                    </ScrollReveal>
                </div>

                <div className="about-box-home-page">
                    <div className="content-box">
                        <div className="about-box">
                            <ScrollReveal>
                                <h2 className="about"> {lang === ('th') ? "เกี่ยวกับเรา" : lang === ('en') ? "About Us" : "私たちについて"}</h2>
                            </ScrollReveal>
                        </div>
                        <p className="content-about">{lang === ('th') ? "ขอบคุณมากที่สละเวลาเยี่ยมชมเว็บไซต์ของเรา" : lang === ('en') ? "Thank you very much for taking the time to visit our website." : "当社のウェブサイトをご覧いただき、誠にありがとうございます。"}</p>
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
