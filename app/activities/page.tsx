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

  const activities = [
    'JIEI ',
    '=-=',
    'JIEI ',
    '=-=',
    'JIEI ',
    '=-=',
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
  const paginatedData = activities.slice(start, end);
  const totalPages = Math.ceil(activities.length / perPage);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [searchParams])
  return (
    <div className='activities-page'>
      {selectedNews === null ? (
        <div>

            <h1 className='activities-text'>Activities</h1>
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
                      className="image-activities"
                      priority
                    />
                  </div>

                  <div className="content-card-box">
                    <div className="title-card">
                      <h2>{item}</h2>
                    </div>
                    <div className="description-activities">
                      <p className='content-card'>{content[start + index]}</p>
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
                  href={`/activities?page=${pageNum}`}
                  className={`numPage ${pageNum === currentPage ? "focusPage" : ""}`}
                  title={`ไปหน้าที่ ${pageNum}`}
                >
                  {pageNum}
                </Link>
              ))}
            </nav>
          
        </div>
      ) : (

        <div className="detail-news">
          
            <h2 className='title-news-page'>{activities[selectedNews]}</h2>
            <div className="line"></div>
            <Image
              src={img[selectedNews]}
              height={1000}
              width={1000}
              alt=""
              className="image-news-page"
            />
            <h2 className='news-blog'>กิจกรรมที่คุณเลือก {activities[selectedNews]}</h2>
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
