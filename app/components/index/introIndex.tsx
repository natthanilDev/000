import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image';
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
            <div className="container-background-page">
                <motion.div
                    className='introWeb-page'
                    initial={{ opacity: 0  }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{
                        type: "spring",
                        stiffness: 80,
                        damping: 18,
                        mass: 0.8
                    }}
                >
               
                    <div className="title-box-intro">
                        <h2 className="top-text-intro">{lang === "th" 
                        ? "เป็นผู้ผลิตชิ้นส่วนยางขึ้นรูปแบบเอ็กซ์ทรูชันสำหรับยานยนต์" 
                        : lang === "en" ? "A manufacturer that produces extrusion-molded rubber parts for automobiles." 
                        : "自動車用押出成形ゴム部品を製造するメーカーです。"}   </h2>
                    </div>
                    
                     <div className="title-box-intro text-center">
                        <Image className='logoJiei' src={`/logo.svg`} alt='' height={300} width={300}/>

                        <h1 className="center-text-intro">JIEI (THAILAND) CO.,LTD</h1>
                    </div>
                     <div className="title-box-intro">
                        <h3 className="button-text-intro"> {lang === "th" 
                        ? "ตามมาตรฐานสากล ISO & IATF ด้วยเทคโนโลยีการผลิตที่ทันสมัย" 
                        : lang ==="en" ? "Compliant with international ISO & IATF standards, using advanced manufacturing technology." 
                        : "国際規格である ISO と IATF に準拠し、先進的な製造技術を採用しています。"} </h3>
                    </div>
                
                </motion.div>
            </div>
        </div>
    )
}
