import type { Metadata } from "next";
import { Prompt , Noto_Sans_JP} from "next/font/google";
import "./globals.css";
import Topbar from "./components/topbar/topbar";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer"
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const prompt = Prompt({
  variable: "--font-prompt",
  subsets: ['latin'],
  weight: "400"
})

const noto_sans_JP = Noto_Sans_JP({
  variable : "--font-Noto_Sans_JP",
  subsets : ['latin'],
  weight : '400'
})

export const metadata: Metadata = {
  title: "Jiei Thailand - ผู้ผลิตชิ้นส่วนยางรถยนต์คุณภาพสูงในชลบุรี",
  description: "บริษัท Jiei (Thailand) Ltd. ผู้นำด้านชิ้นส่วนยางสำหรับอุตสาหกรรมยานยนต์ พร้อมบริการและข่าวสารล่าสุดเกี่ยวกับผลิตภัณฑ์และโอกาสงาน",
  icons: {
    icon: '/Jiei Thailand - ผู้ผลิตชิ้นส่วนยางรถยนต์คุณภาพสูงในชลบุรี.png'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${prompt.variable , noto_sans_JP.variable} antialiased`}>
        <Topbar />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
