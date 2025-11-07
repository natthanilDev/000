'use client'
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import Link from "next/link"
export default function Location() {
  const [lang, setLang] = useState<'th' | 'en' | 'jp'>('th')
  const PathName = usePathname()
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('lang') as 'th' | 'en' | 'jp' | null
      if (stored) setLang(stored)
    }
  }, [])
  return (
    <div className="location-tack">
      {lang===('th') ? <Link className="location_link" href={"/"}>{"หน้าแรก"}</Link>
        : lang===('en') ? <Link className="location_link" href={"/"}>{"Home"}</Link> : "ホーム"}
      {PathName === '/' ? "" : " > "}
      <Link className="location_link" href={PathName}>
        {lang===('en') ?
          PathName == '/about' ? "About"
            : PathName == '/products/engine-mount' ? "Products > Engine-mount"
              : PathName == '/products/suspension-bush' ? "Products > Suspension-bush"
                : PathName == '/products/seals' ? "Products > Seals"
                  : PathName == '/products/custom-parts' ? "Products > Custom-parts"
                    // : PathName == '/activities' ? "Activities"
                      : PathName == '/technologies' ? "Technologies"
                        : PathName == '/network' ? "Network"
                          : PathName == '/news' ? "News & Activities"
                            : PathName == '/contact' ? "Contact"
                              : PathName == '/iso9001' ? "ISO9001"
                                : PathName == '/iso14001' ? "ISO14001"
                                  : PathName == '/iatf16949' ? 'IATF16949'
                                    : ""
          : lang===('th') ?
            PathName == '/about' ? "เกี่ยวกับเรา"
              : PathName == '/products/engine-mount' ? "สินค้า > แท่นเครื่องยนต์"
                : PathName == '/products/suspension-bush' ? "สินค้า > บูชช่วงล่าง"
                  : PathName == '/products/seals' ? "สินค้า > ซีลยาง"
                    : PathName == '/products/custom-parts' ? "สินค้า > ชิ้นส่วนสั่งผลิตพิเศษ"
                      // : PathName == '/activities' ? "ข่าวสารและกิจกรรม"
                        : PathName == '/technologies' ? "เทคโนโลยี"
                          : PathName == '/network' ? "เครือข่าย"
                            : PathName == '/news' ? "ข่าวสารและกิจกรรม"
                            : PathName == '/contact' ? "ติดต่อเรา"
                              : PathName == '/iso9001' ? "มาตรฐาน ISO9001"
                                : PathName == '/iso14001' ? "มาตรฐาน ISO14001"
                                  : PathName == '/iatf16949' ? 'มาตรฐาน IATF16949'
                                    : ""
            : PathName == '/about' ? "会社概要（かいしゃがいよう）"
              : PathName == '/products/engine-mount' ? "製品 > エンジンマウント"
                : PathName == '/products/suspension-bush' ? "製品 > サスペンションブッシュ"
                  : PathName == '/products/seals' ? "製品 > シール"
                    : PathName == '/products/custom-parts' ? "製品 > カスタムパーツ"
                      // : PathName == '/activities' ? "活動（かつどう）"
                        : PathName == '/technologies' ? "技術（ぎじゅつ）"
                          : PathName == '/network' ? "ネットワーク"
                            : PathName == '/news' ? "ニュースと活動"
                            : PathName == '/contact' ? "お問い合わせ（おといあわせ）"
                              : PathName == '/iso9001' ? " ISO9001"
                                : PathName == '/iso14001' ? " ISO14001"
                                  : PathName == '/iatf16949' ? ' IATF16949'
                                    : ""
        }
      </Link>

    </div>
  )
}
