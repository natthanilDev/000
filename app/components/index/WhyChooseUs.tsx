'use client'
import React from 'react'
import ScrollReveal from '../ScrollReveal/ScrollReveal'
import BTNisoIndex from '../iso_btn/btn-isoIndex'
import { useEffect , useState } from 'react'
import Image from 'next/image'
export default function WhyChooseUs() {
     const [lang, setLang] = useState<'th' | 'en' | 'jp'>('th');

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedLang = localStorage.getItem('lang') as 'th' | 'en' | 'jp' | null;
            if (storedLang) setLang(storedLang);
        }
    }, []);
  return (
    <div>
        <div className="why-choose-we">
        
                            <div className="why-choose-box">
                                <div className="whyText-box">
                                    <ScrollReveal>
                                        <h2 className='why-text'>{lang === ('en') ? 'Why Choose Us?' : lang === ('th') ? "ทำไมต้องเลือกเรา?" : "なぜ私たちを選ぶのか？"}  </h2>
                                    </ScrollReveal>
                                </div>
        
                                <div className="why-choose-content">
                                    <ScrollReveal>
                                        <p className='p-text-why'>{lang === ('th') ? "ไม่ใช่แค่ผู้ผลิต แต่คือพาร์ทเนอร์ที่คุณไว้วางใจได้" : lang === ('en') ? "Not just a manufacturer, but a partner you can trust." : "単なるメーカーではなく、信頼できるパートナーです。"}</p>
                                        <p className='t-w-y'>{lang === ('th') ? "ที่ JIEI Thailand เรามีความเชี่ยวชาญมากกว่าทศวรรษ  ด้วยระบบมาตรฐาน ISO9001, ISO14001, IATF16949 เราผลิตชิ้นส่วนยางที่ผ่านการตรวจสอบทุกขั้นตอน ตอบโจทย์ความแม่นยำ ความทนทาน และความเป็นมิตรต่อสิ่งแวดล้อม เพราะเรารู้ว่าธุรกิจของคุณต้องการมากกว่าคุณภาพ แต่ต้องการ ความมั่นใจในทุกชิ้นงาน"
                                            : lang === ('en') ? "At JIEI Thailand, we have over a decade of expertise, certified with ISO 9001, ISO 14001, and IATF 16949. We manufacture rubber parts inspected at every stage, ensuring precision, durability, and environmental friendliness. Because we know your business needs more than just quality—it needs confidence in every product."
                                                : "JIEI Thailandでは、ISO9001、ISO14001、IATF16949の認証を取得し、10年以上の専門知識を有しています。当社は、すべての工程で検査を行ったゴム部品を製造し、精度、耐久性、環境への配慮を確保しています。 お客様のビジネスに必要なのは単なる品質だけでなく、すべての製品に対する信頼です。"}</p>
                                    </ScrollReveal>
        
                                </div>
                                <div className="iso-why-choose">
                                    <ScrollReveal>
                                        <h2 className='iso-text'>ISO</h2>
                                    </ScrollReveal>
                                    <ScrollReveal>
                                        <BTNisoIndex />
                                    </ScrollReveal>
        
                                </div>
                            </div>
        
        
                            <div className="why-choose-image">
                                <ScrollReveal>
                                    <Image src={'/Home-car.png'} className='image-iso' alt='โรงงานผลิตชิ้นส่วนยางรถยนต์มาตรฐานสากล ISO & IATF16949 ที่ชลบุรี ประเทศไทย"' width={1000} height={1000} priority />
                                </ScrollReveal>
                            </div>
        
                        </div >
    </div>
  )
}
