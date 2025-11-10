'use client'
import React from 'react'
import Head from 'next/head';
import IntroAbout from './IntroAbout';
import AboutJIEI from './AboutJIEI';
import AboutDescription from './AboutDescription';
import AboutPartners from './AboutPartners';
import AboutMap from './AboutMap';
export default function About() {
    
    return (
        <>
            <Head>
                <title>JIEI Thai | ผู้ผลิตชิ้นส่วนยางรถยนต์ ชลบุรี | Automotive Rubber Parts Manufacturer</title>
                <meta name="description" content="บริษัท เจไออีไอ (ประเทศไทย) จำกัด ผู้ผลิตชิ้นส่วนยางรถยนต์คุณภาพสูง จังหวัดชลบุรี มาตรฐาน ISO 9001, ISO 14001 และ IATF 16949 สำหรับอุตสาหกรรมยานยนต์ทั่วโลก" />
                <meta name="keywords" content="JIEI Thai, ผู้ผลิตชิ้นส่วนยางรถยนต์, โรงงานยางรถยนต์ ชลบุรี, Automotive Rubber Parts Thailand, ยางรถยนต์คุณภาพสูง, ISO 9001, IATF 16949" />
                <meta property="og:title" content="JIEI Thai | ผู้ผลิตชิ้นส่วนยางรถยนต์ ชลบุรี" />
                <meta property="og:description" content="โรงงานผลิตยางรถยนต์คุณภาพสูงในชลบุรี ได้รับมาตรฐานสากล ISO/IATF16949 พร้อมทีมงานมืออาชีพ" />
                <meta property="og:image" content="/meta-jiei.jpg" />
                <meta property="og:url" content="https://jiei-thai.co.th/about" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://jiei-thai.co.th/about" />
            </Head>
                <IntroAbout />
                <AboutJIEI />
                <AboutDescription />
                <AboutMap />
                <AboutPartners />
               
        </>
    )
}
