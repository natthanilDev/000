import React from 'react'
import ScrollReveal from '../ScrollReveal/ScrollReveal'
import Image from 'next/image'
import { useState , useEffect } from 'react';
import Link from 'next/link';
export default function AboutMap() {
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

                <div className="google-map-box">
                    <label htmlFor="btn-showMap">
                        <p className='btn-googlemap' >
                            {lang === ('th') ? "แผนที่" : lang === ('en') ? "Map" : "地図"} <i className="bi bi-search-heart"></i>
                        </p>
                    </label>
                    <input className='btn-showMap d-none' type="checkbox" id="btn-showMap" />

                    <div className='map-jiei'>
                        <Link href={"/Map.png"} target='_blank'>
                            <div className='google-popup'>
                                <Image className='image-map' src={'/Map.png'} alt='' width={1000} height={1000} loading='lazy' />
                            </div>
                        </Link>
                    </div>
                </div>
            </ScrollReveal>
        </div>
    )
}
