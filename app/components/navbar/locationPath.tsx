"use client";
import React from 'react'
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const Path = usePathname()

  useEffect(() => {
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
      aria-label="JIEI Thailand Main Header"
    >
      {/* Main Navigation */}
      <nav className="navbar" role="navigation" aria-label="Main Navigation">
        <div className="container-box">
          <div className="nav-link-box">
            <div className="icon-menu">
              <label htmlFor="icon-menu-show"
                aria-label="Toggle navigation menu"
                aria-expanded="false"
                aria-controls="main-navigation"
                className="icon-menu-label">
                <i className="bi bi-list"></i>
              </label>
              <input type="checkbox" className="icon-menu-show" id="icon-menu-show" />
              <ul id="main-navigation" className="ul-navigation">
                <li className={` li-menu ${Path === '/' ? 'path' : ''}`}>
                  <Link href="/" className="nav-link" title="JIEI Thailand Homepage - Automotive Rubber Parts Manufacturer">
                    Home
                  </Link>
                </li>

                {/* ✅ Dropdown Products */}
                <li className={`li-menu ${Path === '/products/engine-mount' || Path === '/products/engine-mount' || Path === '/products/suspension-bush' || Path === '/products/seals' || Path === '/products/custom-parts' ? 'path' : ''}`}>
                  <div className="hover-for-show-product">
                    <input
                      type="checkbox"
                      className="dropdown-menu"
                      id="dropdown-menu"
                    />
                    <span className={`nav-link`} >
                      <label htmlFor="dropdown-menu">
                        Automotive Rubber Parts
                      </label>
                    </span>
                    <i className="chevron-down bi bi-chevron-down"></i>

                    <div className="product-jiei-thai">
                      <ul className="ul-product">
                        <li className={`li-product ${Path === '/products/engine-mount' ? 'path' : ''}`} >
                          <Link
                            href="/products/engine-mount"
                            className="Link-product-class"
                            title="Engine Mounts - Automotive Rubber Parts JIEI Thailand"
                          >
                            Engine Mounts
                          </Link>
                        </li>
                        <li className={`li-product ${Path === '/products/suspension-bush' ? 'path' : ''}`} >
                          <Link
                            href="/products/suspension-bush"
                            className="Link-product-class"
                            title="Suspension Bushings - OEM Rubber Parts JIEI Thailand"
                          >
                            Suspension Bushings
                          </Link>
                        </li>
                        <li className={`li-product ${Path === '/products/seals' ? 'path' : ''}`} >
                          <Link
                            href="/products/seals"
                            className="Link-product-class"
                            title="Seals & Gaskets - Automotive Rubber Sealing Solutions"
                          >
                            Seals & Gaskets
                          </Link>
                        </li>
                        <li className={`li-product ${Path === '/products/custom-parts' ? 'path' : ''}`} >
                          <Link
                            href="/products/custom-parts"
                            className="Link-product-class"
                            title="Custom Rubber Parts Manufacturing Thailand"
                          >
                            Custom Rubber Parts
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>

                {/* ✅ Other Pages */}
                <li className={` li-menu ${Path === '/about' ? 'path' : ''}`}>
                  <Link
                    href="/about"
                    className="nav-link"
                    title="About JIEI Thailand - Rubber Parts Manufacturer"
                  >
                    About Us
                  </Link>
                </li>

                <li className={` li-menu ${Path === '/activities' ? 'path' : ''}`}>
                  <Link
                    href="/activities?page=1"
                    className="nav-link"
                    title="JIEI Thailand Activities - กิจกรรม โรงงานผู้ผลิตชิ้นส่วนยางรถยนต์"
                    aria-label="JIEI Thailand Activities - กิจกรรม และข่าวสารจากโรงงานผู้ผลิตชิ้นส่วนยางรถยนต์"
                  >
                    Activities
                  </Link>
                </li>


                <li className={` li-menu ${Path === '/news' ? 'path' : ''}`}>
                  <Link
                    href="/news"
                    className="nav-link"
                    title="News & Blog - JIEI Thailand Updates"
                  >
                    News & Blog
                  </Link>
                </li>
                <li className={` li-menu ${Path === '/contact' ? 'path' : ''}`}>
                  <Link
                    href="/contact"
                    className="nav-link"
                    title="Contact JIEI Thailand - OEM Rubber Parts Manufacturer"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      {/* ✅ Structured Data for SEO */}
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
                availableLanguage: ["Thai", "English"],
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
