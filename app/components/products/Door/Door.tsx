'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import { useSearchParams } from "next/navigation";
import ScrollReveal from '../../ScrollReveal/ScrollReveal'

export default function Page() {
  const searchParams = useSearchParams();
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);


  const [lang, setLang] = useState<'th' | 'en' | 'jp'>('th');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedLang = localStorage.getItem('lang') as 'th' | 'en' | 'jp' | null;
      if (storedLang) setLang(storedLang);
    }

  }, []);

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
    ['ความแข็งแรง', 'ความทนทาน', 'ต้านสารเคมี'],
   



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


  const page = searchParams.get("page");
  const currentPage = page ? parseInt(page, 10) : 1;
  const perPage = 10;
  const start = (currentPage - 1) * perPage;
  const end = start + perPage;
  const paginatedData = revProduct_nameTH.slice(start, end);
  const totalPages = Math.ceil(product_nameTH.length / perPage);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [searchParams]);

  // ✅ SEO Metadata
  const pageTitle = selectedProduct !== null
    ? `${product_nameTH[selectedProduct]} | JIEI Thailand - ผู้ผลิตชิ้นส่วนยางรถยนต์ ชลบุรี`
    : `กิจกรรมบริษัท | JIEI Thailand - ผู้ผลิตชิ้นส่วนยางรถยนต์คุณภาพสูง ชลบุรี`;

  const pageDescription = selectedProduct !== null
    ? descriptionTH[selectedProduct].replace(/<[^>]+>/g, '').slice(0, 160)
    : 'JIEI Thailand ผู้ผลิตชิ้นส่วนยางรถยนต์ในจังหวัดชลบุรี มาตรฐาน ISO9001, ISO14001, IATF16949 พร้อมอัปเดตกิจกรรมและข่าวสารของบริษัท';

  const pageUrl = selectedProduct !== null
    ? `https://www.jiei-thai.co.th/products/seals?page=${selectedProduct}`
    : `https://www.jiei-thai.co.th/products/seals?page=${currentPage}`;

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
        <meta property="og:image" content={selectedProduct !== null ? image[selectedProduct] : '/JIEI(Thailnad).co.,ltd.jpg'} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:locale" content="th_TH" />
        <meta property="og:site_name" content="JIEI Thailand" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={selectedProduct !== null ? image[selectedProduct] : '/JIEI(Thailnad).co.,ltd.jpg'} />

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
                "availableLanguage": ["Thai", "English", "Japan"]
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
      {selectedProduct === null ? (
        <div>
          <ScrollReveal>
            <h1 className='activities-text'>

              {lang===('th') ? "ชิ้นส่วนประตู" : lang===('en') ? "Door Parts" : "ドア部品"}
            </h1>
          </ScrollReveal>
          <div className="line"></div>

          <div className="activities-text-description-box">
            {/* <ScrollReveal>
              <p className='activities-text-description'>
                {lang===('th')
                  ? "ติดตามข่าวสารและกิจกรรมจาก JIEI Thailand ผู้ผลิตชิ้นส่วนยางรถยนต์คุณภาพสูงจากชลบุรี เพื่อสร้างความสามัคคีและพัฒนาทีมงานอย่างต่อเนื่อง"
                  : lang===('en')
                    ? "Stay updated with activities from JIEI Thailand — a leading automotive rubber parts manufacturer based in Chonburi, Thailand."
                    : "JIEI Thailandの活動をチェック — チョンブリーにある自動車用ゴム部品メーカーです。"}
              </p>
            </ScrollReveal> */}
          </div>


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
                        {lang===('th') ? revDescriptionTH[start + index] : lang===('en') ? revDescriptionEN[start + index] : revDescriptionJP[start + index]}
                      </p>
                    </div>

                  </div>
                </div>
                <div className="preview-product">
                  <div className="text-preview">
                    <p className="preview-text">
                      {lang===('th') ? "อ่านเพิ่มเติม" : lang===('en') ? "Read More" : "続きを読む"}
                    </p>
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



          <div className="page">
            
            <nav className="countPage" aria-label="Pagination">
              {/* ปุ่มย้อนกลับ */}
              {currentPage > 1 && (
                <Link
                  href={`/products/seals?page=${currentPage - 1}`}
                  className="numPage focusPage"
                  title={`ไปหน้าที่ ${currentPage - 1}`}
                >
                  <i className="bi bi-chevron-double-left"></i>
                </Link>
              )}

              {/* สร้างเลขหน้าที่แสดงได้สูงสุด 3 หน้า */}
              {(() => {
                const maxVisible = 3;
                let start = Math.max(1, currentPage - 1);
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
                        <Link href={`/products/seals?page=1`} className="numPage" title="ไปหน้าที่ 1">
                          1
                        </Link>
                        {/* <span className="dots"><i className="bi bi-dash"></i></span> */}
                      </>
                    )}

                    {/* แสดงหน้าปัจจุบันและใกล้เคียง */}
                    {visiblePages.map((pageNum) => (
                      <Link
                        key={pageNum}
                        href={`/products/seals?page=${pageNum}`}
                        className={`numPage ${pageNum === currentPage ? "focusPage" : ""}`}
                        title={`ไปหน้าที่ ${pageNum}`}
                      >
                        {pageNum}
                      </Link>
                    ))}

                    {/* แสดงจุดไข่ปลา + หน้าสุดท้าย */}
                    {visiblePages[visiblePages.length - 1] < totalPages && (
                      <>
                        {/* <span className="dots"><i className="bi bi-dash"></i></span> */}
                        <Link
                          href={`/products/seals?page=${totalPages}`}
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

              {/* ปุ่มหน้าถัดไป */}
              {currentPage < totalPages && (
                <Link
                  href={`/products/seals?page=${currentPage + 1}`}
                  className="numPage focusPage"
                  title={`ไปหน้าที่ ${currentPage + 1}`}
                >
                  <i className="bi bi-chevron-double-right"></i>
                </Link>
              )}
            </nav>

          </div>
        </div>
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
                {revDetails_nameTH[selectedProduct].map((item, index) =>
                  <div key={index} className={`pop-product${index % 2 == 0 ? 1 : 2}`}>
                    <div className={`table-spec1${index % 2 == 0 ? 1 : 2}`}>
                      <ScrollReveal>
                        <p className='product-description-table-title'> {lang===('th') ? revDetails_nameTH[selectedProduct][index] : lang===('en') ? revDetails_nameEN[selectedProduct][index] : revDetails_nameJP[selectedProduct][index]}</p>
                      </ScrollReveal>
                    </div>
                    <div className={`table-spec${index % 2 == 0 ? 1 : 2}`}>
                      <ScrollReveal>
                        <p className='product-description-table'> {lang===('th') ? revDetails_productTH[selectedProduct][index] : lang===('en') ? revDetails_productEN[selectedProduct][index] : revDetails_productJP[selectedProduct][index]}</p>
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
      )}
    </div>
  );
}
