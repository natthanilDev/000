'use client'
import { useEffect, useState } from "react"
import Link from "next/link"
import ScrollReveal from "../ScrollReveal/ScrollReveal"
import Head from "next/head"

export default function Network() {

    const logo = [
        '/Jiei Thailand - ผู้ผลิตชิ้นส่วนยางรถยนต์คุณภาพสูงในชลบุรี.png',
        // '/AGC-logo.png',
        // '/Jiei Thailand - ผู้ผลิตชิ้นส่วนยางรถยนต์คุณภาพสูงในชลบุรี.png',
        // '/AGC-logo.png',
        // '/Jiei Thailand - ผู้ผลิตชิ้นส่วนยางรถยนต์คุณภาพสูงในชลบุรี.png',
        // '/AGC-logo.png',
        // '/Jiei Thailand - ผู้ผลิตชิ้นส่วนยางรถยนต์คุณภาพสูงในชลบุรี.png',
        // '/AGC-logo.png',
    ]
    const company = [
        'JIEI(Thailand) Co.,Ltd.',
        'Jiaxing JIEI Automobile Parts Co., Ltd.',
        'JIEI (Singapore) Pte. Ltd.',
        'JIEI Technical Trading(Shanghai)Co., Ltd.',
        'JIEI Technical Trading(Shanghai)Co., Ltd. Guangzhou Office',
        'JIEI Technical Trading(Shanghai)Co., Ltd. Wuhan Office',

    ]
    const address = [
        'Bueng, Si Racha District, Chon Buri 20230',
        'No.1055, Bazi Road, Xiuzhou Industrial estate, Jiaxing City, Zhejiang, China. 314000',
        '',
        '',
        '',
        '',
        '',
        '',
    ]
    const map = [
        'https://maps.app.goo.gl/uA6kMUg9A16CFL6E8',
        'https://maps.app.goo.gl/xFhGFhJkuiuiJm7r5',
        '',
        '',
        '',
        '',
        '',
        '',
    ]
    // -----------------------------------------------------------------------


    const company1 = [
        "Tokai Kogyo Co., Ltd.",
        "ADO CO., LTD.",
        "ALFA CO., LTD. ",
        "COWERK CO., LTD.",
        "SEIWA KOGYO CO., LTD.",
        "TAKARA KASEI KOGYO CO., LTD.",
        "TOA GOMU KOGYO CO., LTD.",
        "TOKAI KOGYO SEIKI CO., LTD.",
        "FUJI CO., LTD.",
        "BUTSURYU CENTER LTD.",
        "GREEN TOKAI CO., LTD.",
        "TOACS THAILAND CO., LTD.",
        "TOACS CENTER PTE., LTD.",
        "VIETNAM TOKAI CO., LTD.",
        "GUANGZHOU TOKAI MINTH AUTOMOTIVE PARTS CO., LTD.",
        "WUHAN TOKAIMINTH AUTOMOTIVE PARTS CO., LTD.",
        "TK MINTH MEXICO, S.A. de C.V.",
        "PT.TOYOTA AUTO BODY-TOKAI EXTRUSION (T-TEC)",
        "PPAP TOKAI INDIA RUBBER PTE. LTD.",
        "TOKAI JIEI ASIA CO., LTD."

    ]
    const address1 = [
        "4 Chome-1 Naganecho, Obu, Aichi 474-0021 ญี่ปุ่น",
        "ญี่ปุ่น 〒474-0001 Aichi, Obu, Kitasakimachi, Ida−129 物流センター",
        "ถ.นวลจันทร์ แขวงนวลจันทร์ เขตบึงกุ่ม กรุงเทพมหานคร 10230",
        " 4-33 Nakayamacho, Kariya City, Aichi Prefecture, 448-0026",
        "267 Shintashiro, Kumiyama-cho, คุเซะกุน จังหวัดเกียวโต 613-0022",
        "6 KAZAKOSHI KAMIHASUMI-CHO NISHIO-CITY AICHI PRE-0011 JAPAN JP",
        "Shojisaku-8-21 Izumicho, Anjo, Aichi 444-1221 ญี่ปุ่น",
        "4X8Q+WF เทศบาลนครแหลมฉบัง อำเภอบางละมุง ชลบุรี",
        "3-1-13, Senbanishi, Minoh city, Osaka, 562-0036 Japan",
        "1 Chome-16-5 Torikaikami, Settsu, Osaka 566-0062 ญี่ปุ่น",
        "55 Robert Wright Dr, Brookville, OH 45309 สหรัฐอเมริกา",
        "700/65 ซอย กรมดิษฐ์ 6 ตำบล คลองตำหรุ อำเภอเมืองชลบุรี ชลบุรี 20000",
        "",
        "1 RD HOA CAM IZ CAM LE DIST DANANG CITY VIETNAM DANANG DA550000 VN",
        "",
        "",
        "C. de Los Arellano 202 Gigante, de Los, 20392 Arellano, Ags., เม็กซิโก",
        "Kawasan Industri MM2100, Jl. Irian Blok LL-3, Jatiwangi, Kec. Cikarang Bar., Kabupaten Bekasi, Jawa Barat 17530 อินโดนีเซีย",
        "CGMW+2GJ, Block F, Surajpur Site V, Greater Noida, Uttar Pradesh 201312 อินเดีย",
        "700/2 Moo. 1, Amata Service Center building, 4th Floor Room 402, Bangna-Trad Highway Km.57, ตำบล คลองตำหรุ อำเภอเมืองชลบุรี 20000"



    ]
    const map1 = [
        "https://maps.app.goo.gl/TjU2dM3Mibio89aFA",
        "https://maps.app.goo.gl/5vEXETmVghBWUK6z5",
        "https://maps.app.goo.gl/61H6mL9uwGWUwCgG7",
        "",
        "https://maps.app.goo.gl/hwQw3baTf7LQLBpw6",
        "https://maps.app.goo.gl/r6ctC651vdy74ieRA",
        "https://maps.app.goo.gl/3UWDby49k1V913WSA",
        "https://maps.app.goo.gl/c3dHZws7SXVwYEyW8",
        "",
        "https://maps.app.goo.gl/r44U5wL7PChwr6eG9",
        "https://maps.app.goo.gl/axsfE3hZfawfCuGJA",
        "https://maps.app.goo.gl/9mterAL9bosTQbJG7",
        "",
        "https://maps.app.goo.gl/nj3mJ2GwkNqyjEqF8",
        "",
        "",
        "https://maps.app.goo.gl/FV7sVULhYwS1LbRHA",
        "https://maps.app.goo.gl/MRyhcPvf7Q5HK9p16",
        "https://maps.app.goo.gl/59gfgKrPx5Stwirs9",
        "https://maps.app.goo.gl/RhmRdcRM6eoz8qxq5"

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
                                "url": map[idx]
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
                                <h1 className="network-text">{lang === 'th' ? "บริษัทในเครือที่ตอบสนองความต้องการของคุณ" : lang === "en" ? "Our affiliated companies that meet your needs" : "お客様のニーズに応えるグループ会社"} </h1>
                                <div className="line"></div>
                            </ScrollReveal>
                        </div>

                        <ScrollReveal>
                            <h1 className="tokai-group">{lang === "th" ? "กลุ่มบริษัท Tokai Kogyo" : lang === "en" ? "Tokai Kogyo Group" : "東海工業グループ"}</h1>
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
                                            <div className="google-map">
                                                <Link target="_blank" href={map[index]} className="google-map-icon" aria-label={`Open Google Map for ${item}`}>
                                                    <i className="bi bi-geo-alt-fill"></i>
                                                </Link>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </ScrollReveal>



                        <ScrollReveal>
                            <h1 className="tokai-group">{lang === "th" ? "กลุ่มบริษัท Kasei Kogyo" : lang === "en" ? "Kasei Kogyo Group" : "化成工業グループ"}  </h1>
                            <div className="scrollbar">
                                <div className="network-box">
                                    {company1.map((item, index) => (
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
                                                <p className="company-content">{address1[index]}</p>
                                            </div>
                                            <div className="google-map">
                                                <Link target="_blank" href={map1[index]} className="google-map-icon" aria-label={`Open Google Map for ${item}`}>
                                                    <i className="bi bi-geo-alt-fill"></i>
                                                </Link>
                                            </div>
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
