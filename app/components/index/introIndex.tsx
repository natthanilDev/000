import React, { useEffect, useState } from 'react'
import ScrollReveal from '../ScrollReveal/ScrollReveal'
import Link from 'next/link';
export default function IntroIndex() {
    const [lang, setLang] = useState<'th' | 'en' | 'jp'>('th');

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedLang = localStorage.getItem('lang') as 'th' | 'en' | 'jp' | null;
            if (storedLang) setLang(storedLang);
        }
    }, []);
    return (
        <div>
            <section className="relative h-screen w-full overflow-hidden">
                <video className="video_intro absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover z-[-1]" autoPlay muted loop playsInline poster='/about-page.jpg'> <source src="/video.mp4" type="video/mp4" />
                    เบราว์เซอร์ไม่รองรับวิดีโอ
                </video>

                <ScrollReveal>
                    <div className="container-Display">
                        <div className="border-display">
                            <div className="company_name_box">
                                <h1 className="company_name">
                                   {lang === 'th' ? 'บริษัท เจไออีไอ (ไทยแลนด์) จํากัด'  : lang === 'en' ? 'JIEI THAILAND CO., LTD.' : 'JIEI THAILAND CO., LTD.'} 
                                </h1>
                            </div>
                            <div className="company_name_box">
                                <h1 className = "company_name_sub">
                                    {lang === ('th')
                                        ? "คือ ผู้ผลิตชิ้นส่วนซีลยาง ทั้งภายใน ภายนอกของรถยนต์ และอุปกรณ์ให้กำเนิดพลังงาน"   //....
                                        : lang === ('en')
                                            ? 'A manufacturer of rubber seal components for both the interior and exterior of automobiles, as well as for power-generation equipment.'
                                            : '自動車の内装・外装用のゴムシール部品と、発電関連機器向け部品を製造するメーカーです。'}
                                </h1>
                            </div>
                            <div className="description_company_box">
                                <p className="description_company">
                                    {lang === ('th')
                                        ? "ตามมาตรฐานสากล ISO & IATF ด้วยเทคโนโลยีการผลิตที่ทันสมัย"
                                        : lang === ('en')
                                            ? "Compliant with international ISO & IATF standards, using advanced manufacturing technology."
                                            : "国際規格である ISO と IATF に準拠し、先進的な製造技術を採用しています。"}
                                </p>
                            </div>

                            <Link href="/about" className="btn_link1">
                                <div className="button-box">
                                    {lang === ('th') ? "เกี่ยวกับเรา" : lang === ('en') ? "About Us" : "会社概要"}
                                </div>
                            </Link>
                        </div>
                    </div>
                </ScrollReveal>
            </section>
        </div>
    )
}
