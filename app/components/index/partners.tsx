'use client'
import React from 'react'
import { useEffect, useState } from 'react'
// import ScrollReveal from '../ScrollReveal/ScrollReveal';
import Link from 'next/link';
// import Image from 'next/image';
import {Ultra ,Piazzolla ,Radio_Canada , SUSE ,IM_Fell_English  , Sniglet ,Encode_Sans_Semi_Condensed , Cantora_One , Sour_Gummy , Poetsen_One } from "next/font/google";


const ultra = Ultra({
  variable: "--font-ultra",
  subsets: ['latin'],
  weight: '400'
})
const radio_canada = Radio_Canada({
  variable: "--font-radio_canada",
  subsets: ['latin'],
  weight: '400'
})

const suse = SUSE({
  variable: "--font-suse",
  subsets: ['latin'],
  weight: '400'
})

const im_fell_english = IM_Fell_English({
  variable: "--font-im_fell_english",
  subsets: ['latin'],
  weight: '400'
})


const sniglet = Sniglet({
  variable: "--font-sniglet",
  subsets: ['latin'],
  weight: '400'
})

const encode_sans_semi_condensed = Encode_Sans_Semi_Condensed({
  variable: "--font-encode_sans_semi_condensed",
  subsets: ['latin'],
  weight: '400'
})

const piazzolla = Piazzolla({
  variable: "--font-piazzolla",
  subsets: ['latin'],
  weight: '400'
})

const cantora_one = Cantora_One({
  variable: "--font-cantora_one",
  subsets: ['latin'],
  weight: '400'
})


const sour_gummy = Sour_Gummy({
  variable: "--font-sour_gummy",
  subsets: ['latin'],
  weight: '400'
})

const poetsen_one = Poetsen_One({
  variable: "--font-poetsen_one",
  subsets: ['latin'],
  weight: '400'
})


