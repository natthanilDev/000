import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear().toString();

  return (
    <footer itemScope itemType="https://schema.org/Organization">

      <div className="container-footer">
        {/* Company Info */}
        <div className="footer-box" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
          <div className="topic-box">
            <Link href="/" aria-label="กลับไปหน้าแรก JIEI Thailand" title="JIEI Thailand - Automotive Rubber Parts Manufacturer">
              <Image
                src="/jiei-thailand-logo.png"
                alt="JIEI Thailand Logo - Automotive Rubber Parts Manufacturer in Chonburi"
                width={1000}
                height={1000}
                priority
                itemProp="logo"
                className='logo-footer'
              />
            </Link>

          </div>
          <div className="contentFooter-box">
            <h6 className='jiei-footer' itemProp="name">JIEI (Thailand) Co., Ltd.</h6>
            <p className='jiei-footer' itemProp="streetAddress">
              Pinthong 4 Industrial Estate, Unit G18, 180/3 Moo 6, T.Bueng, A.Sriracha, Chonburi 20230 Thailand
            </p>
            <p className='jiei-footer'>Opening Hours : <time itemProp="openingHours" dateTime="Mo-Fr 08:00-17:00">Mon - Fri 8.00 - 17.00</time></p>
            <p className='jiei-footer'>Tel : <a href="tel:+6633136581" itemProp="telephone">033-136581-4</a></p>
            <p className='jiei-footer'>TIN : <span itemProp="taxID">0215554005118</span></p>
          </div>
        </div>

        {/* Products */}
        <div className="footer-box">
          <div className="topic-box">
            <h6>Products</h6>
          </div>
          <div className="contentFooter-box">
            <ul>
              <li className='li-footer'>
                <Link href={'/products/engine-mount'} className="link-footer">Engine Mounts</Link>
              </li>
              <li className='li-footer'>
                <Link href={'/products/suspension-bush'} className="link-footer">Suspension Bushings</Link>
              </li>
              <li className='li-footer'>
                <Link href={'/products/seals'} className="link-footer">Seals &amp; Gaskets</Link>
              </li>
              <li className='li-footer'>
                <Link href={'/products/custom-parts'} className="link-footer">Custom Rubber Parts</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* About & Contact */}
        <div className="footer-box">
          <div className="footer-box2">
            <div className="topic-box">
              <h6>About Us</h6>
            </div>
            <div className="contentFooter-box">
              <ul>
                <li className='li-footer'>
                  <Link href={'/about'} className="link-footer">Company Profile</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-box2">
            <div className="topic-box">
              <h6>Contact Us</h6>
            </div>
            <div className="contentFooter-box">
              <ul>
                <li className='li-footer'>
                  <Link href={'/contact'} className="link-footer">Send Us a Message</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* News & Blog */}
        <div className="footer-box">
          <div className="topic-box">
            <h6>News &amp; Blog</h6>
          </div>
          <div className="contentFooter-box">
            <ul>
              <li className='li-footer'>
                <Link href={'/news'} className="link-footer">News</Link>
              </li>
              <li className='li-footer'>
                <Link href={'/news'} className="link-footer">Blog</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Activities */}
        <div className="footer-box">
          <div className="footer-box2">
            <div className="topic-box">
              <h6>Activities</h6>
            </div>
          </div>
          <div className="contentFooter-box">
            <ul>
              <li className='li-footer'>
                <Link href={'/activities'} className="link-footer">Activities</Link>
              </li>
            </ul>
          </div>

          <div className="footer-box2">
            <div className="topic-box">
              <h6>Google Map</h6>
            </div>
            <div className="contentFooter-box">
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.1518657435113!2d101.03399597572438!3d13.089560112279843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3102c7dc30976c73%3A0x4d5814b37d43e107!2sJIEI(Thailand)%20Co.%2CLtd.!5e0!3m2!1sen!2sth!4v1760580362373!5m2!1sen!2sth"
                  width="100%"
                  height="150"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="bottom-footer">
        <p>Copyright © {currentYear} JIEI (Thailand) Co., Ltd. | Automotive Rubber Parts Manufacturer in Chonburi, Thailand</p>
      </div>
    </footer>
  )
}
