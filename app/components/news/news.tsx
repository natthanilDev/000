'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import { useSearchParams } from "next/navigation";
import ScrollReveal from '../ScrollReveal/ScrollReveal';

export default function News() {
  const searchParams = useSearchParams();
  const [selectedNews, setSelectedNews] = useState<number | null>(null);

  const page = searchParams.get("page");
  const currentPage = page ? parseInt(page, 10) : 1;
  const perPage = 8;

  const newsTH = [
    'รับสมัครพนักงานฝ่ายผลิต',
    'รับสมัครพนักงานฝ่ายการตลาด',

  ];

  const newsEN = [
    'Recruitment of Production Staff',
    'Recruitment of Marketing Staff',
  ];

  const newsJP = [
    '生産スタッフの募集',
    'マーケティングスタッフの募集',
  ];


  const contentTH = [
    'ข้อความตัวอย่าง — ข้อความนี้เป็น Lorem ipsum ซึ่งเป็นข้อความตัวอย่างที่ไม่มีความหมายจริง ใช้สำหรับแทนที่ข้อความจริงในการออกแบบหรือการจัดเลย์เอาต์ 001',
    "ข้อความตัวอย่าง — ข้อความนี้เป็น Lorem ipsum ซึ่งเป็นข้อความตัวอย่างที่ไม่มีความหมายจริง ใช้สำหรับแทนที่ข้อความจริงในการออกแบบหรือการจัดเลย์เอาต์ 002",

  ];
  const contentEN = [
    'Placeholder text — this is Lorem ipsum, a filler/dummy text with no real meaning used to stand in for real copy in designs or layouts. 001',
    'Placeholder text — this is Lorem ipsum, a filler/dummy text with no real meaning used to stand in for real copy in designs or layouts. 002',
  ];
  const contentJP = [
    'プレースホルダーテキスト — これは意味のないダミーテキストであるLorem ipsumで、デザインやレイアウトで実際のコピーの代わりに使用されます。001',
    'プレースホルダーテキスト — これは意味のないダミーテキストであるLorem ipsumで、デザインやレイアウトで実際のコピーの代わりに使用されます。002',
  ];



  const img = [
    '/JIEI(Thailnad).co.,ltd.jpg',
    '/JIEI(Thailnad).co.,ltd.jpg',

  ]
  const datePostTH = [
    '15 สิงหาคม 2023',
    '20 สิงหาคม 2023',
  ];
  const datePostEN = [
    'August 15, 2023',
    'August 20, 2023',
  ];
  const datePostJP = [
    '2023年8月15日',
    '2023年8月20日',
  ];

  const revDatePostTH = [...datePostTH].reverse();
  const revDatePostEN = [...datePostEN].reverse();
  const revDatePostJP = [...datePostJP].reverse();
  const revNewsTH = [...newsTH].reverse();
  const revNewsEN = [...newsEN].reverse();
  const revNewsJP = [...newsJP].reverse();
  const revContentTH = [...contentTH].reverse();
  const revContentEN = [...contentEN].reverse();
  const revContentJP = [...contentJP].reverse();
  const revImg = [...img].reverse();


  const [lang, setLang] = useState<'th' | 'en' | 'jp'>('th');


  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedLang = localStorage.getItem('lang') as 'th' | 'en' | 'jp' | null;
      if (storedLang) setLang(storedLang);
    }
  }, []);

  const start = (currentPage - 1) * perPage;
  const end = start + perPage;
  const paginatedData = revNewsTH.slice(start, end);
  const totalPages = Math.ceil(newsTH.length / perPage);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [searchParams])

  const pageTitle = selectedNews === null
    ? "News & Blog | JIEI Thailand"
    : `${newsTH[selectedNews]} | JIEI Thailand`;
  const pageDescription = selectedNews === null
    ? "อ่านข่าวสารล่าสุดและบล็อกเกี่ยวกับการผลิตยางรถยนต์และกิจกรรมต่างๆ ของ JIEI Thailand."
    : contentTH[selectedNews].slice(0, 160);

  return (
    <div className='news-bg'>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href="https://www.jiei-thai.co.th/news" />

        {/* Open Graph */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={img[selectedNews ?? 0]} />
        <meta property="og:url" content="https://www.jiei-thai.co.th/news" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={img[selectedNews ?? 0]} />

        {/* JSON-LD Structured Data */}
        {selectedNews !== null && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "NewsArticle",
                "headline": newsTH[selectedNews],
                "image": [img[selectedNews]],
                "datePublished": new Date().toISOString(),
                "author": {
                  "@type": "Organization",
                  "name": "JIEI Thailand"
                },
                "publisher": {
                  "@type": "Organization",
                  "name": "JIEI Thailand",
                  "logo": {
                    "@type": "ImageObject",
                    "url": img[0]
                  }
                },
                "description": contentTH[selectedNews]
              })
            }}
          />
        )}
      </Head>

      {selectedNews === null ? (
        <>
          <ScrollReveal>
            <h1 className='title-news'>{lang.includes('th') ? "ข่าวสาร | บทความ" : lang.includes('en') ? "News | Blog" : "ニュース | ブログ"}  </h1>
            <div className="line"></div>
            <div className="news-text-description-box">
              <p className='activities-text-description'>{lang.includes('th') ? "เราอัปเดตข้อมูลเกี่ยวกับนวัตกรรม เทคโนโลยีของบริษัทอย่างต่อเนื่อง เพื่อให้คุณไม่พลาดความเคลื่อนไหวสำคัญในอุตสาหกรรมและการพัฒนาของเรา" 
              : lang.includes('en') ? "We continuously update information about the company’s innovations and technologies to ensure you never miss important industry trends and our developments." 
              : "当社は、業界の重要な動向や当社の最新の取り組みを見逃さないよう、革新や技術に関する情報を継続的に更新しています。"} </p>
            </div>
          </ScrollReveal>
          <div className="news-box-card">

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
                      <h4>{lang.includes('th') ? item : lang.includes('en') ? revNewsEN[index] : revNewsJP[index]}</h4>
                    </div>
                    <div className="product-description-box">
                      <div className="space-part-box">

                        <p className='space-part'>
                          {lang.includes('th') ? revContentTH[start + index] : lang.includes('en') ? revContentEN[start + index] : revContentJP[start + index]}
                        </p>
                      </div>

                    </div>
                  </div>
                  <div className="preview-product">
                    <div className="text-preview">
                      <p className="preview-text">
                        {lang.includes('th') ? "อ่านเพิ่มเติม" : lang.includes('en') ? "Read More" : "続きを読む"}
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
          </div>
          <div className="page">
            <nav className="countPage" aria-label="Pagination">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                <Link
                  key={pageNum}
                  href={`/news?page=${pageNum}`}
                  className={`numPage ${pageNum === currentPage ? "focusPage" : ""}`}
                  title={`ไปหน้าที่ ${pageNum}`}>
                  {pageNum}
                </Link>
              ))}
            </nav>
          </div>
        </>
      ) : (
        <div className="detail-news">
          <ScrollReveal>
            <h2 className='title-news-page'>{lang.includes('th') ? revNewsTH[selectedNews] : lang.includes('en') ? revNewsEN[selectedNews] : revNewsJP[selectedNews]}</h2>
            <div className="line"></div>
            <Image
              src={revImg[selectedNews]}
              height={1000}
              width={1000}
              alt={`News image: ${revNewsTH[selectedNews]}`}
              className="image-news-page"
            />


            <div>
              <div className="date_post">
                <h6 className='post'>{lang.includes('th') ? revDatePostTH[selectedNews] : lang.includes('en') ? revDatePostEN[selectedNews] : revDatePostJP[selectedNews]}</h6>
              </div>
            </div>
            <p className='content-box-page'>{revContentTH[selectedNews]}</p>

            <div className="btn-back-newsPage">
              <button onClick={() => {
                setSelectedNews(null)
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }} className="back-btn">
                {lang.includes('th') ? "กลับไปหน้ารวม" : lang.includes('en') ? "Back to Overview" : "一覧に戻る"}
              </button>
            </div>
          </ScrollReveal>
        </div>
      )}

    </div >
  );
}
