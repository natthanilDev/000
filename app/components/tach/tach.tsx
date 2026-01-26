'use client'
import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import ScrollReveal from '../ScrollReveal/ScrollReveal'
import { useEffect, useState } from 'react'

export default function Tach() {
    const topicTH = [
        'การออกแบบด้วยคอมพิวเตอร์ / CATIA',
        'การวิเคราะห์การกระจายความเค้น',
        'การวิเคราะห์การติดตามรัศมี (หรือการติดตามการเคลื่อนที่)',
        'การวิเคราะห์การไหลของวัสดุ',
        // 'การวิเคราะห์แรงกดและความเค้นสัมผัส'
    ]
    const topicEN = [
        'CAD / CATIA',
        'Stress Distribution Analysis',
        'R Tracking Analysis',
        'Material Flow Analysis',
        // 'Compressive Load Analysis & Contact Stress Analysis'
    ]

    const topicJP = [
        'CAD / CATIA',
        '応力分布解析',
        'R追従性解析',
        '材料流動解析',
        // '圧縮荷重解析・接触応力解析'
    ]
    // ----------------------------------------------------------------------------------

    const contentTH = [
        'เราใช้ซอฟต์แวร์ CATIA 3D CAD เวอร์ชันล่าสุดในการออกแบบ ซึ่งช่วยให้สามารถสร้างโมเดลชิ้นส่วนยางสำหรับยานยนต์ได้อย่างแม่นยำ และรับประกันคุณภาพและความเที่ยงตรงในระดับสูง',
        'การวิเคราะห์ความเค้นและพฤติกรรมของผลิตภัณฑ์ด้วยคอมพิวเตอร์ ช่วยให้สามารถประเมินสมรรถนะของผลิตภัณฑ์ได้อย่างแม่นยำก่อนการผลิตจริง',
        'เพื่อยืนยันว่าประสิทธิภาพการซีลเพียงพอ จึงทำการวิเคราะห์แรงอัดและความเค้นที่จุดสัมผัส',
        'ทำการวิเคราะห์พฤติกรรมของวัสดุภายในแม่พิมพ์ระหว่างกระบวนการฉีดขึ้นรูป โดยจำลองการไหลของวัสดุ ความดัน การหดตัว และการบิดงอในระหว่างขั้นตอนการเติมเต็ม เพื่อนำผลการเปลี่ยนแปลงเหล่านี้มาประยุกต์ใช้ในการออกแบบแม่พิมพ์ที่เหมาะสมที่สุด',
    ]

    const contentEN = [
        "We use the latest version of CATIA 3D CAD software for design, enabling precise modeling of automotive rubber components and ensuring high quality and high accuracy.",
        "By analyzing product stress and behavior using computer simulations, it is possible to accurately estimate product performance before actual manufacturing.",
        "To verify that the sealing performance is sufficient, compression load and contact stress are analyzed.",
        "Material behavior inside the mold during the injection molding process is analyzed. By simulating material flow, pressure, shrinkage, and warpage during the filling process, an optimal mold design that reflects these variations is achieved.",
        // "We analyze compressive loads and contact stresses to confirm that seal performance is satisfactory."
    ]
    const contentJP = [
        '私たちは、CATIA 3D CAD ソフトウェアの最新バージョンを使用して設計を行っています。自動車用ゴム部品の精密なモデリングが可能となり、高品質と高精度を保証します。',
        '製品の応力や挙動をコンピュータで解析することにより、実際に製造する前に製品の性能を正確に見積もることができます。',
        'シール性能が十分であることを確認するために、圧縮荷重および接触応力を解析します。',
        '射出成形プロセス中の金型内における材料の挙動を解析し、充填プロセス中の材料の流動、圧力、収縮、反り変形をシミュレーションすることで、それらの変化を反映させた最適な金型設計を行います。',
    ]


    const topicTH1 = [
        
        "การวัดความหนืดของยาง (Mooney Viscosity)",
        "การวัดค่าความแข็งและความถ่วงจำเพาะ",
        "การวัดค่าความต้านทานแรงดึง",
    ]

    const topicEN1 = [
        "Money Viscosity Measurements",
        "Hardness & Specific Gravity Measurements",
        "Tensile Strength Measurements",
    ]

    const topicJP1 = [
        'テストロール',
        'ムーニー粘度測定',
        '硬度および比重測定',
        // '引張強度測定'
    ]


    const contentTH1 = [
        'และตรวจสอบเพื่อให้มั่นใจว่าเป็นไปตามคุณสมบัติทางกายภาพที่หลากหลาย',
        "ตรวจสอบความแข็งและความถ่วงจำเพาะของผลิตภัณฑ์",
        "",
    ]

    const contentEN1 = [
        "And check to ensure that it satisfies a variety of physical property requirements.",
        "Check to ensure hardness & Specific gravity of products",
        "",
    ]
    const contentJP1 = [
        '当社は高品質なゴムの研究開発に取り組んでいます。',
        'さらに、さまざまな物理的特性の要件を満たしていることを確認します。',
        '製品の硬度と比重を確認する',
        // '',
    ]

    const topicTH2 = [
        'การวัดแรงกดอัด',
        'การวัดการกระจายแรงดัน',
        'การประเมินประสิทธิภาพการกันเสียง',
        // 'การวัดแรงแบบไดนามิก',
        'เครื่องวัดความหนาของชั้นฟิล์ม (ไมโครสโคป)',
    ]

    const topicEN2 = [
        "Compressive Load Measurements",
        "Pressure Distribution Measurements",
        "Sound-Insulating Performance Evaluations",
        // "Dynamic Load Measurements",
        "Film Thickness Measuring Instrument (Microscope) ",
    ]

    const topicJP2 = [
        '圧縮荷重測定',
        '圧力分布測定',
        '防音性能評価',
        // '動的荷重測定',
        '膜厚測定器(マイクロスコープ)',    
    ]

    // ---------------------------------------------------------------------------


    const contentTH2 = [
        "เราพัฒนาผลิตภัณฑ์ที่สามารถตอบสนองความต้องการด้านแรงกดและแรงโหลดได้",
        "การวัดแรงกดที่กระทำบนผลิตภัณฑ์แบบเรียลไทม์ช่วยในการวิเคราะห์ข้อบกพร่องของผลิตภัณฑ์",
        "เนื่องจากลูกค้าต้องการห้องโดยสารที่สะดวกสบาย เราจึงมุ่งมั่นค้นคว้าวัสดุที่มีคุณสมบัติการกันเสียงที่ดียิ่งขึ้นอย่างต่อเนื่อง",
        // "",
        "มีการตรวจสอบความหนาของสีที่เคลือบบนผลิตภัณฑ์ว่าเป็นไปตามมาตรฐานที่กำหนดหรือไม่",
    ]


    const contentEN2 = [
        "We develop products that satisfy load requirements.",
        "The measuring of contact pressure exerted on products in real-time aids in the analysis of product defects.",
        "As comfortable cabin spaces are highly desired by our customers, we are constantly in pursuit of materials with enhanced sound-insulating performance.",
        // "",
        "We verify whether the thickness of the paint applied to the product complies with the specified standards.",
    ]

    const contentJP2 = [
        '当社は荷重要件を満たす製品を開発しています。',
        '製品に加わる接触圧力をリアルタイムで測定することで、製品の欠陥分析に役立ちます。',
        '快適なキャビン空間はお客様に非常に求められているため、当社は防音性能を向上させた材料の研究を常に行っています。',
        // "",
        "製品に塗布した塗料の厚みが規格に適合しているか確認を行っています。",
    ]
    // ----------------------------------------------------------



    const Analysis = ['/dean_r1_c1.png', '/dean_r1_c3.png', '/dean_r3_c1.png', '/dean_r3_c3.png', '/dean_r1_c3.png',]

    // const contentAnalysisTH = ["การเขียนแบบด้วย CAD", "การวิเคราะห์โครงสร้าง", "การจำลองพฤติกรรมของวัสดุ", "การทดสอบผลิตภัณฑ์"]
    // const contentAnalysisEN = ["CAD Drawing", "Structural Analysis", "Material Simulation", "Product Testing"]
    // const contentAnalysisJP = ["CAD図面作成", "構造解析", "材料シミュレーション", "製品試験"]

    const materials = ['/03_r1_c1.png','/03_r1_c3.png', '/tech (2).png', ]

    // const contentMaterialsTH = ['เครื่องทดสอบการรีด', "เครื่องวัดความหนืดแบบ Mooney", "เครื่องทดสอบแรงดึง", "การวิเคราะห์แรงกดอัดและความเค้นสัมผัส"]
    // const contentMaterialsEN = ["Test Roll", "Money Viscosity meter", "Tensile strength testing machine", "Compressive load analysis and contact stress analysis"]
    // const contentMaterialsJP = ["テストロール", "ムーニー粘度計", "引張強度試験機", "圧縮荷重解析および接触応力解析"]





    const evaluation = ['/compressive.png', '/04_r1_c3.png',  '/04_r1_c8.png', '/tech (3).png', ]  

    // const contentEvaluationTH = ["เครื่องทดสอบแรงกด", "การกระจายแรงดันบนพื้นผิว", 'การวัดการกระจายแรงดันบนพื้นผิว', "การวัดสมรรถนะการกันเสียงแบบง่าย"]
    // const contentEvaluationEN = ["Load Testing Machine", "Surface Pressure Distribution", "Surface Pressure Distribution Measurement", "Simple Sound Insulation Performance Measurement"]
    // const contentEvaluationJP = ["荷重試験機", "表面圧分布", "表面圧分布測定", "簡易防音性能測定"]


    // SEO Metadata
    const pageTitle = "Introduction of Development Technology | JIEI Thailand";
    const pageDescription = "Learn about JIEI Thailand's development technology for automotive rubber parts, including CAD / CATIA design, 3D modeling, engineering analysis, materials development, and functional evaluation.";

    const [lang, setLang] = useState<'th' | 'en' | 'jp'>('th');
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedLang = localStorage.getItem('lang') as 'th' | 'en' | 'jp' | null;
            if (storedLang) setLang(storedLang);
        }
    }, []);

    return (
        <div>
            <Head>
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription} />
                <link rel="canonical" href="https://www.jiei-thai.co.th/development-technology" />
                <meta name="keywords" content="JIEI Thailand, Development Technology, CAD, CATIA, Automotive Rubber Parts, Materials Development, Functional Evaluation" />
                <meta name="robots" content="index, follow" />

                {/* Open Graph */}
                <meta property="og:title" content={pageTitle} />
                <meta property="og:description" content={pageDescription} />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="/catiav5.png" />
                <meta property="og:url" content="https://www.jiei-thai.co.th/development-technology" />
                <meta property="og:locale" content="th_TH" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={pageTitle} />
                <meta name="twitter:description" content={pageDescription} />
                <meta name="twitter:image" content="/catiav5.png" />

                {/* JSON-LD Structured Data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "TechArticle",
                            "headline": pageTitle,
                            "author": {
                                "@type": "Organization",
                                "name": "JIEI Thailand"
                            },
                            "publisher": {
                                "@type": "Organization",
                                "name": "JIEI Thailand",
                                "logo": {
                                    "@type": "ImageObject",
                                    "url": "/catiav5.png"
                                }
                            },
                            "description": pageDescription,
                            "mainEntityOfPage": "https://www.jiei-thai.co.th/development-technology"
                        })
                    }}
                />
            </Head>

            <div className='bg'>
                <div className="tec-box">
                    <div className="introduction-tech-box">
                        <ScrollReveal>
                            <h1 className="introduction-tech">
                                {lang===('th') ? "แนะนำเทคโนโลยีการพัฒนา - JIEI Thailand" : lang===('en') ? "Introduction of Development Technology - JIEI Thailand" : "開発技術の紹介 - JIEI Thailand"}

                            </h1>
                            <p className='introduction-content'>{lang===('th') ? "JIEI Thailand ใช้เทคโนโลยีการออกแบบ การวิเคราะห์ และการทดสอบที่ล้ำสมัย เพื่อให้มั่นใจในคุณภาพสูงสุดของชิ้นส่วนยางรถยนต์ กระบวนการของเราครอบคลุมการออกแบบ CAD การวิเคราะห์โครงสร้าง การจำลองวัสดุ และการประเมินสมรรถนะ เพื่อให้ได้มาตรฐานยานยนต์ระดับสากล"
                                : lang===('en') ? "JIEI Thailand applies advanced design, analysis, and testing technologies to ensure the highest quality of automotive rubber parts. Our integrated process covers CAD design, structural analysis, material simulation, and performance evaluation to meet global automotive standards."
                                    : "JIEI Thailandは、自動車用ゴム部品の最高品質を保証するために、先進的な設計、解析、試験技術を採用しています。当社の統合プロセスは、CAD設計、構造解析、材料シミュレーション、性能評価を網羅し、世界的な自動車産業の基準に対応しています。"}</p>
                        </ScrollReveal>
                        <div className="line" />

                    </div>

                    {/* Section: Design & Analysis */}
                    <div className="design-analysis-box" itemScope itemType="https://schema.org/TechArticle">

                        <div className="design-analysis-topic">
                            <ScrollReveal>
                                <h2 itemProp="headline" className='topic-technology'>{lang===('th') ? "การออกแบบและการวิเคราะห์" : lang===('en') ? "Design & Analysis" : "設計・解析"}</h2>
                                <meta itemProp="author" content="JIEI Thailand" />
                            </ScrollReveal>
                        </div>
                        <div className="design-analysis-content-box">
                            {topicTH.map((item, index) => (
                                <div className="design-analysis-content" key={index}>
                                    <div className="image-card-tach">
                                        <Image className='image-tach' src={Analysis[index]} alt={`ผู้ผลิตชิ้นส่วนยางรถยนต์ จังหวัดชลบุรี`} priority width={1000} height={1000} />
                                    </div>
                                    <div className="content-card-tach">
                                        <div className="design-analysis-content-topic">
                                            <ScrollReveal>
                                                <h3 itemProp="about" className='topic-2'>{lang===('th') ? item
                                                    : lang===('en') ? topicEN[index]
                                                        : topicJP[index]}</h3>
                                            </ScrollReveal>
                                        </div>
                                        <div className="design-analysis-content-content">
                                            <ScrollReveal>
                                                <p itemProp="articleBody" className='content-technology'>
                                                    {lang===('th') ? contentTH[index] : lang===('en') ? contentEN[index] : contentJP[index]}
                                                </p>
                                            </ScrollReveal>
                                        </div>
                                    </div>

                                </div>
                            ))}
                        </div>



                        <div className="design-analysis-topic">
                            <ScrollReveal>
                                <h2 itemProp="headline" className='topic-technology'>{lang===('th') ? "การพัฒนาวัสดุ"
                                    : lang===('en') ? "Materials Development"
                                        : "材料開発"}</h2>
                                <meta itemProp="author" content="JIEI Thailand" />
                            </ScrollReveal>
                        </div>

                        <div className="design-analysis-content-box">
                            {topicTH1.map((item, index) => (
                                <div className="design-analysis-content" key={index}>
                                    <div className="image-card-tach">
                                        <Image className='image-tach' src={materials[index]} alt={`ผู้ผลิตชิ้นส่วนยางรถยนต์ จังหวัดชลบุรี`} priority width={1000} height={1000} />
                                    </div>
                                    <div className="content-card-tach">
                                        <div className="design-analysis-content-topic">
                                            <ScrollReveal>
                                                <h3 itemProp="about" className='topic-2'>{lang===('th') ? item : lang===('en') ? topicEN1[index] : topicJP1[index]}</h3>

                                            </ScrollReveal>
                                        </div>
                                        <div className="design-analysis-content-content">
                                            <ScrollReveal>
                                                <p itemProp="articleBody" className='content-technology'>
                                                    {lang===('th') ? contentTH1[index] : lang===('en') ? contentEN1[index] : contentJP1[index]}
                                                </p>
                                            </ScrollReveal>
                                        </div>
                                    </div>

                                </div>
                            ))}
                        </div>

                        <div className="design-analysis-topic">
                            <ScrollReveal>
                                <h2 itemProp="headline" className='topic-technology'>{lang===('th') ? "การประเมินสมรรถนะ" : lang===('en') ? "Functional Evaluation" : "機能評価"}</h2>
                                <meta itemProp="author" content="JIEI Thailand" />
                            </ScrollReveal>
                        </div>

                        <div className="design-analysis-content-box">
                            {topicTH2.map((item, index) => (
                                <div className="design-analysis-content" key={index}>
                                    <div className="image-card-tach">
                                        <Image className='image-tach' src={evaluation[index]} alt={`ผู้ผลิตชิ้นส่วนยางรถยนต์ จังหวัดชลบุรี`} priority width={1000} height={1000} />
                                    </div>
                                    <div className="content-card-tach">
                                        <div className="design-analysis-content-topic">
                                            <ScrollReveal>
                                                <h3 itemProp="about" className='topic-2'>{lang===('th') ? item : lang===('en') ? topicEN2[index] : topicJP2[index]}</h3>
                                            </ScrollReveal>
                                        </div>
                                        <div className="design-analysis-content-content">
                                            <ScrollReveal>
                                                <p itemProp="articleBody" className='content-technology'>
                                                    {lang===('th') ? contentTH2[index] : lang===('en') ? contentEN2[index] : contentJP2[index]}
                                                </p>
                                            </ScrollReveal>
                                        </div>
                                    </div>

                                </div>
                            ))}
                        </div>

                    </div>
                </div>

                {/* Sections with Images */}
                {/* <div className="Design-analysis-box">
                    <ScrollReveal>
                        <div className="Design-analysis-text-box">
                            <h1 className='Design-analysis-text'>{lang===('th') ? "การออกแบบและการวิเคราะห์" : lang===('en') ? "Design & Analysis" : "設計と解析"}</h1>
                        </div>
                    </ScrollReveal>

                    <div className="line" />


                    <div className="deformation-jiei">
                        {Analysis.map((item, index) => (
                            <div className="img-text-design" key={index}>
                                <div className="img-design">
                                    <ScrollReveal>
                                        <Image src={item} alt={contentAnalysisTH[index]} priority width={1000} height={1000} />
                                    </ScrollReveal>
                                </div>
                                <div className="text-img-box">
                                    <ScrollReveal>
                                        <h3 className='text-img'>{lang===('th') ? contentAnalysisTH[index] : lang===('en') ? contentAnalysisEN[index] : contentAnalysisJP[index]}</h3>
                                    </ScrollReveal>
                                </div>
                            </div>
                        ))}
                    </div>
                </div> */}


                {/* <div className="Design-analysis-box">
                    <div className="Design-analysis-text-box">
                        <ScrollReveal>
                            <h1 className='Design-analysis-text'>{lang===('th') ? "การพัฒนาวัสดุ" : lang===('en') ? "Materials Development" : "材料開発"}</h1>
                        </ScrollReveal>
                    </div>
                    <div className="line" />
                    <div className="deformation-jiei">
                        {materials.map((item, index) => (
                            <div className="img-text-design" key={index}>
                                <div className="img-design">
                                    <ScrollReveal>
                                        <Image src={item} alt={contentMaterialsTH[index]} priority width={1000} height={1000} />
                                    </ScrollReveal>
                                </div>
                                <div className="text-img-box">
                                    <ScrollReveal>
                                        <h3 className='text-img'>{lang===('th') ? contentMaterialsTH[index]
                                            : lang===('en') ? contentMaterialsEN[index]
                                                : contentMaterialsJP[index]}</h3>
                                    </ScrollReveal>
                                </div>
                            </div>
                        ))}
                    </div>
                </div> */}

                {/* 
                <ScrollReveal>
                    <div className="Design-analysis-box">
                        <div className="Design-analysis-text-box">
                            <ScrollReveal>
                                <h1 className='Design-analysis-text'>{lang===('th') ? "การประเมินสมรรถนะ" : lang===('en') ? "Functional Evaluation" : "機能評価"}</h1>
                            </ScrollReveal>
                        </div>
                        <div className="line" />
                        <div className="deformation-jiei">
                            {evaluation.map((item, index) => (
                                <div className="img-text-design" key={index}>
                                    <div className="img-design">
                                        <ScrollReveal>
                                            <Image src={item} alt={contentEvaluationTH[index]} priority width={1000} height={1000} />
                                        </ScrollReveal>
                                    </div>
                                    <div className="text-img-box">
                                        <ScrollReveal>
                                            <h3 className='text-img'>{lang===('th') ? contentEvaluationTH[index] : lang===('en') ? contentEvaluationEN[index] : contentEvaluationJP[index]}{ }</h3>
                                        </ScrollReveal>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </ScrollReveal> */}
            </div>
        </div >
    )
}
