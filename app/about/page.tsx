import About from "../components/about/about"

export default function page() {
  const seo = (
    <>
    
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "JIEI (Thailand) Co., Ltd.",
          "url": "https://jiei-thai.co.th",
          "logo": "https://jiei-thai.co.th/logo.png",
          "description": "ผู้ผลิตชิ้นส่วนยางรถยนต์คุณภาพสูง จังหวัดชลบุรี ได้รับมาตรฐาน ISO/IATF16949",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Pinthong 4 Industrial Estate, Unit G18, 180/3 Moo 6, T.Bueng, A.Sriracha, Chonburi 20230",
            "addressCountry": "Thailand"
          },
          "sameAs": [
            "https://www.facebook.com/jieithai",
            "https://www.linkedin.com/company/jiei-thailand"
          ]
        })
      }} />
    </>
  )
  return (
    <div>
      <About />
      {seo}
    </div>
  )
}
