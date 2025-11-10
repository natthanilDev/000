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
                                    JIEI THAILAND
                                </h1>
                            </div>
                            <div className="company_name_box">
                                <h1 className="company_name_sub">
                                    {lang === ('th')
                                        ? "ผู้ผลิตชิ้นส่วนยางรถยนต์มาตรฐานสากล ISO & IATF16949 ในชลบุรี"   //....
                                        : lang === ('en')
                                            ? 'Automotive Rubber Parts Manufacturer with ISO & IATF 16949 International Standards, Chonburi, Thailand'
                                            : 'ISOおよびIATF16949国際規格認証取得の自動車用ゴム部品メーカー（タイ・チョンブリー県）'}
                                </h1>
                            </div>
                            <div className="description_company_box">
                                <p className="description_company">
                                    {lang === ('th')
                                        ? "โรงงานผลิตชิ้นส่วนยางรถยนต์ เช่น ซีลยาง ยางขอบประตูรถยนต์ และยางกันสั่นสะเทือน พร้อมเทคโนโลยีการผลิตทันสมัยและมาตรฐานระดับโลก"
                                        : lang === ('en')
                                            ? "We are a manufacturer of high-quality automotive rubber parts for the automotive industry, built on international standards and advanced production technology."
                                            : "私たちは、自動車業界向けの高品質な自動車用ゴム部品を製造しており、国際規格と最新の生産技術を備えています。"}
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
