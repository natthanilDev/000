"use client";
import React from 'react'
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useRef } from 'react';
import Image from 'next/image';
export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const Path = usePathname()
  const [menu, setMenu] = useState(false)
  const pathName = Path.replace('/', '')
  const menuCheckboxRef = useRef<HTMLInputElement>(null);
  const menuCheck = useRef<HTMLInputElement>(null);

  const closeMenu = () => {
    if (menuCheckboxRef.current) {
      menuCheckboxRef.current.checked = false
    }
    if (menuCheck.current) {
      menuCheck.current.checked = false
    }
    setMenu(!menu)

  };
  const [lang, setLang] = useState<'th' | 'en' | 'jp'>('th');


  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = e.target.value as 'th' | 'en' | 'jp'
    setLang(selected)

    localStorage.setItem('lang', selected);

    setLang(selected);
    window.location.reload();
  }

  const MenuTH = [
    "หน้าแรก",
    "เกี่ยวกับเรา",
    "เทคโนโลยี",
    "เครือข่าย",
    "คอลเลกชันผลิตภัณฑ์",
    "ข่าวสารและกิจกรรม",
    "ติดต่อเรา"
  ]
  const MenuEN = [
    'Home',
    'About Us',
    'Technologies',
    'Network',
    'Products Collection',
    'News & Activities',
    'Contact Us'
  ]
  const MenuPathLink = [
    '/',
    '/about/',
    '/technologies/',
    '/network/',
    '/products/',
    '/news/',
    '/contact/'
  ]

  const MenuPath = [
    '',
    'about/',
    'technologies/',
    'network/',
    'products/',
    'news/',
    'contact/'
  ]
  const MenuJP = [
    'ホーム',
    '会社概要',
    'テクノロジー',
    'ネットワーク',
    '製品',
    'ニュースとイベント',
    'お問い合わせ'
  ]


  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedLang = localStorage.getItem('lang') as 'th' | 'en' | 'jp' | null;
      if (storedLang) setLang(storedLang);
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (

    <header id='top'
      className={`header ${scrolled ? "scrolled" : ""}`}
      role="banner"
      aria-label="JIEI Thailand Main Header" >

      <nav className="navbar" role="navigation" aria-label="Main Navigation">
        <div className="container-box">
          <Link href="/" aria-label="กลับไปหน้าแรก JIEI Thailand" title="ผู้ผลิตชิ้นส่วนยางรถยนต์">
            <Image
              src="/jiei-thailand-logo.png"
              alt="ผลิตภัณฑ์ยางรถยนต์ JIEI Thailand โลโก้"
              width={1000}
              height={1000}
              priority
              className='image-logo'
            />
          </Link>
          <div className="nav-link-box" >

            <div className="icon-menu">
              <input ref={menuCheckboxRef} type="checkbox" className="icon-menu-show" id="icon-menu-show" />

              <label onClick={() => { setMenu(!menu) }} htmlFor="icon-menu-show" aria-label="Toggle navigation menu" aria-expanded="false" aria-controls="main-navigation" className="icon-menu-label">
                {/* <i className={menu === true ? "bi bi-x" : "bi bi-list"}></i> */}
                <div className="div-menu-box">
                  <div className="menu-div" />
                  <div className="menu-div" />
                  <div className="menu-div" />
                </div>
              </label>


              <ul id="main-navigation" className="ul-navigation">

                {MenuTH.map((item, index) => (
                  <li key={index} className={`li-menu ${pathName.startsWith(`${MenuPath[index]}`) ? 'path' : ''}`}>
                    <Link onClick={closeMenu} href={`${MenuPathLink[index]}`} className="nav-link" title="JIEI(THAILAND).CO.,LTD ผลิตยางเกี่ยวกับรถยนต์ ชลบุรี">
                      {lang === ('th') ? item : lang === ('en') ? MenuEN[index] : MenuJP[index]}
                    </Link>
                  </li>
                ))}

                <div className="lang-select">
                  <label htmlFor="language" className="sr-only">Language</label>
                  <select id="language" value={lang} className='language' onChange={onChange} aria-label="Select language">
                    <option className='option' value="th">TH</option>
                    <option className='option' value="en">EN</option>
                    <option className='option' value="jp">JP</option>
                  </select>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </nav>

    </header>
  )
}
