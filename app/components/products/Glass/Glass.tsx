'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import { useSearchParams } from "next/navigation";
import ScrollReveal from "../../ScrollReveal/ScrollReveal";

export default function Page() {


  const product_nameTH = [
    'แท่นยึดเครื่องยนต์1',
    'แท่นยึดเครื่องยนต์2',
    

  ]

  const product_nameEN = [
    'Product Name',

  ]

  const product_nameJP = [
    'Product Name',

  ]
  const descriptionTH = [
    'ยางแท่นยึดเครื่องยนต์ หรือชื่อที่มักได้ยินในวงการช่างว่า “แท่นเครื่อง” (Engine Mount) คือชิ้นส่วนเล็ก ๆ แต่สำคัญมากของรถยนต์ — หน้าที่ของมันคือ ยึดเครื่องยนต์และเกียร์เข้ากับตัวถังรถ พร้อมทั้งลดแรงสั่นสะเทือนและเสียงรบกวนที่เกิดจากการทำงานของเครื่องยนต์ไม่ให้ส่งต่อไปยังห้องโดยสาร1',
    'ยางแท่นยึดเครื่องยนต์ หรือชื่อที่มักได้ยินในวงการช่างว่า “แท่นเครื่อง2” ',
    

  ]
  const descriptionEN = [
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores illum at voluptate aperiam ducimus totam voluptatibus nemo corporis ut ratione excepturi quae veritatis quis sit, tenetur temporibus a laudantium! Aperiam?',

  ]
  const descriptionJP = [
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores illum at voluptate aperiam ducimus totam voluptatibus nemo corporis ut ratione excepturi quae veritatis quis sit, tenetur temporibus a laudantium! Aperiam?',

  ]


  const image = [
    '/ยางขอบประตูรถยนต์.png',
    '/ยางขอบประตูรถยนต์.png',
    
  ]
  const datePostTH = [
    'โพสเมื่อ 29 ตุลาคม 2025',
    'โพสเมื่อ 30 ตุลาคม 2025',
    


  ];
  const datePostEN = [
    'Posted on October 24, 2025',

  ];
  const datePostJP = [
    '2025年10月24日掲載（とうこう）',

  ];

  const details_nameTH = [
    ['ความแข็งแรง1', 'ความทนทาน1', 'ต้านสารเคมี1'],
    ['ความแข็งแรง2', 'ความทนทาน2', 'ต้านสารเคมี2'],
   
  ]
  const details_nameEN = [
    'Placeholder text1',

  ]
  const details_nameJP = [
    'プレースホルダーテキスト1',

  ]

  const details_productTH = [
    [
      'รับน้ำหนักได้ 500 กิโลกรัม1',
      'ระยะเวลาในการใช้งาน 10 ปี1',
      'สามารถต้านทานสารเคมีได้ทั้งหมด 129 ตัว ซึ่งเป็นสารเคมีที่ใช้กับรถยนต์ หมายความว่าสามารถต้านทานสารเคมีได้ทุกอย่างหากเคมีนั้นเกี่ยวกับรถยนต์1'
    ],
    [
      'รับน้ำหนักได้ 500 กิโลกรัม2',
      'ระยะเวลาในการใช้งาน 10 ปี2',
      'สามารถต้านทานสารเคมีได้ทั้งหมด 129 ตัว ซึ่งเป็นสารเคมีที่ใช้กับรถยนต์ หมายความว่าสามารถต้านทานสารเคมีได้ทุกอย่างหากเคมีนั้นเกี่ยวกับรถยนต์2'
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
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);
  const searchParams = useSearchParams()

  const perPage = 10
  const page = searchParams.get('page')
  const currentPage = page ? parseInt(page, 10) : 1
  const start = (currentPage - 1) * perPage
  const end = start + perPage
  const paginatedData = revProduct_nameTH.slice(start, end)
  const totalPages = Math.ceil(revProduct_nameTH.length/perPage)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedLang = localStorage.getItem('lang') as 'th' | 'en' | 'jp' | null;
      if (storedLang) setLang(storedLang);
    }
  }, []);



  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [searchParams])

  const pageTitle = selectedProduct === null
    ? "News & Blog | JIEI Thailand"
    : `${product_nameTH[selectedProduct]} | JIEI Thailand`;
  const pageDescription = selectedProduct === null
    ? "อ่านข่าวสารล่าสุดและบล็อกเกี่ยวกับการผลิตยางรถยนต์และกิจกรรมต่างๆ ของ JIEI Thailand."
    : descriptionTH[selectedProduct].slice(0, 160);

  return (
    <div className='product-bg'>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href="https://www.jiei-thai.co.th/news" />

        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={image[selectedProduct ?? 0]} />
        <meta property="og:url" content="https://www.jiei-thai.co.th/news" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={image[selectedProduct ?? 0]} />


        {selectedProduct !== null && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "NewsArticle",
                "headline": product_nameTH[selectedProduct],
                "image": [image[selectedProduct]],
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
                "description": descriptionTH[selectedProduct]
              })
            }}
          />
        )}
      </Head>

      {selectedProduct === null ? (
        <>
          <div className='product-all'>
            <div className="product-title">
              <ScrollReveal>
                <h1 className='product-name'>{lang===('th') ? "ชิ้นส่วนสำหรับกระจก" : lang===('en') ? "Parts for Glass" : "ガラス用部品"}</h1>
              </ScrollReveal>
              {/* <ScrollReveal>
                <p className="description-product"> {lang===('th') ? "ยางแท่นยึดเครื่องยนต์ หรือชื่อที่มักได้ยินในวงการช่างว่า “แท่นเครื่อง” (Engine Mount) คือชิ้นส่วนเล็ก ๆ แต่สำคัญมากของรถยนต์ — หน้าที่ของมันคือ ยึดเครื่องยนต์และเกียร์เข้ากับตัวถังรถ พร้อมทั้งลดแรงสั่นสะเทือนและเสียงรบกวนที่เกิดจากการทำงานของเครื่องยนต์ไม่ให้ส่งต่อไปยังห้องโดยสาร"
                  : lang===('en') ? "An engine mount (commonly called “แท่นเครื่อง” in Thai) is a small but crucial component of a car. Its main function is to secure the engine and transmission to the vehicle’s chassis while reducing vibrations and noise generated by the engine from being transmitted into the cabin."
                    : "エンジンマウント（タイ語で「แท่นเครื่อง（テンキアン）」とも呼ばれる）は、自動車の小さいながら非常に重要な部品です。主な役割は、エンジンとトランスミッションを車体に固定し、エンジンの作動による振動や騒音が車内に伝わるのを抑えることです。"}</p>
              </ScrollReveal> */}
              <div className="line"></div>
              <div className="product">

                {paginatedData.map((item, index) => (
                  <div key={index} className="product-card-box"
                    onClick={() => {
                      setSelectedProduct(start + index)
                      window.scrollTo({ top: 0, behavior: 'smooth' })
                    }}>
                    <div className="image-product-part">

                      <Image className='image-product' src={revImage[start + index]} alt='โรงงานผลิตชิ้นส่วนยางรถยนต์มาตรฐานสากล ISO & IATF16949 ที่ชลบุรี ประเทศไทย"' width={1000} height={1000} priority />

                    </div>
                    <div className="product-box">
                      <div className="product-card">
                        <h4>{lang===('th') ? item : lang===('en') ? revProduct_nameEN[index] : revProduct_nameJP[index]}</h4>
                      </div>
                      <div className="product-description-box">
                        <div className="space-part-box">

                          <p className='space-part'>
                            {lang===('th') ? revDescriptionTH[start + index] : lang===('en') ? revDescriptionEN[index + start] : revDescriptionJP[index + start]}
                          </p>

                        </div>

                      </div>
                    </div>
                    <div className="preview-product">
                      <div className="text-preview">
                        {lang===('th') ? "อ่านเพิ่มเติม" : lang===('en') ? "Read More" : "続きを読む"}
                      </div>

                    </div>
                    <div className="posted">
                      <div className="date_post">
                        <h6 className='post'>{lang===('th') ? revDatePostTH[start + index] : lang===('en') ? revDatePostEN[start + index] : revDatePostJP[start + index]}</h6>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="page">
            <nav className="countPage" aria-label="Pagination">

              {currentPage > 1 &&
                <Link
                  href={`/products/suspension-bush?page=${currentPage - 1}`}
                  className="numPage focusPage"
                  title={`ไปหน้าที่ ${currentPage - 1}`}>
                  <i className="bi bi-chevron-double-left"></i>
                </Link>

              }
              {(() => {
                const maxVisible = 3;
                let start = Math.max(1, currentPage-1 );
                const end = Math.min(totalPages, start + maxVisible - 1);
                if (end - start < maxVisible - 1) {
                  start = Math.max(1, end - maxVisible + 1);
                }

                const visiblePages = [];
                for (let i = start; i <= end; i++) {
                  visiblePages.push(i);


                }

                return (
                  <>
                    {/* แสดงหน้าแรก + จุดไข่ปลา ด้านหน้า */}
                    {visiblePages[0] > 1 && (
                      <>
                        <Link href={`/products/suspension-bush?page=1`} className="numPage" title="ไปหน้าที่ 1">
                          1
                        </Link>
                        {/* <span className="dots"><i className="bi bi-dash"></i></span> */}
                      </>
                    )}

                    {/* แสดงหน้าปัจจุบันและใกล้เคียง */}
                    {visiblePages.map((pageNum) => (
                      <Link
                        key={pageNum}
                        href={`/products/suspension-bush?page=${pageNum}`}
                        className={`numPage ${pageNum === currentPage ? "focusPage" : ""}`}
                        title={`ไปหน้าที่ ${pageNum}`}
                      >
                        {pageNum}
                      </Link>
                    ))}

                    {/* แสดงจุดไข่ปลา + หน้าสุดท้าย */}
                    {visiblePages[visiblePages.length - 1] < totalPages && (
                      <>
                        {/* <span className="dots"><i className="bi bi-dash"></i></span>  */}
                        <Link
                          href={`/products/suspension-bush?page=${totalPages}`}
                          className="numPage"
                          title={`ไปหน้าที่ ${totalPages}`}
                        >
                          {totalPages}
                        </Link>
                      </>
                    )}
                  </>
                );
              })()}




              {currentPage < totalPages &&
                <Link
                  href={`/products/suspension-bush?page=${currentPage + 1}`}
                  className="numPage focusPage"
                  title={`ไปหน้าที่ ${currentPage + 1}`}>
                  <i className="bi bi-chevron-double-right"></i>
                </Link>

              }
            </nav>
          </div>
        </>
      ) : (
        <div className="detail-product">
          <h2 className='title-product-page'>{lang===('th') ? revProduct_nameTH[selectedProduct] : lang===('en') ? revProduct_nameEN[selectedProduct] : revProduct_nameJP[selectedProduct]}</h2>
          <div className="line"></div>
          <div className="product-description-card">
            <div className="image-product-card">
              <ScrollReveal>

                <Image
                  src={revImage[selectedProduct]}
                  height={1000}
                  width={1000}
                  alt={`product image: ${revDescriptionTH[selectedProduct]}`}
                  className="image-product-page"
                />

              </ScrollReveal>
            </div>
            <div className="description-box-product">
              <ScrollReveal>
                <p className='datePost'>{lang===('th') ? revDatePostTH[selectedProduct] : lang===('en') ? revDatePostEN[selectedProduct] : revDatePostJP[selectedProduct]}</p>
                <h2 className='product-blog'>{lang===('th') ? revProduct_nameTH[selectedProduct] : lang===('en') ? revProduct_nameEN[selectedProduct] : revProduct_nameJP[selectedProduct]}</h2>

                <p className='description-box-page'>{lang===('th') ? revDescriptionTH[selectedProduct] : lang===('en') ? revDescriptionEN[selectedProduct] : revDescriptionJP[selectedProduct]}</p>
              </ScrollReveal>
              <div className="product-description-box-2">
                <ScrollReveal>
                  <h3> {lang===('th') ? "รายละเอียดผลิตภัณฑ์" : lang===('en') ? "Product Details" : "製品詳細（せいひんしょうさい）"} </h3>
                </ScrollReveal>
              </div>

              <div className="description-product-table">
                {details_nameTH[selectedProduct].map((item, index) =>
                  <div key={index} className={`pop-product${index % 2 == 0 ? 1 : 2}`}>
                    <div className={`table-spec1${index % 2 == 0 ? 1 : 2}`}>
                      <ScrollReveal>



                        <p className='product-description-table-title'> {lang===('th') ? revDetails_nameTH[selectedProduct][index] : lang===('en') ? revDetails_nameEN[selectedProduct] : revDetails_nameJP[selectedProduct]}</p>
                      </ScrollReveal>
                    </div>
                    <div className={`table-spec${index % 2 == 0 ? 1 : 2}`}>
                      <ScrollReveal>
                        <p className='product-description-table'> {lang===('th') ? revDetails_productTH[selectedProduct][index] : lang===('en') ? revDetails_productEN[selectedProduct] : revDetails_productJP[selectedProduct]}</p>
                      </ScrollReveal>
                    </div>

                  </div>
                )}



              </div>
            </div>
          </div>

          <div className="btn-back-newsPage">
            <button onClick={() => {
              setSelectedProduct(null)
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }} className="back-btn">
              กลับไปหน้ารวม {lang===('th') ? "" : lang===('en') ? "" : ""}
            </button>
          </div>
        </div >
      )
      }
    </div >
  );
}
