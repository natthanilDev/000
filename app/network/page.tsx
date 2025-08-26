import Image from "next/image"
import Link from "next/link"
import ScrollReveal from "../components/ScrollReveal/ScrollReveal"
import Head from "next/head"

export default function Page() {

    const logo = [
        '/Jiei Thailand - ผู้ผลิตชิ้นส่วนยางรถยนต์คุณภาพสูงในชลบุรี.png',
        '/AGC-logo.png',
        '/Jiei Thailand - ผู้ผลิตชิ้นส่วนยางรถยนต์คุณภาพสูงในชลบุรี.png',
        '/AGC-logo.png',
        '/Jiei Thailand - ผู้ผลิตชิ้นส่วนยางรถยนต์คุณภาพสูงในชลบุรี.png',
        '/AGC-logo.png',
        '/Jiei Thailand - ผู้ผลิตชิ้นส่วนยางรถยนต์คุณภาพสูงในชลบุรี.png',
        '/AGC-logo.png',
    ]
    const company = [
        'JIEI(Thailand) Co.,Ltd.',
        'AGC FLAT GLASS (THAILAND) PLC.',
        'JIEI(Thailand) Co.,Ltd.',
        'AGC FLAT GLASS (THAILAND) PLC.',
        'JIEI(Thailand) Co.,Ltd.',
        'AGC FLAT GLASS (THAILAND) PLC.',
        'JIEI(Thailand) Co.,Ltd.',
        'AGC FLAT GLASS (THAILAND) PLC.',
    ]
    const address = [
        'Bueng, Si Racha District, Chon Buri 20230',
        '200 Moo 1, Suksawat Rd., Pak Khlong Bang Pla Kod, Phra Samut Chedi, Samut Prakan 10290',
        'Bueng, Si Racha District, Chon Buri 20230',
        '200 Moo 1, Suksawat Rd., Pak Khlong Bang Pla Kod, Phra Samut Chedi, Samut Prakan 10290',
        'Bueng, Si Racha District, Chon Buri 20230',
        '200 Moo 1, Suksawat Rd., Pak Khlong Bang Pla Kod, Phra Samut Chedi, Samut Prakan 10290',
        'Bueng, Si Racha District, Chon Buri 20230',
        '200 Moo 1, Suksawat Rd., Pak Khlong Bang Pla Kod, Phra Samut Chedi, Samut Prakan 10290',
    ]
    const map = [
        'https://maps.app.goo.gl/uA6kMUg9A16CFL6E8',
        'https://maps.app.goo.gl/vQrbnH8FBW9bczeT9',
        'https://maps.app.goo.gl/uA6kMUg9A16CFL6E8',
        'https://maps.app.goo.gl/vQrbnH8FBW9bczeT9',
        'https://maps.app.goo.gl/uA6kMUg9A16CFL6E8',
        'https://maps.app.goo.gl/vQrbnH8FBW9bczeT9',
        'https://maps.app.goo.gl/uA6kMUg9A16CFL6E8',
        'https://maps.app.goo.gl/vQrbnH8FBW9bczeT9',
    ]

    const pageTitle = "Our Network & Partner Companies | JIEI Thailand";
    const pageDescription = "Explore JIEI Thailand's partner companies and network, including locations, addresses, and Google Map links for automotive rubber parts manufacturing.";

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
                                <h1 className="network-text">บริษัทในเครือที่ตอบสนองความต้องการของคุณ</h1>
                                <div className="line"></div>
                            </ScrollReveal>
                        </div>

                        <ScrollReveal>
                            <div className="scrollbar">
                                <div className="network-box">
                                    {company.map((item, index) => (
                                        <div className="network-component" key={index}>
                                            <div className="image-box-network">
                                                <Image
                                                    className="image-logo-company-partners"
                                                    src={logo[index]}
                                                    alt={`Logo of ${item}`}
                                                    width={2000}
                                                    height={2000}
                                                    priority
                                                />
                                            </div>
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
                    </div>
                </div>
            </div>
        </>
    )
}
