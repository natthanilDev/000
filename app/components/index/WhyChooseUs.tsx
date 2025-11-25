'use client'
import React from 'react'
import ScrollReveal from '../ScrollReveal/ScrollReveal'
// import BTNisoIndex from '../iso_btn/btn-isoIndex'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
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

                            <p className='t-w-y'>
                                {lang === ('th') ? "ที่ บริษัท เจไออีไอ (ไทยแลนด์) จำกัด เรามีความเชี่ยวชาญมากกว่าทศวรรษ ด้วยระบบการผลิตตามมาตรฐานสากล ISO 9001, ISO 14001 และ IATF 16949 ซึ่งสามารถตอบสนองทั้งด้านคุณภาพ ด้านการจัดส่ง และด้านสิ่งแวดล้อม เพราะเรารู้ว่าธุรกิจของคุณให้ความสำคัญกับทุกชิ้นส่วน"
                                    : lang === ('en') ? "At JIEI (Thailand) Co., Ltd., we have more than a decade of expertise supported by production systems certified to international standards—ISO 9001, ISO 14001, and IATF 16949. These systems enable us to meet requirements in quality, delivery, and environmental responsibility, because we understand that every single component matters to your business."
                                        : "JIEI（Thailand）Co., Ltd. は、ISO 9001、ISO 14001、IATF 16949 といった国際規格に基づく生産システムを備え、10年以上の専門性を培ってきました。品質、納期、環境面の要求に応えることができるのは、お客様のビジネスにとってすべての部品が重要であると理解しているからです。"}</p>
                        </ScrollReveal>

                    </div>
                    <div className="iso-why-choose">
                        <ScrollReveal>
                            <h2 className='iso-text'>ISO</h2>
                        </ScrollReveal>
                        <ScrollReveal>
                            {/* <BTNisoIndex /> */}
                            <div className="bsi-box">
                                <Link className='link-bsi-9001' href={'/iso9001'}>
                                    <div className="bsi9001">
                                        <p className='btn-bsi-iso'>CERTIFIED</p>
                                    </div>
                                </Link>

                                <Link className='link-bsi-14001' href={'/iso14001'}>
                                    <div className="bsi14001">
                                        <p className='btn-bsi'>CERTIFIED</p>

                                    </div>
                                </Link>
                                <Link className='link-bsi-16949' href={'/iatf16949'}>
                                    <div className="bsi16949">
                                        <p className='btn-bsi'>CERTIFIED</p>
                                    </div>
                                </Link>
                            </div>
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
