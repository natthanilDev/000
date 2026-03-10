import type { Metadata } from "next";
import {  Noto_Sans_Thai, Noto_Sans_JP , Libre_Franklin , Kanit} from "next/font/google";
import "./globals.css";
import Topbar from "./components/topbar/topbar";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer"
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const notoThai = Noto_Sans_Thai({
  subsets: ["thai"],
  weight: ["300","400","500","700"],
  variable: "--font-thai"
});

const kanit = Kanit({
  subsets : ["thai"],
  weight : ["100"],
  variable : "--font-kanit"
})

const notoJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["300","400","500","700"],
  variable: "--font-jp"
});



const libreFranklin = Libre_Franklin({
  subsets: ['latin'],
  weight: ['300','400','500','600','700'],
  display: 'swap',
  variable : "--font-en"
})


export const metadata: Metadata = {
  title: "JIEI Thailand - ผู้ผลิตชิ้นส่วนยางรถยนต์คุณภาพสูงในชลบุรี",
  description: "บริษัท JIEI (Thailand) Ltd. ผู้นำด้านชิ้นส่วนยางสำหรับอุตสาหกรรมยานยนต์ พร้อมบริการและข่าวสารล่าสุดเกี่ยวกับผลิตภัณฑ์และโอกาสงาน",
   icons: {
    icon: "/JieiThailand-logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${libreFranklin.className} ${notoThai.variable} ${notoJP.variable} ${kanit.variable} antialiased`}>
        <Topbar />
        <Navbar />

        {children}

        <Footer />
        {/* <Top /> */}
      </body>
    </html>
  );
}
