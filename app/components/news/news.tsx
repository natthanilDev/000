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

  const news = [
    
    'ท่างเที่ยวประจำปี 2025',

  ];

  const img = [
    '/JIEI(Thailnad).co.,ltd.jpg'
  ]

  const content = [
    '1orem ipsum dolor sit, amet consectetur adipisicing elit. Totam quibusdam est sapiente quas veritatis at incidunt harum ipsam dignissimos doloribus? Asperiores molestias quasi, excepturi blanditiis cum corrupti reiciendis alias repellendus. 001',
  
  ];

  const [lang, setLang] = useState<'th' | 'en' | 'jp'>('th');


  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedLang = localStorage.getItem('lang') as 'th' | 'en' | 'jp' | null;
      if (storedLang) setLang(storedLang);
    }
  }, []);

  const start = (currentPage - 1) * perPage;
  const end = start + perPage;
  const paginatedData = news.slice(start, end);
  const totalPages = Math.ceil(news.length / perPage);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [searchParams])

  const pageTitle = selectedNews === null
    ? "News & Blog | JIEI Thailand"
    : `${news[selectedNews]} | JIEI Thailand`;
  const pageDescription = selectedNews === null
    ? "อ่านข่าวสารล่าสุดและบล็อกเกี่ยวกับการผลิตยางรถยนต์และกิจกรรมต่างๆ ของ JIEI Thailand."
    : content[selectedNews].slice(0, 160);

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
                "headline": news[selectedNews],
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
                "description": content[selectedNews]
              })
            }}
          />
        )}
      </Head>

      {selectedNews === null ? (
        <>
          <ScrollReveal>
            <h1 className='title-news'>{lang === "th" ? "ข่าวสาร | บล็อก" : lang === "en" ? "News | Blog" : "ニュース | ブログ"}  </h1>
            <div className="line"></div>
            <div className="news-text-description-box">
              <p className='activities-text-description'>{lang === "th" ? "เราอัปเดตข้อมูลเกี่ยวกับนวัตกรรม เทคโนโลยีของบริษัทอย่างต่อเนื่อง เพื่อให้คุณไม่พลาดความเคลื่อนไหวสำคัญในอุตสาหกรรมและการพัฒนาของเรา" : lang === "en" ? "We continuously update information about the company’s innovations and technologies to ensure you never miss important industry trends and our developments." : "当社は、業界の重要な動向や当社の最新の取り組みを見逃さないよう、革新や技術に関する情報を継続的に更新しています。"} </p>
            </div>
          </ScrollReveal>
          <div className="container-card">
            {paginatedData.map((item, index) => (
              
                <div key={index} className="box-card" onClick={() => {
                  setSelectedNews(start + index)
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }} >
                  <div className="image-card">
                    <ScrollReveal key={index}>
                    <Image
                      src={img[start + index]}
                      height={1000}
                      width={1000}
                      alt={`News image: ${item}`}
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
                      <p className='description-news-content'>{content[start + index]}</p>
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
            <h2 className='title-news-page'>{news[selectedNews]}</h2>
            <div className="line"></div>
            <Image
              src={img[selectedNews]}
              height={1000}
              width={1000}
              alt={`News image: ${news[selectedNews]}`}
              className="image-news-page"
            />
            <h2 className='news-blog'>{lang === "th" ? "ข่าวที่เลือก" : lang === "en" ? "Selected News" : "選択したニュース"}   {news[selectedNews]}</h2>
            <p className='content-box-page'>{content[selectedNews]}</p>

            <div className="btn-back-newsPage">
              <button onClick={() => {
                setSelectedNews(null)
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }} className="back-btn">
                กลับไปหน้ารวม
              </button>
            </div>
          </ScrollReveal>
        </div>
      )}

    </div >
  );
}
