'use client'
import { usePathname } from "next/navigation"
// import { useEffect, useState } from "react"
import Link from "next/link"
export default function Location() {
  // const [lang, setLang] = useState<'th' | 'en' | 'jp'>('th')
  const PathName = usePathname()
  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     const stored = localStorage.getItem('lang') as 'th' | 'en' | 'jp' | null
  //     if (stored) setLang(stored)
  //   }

  // }, [])
  return (
    <div className="location-tack">

      <Link className="location_link" href={"/"}>{"Home"}</Link>
      {PathName === '/' ? "" : " > "}  
      <Link className="location_link" href={PathName}>
      {
        PathName == '/about' ? "About" 
      : PathName == '/products/engine-mount' ? "Products > Engine-mount" 
      : PathName == '/products/suspension-bush' ? "Products > Suspension-bush" 
      : PathName == '/products/seals' ? "Products > Seals" 
      : PathName == '/products/custom-parts' ? "Products > Custom-parts" 
      : PathName == '/activities' ? "Activities" 
      : PathName == '/technologies' ? "Technologies" 
      : PathName == '/network' ? "Network"
      : PathName == '/news' ? "News" 
      : PathName == '/contact' ? "Contact" 
      : PathName == '/iso9001' ? "ISO9001"
      : PathName == '/iso14001' ? "ISO14001"
      : PathName == '/iatf16949' ? 'IATF16949'
      : ""
      }
      </Link>
      
    </div>
  )
}
