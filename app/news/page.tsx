'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from "next/navigation";
export default function Page() {
  const searchParams = useSearchParams();
  const [selectedNews, setSelectedNews] = useState<number | null>(null); // เก็บ index ของข่าวที่เลือก

  const page = searchParams.get("page");
  const currentPage = page ? parseInt(page, 10) : 1;
  const perPage = 8;

  const news = [
    'JIEI เปิดไลน์การผลิตใหม่ IT ไลน์',
    '=-=',
     'JIEI เปิดไลน์การผลิตใหม่ IT ไลน์',
    '=-=',
     'JIEI เปิดไลน์การผลิตใหม่ IT ไลน์',
    '=-=',
     'JIEI เปิดไลน์การผลิตใหม่ IT ไลน์',
    '=-=',
     'JIEI เปิดไลน์การผลิตใหม่ IT ไลน์',
    '=-=',
     'JIEI เปิดไลน์การผลิตใหม่ IT ไลน์',
    '=-=',
     'JIEI เปิดไลน์การผลิตใหม่ IT ไลน์',
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
     'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam quibusdam est sapiente quas veritatis at incidunt harum ipsam dignissimos doloribus? Asperiores molestias quasi, excepturi blanditiis cum corrupti reiciendis alias repellendus. 001',
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam quibusdam est sapiente quas veritatis at incidunt harum ipsam dignissimos doloribus? Asperiores molestias quasi, excepturi blanditiis cum corrupti reiciendis alias repellendus. 002',
     'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam quibusdam est sapiente quas veritatis at incidunt harum ipsam dignissimos doloribus? Asperiores molestias quasi, excepturi blanditiis cum corrupti reiciendis alias repellendus. 001',
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam quibusdam est sapiente quas veritatis at incidunt harum ipsam dignissimos doloribus? Asperiores molestias quasi, excepturi blanditiis cum corrupti reiciendis alias repellendus. 002',
     'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam quibusdam est sapiente quas veritatis at incidunt harum ipsam dignissimos doloribus? Asperiores molestias quasi, excepturi blanditiis cum corrupti reiciendis alias repellendus. 001',
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam quibusdam est sapiente quas veritatis at incidunt harum ipsam dignissimos doloribus? Asperiores molestias quasi, excepturi blanditiis cum corrupti reiciendis alias repellendus. 002',
     'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam quibusdam est sapiente quas veritatis at incidunt harum ipsam dignissimos doloribus? Asperiores molestias quasi, excepturi blanditiis cum corrupti reiciendis alias repellendus. 001',
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam quibusdam est sapiente quas veritatis at incidunt harum ipsam dignissimos doloribus? Asperiores molestias quasi, excepturi blanditiis cum corrupti reiciendis alias repellendus. 002',
     'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam quibusdam est sapiente quas veritatis at incidunt harum ipsam dignissimos doloribus? Asperiores molestias quasi, excepturi blanditiis cum corrupti reiciendis alias repellendus. 001',
    '0000005 ipsum dolor sit, amet consectetur adipisicing elit. Totam quibusdam est sapiente quas veritatis at incidunt harum ipsam dignissimos doloribus? Asperiores molestias quasi, excepturi blanditiis cum corrupti reiciendis alias repellendus. 002',
  ]

  const start = (currentPage - 1) * perPage;
  const end = start + perPage;
  const paginatedData = news.slice(start, end);
  const totalPages = Math.ceil(news.length / perPage);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [searchParams])
  return (
    <div>
      {selectedNews === null ? (
        <>
          <h1 className='title-news'>News | Blog</h1>
          <div className="line"></div>

          <div className="container-card">
            {paginatedData.map((item, index) => (
              <div className="box-card" key={index}>
                <div className="image-card">
                  <Image
                    src={img[start + index]}
                    height={1000}
                    width={1000}
                    alt=""
                    className="image-news"
                    priority
                  />
                </div>

                <div className="content-card-box">
                  <div className="title-card">
                    <h2>{item}</h2>
                  </div>
                  <div className="content-card">
                    <p>{content[start + index]}</p>
                  </div>
                  <button className="read-more"
                    
                    onClick={() => {
                      setSelectedNews(start + index)
                      window.scrollTo({ top: 0, behavior: 'smooth' })
                    }} >
                      
                    อ่านเพิ่มเติม

                  </button>
                </div>
              </div>
            ))}
          </div>

          <nav className="countPage" aria-label="Pagination">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
              <Link
                key={pageNum}
                href={`/news?page=${pageNum}`}
                className={`numPage ${pageNum === currentPage ? "focusPage" : ""}`}
                title={`ไปหน้าที่ ${pageNum}`}
              >
                {pageNum}
              </Link>
            ))}
          </nav>
        </>
      ) : (
        <div className="detail-news">
          <h2 className='title-news-page'>{news[selectedNews]}</h2>
          <div className="line"></div>
          <Image
            src={img[selectedNews]}
            height={1000}
            width={1000}
            alt=""
            className="image-news-page"
          />
          <h2 className='news-blog'>ข่าวที่เลือก {news[selectedNews]}</h2>
          <p className='content-box-page'>{content[selectedNews]}</p>


          <div className="btn-back-newsPage">
            <button onClick={() => {
              setSelectedNews(null)
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }

            } className="back-btn">
              กลับไปหน้ารวม
            </button>
          </div>

        </div>
      )
      }
    </div >
  );
}
