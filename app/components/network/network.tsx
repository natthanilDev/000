'use client'
import { useEffect, useState } from "react"
// import Link from "next/link"
import ScrollReveal from "../ScrollReveal/ScrollReveal"
import Head from "next/head"

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
        '1-64 Bouzuyama, Yokone-cho, Obu-shi, Aichi, 474-0011, Japan',
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
        "東海興業株式会社",
        "アド株式会社",
        "株式会社コベルク",
        "成和工業株式会社",
        "タカラ化成工業株式会社",
        "東亜ゴム工業k株式会社",
        "東海興業株式会社",
        "富士株式会社",
        "GREEN TOKAI CO., LTD.",
        "TOACS THAILAND CO., LTD.",
        "VIETNAM TOKAI CO., LTD.",
        "広州東海敏孚汽車部件有限公司",
        "武漢東海敏実汽車零部件有限公司",
        "TK MINTH MEXICO, S.A. de C.V.",
        "PT.TOYOTA AUTO BODY-TOKAI EXTRUSION (T-TEC)",
        "PPAP TOKAI INDIA RUBBER PTE. LTD.",
        "TOKAI JIEI ASIA CO., LTD."
    ]
    const address1 = [
        "4 Chome-1 Naganecho, Obu, Aichi 474-0021 Japan",
        "Japan 〒474-0001 Ida-129, Kitasaki-machi, Obu City, Aichi Prefecture Logistics Center",
        " 4-33 Nakayamacho, Kariya City, Aichi Prefecture, 448-0026",
        "2-11-17, Matsue, Edogawa-Ku,Tokyo 132-0025　Japan　",
        "6 KAZAKOSHI KAMIHASUMI-CHO NISHIO-CITY AICHI PRE-0011 JAPAN JP",
        "Shojisaku-8-21 Izumicho, Anjo, Aichi 444-1221 Japan",
        "4-1 Nagane-cho Obu City Aich Pref. Japan 474-8688",
        "7667-24 Ichimaru located in Kokufu-cho, Suzuka City, Mie 513-0836,Japan",
        "55 Robert Wright Dr, Brookville, OH 45309, United States",
        "700/65 Kromdit 6 Alley,Khlong Tamru Sub-district, Mueang Chonburi District,Chonburi 20000, Thailand",
        "1 RD HOA CAM IZ CAM LE DIST DANANG CITY VIETNAM DANANG DA550000 VN",
        "",
        "",
        "C. de Los Arellano 202,Gigante de Los,Arellano, Aguascalientes 20392, Mexico",
        "MM2100 Industrial Estate,Jl. Irian Block LL-3, Jatiwangi,West Cikarang District, Bekasi Regency,West Java 17530, Indonesia",
        "CGMW+2GJ, Block F,Surajpur Site V, Greater Noida,Uttar Pradesh 201312, India",
        "700/2 Moo 1,Amata Service Center Building, 4th Floor, Room 402,Bangna–Trad Highway, Km. 57,Khlong Tamru Sub-district, Mueang Chonburi District,Chonburi 20000, Thailand"
    ]
    // const web1 = [
    //     "https://tokaikogyo.co.jp/",
    //     "https://e-ado.co.jp/",
    //     "",
    //     "",
    //     "",
    //     "https://www.takarakasei.com/",
    //     "",
    //     "http://www.t-seiki.co.jp/",
    //     "http://www.fuji-nt.jp/",
    //     "https://www.greentokai.com/",
    //     "https://www.toacs.co.th/",
    //     "",
    //     "",
    //     "",
    //     "https://www.tokaikogyodemexico.com/home",
    //     "",
    //     "",
    //     "",


    // ]

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
                            <ScrollReveal>
                                <h1 className="network-text">{lang === ('th') ? "บริษัทในเครือที่ตอบสนองความต้องการของคุณ" : lang === ('en') ? "Our affiliated companies that meet your needs" : "お客様のニーズに応えるグループ会社"} </h1>
                                <div className="line"></div>
                            </ScrollReveal>
                        </div>

                        <ScrollReveal>
                            <h1 className="tokai-group">{lang === ('th') ? "กลุ่มบริษัท Kasei Kogyo" : lang === ('en') ? "Kasei Kogyo Group" : "化成工業グループ"}  </h1>

                            <div className="scrollbar">
                                <div className="network-box">
                                    {company.map((item, index) => (
                                        <div className="network-component" key={index}>
                                            {/* <div className="image-box-network">
                                                <Image
                                                    className="image-logo-company-partners"
                                                    src={logo[index]}
                                                    alt={`Logo of ${item}`}
                                                    width={2000}

                                                    height={2000}
                                                    priority
                                                />
                                            </div> */}
                                            <div className="content-company-partners">
                                                <h2 className="company-name">{item}</h2>
                                                <p className="company-content">{address[index]}</p>
                                            </div>
                                            {/* <div className="google-map">
                                                {web[index] == "" ? <i className="bi bi-ban google-map-icon"></i> :
                                                    <Link target="_blank" href={web[index]} className="google-map-icon" aria-label={`Open Google Map for ${item}`}>
                                                        <i className="bi bi-browser-edge" />
                                                    </Link>}

                                            </div> */}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </ScrollReveal>



                        <ScrollReveal>
                            <h1 className="tokai-group">{lang === ('th') ? "กลุ่มบริษัท Tokai Kogyo" : lang === ('en') ? "Tokai Kogyo Group" : "東海興業グループ"}</h1>

                            <div className="scrollbar">
                                <div className="network-box">
                                    {company1.map((item, index) => (
                                        <div className="network-component" key={index}>
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
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </>
    )
}
