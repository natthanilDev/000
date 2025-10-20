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


  const [lang, setLang] = useState<'th' | 'en' | 'jp'>('th');
  useEffect(() => {
    const storedLang = localStorage.getItem('lang') as 'th' | 'en' | 'jp' | null;
    if (storedLang) setLang(storedLang);
  }, []);

  const menuCheckboxRef = useRef<HTMLInputElement>(null);

  const menuCheck = useRef<HTMLInputElement>(null);



  const closeMenu = () => {
    setMenu(false)
    if (menuCheckboxRef.current) {
      menuCheckboxRef.current.checked = false
    }
    if (menuCheck.current) {
      menuCheck.current.checked = false
    }
  };




  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = e.target.value as 'th' | 'en' | 'jp'
    setLang(selected)

    localStorage.setItem('lang', selected);

    localStorage.setItem('lang', selected);
    setLang(selected);
    window.location.reload();
  }

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

    <header
      className={`header ${scrolled ? "scrolled" : ""}`}
      role="banner"
      aria-label="JIEI Thailand Main Header" >

      <nav className="navbar" role="navigation" aria-label="Main Navigation">
        <div className="container-box">
          <div className="nav-link-box" >
            <div className="icon-menu">

              <label onClick={() => {
                setMenu(!menu)
              }

              } htmlFor="icon-menu-show"
                aria-label="Toggle navigation menu"
                aria-expanded="false"
                aria-controls="main-navigation"
                className="icon-menu-label">
                <i className={menu === true ? "bi bi-x" : "bi bi-list"}></i>
              </label>
              <input
                ref={menuCheckboxRef}
                type="checkbox"
                className="icon-menu-show"
                id="icon-menu-show"
              />
              <ul id="main-navigation" className="ul-navigation">
                <li onClick={closeMenu} className={`li-menu ${Path === '/' || Path === "/iso9001" || Path === "/iso14001" || Path === "/iatf16949" ? 'path' : ''}`} >
                  <Link href="/" className="nav-link" title="JIEI Thailand Homepage - Automotive Rubber Parts Manufacturer">
                    {lang === 'th' ? 'หน้าแรก' : lang === 'en' ? 'Home' : 'ホーム'}
                  </Link>
                </li>

                <li className={`li-menu ${Path === '/products/engine-mount' || Path === '/products/engine-mount' || Path === '/products/suspension-bush' || Path === '/products/seals' || Path === '/products/custom-parts' ? 'path' : ''}`}>
                  <div className="hover-for-show-product">
                    <input
                      type="checkbox"
                      className="dropdown-menu"
                      id="dropdown-menu"
                      ref={menuCheck}
                    />
                    <span className="nav-link">
                      <label htmlFor="dropdown-menu">
                      <span className='category-product'>{lang === 'th' ? "คอลเลกชันสินค้า" : lang === "en" ? "Products Collection" : "製品"}</span>  
                      </label>
                    </span>
                    <i className="chevron-down bi bi-chevron-down"></i>

                    <div className="product-jiei-thai">
                      <ul className="ul-product">
                        <li className={`li-product1 ${Path === '/products/engine-mount' ? 'path' : ''}`} >
                          <Link
                            onClick={closeMenu} href="/products/engine-mount"
                            className="Link-product-class"
                            title="Engine Mounts - Automotive Rubber Parts JIEI Thailand">
                            {lang === 'th' ? "แท่นยึดเครื่องยนต์" : lang === "en" ? "Engine Mounts" : "エンジンマウント"}
                          </Link>
                        </li>
                        <li className={`li-product2 ${Path === '/products/suspension-bush' ? 'path' : ''}`} >
                          <Link
                            onClick={closeMenu} href="/products/suspension-bush"
                            className="Link-product-class"
                            title="Suspension Bushings - OEM Rubber Parts JIEI Thailand" >
                            {lang === 'th' ? "ยางรองบูชระบบกันสะเทือน" : lang === "en" ? "Suspension Bushings" : "サスペンションブッシュ"}
                          </Link>
                        </li>
                        <li className={`li-product3 ${Path === '/products/seals' ? 'path' : ''}`} >
                          <Link
                            onClick={closeMenu} href="/products/seals"
                            className="Link-product-class"
                            title="Seals & Gaskets - Automotive Rubber Sealing Solutions">
                            {lang === 'th' ? "ซีลและปะเก็น" : lang === "en" ? "Seals & Gaskets" : "シール＆ガスケット"}
                          </Link>
                        </li>
                        <li className={`li-product4 ${Path === '/products/custom-parts' ? 'path' : ''}`} >
                          <Link
                            onClick={closeMenu} href="/products/custom-parts"
                            className="Link-product-class"
                            title="Custom Rubber Parts Manufacturing Thailand">
                            {lang === 'th' ? "คอลเลกชันผลิตภัณฑ์" : lang === "en" ? "Products Collection" : "すべての製品"}
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className={`li-menu ${Path === '/about' ? 'path' : ''}`}>
                  <Link
                    onClick={closeMenu} href="/about"
                    className="nav-link"
                    title="About JIEI Thailand - Rubber Parts Manufacturer">
                    {lang === 'th' ? "เกี่ยวกับเรา" : lang === "en" ? "About Us" : "会社概要"}
                  </Link>
                </li>
                <li className={`li-menu ${Path === '/activities' ? 'path' : ''}`}>
                  <Link
                    onClick={closeMenu} href="/activities"
                    className="nav-link"
                    title="JIEI Thailand Activities - กิจกรรม โรงงานผู้ผลิตชิ้นส่วนยางรถยนต์"
                    aria-label="JIEI Thailand Activities - กิจกรรม และข่าวสารจากโรงงานผู้ผลิตชิ้นส่วนยางรถยนต์">
                    {lang === 'th' ? "กิจกรรม" : lang === "en" ? "Activities" : "活動内容"}

                  </Link>
                </li>
                <li className={`li-menu ${Path === '/technologies' ? 'path' : ''}`}>
                  <Link onClick={closeMenu} href="/technologies" className="nav-link" title="JIEI Thailand Homepage - Automotive Rubber Parts Manufacturer">
                    {lang === 'th' ? "เทคโนโลยี" : lang === "en" ? "Technologies" : "テクノロジー"}
                  </Link>
                </li>
                <li className={`li-menu ${Path === '/network' ? 'path' : ''}`}>
                  <Link onClick={closeMenu} href="/network" className="nav-link" title="JIEI Thailand Homepage - Automotive Rubber Parts Manufacturer">
                    {lang === 'th' ? "เครือข่าย" : lang === "en" ? "Network" : "ネットワーク"}
                  </Link>
                </li>

                <li className={`li-menu ${Path === '/news' ? 'path' : ''}`}>
                  <Link
                    onClick={closeMenu} href="/news"
                    className="nav-link"
                    title="News & Blog - JIEI Thailand Updates">
                    {lang === 'th' ? "ข่าวและบทความ" : lang === "en" ? "News & Blog" : "ニュース＆ブログ"}
                  </Link>
                </li>
                <li className={` li-menu ${Path === '/contact' ? 'path' : ''}`}>
                  <Link
                    onClick={closeMenu} href="/contact"
                    className="nav-link"
                    title="Contact JIEI Thailand - OEM Rubber Parts Manufacturer">
                    {lang === 'th' ? "ติดต่อเรา" : lang === "en" ? "Contact Us" : "お問い合わせ"}

                  </Link>
                </li>

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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "JIEI Thailand Co., Ltd.",
            url: "https://www.jiei-thai.co.th",
            logo: "https://www.jiei-thai.co.th/jiei-thailand-logo.png",
            contactPoint: [
              {
                "@type": "ContactPoint",
                telephone: "+66-33-136581-4",
                contactType: "customer service",
                areaServed: "TH",
                availableLanguage: ["Thai", "English", "Japan"],
              },
            ],
            sameAs: [
              "https://www.facebook.com/jiei.thailand",
              "https://www.linkedin.com/company/jiei-thailand",
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SiteNavigationElement",
            name: [
              "Home",
              "Automotive Rubber Parts",
              "Engine Mounts",
              "Suspension Bushings",
              "Seals & Gaskets",
              "Custom Rubber Parts",
              "About Us",
              "News & Blog",
              "Contact Us",
            ],
            url: [
              "https://www.jiei-thai.co.th/",
              "https://www.jiei-thai.co.th/products",
              "https://www.jiei-thai.co.th/products/engine-mount",
              "https://www.jiei-thai.co.th/products/suspension-bush",
              "https://www.jiei-thai.co.th/products/seals",
              "https://www.jiei-thai.co.th/products/custom-parts",
              "https://www.jiei-thai.co.th/about",
              "https://www.jiei-thai.co.th/news",
              "https://www.jiei-thai.co.th/contact",
            ],
          }),
        }}
      />
    </header>
  )
}
