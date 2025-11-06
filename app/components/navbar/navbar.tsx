import LocationPath from './locationPath'
export default function Navbar() {
  const SEO = (
    <>

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
    </>



  )
  return (
    <>
      <LocationPath />
      {SEO}

    </>
  );
}
