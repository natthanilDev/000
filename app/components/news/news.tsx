'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
// import Link from 'next/link';
import Head from 'next/head';
import { useSearchParams } from "next/navigation";
import ScrollReveal from '../ScrollReveal/ScrollReveal';
import DOMPurify from "isomorphic-dompurify";
export default function News() {
  const searchParams = useSearchParams();
  const [selectedNews, setSelectedNews] = useState<number | null>(null);

  const page = searchParams.get("page");
  const currentPage = page ? parseInt(page, 10) : 1;
  const perPage = 8;
  const Image_Establishment = [
    [
      '/jieiImage/19.png',
      '/jieiImage/1.png',
      '/jieiImage/2.png',
      '/jieiImage/3.png',
      '/jieiImage/4.png',
      '/jieiImage/5.png',
      '/jieiImage/6.png',
      '/jieiImage/7.png',
      '/jieiImage/8.png',
      '/jieiImage/9.png',
      '/jieiImage/10.png',
      '/jieiImage/11.png',
      '/jieiImage/12.png',
      '/jieiImage/13.png',
      '/jieiImage/14.png',
      '/jieiImage/15.png',
      '/jieiImage/16.png',
      '/jieiImage/17.png',
      '/jieiImage/18.png',
      '/jieiImage/20.png',
      '/jieiImage/21.png',
    ],
    [
      '/imageEmployee.png',

    ],

  ]
  // --- เนื้อหาข่าว ---
  const newsTH = [
    'ก่อตั้งบริษัท เจไออีไอ (ประเทศไทย) จำกัด',
    'รับสมัครพนักงานตำแหน่ง จป.วิชาชีพ (เจ้าหน้าที่ความปลอดภัยในการทำงานระดับวิชาชีพ)'
  ];
  const newsEN = [
    'Establishment of Jiei (Thailand) Co., Ltd.',
    'Hiring: Professional Occupational Safety Officer (OSH Officer — Professional Level)',
    
  ];
  const newsJP = [
    'Jiei（Thailand）Co., Ltd. の設立',
    '募集：専門職 労働安全担当者（職業上の安全担当者・専門レベル）',
  ];

  const contentTH = [
    `
    <section class="company-announcement">
      <h2>ประกาศก่อตั้งอย่างเป็นทางการ</h2>
      <p>
        เมื่อวันที่ <strong>11 พฤศจิกายน พ.ศ. 2554</strong> 
        ณ <strong>นิคมอุตสาหกรรมปิ่นทอง 4 จังหวัดชลบุรี</strong>
      </p>
      <p>
        บริษัท <strong>เจไออีไอ (ประเทศไทย) จำกัด</strong> หรือ 
        <em>Jiei (Thailand) Co., Ltd.</em> ได้ก่อตั้งขึ้นเมื่อวันที่ 
        <strong>11 พฤศจิกายน พ.ศ. 2554 (11-11-2011)</strong> 
        เพื่อดำเนินธุรกิจด้าน <b>เทคโนโลยีอุตสาหกรรม</b> 
        และการให้บริการด้าน <b>วิศวกรรมครบวงจร</b>
      </p>
      <p>
        บริษัทฯ มุ่งมั่นที่จะเป็นส่วนหนึ่งในการพัฒนาอุตสาหกรรมไทยให้ก้าวสู่ระดับสากล 
        ด้วยการถ่ายทอดความรู้และเทคโนโลยีจากประเทศญี่ปุ่น 
        ผสานเข้ากับศักยภาพของบุคลากรไทย 
        เพื่อสร้างสรรค์ผลงานคุณภาพที่ตอบสนองต่อความต้องการของลูกค้าได้อย่างแท้จริง
      </p>
      <blockquote>
        “Together, We Grow with Technology and Integrity”
      </blockquote>
      <p>
        <strong>Jiei (Thailand)</strong> มุ่งเน้นการเติบโตอย่างยั่งยืนร่วมกับพันธมิตรทางธุรกิจ 
        โดยยึดมั่นในคุณภาพ ความซื่อสัตย์ และความรับผิดชอบต่อสังคม
      </p>
      <p>
        จากจุดเริ่มต้นเล็ก ๆ ในวันก่อตั้งจนถึงปัจจุบัน 
        บริษัทฯ ได้ขยายขอบเขตการดำเนินงานและความร่วมมือกับองค์กรชั้นนำ 
        ทั้งในประเทศและต่างประเทศ 
        พร้อมเดินหน้าพัฒนานวัตกรรมเพื่ออนาคตของอุตสาหกรรมไทยอย่างต่อเนื่อง
      </p>
    </section>
  `
    ,
    ` <section class="company-announcement">
      <h2>รับสมัครพนักงานตำแหน่ง จป.วิชาชีพ (เจ้าหน้าที่ความปลอดภัยในการทำงานระดับวิชาชีพ)</h2>
      <p>
        <h5> หน้าที่และความรับผิดชอบหลัก (Key Responsibilities): </h5>
      </p>
      <div>
      <ul>
        <li>1. ตรวจสอบและเสนอแนะให้นายจ้างปฏิบัติตามกฎหมายความปลอดภัยในการทำงาน</li>
        <li>2. ประเมินความเสี่ยงด้านความปลอดภัย อาชีวอนามัย และสิ่งแวดล้อมภายในสถานประกอบการ</li>
        <li>3. จัดทำแผนงานและมาตรการด้านความปลอดภัยในการทำงานประจำปี</li>
        <li>4. ตรวจสอบสภาพแวดล้อมในการทำงาน เครื่องจักร เครื่องมือ และอุปกรณ์ให้เป็นไปตามมาตรฐานความปลอดภัย</li>
        <li>5. จัดฝึกอบรม / ปฐมนิเทศพนักงานใหม่เกี่ยวกับความปลอดภัยในการทำงาน</li>
        <li>6. รวบรวม วิเคราะห์ และรายงานสถิติการเกิดอุบัติเหตุ พร้อมเสนอแนวทางป้องกัน</li>
        <li>7. ประสานงานกับหน่วยงานราชการที่เกี่ยวข้อง เช่น กรมสวัสดิการและคุ้มครองแรงงาน</li>
        <li>8. จัดทำรายงานด้านความปลอดภัยส่งต่อผู้บริหารและหน่วยงานรัฐตามที่กฎหมายกำหนด</li>
      </ul>
       
      <blockquote>
        <h5>คุณสมบัติของผู้สมัคร (Qualifications):</h5> 
      </blockquote>

      <ul>
        <li>1. เพศชาย / หญิง อายุ 22 ปีขึ้นไป</li>
        <li>2. วุฒิปริญญาตรี สาขาอาชีวอนามัยและความปลอดภัย หรือสาขาที่เกี่ยวข้อง</li>
        <li>3. ผ่านการอบรมและได้รับใบรับรอง จป.วิชาชีพ ตามกฎหมาย</li>
        <li>4. มีประสบการณ์ในสายงานความปลอดภัย 1–3 ปี (หรือยินดีรับนักศึกษาจบใหม่)</li>
        <li>5. มีความรู้เกี่ยวกับกฎหมายความปลอดภัย ระบบ ISO 45001 / ISO 14001 จะพิจารณาเป็นพิเศษ</li>
        <li>6. มีทักษะการสื่อสาร การประสานงาน และสามารถทำงานร่วมกับผู้อื่นได้ดี</li>
      </ul>
       <blockquote>
       <h5> สวัสดิการ (Welfare):</h5>
      </blockquote>
 
<ul>
        <li>1. เงินเดือนตามโครงสร้างและประสบการณ์</li>
        <li>2. โบนัสประจำปี / ปรับเงินเดือนประจำปี</li>
        <li>3. ประกันสังคม / ประกันกลุ่ม / ชุดยูนิฟอร์ม</li>
        <li>4. วันหยุดประจำปี / ลาพักร้อน</li>
        <li>5. อื่น ๆ ตามนโยบายบริษัท</li>
  
      </ul>
 สนใจติดต่อ <a href="mailto:info@jiei-thai.co.th">info@jiei-thai.co.th</a>
      </div>
   
    </section>`
  ];

  const contentTHNews = [
    `  ประกาศก่อตั้งอย่างเป็นทางการ
        เมื่อวันที่ 11 พฤศจิกายน พ.ศ. 2554
        ณ นิคมอุตสาหกรรมปิ่นทอง 4 จังหวัดชลบุรี
        บริษัท เจไออีไอ (ประเทศไทย) จำกัดหรือ 
       Jiei (Thailand) Co., Ltd. ได้ก่อตั้งขึ้นเมื่อวันที่ 
        11 พฤศจิกายน พ.ศ. 2554 (11-11-2011)
        เพื่อดำเนินธุรกิจด้านเทคโนโลยีอุตสาหกรรม 
        และการให้บริการด้านศวกรรมครบวงจร
      `,
    `
      รับสมัครพนักงานตำแหน่ง จป.วิชาชีพ (เจ้าหน้าที่ความปลอดภัยในการทำงานระดับวิชาชีพ)
     `
  ]
  const contentEN = [`
    <section class="company-announcement">
  <h2>Official Establishment Announcement</h2>
  <p>
    On <strong>November 11, 2011</strong> 
    at <strong>Pinthong Industrial Estate 4, Chonburi Province</strong>
  </p>
  <p>
    <strong>Jiei (Thailand) Co., Ltd.</strong>, also known in Thai as 
    <em>เจไออีไอ (ประเทศไทย) จำกัด</em>, was established on 
    <strong>November 11, 2011 (11-11-2011)</strong> 
    to operate in the field of <b>industrial technology</b> 
    and to provide <b>comprehensive engineering services</b>.
  </p>
  <p>
    The company is committed to contributing to the advancement of Thai industry to the international level
    by transferring knowledge and technology from Japan,
    combined with the capability of Thai personnel,
    to create high-quality solutions that truly meet customers’ needs.
  </p>
  <blockquote>
    “Together, We Grow with Technology and Integrity”
  </blockquote>
  <p>
    <strong>Jiei (Thailand)</strong> focuses on sustainable growth with business partners,
    adhering to quality, integrity, and social responsibility.
  </p>
  <p>
    From a small beginning on the founding day to the present,
    the company has expanded its operations and collaborations with leading organizations
    both domestically and internationally,
    and continues to drive innovation for the future of Thai industry.
  </p>
</section>`,
    `
    <section class="company-announcement">
  <h2>Job Opening: Professional Safety Officer (Occupational Safety and Health Officer)</h2>
  <p>
    <h5>Key Responsibilities:</h5>
  </p>
  <div>
    <ul>
      <li>1. Inspect and advise the employer to ensure compliance with occupational safety laws.</li>
      <li>2. Assess risks related to occupational safety, health, and environmental conditions within the workplace.</li>
      <li>3. Prepare annual safety plans and preventive measures.</li>
      <li>4. Inspect workplace conditions, machinery, tools, and equipment to ensure safety standards are met.</li>
      <li>5. Conduct safety training and orientation for new employees.</li>
      <li>6. Collect, analyze, and report accident statistics with preventive recommendations.</li>
      <li>7. Coordinate with relevant government agencies such as the Department of Labour Protection and Welfare.</li>
      <li>8. Prepare and submit safety reports to management and government agencies as required by law.</li>
    </ul>

    <blockquote>
      <h5>Qualifications:</h5>
    </blockquote>

    <ul>
      <li>1. Male or Female, aged 22 or older.</li>
      <li>2. Bachelor’s degree in Occupational Health and Safety or a related field.</li>
      <li>3. Certified as a Professional Safety Officer according to Thai law.</li>
      <li>4. 1–3 years of experience in safety-related work (new graduates are also welcome).</li>
      <li>5. Knowledge of safety regulations, ISO 45001 / ISO 14001 is an advantage.</li>
      <li>6. Strong communication and coordination skills, with the ability to work well in a team.</li>
    </ul>

    <blockquote>
      <h5>Welfare & Benefits:</h5>
    </blockquote>

    <ul>
      <li>1. Salary based on structure and experience.</li>
      <li>2. Annual bonus and salary adjustment.</li>
      <li>3. Social security, group insurance, and company uniform.</li>
      <li>4. Annual holidays and paid vacation.</li>
      <li>5. Other benefits according to company policy.</li>
    </ul>
    Interested applicants, please contact <a href="mailto:info@jiei-thai.co.th">info@jiei-thai.co.th</a>
  </div>
</section>
`

  ];
  const contentENNews = [
    `Official Establishment Announcement
    On November 11, 2011,
    at Pinthong Industrial Estate 4, Chonburi Province,
    Jiei (Thailand) Co., Ltd. was officially established
    to operate in the field of industrial technology
    and provide comprehensive engineering services.`,
    `
    We are hiring for the position of Professional Safety Officer (Occupational Safety and Health Officer – Professional Level)
    `
  ]
  const contentJP =
    [`
    <section class="company-announcement">
  <h2>正式設立のお知らせ</h2>
  <p>
    2011年11月11日、  
    <strong>チョンブリー県 ピントン工業団地4</strong> にて
  </p>
  <p>
    <strong>Jiei (Thailand) Co., Ltd.</strong>（タイ語名：<em>เจไออีไอ (ประเทศไทย) จำกัด</em>）は、
    <strong>2011年11月11日（11-11-2011）</strong> に設立されました。
    当社は <b>産業技術</b> 分野で事業を展開し、
    <b>総合的なエンジニアリングサービス</b> を提供することを目的としています。
  </p>
  <p>
    当社は、日本からの技術と知見を伝えつつ、
    タイ人材の力を融合させることで、タイ産業の国際的発展に寄与することを目指しています。
    顧客のニーズに真に応える高品質な成果の創出に努めます。
  </p>
  <blockquote>
    「ともに、技術と誠実さで成長する」
  </blockquote>
  <p>
    <strong>Jiei (Thailand)</strong> は、ビジネスパートナーと共に持続的な成長を目指し、
    品質、誠実さ、社会的責任を重んじます。
  </p>
  <p>
    設立当初の小さな一歩から今日に至るまで、
    当社は国内外の有力企業との協力と事業領域を拡大し、
    タイ産業の未来に向けたイノベーション開発を継続しています。
  </p>
</section>` ,
      `
      <section class="company-announcement">
  <h2>募集職種：労働安全衛生担当者（専門職レベル）</h2>
  <p>
    <h5>主な職務内容：</h5>
  </p>
  <div>
    <ul>
      <li>1. 事業主が労働安全衛生法に準拠しているかを確認し、改善を提案する。</li>
      <li>2. 事業所内の安全・衛生・環境リスクを評価する。</li>
      <li>3. 年間安全計画および安全対策を策定する。</li>
      <li>4. 職場環境、機械、工具、設備の安全基準を点検する。</li>
      <li>5. 新入社員への安全教育およびオリエンテーションを実施する。</li>
      <li>6. 労働災害の統計を収集・分析し、予防策を提案する。</li>
      <li>7. 労働保護福祉局などの関連官庁との調整を行う。</li>
      <li>8. 経営陣および政府機関への安全報告書を作成・提出する。</li>
    </ul>

    <blockquote>
      <h5>応募資格：</h5>
    </blockquote>

    <ul>
      <li>1. 男女不問、22歳以上。</li>
      <li>2. 労働安全衛生または関連分野の学士号を有すること。</li>
      <li>3. タイ法に基づく専門職安全管理者資格を取得していること。</li>
      <li>4. 安全関連業務の経験1〜3年（新卒者も歓迎）。</li>
      <li>5. 労働安全法、ISO 45001 / ISO 14001 の知識があれば尚可。</li>
      <li>6. コミュニケーション能力、調整能力に優れ、チームワークができる方。</li>
    </ul>

    <blockquote>
      <h5>福利厚生：</h5>
    </blockquote>

    <ul>
      <li>1. 給与は経験および社内規定により決定。</li>
      <li>2. 年次ボーナス・昇給制度あり。</li>
      <li>3. 社会保険、団体保険、制服支給。</li>
      <li>4. 年次有給休暇・休日制度。</li>
      <li>5. その他、会社規定による福利厚生。</li>
    </ul>
    ご応募・お問い合わせは <a href="mailto:info@jiei-thai.co.th">info@jiei-thai.co.th</a> までご連絡ください。
  </div>
</section>

      `
    ];
  const contentJPNews = [
    `正式設立のお知らせ
    2011年11月11日、チョンブリー県ピントン工業団地4において
    Jiei（Thailand）Co., Ltd. は正式に設立されました。
    当社は産業技術分野での事業展開および
    総合的なエンジニアリングサービスの提供を目的としております。`
    ,
    `
    募集職種：労働安全衛生担当者（専門職レベル）
    `,
  ]

  const img = [
    '/jieiImage/6.png',
    `/imageEmployee.png`
  ];
  const datePostTH = [
    '07 พฤษจิกายน 2025',
    '08 พฤษจิกายน 2025'
  ];
  const datePostEN = [
    'November 07, 2025',
    'November 08, 2025'
  ];
  const datePostJP = [
    '2025年11月07日',
    '2025年11月08日'
  ];


  const rev = <T,>(arr: T[]): T[] => [...arr].reverse();
  const revDatePostTH = rev(datePostTH);
  const revDatePostEN = rev(datePostEN);
  const revDatePostJP = rev(datePostJP);
  const revNewsTH = rev(newsTH);
  const revNewsEN = rev(newsEN);
  const revNewsJP = rev(newsJP);
  const revContentTH = rev(contentTH);
  const revContentTHNews = rev(contentTHNews)
  const revContentEN = rev(contentEN);
  const revContentENNews = rev(contentENNews)
  const revContentJP = rev(contentJP);
  const revContentJPNews = rev(contentJPNews)
  const revImg = rev(img);
  const revImage_Establishment = rev(Image_Establishment)

  const [imgIndex, setImgIndex] = useState(0);


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
  // const totalPages = Math.ceil(newsTH.length / perPage);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [searchParams]);

  const pageTitle = selectedNews === null
    ? "News & Blog | JIEI Thailand"
    : `${newsTH[selectedNews]} | JIEI Thailand`;
  const pageDescription = selectedNews === null
    ? "อ่านข่าวสารล่าสุดและบล็อกเกี่ยวกับการผลิตยางรถยนต์และกิจกรรมต่างๆ ของ JIEI Thailand."
    : contentTH[selectedNews].replace(/<[^>]+>/g, '').slice(0, 160); // ตัดแท็ก HTML ออกก่อนใส่ meta

  return (
    <div className='news-bg'>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
      </Head>

      {selectedNews === null ? (
        <>
          <ScrollReveal>
            <h1 className='title-news'>
              {lang === 'th' ? "ข่าวสาร | กิจกรรม" : lang === 'en' ? "News | Activities" : "ニュース | 会社活動"}
            </h1>
            <div className="line"></div>
          </ScrollReveal>

          <div className="news-box-card">
            <div className="product">
              {paginatedData.map((item, index) => (
                <div
                  key={index}
                  className="product-card-box"
                  onClick={() => {
                    setSelectedNews(start + index);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  <div className="image-product-part">
                    <Image
                      className='image-product'
                      src={revImg[start + index]}
                      alt={revNewsTH[start + index]}
                      width={1000}
                      height={1000}
                      priority
                    />
                  </div>

                  <div className="product-box">
                    <div className="product-card">
                      <h4>
                        {lang === 'th' ? item : lang === 'en' ? revNewsEN[index] : revNewsJP[index]}
                      </h4>
                    </div>

                    <div className="product-description-box">
                      <div className="space-part-box">
                        <div className='space-part'>
                  
                          {lang === 'th'
                            ? revContentTHNews[index]
                            : lang === 'en'
                              ? revContentENNews[start + index]
                              : revContentJPNews[start + index]}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="preview-product">
                    <div className="text-preview">
                      <p className="preview-text">
                        {lang === 'th' ? "อ่านเพิ่มเติม" : lang === 'en' ? "Read More" : "続きを読む"}
                      </p>
                    </div>
                  </div>

                  <div className="posted">
                    <div className="date_post">
                      <h6 className='post'>
                        {lang === 'th'
                          ? revDatePostTH[index]
                          : lang === 'en'
                            ? revDatePostEN[index]
                            : revDatePostJP[index]}
                      </h6>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <div className="detail-news">
          <ScrollReveal>
            <h2 className='title-news-page'>
              {lang === 'th' ? revNewsTH[selectedNews] : lang === 'en' ? revNewsEN[selectedNews] : revNewsJP[selectedNews]}
            </h2>
            <div className="line"></div>

            <div className="image-Establishment">
              <div className='Import-Image' style={{ textAlign: 'center' }}>
                {(() => {
                  const currentImage = revImage_Establishment[selectedNews][imgIndex];



                  const handleNextImage = () => {
                    setImgIndex((prev) => (prev + 1) % revImage_Establishment[selectedNews].length);
                  };

                  const handleNextImage1 = () => {
                    setImgIndex((prev) =>
                      prev === 0
                        ? revImage_Establishment[selectedNews].length - 1
                        : prev - 1
                    );
                  };
                  return (
                    <>
                      <Image
                        src={currentImage}
                        alt={`ภาพที่ ${imgIndex + 1}`}
                        width={800}
                        height={600}
                        loading="lazy"
                        className="image-fade"
                      />
                      <p onClick={handleNextImage} className="btn-change-image-right">
                        <i className="change-Image-btn bi bi-chevron-right"></i>
                      </p>
                      <button onClick={handleNextImage1} className="btn-change-image-left">
                        <i className="change-Image-btn bi bi-chevron-left"></i>
                      </button>


                    </>
                  )
                })()}





              </div>
              <p className='text-center text-status-Image'>รูปที่ {imgIndex + 1} / {revImage_Establishment[selectedNews].length}</p>
            </div>


            <div className="date_post">
              <h6 className='post'>
                {lang === 'th'
                  ? revDatePostTH[selectedNews]
                  : lang === 'en'
                    ? revDatePostEN[selectedNews]
                    : revDatePostJP[selectedNews]}
              </h6>
            </div>

            {/* ✅ Render HTML ที่ sanitize แล้ว */}
            <div
              className='content-box-page'
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(
                  lang === 'th'
                    ? revContentTH[selectedNews]
                    : lang === 'en'
                      ? revContentEN[selectedNews]
                      : revContentJP[selectedNews]
                ),
              }}
            />



            <div className="btn-back-newsPage">
              <button
                onClick={() => {
                  setSelectedNews(null);
                  window.location.reload()
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="back-btn"
              >
                {lang === 'th' ? "กลับไปหน้ารวม" : lang === 'en' ? "Back to Overview" : "一覧に戻る"}
              </button>
            </div>
          </ScrollReveal>
        </div>
      )}
    </div>
  );
}
