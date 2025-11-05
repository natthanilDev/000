'use client'
import Image from "next/image"
import { useState, useEffect } from "react";
import ScrollReveal from "../../ScrollReveal/ScrollReveal"
import Head from "next/head";
export default function CustomPart() {

  const [lang, setLang] = useState<'th' | 'en' | 'jp'>('th');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedLang = localStorage.getItem('lang') as 'th' | 'en' | 'jp' | null;
      if (storedLang) setLang(storedLang);
    }
  }, []);
  const hover_imageTH = [
    "ชิ้นส่วนยานยนต์",
    "ชิ้นส่วนยานพาหนะเฉพาะกิจ",
    "เครื่องจักรก่อสร้าง",
    "วัสดุก่อสร้าง"
  ]
  const hover_imageEN = [
    'Auto Part',
    'Special-purpose vehicle part',
    'Construction machinery',
    'Building materials'
  ]
  const hover_imageJP = [
    '自動車部品',
    '特殊車両部品',
    '建設機械',
    '建築資材'
  ]

  const image_collection = [
    "/car (1).png",
    "/car (2).png",
    "/car (4).png",
    "/car (3).png"
  ]

  const collections = [
    '/Automobile.png',
    '/Special.png',
    '/cabin.png',
    '/building.png'
  ]

  const title_partTH = [
    ' ชิ้นส่วนประตู',
    ' ชิ้นส่วนห้องเครื่องยนต์',
    ' ชิ้นส่วนสำหรับกระจก',
    ' ชิ้นส่วนอื่น ๆ'
  ]
  const title_partEN = [
    'Door Parts',
    'Engine Room Parts',
    'Parts for Glass',
    'Other Parts'
  ]
  const title_partJP = [
    'ドア部品',
    'エンジンルーム部品',
    'ガラス部品',
    'その他の部品'
  ]

  const product_partTH = [
    [
      [
        'ซีลประตู',
        'ชิ้นส่วนนี้ถูกประเมินทั้งด้านการกันน้ำ การเก็บเสียง และคุณสมบัติในการปิดประตู รวมถึงด้านการออกแบบ'
      ],
      [
        'กรอบขอบเปิดประตู',
        'วัสดุปิดผนึกที่ใช้ระหว่างประตูกับขอบรอบ ๆ ช่องเปิดประตู มีคุณสมบัติกันน้ำ เก็บเสียง และปิดประตูได้ดีเยี่ยม อีกทั้งยังมีน้ำหนักเบา'
      ],
      [
        'ซีลประตูด้านล่าง',
        'ป้องกันการซึมเข้าของน้ำ โคลน และทรายได้อย่างมีประสิทธิภาพ อีกทั้งยังมีคุณสมบัติการเก็บเสียงและลดน้ำหนักที่ดีเยี่ยม'
      ],
      [
        'ซีลประตูหลัง',
        'วัสดุปิดผนึกสำหรับประตูหลัง มีคุณสมบัติกันน้ำ เก็บเสียง และปิดประตูได้ดี อีกทั้งยังมีน้ำหนักเบา'
      ]
    ],
    [
      [
        'ซีลฝากระโปรงหน้า',
        "โดยการปรับปรุงรูปตัดของซีลโดยไม่เปลี่ยนโครงสร้างด้านหน้าของห้องเครื่อง จะช่วยป้องกันการชนกับส่วนที่ยื่นออกมาบนผิวด้านบนของห้องเครื่องด้านหน้า นอกจากนี้ยังเป็นไปตามกฎระเบียบเกี่ยวกับสิ่งยื่นออกภายนอก"
      ],
      [
        "ซีลด้านล่าง BHD",
        "ช่องว่างที่อากาศจากหม้อน้ำไหลเข้าสู่ห้องเครื่องได้รับการปรับแก้断面เพื่อให้มั่นคงและไม่รั่ว"
      ],
      [
        "ซีลฝากระโปรงหลัง",
        "ช่วยลดน้ำหนักรถโดยไม่จำเป็นต้องใช้แกนโลหะในวัสดุกันกระแทกระหว่างฝากระโปรงหน้า กับกระจังหน้าและขอบตกแต่ง"
      ],

      [
        "ซีลทางดูดอากาศ",
        "วัสดุปิดผนึกนี้ช่วยกั้นอากาศร้อนจากภายในห้องเครื่อง ในขณะที่ปล่อยให้เฉพาะอากาศเย็นไหลผ่าน"
      ]

    ],
    [
      [
        "ขอบหน้าต่างด้านหน้า",
        "ผลิตจากเรซินแปรสภาพเป็นวัสดุยาง มีคุณสมบัติน้ำหนักเบา เก็บเสียง และด้านอากาศพลศาสตร์ยอดเยี่ยม"
      ],
      [
        "ขอบซันรูฟ"
      ],
      [
        "ขอบกระจกมุมด้านหลัง",
        "เป็นวัสดุกันกระแทกที่ใช้ระหว่างกระจกกับตัวถังรถ"
      ],
      [
        "แรบเบอร์ดาม"
      ],
      [
        "แรบเบอร์ดามปากขอบ"
      ],

    ],
    [
      [
        "กันชนป้องกัน",
        "เนื่องจากต้องคำนึงถึงลักษณะการออกแบบภายนอก เราจึงใช้ซิลิกอนที่ตรงกับสีของรถ"
      ],
      [
        "กันชนขอบซุ้มล้อด้านบน"
      ],
      [
        "ซีลซุ้มล้อ",
        "ใช้ในรถ SUV เป็นหลัก ซีลนี้ช่วยป้องกันการรั่วซึมของน้ำและปกป้องขอบประตูจากการสึกกร่อน"
      ],
      [
        "แผ่นปะยางแบตเตอรี่",
        "เป็นแผ่นปะยางที่ติดตั้งกับกล่องแบตเตอรี่ของรถไฟฟ้า มีคุณสมบัติกันน้ำได้ดีเยี่ยม เพื่อป้องกันการซึมน้ำแม้ส่วนล่างของรถถูกจมในน้ำ"
      ]
    ]
  ]

  const product_partEN = [
    [
      [
        'Door Seal',
        'Parts are evaluated for waterproofing, sound insulating, and door closing properties in addition to design.'
      ],
      [
        'Door Opening Trim',
        'This is a sealing material that is used between a door and the peripheral edge of the door opening. It has excellent waterproofing, sound insulating, and door closing properties. Moreover, it is also lightweight.'
      ],
      [
        'Door Lower Seal',
        'It effectively prevents the entry of water, mud, and sand. Additionally, it also has excellent sound insulation and weight reduction properties.'
      ],
      [
        'Back Door Weatherstrip',
        'This is a sealing material for back doors. It has excellent waterproofing, sound insulating, and door closing properties. Moreover, it is also very lightweight.'
      ]
    ],
    [
      [
        'Hoodseal Front',
        "By improving the cross-section of the seal without altering the structure of the engine room's front end, it prevents interference with the protruding portion on the upper surface of the engine room's front end. It also conforms to regulations concerning external protrusions."
      ],
      [
        "Bhd Lower Seal",
        "Gaps through which air from the radiator flows into the engine room are secured by making cross sectional adjustments."
      ],
      [
        "Hoodseal Rear",
        "	It helps reduce vehicular weight by eliminating the need for metal cores in cushioning material between the bonnet, and the grill and trim."
      ],

      [
        "Air Intake Seal",
        "	This is a sealing material that holds back warm air from within the engine room while only allowing cool air to pass."
      ]

    ],
    [
      [
        "Front Window Molding",
        "	Transformed from resins into rubber materials, they have excellent lightweight, sound insulating, and aerodynamic properties."
      ],
      [
        "Sky Roof Molding"
      ],
      [
        "Qtr Glass Molding",
        "It is a cushioning material that is used between the glass and body of a vehicle."
      ],
      [
        "Dam Rubber"
      ],
      [
        "Dam Lip Rubber"
      ],

    ],
    [
      [
        "Bamper Protector",
        "As external design characteristics must be kept in mind, we use silicon that corresponds to the vehicle's color."
      ],
      [
        "Over Fender Protector"
      ],
      [
        "Wheel Arch Seal",
        "Used primarily on SUVs, the seal prevents water leakage and protects door edges from chipping."
      ],
      [
        "Battery Gasket",
        "This is a gasket that is attached to the battery case of an electric vehicle. It has excellent waterproofing properties so as to prevent water seepage even when the lower portion of the vehicle is submerged."
      ]
    ]
  ]
  const product_partJP = [
    [
      [
        'ドアシール',
        '防水性、防音性、ドアの閉まり具合に加え、デザイン面でも評価される部品です。'
      ],
      [
        'ドアオープニングトリム',
        'ドアと開口部の周縁との間に使用されるシーリング材で、防水性・防音性・ドアの閉まり具合に優れています。さらに軽量です。'
      ],
      [
        ': ドアロワーシール',
        '水、泥、砂の侵入を効果的に防ぎ、防音性と軽量化にも優れています。'
      ],
      [
        'バックドアウェザーストリップ',
        'バックドア用のシーリング材で、防水性、防音性、ドアの閉まり具合に優れ、さらに非常に軽量です。'
      ]
    ],
    [
      [
        'フロントフードシール',
        "エンジンルーム前端の構造を変えずにシールの断面を改善することで、エンジンルーム前端上面の突起部分との干渉を防ぎます。また、外部突起に関する規制にも適合しています。"
      ],
      [
        "BHDロワーシール",
        "ラジエーターからの空気がエンジンルームに流入する隙間を断面調整により確保しています。"
      ],
      [
        "リアフードシール",
        "ボンネットとグリル・トリム間のクッション材に金属芯を使用せず、車両重量の軽減に貢献します。"
      ],

      [
        "エアインテークシール",
        "エンジンルーム内の暖かい空気を遮断し、冷たい空気のみを通すシーリング材です。"
      ]

    ],
    [
      [
        "フロントウィンドウモールディング",
        "樹脂からゴム素材に加工され、軽量性、防音性、空力特性に優れています。"
      ],
      [
        "スカイルーフモールディング"
      ],
      [
        "スカイルーフモールディング",
        "車両のガラスとボディの間に使用されるクッション材です。"
      ],
      [
        "ダムラバー"
      ],
      [
        "ダムリップラバー"
      ],

    ],
    [
      [
        "バンパープロテクター",
        "A外観デザインを考慮し、車両の色に合わせたシリコンを使用しています。"
      ],
      [
        "オーバーフェンダープロテクター"
      ],
      [
        "ホイールアーチシール",
        "主にSUVに使用され、水漏れを防ぎ、ドアの縁の欠けを保護します。"
      ],
      [
        "バッテリーガスケット",
        "電気自動車のバッテリーケースに取り付けられるガスケットで、車両の下部が水没しても水の浸入を防ぐ優れた防水性を持っています。"
      ]
    ]
  ]


  return (
    <>

      <Head>
        <title>JIEI Thailand - Automotive & Custom Rubber Parts</title>
        <meta name="description" content="Explore JIEI Thailand's high-quality automotive rubber parts, custom vehicle parts, construction machinery parts, and building material components. Available in Thailand and Asia." />
        <meta name="keywords" content="JIEI Thailand, automotive rubber parts, custom parts, ISO certified, IATF16949, car parts, construction machinery parts" />
        <link rel="canonical" href="https://www.jiei-thai.co.th/custom-part" />

        <link rel="alternate" href="https://www.jiei-thai.co.th/custom-part" hrefLang="th" />
        <link rel="alternate" href="https://www.jiei-thai.co.th/en/custom-part" hrefLang="en" />
        <link rel="alternate" href="https://www.jiei-thai.co.th/jp/custom-part" hrefLang="jp" />

        <meta property="og:title" content="JIEI Thailand - Custom & Automotive Rubber Parts" />
        <meta property="og:description" content="High-quality automotive rubber parts, custom vehicle parts, and more from JIEI Thailand." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.jiei-thai.co.th/custom-part" />
        <meta property="og:image" content="/car (1).png" />
      </Head>

      <div className='bg-allProduct'>

        <div className="intro-allProduct">
          <ScrollReveal>
            <h1 className='allProduct-text'>{lang === ('th') ? "ผลิตภัณฑ์" : lang === ('en') ? "PRODUCT" : "製品"}</h1>
          </ScrollReveal>
          <ScrollReveal>
            <h2 className='allProduct-text active'>{lang === ('th') ? "สั่งทำพิเศษ" : lang === ('en') ? "Custom Made" : "特注"}</h2>
          </ScrollReveal>
        </div>

        <div className="category-collection">
          {image_collection.map((item, index) => (
            <div className="card-collection" key={index}>
              <ScrollReveal>
                <Image src={item} alt="JIEI Thai ผู้ผลิตยางรถยนต์และชิ้นส่วนยางคุณภาพสูง จังหวัดชลบุรี ได้มาตรฐาน ISO/IATF16949 ผลิต Engine Mount, Suspension Bush, Seals และชิ้นส่วนยางอุตสาหกรรม" className="image-category" width={1000} height={1000} loading="lazy" />
              </ScrollReveal>
              <div className="background-image" onClick={() => { window.open(collections[index], "_blank", "noopener,noreferrer") }}>
                <ScrollReveal>
                  <p className="preview-image">{lang === ('th') ? hover_imageTH[index] : lang === ('en') ? hover_imageEN[index] : hover_imageJP[index]} </p>
                </ScrollReveal>
              </div>
            </div>
          ))}
        </div>

        <div className="collection-part">
          <div className="text-collection-box">
            <ScrollReveal>
              <h2 className="text-collection">{lang === ('th') ? "รถยนต์" : lang === ('en') ? "CAR" : "「自動車」"}</h2>
            </ScrollReveal>
          </div>

          <div className="collection-box">
            {lang === ('en') ? title_partEN.map((item, index) => (
              <div key={index}>
                <ScrollReveal>
                  <h2 className="nameProduct">{item}</h2>
                </ScrollReveal>
                {product_partEN[index]?.map((product, i) => (
                  <div key={i}>
                    <div className="display-product">
                      <ScrollReveal>
                        <h3 className="title-product-list"> {product[0]}</h3>
                        <p className="description-product-text">{product[1]}</p>
                      </ScrollReveal>
                    </div>

                    <hr />
                  </div>
                ))}
              </div>
            )) : lang === ('th') ? title_partTH.map((item, index) => (
              <div key={index}>
                <ScrollReveal>
                  <h2 className="nameProduct">{item}</h2>
                </ScrollReveal>
                {product_partTH[index]?.map((product, i) => (
                  <div key={i}>
                    <div className="display-product">
                      <ScrollReveal>
                        <h3 className="title-product-list">{product[0]}</h3>
                        <p className="description-product-text">{product[1]}</p>
                      </ScrollReveal>
                    </div>

                    <hr />
                  </div>
                ))}
              </div>
            )) :
              title_partJP.map((item, index) => (
                <div key={index}>
                  <ScrollReveal>
                    <h2 className="nameProduct">{item}</h2>
                  </ScrollReveal>
                  {product_partJP[index]?.map((product, i) => (
                    <div key={i}>
                      <div className="display-product">
                        <ScrollReveal>
                          <h3 className="title-product-list">{product[0]}</h3>
                          <p className="description-product-text">{product[1]}</p>
                        </ScrollReveal>
                      </div>

                      <hr />
                    </div>
                  ))}
                </div>
              ))
            }

          </div>
        </div>

      </div>

      <div className="customProductBox">
        <ScrollReveal>
          <Image className="imageProductCarDescription" src={'/description-car (1).png'} alt="JIEI Thai ผู้ผลิตยางรถยนต์และชิ้นส่วนยางคุณภาพสูง จังหวัดชลบุรี ได้มาตรฐาน ISO/IATF16949 ผลิต Engine Mount, Suspension Bush, Seals และชิ้นส่วนยางอุตสาหกรรม" width={1000} height={1000} loading="lazy" />
        </ScrollReveal>
        <ScrollReveal>
          <Image className="imageProductCarDescription" src={'/description-car (2).png'} alt="JIEI Thai ผู้ผลิตยางรถยนต์และชิ้นส่วนยางคุณภาพสูง จังหวัดชลบุรี ได้มาตรฐาน ISO/IATF16949 ผลิต Engine Mount, Suspension Bush, Seals และชิ้นส่วนยางอุตสาหกรรม" width={1000} height={1000} loading="lazy" />
        </ScrollReveal>

      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "JIEI Thailand",
            "url": "https://www.jiei-thai.co.th",
            "logo": "https://www.jiei-thai.co.th/logo.png",
            "sameAs": [
              "https://www.facebook.com/jieithailand",
              "https://www.linkedin.com/company/jiei-thailand/"
            ],
            "department": [
              {
                "@type": "Organization",
                "name": "Custom Parts Department",
                "url": "https://www.jiei-thai.co.th/custom-part"
              }
            ]
          })
        }}
      />

    </>
  )
}
