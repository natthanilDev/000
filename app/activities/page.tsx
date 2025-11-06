import Activities from '../components/activities/activities'

export default function page() {
  const seo = (
    <>
      <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "JIEI Thailand",
              "url": "https://www.jiei-thai.co.th",
              "logo": "https://www.jiei-thai.co.th/logo.png",
              "description": "ผู้ผลิตชิ้นส่วนยางรถยนต์คุณภาพสูงในจังหวัดชลบุรี ได้รับมาตรฐาน ISO9001, ISO14001, IATF16949",
              "contactPoint": [{
                "@type": "ContactPoint",
                "telephone": "033-136581-4",
                "contactType": "Customer Service",
                "areaServed": "TH",
                "availableLanguage": ["Thai", "English", "Japan"]
              }],
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Pinthong 4 Industrial Estate, Unit G18, 180/3 Moo 6",
                "addressLocality": "Si Racha",
                "addressRegion": "Chonburi",
                "postalCode": "20230",
                "addressCountry": "Thailand"
              }
            })
          }}
        />
    </>
  )
  return (
    <div>
      <Activities />
      {seo}
    </div>
  )
}
