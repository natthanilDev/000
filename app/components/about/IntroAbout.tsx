'use client'
import React from 'react'
import { useEffect, useState } from 'react'
import ScrollReveal from '../ScrollReveal/ScrollReveal'
export default function IntroAbout() {
    const [lang, setLang] = useState<'th' | 'en' | 'jp'>('th');
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedLang = localStorage.getItem('lang') as 'th' | 'en' | 'jp' | null;
            if (storedLang) setLang(storedLang);
        }
    }, []);
    return (
        <div>
            
            <div className="background-company-profile">
                <div className='j'>
                </div>
                <div className="company-profile-text-ji">
                    <ScrollReveal>
                        <h1 className='company-text-ji'>{lang === ('th') ? "โปรไฟล์" : lang === ('en') ? "Company" : "会社"}</h1>
                        <h1 className='company-text-ji1'>{lang === ('th') ? "บริษัท" : lang === ('en') ? "Profile" : "概要"}</h1>
                        <h3 className='company-text-ji2'>Jiei (Thailand).Co.,Ltd</h3>
                    </ScrollReveal>
                </div>
            </div>
        </div>
    )
}
