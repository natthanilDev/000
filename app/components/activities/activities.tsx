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

  const activitiesTH = [
    'ท่องเที่ยวประจำปี 2025',
    

  ];
  const activitiesEN = [
    'COMPANY TRIP SCHEDULE 2025',
  ];
  const activitiesJP = [
    '2025年 会社旅行スケジュール',
  ];
  const img = [
    '/companyTrip.png',

  ];
  const contentALLTH = [
    `วันเสาร์ (วันที่1) 06:30 รวมตัวที่บริษัท JIEI (พร้อมชุดลำลองสีสดใส) แจกของที่ระลึก เช่น หมวก + เสื้อทริป 07:00 ออกเดินทางด้วยรถบัส`,

  ];
  const contentALLEN = [
    `Saturday (Day 1) 06:30 Gather at JIEI company (wearing colorful casual clothes) Hand out souvenirs such as hats + trip shirts
07:00 Depart by bus`,

  ];
  const contentALLJP = [
    `土曜日（1日目）06:30 JIEI会社に集合（カラフルなカジュアル服着用）、記念品を配布（帽子＋旅行用シャツなど）
07:00 バスで出発`,

  ];
  const contentTH = [
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

  const contentEN = [
    `<h5>Saturday (Day 1) 06:30</h5> Gather at JIEI company (wearing colorful casual clothes) Hand out souvenirs such as hats + trip shirts
    <hr />
    <h5>07:00</h5> Depart by air-conditioned bus to Khao Yai (snacks on the bus + small games from HR, e.g., fun company quiz)
    <hr />
    <h5>09:30</h5> Arrive at “Khao Yai Viewpoint” for a group photo
    <hr />
    <h5>10:30</h5> Team Building activity “Mission Possible” at the open nature area, team competitions such as Puzzle Relay, Rope Challenge (bonding rope), nature puzzle games focusing on laughter and communication
    <hr />
    <h5>12:00</h5> Lunch at the resort
    <hr />
    <h5>13:30</h5> Check-in / Short rest
    <hr />
    <h5>15:00</h5> Short Workshop “JIEI Vision 2025” Informal discussion – each team presents their ideas “JIEI they want to see next year”, warm and comfortable atmosphere
    <hr />
    <h5>17:30</h5> Free time: walk / take photos / swim / have coffee
    <hr />
    <h5>19:00</h5> Dinner Party in the garden, Thai-Japanese buffet, Mini Stage: light live music from employees, Lucky Draw (small gifts from executives), Special Moment: CEO thanks the team and closes the first day with a short but heartfelt speech
    <hr />
    <h5>21:30</h5> Bonfire party / stargazing / activity “Sharing good work memories”
    <hr />
    <h5>23:00</h5> Rest, recharge for Day 2
    <hr />
    <h5>Sunday (Day 2) 07:30</h5> Breakfast at the resort
    <hr />
    <h5>09:00</h5> Short Workshop “Team Reflection” Each group shares what they learned from yesterday’s activities and set goals together for 2025, group photo with team quote
    <hr />
    <h5>10:30</h5> Check-out from the resort
    <hr />
    <h5>11:00</h5> Stop at “Chokchai Farm” or “The Birder’s Lodge Market” for a stroll and souvenirs
    <hr />
    <h5>12:30</h5> Lunch together at a famous Khao Yai restaurant
    <hr />
    <h5>14:00</h5> Travel back to Bangkok with laughter on the bus
    <hr />
    <h5>17:00</h5> Arrive at the company safely, end the trip with “See you next year!
    <hr />`

  ];

  const contentJP = [
    `<h5>土曜日 (1日目) 06:30</h5> JIEI社に集合（カラフルなカジュアル服装で）帽子＋トリップシャツなどの記念品を配布
    <hr />
    <h5>07:00</h5> エアコン付きバスでカオヤイへ出発（バス内で軽食＋HRからの小さなゲーム、例：楽しい会社クイズ）
    <hr />
    <h5>09:30</h5> 「カオヤイ展望台」に到着、記念のグループ写真撮影
    <hr />
    <h5>10:30</h5> 自然の中でのチームビルディング活動「ミッション・ポッシブル」、チーム対抗パズルリレー、ロープチャレンジ（絆のロープ）、笑いとコミュニケーションを重視した自然パズルゲーム
    <hr />
    <h5>12:00</h5> リゾートで昼食
    <hr />
    <h5>13:30</h5> チェックイン / 短い休憩
    <hr />
    <h5>15:00</h5> 短いワークショップ「JIEIビジョン2025」、非公式なディスカッション – 各チームが「来年見たいJIEI」のアイデアを発表、温かく快適な雰囲気
    <hr />
    <h5>17:30</h5> 自由時間：散歩 / 写真撮影 / 水泳 / コーヒーを飲む
    <hr />
    <h5>19:00</h5> ガーデンでのディナーパーティー、タイ・日本のビュッフェ、ミニステージ：従業員による軽いライブ音楽、ラッキードロー（経営陣からの小さなギフト）、特別な瞬間：CEOがチームに感謝し、短くも心のこもったスピーチで初日を締めくくる
    <hr />
    <h5>21:30</h5> 焚き火パーティー / 星空観察 / 「仕事の良い思い出を共有する」アクティビティ
    <hr />
    <h5>23:00</h5> 休息、2日目のために充電
    <hr />
    <h5>日曜日 (2日目) 07:30</h5> リゾートで朝食
    <hr />
    <h5>09:00</h5> 短いワークショップ「チームリフレクション」、各グループが昨日の活動から学んだことを共有し、2025年の目標を一緒に設定、チームの引用とともにグループ写真撮影
    <hr />
    <h5>10:30</h5> リゾートをチェックアウト
    <hr />
    <h5>11:00</h5> 「チョクチャイファーム」または「ザ・バーダーズロッジマーケット」に立ち寄り、散策とお土産購入 
    <hr />
    <h5>12:30</h5> カオヤイの有名なレストランで一緒に昼食
    <hr />
    <h5>14:00</h5> バスでバンコクへ戻る、バス内で笑い声とともに
    <hr />
    <h5>17:00</h5> 無事に会社に到着、「また来年お会いしましょう！」で旅行を締めくくる
    <hr />`
  ];

const datePostTH = [
    '15 สิงหาคม 2023',
   
  ];
  const datePostEN = [
    'August 15, 2023',
    
  ];
  const datePostJP = [
    '2023年8月15日',
    
  ];

  const revActivitiesTH = [...activitiesTH].reverse();
  const revActivitiesEN = [...activitiesEN].reverse();
  const revActivitiesJP = [...activitiesJP].reverse();
  const revImg = [...img].reverse();
  const revContentALLTH = [...contentALLTH].reverse();
  const revContentALLEN = [...contentALLEN].reverse();
  const revContentALLJP = [...contentALLJP].reverse();
  const revContentTH = [...contentTH].reverse();
  const revContentEN = [...contentEN].reverse();
  const revContentJP = [...contentJP].reverse();
  const revDatePostTH = [...datePostTH].reverse();
  const revDatePostEN = [...datePostEN].reverse();
  const revDatePostJP = [...datePostJP].reverse();


  const start = (currentPage - 1) * perPage;
  const end = start + perPage;
  const paginatedData = revActivitiesTH.slice(start, end);
  const totalPages = Math.ceil(activitiesTH.length / perPage);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [searchParams]);

  // ✅ SEO Metadata
  const pageTitle = selectedNews !== null
    ? `${activitiesTH[selectedNews]} | JIEI Thailand - ผู้ผลิตชิ้นส่วนยางรถยนต์ ชลบุรี`
    : `กิจกรรมบริษัท | JIEI Thailand - ผู้ผลิตชิ้นส่วนยางรถยนต์คุณภาพสูง ชลบุรี`;

  const pageDescription = selectedNews !== null
    ? contentTH[selectedNews].replace(/<[^>]+>/g, '').slice(0, 160)
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


          <div className="product">
            {paginatedData.map((item, index) => (
              <div key={index} className="product-card-box"
                onClick={() => {
                  setSelectedNews(start + index)
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}>
                <div className="image-product-part">

                  <Image className='image-product' src={revImg[start + index]} alt='โรงงานผลิตชิ้นส่วนยางรถยนต์มาตรฐานสากล ISO & IATF16949 ที่ชลบุรี ประเทศไทย"' width={1000} height={1000} priority />

                </div>
                <div className="product-box">
                  <div className="product-card">
                    <h4>{lang === 'th' ? item : lang === 'en' ? revActivitiesEN[index] :revActivitiesJP[index] }</h4>
                  </div>
                  <div className="product-description-box">
                    <div className="space-part-box">

                      <p className='space-part'>
                        {lang.includes('th') ? revContentALLTH[start + index] : lang.includes('en') ? revContentALLEN[start + index] : revContentALLJP[start + index]}
                      </p>
                    </div>

                  </div>
                </div>
                <div className="preview-product">
                  <div className="text-preview">
                    <p className="preview-text">
                      {lang === 'th' ? "อ่านเพิ่มเติม" : lang === "en" ? "Read More" : "続きを読む"}
                    </p>
                  </div>

                </div>
                <div className="posted">
                    <div className="date_post">
                      <h6 className='post'>{lang.includes('th') ? revDatePostTH[index] : lang.includes('en') ? revDatePostEN[index] : revDatePostJP[index]}</h6>
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
          <h2 className='title-news-page'>{lang.includes('th') ? revActivitiesTH[selectedNews] : lang.includes('en') ? revActivitiesEN[selectedNews] : revActivitiesJP[selectedNews]}</h2>
          <div className="line"></div>
          <Image
            src={revImg[selectedNews]}
            height={1000}
            width={1000}
            alt={revActivitiesTH[selectedNews]}
            className="image-news-page"
          />
          <ScrollReveal>
            <div>
              <div className="date_post">
                <h6 className='post'>{lang.includes('th') ? revDatePostTH[selectedNews] : lang.includes('en') ? revDatePostEN[selectedNews] : revDatePostJP[selectedNews]}</h6>
              </div>
            </div>
            <div
              className='content-box-page'
              dangerouslySetInnerHTML={{ __html: lang.includes('th') ? revContentTH[selectedNews] : lang.includes('en') ? revContentEN[selectedNews] : revContentJP[selectedNews] }}
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
