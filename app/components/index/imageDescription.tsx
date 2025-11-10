'use client'
import { useEffect, useState } from 'react'
import ScrollReveal from '../ScrollReveal/ScrollReveal'
import Image from 'next/image';
export default function ImageDescription() {
    const [lang, setLang] = useState<'th' | 'en' | 'jp'>('th');

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedLang = localStorage.getItem('lang') as 'th' | 'en' | 'jp' | null;
            if (storedLang) setLang(storedLang);
        }
    }, []);
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
    <div>
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
                                                        {lang === ('th') ? content_supportTH[index] : lang === ('en') ? content_supportEN[index] : content_supportJP[index]}
                                                    </p>
                                                </ScrollReveal>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
    </div>
  )
}
