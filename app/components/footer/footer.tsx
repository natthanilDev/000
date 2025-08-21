import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer itemScope itemType="https://schema.org/Organization">

      <div className="container-footer">
        {/* Company Info */}
        <div className="footer-box" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
          <div className="topic-box">
            <Image 
              src={'/jiei-thailand-logo.png'} 
              alt="JIEI Thailand Logo - Automotive Rubber Parts Manufacturer in Chonburi" 
              width={100} 
              height={100} 
              priority 
              className='logo-footer' 
              itemProp="logo"
            />
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
                <Link href={'/products/engine-mounts'} className="link-footer">Engine Mounts</Link>
              </li>
              <li className='li-footer'>
                <Link href={'/products/suspension-bushings'} className="link-footer">Suspension Bushings</Link>
              </li>
              <li className='li-footer'>
                <Link href={'/products/seals-gaskets'} className="link-footer">Seals &amp; Gaskets</Link>
              </li>
              <li className='li-footer'>
                <Link href={'/products/custom-rubber-parts'} className="link-footer">Custom Rubber Parts</Link>
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
                  <Link href={'/company-profile'} className="link-footer">Company Profile</Link>
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
                <Link href={'/blog'} className="link-footer">Blog</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Activities */}
        <div className="footer-box">
          <div className="topic-box">
            <h6>Activities</h6>
          </div>
          <div className="contentFooter-box">
            <ul>
              <li className='li-footer'>
                <Link href={'/activities'} className="link-footer">Activities</Link>
              </li>
            </ul>
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
