'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Map from './google-map'
import Head from 'next/head'
export default function FooterClient() {
  const currentYear = new Date().getFullYear().toString();

  const currentDay = new Date().getDate()
  const currentMonth = new Date().getMonth()
  const MonthTH = [
    'มกราคม',
    'กุมภาพันธ์',
    'มีนาคม',
    'เมษายน',
    'พฤษภาคม',
    'มิถุนายน',
    'กรกฎาคม',
    'สิงหาคม',
    'กันยายน',
    'ตุลาคม',
    'พฤศจิกายน',
    'ธันวาคม'
  ]

  const MonthEN = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]
  const MonthJP = [
    '1月（いちがつ）',
    '2月（にがつ）',
    '3月（さんがつ）',
    '4月（しがつ）',
    '5月（ごがつ）',
    '6月（ろくがつ）',
    '7月（しちがつ）',
    '8月（はちがつ）',
    '9月（くがつ）',
    '10月（じゅうがつ）',
    '11月（じゅういちがつ）',
    '12月（じゅうにがつ）'
  ]

  const currentMonthTH = MonthTH[currentMonth]
  const currentMonthEN = MonthEN[currentMonth]
  const currentMonthJP = MonthJP[currentMonth]

  const dateTH = currentDay + " / " + currentMonthTH + " / " + currentYear
  const dateEN = currentDay + " / " + currentMonthEN + " / " + currentYear
  const dateJP = currentDay + " / " + currentMonthJP + " / " + currentYear


  const [lang, setLang] = useState<'th' | 'en' | 'jp'>('th');
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedLang = localStorage.getItem('lang');
      if (storedLang === 'th' || storedLang === 'en' || storedLang === 'jp') {
        setLang(storedLang);
      }
    }
  }, []);

  return (
    <div>
      <Head>
        <meta itemProp="department" content="Manufacturing Department" />
        <meta itemProp="makesOffer" content="Automotive Rubber Parts" />
      </Head>
      <footer itemScope itemType="https://schema.org/Organization">
        <div className="container-footer">
          {/* Company Info */}
          <div className="footer-box" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
            <div className="topic-box">
              <Link href="/" aria-label="กลับไปหน้าแรก JIEI Thailand" title="JIEI Thailand - Automotive Rubber Parts Manufacturer">
                <Image
                  src="/jiei-thailand-logo.png"
                  alt="JIEI Thailand Logo - Automotive Rubber Parts Manufacturer in Chonburi"
                  width={1000}
                  height={1000}
                  priority
                  itemProp="logo"
                  className='logo-footer'
                />
              </Link>

            </div>
            <div className="contentFooter-box">
              <h6 className='jiei-footer' itemProp="name">JIEI (Thailand) Co., Ltd.</h6>
              <p className='jiei-footer' itemProp="streetAddress">
                {lang===('th') ? "นิคมอุตสาหกรรมปิ่นทอง 4 ยูนิต G18 180/3 หมู่ 6 ตำบลบึง อำเภอศรีราชา จังหวัดชลบุรี 20230 ประเทศไทย" : lang===('en') ? "Pinthong 4 Industrial Estate, Unit G18,180/3 Moo 6, T. Bueng, A. Sriracha, Chonburi 20230, Thailand" : "ピントン4工業団地 ユニットG18 180/3 ムー6 ブン区 シーラチャー郡 チョンブリー県 20230 タイ"}
              </p>
              <p className='jiei-footer'>{lang===('th') ? "เวลาทำการ : " : lang===('en') ? "Opening Hours : " : "営業時間 ："}<time itemProp="openingHours" dateTime="Mo-Fr 08:00-17:00">{lang===('th') ? "จันทร์ - ศุกร์ เวลา 8.00 - 17.00 น." : lang===('en') ? "Mon - Fri, 8:00 AM - 5:00 PM" : "月曜日〜金曜日 8:00〜17:00"}</time></p>
              <p className='jiei-footer'>{lang===('th') ? "โทร : " : lang===('en') ? "Tel : " : "電話 ："}<a href="tel:+6633136581" itemProp="telephone">033-136581-4</a></p>
              {/* <p className='jiei-footer'>{lang===('th') ? "เลขประจำตัวผู้เสียภาษี (TIN) : " : lang===('en') ? "TIN :" : "納税者識別番号 (TIN)："} <span itemProp="taxID">0215554005118</span></p> */}
            </div>
          </div>

          {/* Products */}
          <div className="footer-box">
            <div className="topic-box">
              <h6>{lang===('th') ? "ผลิตภัณฑ์" : lang===('en') ? "Products" : "製品"}</h6>
            </div>
            <div className="contentFooter-box">
              <ul>
                <li className='li-footer'>
                  <Link href={'/products/engine-mount'} className="link-footer">{lang===('th') ? "แผ่นยึดเครื่องยนต์" : lang===('en') ? "Engine Mounts" : "エンジンマウント"}</Link>
                </li>
                <li className='li-footer'>
                  <Link href={'/products/suspension-bush'} className="link-footer">{lang===('th') ? "บุชซิ่งช่วงล่าง" : lang===('en') ? "Suspension Bushings" : "サスペンションブッシュ"}</Link>
                </li>
                <li className='li-footer'>
                  <Link href={'/products/seals'} className="link-footer">{lang===('th') ? "ซีลและปะเก็น" : lang===('en') ? "Seals & Gaskets" : "シール＆ガスケット"}</Link>
                </li>
                <li className='li-footer'>
                  <Link href={'/products/custom-parts'} className="link-footer">{lang===('th') ? "คอลเลกชันผลิตภัณฑ์" : lang===('en') ? "Product Collection" : "製品コレクション"}</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* About & Contact */}
          <div className="footer-box">
            <div className="footer-box2">
              <div className="topic-box">
                <h6>{lang===('th') ? "เกี่ยวกับเรา" : lang===('en') ? "About Us" : "会社概要"}</h6>
              </div>
              <div className="contentFooter-box">
                <ul>
                  <li className='li-footer'>
                    <Link href={'/about'} className="link-footer">{lang===('th') ? "ข้อมูลบริษัท" : lang===('en') ? "Company Profile" : "会社概要"}</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="footer-box2">
              <div className="topic-box">
                <h6>{lang===('th') ? "ติดต่อเรา" : lang===('en') ? "Contact Us" : "お問い合わせ"}</h6>
              </div>
              <div className="contentFooter-box">
                <ul>
                  <li className='li-footer'>
                    <Link href={'/contact'} className="link-footer">{lang===('th') ? "ส่งข้อความถึงเรา" : lang===('en') ? "Send Us a Message" : "メッセージを送る"}</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* News & Blog */}


          {/* Activities */}
          <div className="footer-box">
            <div className="footer-box2">
              <div className="topic-box">
                <h6>{lang===('th') ? "ข่าวสาร และกิจกรรม" : lang===('en') ? "News & Activities" : "ニュースとイベント"}</h6>
              </div>
            </div>
            <div className="contentFooter-box">
              <ul>
                <li className='li-footer'>
                  <Link href={'/activities'} className="link-footer">{lang===('th') ? "ข่าวสาร และกิจกรรม" : lang===('en') ? "Activities" : "活動"}</Link>
                </li>
              </ul>
            </div>


          </div>

          <div className="footer-box2">
            <div className="topic-box">
              <h6>Google Map</h6>
            </div>
            <div className="contentFooter-box">
              <div className="map-container">
               <Map />

              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="bottom-footer">
          <p>{lang===('th') ? `ลิขสิทธิ์ © 2025 บริษัท เจไออี (ประเทศไทย) จำกัด | ผู้ผลิตชิ้นส่วนยางยานยนต์ในจังหวัดชลบุรี ประเทศไทย || อัปเดตเมื่อ ${dateTH}` : lang===('en') ? `Copyright © 2025 JIEI (Thailand) Co., Ltd. | Automotive Rubber Parts Manufacturer in Chonburi, Thailand || Update on ${dateEN}` : `著作権 © 2025 JIEI（タイ）株式会社｜タイ・チョンブリー県の自動車用ゴム部品メーカー || 更新日 ${dateJP}`}</p>
        </div>
      </footer>
    </div>
  )
}