export default function Partners() {
    const [lang, setLang] = useState<'th' | 'en' | 'jp'>('th');

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedLang = localStorage.getItem('lang') as 'th' | 'en' | 'jp' | null;
            if (storedLang) setLang(storedLang);
        }
    }, []);
    // const partner = [
    //     '/logoPartner/logo-partners (1).png',
    //     '/logoPartner/logo-partners (2).png',
    //     '/logoPartner/logo-partners (3).png',
    //     '/logoPartner/logo-partners (4).png',
    //     '/logoPartner/logo-partners (5).png',
    //     '/logoPartner/logo-partners (6).png',
    //     '/logoPartner/logo-partners (7).png',
    //     '/logoPartner/logo-partners (8).png',
    //     '/logoPartner/logo-partners (9).png',
    //     '/logoPartner/logo-partners (10).png',
    //     '/logoPartner/logo-partners (11).png',
    //     '/logoPartner/logo-partners (12).png',
    //     '/logoPartner/cs.png',

    //     '/logoPartner/honda.png',
    //     '/logoPartner/ht.png',
    //     '/logoPartner/jg.png',
    //     '/logoPartner/sum.png',
    //     '/logoPartner/te.png',
    //     '/logoPartner/Tec.png',
    //     '/logoPartner/thairung.png',

    // ];
    // const customerList = [
    //     'HONDA R&D ASIA PACIFIC CO., LTD.',
    //     'HONDA AUTOMOBILE (THAILAND) CO., LTD. - AYUTTHAYA',
    //     'HONDA AUTOMOBILE (THAILAND) CO., LTD. - PRACHINBURI',
    //     'HONDA TRADING ASIA CO., LTD.',
    //     'ASIAN HONDA MOTOR CO., LTD.',
    //     'AGC AUTOMOTIVE (THAILAND) CO., LTD.',
    //     'SAINT-GOBAIN SEKURIT (THAILAND) CO., LTD.',
    //     'HORI GLASS (THALAND) CO., LTD.',
    //     'MORIROKU TECHNOLOGY (THAILAND) CO., LTD.',
    //     'POLYNET PUBLIC CO., LTD.',
    //     'THAI TOYO DENSO CO., LTD.',
    //     'TOACS (THAILAND) CO., LTD.',
    //     'INOAC AUTOMOTIVE (THAILAND) CO., LTD.',
    //     'SANKO GOSEI TECHNOLOGY (THAILAND) CO., LTD.',
    //     'KOJIMA INDUSTRIES ASIA CORPORATION CO., LTD.',
    //     'SHIRAISHI CALCIUM (THAILAND) CO., LTD.',
    //     'NARUMI (THAILAND) CO., LTD.',
    //     'RESONAC AUTOMOTIVE PRODUCTS (THAILAND) CO., LTD.',
    //     'P I INDUSTRY LTD.',
    //     'ELASTOMIX (THAILAND) CO., LTD.',
    //     'THAI DIAMOND&ZEBRA ELECTRIC CO., LTD.',
    //     'SUNMETAL CO., LTD.',
    //     'TOKAI JIEI ASIA CO., LTD.',
    //     'PT. NARUMI MANUFACTURING INDONESIA',
    //     'OKAYASU RUBBER (MALAYSIA) SDN. BHD.',
    //     'MALAYSIAN SHEET GLASS SDN. BHD.',
    //     'KASEI KOGYO CO., LTD. (USA)',
    //     'PILKINGTON AUTOMOTIVE BELGIUM N.V.',
    //     'JIAXING JIEI AUTOMOBILE PARTS CO., LTD.',
    //     'KASEI KOGYO CO., LTD. (GTC)',
    //     'KASEI KOGYO CO., LTD. (TKM)',
    // ]
    // const LinkPartners = [
    //     'https://honda-rd.asia/th/',
    //     'https://www.honda.co.th/en/contact/office-locations',
    //     'https://www.honda.co.th/',
    //     'https://www.hondatrading.com/en/company/htgroup/thailand/en/HTAS/',
    //     'https://career.asianhonda.com/culture.aspx',
    //     'https://www.agc-automotive.co.th/',
    //     'https://www.saint-gobain.co.th/',
    //     'https://www.wha-industrialestate.com/th/media-activities/news/customer-news/2004/hori-glass-grand-opening-at-hemarajs-eastern-seaboard-industrial-estate-rayong',
    //     'https://www.moriroku.co.jp/english/network/mtt/index.html',
    //     'https://www.polynet.co.th/en/home',
    //     'https://www.toyo-denso.co.jp/en.html',
    //     'https://www.toacs.co.th/',
    //     'https://www.inoacauto.co.th/th/',
    //     'https://www.sankogosei.co.jp/en/index.html',
    //     'https://www.jobtopgun.com/en/company/285791',
    //     'https://www.shiraishi.co.th/',
    //     'http://www.ngm.co.jp/english/outline.html',
    //     'https://www.isuzu.co.th/contact/RAPT',
    //     'https://www.piindustries.com/',
    //     'https://www.elastomix.co.th/',
    //     'https://www.diaelec-hd.co.jp/en/about/base/',
    //     'https://www.sun-metal.com/',
    //     'https://companieshouse.co.th/tokai-jiei-asia-co-ltd-0205566000451',
    //     '/',
    //     'https://www.okayasu-rubber-malaysia.com/',
    //     '/',
    //     '/',
    //     'https://www.pilkington.com/en/be',
    //     '/',
    //     '/',
    //     '/',

    // ]


    return (
        <div>
            <div className="partner-homepage">

                <section className="partners">
                    <div className="partners-header">
                        <h2>{lang === 'th' ? "พันธมิตรของเรา" : lang === "en" ? "Our Partners" : "私たちのパートナー"} </h2>
                        <p>{lang === 'th' ? "ได้รับความไว้วางใจจากบริษัทชั้นนำทั่วเอเชียและประเทศอื่น ๆ" : lang === "en" ? "Trusted by leading companies across Asia and beyond." : "アジア全域およびその先の主要企業から信頼されています。"}</p>
                    </div>

                    {/* <div className="partners-grid">
                        {customerList.map((item, index) => (
                            <ScrollReveal key={index}>
                                <Link target='_blank' className='linkToWebsitePartners' href={LinkPartners[index]}> {item} </Link>
                            </ScrollReveal>
                        ))}

                    </div> */}

                    <div className="partners-grid">
                        <p className={`partnerList0 ${ultra.variable}`}>HONDA</p>
                        <p className='partnerList1'>HONDA TRADING</p>
                        <p className={`partnerList2 ${radio_canada.variable}`}>ASIAN HONDA</p>
                        <p className='partnerList3'>AGC</p>
                        <p className='partnerList4'>SAINT-GOBAIN</p>
                        <p className={`partnerList5 ${suse.variable}`}>HORI GLASS</p>
                        <p className='partnerList6'>MORIROKU</p>
                        <p className='partnerList7'><span className='lynet'>PO</span>LYNET</p>
                        <p className={`partnerList9 ${im_fell_english.variable}`}>TOYODENSO</p>
                        <p className={`partnerList10`}>TOACS</p>
                        <p className={`partnerList11 ${sniglet.variable}`}>INOAC</p>
                        <p className={`partnerList12 ${encode_sans_semi_condensed.variable}`}>SANKO GOSEI</p>
                        <p className='partnerList13'>KOJIMA</p>
                        <p className={`partnerList14 ${piazzolla.variable}`}>Shiraishi Calcium</p>
                        <p className='partnerList15'>NARUMI</p>
                        <p className={`partnerList16 ${cantora_one}`}>RESONAC</p>
                        <p className='partnerList17'><span className='p'>P</span> <span className='i'>I </span>INDUSTRY</p>
                        {/* <p className='partnerList20'>ELASTOMIX</p> */}
                        <p className='partnerList21'>Thai Diamond & Zebra Electric</p>
                        <p className={`partnerList22 ${sour_gummy.variable}`}>SUNMETAL</p>
                        <p className={`partnerList23 ${poetsen_one.variable}`}>TOKAI JIEI ASIA</p>    
                        <p className='partnerList25'>OKAYASU</p>
                        <p className='partnerList26'>NSG</p>
                        <p className='partnerList27'>KASEI KOGYO</p>
                        <p className='partnerList28'>PILKINGTON</p>
                        <p className='partnerList29'>JIAXING JIEI</p>
                        <p className='partnerList30'>GREEN TOKAI</p>

                    </div>



                </section>

            </div>
            <div className="contact-homepage">
                <Link className='contactHomepage' href={"/contact"}>
                    <div className="contact-box-homepage">
                        {lang === ('th') ? "ติดต่อเรา" : lang === ('en') ? "Contact Us" : "お問い合わせ"}
                    </div>
                </Link>
            </div>
            
        </div>
    )
}
