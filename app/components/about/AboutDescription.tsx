'use client'
import React from 'react'
import ScrollReveal from '../ScrollReveal/ScrollReveal'
import { useEffect , useState } from 'react';
export default function AboutDescription() {
     const [lang, setLang] = useState<'th' | 'en' | 'jp'>('th');
        useEffect(() => {
            if (typeof window !== 'undefined') {
                const storedLang = localStorage.getItem('lang') as 'th' | 'en' | 'jp' | null;
                if (storedLang) setLang(storedLang);
            }
        }, []);
  return (
    <div>
        <ScrollReveal>
                    <h1 className='about-company-name'>{lang === ('th') ? "บริษัท เจไออีไอ (ประเทศไทย) จำกัด" : lang === ('en') ? "JIEI (Thailand) Co., Ltd." : "ジェイアイ (タイランド)株式会社"} </h1>
                </ScrollReveal>

                <ScrollReveal>
                    <div className="table-company-profile">
                        <div className="tr-about">
                            <div className='content-inthe-table'>
                                <div className="content-in-aboutBox">
                                    <span className="title-about-text"> {lang === ('th') ? "ชื่อบริษัท" : lang === ('en') ? "Company Name" : "会社名"}</span>
                                </div>
                                <div className="content-in-aboutBox">
                                    {lang === ('th') ? "บริษัท เจไออีไอ (ประเทศไทย) จำกัด" : lang === ('en') ? "JIEI (Thailand) Co., Ltd." : "ジェイアイイーアイ（タイランド）株式会社"}
                                </div>
                            </div>
                            <div className='content-inthe-table1'>
                                <div className="content-in-aboutBox">

                                    <span className="title-about-text">   {lang === ('th') ? "ที่อยู่" : lang === ('en') ? "Address" : "住所"}</span>
                                </div>
                                <div className="content-in-aboutBox">

                                    {lang === ('th') ? " นิคมอุตสาหกรรมปิ่นทอง 4 หน่วย G18 180/3 หมู่ 6 ต.บึง อ.ศรีราชา ชลบุรี 20230 ประเทศไทย โทร. 033136581-4" : lang === ('en') ? "Pinthong Industrial Estate 4, Unit G18 180/3 Moo 6, Bueng Sub-district,Si Racha District, Chonburi 20230, Thailand Tel: +66 (0)33-136581-4" : "ピントン工業団地4、G18号ユニット 180/3 ムー6、ブン地区 シラチャー郡、チョンブリー県 20230 タイ王国 電話: +66 (0)33-136581-4"}
                                </div>
                            </div>
                            <div className='content-inthe-table'>
                                <div className="content-in-aboutBox">
                                    <span className="title-about-text"> {lang === ('th') ? "ก่อตั้งเมื่อ" : lang === ('en') ? "Established on" : "設立日"} </span>
                                </div>
                                <div className="content-in-aboutBox">
                                    {lang === ('th') ? "วันศุกร์ ที่ 11 พฤศจิกายน พ.ศ. 2554" : lang === ('en') ? "Friday, 11ᵗʰ November 2011" : "2011年11月11日（金曜日）"}
                                </div>
                            </div>
                            <div className='content-inthe-table1'>
                                <div className="content-in-aboutBox">
                                    <span className="title-about-text">{lang === ('th') ? "ทุนจดทะเบียน" : lang === ('en') ? "Registered Capital" : "登録資本金"}</span>
                                </div>
                                <div className="content-in-aboutBox">

                                    {lang === ('th') ? "150,000,000 บาท" : lang === ('en') ? "150,000,000 Baht" : "1億5,000万バーツ"}
                                </div>
                            </div>

                        </div>

                    </div>
                </ScrollReveal>
    </div>
  )
}
