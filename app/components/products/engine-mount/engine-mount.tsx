'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import { useSearchParams } from "next/navigation";
import ScrollReveal from "../../ScrollReveal/ScrollReveal";

export default function Page() {
  const searchParams = useSearchParams();
  const [selectedNews, setSelectedNews] = useState<number | null>(null);

  const page = searchParams.get("page");
  const currentPage = page ? parseInt(page, 10) : 1;
  const perPage = 8;

  const product_nameTH = [
    'แท่นยึดเครื่องยนต์',
   
  ]

  const product_nameEN = [
    'Product Name',
   
  ]

  const product_nameJP = [
    'Product Name',

  ]
  const descriptionTH = [
    'ยางแท่นยึดเครื่องยนต์ หรือชื่อที่มักได้ยินในวงการช่างว่า “แท่นเครื่อง” (Engine Mount) คือชิ้นส่วนเล็ก ๆ แต่สำคัญมากของรถยนต์ — หน้าที่ของมันคือ ยึดเครื่องยนต์และเกียร์เข้ากับตัวถังรถ พร้อมทั้งลดแรงสั่นสะเทือนและเสียงรบกวนที่เกิดจากการทำงานของเครื่องยนต์ไม่ให้ส่งต่อไปยังห้องโดยสาร',
    
  ]
  const descriptionEN = [
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores illum at voluptate aperiam ducimus totam voluptatibus nemo corporis ut ratione excepturi quae veritatis quis sit, tenetur temporibus a laudantium! Aperiam?',

  ]
  const descriptionJP = [
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores illum at voluptate aperiam ducimus totam voluptatibus nemo corporis ut ratione excepturi quae veritatis quis sit, tenetur temporibus a laudantium! Aperiam?',

  ]


  const image = [
    '/ยางขอบประตูรถยนต์.png',
    
  ]
  const datePostTH = [
    'โพสเมื่อ 24 ตุลาคม 2025',
    
  ];
  const datePostEN = [
    'Posted on October 24, 2025',
  
  ];
  const datePostJP = [
    '2025年10月24日掲載（とうこう）',

  ];

  const details_nameTH = [
    ['ความแข็งแรง', 'ความทนทาน' , 'ต้านสารเคมี'],
   
  ]
  const details_nameEN = [
    'Placeholder text1',
   
  ]
  const details_nameJP = [
    'プレースホルダーテキスト1',
    
  ]

  const details_productTH = [
    [
      'รับน้ำหนักได้ 500 กิโลกรัม',
      'ระยะเวลาในการใช้งาน 10 ปี',
      'สามารถต้านทานสารเคมีได้ทั้งหมด 129 ตัว ซึ่งเป็นสารเคมีที่ใช้กับรถยนต์ หมายความว่าสามารถต้านทานสารเคมีได้ทุกอย่างหากเคมีนั้นเกี่ยวกับรถยนต์'
    ],
    
  ]
  const details_productEN = [
    'Placeholder text — Lorem ipsum is dummy text used in design and layout mockups1',
    
  ]
  const details_productJP = [
    'プレースホルダーテキスト — Lorem ipsum はデザインやレイアウトのモックアップで使用されるダミーテキストです1',
  
  ]

  const revProduct_nameTH = [...product_nameTH].reverse()
  const revProduct_nameEN = [...product_nameEN].reverse()
  const revProduct_nameJP = [...product_nameJP].reverse()

  const revDescriptionTH = [...descriptionTH].reverse()
  const revDescriptionEN = [...descriptionEN].reverse()
  const revDescriptionJP = [...descriptionJP].reverse()

  const revImage = [...image].reverse()

  const revDatePostTH = [...datePostTH].reverse()
  const revDatePostEN = [...datePostEN].reverse()
  const revDatePostJP = [...datePostJP].reverse()

  const revDetails_nameTH = [...details_nameTH].reverse()
  const revDetails_nameEN = [...details_nameEN].reverse()
  const revDetails_nameJP = [...details_nameJP].reverse()

  const revDetails_productTH = [...details_productTH].reverse()
  const revDetails_productEN = [...details_productEN].reverse()
  const revDetails_productJP = [...details_productJP].reverse()


  const [lang, setLang] = useState<'th' | 'en' | 'jp'>('th');


  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedLang = localStorage.getItem('lang') as 'th' | 'en' | 'jp' | null;
      if (storedLang) setLang(storedLang);
    }



  }, []);

  const start = (currentPage - 1) * perPage;
  const totalPages = Math.ceil(revProduct_nameTH.length / perPage);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [searchParams])

  const pageTitle = selectedNews === null
    ? "News & Blog | JIEI Thailand"
    : `${product_nameTH[selectedNews]} | JIEI Thailand`;
  const pageDescription = selectedNews === null
    ? "อ่านข่าวสารล่าสุดและบล็อกเกี่ยวกับการผลิตยางรถยนต์และกิจกรรมต่างๆ ของ JIEI Thailand."
    : descriptionTH[selectedNews].slice(0, 160);

  return (
    <div className='product-bg'>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href="https://www.jiei-thai.co.th/news" />

        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={image[selectedNews ?? 0]} />
        <meta property="og:url" content="https://www.jiei-thai.co.th/news" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={image[selectedNews ?? 0]} />


        {selectedNews !== null && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "NewsArticle",
                "headline": product_nameTH[selectedNews],
                "image": [image[selectedNews]],
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
                    "url": image[0]
                  }
                },
                "description": descriptionTH[selectedNews]
              })
            }}
          />
        )}
      </Head>

      {selectedNews === null ? (
        <>
          <div className='product-all'>
            <div className="product-title">
              <ScrollReveal>
                <h1 className='product-name'>{lang.includes('th') ? "แท่นยึดเครื่องยนต์" : lang.includes('en') ? "Engine Mounts" : "エンジンマウント"}</h1>
              </ScrollReveal>
              <ScrollReveal>
                <p className="description-product"> {lang.includes('th') ? "ยางแท่นยึดเครื่องยนต์ หรือชื่อที่มักได้ยินในวงการช่างว่า “แท่นเครื่อง” (Engine Mount) คือชิ้นส่วนเล็ก ๆ แต่สำคัญมากของรถยนต์ — หน้าที่ของมันคือ ยึดเครื่องยนต์และเกียร์เข้ากับตัวถังรถ พร้อมทั้งลดแรงสั่นสะเทือนและเสียงรบกวนที่เกิดจากการทำงานของเครื่องยนต์ไม่ให้ส่งต่อไปยังห้องโดยสาร"
                  : lang.includes('en') ? "An engine mount (commonly called “แท่นเครื่อง” in Thai) is a small but crucial component of a car. Its main function is to secure the engine and transmission to the vehicle’s chassis while reducing vibrations and noise generated by the engine from being transmitted into the cabin."
                    : "エンジンマウント（タイ語で「แท่นเครื่อง（テンキアン）」とも呼ばれる）は、自動車の小さいながら非常に重要な部品です。主な役割は、エンジンとトランスミッションを車体に固定し、エンジンの作動による振動や騒音が車内に伝わるのを抑えることです。"}</p>
              </ScrollReveal>
              <div className="line"></div>
              <div className="product">

                {revProduct_nameTH.map((item, index) => (
                  <div key={index} className="product-card-box"
                    onClick={() => {
                      setSelectedNews(start + index)
                      window.scrollTo({ top: 0, behavior: 'smooth' })
                    }}>
                    <div className="image-product-part">

                      <Image className='image-product' src={revImage[start + index]} alt='โรงงานผลิตชิ้นส่วนยางรถยนต์มาตรฐานสากล ISO & IATF16949 ที่ชลบุรี ประเทศไทย"' width={1000} height={1000} priority />

                    </div>
                    <div className="product-box">
                      <div className="product-card">
                        <h4>{lang.includes('th') ? item : lang.includes('en') ? revProduct_nameEN[index] : revProduct_nameJP[index]}</h4>
                      </div>
                      <div className="product-description-box">
                        <div className="space-part-box">

                          <p className='space-part'>
                            {lang.includes('th') ? revDescriptionTH[start + index] : lang.includes('en') ? revDescriptionEN[index + start] : revDescriptionJP[index + start]}
                          </p>

                        </div>

                      </div>
                    </div>
                    <div className="preview-product">
                      <div className="text-preview">
                        {lang.includes('th') ? "อ่านเพิ่มเติม" : lang.includes('en') ? "Read More" : "続きを読む"}
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
          </div>



          <div className="page">
            <nav className="countPage" aria-label="Pagination">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                <Link
                  key={pageNum}
                  href={`/products/engine-mount?page=${pageNum}`}
                  className={`numPage ${pageNum === currentPage ? "focusPage" : ""}`}
                  title={`ไปหน้าที่ ${pageNum}`}>
                  {pageNum}
                </Link>
              ))}
            </nav>
          </div>
        </>
      ) : (
        <div className="detail-product">
          <h2 className='title-product-page'>{lang.includes('th') ? revProduct_nameTH[selectedNews] : lang.includes('en') ? revProduct_nameEN[selectedNews] : revProduct_nameJP[selectedNews]}</h2>
          <div className="line"></div>
          <div className="product-description-card">
            <div className="image-product-card">
              <ScrollReveal>
                 
                <Image
                  src={revImage[selectedNews]}
                  height={1000}
                  width={1000}
                  alt={`product image: ${revDescriptionTH[selectedNews]}`}
                  className="image-product-page"
                />
                
              </ScrollReveal>
            </div>
            <div className="description-box-product">
              <ScrollReveal>
                <p className='datePost'>{lang.includes('th') ? datePostTH[selectedNews] : lang.includes('en') ? datePostEN[selectedNews] : datePostJP[selectedNews]}</p>
                <h2 className='product-blog'>{lang.includes('th') ? revProduct_nameTH[selectedNews] : lang.includes('en') ? revProduct_nameEN[selectedNews] : revProduct_nameJP[selectedNews]}</h2>
                
                <p className='description-box-page'>{lang.includes('th') ? revDescriptionTH[selectedNews] : lang.includes('en') ? revDescriptionEN[selectedNews] : revDescriptionJP[selectedNews]}</p>
              </ScrollReveal>
              <div className="product-description-box-2">
                <ScrollReveal>
                  <h3> {lang.includes('th') ? "รายละเอียดผลิตภัณฑ์" : lang.includes('en') ? "Product Details" : "製品詳細（せいひんしょうさい）"} </h3>
                </ScrollReveal>
              </div>

              <div className="description-product-table">
                {details_nameTH[selectedNews].map((item, index) =>
                  <div key={index} className={`pop-product${index % 2 == 0 ? 1 : 2}`}>
                    <div className={`table-spec1${index % 2 == 0 ? 1 : 2}`}>
                      <ScrollReveal>
                        <p className='product-description-table-title'> {lang.includes('th') ? revDetails_nameTH[selectedNews][index] : lang.includes('en') ? revDetails_nameEN[selectedNews] : revDetails_nameJP[selectedNews]}</p>
                      </ScrollReveal>
                    </div>
                    <div className={`table-spec${index % 2 == 0 ? 1 : 2}`}>
                      <ScrollReveal>
                        <p className='product-description-table'> {lang.includes('th') ? revDetails_productTH[selectedNews][index] : lang.includes('en') ? revDetails_productEN[selectedNews] : revDetails_productJP[selectedNews]}</p>
                      </ScrollReveal>
                    </div>
                   
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="btn-back-newsPage">
            <button onClick={() => {
              setSelectedNews(null)
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }} className="back-btn">
              กลับไปหน้ารวม {lang.includes('th') ? "" : lang.includes('en') ? "" : ""}
            </button>
          </div>
        </div >
      )
      }
    </div >
  );
}
