import Link from 'next/link'

export default function Topbar() {
    return (
        <div>
            {/* Top Contact Bar */}
            <div className="top-navigation">
                {/* Logo */}
                <div className="logo-box">
                    
                    {/* <Location /> */}
                </div>
                <div className="top-navigation-contact">
                    <div className="top-navigation-email">
                        <Link className="top-navigation-Link" href="mailto:info@jiei-thai.co.th" aria-label="ส่งอีเมลติดต่อ JIEI Thailand" title="Email: info@jiei-thai.co.th">
                            <i className="icon-top-navigation bi bi-envelope-at-fill"></i>
                            info@jiei-thai.co.th
                        </Link>
                    </div>
                    <div className="top-navigation-phone">
                        <Link className="top-navigation-Link" href="tel:+6633136581" aria-label="โทรติดต่อ JIEI Thailand" title="Phone: 033-136581-4">
                            <i className="icon-top-navigation bi bi-telephone-fill"></i>
                            033-136581-4
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
