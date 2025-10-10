'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import { useSearchParams } from "next/navigation";
import ScrollReveal from "../../components/ScrollReveal/ScrollReveal";

export default function Page() {
  const searchParams = useSearchParams();
  const [selectedNews, setSelectedNews] = useState<number | null>(null);

  const page = searchParams.get("page");
  const currentPage = page ? parseInt(page, 10) : 1;
  const perPage = 8;


  const product_name = [
    'Product Name',
    'Product Name',
  ]
  const description = [
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores illum at voluptate aperiam ducimus totam voluptatibus nemo corporis ut ratione excepturi quae veritatis quis sit, tenetur temporibus a laudantium! Aperiam?',
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores illum at voluptate aperiam ducimus totam voluptatibus nemo corporis ut ratione excepturi quae veritatis quis sit, tenetur temporibus a laudantium! Aperiam?',

  ]

  const image = [
    '/ยางขอบประตูรถยนต์.png',
    '/ยาง.png',

  ]






  const [lang, setLang] = useState<'th' | 'en' | 'jp'>('th');


  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedLang = localStorage.getItem('lang') as 'th' | 'en' | 'jp' | null;
      if (storedLang) setLang(storedLang);
    }
  }, []);

  const start = (currentPage - 1) * perPage;
  // const end = start + perPage;
  // const paginatedData = product_name.slice(start, end);
  const totalPages = Math.ceil(product_name.length / perPage);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [searchParams])

  const pageTitle = selectedNews === null
    ? "News & Blog | JIEI Thailand"
    : `${product_name[selectedNews]} | JIEI Thailand`;
  const pageDescription = selectedNews === null
    ? "อ่านข่าวสารล่าสุดและบล็อกเกี่ยวกับการผลิตยางรถยนต์และกิจกรรมต่างๆ ของ JIEI Thailand."
    : description[selectedNews].slice(0, 160);

  return (
    <div className='product-bg'>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href="https://www.jiei-thai.co.th/news" />

        {/* Open Graph */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={image[selectedNews ?? 0]} />
        <meta property="og:url" content="https://www.jiei-thai.co.th/news" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={image[selectedNews ?? 0]} />

        {/* JSON-LD Structured Data */}
        {selectedNews !== null && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "NewsArticle",
                "headline": product_name[selectedNews],
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
                "description": description[selectedNews]
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
                <h1 className='product-name'> {lang === 'th' ? "" : lang == 'en' ? "" : ""} Product Name</h1>
              </ScrollReveal>
              <ScrollReveal>
                <p className="description-product"> {lang === 'th' ? "" : lang == 'en' ? "" : ""}Lorem ipsum dolor sit, amet consectetur adipisicing elit. At amet quam culpa sed quaerat repellat similique vel facere quisquam, aliquid, nisi magnam nihil! Voluptatum minus maiores sunt fugit tenetur delectus.</p>
              </ScrollReveal>
              <div className="line"></div>
              <div className="product">

                {product_name.map((item, index) => (
                  <div key={index} className="product-card-box"
                    onClick={() => {
                      setSelectedNews(start + index)
                      window.scrollTo({ top: 0, behavior: 'smooth' })
                    }}>
                    <div className="image-product-part">
                      
                        <Image className='image-product' src={image[start + index]} alt='โรงงานผลิตชิ้นส่วนยางรถยนต์มาตรฐานสากล ISO & IATF16949 ที่ชลบุรี ประเทศไทย"' width={1000} height={1000} priority />
                      
                    </div>
                    <div className="product-box">
                      <div className="product-card">
                        <h4>{lang === 'th' ?  item : lang === 'en' ? "Product Name" : "Product Name"}</h4>
                      </div>
                      <div className="product-description-box">
                        <div className="space-part-box">

                          <p className='space-part'>
                            {lang === 'th' ? description[start + index] : lang === 'en' ? "123" : "456" }
                          </p>

                        </div>

                      </div>
                    </div>
                    <div className="preview-product">
                      <div className="text-preview">
                        <p className="preview-text">{lang === 'th' ? "ดูเพิ่มเติม" : lang == 'en' ? "" : ""}</p> 
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
          <h2 className='title-product-page'>{product_name[selectedNews]}</h2>
          <div className="line"></div>
          <div className="product-description-card">
            <div className="image-product-card">
              <ScrollReveal>
                <Image
                  src={image[selectedNews]}
                  height={1000}
                  width={1000}
                  alt={`product image: ${description[selectedNews]}`}
                  className="image-product-page"
                />
              </ScrollReveal>
            </div>
            <div className="description-box-product">
              <ScrollReveal>
                <h2 className='product-blog'>{lang === "th" ? "สินค้าที่เลือก" : lang === "en" ? "" : ""}   {product_name[selectedNews]}</h2>
                <p className='description-box-page'>{description[selectedNews]}</p>
              </ScrollReveal>
              <div className="product-description-box-2">
                <ScrollReveal>
                  <h3> {lang === 'th' ? "" : lang == 'en' ? "" : ""} รายระเอียดสินค้า</h3>
                </ScrollReveal>
              </div>

              <div className="description-product-table">
                <div className="pop-product1">
                  <div className="table-spec1">
                    <ScrollReveal>
                      <p className='product-description-table-title'> {lang === 'th' ? 'Product Name' : lang == 'en' ? "" : ""}</p>
                    </ScrollReveal>
                  </div>
                  <div className="table-spec1">
                    <ScrollReveal>
                      <p className='product-description-table'> {lang === 'th' ? "" : lang == 'en' ? "" : ""}Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, quo hic omnis, tempora quia, nobis accusantium quos ducimus autem ut soluta. Quas, doloribus. Cumque harum porro ipsa expedita fugit dolore?</p>
                    </ScrollReveal>
                  </div>
                </div>

                <div className="pop-product2">
                  <div className="table-spec2">
                    <ScrollReveal>
                      <p className='product-description-table-title'> {lang === 'th' ? "Product Name" : lang == 'en' ? "" : ""} </p>
                    </ScrollReveal>
                  </div>
                  <div className="table-spec2">
                    <ScrollReveal>
                      <p className='product-description-table'> {lang === 'th' ? "" : lang == 'en' ? "" : ""} Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut recusandae dolorum officia fuga et, iure reiciendis rerum sit maiores alias repellat optio voluptates laboriosam, modi, ipsa odit consequuntur quis molestias?</p>
                    </ScrollReveal>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="btn-back-newsPage">
            <button onClick={() => {
              setSelectedNews(null)
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }} className="back-btn">
              กลับไปหน้ารวม {lang === 'th' ? "" : lang == 'en' ? "" : ""}
            </button>
          </div>
        </div >
      )
      }
    </div >
  );
}
