'use client'
import { useEffect, useState } from "react"
import Head from "next/head"
import { motion } from "framer-motion"

export default function Network() {

    const logo = [
        '/JieiThailand-logo.png',
    ]
    const company = [
        '化成工業株式会社',
        '嘉興滋栄汽車配件有限公司',
        'JIEI (SINGAPORE) PTE.,LTD.',
        '滋栄技研貿易（上海）有限公司',
        '滋栄技研貿易（上海）有限公司　広州営業所',
        '滋栄技研貿易（上海）有限公司　武漢営業所',

    ]
    //  const company = [
    //     'KASEI KOGYO.CO.,LTD',
    //     'Jiaxing JIEI Automobile Parts Co., Ltd.',
    //     'JIEI (Singapore) Pte. Ltd.',
    //     'JIEI Technical Trading(Shanghai)Co., Ltd.',
    //     'JIEI Technical Trading(Shanghai)Co., Ltd. Guangzhou Office',
    //     'JIEI Technical Trading(Shanghai)Co., Ltd. Wuhan Office',
    // ]
    const address = [
        '1-64 Bouzuyama, Yokone Cho, Obu Shi, Aichi Pref., 474-0011, Japan',
        'No.1055, Bazi Road, Xiuzhou Industrial estate, Jiaxing City, Zhejiang, China. 314000',
        '',
        '',
        '',
        '',
        '',
        '',
    ]
    const web = [
        'https://www.kaseikogyo.com/index.html',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
    ]
    // ----------------------------------------------------------------------
    const company1 = [
        "東海興業ホールディングス株式会社",
        "東海興業株式会社",
        "アド株式会社",
        "株式会社コベルク",
        "成和工業株式会社",
        "タカラ化成工業株式会社",
        "東亜ゴム工業株式会社",

        "株式会社富士",
        "GREEN TOKAI CO., LTD.",
        "TOACS THAILAND CO., LTD.",
        "VIETNAM TOKAI CO., LTD.",
        "広州東海敏孚汽車部件有限公司",
        "武漢東海敏実汽車零部件有限公司",
        "TK MINTH MEXICO, S.A. de C.V.",
        "PT TOYOTA AUTO BODY-TOKAI EXTRUSION (T-TEC)",
        "TOKAI KOGYO INDIA PRIVATE LIMITED　",
        "TOKAI JIEI ASIA CO., LTD."
    ]
    const address1 = [
        "4-1 Nagane Cho, Obu Shi, Aichi Pref. 474-8688 Japan",
        "4-1 Nagane Cho, Obu Shi, Aichi Pref.  474-8688 Japan",
        "Japan 〒474-0001 Ida-129, Kitasaki Cho, Obu Shi, Aichi Pref. Logistics Center",
        " 4-33 Nakayama Cho, Kariya Shi, Aichi Pref. 448-0026",
        "2-11-17, Matsue, Edogawa Ku,Tokyo 132-0025 Japan ",
        "6 Kazakoshi Kamihasumi Cho Nishio Shi Aichi Pref. PRE-001 Japan",
        "Shojisaku-8-21 Izumi Cho, Anjo Shi, Aichi Pref. 444-1221 Japan",

        "7667-24 Ichimaru located in Kokufu Cho, Suzuka Shi, Mie Pref. 513-0836 Japan",
        "55 Robert Wright Dr, Brookville, OH 45309, United States",
        "700/65 Kromdit 6 Alley,Khlong Tamru Sub-district, Mueang Chonburi District,Chonburi 20000, Thailand",
        "1 RD HOA CAM IZ CAM LE DIST DANANG CITY VIETNAM DANANG DA550000 VN",
        "",
        "",
        "C. de Los Arellano 202,Gigante de Los,Arellano, Aguascalientes 20392, Mexico",
        "MM2100 Industrial Estate,Jl. Irian Block LL-3, Jatiwangi,West Cikarang District, Bekasi Regency,West Java 17530, Indonesia",
        "",
        "700/2 Moo 1,Amata Service Center Building, 4th Floor, Room 402,Bangna–Trad Highway, Km. 57,Khlong Tamru Sub-district, Mueang Chonburi District,Chonburi 20000, Thailand"
    ]


    const pageTitle = "Our Network & Partner Companies | JIEI Thailand";
    const pageDescription = "Explore JIEI Thailand's partner companies and network, including locations, addresses, and Google Map links for automotive rubber parts manufacturing.";


    const [lang, setLang] = useState<'th' | 'en' | 'jp'>('th');


    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedLang = localStorage.getItem('lang') as 'th' | 'en' | 'jp' | null;
            if (storedLang) setLang(storedLang);
        }
    }, []);
    return (
        <>
            <Head>
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription} />
                <link rel="canonical" href="https://www.jiei-thai.co.th/network" />
                <meta name="keywords" content="JIEI Thailand, Partner Companies, Network, Automotive Rubber Parts, Chonburi" />
                <meta name="robots" content="index, follow" />

                {/* Open Graph */}
                <meta property="og:title" content={pageTitle} />
                <meta property="og:description" content={pageDescription} />
                <meta property="og:type" content="website" />
                <meta property="og:image" content={logo[0]} />
                <meta property="og:url" content="https://www.jiei-thai.co.th/network" />
                <meta property="og:locale" content="th_TH" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={pageTitle} />
                <meta name="twitter:description" content={pageDescription} />
                <meta name="twitter:image" content={logo[0]} />

                {/* JSON-LD Structured Data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Organization",
                            "name": "JIEI Thailand",
                            "url": "https://www.jiei-thai.co.th/network",
                            "logo": logo[0],
                            "sameAs": [
                                "https://www.facebook.com/JIEIThailand",
                                "https://www.linkedin.com/company/jiei-thailand"
                            ],
                            "member": company.map((c, idx) => ({
                                "@type": "Organization",
                                "name": c,
                                "address": address[idx],
                                "url": web[idx]
                            }))
                        })
                    }}
                />
            </Head>

            <div className="network-all">
                <div className="container-network-box">
                    <div className="network-container">
                        <div className="network-text-box">
                            <motion.div
                                className='image-company-box'
                                initial={{ opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true, amount: 1 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 80,
                                    damping: 18,
                                    mass: 0.8
                                }}
                            >
                                <h1 className="network-text">{lang === ('th') ? "บริษัทในเครือที่ตอบสนองความต้องการของคุณ" : lang === ('en') ? "Our affiliated companies that meet your needs" : "お客様のニーズに応えるグループ会社"} </h1>
                            </motion.div>
                        </div>

                        <div className="group-company">



                            <div className="scrollbar">
                                <motion.div
                                    className='image-company-box'
                                    initial={{ opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    viewport={{ once: true, amount: 1 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 80,
                                        damping: 18,
                                        mass: 0.8
                                    }}
                                >
                                    <h1 className="tokai-group">{lang === ('th') ? "กลุ่มบริษัท Kasei Kogyo" : lang === ('en') ? "Kasei Kogyo Group" : "化成工業グループ"}  </h1>
                                </motion.div>
                                <div className="network-box">
                                    {company.map((item, index) => (
                                        <motion.div
                                            className="network-component"
                                            key={index}
                                            initial={{ opacity: 0 }}
                                            whileInView={{ x: 0, opacity: 1 }}
                                            viewport={{ once: true, amount: 1 }}
                                            transition={{
                                                type: "spring",
                                                stiffness: 80,
                                                damping: 18,
                                                mass: 0.8
                                            }}
                                        >
                                            <div className="content-company-partners">
                                                <h2 className="company-name">{item}</h2>
                                                <p className="company-content">{address[index]}</p>
                                            </div>

                                        </motion.div>
                                    ))}
                                </div>
                            </div>






                            <div className="scrollbar">
                                <motion.div
                                    className='image-company-box'
                                    initial={{ opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    viewport={{ once: true, amount: 1 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 80,
                                        damping: 18,
                                        mass: 0.8
                                    }}
                                >
                                    <h1 className="tokai-group">{lang === ('th') ? "กลุ่มบริษัท Tokai Kogyo" : lang === ('en') ? "Tokai Kogyo Group" : "東海興業グループ"}</h1>
                                </motion.div>
                                <div className="network-box">
                                    {company1.map((item, index) => (
                                        <motion.div
                                            className="network-component" 
                                            key={index}
                                            initial={{opacity: 0 }}
                                            whileInView={{ x: 0, opacity: 1 }}
                                            viewport={{ once: true, amount: 1 }}
                                            transition={{
                                                type: "spring",
                                                stiffness: 80,
                                                damping: 18,
                                                mass: 0.8
                                            }}
                                        >
                                            
                                                <div className="content-company-partners">
                                                    <h2 className="company-name">{item}</h2>
                                                    <p className="company-content">{address1[index]}</p>
                                                </div>
                                                {/* <div className="google-map">
                                                {web1[index] == "" ? <i className="bi bi-ban google-map-icon"></i> ///<i className="google-map-icon bi bi-ban"></i> 
                                                    :
                                                    <Link target="_blank" href={web1[index]} className="google-map-icon" aria-label={`Open Google Map for ${item}`}>
                                                        <i className="bi bi-browser-edge" />
                                                    </Link>}

                                            </div> */}
                                          
                                        </motion.div>
                                    ))}
                                </div>
                            </div>




                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
