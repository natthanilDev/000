import React from 'react'
import Link from 'next/link'
import { useEffect, useState } from 'react';
export default function Btn_contactUs() {
     const [lang, setLang] = useState<'th' | 'en' | 'jp'>('th');
        useEffect(() => {
            if (typeof window !== 'undefined') {
                const storedLang = localStorage.getItem('lang') as 'th' | 'en' | 'jp' | null;
                if (storedLang) setLang(storedLang);
            }
        }, []);
  return (
    <div>
        <br /><br />
        <div className="contact-homepage">
                <Link className='contactHomepage' href={"/contact"}>
                    <div className="contact-box-homepage">
                        {lang === ('th') ? "ติดต่อเรา" : lang === ('en') ? "Contact Us" : "お問い合わせ"}
                    </div>
                </Link>
            </div>
    </div>
  )
}
