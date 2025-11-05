'use client'
import React from 'react'
import Image from 'next/image'
import ScrollReveal from '../ScrollReveal/ScrollReveal'
import { useEffect, useState } from 'react'



export default function Employee() {
    const manager = [
        '/top-manager/murata-san.png',
        '/top-manager/inoue-san.png',
        '/top-manager/10.png',
        '/top-manager/sato-san.png',
        '/top-manager/hirano-san.png',
        '/top-manager/hayakawa-san.png',

    ]

    const name_managerEN = [
        'Mr.Kazuya Murata',
        'Mr.Tetsuya Inoue',
        'Mr.Hiroki Kako',
        'Mr.Yosuke Sato',
        'Mr.Takanori Hirano',
        'Mr.Tomoaki Hayakawa',

    ]
    const name_managerTH = [
        'คุณคาซุยะ มุราตะ',
        'คุณเทตสึยะ อินุเอะ',
        'คุณฮิโรคิ คาโกะ',
        'คุณโยสุเกะ ซาโต้',
        'คุณทากาโนริ ฮิราโนะ',
        'คุณโทโมอากิ ฮายากาวะ',

    ]
    const name_managerJP = [
        '村田 一也さん',
        '井上 哲也さん',
        '加古 弘樹さん',
        '佐藤 陽介さん',
        '平野 隆則さん',
        '早川 友明さん',

    ]


    const department_topEN = [
        'CHIEF FINANCIAL OFFICER',
        'GENERAL MANAGER',
        'SENIOR SALES MANAGER',
        'MANAGER FACTORY',
        'ADVISOR',
        'MANAGER',

    ]
    const department_topTH = [
        'ประธานเจ้าหน้าที่ฝ่ายการเงิน (CFO)',
        'ผู้จัดการทั่วไป',
        'ผู้จัดการอาวุโสฝ่ายขาย',
        'ผู้จัดการโรงงาน',
        'ที่ปรึกษา',
        'ผู้จัดการ',

    ]
    const department_topJP = [
        '最高財務責任者',
        'ジェネラルマネージャー',
        'シニアセールスマネージャー',
        '工場マネージャー',
        'アドバイザー',
        'マネージャー',

    ]
    

    const QANameEN = [
        'Mr.Nut Kullamart (Nut)',
        'Mr.Kanatip Ruangrit (Nook)',
        'Ms.Pakakan Thiangtham (Jane)',
        'Mr.Chatree Boonsawai (Tuy)',
        'Ms.Duangrutai Asavapum (Ja ae)',
        'Ms.Suttinee Pattamanawin (May'
    ]
    const QANameTH = [
        'นายณัฐ กุลมาศ (นัท)',
        'นายคนาธิป เรืองฤทธิ์ (นุ๊ก)',
        'นางสาวปกากาญจน์ เที่ยงธรรม (เจน)',
        'นายชาติรี บุญสวัสดิ์ (ตุ้ย)',
        'นางสาวดวงฤทัย อัศวภูมิ (จ๊ะเอ๋)',
        'นางสาวนางสาวศุทธินี ปัทมะนาวิน (เมย์)'
    ]
    const QANameJP = [
        'ナット・クルマートさん (ナット)',
        'カナティップ・ルアンリットさん (ヌーク)',
        'パカカン・ティエントムさん (ジェーン)',
        'チャトリー・ブーンサワイさん (トゥイ)',
        'ドゥアングルタイ・アサワプムさん (ジャーエー)',
        'スッティニー・パッタマナウィンさん (メイ)'
    ]

    const QAEN = [
        'SUPERVISOR/QMR ',
        'ASST.LEADER',
        'QA STAFF',
        'QA STAFF',
        'QA Engineer',
        'QA STAFF'
    ]
    const QATH = [
        'หัวหน้างาน/QMR ',
        'ผู้ช่วยหัวหน้า',
        'เจ้าหน้าที่ QA',
        'เจ้าหน้าที่ QA',
        'วิศวกร QA',
        'เจ้าหน้าที่ QA'
    ]
    const QAJP = [
        'スーパーバイザー/QMR ',
        'アシスタントリーダー',
        'QAスタッフ',
        'QAスタッフ',
        'QAエンジニア',
        'QAスタッフ'
    ]
    const ImageQA = [
        '/QA/nut.png',
        '/QA/nook.png',
        '/QA/jan.png',
        '/QA/tuy.png',
        '/QA/ja ae.png',
        '/QA/may.png'
    ]

    const QCEN = [
        'QC LEADER',
        'QC STAFF',
        'QC STAFF',
        'QC STAFF',
        'QC STAFF',
        'QC STAFF',
        'QC STAFF',
        'QC STAFF',
        'QC STAFF',
    ]
    const QCTH = [
        'หัวหน้าฝ่าย QC',
        'เจ้าหน้าที่ QC',
        'เจ้าหน้าที่ QC',
        'เจ้าหน้าที่ QC',
        'เจ้าหน้าที่ QC',
        'เจ้าหน้าที่ QC',
        'เจ้าหน้าที่ QC',
        'เจ้าหน้าที่ QC',
        'เจ้าหน้าที่ QC',

    ]
    const QCJP = [
        'QCリーダー',
        'QCスタッフ',
        'QCスタッフ',
        'QCスタッフ',
        'QCスタッフ',
        'QCスタッフ',
        'QCスタッフ',
        'QCスタッフ',
        'QCスタッフ',

    ]

    const QCNameEN = [
        'Ms.Pornjun Konboon (Aof)',
        'Ms.Nuchjana Pimsan (Gaembum)',
        'Mr.Thanachord Channguleam (Game)',
        'Mr.Supote Noybunya (Pote)',
        'Mr.Uthai Boonut (Thai)',
        'Ms.Rerai Hanrop (Rose)',
        'Ms.Lalana Sriwapee (Biew)',
        'Mr.Teerayut Boonrod (Baw)',
        'Mr.Peerawit Suwanna (Ice)',
    ]
    const QCNameTH = [
        ' คุณพรจุณณ์ คนบุญ (อ๊อฟ)',
        'คุณนุชจนา พิมสาร (แก้มบุ๋ม)',
        'คุณธนโชติ ชาญกลิ่น (เกม)',
        'คุณสุพจน์ น้อยบุญญา (พจน์)',
        'คุณอุทัย บุญนุช (ไทย)',
        'คุณเรไร หาญรอบ (โรส)',
        'คุณลลนา ศรีวาปี (บิว)',
        'คุณธีรยุทธ บุญรอด (บ่าว)',
        'คุณพีรวัฒน์ สุวรรณ (ไอซ์)',
    ]
    const QCNameJP = [
        'ポーンジュン・コンブーンさん（オーフ）',
        'ヌッチャナー・ピムサーンさん（ゲームブン）',
        'タナチョート・チャンングリアムさん（ゲーム）',
        'スポット・ノイブンヤーさん（ポット）',
        'ウタイ・ブンヌットさん（タイ）',
        'レーライ・ハンロップさん（ローズ）',
        'ララナ・スリワピーさん（ビウ）',
        'ティーラユット・ブンロットさん（バウ）',
        'ピーラウィット・スワンナさん（アイス）',

    ]
    const ImageQC = [
        '/QC/aof.png',
        '/QC/gambum.png',
        '/QC/game.png',
        '/QC/thod.png',
        '/QC/thai.png',
        '/QC/gulob.png',
        '/QC/biwty.png',
        '/QC/baw.png',
        '/QC/ice.png',

    ]

    const PCEN = [
        'PC MANAGER',
        'ASST.LEADER',
        // 'PC STAFF',
        'PC STAFF',
        'PC STAFF',
        'PC STAFF',
    ]
    const PCTH = [
        'ผู้จัดการฝ่ายวางแผนการผลิต PC',
        'ผู้ช่วยหัวหน้า',
        // 'เจ้าหน้าที่ PC',
        'เจ้าหน้าที่ PC',
        'เจ้าหน้าที่ PC',
        'เจ้าหน้าที่ PC',

    ]
    const PCJP = [
        'PCマネージャー',
        'アシスタントリーダー',
        // 'PCスタッフ',
        'PCスタッフ',
        'PCスタッフ',
        'PCスタッフ',

    ]


    const PCNameEN = [
        'Mr.Werayoot Ingkapakorn (B)',
        'Ms.Larisa Seanchan (Koy)',
        // 'Ms.Phonwilai Pholsakaew (Praewa)',
        'Ms.Phutthika Chotmongkon (Ked)',
        'Mr.Songsak Taothong (Max)',
        'Ms.Pannapas Jiranithithanawong (Namfon)',
    ]
    const PCNameTH = [
        'คุณวีรายุทธ อิงคปกรณ์ (บี)',
        'คุณลาริสา เซียนชาญ (ก้อย)',
        'คุณพุทธิกา โชตมงคล (เกด)',
        'คุณทรงศักดิ์ เตา ทอง (แม็กซ์)',
        'นาวสาวปัณณภัสร์ จิรานิธิธนาวงษ์ (น้ำฝน)',

    ]
    const PCNameJP = [
        'ウェラユット・インカパコーンさん（B）',
        'ラリサ・シャンチャンさん（コイ）',
        'プッティカ・チョットモンコンさん（ケッド）',
        'ソンサック・タオトーンさん（マックス）',
        'パンナパス・ジラニティタナウォンさん（ナムフォン）',

    ]

    const ImagePC = [
        '/PC/be.png',
        '/PC/koy.png',
        '/PC/kad.png',
        '/PC/max.png',
        '/PC/namfon.png',
    ]

    const PDEN = [
        'ASST.MANAGER',
        'PD STAFF',
        'PD STAFF',
    ]
    const PDTH = [
        'ผู้ช่วยผู้จัดการ',
        'เจ้าหน้าที่ PD',
        'เจ้าหน้าที่ PD',

    ]
    const PDJP = [
        'アシスタントマネージャー',
        'PDスタッフ',
        'PDスタッフ',

    ]

    const PDNameEN = [
        'Mr.Athiwat Natacha (Num)',
        'Ms.Sakaodeuan Limpakdee (Bee)',
        'Ms.Nattha Masuk (Nut)',
    ]
    const PDNameTH = [
        'คุณอธิวัฒน์ นาถชา (หนุ่ม)',
        'คุณสกาวเดือน ลิมปักดี (บี)',
        'คุณณัฐฐา มาสุข (นัท)',
    ]
    const PDNameJP = [
        'アティワット・ナタチャさん（ヌム）',
        'サカオデュアン・リムパクディーさん（ビー）',
        'ナッタ・マスクさん（ナット）',
    ]

    const ImagePD = [
        '/PD/num.png',
        '/PD/be.png',
        '/PD/nutty.png',
    ]

    const HREN = [
        'HR MANAGER',
        'ASST.LEADER',
        'HR STAFF',
        'HR STAFF',
    ]
    const HRTH = [
        'ผู้จัดการฝ่ายบุคคล HR',
        'ผู้ช่วยหัวหน้า',
        'เจ้าหน้าที่ HR',
        'เจ้าหน้าที่ HR',

    ]
    const HRJP = [
        'HRマネージャー',
        'アシスタントリーダー',
        'HRスタッフ',
        'HRスタッフ',

    ]

    const HRNameEN = [
        'Ms.Wipada Singkham (Da)',
        'Ms.Natchaya Nilchom (Ice)',
        'Ms.Jiriyaporn Puttayakul (Jill)',
        'Ms.Natcha Netvichian (Game)',
    ]
    const HRNameTH = [
        'คุณวิภาดา สิงคาม (ดา)',
        'คุณณัฐชญา นิลชม (ไอซ์)',
        'คุณจิริยาภรณ์ พุทธยากูล (จิว)',
        'คุณณัฐชา เนตวิชญ์ (เกม)',
    ]
    const HRNameJP = [
        ' ウィパダー・シンカムさん（ダー）',
        'ナッチャヤ・ニルチョムさん（アイス）',
        'ジリヤポーン・プッタヤクルさん（ジル）',
        'ナッチャ・ネットウィチャンさん（ゲーム）',
    ]
    const ImageHR = [
        '/HR/da.png',
        '/HR/ice.png',
        '/HR/jill.png',
        '/HR/game.png',
    ]

    const ACCEN = [
        'ACC LEADER',
        'ASST.LEADER',
        'HR STAFF',
    ]
    const ACCTH = [
        'หัวหน้าฝ่ายบัญชี',
        'ผู้ช่วยหัวหน้า',
        'เจ้าหน้าที่บัญชี',

    ]
    const ACCJP = [
        '会計リーダー',
        'アシスタントリーダー',
        '会計スタッフ',

    ]

    const ACCNameEN = [
        'Ms.Monthip Meng-Ourm (Tip)',
        'Ms.Watsana Kumkhonkhaen (Fern)',
        'Ms.Netchanok Sudongpong (Nampetch)',

    ]
    const ACCNameTH = [
        ' คุณมนทิพย์ เม็งอาวร์ม (ทิพ)',
        'คุณวาสนา คำคอนแก่น (เฟิร์น)',
        'คุณเนชชนก สุด้งพงศ์ (น้ำเพชร)',

    ]
    const ACCNameJP = [
        'モンティップ・メングアウルムさん（ティップ）',
        'ワッサナ・クムコンケーンさん（フェーン）',
        'ネチャノック・スドンポンさん（ナムペット）',
    ]

    const ImageACC = [
        '/ACC/tip.png',
        '/ACC/flean.png',
        '/ACC/numplach.png',
    ]

    const SAEN = [
        'SA MANAGER',
        'SA LEADER',
        'SA LEADER',

    ]
    const SATH = [
        'ผู้จัดการฝ่ายขาย SA',
        'หัวหน้าฝ่าย SA',
        'หัวหน้าฝ่าย SA',

    ]
    const SAJP = [
        'SAマネージャー',
        'SAリーダー',
        'SAリーダー',

    ]

    const SANameEN = [
        'Mr. Tanatom Puttisa (Tee)',
        'Mr.Thanasan Kasorn (Boom)',
        'Ms. Thiparat Kamsing (Bow)',
    ]
    const SANameTH = [
        'คุณธนาธรณ์ พุทธิษา (ตี๋)',
        'คุณธนสรรค์ กษร (บูม)',
        'คุณทิพารัตน์ คำสิงห์ (โบว์)',
    ]
    const SANameJP = [
        'タナトム・プッティサさん（ティー）',
        'タナサン・カソーンさん（ブーム）',
        'ティパラット・カムシンさん（ボー）',
    ]
    const ImageSA = [
        '/SA/tee.png',
        '/SA/boom.png',
        '/SA/bow.png',
    ]

    const ITEN = [
        'IT STAFF',
        'IT STAFF',
    ]
    const ITTH = [
        'เจ้าหน้าที่ IT',
        'เจ้าหน้าที่ IT',
    ]
    const ITJP = [
        'ITスタッフ',
        'ITスタッフ',
    ]

    const ITNameEN = [
        'Mr.Sompong Sae Boon (Pe)',
        'Mr.Natthanil Wannasopa (Newton)',
    ]
    const ITNameTH = [
        'คุณสมพงษ์ แซ่บุญ (เป้)',
        'คุณณัฐนิลท์ วรรณโสภา (นิวตัน)',
    ]

    const ITNameJP = [
        'ソンプン・セーブーンさん（ペー）',
        'ナッタニン・ワンナソパーさん（ニュートン）',
    ]


    const ImageIT = [
        '/IT/pe.png',
        '/IT/newton.png',
    ]

    const SEEN = [
        'SE LEADER/EMR',
        'SE STAFF',
    ]
    const SETH = [
        'หัวหน้าฝ่าย SE/EMR',
        'เจ้าหน้าที่ SE',

    ]
    const SEJP = [
        'SEリーダー/EMR',
        'SEスタッフ',
    ]
    const SENameEN = [
        'Ms.Supreeya Kitbumrung (Faii)',
        'Ms.Suwimon Phoncharoen (Mon)',
    ]
    const SENameTH = [
        'คุณสุปรียา กิตบำรุง (ฝ้าย)',
        'คุณสุวิมล พรเจริญ (มน)',
    ]
    const SENameJP = [
        'スプレーヤー・キットブムルンさん（ファイ）',
        'スウィモン・ポンチャローンさん（モン）',
    ]

    const ImageSE = [
        '/SE/fill.png',
        '/SE/mon.png',
    ]

    const TEEN = [
        'Interpreter',
        'TE LEADER',
        'TE LEADER',
        'ASST.LEADER',
    ]
    const TETH = [
        'ล่าม',
        'หัวหน้าฝ่าย TE',
        'หัวหน้าฝ่าย TE',
        'ผู้ช่วยหัวหน้า',
    ]
    const TEJP = [
        '通訳',
        'TEリーダー',
        'TEリーダー',
        'アシスタントリーダー',
    ]

    const TENameEN = [
        'Mr.Tanit Keawkamphon (Art)',
        'Mr.Pricha Prasoetsang (Num)',
        'Mr.Natphon Cakpila (Ton)',
        'Mr. Yutthakarn Samaknarong (Daew)',
    ]
    const TENameTH = [
        'คุณธนิต แก้วคำพล (อาร์ต)',
        'คุณปรีชา ประเสริฐแสง (หนุ่ม)',
        'คุณณัฐพล จักรพิลาศ (ต้น)',
        'คุณยุทธการ สมากนรงค์ (เดี่ยว)',

    ]
    const TENameJP = [
        'タニット・ケオカムポンさん（アート）',
        'プリチャー・プラソエットサンさん（ヌム）',
        'ナットポン・チャクピラスさん（トン）',
        'ユッタカーン・サマクナロンさん（デーウ）',

    ]

    const ImageTE = [
        '/TE/alt.png',
        '/TE/num.png',
        '/TE/ton.png',
        '/TE/deaw.png',
    ]

    const WHEN = [
        'WH LEADER',
        'WH STAFF',
        'WH STAFF',
    ]
    const WHTH = [
        'หัวหน้าฝ่ายคลังสินค้า',
        'เจ้าหน้าที่คลังสินค้า',
        'เจ้าหน้าที่คลังสินค้า',
    ]
    const WHJP = [
        'WHリーダー',
        'WHスタッフ',
        'WHスタッフ',
    ]

    const WHNameEN = [
        'Ms.Sukunya Chamali (Tong)',
        'Mrs.Sudarak Srinuan (Kwan)',
        'Ms.Ausanee Duangrit (Pampam)',
    ]
    const WHNameTH = [
        'คุณสุกัญญา ฉ่ำอุไร (ตอง)',
        'คุณสุดารักษ์ ศรีนวล (ขวัญ)',
        'คุณอุษณี ดวงฤทธิ์ (แพมแพม)',
    ]

    const WHNameJP = [
        'スクンヤー・チャムアライさん（トン）',
        'スダラック・スリヌアンさん（クワン）',
        'アウサニー・ドゥアングリットさん（パンパン）',

    ]


    const ImageWH = [
        '/WH/tong.png',
        '/WH/kwan.png',
        '/WH/pam.png',
    ]

    const PUREN = [
        'PUR LEADER',
        'ASST.LEADER',
    ]
    const PURTH = [
        'หัวหน้าฝ่ายจัดซื้อ',
        'ผู้ช่วยหัวหน้า',
    ]
    const PURJP = [
        'PURリーダー',
        'アシスタントリーダー',
    ]
    const PURNameEN = [
        'Ms.Napatsawan Chanapai (Nami)',
        'Ms. Phairin Klinfung (Aom)',
    ]
    const PURNameTH = [
        'คุณนภัสวรรณ จันทร์ไพ (นามิ)',
        'คุณไพรินทร์ กลิ่นฟุ้ง (อ้อม)',
    ]
    const PURNameJP = [
        'ナパッサワン・チャンパイさん（ナミ）',
        'パイリン・クリンフンさん（オーム）',
    ]

    const ImagePUR = [
        '/PUR/nami.png',
        '/PUR/aom.png',
    ]

    const [lang, setLang] = useState<'th' | 'en' | 'jp'>('th');

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedLang = localStorage.getItem('lang') as 'th' | 'en' | 'jp' | null;
            if (storedLang) setLang(storedLang);
        }
    }, []);
    return (
        <div>
            <div className="manager">
                <ScrollReveal>
                    <h1 className='managerText'>{lang === "th" ? "คณะผู้บริหาร" : lang === "en" ? "Management Team" : "経営陣"}</h1>
                    <div className="border-manager"></div>
                </ScrollReveal>
                <div className="manger-box">


                    <div className="image-manager">
                        <div className="top-manager-box">
                            <div className="image-top-manager-box">
                                <ScrollReveal>
                                    <Image src={'/top-manager/5.png'} alt='บริษัท เจไออีไอ (ประเทศไทย) จำกัด เป็นผู้ผลิต ชิ้นส่วนยางรถยนต์คุณภาพสูงสำหรับอุตสาหกรรมยานยนต์ในประเทศไทยและต่างประเทศโรงงานตั้งอยู่ที่จังหวัดชลบุรี พร้อมมาตรฐานสากล' width={1000} height={1000} className='manager-Image' />
                                </ScrollReveal>
                            </div>
                            <div className="name-top-manager">
                                <ScrollReveal>
                                    <h2 className='position-topmanager'>{lang === "th" ? "ประธานประธานบริษัท" : lang === "en" ? "President" : "代表取締役社長"} </h2>
                                    <p className='top-manager-name'>{lang === 'th' ? "คุณมาซาชิ เอซากะ" : lang===('en') ? "Mr.Masashi Ezaka" : "江坂 正志"}</p>
                                </ScrollReveal>
                            </div>
                        </div>
                    </div>


                    <div className="manager-box">
                        <div className="image-manager2">
                            <div className="top-manager-box1">
                                <div className="image-top-manager-box">
                                    <ScrollReveal>
                                        <Image src={"/top-manager/5.png"} alt='บริษัท เจไออีไอ (ประเทศไทย) จำกัด เป็นผู้ผลิต ชิ้นส่วนยางรถยนต์คุณภาพสูงสำหรับอุตสาหกรรมยานยนต์ในประเทศไทยและต่างประเทศโรงงานตั้งอยู่ที่จังหวัดชลบุรี พร้อมมาตรฐานสากล' width={1000} height={1000} className='manager-Image' />
                                    </ScrollReveal>
                                </div>
                                <div className="name-top-manager">
                                    <ScrollReveal>
                                        <h2 className='position-topmanager'>{lang === "th" ? "ผู้อำนวยการ" : lang === "en" ? "Director" : "ディレクター"} </h2>
                                        <p className='top-manager-name'>{lang === "th" ? "คุณเคนจิ คาเมอิ" : lang === "en" ? "Mr.Kenji Kamei" : "亀井 健司"}</p>
                                    </ScrollReveal>
                                </div>
                            </div>
                        </div>
                        <div className="image-manager2">
                            <div className="top-manager-box1">
                                <div className="image-top-manager-box">
                                    <ScrollReveal>
                                        <Image src={"/top-manager/inada-san.png"} alt='บริษัท เจไออีไอ (ประเทศไทย) จำกัด เป็นผู้ผลิต ชิ้นส่วนยางรถยนต์คุณภาพสูงสำหรับอุตสาหกรรมยานยนต์ในประเทศไทยและต่างประเทศโรงงานตั้งอยู่ที่จังหวัดชลบุรี พร้อมมาตรฐานสากล' width={1000} height={1000} className='manager-Image' />
                                    </ScrollReveal>
                                </div>
                                <div className="name-top-manager">
                                    <ScrollReveal>
                                        <h2 className='position-topmanager'>{lang === "th" ? "กรรมการผู้จัดการ" : lang === "en" ? "Management Director" : "経営取締役"} </h2>
                                        <p className='top-manager-name'>{lang === "th" ? "คุณโยชิคัตสึ อินาดะ" : lang === "en" ? "Mr.Yoshikatsu Inada" : "稲田 義勝"}</p>
                                    </ScrollReveal>
                                </div>
                            </div>
                        </div>
                    </div>


                    <ScrollReveal>
                        <div className="manager-group">


                            {manager.map((item, index) =>

                                <div key={index} className="top-manager-box1">
                                    <ScrollReveal>
                                        <div className="image-top-manager-box">
                                            <Image src={item} alt='บริษัท เจไออีไอ (ประเทศไทย) จำกัด เป็นผู้ผลิต ชิ้นส่วนยางรถยนต์คุณภาพสูงสำหรับอุตสาหกรรมยานยนต์ในประเทศไทยและต่างประเทศโรงงานตั้งอยู่ที่จังหวัดชลบุรี พร้อมมาตรฐานสากล' width={1000} height={1000} className='manager-Image' />
                                        </div>
                                    </ScrollReveal>
                                    <div className="name-top-manager">
                                        <ScrollReveal>
                                            <h2 className='position-topmanager'>{lang === "th" ? department_topTH[index] : lang === "en" ? department_topEN[index] : department_topJP[index]} </h2>
                                            <p className='top-manager-name'>{lang === "th" ? name_managerTH[index] : lang === "en" ? name_managerEN[index] : name_managerJP[index]} </p>
                                        </ScrollReveal>
                                    </div>
                                </div>

                            )}
                        </div>

                    </ScrollReveal>

                </div >
            </div >

            <div className="employee-intro">
                <div className="employee-staff">
                    <div className="employee-text">
                        <ScrollReveal>
                            <h1 className='text-employee1'>{lang===('th') ? "แนะนำพนักงานคุณภาพของเรา" : lang===('en') ? "Introducing our outstanding employees." : "当社の優秀な社員をご紹介します。"}</h1>
                        </ScrollReveal>
                        <ScrollReveal>
                            <h2 className='text-employee2'>{lang===('th') ? "ทีมงานมืออาชีพ พร้อมให้บริการด้วยมาตรฐานระดับสากล" : lang===('en') ? "Our professional team is ready to provide services with international standards." : "プロフェッショナルなチームが、国際基準のサービスをご提供します。"}</h2>
                        </ScrollReveal>
                    </div>
                    <div className="line"></div>
                    {/* -------------------------------------------แนะนำเจ้าหน้าที่ด่านคุณภาพ QA */}
                    <div className="QA">
                        <ScrollReveal>
                            <h1 className="position-qaqc">{lang===('th') ? "เจ้าหน้าที่ด้านคุณภาพ QA (Quality Assurance)" : lang===('en') ? "Quality Assurance Officer (QA)" : "品質保証担当者（QA: クオリティ・アシュアランス）"}  </h1>
                        </ScrollReveal>
                        <ScrollReveal>
                            <h2 className='description-position'> {lang===('th') ? "ดูแล ตรวจสอบ และประกันคุณภาพของงาน ผลิตภัณฑ์ หรือบริการ ให้ได้มาตรฐานที่องค์กรกำหนดไว้" : lang===('en') ? "Oversee, inspect, and ensure the quality of work, products, or services to meet the standards established by the organization." : "業務、製品、またはサービスの品質を管理・確認し、組織が定めた基準を満たすよう保証します。"}</h2>
                        </ScrollReveal>
                        <div className="QA-box">
                            {QANameEN.map((item, index) =>

                                <div key={index} className="top-manager-box1">
                                    <ScrollReveal>
                                        <div className="image-top-manager-box">
                                            <Image src={ImageQA[index]} alt='บริษัท เจไออีไอ (ประเทศไทย) จำกัด เป็นผู้ผลิต ชิ้นส่วนยางรถยนต์คุณภาพสูงสำหรับอุตสาหกรรมยานยนต์ในประเทศไทยและต่างประเทศโรงงานตั้งอยู่ที่จังหวัดชลบุรี พร้อมมาตรฐานสากล' width={1000} height={1000} className='manager-Image' />
                                        </div>
                                    </ScrollReveal>
                                    <div className="name-top-manager">
                                        <ScrollReveal>
                                            <h2 className='position-topmanager'>{lang === "th" ? QATH[index] : lang === "en" ? QAEN[index] : QAJP[index]} </h2>
                                            <p className='top-manager-name'> {lang===('th') ? QANameTH[index]  : lang===('en') ? item : QANameJP[index]}</p>
                                        </ScrollReveal>
                                    </div>
                                </div>

                            )}
                        </div>

                    </div >


                    {/* -------------------------------------------แนะนำเจ้าหน้าที่ด่านคุณภาพ QC */}


                    <div className="QC" >
                        <ScrollReveal>
                            <h1 className="position-qaqc">{lang===('th') ? "เจ้าหน้าที่ด้านคุณภาพ QC (Quality Control)" : lang===('en') ? "Quality Control Officer (QC)" : "品質管理担当者（QC：クオリティコントロール）"}</h1>
                        </ScrollReveal>
                        <ScrollReveal>
                            <h2 className='description-position'>{lang===('th') ? "ตรวจสอบวัตถุดิบ ตรวจสอบระหว่างการผลิต คัดแยกสินค้าไม่ผ่านมาตรฐาน บันทึกผลการตรวจสอบ ปฏิบัติตามมาตรฐานคุณภาพและความปลอดภัย ให้ได้มาตรฐานที่องค์กรกำหนดไว้" : lang===('en') ? "Inspect raw materials, monitor production processes, separate non-conforming products, record inspection results, and ensure compliance with quality and safety standards set by the organization." : "原材料の検査、製造工程中の検査、不良品の選別、検査結果の記録を行い、品質および安全基準を遵守し、会社が定めた基準を満たすようにします。"}</h2>
                        </ScrollReveal>
                        <div className="QC-box">
                            {QCNameEN.map((item, index) =>

                                <div key={index} className="top-manager-box1">
                                    <div className="image-top-manager-box">
                                        <ScrollReveal>
                                            <Image src={ImageQC[index]} alt='บริษัท เจไออีไอ (ประเทศไทย) จำกัด เป็นผู้ผลิต ชิ้นส่วนยางรถยนต์คุณภาพสูงสำหรับอุตสาหกรรมยานยนต์ในประเทศไทยและต่างประเทศโรงงานตั้งอยู่ที่จังหวัดชลบุรี พร้อมมาตรฐานสากล' width={1000} height={1000} className='manager-Image' />
                                        </ScrollReveal>
                                    </div>
                                    <div className="name-top-manager">
                                        <ScrollReveal>
                                            <h2 className='position-topmanager'>{lang === "th" ? QCTH[index] : lang === "en" ? QCEN[index] : QCJP[index]} </h2>
                                            <p className='top-manager-name'>{lang===('th') ? QCNameTH[index] : lang===('en') ? item : QCNameJP[index]}</p>
                                        </ScrollReveal>
                                    </div>
                                </div>

                            )}
                        </div>

                    </div >

                    <div className="PC">
                        <ScrollReveal>
                            <h1 className="position-qaqc">{lang===('th') ? "เจ้าหน้าที่วางแผนการผลิต PC (Production Control)" : lang===('en') ? "Production Control Officer (PC)" : "生産計画担当者（PC: プロダクションコントロール）"} </h1>
                        </ScrollReveal>
                        <ScrollReveal>
                            <h2 className='description-position'>{lang===('th') ? "เป็นผู้ที่รับผิดชอบในการ วางแผน ควบคุม และติดตามการผลิต ให้เป็นไปตามความต้องการของลูกค้า และสอดคล้องกับทรัพยากร" : lang===('en') ? "Responsible for planning, controlling, and monitoring production to meet customer requirements and align with available resources." : "顧客の要望に応じ、資源に合わせて、生産計画の立案、管理、進捗の追跡を担当します。"} </h2>
                        </ScrollReveal>
                        <div className="PC-box">
                            {PCNameTH.map((item, index) =>

                                <div key={index} className="top-manager-box1">

                                    <div className="image-top-manager-box">
                                        <ScrollReveal>
                                            <Image src={ImagePC[index]} alt='บริษัท เจไออีไอ (ประเทศไทย) จำกัด เป็นผู้ผลิต ชิ้นส่วนยางรถยนต์คุณภาพสูงสำหรับอุตสาหกรรมยานยนต์ในประเทศไทยและต่างประเทศโรงงานตั้งอยู่ที่จังหวัดชลบุรี พร้อมมาตรฐานสากล' width={1000} height={1000} className='manager-Image' />
                                        </ScrollReveal>
                                    </div>


                                    <div className="name-top-manager">
                                        <ScrollReveal>
                                            <h2 className='position-topmanager'>{lang === "th" ? PCTH[index] : lang === "en" ? PCEN[index] : PCJP[index]} </h2>
                                            <p className='top-manager-name'>{lang===('th') ? item : lang===('en') ? PCNameEN[index] : PCNameJP[index]}</p>
                                        </ScrollReveal>
                                    </div>
                                </div>

                            )}
                        </div>

                    </div>

                    <div className="PD">
                        <ScrollReveal>
                            <h1 className="position-qaqc">{lang===('th') ? "เจ้าหน้าที่ควบคุมการผลิต PD  (Production Department)" : lang===('en') ? "Production Control Officer (PD: Production Department)" : "生産管理担当者（PD: プロダクションデパートメント）"}</h1>
                        </ScrollReveal>
                        <ScrollReveal>
                            <h2 className='description-position'>{lang===('th') ? "วางแผน ควบคุม และติดตามกระบวนการผลิต ให้เป็นไปตามกำหนดเวลา คุณภาพ และมาตรฐานขององค์กร" : lang===('en') ? "Plan, control, and monitor the production process to ensure it meets deadlines, quality, and organizational standards." : "生産プロセスを計画・管理・監視し、納期、品質、および組織の基準に沿って実施されるようにします。"}</h2>
                        </ScrollReveal>
                        <div className="PD-box">
                            {PDNameEN.map((item, index) =>

                                <div key={index} className="top-manager-box1">
                                    <div className="image-top-manager-box">
                                        <ScrollReveal>
                                            <Image src={ImagePD[index]} alt='บริษัท เจไออีไอ (ประเทศไทย) จำกัด เป็นผู้ผลิต ชิ้นส่วนยางรถยนต์คุณภาพสูงสำหรับอุตสาหกรรมยานยนต์ในประเทศไทยและต่างประเทศโรงงานตั้งอยู่ที่จังหวัดชลบุรี พร้อมมาตรฐานสากล' width={1000} height={1000} className='manager-Image' />
                                        </ScrollReveal>
                                    </div>
                                    <div className="name-top-manager">
                                        <ScrollReveal>
                                            <h2 className='position-topmanager'>{lang === "th" ? PDTH[index] : lang === "en" ? PDEN[index] : PDJP[index]} </h2>
                                            <p className='top-manager-name'>{lang===('th') ? PDNameTH[index] : lang===('en') ? item : PDNameJP[index]}</p>
                                        </ScrollReveal>
                                    </div>
                                </div>

                            )}
                        </div>

                    </div >

                    <div className="HR">
                        <ScrollReveal>
                            <h1 className="position-qaqc">{lang===('th') ? "เจ้าหน้าที่ฝ่ายบุคคล HR (Human Resources)" : lang===('en') ? "Human Resources Officer (HR)" : "人事担当者（HR：ヒューマンリソース）"}</h1>
                        </ScrollReveal>
                        <ScrollReveal>
                            <h2 className='description-position'>{lang===('th') ? "บริหารจัดการและดูแลบุคลากรขององค์กร ตั้งแต่การสรรหา การฝึกอบรม การประเมินผล ไปจนถึงการดูแลสวัสดิการ เพื่อสร้างสภาพแวดล้อมการทำงานที่ดีและสนับสนุนเป้าหมายขององค์กร" : lang===('en') ? "Manage and oversee the organization’s personnel, from recruitment, training, and evaluation to welfare management, in order to create a positive work environment and support the organization’s goals." : "採用、研修、評価から福利厚生の管理まで、組織の人材を総合的に管理・サポートし、良好な職場環境を築き、組織の目標達成を支援します。"}</h2>
                        </ScrollReveal>
                        <div className="HR-box">
                            {HRNameTH.map((item, index) =>

                                <div key={index} className="top-manager-box1">
                                    <div className="image-top-manager-box">
                                        <ScrollReveal>
                                            <Image src={ImageHR[index]} alt='บริษัท เจไออีไอ (ประเทศไทย) จำกัด เป็นผู้ผลิต ชิ้นส่วนยางรถยนต์คุณภาพสูงสำหรับอุตสาหกรรมยานยนต์ในประเทศไทยและต่างประเทศโรงงานตั้งอยู่ที่จังหวัดชลบุรี พร้อมมาตรฐานสากล' width={1000} height={1000} className='manager-Image' />
                                        </ScrollReveal>
                                    </div>
                                    <div className="name-top-manager">
                                        <ScrollReveal>
                                            <h2 className='position-topmanager'>{lang === "th" ? HRTH[index] : lang === "en" ? HREN[index] : HRJP[index]} </h2>
                                            <p className='top-manager-name'>{lang===('th') ? item : lang===('en')? HRNameEN[index] : HRNameJP[index]}</p>
                                        </ScrollReveal>
                                    </div>
                                </div>

                            )}
                        </div>

                    </div>


                    <div className="ACC">
                        <ScrollReveal>
                            <h1 className="position-qaqc"> {lang===('th') ? "เจ้าหน้าที่ฝ่ายบัญชี (Accounting Officer)" : lang===('en') ? "Accounting Officer" : "経理担当者（Accounting Officer）"}</h1>
                        </ScrollReveal>
                        <ScrollReveal>
                            <h2 className='description-position'>{lang===('th') ? "จัดทำ บันทึก และตรวจสอบข้อมูลทางการเงินของบริษัท เพื่อให้ฝ่ายบริหารสามารถใช้ข้อมูลประกอบการตัดสินใจ และให้บริษัทปฏิบัติตามกฎหมายภาษีและมาตรฐานบัญชี" : lang===('en') ? "Prepare, record, and review the company’s financial information so management can make informed decisions and the company complies with tax laws and accounting standards." : "会社の財務情報を作成・記録・確認し、経営陣が意思決定に活用できるようにし、また会社が税法および会計基準を遵守するようにします。"}</h2>
                        </ScrollReveal>
                        <div className="ACC-box">
                            {ACCNameTH.map((item, index) =>

                                <div key={index} className="top-manager-box1">
                                    <div className="image-top-manager-box">
                                        <ScrollReveal>
                                            <Image src={ImageACC[index]} alt='บริษัท เจไออีไอ (ประเทศไทย) จำกัด เป็นผู้ผลิต ชิ้นส่วนยางรถยนต์คุณภาพสูงสำหรับอุตสาหกรรมยานยนต์ในประเทศไทยและต่างประเทศโรงงานตั้งอยู่ที่จังหวัดชลบุรี พร้อมมาตรฐานสากล' width={1000} height={1000} className='manager-Image' />
                                        </ScrollReveal>

                                    </div>
                                    <div className="name-top-manager">
                                        <ScrollReveal>
                                            <h2 className='position-topmanager'>{lang === "th" ? ACCTH[index] : lang === "en" ? ACCEN[index] : ACCJP[index]} </h2>
                                            <p className='top-manager-name'> {lang===('th')? item : lang===('en') ? ACCNameEN[index] : ACCNameJP[index]}</p>
                                        </ScrollReveal>

                                    </div>
                                </div>

                            )}
                        </div>

                    </div>


                    <div className="SA">
                        <ScrollReveal>
                            <h1 className="position-qaqc">{lang===('th') ? "เจ้าหน้าที่ฝ่ายขาย (Sales Officer)" : lang===('en') ? "Sales Officer" : "営業担当者（Sales Officer）"} </h1>
                        </ScrollReveal>

                        <ScrollReveal>
                            <h2 className='description-position'>{lang===('th') ? "นำเสนอสินค้าและบริการของบริษัทแก่ลูกค้า ออกใบแจ้งหนี้ (อินวอยซ์)": lang===('en') ? "Present the company’s products and services to customers and issue invoices." : "顧客に会社の製品やサービスを提案し、請求書を発行します。"}</h2>
                        </ScrollReveal>

                        <div className="SA-box">
                            {SANameTH.map((item, index) =>

                                <div key={index} className="top-manager-box1">
                                    <div className="image-top-manager-box">
                                        <ScrollReveal>
                                            <Image src={ImageSA[index]} alt='บริษัท เจไออีไอ (ประเทศไทย) จำกัด เป็นผู้ผลิต ชิ้นส่วนยางรถยนต์คุณภาพสูงสำหรับอุตสาหกรรมยานยนต์ในประเทศไทยและต่างประเทศโรงงานตั้งอยู่ที่จังหวัดชลบุรี พร้อมมาตรฐานสากล' width={1000} height={1000} className='manager-Image' />
                                        </ScrollReveal>

                                    </div>
                                    <div className="name-top-manager">
                                        <ScrollReveal>
                                            <h2 className='position-topmanager'>{lang === "th" ? SATH[index] : lang === "en" ? SAEN[index] : SAJP[index]} </h2>
                                            <p className='top-manager-name'>{lang===('th') ? item : lang===('en') ? SANameEN[index] : SANameJP[index]}</p>
                                        </ScrollReveal>

                                    </div>
                                </div>
                            )}
                        </div>
                    </div>


                    <div className="IT">
                        <ScrollReveal>

                            <h1 className="position-qaqc">{lang===('th') ? "เจ้าหน้าที่ฝ่าย IT (IT Staff)" : lang===('en') ? "IT Staff" : "IT担当者（ITスタッフ）"}</h1>
                        </ScrollReveal>
                        <ScrollReveal>
                            <h2 className='description-position'>{lang===('th') ? "ติดตั้ง ดูแล และแก้ไขปัญหาระบบสารสนเทศขององค์กร ทั้งด้านอุปกรณ์คอมพิวเตอร์ โปรแกรม ระบบเครือข่าย และฐานข้อมูล รวมถึงช่วยเหลือพนักงานในการใช้งานด้าน IT" : lang===('en') ? "Install, maintain, and troubleshoot the organization’s information systems, including computer hardware, software, networks, and databases, and assist employees with IT usage." : "組織の情報システムをインストール、管理、トラブルシューティングし、コンピュータ機器、ソフトウェア、ネットワーク、データベースを含め、従業員のIT利用をサポートします。"}</h2>
                        </ScrollReveal>

                        <div className="IT-box">
                            {ITNameTH.map((item, index) =>

                                <div key={index} className="top-manager-box1">
                                    <div className="image-top-manager-box">
                                        <ScrollReveal>
                                            <Image src={ImageIT[index]} alt='บริษัท เจไออีไอ (ประเทศไทย) จำกัด เป็นผู้ผลิต ชิ้นส่วนยางรถยนต์คุณภาพสูงสำหรับอุตสาหกรรมยานยนต์ในประเทศไทยและต่างประเทศโรงงานตั้งอยู่ที่จังหวัดชลบุรี พร้อมมาตรฐานสากล' width={1000} height={1000} className='manager-Image' />
                                        </ScrollReveal>

                                    </div>
                                    <div className="name-top-manager">
                                        <ScrollReveal>
                                            <h2 className='position-topmanager'>{lang === "th" ? ITTH[index] : lang === "en" ? ITEN[index] : ITJP[index]} </h2>
                                            <p className='top-manager-name'>{lang===('th') ?  item : lang===('en') ? ITNameEN[index] : ITNameJP[index]}</p>
                                        </ScrollReveal>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>


                    <div className="SE">
                        <ScrollReveal>
                            <h1 className="position-qaqc">{lang===('th') ? "เจ้าหน้าที่ฝ่ายความปลอดภัย (Safety Officer)" : lang===('en') ? "Safety Officer" : "安全担当者（Safety Officer）"}</h1>
                        </ScrollReveal>
                        <ScrollReveal>
                            <h2 className='description-position'>{lang===('th') ? "ป้องกันไม่ให้เกิดอุบัติเหตุและความเสี่ยงในสถานประกอบการ ดูแลเรื่องสิ่งแวดล้อมการทำงาน ความปลอดภัยของพนักงาน เครื่องจักร อุปกรณ์ และสถานที่ รวมถึงให้ความรู้แก่พนักงาน" : lang===('en') ? "Prevent accidents and risks in the workplace, oversee the working environment, employee safety, machinery, equipment, and facilities, and provide training to employees." : "事業所での事故やリスクを防止し、作業環境、従業員の安全、機械、設備、施設を管理し、従業員に教育を提供します。"}</h2>
                        </ScrollReveal>

                        <div className="SE-box">
                            {SENameTH.map((item, index) =>

                                <div key={index} className="top-manager-box1">

                                    <div className="image-top-manager-box">
                                        <ScrollReveal>
                                            <Image src={ImageSE[index]} alt='บริษัท เจไออีไอ (ประเทศไทย) จำกัด เป็นผู้ผลิต ชิ้นส่วนยางรถยนต์คุณภาพสูงสำหรับอุตสาหกรรมยานยนต์ในประเทศไทยและต่างประเทศโรงงานตั้งอยู่ที่จังหวัดชลบุรี พร้อมมาตรฐานสากล' width={1000} height={1000} className='manager-Image' />
                                        </ScrollReveal>

                                    </div>
                                    <div className="name-top-manager">
                                        <ScrollReveal>
                                            <h2 className='position-topmanager'>{lang === "th" ? SETH[index] : lang === "en" ? SEEN[index] : SEJP[index]} </h2>
                                            <p className='top-manager-name'>{lang===('th') ? item : lang===('en') ? SENameEN[index] : SENameJP[index]}</p>
                                        </ScrollReveal>

                                    </div>
                                </div>
                            )}
                        </div>
                    </div>


                    <div className="TE">
                        <ScrollReveal>

                            <h1 className="position-qaqc">{lang===('th') ? "เจ้าหน้าที่ฝ่าย TE (Technical)" : lang===('en') ? "TE Officer (Technical)" : "TE担当者（テクニカル担当）"}</h1>
                        </ScrollReveal>
                        <ScrollReveal>
                            <h2 className='description-position'>{lang===('th') ? "ดูแล สนับสนุน และแก้ไขปัญหาทางด้านเทคนิคของการผลิตและเครื่องจักร เพื่อให้กระบวนการทำงานมีประสิทธิภาพสูงสุด ลดความสูญเสีย และรักษาคุณภาพตามมาตรฐาน" : lang===('en') ? "Oversee, support, and troubleshoot technical aspects of production and machinery to maximize process efficiency, minimize losses, and maintain quality according to standards." : "生産および機械の技術面を管理・サポート・トラブルシューティングし、作業プロセスの効率を最大化し、損失を最小限に抑え、基準に沿った品質を維持します。" }</h2>
                        </ScrollReveal>

                        <div className="TE-box">
                            {TENameTH.map((item, index) =>

                                <div key={index} className="top-manager-box1">
                                    <div className="image-top-manager-box">
                                        <ScrollReveal>
                                            <Image src={ImageTE[index]} alt='บริษัท เจไออีไอ (ประเทศไทย) จำกัด เป็นผู้ผลิต ชิ้นส่วนยางรถยนต์คุณภาพสูงสำหรับอุตสาหกรรมยานยนต์ในประเทศไทยและต่างประเทศโรงงานตั้งอยู่ที่จังหวัดชลบุรี พร้อมมาตรฐานสากล' width={1000} height={1000} className='manager-Image' />
                                        </ScrollReveal>

                                    </div>
                                    <div className="name-top-manager">
                                        <ScrollReveal>
                                            <h2 className='position-topmanager'>{lang === "th" ? TETH[index] : lang === "en" ? TEEN[index]: TEJP[index]} </h2>
                                            <p className='top-manager-name'>{lang===('th') ? item : lang===('en') ? TENameEN[index] : TENameJP[index]}</p>
                                        </ScrollReveal>

                                    </div>
                                </div>
                            )}
                        </div>
                    </div>


                    <div className="WH">
                        <ScrollReveal>
                            <h1 className="position-qaqc">{lang===('th') ? "เจ้าหน้าที่ฝ่ายคลังสินค้า (Warehouse Officer)" : lang===('en') ? "Warehouse Officer" : "倉庫担当者（Warehouse Officer）"}</h1>
                        </ScrollReveal>
                        <ScrollReveal>
                            <h2 className='description-position'>{lang===('th') ? "บริหารจัดการคลังสินค้า ตั้งแต่การรับสินค้า ตรวจสอบคุณภาพ การจัดเก็บ จ่ายออก และดูแลสต็อกให้ถูกต้อง รวมถึงการจัดทำรายงานเพื่อให้ข้อมูลที่ถูกต้องแก่ฝ่ายที่เกี่ยวข้อง" : lang===('en') ? "Manage the warehouse, including receiving goods, quality inspection, storage, dispatch, and accurate stock control, as well as preparing reports to provide accurate information to relevant departments." : "商品の受け入れ、品質チェック、保管、出荷、在庫管理を含め、倉庫を管理し、関連部門に正確な情報を提供するための報告書を作成します。"}</h2>
                        </ScrollReveal>

                        <div className="WH-box">
                            {WHNameTH.map((item, index) =>

                                <div key={index} className="top-manager-box1">
                                    <div className="image-top-manager-box">
                                        <ScrollReveal>
                                            <Image src={ImageWH[index]} alt='บริษัท เจไออีไอ (ประเทศไทย) จำกัด เป็นผู้ผลิต ชิ้นส่วนยางรถยนต์คุณภาพสูงสำหรับอุตสาหกรรมยานยนต์ในประเทศไทยและต่างประเทศโรงงานตั้งอยู่ที่จังหวัดชลบุรี พร้อมมาตรฐานสากล' width={1000} height={1000} className='manager-Image' />
                                        </ScrollReveal>

                                    </div>
                                    <div className="name-top-manager">
                                        <ScrollReveal>
                                            <h2 className='position-topmanager'>{lang === "th" ? WHTH[index] : lang === "en" ? WHEN[index] : WHJP[index]} </h2>
                                            <p className='top-manager-name'>{lang===('th') ? item : lang===('en') ? WHNameEN[index] : WHNameJP[index]}</p>
                                        </ScrollReveal>

                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="PUR">
                        <ScrollReveal>
                            <h1 className="position-qaqc">{lang===('th') ? "เจ้าหน้าที่ฝ่ายจัดซื้อ (Purchasing Officer)" : lang===('en') ? "Purchasing Officer" : "購買担当者（Purchasing Officer）"}</h1>
                        </ScrollReveal>
                        <ScrollReveal>
                            <h2 className='description-position'>{lang===('th') ? "สรรหา คัดเลือก ต่อรอง และสั่งซื้อ วัตถุดิบ อะไหล่ เครื่องจักร อุปกรณ์สำนักงาน รวมถึงบริการต่าง ๆ ที่จำเป็นต่อการดำเนินงานขององค์กร พร้อมทั้งสร้างและรักษาความสัมพันธ์กับซัพพลายเออร์" : lang===('en') ? "Source, select, negotiate, and procure raw materials, parts, machinery, office supplies, and necessary services for organizational operations, while building and maintaining relationships with suppliers." : "原材料、部品、機械、事務用品、ならびに業務に必要な各種サービスの調達、選定、交渉、発注を行い、サプライヤーとの関係を構築・維持します。"}</h2>
                        </ScrollReveal>

                        <div className="PUR-box">
                            {PURNameTH.map((item, index) =>

                                <div key={index} className="top-manager-box1">
                                    <div className="image-top-manager-box">
                                        <ScrollReveal>
                                            <Image src={ImagePUR[index]} alt='บริษัท เจไออีไอ (ประเทศไทย) จำกัด เป็นผู้ผลิต ชิ้นส่วนยางรถยนต์คุณภาพสูงสำหรับอุตสาหกรรมยานยนต์ในประเทศไทยและต่างประเทศโรงงานตั้งอยู่ที่จังหวัดชลบุรี พร้อมมาตรฐานสากล' width={1000} height={1000} className='manager-Image' />
                                        </ScrollReveal>

                                    </div>
                                    <div className="name-top-manager">
                                        <ScrollReveal>
                                            <h2 className='position-topmanager'>{lang === "th" ? PURTH[index] : lang === "en" ? PUREN[index] : PURJP[index]} </h2>
                                            <p className='top-manager-name'>{lang===('th') ?item : lang===('en') ? PURNameEN[index] : PURNameJP[index]}</p>
                                        </ScrollReveal>

                                    </div>
                                </div>
                            )}
                        </div>
                    </div>


                </div >
            </div >
        </div>
    )
}
