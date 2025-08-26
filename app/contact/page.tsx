import React from 'react'
import Head from 'next/head'
import Form_contact from '../components/form_contact/form_contact'

export default function Contact() {

  const icon = [
    "icon-contact bi bi-telephone-fill",
    "icon-contact bi bi-globe",
    "icon-contact bi bi-envelope-at-fill",
    "icon-contact bi bi-geo-alt-fill"
  ]

  const title = [
    "Phone",
    "Website",
    "E-Mail",
    "Address"
  ]

  const contact = [
    '033-136581-4',
    'https://jieithai.co.th',
    'info@jiei-thai.co.th',
    'Pinthong 4 Industrial Estate, Unit G18, 180/3 Moo 6, T.Bueng, A.Sriracha, Chonburi 20230 Thailand'
  ]

  return (
    <div className='contact-box'>
      <Head>
        <title>Contact Us | JIEI Thailand</title>
        <meta name="description" content="Get in touch with JIEI Thailand. Contact us via phone, email, or visit our address in Chonburi. We’re here to help you!" />
        <link rel="canonical" href="https://www.jiei-thai.co.th/contact" />

        {/* Open Graph */}
        <meta property="og:title" content="Contact Us | JIEI Thailand" />
        <meta property="og:description" content="Get in touch with JIEI Thailand. Contact us via phone, email, or visit our address in Chonburi. We’re here to help you!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.jiei-thai.co.th/contact" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Contact Us | JIEI Thailand" />
        <meta name="twitter:description" content="Get in touch with JIEI Thailand. Contact us via phone, email, or visit our address in Chonburi. We’re here to help you!" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "JIEI Thailand",
              "url": "https://www.jiei-thai.co.th",
              "logo": "https://www.jiei-thai.co.th/logo.png",
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": "033-136581-4",
                  "contactType": "Customer Service",
                  "areaServed": "TH",
                  "availableLanguage": ["Thai", "English"]
                },
                {
                  "@type": "ContactPoint",
                  "email": "info@jiei-thai.co.th",
                  "contactType": "Customer Support",
                  "areaServed": "TH",
                  "availableLanguage": ["Thai", "English"]
                }
              ],
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
      </Head>

      <div className="contact-level">
        <div className="contact-contactUs">
          <div className="box-w">
            <h1 className='contactUsTitle'>CONTACT US</h1>
            <h5 className='here-you'>We’re here to help you!</h5>
            <div className="line-contact"></div>

            <div className="container-icon">
              {icon.map((item, index) => (
                <div key={index} className="contact-box-icon">
                  <div className="icon">
                    <i className={item}></i>
                  </div>
                  <div className="title-box-icon">
                    <p className="text-icon">{title[index]}</p>
                    <p>{contact[index]}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="contact-form">
          <Form_contact />  
        </div>
      </div>
    </div>
  )
}
