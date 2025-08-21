import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
export default function page() {

    const logo_partners = [
        '/logo-partners (1).png',
        '/logo-partners (2).png',
        '/logo-partners (3).png',
        '/logo-partners (4).png',
        '/logo-partners (5).png',
        '/logo-partners (6).png',

    ]
    const logo_partners1 = [
        '/logo-partners (7).png',
        '/logo-partners (8).png',
        '/logo-partners (9).png',
        '/logo-partners (10).png',
        '/logo-partners (11).png',
        '/logo-partners (12).png',
        
    ]
    return (
        <div className='about-page'>
            <section className="company-profile">
                <div className="why-chose-jiei">
                    <h1 className='AboutUS'>ABOUT US | Company Profile</h1>
                    <div className="line"></div>
                    <h1 className='text-jiei-about-apage'>JIEI (Thailand) Co., Ltd. - Automotive Rubber Parts Manufacturer</h1>
                    <p className='text-center'>
                        บริษัท เจไออีไอ (ประเทศไทย) จำกัด
                        เป็นผู้ผลิต <strong>ชิ้นส่วนยางรถยนต์คุณภาพสูง</strong>
                        สำหรับอุตสาหกรรมยานยนต์ในประเทศไทยและต่างประเทศ
                        โรงงานตั้งอยู่ที่จังหวัดชลบุรี พร้อมมาตรฐานสากล
                        <strong>ISO 9001, ISO 14001 และ IATF 16949</strong>
                        ที่รับรองคุณภาพการผลิตทุกขั้นตอน
                    </p>
                </div>

                <div className="aboutUs-page">
                    <div className="about-grid">
                        <h2 className='text-center'>About Us</h2>
                        <h2>Company Profile</h2>
                        <h4>ขอบคุณเป็นอย่างยิ่งที่สละเวลาเยี่ยมชมเว็บไซต์ของเรา</h4>
                        <p>บริษัท เจไออีไอ (ไทยแลนด์) จำกัด ก่อตั้งขึ้นเมื่อเดือนพฤศจิกายน พ.ศ. 2554 ในฐานะบริษัทย่อยของ กลุ่ม Kasei Kogyo Co., Ltd. ซึ่งมีประวัติยาวนานตั้งแต่ปี พ.ศ. 2509 และเป็นผู้เชี่ยวชาญด้าน การผลิตยางอัดรีดสำหรับอุตสาหกรรมยานยนต์ (Rubber Extrusion for Automobiles) ควบคู่มากับการพัฒนาของอุตสาหกรรมยานยนต์ระดับโลก</p>
                        <p>เรามุ่งเน้นการทำงานครบวงจร ตั้งแต่ การวางแผน การวิจัยและพัฒนา การผลิตด้วยเทคโนโลยีขั้นสูง เพื่อให้ได้ ชิ้นส่วนยางรถยนต์คุณภาพสูง ที่ตอบสนองความต้องการของลูกค้าหลากหลายประเภท ทั้งในญี่ปุ่น อเมริกา จีน และเอเชีย</p>
                        <p>กลุ่มบริษัท Kasei Kogyo ได้รับการยอมรับในฐานะองค์กรที่สามารถตอบสนองต่อความเปลี่ยนแปลงอย่างรวดเร็วของอุตสาหกรรมยานยนต์ ด้วยความรู้ความเชี่ยวชาญ (Know-how) และประสบการณ์ด้าน การผลิตชิ้นส่วนยางรถยนต์ (Automotive Rubber Parts Manufacturing) มากกว่า 50 ปี</p>
                        <p>ในอนาคต บริษัทเจไออีไอ (ไทยแลนด์) จำกัด จะยังคงมุ่งมั่นพัฒนานวัตกรรมอย่างไม่หยุดยั้ง เพื่อสร้างสรรค์ผลิตภัณฑ์ที่มี คุณภาพ ความแม่นยำ และมาตรฐานสากล พร้อมก้าวสู่การเป็น ผู้ผลิตชิ้นส่วนยางรถยนต์ระดับโลก (Global Automotive Rubber Parts Manufacturer) ที่สร้างคุณค่าและประโยชน์ให้กับสังคมโลก</p>

                    </div>

                    <div className="about-grid-image">
                        <Image src="/JIEI(Thailnad).co.,ltd.jpg" className='company-image' alt="" width={1000} height={1000} priority></Image>
                    </div>
                </div>


            </section>


            <div className="manager">
                <h1 className='managerText'>ผู้บริหาร</h1>

                <div className="border-manager"></div>
                <div className="manger-box">
                    <div className="top-manager">
                        <div className="image-manager">
                            <Image src="/top-manager.png" alt='' width={5000} height={5000} className='top-manager-Image' />
                        </div>
                    </div>

                    <div className="manager-image-box">
                        <div className="image-manager">
                            <Image src={'/top-manager.png'} alt='' width={1000} height={1000} className='manager-Image' />
                        </div>
                        <div className="image-manager">
                            <Image src={'/top-manager.png'} alt='' width={1000} height={1000} className='manager-Image' />
                        </div>

                        <div className="image-manager">
                            <Image src={'/top-manager.png'} alt='' width={1000} height={1000} className='manager-Image' />
                        </div>
                    </div>

                </div>
            </div>
            <div className="partners-box">
                <div className="partners-text">
                    <br />
                    <h1 className='thePartner'>The main trading partners</h1>
                    <div className="border-manager"></div>
                </div>

                <div className="logo-partners-box">
                    <div className="logo-partners">
                        {logo_partners.map((item, idx) => (
                            <Image key={idx} src={item} alt='' width={2000} height={2000} className='partners-Image' />
                        )
                        )}

                    </div>
                </div>



                <div className="logo-partners-box">
                    <div className="logo-partners1">
                        {logo_partners1.map((item, idx) => (
                            <Image key={idx} src={item} alt='' width={2000} height={2000} className='partners-Image' />
                        )
                        )}

                    </div>
                </div>
            </div>



            <h4 className='thy text-center'>ขอขอบพระคุณทุกท่านสำหรับการสนับสนุน และเราหวังว่าจะได้รับความไว้วางใจจากท่านอย่างต่อเนื่องต่อไป</h4>


        </div>
    )
}
