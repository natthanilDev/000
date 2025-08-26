
import Image from "next/image"
import Link from "next/link"
import ScrollReveal from "../components/ScrollReveal/ScrollReveal"
export default function page() {

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


    return (
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
                                            <Image className="image-logo-company-partners" src={logo[index]} alt="logo-company" width={2000} height={2000} priority></Image>
                                        </div>
                                        <div className="content-company-partners">
                                            <h2 className="company-name">{item}</h2>
                                            <p className="company-content">{address[index]} </p>
                                        </div>
                                        <div className="google-map">
                                            <Link target="_back" href={map[index]} className="google-map-icon"><i className="bi bi-geo-alt-fill"></i></Link>
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </div>

    )
}
