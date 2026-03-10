'use client'
import React from 'react'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
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
                <div className="box-about-intro">
                    <motion.div
                        className='image-about-intro'
                        initial={{ x: -40, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true, amount: 0.35 }}
                        transition={{
                            type: "spring",
                            stiffness: 80,
                            damping: 18,
                            mass: 0.8
                        }}
                    >
                        <Image className='image-company-about' src={"/JIEI(Thailnad).co.,ltd.jpg"} alt='' width={1000} height={1000} loading='lazy' />

                    </motion.div>
                    <motion.div
                        className='company-profile-text-ji'
                        initial={{ x: 40, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true, amount: 0.35 }}
                        transition={{
                            type: "spring",
                            stiffness: 80,
                            damping: 18,
                            mass: 0.8
                        }}>
                        <h1 className='company-text-ji'>{lang === ('th') ? "โปรไฟล์บริษัท" : lang === ('en') ? "Company Profile" : " 会社 概要"}</h1>
                        <h3 className='company-text-ji2'>JIEI (THAILAND) CO., LTD</h3>

                    </motion.div>
                </div>
            </div>
        </div>
    )
}
