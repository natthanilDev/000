'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
// import Link from 'next/link';
import Head from 'next/head';
import { useSearchParams } from "next/navigation";
import ScrollReveal from '../ScrollReveal/ScrollReveal';
import DOMPurify from "isomorphic-dompurify";
import Link from 'next/link';
export default function News() {
  const searchParams = useSearchParams();
  const [selectedNews, setSelectedNews] = useState<number | null>(null);

  const page = searchParams.get("page");
  const currentPage = page ? parseInt(page, 10) : 1;
  const perPage = 8;


  const Image_Establishment = [
    // รูปภาพวันก่อตั้งบริษัท
    [
      '/jieiImage/19.png'

    ],
    // รูปภาพ Company trip
    [
      '/News/company-trip-2025/company-trip-2025 (1).jpg',

    ],
    // รูปภาพรับสมัครงาน
    // [
    //   '/News/imageEmployee.png',

    // ],
    // รูปภาพวันเกิดบริษัท
    [
      '/News/11-11.png'
    ],
    //New year party
    [
      '/News/New-Year-Party/newyear-party.png',

    ],
    //Sports Day
    [

      '/News/Sport-Day/sportDay.png',

    ]

  ]
  // --- เนื้อหาข่าว ---
  const newsTH = [

    // วันก่อตั้งบริษัท
    'ก่อตั้งบริษัท เจไออีไอ (ไทยแลนด์) จำกัด',
    // Company trip
    'ท่องเที่ยวบริษัท เจไออีไอ (ไทยแลนด์)',
    // สมัครงาน
    // 'รับสมัครพนักงานตำแหน่ง Staff',
    // วันเกิดบริษัท
    'วันที่ 11 พฤศจิกายน พ.ศ. 2568 วันครบรอบวันเกิดบริษัท เจไออีไอ (ไทยแลนด์)',
    //New year party
    'งานเลี้ยงปีใหม่ ประจำปี 2025 วันที่ 5 ธันวาคม 2025',
    //Sports Day
    'งานกีฬาสี บริษัท JIEI (Thailand) Co., Ltd.'
  ];
  const newsEN = [
    //  วันก่อตั้งบริษัท
    'Establishment of Jiei (Thailand) Co., Ltd.',
    // Company trip
    'Company Trip – JIEI (Thailand)',
    // สมัครงาน
    // 'Now Hiring: Staff Position',
    // วันเกิดบริษัท
    'November 11, 2025 – Anniversary of JIEI (Thailand) Company’s Founding',
    //New year party 
    'New Year Party 2025 Date: 5 December 2025',
    //Sports Day
    'Sports Day Event JIEI (Thailand) Co., Ltd.'
  ];
  const newsJP = [

    //  วันก่อตั้งบริษัท
    'Jiei（Thailand）Co., Ltd. の設立',
    // Company trip
    'JIEI（タイランド）社 社員旅行',
    // สมัครงาน
    // 'スタッフ職を募集しています',
    // วันเกิดบริษัท
    '2025年11月11日 – JIEI（タイランド）会社設立記念日',
    //New year party
    '2025年 新年会 開催日：2025年12月5日',
    //Sports day
    'JIEI(THAILAND)CO.,LTD. スポーツデーイベント'
  ];

  const contentTH = [
    //  วันก่อตั้งบริษัท
    `
    <section class="company-announcement">
      <h2>ประกาศก่อตั้งอย่างเป็นทางการ</h2>
      <p>
        เมื่อวันที่ <strong>11 พฤศจิกายน พ.ศ. 2554</strong> 
        ณ <strong>นิคมอุตสาหกรรมปิ่นทอง 4 จังหวัดชลบุรี</strong>
      </p>
      <p>
        บริษัท <strong>เจไออีไอ (ไทยแลนด์) จำกัด</strong> หรือ 
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
    // Company trip
    ,
    `
    <section class="company-announcement">
    <h2>บริษัท เจไออีไอ จัดโครงการท่องเที่ยวประจำปี ระหว่างวันที่ 11-12 ตุลาคม 2568</h2>
    <p>ในปี 2025 บริษัท เจไออีไอ ได้จัดโครงการท่องเที่ยวประจำปีขึ้นเพื่อส่งเสริมความสัมพันธ์ในทีมงาน เพิ่มพูนประสบการณ์ใหม่ๆ และเปิดโอกาสให้พนักงานได้พักผ่อนเติมพลัง</p>
    <p>โครงการท่องเที่ยวในปีนี้มีจุดเด่นคือ “การผสมผสานระหว่างการพักผ่อนด้วยธรรมชาติ + กิจกรรมสร้างทีม + ความยั่งยืน”</p>
    <hr />
</section>

    `
    //     ,
    //     // สมัครงาน
    //     `

    //     <section class="company-announcement">
    //   <h2>เปิดรับสมัครงาน: Staff</h2>
    //   <p>
    //     <h5>หน้าที่ความรับผิดชอบหลัก:</h5>
    //   </p>
    //   <div>
    //     <ul>
    //       <li>1. ยังไม่กำหนด</li>
    //       <li>2. ยังไม่กำหนด</li>
    //       <li>3. ยังไม่กำหนด</li>
    //       <li>4. ยังไม่กำหนด</li>
    //       <li>5. ยังไม่กำหนด</li>
    //       <li>6. ยังไม่กำหนด</li>
    //       <li>7. ยังไม่กำหนด </li>
    //       <li>8. ยังไม่กำหนด</li>
    //     </ul>

    //     <blockquote>
    //       <h5>คุณสมบัติ:</h5>
    //     </blockquote>

    //     <ul>
    //       <li>1. ยังไม่กำหนด</li>
    //       <li>2. ยังไม่กำหนด</li>
    //       <li>3. ยังไม่กำหนด</li>
    //       <li>4. ยังไม่กำหนด</li>
    //       <li>5. ยังไม่กำหนด</li>
    //       <li>6. ยังไม่กำหนด</li>
    //       <li>7. ยังไม่กำหนด </li>
    //       <li>8. ยังไม่กำหนด</li>
    //     </ul>

    //     <blockquote>
    //       <h5>สวัสดิการและผลประโยชน์:</h5>
    //     </blockquote>

    //     <ul>
    //       <li>1. ยังไม่กำหนด</li>
    //       <li>2. ยังไม่กำหนด</li>
    //       <li>3. ยังไม่กำหนด</li>
    //       <li>4. ยังไม่กำหนด</li>
    //       <li>5. ยังไม่กำหนด</li>
    //       <li>6. ยังไม่กำหนด</li>
    //       <li>7. ยังไม่กำหนด </li>
    //       <li>8. ยังไม่กำหนด</li>
    //     </ul>
    //     ผู้สนใจสามารถติดต่อ <a href="mailto:info@jiei-thai.co.th">info@jiei-thai.co.th</a>
    //   </div>
    // </section>
    //     `,
    // วันเกิดบริษัท
    ,
    ` 
    <section class="company-announcement">
      <h2>วันครบรอบบริษัท เจไออีไอ (ไทยแลนด์) – 11 พฤศจิกายน 2568</h2>
     
      <div>
      <p>
       ในโอกาสวันครบรอบการก่อตั้งบริษัท เจไออีไอ (ไทยแลนด์) เมื่อวันที่ 11 พฤศจิกายน 2568 <br /> ทางบริษัทได้จัดกิจกรรมเล็กๆ เพื่อเป็นการขอบคุณพนักงานทุกท่าน โดยในช่วงเที่ยงวัน พนักงานทุกคนได้รับของขวัญ
      </p>

      </div>
   
    </section>
    `,
    //New year party
    ` 
    <section class="company-announcement">
      <h2>ในวันที่ 5 ธันวาคม 2025 บริษัท JIEI (Thailand) Co., Ltd. ได้จัดงานเลี้ยงปีใหม่</h2>
     
      <div>
      <p>
       ในวันที่ 5 ธันวาคม 2025 บริษัท JIEI (Thailand) Co., Ltd. ได้จัดงานเลี้ยงปีใหม่เพื่อขอบคุณพนักงานทุกท่านที่ทุ่มเททำงานอย่างหนักตลอดปี
      </p>

       <p><b>
         พร้อมกิจกรรมจับฉลากของขวัญมากกว่า 71 รายการ สร้างรอยยิ้มและความสนุกสนานให้กับทุกคน
      </b> </p>
    
      
      </div>
   
    </section>
    `,

    //Sports Day
    `
    <section class="company-announcement">
      <h2> งานกีฬาสี บริษัท JIEI(Thailand) Co., Ltd.</h2>
     
      <div>
      <p>
      งานกีฬาสี บริษัท JIEI (Thailand) Co., Ltd. จัดขึ้นในวันที่ 9, 15 และ 18 ธันวาคม 2025 โดยมีวัตถุประสงค์เพื่อสร้างความสามัคคี ส่งเสริมสุขภาพ และเพิ่มความสนุกสนานให้กับพนักงานทุกแผนก ทุกสีทีมได้เข้าร่วมแข่งขันในกิจกรรมต่าง ๆ อย่างเต็มที่ พร้อมเชียร์ลีดเดอร์สุดคึกคัก สร้างบรรยากาศที่เต็มไปด้วยพลังและเสียงหัวเราะตลอดทั้งงาน
      </p>
      </div>
   
    </section>
    `


  ];

  const contentTHNews = [
    //  วันก่อตั้งบริษัท
    `
      ประกาศก่อตั้งอย่างเป็นทางการ
        เมื่อวันที่ 11 พฤศจิกายน พ.ศ. 2554
        ณ นิคมอุตสาหกรรมปิ่นทอง 4 จังหวัดชลบุรี
        บริษัท เจไออีไอ (ไทยแลนด์) จำกัดหรือ 
       Jiei (Thailand) Co., Ltd. ได้ก่อตั้งขึ้นเมื่อวันที่ 
        11 พฤศจิกายน พ.ศ. 2554 (11-11-2011)
        เพื่อดำเนินธุรกิจด้านเทคโนโลยีอุตสาหกรรม 
        และการให้บริการด้านศวกรรมครบวงจร
     `,
    // Company trip
    `
        บริษัท เจไออีไอ จัดโครงการท่องเที่ยวประจำปี ระหว่างวันที่ 11-12 ตุลาคม 2568
        ในปี 2025 บริษัท เจไออีไอ ได้จัดโครงการท่องเที่ยวประจำปีขึ้นเพื่อส่งเสริมความสัมพันธ์ในทีมงาน เพิ่มพูนประสบการณ์ใหม่ๆ และเปิดโอกาสให้พนักงานได้พักผ่อนเติมพลัง
        โครงการท่องเที่ยวในปีนี้มีจุดเด่นคือ “การผสมผสานระหว่างการพักผ่อนด้วยธรรมชาติ + กิจกรรมสร้างทีม + ความยั่งยืน”
    `,


    // วันเกิดบริษัท
    `
     วันครบรอบบริษัท เจไออีไอ (ไทยแลนด์) – 11 พฤศจิกายน 2568
       ในโอกาสวันครบรอบการก่อตั้งบริษัท เจไออีไอ (ไทยแลนด์) เมื่อวันที่ 11 พฤศจิกายน 2568 <br /> ทางบริษัทได้จัดกิจกรรมเล็กๆ เพื่อเป็นการขอบคุณพนักงานทุกท่าน โดยในช่วงเที่ยงวัน พนักงานทุกคนได้รับของขวัญ 
       
       
     `,

    //New year party

    `
    ในวันที่ 5 ธันวาคม 2025 บริษัท JIEI (Thailand) Co., Ltd. ได้จัดงานเลี้ยงปีใหม่เพื่อขอบคุณพนักงานทุกท่านที่ทุ่มเททำงานอย่างหนักตลอดปี
    พร้อมกิจกรรมจับฉลากของขวัญมากกว่า 71 รายการ สร้างรอยยิ้มและความสนุกสนานให้กับทุกคน
     `,

    //Sports Day
    `
     งานกีฬาสี บริษัท JIEI (Thailand) Co., Ltd.
    งานกีฬาสี บริษัท JIEI (Thailand) Co., Ltd. จัดขึ้นในวันที่ 9, 15 และ 18 ธันวาคม 2025 โดยมีวัตถุประสงค์เพื่อสร้างความสามัคคี ส่งเสริมสุขภาพ และเพิ่มความสนุกสนานให้กับพนักงานทุกแผนก ทุกสีทีมได้เข้าร่วมแข่งขันในกิจกรรมต่าง ๆ อย่างเต็มที่ พร้อมเชียร์ลีดเดอร์สุดคึกคัก สร้างบรรยากาศที่เต็มไปด้วยพลังและเสียงหัวเราะตลอดทั้งงาน
     `
  ]
  const contentEN = [
    //  วันก่อตั้งบริษัท
    `
    <section class="company-announcement">
  <h2>Official Establishment Announcement</h2>
  <p>
    On <strong>November 11, 2011</strong> 
    at <strong>Pinthong Industrial Estate 4, Chonburi Province</strong>
  </p>
  <p>
    <strong>Jiei (Thailand) Co., Ltd.</strong>, also known in Thai as 
    <em>เจไออีไอ (ไทยแลนด์) จำกัด</em>, was established on 
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
</section>
    `,

    // Company trip
    `
<section class="company-announcement">
    <h2>JIEI Annual Company Trip: October 11-12, 2025</h2>
    <p>In 2025, JIEI organized its annual company trip to strengthen team relationships, provide new experiences, and allow employees to relax and recharge.</p>
    <p>This year’s trip highlights a “blend of nature-based relaxation + team-building activities + sustainability.”</p>
   
</section>

    `,

    // สมัครงาน
    //     `
    //     <section class="company-announcement">
    //   <h2>Job Opening: Staff</h2>
    //   <p>
    //     <h5>Main Responsibilities:</h5>
    //   </p>
    //   <div>
    //     <ul>
    //       <li>1. Not specified</li>
    //       <li>2. Not specified</li>
    //       <li>3. Not specified</li>
    //       <li>4. Not specified</li>
    //       <li>5. Not specified</li>
    //       <li>6. Not specified</li>
    //       <li>7. Not specified</li>
    //       <li>8. Not specified</li>
    //     </ul>

    //     <blockquote>
    //       <h5>Qualifications:</h5>
    //     </blockquote>

    //     <ul>
    //       <li>1. Not specified</li>
    //       <li>2. Not specified</li>
    //       <li>3. Not specified</li>
    //       <li>4. Not specified</li>
    //       <li>5. Not specified</li>
    //       <li>6. Not specified</li>
    //       <li>7. Not specified</li>
    //       <li>8. Not specified</li>
    //     </ul>

    //     <blockquote>
    //       <h5>Benefits:</h5>
    //     </blockquote>

    //     <ul>
    //       <li>1. Not specified</li>
    //       <li>2. Not specified</li>
    //       <li>3. Not specified</li>
    //       <li>4. Not specified</li>
    //       <li>5. Not specified</li>
    //       <li>6. Not specified</li>
    //       <li>7. Not specified</li>
    //       <li>8. Not specified</li>
    //     </ul>
    //     Interested candidates can contact <a href="mailto:info@jiei-thai.co.th">info@jiei-thai.co.th</a>
    //   </div>
    // </section>
    //     `,

    // วันเกิดบริษัท
    `
    <section class="company-announcement">
      <h2>JIEI (Thailand) Company Anniversary – November 11, 2025</h2>
     
      <div>
      <p>
       On the occasion of JIEI (Thailand)’s founding anniversary on November 11, 2025, <br />
       the company organized a small event to thank all employees. At noon, every employee received gifts  
      </p>
      </div>
</section>
    `,

    //New year party


    `
    <section class="company-announcement">
      <h2>    On December 5, 2025, JIEI (Thailand) Co., Ltd. held a New Year party to express appreciation to all employees for their hard work throughout the year.           </h2>
      <div>
      <p>
      The event included a lucky draw with more than 71 prizes, adding joy and excitement for everyone.
      </p>

     
      </div>
</section>
    `,

    //Sport Day
    `
     <section class="company-announcement">
      <h2>Sports Day Event – JIEI (Thailand) Co., Ltd.</h2>
     
      <div>
      <p>
   The JIEI (Thailand) Co., Ltd. Sports Day will take place on December 9, 15, and 18, 2025. The event aims to promote teamwork, strengthen relationships, and encourage good health among employees across all departments. Each team participates enthusiastically in various activities, supported by lively cheerleaders, creating a vibrant and energetic atmosphere throughout the event.
      </p>
      </div>
   
    </section>
    `


  ];
  const contentENNews = [
    //  วันก่อตั้งบริษัท
    `
    Official Establishment Announcement
    On November 11, 2011,
    at Pinthong Industrial Estate 4, Chonburi Province,
    Jiei (Thailand) Co., Ltd. was officially established
    to operate in the field of industrial technology
    and provide comprehensive engineering services.
    `
    // Company trip
    ,
    `
    JIEI Annual Company Trip: October 11-12, 2025
    In 2025, JIEI organized its annual company trip to strengthen team relationships, provide new experiences, and allow employees to relax and recharge.
    This year’s trip highlights a “blend of nature-based relaxation + team-building activities + sustainability.”
    `,
    // สมัครงาน
    // `
    // Now Hiring: Staff Position
    // `
    // ,
    // วันเกิดบริษัท
    `
     JIEI (Thailand) Company Anniversary – November 11, 2025
      On the occasion of JIEI (Thailand)’s founding anniversary on November 11, 2025,
       the company organized a small event to thank all employees. At noon, every employee received gifts including: 
       1. 1 Large Pack of Instant Noodles
       2. 1 Bottle of Orange Juice
       3. Ice Cream
       4. Special Lunch including Grilled Mackerel and Fried Pork with Spicy Sauce
       `,
    //New year party
    `
       On December 5, 2025, JIEI (Thailand) Co., Ltd. held a New Year party to express appreciation to all employees for their hard work throughout the year.
       The event included a lucky draw with more than 71 prizes, adding joy and excitement for everyone.
       `,
    //Sports Day
    `
       Sports Day Event – JIEI (Thailand) Co., Ltd.
       The JIEI (Thailand) Co., Ltd. Sports Day will take place on December 9, 15, and 18, 2025. The event aims to promote teamwork, strengthen relationships, and encourage good health among employees across all departments. Each team participates enthusiastically in various activities, supported by lively cheerleaders, creating a vibrant and energetic atmosphere throughout the event.
       `
  ]
  const contentJP = [
    //  วันก่อตั้งบริษัท
    `
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
</section>
    ` ,
    // Company trip
    `
    <section class="company-announcement">
    <h2>JIEI社 年間社員旅行：2025年10月11日～12日</h2>
    <p>2025年、JIEI社はチームの結束を強化し、新しい経験を提供し、社員がリフレッシュできる年間社員旅行を開催しました。</p>
    <p>今年の旅行の特徴は「自然の中でのリラックス + チームビルディング活動 + 持続可能性の融合」です。</p>
    
    <hr />
</section>

    `,
    //     // สมัครงาน
    //     `
    //       <h2>求人募集：スタッフ</h2>
    //   <p>
    //     <h5>主な業務内容：</h5>
    //   </p>
    //   <div>
    //     <ul>
    //       <li>1. 未定</li>
    //       <li>2. 未定</li>
    //       <li>3. 未定</li>
    //       <li>4. 未定</li>
    //       <li>5. 未定</li>
    //       <li>6. 未定</li>
    //       <li>7. 未定</li>
    //       <li>8. 未定</li>
    //     </ul>

    //     <blockquote>
    //       <h5>応募資格：</h5>
    //     </blockquote>

    //     <ul>
    //       <li>1. 未定</li>
    //       <li>2. 未定</li>
    //       <li>3. 未定</li>
    //       <li>4. 未定</li>
    //       <li>5. 未定</li>
    //       <li>6. 未定</li>
    //       <li>7. 未定</li>
    //       <li>8. 未定</li>
    //     </ul>

    //     <blockquote>
    //       <h5>福利厚生：</h5>
    //     </blockquote>

    //     <ul>
    //       <li>1. 未定</li>
    //       <li>2. 未定</li>
    //       <li>3. 未定</li>
    //       <li>4. 未定</li>
    //       <li>5. 未定</li>
    //       <li>6. 未定</li>
    //       <li>7. 未定</li>
    //       <li>8. 未定</li>
    //     </ul>
    //     応募希望の方は <a href="mailto:info@jiei-thai.co.th">info@jiei-thai.co.th</a> までご連絡ください。
    //   </div>
    // </section>

    //     `,
    // วันเกิดบริษัท
    `
      <section class="company-announcement">
      <h2>JIEI（タイランド）会社設立記念日 – 2025年11月11日</h2>
     
      <div>
      <p>
       JIEI（タイランド）の設立記念日2025年11月11日に際し、<br />
       社員全員に感謝の気持ちを込めた小さなイベントを開催しました。正午には全社員に記念品が配られました。
      </p>
      </div>
</section>
    `,
    //New year party
    `
      <section class="company-announcement">
      <h2>
      2025年12月5日、JIEI(THAILAND)CO.,LTD. は、1年間懸命に働いてくれた従業員への感謝を込めて、新年会を開催しました。
      </h2>
     
      <div>
      <p>
    当日は、景品が当たる抽選会も行われ、会場は笑顔と活気にあふれました。
      </p>

      </div>
</section>
    `,
    //Sports Day
    `
      <section class="company-announcement">
      <h2>
      JIEI(THAILAND)CO.,LTD. スポーツデー
      </h2>
     
      <div>
      <p>
      JIEI(THAILAND)CO.,LTD. のスポーツデーは、2025年12月9日、15日、18日に開催されました。社員同士の団結力向上、健康促進、そして職場の活気づくりを目的としたイベントです。各チームが様々な競技に元気よく参加し、応援団の盛り上がりとともに、会場は終始にぎやかで楽しい雰囲気に包まれました。
      </p>

      </div>
</section>
      
    `
  ];
  const contentJPNews = [
    // วันเกิดบริษัท
    `
    正式設立のお知らせ
    2011年11月11日、チョンブリー県ピントン工業団地4において
    Jiei（Thailand）Co., Ltd. は正式に設立されました。
    当社は産業技術分野での事業展開および
    総合的なエンジニアリングサービスの提供を目的としております。
    `
    ,
    // Company trip
    `
    JIEI社 年間社員旅行：2025年10月11日～12日
    2025年、JIEI社はチームの結束を強化し、新しい経験を提供し、社員がリフレッシュできる年間社員旅行を開催しました。
    今年の旅行の特徴は「自然の中でのリラックス + チームビルディング活動 + 持続可能性の融合」です。
    `,
    // สมัครงาน
    // `
    // 募集職種：労働安全衛生担当者（専門職レベル）
    // `
    // ,
    // วันเกิดบริษัท
    `
    company-announcement
      JIEI（タイランド）会社設立記念日 – 2025年11月11日
       JIEI（タイランド）の設立記念日2025年11月11日に際し、
       社員全員に感謝の気持ちを込めた小さなイベントを開催しました。正午には全社員に記念日が配られました。
    `,
    //NeW year party
    `
    2025年12月5日、JIEI(THAILAND)CO.,LTD. は、1年間懸命に働いてくれた従業員への感謝を込めて、新年会を開催しました。 
    当日は、景品が当たる抽選会も行われ、会場は笑顔と活気にあふれました。
    
    `,
    //Sport Day
    `
    JIEI(THAILAND)CO.,LTD. スポーツデー
    JIEI(THAILAND)CO.,LTD. のスポーツデーは、2025年12月9日、15日、18日に開催されました。社員同士の団結力向上、健康促進、そして職場の活気づくりを目的としたイベントです。各チームが様々な競技に元気よく参加し、応援団の盛り上がりとともに、会場は終始にぎやかで楽しい雰囲気に包まれました。
    `
  ]

  const img = [
    //  วันก่อตั้งบริษัท
    '/jieiImage/19.png',

    // Company trip
    '/News/company-trip-2025/company-trip-2025 (1).jpg',
    // สมัครงาน
    // `/imageEmployee.png`,
    // วันเกิดบริษัท
    `/News/11-11.png`,
    //New year party
    `/News/New-Year-Party/newyear-party.png`,
    //Sports Day
    `/News/Sport-Day/sportDay.png`,

  ];
  const datePostTH = [
    //  วันก่อตั้งบริษัท
    '07 พฤษจิกายน 2025',
    // Company trip
    // '13 ตุลาคม 2025',
    // สมัครงาน
    '08 พฤษจิกายน 2025',
    // วันเกิดบริษัท
    '11 พฤษจิกายน 2025',
    //New year party
    `
    05 ธันวาคม 2025
    `,
    //Sports Day
    ` 12 ธันวาคม 2025`

  ];
  const datePostEN = [
    //  วันก่อตั้งบริษัท
    'November 07, 2025',
    // Company trip
    // 'October 13 , 2025',
    // สมัครงาน
    'November 08, 2025',
    // วันเกิดบริษัท
    'November 11, 2025',
    //New year party
    `05 December 2025`,
    //Sport Day
    `12 December 2025`,


  ];
  const datePostJP = [
    //  วันก่อตั้งบริษัท
    '2025年11月07日',
    // Company trip
    // '2025年10月13日',
    // สมัครงาน
    '2025年11月08日',
    // วันเกิดบริษัท
    '2025年11月11日',
    `2025年12月05日`,
    `2025年12月12日`,


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
  const totalPages = Math.ceil(newsTH.length / perPage);

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
                      alt={`ผู้ผลิตชิ้นส่วนยางรถยนต์ จังหวัดชลบุรี JIEI Thailand`}
                      width={1000}
                      height={1000}
                      priority
                    />
                  </div>

                  <div className="product-box">
                    <div className="product-card">
                      <h5 className='title-activity'>
                        {lang === 'th' ? item : lang === 'en' ? revNewsEN[index] : revNewsJP[index]}
                      </h5>
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
            <nav className="countPage" aria-label="Pagination">
              {/* ปุ่มย้อนกลับ */}
              {currentPage > 1 && (
                <Link
                  href={`/products/engine-mount?page=${currentPage - 1}`}
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
                        <Link href={`/products/engine-mount?page=1`} className="numPage" title="ไปหน้าที่ 1">
                          1
                        </Link>
                        {/* <span className="dots"><i className="bi bi-dash"></i></span> */}
                      </>
                    )}

                    {/* แสดงหน้าปัจจุบันและใกล้เคียง */}
                    {visiblePages.map((pageNum) => (
                      <Link
                        key={pageNum}
                        href={`/products/engine-mount?page=${pageNum}`}
                        className={`numPage ${pageNum === currentPage ? "focusPage" : ""}`}
                        title={`ไปหน้าที่ ${pageNum}`}
                      >
                        {pageNum}
                      </Link>
                    ))}

                    {/* แสดงจุดไข่ปลา + หน้าสุดท้าย */}
                    {/* {visiblePages[visiblePages.length - 1] < totalPages && (
                      <>
                         <span className="dots"><i className="bi bi-dash"></i></span> 
                        <Link
                          href={`/products/engine-mount?page=${totalPages}`}
                          className="numPage"
                          title={`ไปหน้าที่ ${totalPages}`}
                        >
                          {totalPages}
                        </Link>
                      </>
                    )} */}
                  </>
                );
              })()}

              {/* ปุ่มหน้าถัดไป */}
              {currentPage < totalPages && (
                <Link
                  href={`/products/engine-mount?page=${currentPage + 1}`}
                  className="numPage focusPage"
                  title={`ไปหน้าที่ ${currentPage + 1}`}
                >
                  <i className="bi bi-chevron-double-right"></i>
                </Link>
              )}
            </nav>
          </div>
          <br />
        </>
      ) : (
        <div className="detail-news">

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
                      alt={`ผู้ผลิตชิ้นส่วนยางรถยนต์ จังหวัดชลบุรี JIEI Thailand`}
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
              onClick={() => { setSelectedNews(null); window.scrollTo({ top: 0, behavior: 'smooth' }); setImgIndex(0) }} className="back-btn">
              {lang === 'th' ? "กลับไปหน้ารวม" : lang === 'en' ? "Back to Overview" : "一覧に戻る"}
            </button>
          </div>

        </div>
      )}
    </div>
  );
}
