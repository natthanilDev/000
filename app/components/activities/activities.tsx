'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import { useSearchParams } from "next/navigation";

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
    'JIEI ',
    '=-=',
    'JIEI ',
    '=-=',
    'JIEI ',
    '=-=',
    'JIEI ',
    '=-=',
  ];
  const img = [
    '/JIEI(Thailnad).co.,ltd.jpg',
    '/JIEI(Thailnad).co.,ltd.jpg',
    '/JIEI(Thailnad).co.,ltd.jpg',
    '/JIEI(Thailnad).co.,ltd.jpg',
    '/JIEI(Thailnad).co.,ltd.jpg',
    '/JIEI(Thailnad).co.,ltd.jpg',
    '/JIEI(Thailnad).co.,ltd.jpg',
    '/JIEI(Thailnad).co.,ltd.jpg',
  ];
  const content = [
    '1orem ipsum dolor sit, amet consectetur adipisicing elit. Totam quibusdam est sapiente quas veritatis at incidunt harum ipsam dignissimos doloribus? Asperiores molestias quasi, excepturi blanditiis cum corrupti reiciendis alias repellendus. 001',
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam quibusdam est sapiente quas veritatis at incidunt harum ipsam dignissimos doloribus? Asperiores molestias quasi, excepturi blanditiis cum corrupti reiciendis alias repellendus. 002',
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam quibusdam est sapiente quas veritatis at incidunt harum ipsam dignissimos doloribus? Asperiores molestias quasi, excepturi blanditiis cum corrupti reiciendis alias repellendus. 001',
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam quibusdam est sapiente quas veritatis at incidunt harum ipsam dignissimos doloribus? Asperiores molestias quasi, excepturi blanditiis cum corrupti reiciendis alias repellendus. 002',
    '1orem ipsum dolor sit, amet consectetur adipisicing elit. Totam quibusdam est sapiente quas veritatis at incidunt harum ipsam dignissimos doloribus? Asperiores molestias quasi, excepturi blanditiis cum corrupti reiciendis alias repellendus. 001',
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam quibusdam est sapiente quas veritatis at incidunt harum ipsam dignissimos doloribus? Asperiores molestias quasi, excepturi blanditiis cum corrupti reiciendis alias repellendus. 002',
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam quibusdam est sapiente quas veritatis at incidunt harum ipsam dignissimos doloribus? Asperiores molestias quasi, excepturi blanditiis cum corrupti reiciendis alias repellendus. 001',
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam quibusdam est sapiente quas veritatis at incidunt harum ipsam dignissimos doloribus? Asperiores molestias quasi, excepturi blanditiis cum corrupti reiciendis alias repellendus. 002',
  ];

  const start = (currentPage - 1) * perPage;
  const end = start + perPage;
  const paginatedData = activities.slice(start, end);
  const totalPages = Math.ceil(activities.length / perPage);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [searchParams]);

  // SEO Metadata
  const pageTitle = selectedNews !== null
    ? `${activities[selectedNews]} | Activities - JIEI Thailand`
    : `Activities - JIEI Thailand | Automotive Rubber Parts Manufacturer`;

  const pageDescription = selectedNews !== null
    ? content[selectedNews].slice(0, 160)
    : 'ติดตามกิจกรรมล่าสุดของ JIEI Thailand ผู้ผลิตชิ้นส่วนยางรถยนต์คุณภาพสูง มาตรฐาน ISO, IATF16949';

  return (
    <div className='activities-page'>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content="JIEI Thailand, Automotive Rubber Parts, Activities, ข่าวกิจกรรม, ยางรถยนต์" />
        <meta name="robots" content="index, follow" />
        {/* Open Graph */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={selectedNews !== null ? img[selectedNews] : '/JIEI(Thailnad).co.,ltd.jpg'} />
        <meta property="og:url" content={`https://yourdomain.com/activities${selectedNews !== null ? `?news=${selectedNews}` : `?page=${currentPage}`}`} />
        <meta property="og:locale" content="th_TH" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={selectedNews !== null ? img[selectedNews] : '/JIEI(Thailnad).co.,ltd.jpg'} />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "NewsArticle",
              headline: selectedNews !== null ? activities[selectedNews] : "กิจกรรมล่าสุด",
              image: [selectedNews !== null ? img[selectedNews] : "/JIEI(Thailnad).co.,ltd.jpg"],
              datePublished: "2025-08-26T00:00:00+07:00",
              dateModified: "2025-08-26T00:00:00+07:00",
              author: {
                "@type": "Organization",
                name: "JIEI Thailand"
              },
              publisher: {
                "@type": "Organization",
                name: "JIEI Thailand",
                logo: {
                  "@type": "ImageObject",
                  url: "/JIEI(Thailnad).co.,ltd.jpg"
                }
              },
              description: pageDescription
            })
          }}
        />
      </Head>

      {selectedNews === null ? (
        <div>
          <h1 className='activities-text'>{lang === "th" ? "กิจกรรม" : lang === "en" ? "Activities" : "活動"}  </h1>
          <div className="line"></div>
          <div className="activities-text-description-box">
            <p className='activities-text-description'>
              {lang === "th" ? "JIEI ทุ่มเทเพื่อสร้างสภาพแวดล้อมการทำงานระดับมืออาชีพ และสนับสนุนความร่วมมือรวมถึงนวัตกรรมผ่านกิจกรรมที่สร้างแรงบันดาลใจ" : lang === "en" ? "JIEI is dedicated to creating a professional work environment and promoting collaboration and innovation through inspiring activities." : "JIEIは、プロフェッショナルな職場環境の構築に尽力し、刺激的な活動を通じて協力とイノベーションを推進しています。"}
            </p>
          </div>
          <div className="container-card">
            {paginatedData.map((item, index) => (
              <div className="box-card" key={index}>
                <div className="image-card">
                  <Image
                    src={img[start + index]}
                    height={1000}
                    width={1000}
                    alt={item}
                    className="image-activities"
                    priority
                  />
                </div>
                <div className="content-card-box">
                  <div className="title-card">
                    <h2>{lang === "th" ? item : lang === "en" ? item : ""}</h2>
                  </div>
                  <div className="description-activities">
                    <p className='content-card'>{lang === "th" ? content[start + index] : lang === "en" ? content[start + index] : content[start + index]}</p>
                  </div>
                  <button className="read-more"
                    onClick={() => {
                      setSelectedNews(start + index)
                      window.scrollTo({ top: 0, behavior: 'smooth' })
                    }} >
                    {lang === "th" ? "อ่านเพิ่มเติม" : lang === "en" ? "Read more" : "続きを読む"}
                  </button>
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
                  title={`ไปหน้าที่ ${pageNum}`}
                >
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
          <h2 className='news-blog'>{lang === "th" ? `กิจกรรมที่คุณเลือก ${activities[selectedNews]}` : lang === "en" ? `Selected Activities ${activities[selectedNews]}` : `選択した活動 ${activities[selectedNews]}`}  </h2>
          <p className='content-box-page'>{lang === "th" ? content[selectedNews] : lang === content[selectedNews] ? content[selectedNews] : content[selectedNews]}</p>
          <div className="btn-back-newsPage">
            <button onClick={() => {
              setSelectedNews(null)
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }} className="back-btn">
              {lang === "th" ? "กลับไปหน้ารวม" : lang === "en" ? "Back to Overview" : "一覧に戻る"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
