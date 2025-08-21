'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams } from "next/navigation";

export default function page() {

  const searchParams = useSearchParams()
  console.log(process.env.MAIL_SERVER)
  console.log(12346)
  const page = searchParams.get("page");
  const currentPage = page ? parseInt(page, 10) : 1;

  const perPage = 8;

  const news = [
    '=-=',
    '=-=',
    '=-=',
    '=-=',
    '=-=',
    '=-=',
    '=-=',
    '=-=',
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


  ]

  const content = [
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere tempora error, voluptatem aspernatur omnis quasi eveniet veritatis magni blanditiis, ullam itaque labore adipisci quidem fuga temporibus laborum reprehenderit in possimus?',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere tempora error, voluptatem aspernatur omnis quasi eveniet veritatis magni blanditiis, ullam itaque labore adipisci quidem fuga temporibus laborum reprehenderit in possimus?',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere tempora error, voluptatem aspernatur omnis quasi eveniet veritatis magni blanditiis, ullam itaque labore adipisci quidem fuga temporibus laborum reprehenderit in possimus?',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere tempora error, voluptatem aspernatur omnis quasi eveniet veritatis magni blanditiis, ullam itaque labore adipisci quidem fuga temporibus laborum reprehenderit in possimus?',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere tempora error, voluptatem aspernatur omnis quasi eveniet veritatis magni blanditiis, ullam itaque labore adipisci quidem fuga temporibus laborum reprehenderit in possimus?',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere tempora error, voluptatem aspernatur omnis quasi eveniet veritatis magni blanditiis, ullam itaque labore adipisci quidem fuga temporibus laborum reprehenderit in possimus?',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere tempora error, voluptatem aspernatur omnis quasi eveniet veritatis magni blanditiis, ullam itaque labore adipisci quidem fuga temporibus laborum reprehenderit in possimus?',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere tempora error, voluptatem aspernatur omnis quasi eveniet veritatis magni blanditiis, ullam itaque labore adipisci quidem fuga temporibus laborum reprehenderit in possimus?',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere tempora error, voluptatem aspernatur omnis quasi eveniet veritatis magni blanditiis, ullam itaque labore adipisci quidem fuga temporibus laborum reprehenderit in possimus?',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere tempora error, voluptatem aspernatur omnis quasi eveniet veritatis magni blanditiis, ullam itaque labore adipisci quidem fuga temporibus laborum reprehenderit in possimus?',

  ]

  const start = (currentPage - 1) * perPage;
  const end = start + perPage;
  const paginatedData = news.slice(start, end)
  const totalPages = Math.ceil(news.length / perPage);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "กิจกรรมบริษัท JIEI Thailand",
    description:
      "ติดตามกิจกรรมและข่าวสารล่าสุดจากบริษัท JIEI Thailand ผู้ผลิตชิ้นส่วนยางรถยนต์คุณภาพสูงในชลบุรี",
    itemListElement: news.map((news, index) => ({
      "@type": "ListItem",
      position: index + 1,

      name: news,
      url: `https://jieithai.com/activities?page=${Math.floor(index / perPage) + 1}`,
    })),
  };
  return (
    <div>
      <h1 className='title-news'>News | Blog </h1>
      <div className="line"></div>

      <div className="container-card">

        {paginatedData.map((news, index) => (
          <div className="box-card" key={index}>
            <div className="image-card">
              <Image
                src={img[index]}
                height={1000}
                width={1000}
                alt=""
                className="image-news"
                priority
              />
            </div>

            <div className="content-card-box">
              <div className="title-card">
                <h2>{news}</h2>
              </div>
              <div className="content-card">
                <p>{content[index]}</p>
              </div>
              <Link href={`/news?newspage${index}`} className="read-more">
                อ่านเพิ่มเติม
              </Link>
            </div>
          </div>
        ))}



      </div>

      <nav className="countPage" aria-label="Pagination">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
          <Link
            key={pageNum}
            
            href={`/news?page=${pageNum}`}
            className={`numPage ${pageNum === currentPage ? "focusPage" : ""
              }`}
            title={`ไปหน้าที่ ${pageNum} - ข่าวและบทความ JIEI Thailand`}>
            {pageNum}
          </Link>
        ))}
      </nav>

    </div>
  )
}
