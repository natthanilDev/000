import React, { useEffect, useState } from 'react'
import ScrollReveal from '../ScrollReveal/ScrollReveal'
import Image from 'next/image'
export default function Confidence() {
    const [lang, setLang] = useState<'th' | 'en' | 'jp'>('th')
    const Analysis = [
        '/dean_r1_c1.png',
        '/dean_r1_c3.png',
        '/dean_r3_c1.png',
        '/dean_r3_c3.png',
    ]
    const Development = [
        '/03_r1_c1.png',
        '/03_r1_c3.png',
        '/tech (2).png',
        '/tech (1).png',
        

    ]
    const Evaluation =[
        '/04_r1_c1.png',
        '/04_r1_c3.png',
        '/04_r1_c5.png',
        '/04_r1_c8.png',
        '/tech (3).png'
    ]
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedLang = localStorage.getItem('lang') as 'th' | 'en' | 'jp' | null;
            if (storedLang) setLang(storedLang);
        }
    }, []);

    return (
        <div>

            <div className="background-video-box">
                <div className="box-bc">
                    <ScrollReveal>
                        <h2 className='video-text'>
                            {lang === 'th' ? "เทคโนโลยีการผลิตของเรา"
                                : lang === 'en' ? "Our manufacturing technology"
                                    : "当社の製造技術"}
                        </h2>

                    </ScrollReveal>
                    {/* <ScrollReveal>
                        <video className="video-car" autoPlay muted loop playsInline poster='/Automobile.png'>
                            <source src="/Video-Intro.mp4" type="video/mp4" />
                            เบราว์เซอร์ไม่รองรับวิดีโอ
                        </video>
                    </ScrollReveal> */}
                    <div className="topic-tech-card">
                        <ScrollReveal>
                            <h2 className="video-text-topic">
                                {lang === 'th' ? "การออกแบบและการวิเคราะห์" : lang === 'en' ? "Design & Analysis" : "設計と解析"}
                            </h2>
                        </ScrollReveal>
                    </div>
                    <div className="tech-our">
                        {Analysis.map((item, index) => (
                            <ScrollReveal key={index}>
                                <div className="box-tech-our">
                                    <Image src={item} width={1000} height={1000} loading='lazy' alt={`Analysis ${index + 1}`} className="img-tech-our" />
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>


                    <div className="topic-tech-card">
                        <ScrollReveal>
                            <h2 className="video-text-topic">
                                {lang === 'th' ? "การพัฒนาวัสดุ" : lang === 'en' ? "Materials Development" : "材料開発"}
                            </h2>
                        </ScrollReveal>
                    </div>
                    <div className="tech-our">
                        {Development.map((item, index) => (
                            <ScrollReveal key={index}>
                                <div className="box-tech-our">
                                    <Image width={1000} height={1000} loading='lazy' src={item} alt={`Analysis ${index + 1}`} className="img-tech-our" />
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>

                    <div className="topic-tech-card">
                        <ScrollReveal>
                            <h2 className="video-text-topic">
                                {lang === 'th' ? "การประเมินสมรรถนะ" : lang === 'en' ? "Functional Evaluation" : "機能評価"}
                            </h2>
                        </ScrollReveal>
                    </div>
                    <div className="tech-our">
                        {Evaluation.map((item, index) => (
                            <ScrollReveal key={index}>
                                <div className="box-tech-our">
                                    <Image width={1000} height={1000} loading='lazy' src={item} alt={`Analysis ${index + 1}`} className="img-tech-our" />
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>



                    <div className="description-box">
                        <div className="why-choose-us1">
                            <ScrollReveal>
                                <h2 className="topic-art1">
                                    {lang === 'th' ? "ประโยชน์ของยางขอบประตูรถยนต์มีอะไรบ้าง?" : lang === 'en' ? "Benefits of car door rubber" : "自動車ドアゴムの利点"}
                                </h2>
                            </ScrollReveal>

                            <ScrollReveal>
                                <h3 className="art-for">
                                    {lang === 'th' ? "ยางขอบประตูรถยนต์ (Door Seal / Weatherstrip) มีประโยชน์ เช่น" : lang === 'en' ? "Car door rubber (Door Seal / Weatherstrip) has benefits such as" : "自動車のドアゴム（ドアシール／ウェザーストリップ）には、次のような利点があります。"}
                                </h3>
                            </ScrollReveal>

                            <div className="description-box-art">

                                <div className="description1">
                                    <ul>
                                        <li className="data-description">
                                            <ScrollReveal>
                                                <h4 className="topic-list">{lang === 'th' ? "1. ป้องกันเสียงรบกวน" : lang === 'en' ? "1. Reduces noise" : "1. 騒音を低減する"}</h4>
                                                <p className="text-description-topic-list">
                                                    {lang === 'th' ? "ลดเสียงลมและถนน ทำให้ห้องโดยสารเงียบขึ้น" : lang === 'en' ? "Reduces wind and road noise, making the cabin quieter." : "風や道路の騒音を減らし、車内をより静かにします。"}
                                                </p>
                                            </ScrollReveal>
                                        </li>
                                        <li className="data-description">
                                            <ScrollReveal>
                                                <h4 className="topic-list">{lang === 'th' ? "2. ป้องกันน้ำและฝุ่น" : lang === 'en' ? "2. Prevents water and dust" : "2. 水やほこりを防ぐ"} </h4>
                                                <p className="text-description-topic-list">
                                                    {lang === 'th' ? "กันน้ำฝนและฝุ่นเข้าสู่ภายในรถ" : lang === 'en' ? "Prevents rainwater and dust from entering the vehicle interior." : "雨水やほこりが車内に入るのを防ぐ"}
                                                </p>
                                            </ScrollReveal>
                                        </li>
                                        <li className="data-description">
                                            <ScrollReveal>
                                                <h4 className="topic-list">{lang === 'th' ? "3. เพิ่มความปลอดภัย " : lang === 'en' ? "3. Enhances safety" : "3. 安全性を高める"}   </h4>
                                                <p className="text-description-topic-list">
                                                    {lang === 'th' ? "ลดแรงกระแทกของประตู ปิดสนิทและยืดอายุการใช้งานตัวถัง" : lang === 'en' ? "Reduces door impact, ensures tight closure, and extends the body’s lifespan." : "ドアの衝撃を軽減し、しっかり閉じ、車体の寿命を延ばす"}
                                                </p>
                                            </ScrollReveal>

                                        </li>
                                    </ul>

                                    <ul>
                                        <li className="data-description">
                                            <ScrollReveal>
                                                <h4 className="topic-list">{lang === 'th' ? "4. รักษาอุณหภูมิภายในรถ" : lang === 'en' ? "4. Maintains the interior temperature of the vehicle" : "4. 車内の温度を保つ"}</h4>
                                                <p className="text-description-topic-list">
                                                    {lang === 'th' ? "ช่วยให้อากาศจากแอร์ไม่รั่วออก และกันอากาศร้อนจากภายนอกไม่ให้เข้ามา" : lang === 'en' ? "Prevents air from the AC from leaking out and blocks hot air from entering from outside." : "エアコンの空気が漏れないようにし、外からの熱い空気の侵入を防ぐ"}
                                                </p>
                                            </ScrollReveal>
                                        </li>
                                        <li className="data-description">
                                            <ScrollReveal>
                                                <h4 className="topic-list">{lang === 'th' ? "5. เพิ่มความนุ่มนวลในการปิดประตู" : lang === 'en' ? "5. Provides smoother door closing" : "5. ドアの閉まりをよりスムーズにする"} </h4>
                                                <p className="text-description-topic-list">
                                                    {lang === 'th' ? "เมื่อปิดประตูจะนุ่มขึ้น ไม่กระแทกแข็งเกินไป" : lang === 'en' ? "The door closes more softly, without slamming harshly. " : "ドアを閉めるときに柔らかく閉まり、強くぶつからない"}
                                                </p>
                                            </ScrollReveal>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
