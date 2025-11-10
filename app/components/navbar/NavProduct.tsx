'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { useState , useEffect ,useRef} from 'react'
export default function NavProduct() {
      const [scrolled, setScrolled] = useState(false);
      const [menu, setMenu] = useState(false)
    
    
      const [lang, setLang] = useState<'th' | 'en' | 'jp'>('th');
    
    
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

    const Path = usePathname()
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

})
  return (
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
  )
}
