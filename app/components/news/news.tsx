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
    [
      // รูปภาพวันก่อตั้งบริษัท

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
      // รูปภาพ Company trip
      '/News/company-trip-2025/company-trip-2025 (1).jpg',
      '/News/company-trip-2025/company-trip-2025 (2).jpg',
      '/News/company-trip-2025/company-trip-2025 (3).jpg',
      '/News/company-trip-2025/company-trip-2025 (4).jpg',
      '/News/company-trip-2025/company-trip-2025 (5).jpg',
      '/News/company-trip-2025/company-trip-2025 (6).jpg',
      '/News/company-trip-2025/company-trip-2025 (7).jpg',
      '/News/company-trip-2025/company-trip-2025 (8).jpg',
      '/News/company-trip-2025/company-trip-2025 (9).jpg',
      '/News/company-trip-2025/company-trip-2025 (10).jpg',
      '/News/company-trip-2025/company-trip-2025 (11).jpg',
      '/News/company-trip-2025/company-trip-2025 (12).jpg',
      '/News/company-trip-2025/company-trip-2025 (13).jpg',
      '/News/company-trip-2025/company-trip-2025 (14).jpg',
      '/News/company-trip-2025/company-trip-2025 (15).jpg',
      '/News/company-trip-2025/company-trip-2025 (16).jpg',
      '/News/company-trip-2025/company-trip-2025 (17).jpg',
      '/News/company-trip-2025/company-trip-2025 (18).jpg',
      '/News/company-trip-2025/company-trip-2025 (19).jpg',
      '/News/company-trip-2025/company-trip-2025 (20).jpg',
      '/News/company-trip-2025/company-trip-2025 (21).jpg',
      '/News/company-trip-2025/company-trip-2025 (22).jpg',
      '/News/company-trip-2025/company-trip-2025 (23).jpg',
      '/News/company-trip-2025/company-trip-2025 (24).jpg',
      '/News/company-trip-2025/company-trip-2025 (25).jpg',
      '/News/company-trip-2025/company-trip-2025 (26).jpg',
      '/News/company-trip-2025/company-trip-2025 (27).jpg',
      '/News/company-trip-2025/company-trip-2025 (28).jpg',
      '/News/company-trip-2025/company-trip-2025 (29).jpg',
      '/News/company-trip-2025/company-trip-2025 (30).jpg',
      '/News/company-trip-2025/company-trip-2025 (31).jpg',
      '/News/company-trip-2025/company-trip-2025 (32).jpg',
      '/News/company-trip-2025/company-trip-2025 (33).jpg',
      '/News/company-trip-2025/company-trip-2025 (34).jpg',
      '/News/company-trip-2025/company-trip-2025 (35).jpg',
      '/News/company-trip-2025/company-trip-2025 (36).jpg',
      '/News/company-trip-2025/company-trip-2025 (37).jpg',
      '/News/company-trip-2025/company-trip-2025 (38).jpg',
      '/News/company-trip-2025/company-trip-2025 (39).jpg',
      '/News/company-trip-2025/company-trip-2025 (40).jpg',
      '/News/company-trip-2025/company-trip-2025 (41).jpg',
      '/News/company-trip-2025/company-trip-2025 (42).jpg',
      '/News/company-trip-2025/company-trip-2025 (43).jpg',
      '/News/company-trip-2025/company-trip-2025 (44).jpg',
      '/News/company-trip-2025/company-trip-2025 (45).jpg',
      '/News/company-trip-2025/company-trip-2025 (46).jpg',
      '/News/company-trip-2025/company-trip-2025 (47).jpg',
      '/News/company-trip-2025/company-trip-2025 (48).jpg',
      '/News/company-trip-2025/company-trip-2025 (49).jpg',
      '/News/company-trip-2025/company-trip-2025 (50).jpg',
      '/News/company-trip-2025/company-trip-2025 (51).jpg',
      '/News/company-trip-2025/company-trip-2025 (52).jpg',
      '/News/company-trip-2025/company-trip-2025 (53).jpg',
      '/News/company-trip-2025/company-trip-2025 (54).jpg',
      '/News/company-trip-2025/company-trip-2025 (55).jpg',
      '/News/company-trip-2025/company-trip-2025 (56).jpg',
    ],
    [
      // รูปภาพรับสมัครงาน
      '/News/imageEmployee.png',

    ],
    [
      // รูปภาพวันเกิดบริษัท
      '/News/11-11.png'
    ],
    [
      //New year party
      '/News/New-Year-Party/Party (2).jpg',
      '/News/New-Year-Party/Party (3).jpg',
      '/News/New-Year-Party/Party (4).jpg',
      '/News/New-Year-Party/Party (5).jpg',
      '/News/New-Year-Party/Party (6).jpg',
      '/News/New-Year-Party/Party (7).jpg',
      '/News/New-Year-Party/Party (8).jpg',
      '/News/New-Year-Party/Party (9).jpg',
      '/News/New-Year-Party/Party (10).jpg',
      '/News/New-Year-Party/Party (11).jpg',
      '/News/New-Year-Party/Party (12).jpg',
      '/News/New-Year-Party/Party (13).jpg',
      '/News/New-Year-Party/Party (14).jpg',
      '/News/New-Year-Party/Party (15).jpg',
      '/News/New-Year-Party/Party (16).jpg',
      '/News/New-Year-Party/Party (17).jpg',
      '/News/New-Year-Party/Party (18).jpg',
      '/News/New-Year-Party/Party (19).jpg',
      '/News/New-Year-Party/Party (20).jpg',
      '/News/New-Year-Party/Party (21).jpg',
      '/News/New-Year-Party/Party (22).jpg',
      '/News/New-Year-Party/Party (23).jpg',
      '/News/New-Year-Party/Party (24).jpg',
      '/News/New-Year-Party/Party (25).jpg',
      '/News/New-Year-Party/Party (26).jpg',
      '/News/New-Year-Party/Party (27).jpg',
      '/News/New-Year-Party/Party (28).jpg',
      '/News/New-Year-Party/Party (29).jpg',
      '/News/New-Year-Party/Party (30).jpg',
      '/News/New-Year-Party/Party (31).jpg',
      '/News/New-Year-Party/Party (32).jpg',
      '/News/New-Year-Party/Party (33).jpg',
      '/News/New-Year-Party/Party (34).jpg',
      '/News/New-Year-Party/Party (35).jpg',
      '/News/New-Year-Party/Party (36).jpg',
      '/News/New-Year-Party/Party (37).jpg',
      '/News/New-Year-Party/Party (38).jpg',
      '/News/New-Year-Party/Party (39).jpg',
      '/News/New-Year-Party/Party (40).jpg',
      '/News/New-Year-Party/Party (41).jpg',
      '/News/New-Year-Party/Party (42).jpg',
      '/News/New-Year-Party/Party (43).jpg',
      '/News/New-Year-Party/Party (44).jpg',
      '/News/New-Year-Party/Party (45).jpg',
      '/News/New-Year-Party/Party (47).jpg',
      '/News/New-Year-Party/Party (48).jpg',
      '/News/New-Year-Party/Party (49).jpg',
      '/News/New-Year-Party/Party (50).jpg',
      '/News/New-Year-Party/Party (51).jpg',
      '/News/New-Year-Party/Party (52).jpg',
      '/News/New-Year-Party/Party (53).jpg',

    ]

  ]
  // --- เนื้อหาข่าว ---
  const newsTH = [
    // Description TH C1
    'ก่อตั้งบริษัท เจไออีไอ (ไทยแลนด์) จำกัด',
    'ท่องเที่ยวบริษัท เจไออีไอ (ไทยแลนด์)',
    'รับสมัครพนักงานตำแหน่ง Staff',
    'วันที่ 11 พฤศจิกายน พ.ศ. 2568 วันครบรอบวันเกิดบริษัท เจไออีไอ (ไทยแลนด์)',
    'งานเลี้ยงปีใหม่ ประจำปี 2025 วันที่ 5 ธันวาคม 2025'
  ];
  const newsEN = [
    //  วันก่อตั้งบริษัท
    'Establishment of Jiei (Thailand) Co., Ltd.',
    // Company trip
    'Company Trip – JIEI (Thailand)',
    // สมัครงาน
    'Now Hiring: Staff Position',
    // วันเกิดบริษัท
    'November 11, 2025 – Anniversary of JIEI (Thailand) Company’s Founding',
    'New Year Party 2025 Date: 5 December 2025',
  ];
  const newsJP = [

    //  วันก่อตั้งบริษัท
    'Jiei（Thailand）Co., Ltd. の設立',
    // Company trip
    'JIEI（タイランド）社 社員旅行',
    // สมัครงาน
    'スタッフ職を募集しています',
    // วันเกิดบริษัท
    '2025年11月11日 – JIEI（タイランド）会社設立記念日',

    '2025年 新年会 開催日：2025年12月5日'
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
    <blockquote>
        <h5>กำหนดการ:</h5>
    </blockquote>
    <h5>วันที่ 11 ตุลาคม 2568 (วันที่ 1)</h5>
    <hr />
    <p><b>06.00-07.30 น.</b>  ลงทะเบียนรับ ป้ายชื่อ และ ป้ายกระเป๋า JIEI (ประตูความปลอดภัย) พร้อม กาแฟและขนมปังหรือแซนด์วิชฟรี 3 BUS / รถตำรวจอำนวยความสะดวก / เส้นทางมอเตอร์เวย์</p>
    <hr />
    <p>12.00 น. เดินทางถึง ร้านอาหารกลางวัน Nannam Country Home Resort & Restaurant 8 คน/โต๊ะ เมนู 
        <ul>
            <li>1. หมูสามชั้นทอดน้ำปลา</li>
            <li>2. น้ำจิ้มถั่วเหลืองกับปลาเค็ม + ผัก</li>
            <li>3. ไก่ผัดแกง</li>
            <li>4. ปลาผัดแกงพริก (ชูชี)</li>
            <li>5. ผัดกะหล่ำปลีใส่ปลาหมึกแห้ง</li>
            <li>6. แกงส้มใส่ไข่ชะอม</li>
            <li>7. ต้มยำไก่บ้าน</li>
            <li>8. กุ้งเผ็ด</li>
            <li>9. ข้าว</li>
            <li>10. ผลไม้</li>
            <li>11. น้ำดื่ม, น้ำแข็ง</li>
        </ul>
    </p>
    <hr />
    <p>13.30 น. เช็คอินที่ โรงแรมทองสมบูรณ์คลับ ทุกโซนของโรงแรม รับ สายรัดข้อมือ เพื่อเข้าโซนกิจกรรม</p>
    <hr />
    <p>14.30 - 17.30 น. ช่วงบ่าย Bake และ DJ Booth สระว่ายน้ำ & โซนสวน อาหาร: ส้มตำ, ขนมจีนแกงน้ำยา, หมูย่าง, ฯลฯ บริการรถรางรับส่งไปยังโซนกิจกรรม 15 กิจกรรม</p>
    <hr />
    <p>19.00-23.00 น. ปาร์ตี้กลางคืน ห้องปาร์ตี้ ชั้น 3 Backdrop, ถ่ายภาพ, MC / วงดนตรีสด ลงทะเบียนแข่งขัน คอสตูม บุฟเฟ่ต์, เครื่องดื่มแอลกอฮอล์/น้ำอัดลม ธีม: แคมปิ้ง</p>
    <hr />
    <p>22.00 น. บริการมาม่าคัพ</p>
    <hr />
    <p>23.00 น. ปาร์ตี้กลางคืนสิ้นสุด น้ำแข็งและน้ำอัดลมฟรี</p>
    <hr />
    <h5>วันที่ 12 ตุลาคม 2568 (วันที่ 2)</h5>
    <hr />
    <p>07.00-10.00 น. อาหารเช้า ร้านอาหาร ชั้น 2 บุฟเฟ่ต์ แจ้งหมายเลขห้องของคุณ</p>
    <hr />
    <p>10.00 น. เช็คเอาท์ > Hokkaido Flower Park เขาใหญ่ ออกเดินทางไปยัง JIEI</p>
    <hr />
    <p>12.00 น. เดินทางถึง ร้านอาหารกลางวัน Suankhunyaiy เขาใหญ่ กม.3 8 คน/โต๊ะ เมนู :
        <ul>
            <li>1. ปลาสายแดงทอดกระเทียม</li>
            <li>2. ต้มยำไก่</li>
            <li>3. ไก่ผัดแกง</li>
            <li>4. ยำปลาช่อนกรอบ</li>
            <li>5. ปีกไก่ทอดเกลือ</li>
            <li>6. ผัดผักรวม</li>
            <li>7. แกงไทยใส่หอยแมลงภู่และใบชะพลู</li>
            <li>8. ข้าว</li>
            <li>9. ผลไม้</li>
            <li>10. น้ำดื่ม, น้ำแข็ง</li>
        </ul>
    </p>
    <hr />
    <p>15.00 น. ร้านขายของที่ระลึกที่ Cake Baan Suan Cake Baan Suan Shop</p>
    <hr />
    <p>19.30 น. เดินทางถึง JIEI แวะห้องน้ำระหว่างทางตามคำขอของลูกค้า</p>
    <hr />
</section>

    `
    ,
    // สมัครงาน
    `
    
    <section class="company-announcement">
  <h2>เปิดรับสมัครงาน: Staff</h2>
  <p>
    <h5>หน้าที่ความรับผิดชอบหลัก:</h5>
  </p>
  <div>
    <ul>
      <li>1. ยังไม่กำหนด</li>
      <li>2. ยังไม่กำหนด</li>
      <li>3. ยังไม่กำหนด</li>
      <li>4. ยังไม่กำหนด</li>
      <li>5. ยังไม่กำหนด</li>
      <li>6. ยังไม่กำหนด</li>
      <li>7. ยังไม่กำหนด </li>
      <li>8. ยังไม่กำหนด</li>
    </ul>

    <blockquote>
      <h5>คุณสมบัติ:</h5>
    </blockquote>

    <ul>
      <li>1. ยังไม่กำหนด</li>
      <li>2. ยังไม่กำหนด</li>
      <li>3. ยังไม่กำหนด</li>
      <li>4. ยังไม่กำหนด</li>
      <li>5. ยังไม่กำหนด</li>
      <li>6. ยังไม่กำหนด</li>
      <li>7. ยังไม่กำหนด </li>
      <li>8. ยังไม่กำหนด</li>
    </ul>

    <blockquote>
      <h5>สวัสดิการและผลประโยชน์:</h5>
    </blockquote>

    <ul>
      <li>1. ยังไม่กำหนด</li>
      <li>2. ยังไม่กำหนด</li>
      <li>3. ยังไม่กำหนด</li>
      <li>4. ยังไม่กำหนด</li>
      <li>5. ยังไม่กำหนด</li>
      <li>6. ยังไม่กำหนด</li>
      <li>7. ยังไม่กำหนด </li>
      <li>8. ยังไม่กำหนด</li>
    </ul>
    ผู้สนใจสามารถติดต่อ <a href="mailto:info@jiei-thai.co.th">info@jiei-thai.co.th</a>
  </div>
</section>
    `,
    // วันเกิดบริษัท

    ` <section class="company-announcement">
      <h2>วันครบรอบบริษัท เจไออีไอ (ไทยแลนด์) – 11 พฤศจิกายน 2568</h2>
     
      <div>
      <p>
       ในโอกาสวันครบรอบการก่อตั้งบริษัท เจไออีไอ (ไทยแลนด์) เมื่อวันที่ 11 พฤศจิกายน 2568 <br /> ทางบริษัทได้จัดกิจกรรมเล็กๆ เพื่อเป็นการขอบคุณพนักงานทุกท่าน โดยในช่วงเที่ยงวัน พนักงานทุกคนได้รับของขวัญ ได้แก่ 
      </p>

       <p><b>
          1. มาม่า 1 ห่อใหญ่
      </b> </p>
    
       <p>
       <b>
       2. น้ำส้ม 1 ขวด
      </b>
       </p>
    
       <p>
       <b>
       3. ไอศกรีม 
      </b>
       </p>

       <p>
       <b>
       4. อาหารกลางวันสุดพิเศษ ซึ่งประกอบด้วย ปลาซาบะย่าง และหมูทอดพร้อมน้ำจิ้มแจ่ว
      </b> </p>
      </div>
   
    </section>`,

    ` <section class="company-announcement">
      <h2>วันครบรอบบริษัท เจไออีไอ (ไทยแลนด์) – 11 พฤศจิกายน 2568</h2>
     
      <div>
      <p>
       ในวันที่ 5 ธันวาคม 2025 บริษัท JIEI (Thailand) Co., Ltd. ได้จัดงานเลี้ยงปีใหม่เพื่อขอบคุณพนักงานทุกท่านที่ทุ่มเททำงานอย่างหนักตลอดปี
      </p>

       <p><b>
         พร้อมกิจกรรมจับฉลากของขวัญมากกว่า 67 รายการ สร้างรอยยิ้มและความสนุกสนานให้กับทุกคน
      </b> </p>
    
      
      </div>
   
    </section>`,


  ];

  const contentTHNews = [
    //  วันก่อตั้งบริษัท
    `  ประกาศก่อตั้งอย่างเป็นทางการ
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
    // สมัครงาน
    `
    เปิดรับสมัครงาน: Staff
  
      `,
    // วันเกิดบริษัท
    `
     วันครบรอบบริษัท เจไออีไอ (ไทยแลนด์) – 11 พฤศจิกายน 2568
       ในโอกาสวันครบรอบการก่อตั้งบริษัท เจไออีไอ (ไทยแลนด์) เมื่อวันที่ 11 พฤศจิกายน 2568 <br /> ทางบริษัทได้จัดกิจกรรมเล็กๆ เพื่อเป็นการขอบคุณพนักงานทุกท่าน โดยในช่วงเที่ยงวัน พนักงานทุกคนได้รับของขวัญ ได้แก่ 
       
       1. มาม่า 1 ห่อใหญ่, 
       2. น้ำส้ม 1 ขวด, 
       3. ไอศกรีม 
       4. อาหารกลางวันสุดพิเศษ ซึ่งประกอบด้วย ปลาซาบะย่าง และหมูทอดพร้อมน้ำจิ้มแจ่ว
     `,

    //New year party

    `ในวันที่ 5 ธันวาคม 2025 บริษัท JIEI (Thailand) Co., Ltd. ได้จัดงานเลี้ยงปีใหม่เพื่อขอบคุณพนักงานทุกท่านที่ทุ่มเททำงานอย่างหนักตลอดปี
    พร้อมกิจกรรมจับฉลากของขวัญมากกว่า 67 รายการ สร้างรอยยิ้มและความสนุกสนานให้กับทุกคน
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
</section>`,

    // Company trip
    `
<section class="company-announcement">
    <h2>JIEI Annual Company Trip: October 11-12, 2025</h2>
    <p>In 2025, JIEI organized its annual company trip to strengthen team relationships, provide new experiences, and allow employees to relax and recharge.</p>
    <p>This year’s trip highlights a “blend of nature-based relaxation + team-building activities + sustainability.”</p>
    <blockquote>
        <h5>Schedule:</h5>
    </blockquote>
    <h5>October 11, 2025 (Day 1)</h5>
    <hr />
    <p><b>06:00–07:30 AM</b> – Register to receive a name tag & JIEI bag tag (Safety Gate). Free coffee & bread or sandwich. 3 Buses / Police escort car / Motorway route.</p>
    <hr />
    <p>12:00 PM – Arrive at lunch restaurant Nannam Country Home Resort & Restaurant. 8 persons/table. Menu:
        <ul>
            <li>1. Fried pork belly with fish sauce</li>
            <li>2. Soybean dipping sauce with salted fish + vegetables</li>
            <li>3. Stir-fried curry chicken</li>
            <li>4. Curry-fried fish (Chu Chee)</li>
            <li>5. Stir-fried cabbage with dried squid</li>
            <li>6. Sour yellow curry with Cha-Om omelette</li>
            <li>7. Tom Yum soup with free-range chicken</li>
            <li>8. Spicy shrimp</li>
            <li>9. Rice</li>
            <li>10. Fruit</li>
            <li>11. Drinking water, ice</li>
        </ul>
    </p>
    <hr />
    <p>1:30 PM – Check-in at THONGSOMBOON CLUB Hotel. All hotel zones: Receive a wristband to enter the activity zone.</p>
    <hr />
    <p>2:30–5:30 PM – Afternoon Bake & DJ Booth, Pool & Garden Zone. Food: Somtam, Khanom Jeen Namya, Grilled Pork, etc. Tram service to activity zone (15 activities).</p>
    <hr />
    <p>7:00–11:00 PM – Night Party, Party Room 3F, Backdrop, photography, MC / Live music band. Register for costume contest. Buffet, alcoholic beverages / soft drinks. Theme: Camping.</p>
    <hr />
    <p>10:00 PM – Mama Cup Service</p>
    <hr />
    <p>11:00 PM – End of Night Party. Free ice & soda</p>
    <hr />
    <h5>October 12, 2025 (Day 2)</h5>
    <hr />
    <p>7:00–10:00 AM – Breakfast, Restaurant 2F, Buffet. Please inform your room number.</p>
    <hr />
    <p>10:00 AM – Check-Out > Hokkaido Flower Park, Khaoyai. Departure to JIEI.</p>
    <hr />
    <p>12:00 PM – Arrive at lunch restaurant Suankhunyaiy, Khaoyai Km3. 8 persons/table. Menu:
        <ul>
            <li>1. Deep-fried ruby fish with garlic</li>
            <li>2. Tom Yum soup with chicken</li>
            <li>3. Stir-fried curry chicken</li>
            <li>4. Crisp catfish flake salad</li>
            <li>5. Fried chicken wings with salt</li>
            <li>6. Stir-fried mixed vegetables</li>
            <li>7. Thai curry with river snail and betel leaf</li>
            <li>8. Rice</li>
            <li>9. Fruit</li>
            <li>10. Drinking water, ice</li>
        </ul>
    </p>
    <hr />
    <p>3:00 PM – Souvenir shop at Cake Baan Suan.</p>
    <hr />
    <p>7:30 PM – Arrive at JIEI. Stop at the restroom along the way as requested by the customer.</p>
    <hr />
</section>

`,

    // สมัครงาน
    `
    <section class="company-announcement">
  <h2>Job Opening: Staff</h2>
  <p>
    <h5>Main Responsibilities:</h5>
  </p>
  <div>
    <ul>
      <li>1. Not specified</li>
      <li>2. Not specified</li>
      <li>3. Not specified</li>
      <li>4. Not specified</li>
      <li>5. Not specified</li>
      <li>6. Not specified</li>
      <li>7. Not specified</li>
      <li>8. Not specified</li>
    </ul>

    <blockquote>
      <h5>Qualifications:</h5>
    </blockquote>

    <ul>
      <li>1. Not specified</li>
      <li>2. Not specified</li>
      <li>3. Not specified</li>
      <li>4. Not specified</li>
      <li>5. Not specified</li>
      <li>6. Not specified</li>
      <li>7. Not specified</li>
      <li>8. Not specified</li>
    </ul>

    <blockquote>
      <h5>Benefits:</h5>
    </blockquote>

    <ul>
      <li>1. Not specified</li>
      <li>2. Not specified</li>
      <li>3. Not specified</li>
      <li>4. Not specified</li>
      <li>5. Not specified</li>
      <li>6. Not specified</li>
      <li>7. Not specified</li>
      <li>8. Not specified</li>
    </ul>
    Interested candidates can contact <a href="mailto:info@jiei-thai.co.th">info@jiei-thai.co.th</a>
  </div>
</section>


`,

    // วันเกิดบริษัท
    `<section class="company-announcement">
      <h2>JIEI (Thailand) Company Anniversary – November 11, 2025</h2>
     
      <div>
      <p>
       On the occasion of JIEI (Thailand)’s founding anniversary on November 11, 2025, <br />
       the company organized a small event to thank all employees. At noon, every employee received gifts including: 
      </p>

       <p><b>1. 1 Large Pack of Instant Noodles</b></p>
       <p><b>2. 1 Bottle of Orange Juice</b></p>
       <p><b>3. Ice Cream</b></p>
       <p><b>4. Special Lunch including Grilled Mackerel and Fried Pork with Spicy Sauce</b></p>
      </div>
</section>`,

    //New year party


    `<section class="company-announcement">
      <h2>    On December 5, 2025, JIEI (Thailand) Co., Ltd. held a New Year party to express appreciation to all employees for their hard work throughout the year.           </h2>
      <div>
      <p>
      The event included a lucky draw with more than 67 prizes, adding joy and excitement for everyone.
      </p>

     
      </div>
</section>`,


  ];
  const contentENNews = [
    //  วันก่อตั้งบริษัท
    `Official Establishment Announcement
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
    `
    Now Hiring: Staff Position
    `
    ,
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
The event included a lucky draw with more than 67 prizes, adding joy and excitement for everyone.
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
</section>` ,
    // Company trip
    `
<section class="company-announcement">
    <h2>JIEI社 年間社員旅行：2025年10月11日～12日</h2>
    <p>2025年、JIEI社はチームの結束を強化し、新しい経験を提供し、社員がリフレッシュできる年間社員旅行を開催しました。</p>
    <p>今年の旅行の特徴は「自然の中でのリラックス + チームビルディング活動 + 持続可能性の融合」です。</p>
    <blockquote>
        <h5>スケジュール:</h5>
    </blockquote>
    <h5>2025年10月11日（1日目）</h5>
    <hr />
    <p><b>06:00～07:30</b> – 名札とJIEIバッグタグ（セーフティゲート）を受け取る。コーヒーとパンまたはサンドイッチ無料。バス3台 / 警察護送車 / 高速道路ルート</p>
    <hr />
    <p>12:00 – 昼食レストラン Nannam Country Home Resort & Restaurant に到着。1テーブル8名。メニュー：
        <ul>
            <li>1. 豚バラの揚げ物（ナンプラー風味）</li>
            <li>2. 塩漬け魚入り大豆ソース＋野菜</li>
            <li>3. カレー風味の鶏肉炒め</li>
            <li>4. カレーフライドフィッシュ（チューチー）</li>
            <li>5. イカ入りキャベツ炒め</li>
            <li>6. チャオム入り酸味カレーオムレツ</li>
            <li>7. 自家飼育鶏のトムヤムスープ</li>
            <li>8. 辛いエビ</li>
            <li>9. ご飯</li>
            <li>10. フルーツ</li>
            <li>11. 飲料水、氷</li>
        </ul>
    </p>
    <hr />
    <p>13:30 – トーンソムブーンクラブホテルにチェックイン。ホテル内全ゾーン：アクティビティゾーン入場用のリストバンドを受け取る。</p>
    <hr />
    <p>14:30 - 17:30 – 午後のベイク＆DJブース、プール＆ガーデンゾーン。食事：ソムタム、カノムジーンナムヤー、豚のグリルなど。アクティビティゾーン（15アクティビティ）への送迎トラムサービス。</p>
    <hr />
    <p>19:00 - 23:00 – ナイトパーティー、パーティールーム3階、バックドロップ、写真撮影、MC / ライブバンド。コスチュームコンテスト登録。ビュッフェ、アルコール飲料 / ソフトドリンク。テーマ：キャンプ</p>
    <hr />
    <p>22:00 – ママカップサービス</p>
    <hr />
    <p>23:00 – ナイトパーティー終了。無料の氷とソーダ</p>
    <hr />
    <h5>2025年10月12日（2日目）</h5>
    <hr />
    <p>07:00 - 10:00 – 朝食、レストラン2階、ビュッフェ。部屋番号をお知らせください。</p>
    <hr />
    <p>10:00 – チェックアウト > ホッカイドウフラワーパーク カオヤイ。JIEIへ出発</p>
    <hr />
    <p>12:00 – 昼食レストラン Suankhunyaiy カオヤイ Km3 に到着。1テーブル8名。メニュー：
        <ul>
            <li>1. ニンニク風味のルビーフィッシュフライ</li>
            <li>2. 鶏肉のトムヤムスープ</li>
            <li>3. カレー風味の鶏肉炒め</li>
            <li>4. サクサクナマズサラダ</li>
            <li>5. 塩味フライドチキンウィング</li>
            <li>6. 野菜炒め盛り合わせ</li>
            <li>7. タイカレー（川の巻貝とビンロウの葉入り）</li>
            <li>8. ご飯</li>
            <li>9. フルーツ</li>
            <li>10. 飲料水、氷</li>
        </ul>
    </p>
    <hr />
    <p>15:00 – ケーキバーンスアンのお土産店</p>
    <hr />
    <p>19:30 – JIEIに到着。お客様の要望により途中でトイレに立ち寄る。</p>
    <hr />
</section>

`,
    // สมัครงาน
    `
      <h2>求人募集：スタッフ</h2>
  <p>
    <h5>主な業務内容：</h5>
  </p>
  <div>
    <ul>
      <li>1. 未定</li>
      <li>2. 未定</li>
      <li>3. 未定</li>
      <li>4. 未定</li>
      <li>5. 未定</li>
      <li>6. 未定</li>
      <li>7. 未定</li>
      <li>8. 未定</li>
    </ul>

    <blockquote>
      <h5>応募資格：</h5>
    </blockquote>

    <ul>
      <li>1. 未定</li>
      <li>2. 未定</li>
      <li>3. 未定</li>
      <li>4. 未定</li>
      <li>5. 未定</li>
      <li>6. 未定</li>
      <li>7. 未定</li>
      <li>8. 未定</li>
    </ul>

    <blockquote>
      <h5>福利厚生：</h5>
    </blockquote>

    <ul>
      <li>1. 未定</li>
      <li>2. 未定</li>
      <li>3. 未定</li>
      <li>4. 未定</li>
      <li>5. 未定</li>
      <li>6. 未定</li>
      <li>7. 未定</li>
      <li>8. 未定</li>
    </ul>
    応募希望の方は <a href="mailto:info@jiei-thai.co.th">info@jiei-thai.co.th</a> までご連絡ください。
  </div>
</section>

      `,
    // วันเกิดบริษัท
    `
      <section class="company-announcement">
      <h2>JIEI（タイランド）会社設立記念日 – 2025年11月11日</h2>
     
      <div>
      <p>
       JIEI（タイランド）の設立記念日2025年11月11日に際し、<br />
       社員全員に感謝の気持ちを込めた小さなイベントを開催しました。正午には全社員に以下の贈り物が配られました：
      </p>

       <p><b>1. インスタントラーメン 1パック</b></p>
       <p><b>2. オレンジジュース 1本</b></p>
       <p><b>3. アイスクリーム</b></p>
       <p><b>4. 特別ランチ：サバのグリルと揚げ豚、スパイシーソース付き</b></p>
      </div>
</section>
      `,

    `
      <section class="company-announcement">
      <h2>
      2025年12月5日、JIEI（Thailand）Co., Ltd. は、1年間懸命に働いてくれた従業員への感謝を込めて、新年会を開催しました。
      </h2>
     
      <div>
      <p>
    当日は、67種類以上の景品が当たる抽選会も行われ、会場は笑顔と活気にあふれました。
      </p>

      </div>
</section>
      `,
  ];
  const contentJPNews = [
    // วันเกิดบริษัท
    `正式設立のお知らせ
    2011年11月11日、チョンブリー県ピントン工業団地4において
    Jiei（Thailand）Co., Ltd. は正式に設立されました。
    当社は産業技術分野での事業展開および
    総合的なエンジニアリングサービスの提供を目的としております。`
    ,
    // Company trip
    `
    JIEI社 年間社員旅行：2025年10月11日～12日
    2025年、JIEI社はチームの結束を強化し、新しい経験を提供し、社員がリフレッシュできる年間社員旅行を開催しました。
    今年の旅行の特徴は「自然の中でのリラックス + チームビルディング活動 + 持続可能性の融合」です。
    `,
    // สมัครงาน
    `
    募集職種：労働安全衛生担当者（専門職レベル）
    `
    ,
    // วันเกิดบริษัท
    `
    company-announcement
      JIEI（タイランド）会社設立記念日 – 2025年11月11日
       JIEI（タイランド）の設立記念日2025年11月11日に際し、
       社員全員に感謝の気持ちを込めた小さなイベントを開催しました。正午には全社員に以下の贈り物が配られました：
    `,
    `
    2025年12月5日、JIEI（Thailand）Co., Ltd. は、1年間懸命に働いてくれた従業員への感謝を込めて、新年会を開催しました。 
    当日は、67種類以上の景品が当たる抽選会も行われ、会場は笑顔と活気にあふれました。
    
    `
  ]

  const img = [
    //  วันก่อตั้งบริษัท
    '/jieiImage/6.png',
    // Company trip
    '/News/company-trip-2025/company-trip-2025 (1).jpg',
    // สมัครงาน
    `/imageEmployee.png`,
    // วันเกิดบริษัท
    `/News/11-11.png`,
    //New year party
    `/News/New-Year-Party/Party (53).jpg`,


  ];
  const datePostTH = [
    //  วันก่อตั้งบริษัท
    '07 พฤษจิกายน 2025',
    // Company trip
    '13 ตุลาคม 2025',
    // สมัครงาน
    '08 พฤษจิกายน 2025',
    // วันเกิดบริษัท
    '11 พฤษจิกายน 2025',
    `
    05 ธันวาคม 2025
    `

  ];
  const datePostEN = [
    //  วันก่อตั้งบริษัท
    'November 07, 2025',
    // Company trip
    'October 13 , 2025',
    // สมัครงาน
    'November 08, 2025',
    // วันเกิดบริษัท
    'November 11, 2025',
    `05 December 2025`,

  ];
  const datePostJP = [
    //  วันก่อตั้งบริษัท
    '2025年11月07日',
    // Company trip
    '2025年10月13日',
    // สมัครงาน
    '2025年11月08日',
    // วันเกิดบริษัท
    '2025年11月11日',
    `2025年12月05日`

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

        </div>
      )}
    </div>
  );
}
