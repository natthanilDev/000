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

const menuCheckboxRef = useRef<HTMLInputElement>(null);

    const menuCheck = useRef<HTMLInputElement>(null);
    const closeMenu = () => {
        if (menuCheckboxRef.current) {
            menuCheckboxRef.current.checked = false
        }
        if (menuCheck.current) {
            menuCheck.current.checked = false
        }
    };
  const [lang, setLang] = useState<'th' | 'en' | 'jp'>('th');









  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = e.target.value as 'th' | 'en' | 'jp'
    setLang(selected)

    localStorage.setItem('lang', selected);

    localStorage.setItem('lang', selected);
    setLang(selected);
    window.location.reload();
  }



  const MenuTH = [
    "เกี่ยวกับเรา",
    "ข่าวสารและกิจกรรม",
    "เทคโนโลยี",
    "เครือข่าย",
    "ติดต่อเรา"
  ]
  const MenuEN = [
    'About Us',
    'News & Activities',
    'Technologies',
    'Network',
    'Contact Us'
  ]
  const MenuPath = [
    '/about',
    '/news',
    '/technologies',
    '/network',
    '/contact'
  ]
  const MenuJP = [

    '会社概要',
    'ニュースとイベント',
    'テクノロジー',
    'ネットワーク',
    'お問い合わせ'
  ]
  const MenuProductTH = [
        'แท่นยึดเครื่องยนต์',
        'ยางรองบูชระบบกันสะเทือน',
        'ซีลและปะเก็น',
        'ผลิตภัณฑ์สั่งคำพิเศษ',
    ]
    const MenuProductEN = [
        'Engine Mounts',
        'Suspension Bushings',
        'Seals & Gaskets',
        'Products Collection',
    ]
    const MenuProductJP = [
        'エンジンマウント',
        'サスペンションブッシュ',
        'シール＆ガスケット',
        'すべての製品',
    ]

    const MenuProductPath = [
        '/products/engine-mount',
        '/products/suspension-bush',
        '/products/seals',
        '/products/custom-parts',
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
          <Link href="/" aria-label="กลับไปหน้าแรก JIEI Thailand" title="JIEI Thailand - Automotive Rubber Parts Manufacturer">
            <Image
              src="/jiei-thailand-logo.png"
              alt="JIEI Thailand Logo - Leading Automotive Rubber Parts Manufacturer in Thailand"
              width={1000}
              height={1000}
              priority
              className='image-logo'
            />
          </Link>
          <div className="nav-link-box" >

            <div className="icon-menu">
              <label onClick={() => { setMenu(!menu) }} htmlFor="icon-menu-show" aria-label="Toggle navigation menu" aria-expanded="false" aria-controls="main-navigation" className="icon-menu-label">
                <i className={menu === true ? "bi bi-x" : "bi bi-list"}></i>
              </label>
              <input ref={menuCheckboxRef} type="checkbox" className="icon-menu-show" id="icon-menu-show" />

              <ul id="main-navigation" className="ul-navigation">
                <li onClick={closeMenu} className={`li-menu ${Path === '/' || Path === "/iso9001" || Path === "/iso14001" || Path === "/iatf16949" ? 'path' : ''}`} >
                  <Link href="/" className="nav-link" title="JIEI Thailand Homepage - Automotive Rubber Parts Manufacturer">
                    {lang === ('th') ? 'หน้าแรก' : lang === ('en') ? 'Home' : 'ホーム'}
                  </Link>
                </li>

          {/* <NavProduct /> */}
          <div>
            <li className={`li-menu ${Path === '/products/engine-mount' || Path === '/products/suspension-bush' || Path === '/products/seals' || Path === '/products/custom-parts' ? 'path' : ''}`}>
                <div className="hover-for-show-product">
                    <input type="checkbox" className="dropdown-menu" id="dropdown-menu" ref={menuCheck} />
                    <span className="nav-link">
                        <label htmlFor="dropdown-menu">
                            <span className='category-product'>{lang === ('th') ? "คอลเลกชันผลิตภัณฑ์" : lang === ('en') ? "Products Collection" : "製品"}</span>
                        </label>
                    </span>
                    <i className="chevron-down bi bi-chevron-down"></i>
                    <div className="product-jiei-thai">
                        <ul className="ul-product">
                            {MenuProductTH.map((item, index) => (
                                <li key={index} className={`li-product${index + 1} ${Path === MenuProductPath[index] ? 'path' : ''}`} >
                                    <Link
                                        onClick={closeMenu} href={`${MenuProductPath[index]}`}
                                        className="Link-product-class"
                                        title="Engine Mounts - Automotive Rubber Parts JIEI Thailand">
                                        {lang === ('th') ? item : lang === ('en') ? MenuProductEN[index] : MenuProductJP[index]}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </li>
        </div>
               

                {MenuTH.map((item, index) => (
                  <li key={index} className={` li-menu ${Path === `${MenuPath[index]}` ? 'path' : ''}`}>
                    <Link
                      onClick={closeMenu} href={`${MenuPath[index]}`}
                      className="nav-link"
                      title="JIEI(THAILAND).CO.,LTD ผลิตยางเกี่ยวกับรถยนต์ ชลบุรี">
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
