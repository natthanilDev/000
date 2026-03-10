"use client";
import React from 'react'
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useRef } from 'react';

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
    "คอลเลกชันผลิตภัณฑ์",
    "ข่าวสารและกิจกรรม",
    "เครือข่าย",


    "ติดต่อเรา"
  ]
  const MenuEN = [
    'Home',
    'About Us',
    'Technologies',
    'Products Collection',
    'News & Activities',
    'Network',
    'Contact Us'
  ]
  const MenuPathLink = [
    '/',
    '/about',
    '/technologies',
    '/products',
    '/news',
    '/network',
    '/contact'
  ]

  const MenuPath = [
    '',
    'about/',
    'technologies/',
    'products/',
    'news/',
    'network/',
    'contact/'
  ]
  const MenuJP = [
    'ホーム',
    '会社概要',
    'テクノロジー',
    '製品',
    'ニュースとイベント',
    'ネットワーク',
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
      className={`header`}
      role="banner"
      aria-label="JIEI Thailand Main Header" >
        
        {/* <div className={`top-navigation`}>
            <div className="topbar-box">
                <div className="logo-box">
                    <Image src={"/logo.svg"} className='topbar-logo' alt='' height={1000} width={1000} />
                </div>

                <div className="top-navigation-phone">
                    <Link className={`top-navigation-Link ${scrolled ? "bg-link" : ""}`    }href="tel:+6633136581" aria-label="โทรติดต่อ JIEI Thailand" title="Phone: 033-136581-4">
                        <i className="icon-top-navigation bi bi-telephone-fill"></i> 033-136581-4 
                    </Link>
                </div>
            </div>
        </div> */}

      <nav className="navbar" role="navigation" aria-label="Main Navigation">
        <div className="container-box">

          <div className="nav-link-box" >

            <div className="icon-menu">

              <input type="checkbox" className="icon-menu-show" id="icon-menu-show" />
              <div className="box-icon-menu">
                <label htmlFor="icon-menu-show" aria-label="Toggle navigation menu" aria-expanded="false" aria-controls="main-navigation" className="icon-menu-label">

                  <div className="div-menu-box">
                    <div className="menu-div1" />
                    <div className="menu-div2" />
                    <div className="menu-div3" />
                  </div>
                </label>
              </div>



              <ul id="main-navigation" className={`ul-navigation  ${scrolled ? "scrolled" : ""}`}>

                {MenuTH.map((item, index) => (
                  <li  key={index} className={`li-menu ${pathName.startsWith(`${MenuPath[index]}`) ? 'path' : ''}`}>
                    <Link onClick={closeMenu} href={`${MenuPathLink[index]}`} className="nav-link" title="JIEI(THAILAND).CO.,LTD ผลิตยางเกี่ยวกับรถยนต์ ชลบุรี">
                      {lang === ('th') ? item : lang === ('en') ? MenuEN[index] : MenuJP[index]}
                    </Link>
                  </li>
                ))}

                <div className="lang-select">
                  <label htmlFor="language" className="sr-only">Language</label>
                  <select id="language" value={lang} className='language bg-white' onChange={onChange} aria-label="Select language">
                    <option className='option ' value="th">TH</option>
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
