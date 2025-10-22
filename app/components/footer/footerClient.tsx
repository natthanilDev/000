'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
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

const dateTH = currentDay +" / "+ currentMonthTH +" / "+ currentYear
const dateEN = currentDay +" / "+ currentMonthEN +" / "+ currentYear
const dateJP = currentDay +" / "+ currentMonthJP +" / "+ currentYear


  const [lang, setLang] = React.useState<'th' | 'en' | 'jp'>('th');
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedLang = localStorage.getItem('lang') as 'th' | 'en' | 'jp' | null;
      if (storedLang) setLang(storedLang);
    }
  }, []);

  return (
    <div>

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
                {lang.includes('th') ? "นิคมอุตสาหกรรมปิ่นทอง 4 ยูนิต G18 180/3 หมู่ 6 ตำบลบึง อำเภอศรีราชา จังหวัดชลบุรี 20230 ประเทศไทย" : lang.includes('en') ? "Pinthong 4 Industrial Estate, Unit G18,180/3 Moo 6, T. Bueng, A. Sriracha, Chonburi 20230, Thailand" : "ピントン4工業団地 ユニットG18 180/3 ムー6 ブン区 シーラチャー郡 チョンブリー県 20230 タイ"}
              </p>
              <p className='jiei-footer'>{lang.includes('th') ? "เวลาทำการ : " : lang.includes('en') ? "Opening Hours : " : "営業時間 ："}<time itemProp="openingHours" dateTime="Mo-Fr 08:00-17:00">{lang.includes('th') ? "จันทร์ - ศุกร์ เวลา 8.00 - 17.00 น." : lang.includes('en') ? "Mon - Fri, 8:00 AM - 5:00 PM" : "月曜日〜金曜日 8:00〜17:00"}</time></p>
              <p className='jiei-footer'>{lang.includes('th') ? "โทร : " : lang.includes('en') ? "Tel : " : "電話 ："}<a href="tel:+6633136581" itemProp="telephone">033-136581-4</a></p>
              <p className='jiei-footer'>{lang.includes('th') ? "เลขประจำตัวผู้เสียภาษี (TIN) : " : lang.includes('en') ? "TIN :" : "納税者識別番号 (TIN)："} <span itemProp="taxID">0215554005118</span></p>
            </div>
          </div>

          {/* Products */}
          <div className="footer-box">
            <div className="topic-box">
              <h6>{lang.includes('th') ? "ผลิตภัณฑ์" : lang.includes('en') ? "Products" : "製品"}</h6>
            </div>
            <div className="contentFooter-box">
              <ul>
                <li className='li-footer'>
                  <Link href={'/products/engine-mount'} className="link-footer">{lang.includes('th') ? "แผ่นยึดเครื่องยนต์" : lang.includes('en') ? "Engine Mounts" : "エンジンマウント"}</Link>
                </li>
                <li className='li-footer'>
                  <Link href={'/products/suspension-bush'} className="link-footer">{lang.includes('th') ? "บุชซิ่งช่วงล่าง" : lang.includes('en') ? "Suspension Bushings" : "サスペンションブッシュ"}</Link>
                </li>
                <li className='li-footer'>
                  <Link href={'/products/seals'} className="link-footer">{lang.includes('th') ? "ซีลและปะเก็น" : lang.includes('en') ? "Seals & Gaskets" : "シール＆ガスケット"}</Link>
                </li>
                <li className='li-footer'>
                  <Link href={'/products/custom-parts'} className="link-footer">{lang.includes('th') ? "คอลเลกชันผลิตภัณฑ์" : lang.includes('en') ? "Product Collection" : "製品コレクション"}</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* About & Contact */}
          <div className="footer-box">
            <div className="footer-box2">
              <div className="topic-box">
                <h6>{lang.includes('th') ? "เกี่ยวกับเรา" : lang.includes('en') ? "About Us" : "会社概要"}</h6>
              </div>
              <div className="contentFooter-box">
                <ul>
                  <li className='li-footer'>
                    <Link href={'/about'} className="link-footer">{lang.includes('th') ? "ข้อมูลบริษัท" : lang.includes('en') ? "Company Profile" : "会社概要"}</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="footer-box2">
              <div className="topic-box">
                <h6>{lang.includes('th') ? "ติดต่อเรา" : lang.includes('en') ? "Contact Us" : "お問い合わせ"}</h6>
              </div>
              <div className="contentFooter-box">
                <ul>
                  <li className='li-footer'>
                    <Link href={'/contact'} className="link-footer">{lang.includes('th') ? "ส่งข้อความถึงเรา" : lang.includes('en') ? "Send Us a Message" : "メッセージを送る"}</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* News & Blog */}
          <div className="footer-box">
            <div className="topic-box">
              <h6>{lang.includes('th') ? "ข่าวสาร" : lang.includes('en') ? "News" : "ニュース"}</h6>
            </div>
            <div className="contentFooter-box">
              <ul>
                <li className='li-footer'>
                  <Link href={'/news'} className="link-footer">{lang.includes('th') ? "ข่าวสาร" : lang.includes('en') ? "News" : "ニュース"}</Link>
                </li>

              </ul>
            </div>
          </div>

          {/* Activities */}
          <div className="footer-box">
            <div className="footer-box2">
              <div className="topic-box">
                <h6>{lang.includes('th') ? "กิจกรรม" : lang.includes('en') ? "Activities" : "活動"}</h6>
              </div>
            </div>
            <div className="contentFooter-box">
              <ul>
                <li className='li-footer'>
                  <Link href={'/activities'} className="link-footer">{lang.includes('th') ? "กิจกรรม" : lang.includes('en') ? "Activities" : "活動"}</Link>
                </li>
              </ul>
            </div>

            <div className="footer-box2">
              <div className="topic-box">
                <h6>Google Map</h6>
              </div>
              <div className="contentFooter-box">
                <div className="map-container">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.1518657435113!2d101.03399597572438!3d13.089560112279843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3102c7dc30976c73%3A0x4d5814b37d43e107!2sJIEI(Thailand)%20Co.%2CLtd.!5e0!3m2!1sen!2sth!4v1760580362373!5m2!1sen!2sth"
                    width="100%"
                    height="150"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>

                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="bottom-footer">
          <p>{lang.includes('th') ? `ลิขสิทธิ์ © 2025 บริษัท เจไออี (ประเทศไทย) จำกัด | ผู้ผลิตชิ้นส่วนยางยานยนต์ในจังหวัดชลบุรี ประเทศไทย || อัปเดตเมื่อ ${dateTH}` : lang.includes('en') ? `Copyright © 2025 JIEI (Thailand) Co., Ltd. | Automotive Rubber Parts Manufacturer in Chonburi, Thailand || Update on ${dateEN}` : `著作権 © 2025 JIEI（タイ）株式会社｜タイ・チョンブリー県の自動車用ゴム部品メーカー || 更新日 ${dateJP}`}</p>
        </div>
      </footer>
    </div>
  )
}
