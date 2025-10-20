'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import { useSearchParams } from "next/navigation";
import ScrollReveal from '../ScrollReveal/ScrollReveal';

export default function Page() {
  const searchParams = useSearchParams();
  const [selectedNews, setSelectedNews] = useState<number | null>(null);

  const page = searchParams.get("page");
  const currentPage = page ? parseInt(page, 10) : 1;
  const perPage = 8;
  const [lang, setLang] = useState<'th' | 'en' | 'jp'>('th');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedLang = localStorage.getItem('lang') as 'th' | 'en' | 'jp' | null;
      if (storedLang) setLang(storedLang);
    }
  }, []);

  const activities = [
    'COMPANY TRIP SCHEDULE 2025',
 
  ];
  const img = [
    '/companyTrip.png',
    
  ];
  const contentALL = [
    `วันเสาร์ (วันที่1 )06:30 รวมตัวที่บริษัท JIEI (พร้อมชุดลำลองสีสดใส) แจกของที่ระลึก เช่น หมวก + เสื้อทริป 07:00 ออกเดินทางด้วยรถบัส`,
    
  ];
  const content = [
      `
    <h5><b>วันเสาร์ (วันที่1) 06:30</b> </h5> รวมตัวที่บริษัท JIEI (พร้อมชุดลำลองสีสดใส) แจกของที่ระลึก เช่น หมวก + เสื้อทริป
    <hr>
    <h5>07:00</h5> ออกเดินทางด้วยรถบัสปรับอากาศ มุ่งหน้าสู่เขาใหญ่ (มีของว่างบนรถ + เกมเล็ก ๆ จาก HR เช่น quiz ข้อมูลบริษัทแบบขำ ๆ) 
    <hr>
    <h5>09:30</h5> ถึง “จุดชมวิวเขาใหญ่” ถ่ายภาพหมู่เป็นที่ระลึก
    <hr>
    <h5>10:30</h5> กิจกรรม Team Building “Mission Possible” ที่ลานกลางธรรมชาติแข่งขันแบบทีม เช่นPuzzle RelayRope Challenge (เชือกเชื่อมสัมพันธ์)เกมไขปริศนาธรรมชาติเน้นหัวเราะและการสื่อสาร
    <hr>
    <h5>12:00</h5> รับประทานอาหารกลางวันที่รีสอร์ต
    <hr>
    <h5>13:30 </h5> Check-in เข้าที่พัก / พักผ่อนสั้น ๆ
    <hr>
    <h5>15:00</h5>  Workshop สั้น ๆ “JIEI Vision 2025”พูดคุยแลกเปลี่ยนความคิดเห็นแบบไม่เป็นทางการ – ให้แต่ละทีมเสนอแนวคิด “JIEI ที่อยากเห็นในปีหน้า”เน้นบรรยากาศอบอุ่น สบาย ๆ
    <hr>
    <h5>17:30</h5>  Free time: เดินเล่น / ถ่ายรูป / ว่ายน้ำ / จิบกาแฟ
    <hr>
    <h5>19:00</h5> Dinner Party กลางสวนบุฟเฟ่ต์อาหารไทย–ญี่ปุ่นMini Stage: เพลงสดเบา ๆ จากเพื่อนพนักงานLucky Draw ของรางวัล (ของขวัญเล็ก ๆ จากผู้บริหาร)Moment พิเศษ: CEO ขอบคุณทีมงาน และกล่าวปิดวันแรกด้วยคำสั้นแต่ใจใหญ่
    <hr>
    <h5>21:30</h5>  ปาร์ตี้รอบกองไฟ / ชมดาว / กิจกรรม “เล่าเรื่องความทรงจำดี ๆ ในการทำงาน”
    <hr>
    <h5>23:00</h5>  พักผ่อน วันที่สอง – เติมพลัง ปิดทริปด้วยความสุข06:30 – กิจกรรมเช้า “Morning Walk & Breath” เดินชมวิวรับลมเขาใหญ่
    <hr>
    <h5><b>วันอาทิตย์ (วันที่2) 07:30</b></h5>  อาหารเช้าที่รีสอร์ต
    <hr>
    <h5>09:00</h5>  Workshop สั้น “Team Reflection”ให้แต่ละกลุ่มแชร์สิ่งที่ได้เรียนรู้จากกิจกรรมเมื่อวาน และตั้งเป้าร่วมกันในการทำงานปี 2025 ถ่ายภาพกลุ่ม พร้อมคำคมประจำทีม
    <hr>
    <h5>10:30</h5>  Check-out ออกจากรีสอร์ต
    <hr>
    <h5>11:00</h5>  แวะ “ฟาร์มโชคชัย” หรือ “The Birder’s Lodge Market” เดินเล่น–ซื้อของฝาก
    <hr>
    <h5>12:30</h5>  รับประทานอาหารกลางวันร่วมกันร้านดังในเขาใหญ่14:00 – เดินทางกลับกรุงเทพฯ พร้อมเสียงหัวเราะในรถ
    <hr>
    <h5>17:00</h5>  ถึงบริษัทโดยสวัสดิภาพ ปิดทริปพร้อมใจว่า “See you next year!”
    <hr>
    `,
    
  ];

  const start = (currentPage - 1) * perPage;
  const end = start + perPage;
  const paginatedData = activities.slice(start, end);
  const totalPages = Math.ceil(activities.length / perPage);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [searchParams]);

  // ✅ SEO Metadata
  const pageTitle = selectedNews !== null
    ? `${activities[selectedNews]} | JIEI Thailand - ผู้ผลิตชิ้นส่วนยางรถยนต์ ชลบุรี`
    : `กิจกรรมบริษัท | JIEI Thailand - ผู้ผลิตชิ้นส่วนยางรถยนต์คุณภาพสูง ชลบุรี`;

  const pageDescription = selectedNews !== null
    ? content[selectedNews].replace(/<[^>]+>/g, '').slice(0, 160)
    : 'JIEI Thailand ผู้ผลิตชิ้นส่วนยางรถยนต์ในจังหวัดชลบุรี มาตรฐาน ISO9001, ISO14001, IATF16949 พร้อมอัปเดตกิจกรรมและข่าวสารของบริษัท';

  const pageUrl = selectedNews !== null
    ? `https://www.jiei-thai.co.th/activities?news=${selectedNews}`
    : `https://www.jiei-thai.co.th/activities?page=${currentPage}`;

  return (
    <div className='activities-page'>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content="JIEI Thailand, ผู้ผลิตชิ้นส่วนยางรถยนต์, ชลบุรี, Rubber Parts Manufacturer, ยางรถยนต์, โรงงานยาง, ISO9001, IATF16949" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={pageUrl} />

        {/* Open Graph */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={selectedNews !== null ? img[selectedNews] : '/JIEI(Thailnad).co.,ltd.jpg'} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:locale" content="th_TH" />
        <meta property="og:site_name" content="JIEI Thailand" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={selectedNews !== null ? img[selectedNews] : '/JIEI(Thailnad).co.,ltd.jpg'} />

        {/* ✅ Structured Data (SEO Boost) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "JIEI Thailand",
              "url": "https://www.jiei-thai.co.th",
              "logo": "https://www.jiei-thai.co.th/logo.png",
              "description": "ผู้ผลิตชิ้นส่วนยางรถยนต์คุณภาพสูงในจังหวัดชลบุรี ได้รับมาตรฐาน ISO9001, ISO14001, IATF16949",
              "contactPoint": [{
                "@type": "ContactPoint",
                "telephone": "033-136581-4",
                "contactType": "Customer Service",
                "areaServed": "TH",
                "availableLanguage": ["Thai", "English"]
              }],
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Pinthong 4 Industrial Estate, Unit G18, 180/3 Moo 6",
                "addressLocality": "Si Racha",
                "addressRegion": "Chonburi",
                "postalCode": "20230",
                "addressCountry": "Thailand"
              }
            })
          }}
        />
      </Head>

      {/* ---------- UI ---------- */}
      {selectedNews === null ? (
        <div>
          <ScrollReveal>
            <h1 className='activities-text'>
              {lang === "th" ? "กิจกรรมบริษัท" : lang === "en" ? "Company Activities" : "会社の活動"}
            </h1>
          </ScrollReveal>
          <div className="line"></div>

          <div className="activities-text-description-box">
            <ScrollReveal>
              <p className='activities-text-description'>
                {lang === "th"
                  ? "ติดตามข่าวสารและกิจกรรมจาก JIEI Thailand ผู้ผลิตชิ้นส่วนยางรถยนต์คุณภาพสูงจากชลบุรี เพื่อสร้างความสามัคคีและพัฒนาทีมงานอย่างต่อเนื่อง"
                  : lang === "en"
                    ? "Stay updated with activities from JIEI Thailand — a leading automotive rubber parts manufacturer based in Chonburi, Thailand."
                    : "JIEI Thailandの活動をチェック — チョンブリーにある自動車用ゴム部品メーカーです。"}
              </p>
            </ScrollReveal>
          </div>

          <div className="container-card">
            {paginatedData.map((item, index) => (
              <div key={index} className="box-card" onClick={() => {
                setSelectedNews(start + index)
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}>
                <div className="image-card">
                  <ScrollReveal>
                    <Image
                      src={img[start + index]}
                      height={1000}
                      width={1000}
                      alt={`กิจกรรมบริษัท ${item}`}
                      className="image-news"
                      priority
                    />
                  </ScrollReveal>
                </div>

                <div className="content-card-box">
                  <div className="title-card">
                    <h2 className='title-news-content'>{item}</h2>
                  </div>
                  <div className="content-card">
                    <p className='description-news-content'>{contentALL[start + index]}</p>
                  </div>
                  <div className="Read-more-box">
                    <p className="read-more">
                      {lang === 'th' ? "อ่านเพิ่มเติม" : lang === "en" ? "Read More" : "続きを読む"}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="page">
            <nav className="countPage" aria-label="Pagination">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                <Link
                  key={pageNum}
                  href={`/activities?page=${pageNum}`}
                  className={`numPage ${pageNum === currentPage ? "focusPage" : ""}`}
                  title={`ไปหน้าที่ ${pageNum}`}>
                  {pageNum}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      ) : (
        <div className="detail-news">
          <h2 className='title-news-page'>{activities[selectedNews]}</h2>
          <div className="line"></div>
          <Image
            src={img[selectedNews]}
            height={1000}
            width={1000}
            alt={activities[selectedNews]}
            className="image-news-page"
          />
          <ScrollReveal>
            <div
              className='content-box-page'
              dangerouslySetInnerHTML={{ __html: content[selectedNews] }}
            />
            <div className="btn-back-newsPage">
              <button onClick={() => {
                setSelectedNews(null)
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }} className="back-btn">
                {lang === "th" ? "กลับไปหน้ารวม" : lang === "en" ? "Back to Overview" : "一覧に戻る"}
              </button>
            </div>
          </ScrollReveal>
        </div>
      )}
    </div>
  );
}
