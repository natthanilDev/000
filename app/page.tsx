import Home from "./components/index"

export default function page() {
  const seo = [
    <>
    <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        name: "JIEI Thailand Co., Ltd.",
                        url: "https://www.jiei-thai.co.th",
                        logo: "https://www.jiei-thai.co.th/jiei-thailand-logo.png",
                        sameAs: [
                            "https://www.facebook.com/jieithailand",
                            "https://www.linkedin.com/company/jiei-thailand"
                        ],
                        contactPoint: [
                            {
                                "@type": "ContactPoint",
                                telephone: "+66-33-136581-4",
                                contactType: "customer service",
                                areaServed: "TH",
                                availableLanguage: ["Thai", "English", "Japanese"]
                            }
                        ],
                        mainEntity: [
                            {
                                "@type": "Question",
                                name: "ยางขอบประตูรถยนต์มีประโยชน์อะไร?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "ช่วยป้องกันเสียงรบกวน น้ำ ฝุ่น รักษาอุณหภูมิ และทำให้การปิดประตูนุ่มนวลขึ้น"
                                }
                            },
                            {
                                "@type": "Question",
                                name: "JIEI Thailand ตั้งอยู่ที่ไหน?",
                                acceptedAnswer: {
                                    "@type": "Answer",
                                    text: "ตั้งอยู่ที่จังหวัดชลบุรี ประเทศไทย"
                                }
                            }
                        ]
                    })
                }}
            />
    </>
  ]
  return (
    <div>
      <Home />
      {seo}
    </div>
  )
}
