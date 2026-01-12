'use client'

import { useState, useEffect } from 'react';
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Swal from 'sweetalert2'
import ScrollReveal from '../ScrollReveal/ScrollReveal';

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);
  const [lang, setLang] = useState<'th' | 'en' | 'jp'>('th');
  // const imageProductIntro = [
  //   `/Menu/Menu (1).png`,
  //   `/Menu/Menu (2).png`,
  //   `/Menu/Menu (3).png`,
  // ]
  // const location = [
  //   '#Glass Seal',
  //   '#Engine Seal',
  //   '#Weatherstrip Door Seal',
  // ]
  const productsEN = [
    // Hood Seal
    {
      id: 1,
      category: 'Hood Seal',
      title: 'Hood Seal Front',
      image: '/Products/Hood seal Front.png',
      content: `[EPDM extrusion product + TPO molded product] Sealing material for hood, headlight, and grille. Having refined its cross-section to avoid interference with the front upper surface of the engine room, it improves sealing performance and complies with the regulation for exterior prongs.`
    },
    {
      id: 2,
      category: 'Hood Seal',
      title: 'Hood Seal Rear',
      image: '/Products/Hood seal Rear.png',
      content: `[EPDM sponge rubber + EPDM solid rubber] Buffering material between the hood and the cowl top. Removing the cored bar enabled lightweight construction.`
    },
    // Glass Seal
    {
      id: 3,
      category: 'Glass Seal',
      title: 'Front Window Molding',
      image: '/Products/Front Window Molding.png',
      content: `[EPDM sponge rubber + EPDM solid rubber + TPO molded product] Transition from resin to rubber enhanced lightweight construction, aerodynamic performance, and sound insulation.`
    },
    {
      id: 4,
      category: 'Glass Seal',
      title: 'Dam Rubber / Dam lip rubber',
      image: '/Products/Dam Rubber  Dam lip rubber.png',
      content: `[Buffering material between vehicle body and glass] Not only waterproof, but also adding aesthetic value to the vehicle’s external appearance. Corresponding to the demand for product individualization.`
    },
    // Weatherstrip Door Seal
    {
      id: 5,
      category: 'Weatherstrip Door Seal',
      title: 'Back Door Weatherstrip',
      image: '/Products/Back Door Weatherstrip.png',
      content: `[Sealing material for vehicle body and doors] This product is highly evaluated in terms of water-tightness, sound insulation, and closing performance. It also enables lightweight design to respond to market needs.`
    },
    // Door Opening Seal
    {
      id: 6,
      category: 'Door Opening Seal',
      title: 'Door Opening Seal',
      image: '/Products/Door opening trim.png',
      content: `[3-layer extrusion product: EPDM sponge rubber + EPDM solid rubber + cored bar.] A 4-layer product is also available. As a sealing material attached to vehicle doors and door frames, it is proven to deliver excellent sound insulation, water-tightness, closing performance, and lightweight characteristics.`
    },
    // Door Lower Seal
    {
      id: 7,
      category: 'Door Lower Seal',
      title: 'Door Lower Seal',
      image: '/Products/Door lower seal.png',
      content: `[Sealing material for vehicle body and doors] A sealing material to keep out water, mud, and sand. It is superior in sound insulation and lightness.`
    },
    // Engine Seal
    {
      id: 8,
      category: 'Engine Seal',
      title: 'Engine Seal',
      image: '/Products/Air intake seal.png',
      content: `[EPDM sponge rubber + EPDM solid rubber] Sealing material that suppresses warm air and allows only cool air to pass through the engine room to boost fuel efficiency.`
    },
  ]

  const productTH = [
    {
      id: 1,
      category: 'ซีลฝากระโปรง',
      title: 'ซีลฝากระโปรง',
      image: '/Products/Hood seal Front.png',
      content: `[ผลิตจาก EPDM อัดรีด + TPO ขึ้นรูป] วัสดุซีลสำหรับฝากระโปรง ไฟหน้า และกระจังหน้า ปรับรูปตัดหน้าตัดให้ไม่รบกวนพื้นผิวด้านบนของห้องเครื่องด้านหน้า ทำให้ประสิทธิภาพการซีลดีขึ้น และสอดคล้องกับข้อกำหนดด้านชิ้นส่วนภายนอก`
    },
    {
      id: 2,
      category: 'ซีลฝากระโปรง',
      title: 'ซีลฝากระโปรง',
      image: '/Products/Hood seal Rear.png',
      content: `[EPDM ฟองน้ำ + EPDM ยางทึบ] วัสดุกันกระแทกระหว่างฝากระโปรงและคาวล์ท็อป การนำแกนเหล็กออกทำให้โครงสร้างมีน้ำหนักเบาลง`
    },
    {
      id: 3,
      category: 'ซีลกระจก',
      title: 'โมลดิ้งกระจกหน้า',
      image: '/Products/Front Window Molding.png',
      content: `[EPDM ฟองน้ำ + EPDM ยางทึบ + TPO ขึ้นรูป] การปรับจากวัสดุเรซินมาเป็นยาง ช่วยให้น้ำหนักเบาขึ้น เพิ่มประสิทธิภาพอากาศพลศาสตร์ และเพิ่มการเก็บเสียง`
    },
    {
      id: 4,
      category: 'ซีลกระจก',
      title: 'Dam Rubber / Dam lip rubber',
      image: '/Products/Dam Rubber  Dam lip rubber.png',
      content: `[วัสดุกันกระแทกระหว่างตัวถังและกระจก] ไม่เพียงแค่กันน้ำ แต่ยังช่วยเพิ่มความสวยงามภายนอกรถ รองรับความต้องการด้านเอกลักษณ์ของสินค้า`
    },
    {
      id: 5,
      category: 'ซีลขอบประตู',
      title: 'ซีลประตู',
      image: '/Products/Back Door Weatherstrip.png',
      content: `[วัสดุซีลระหว่างตัวรถและประตู] ได้รับการประเมินสูงในด้านการกันน้ำ การเก็บเสียง และประสิทธิภาพการปิดประตู อีกทั้งยังรองรับการออกแบบน้ำหนักเบา`
    },
    {
      id: 6,
      category: 'ซีลขอบช่องประตู',
      title: 'ซีลโอเพนนิ่งประตู',
      image: '/Products/Door opening trim.png',
      content: `[ผลิตภัณฑ์อัดรีด 3 ชั้น: EPDM ฟองน้ำ + EPDM ยางทึบ + แกนเหล็ก] มีรุ่น 4 ชั้นด้วย ใช้เป็นซีลติดประตูและกรอบประตู ให้ประสิทธิภาพสูงเรื่องการเก็บเสียง กันน้ำ การปิดประตู และน้ำหนักเบา`
    },
    {
      id: 7,
      category: 'ซีลล่างประตู',
      title: 'ซีลล่างประตู',
      image: '/Products/Door lower seal.png',
      content: `[วัสดุซีลสำหรับตัวรถและประตู] ป้องกันน้ำ โคลน และทรายได้ดีเยี่ยม โดดเด่นในด้านการเก็บเสียงและน้ำหนักเบา`
    },
    {
      id: 8,
      category: 'ซีลเครื่องยนต์',
      title: 'ซีลห้องเครื่อง',
      image: '/Products/Air intake seal.png',
      content: `[EPDM ฟองน้ำ + EPDM ยางทึบ] วัสดุซีลที่ช่วยกั้นอากาศร้อน และให้อากาศเย็นไหลผ่านเข้าสู่ห้องเครื่องเพื่อเพิ่มประสิทธิภาพการประหยัดน้ำมัน`
    }

  ]

  const productJP = [
    {
      id: 1,
      category: 'フードシール',
      title: 'フロントフードシール',
      image: '/Products/Hood seal Front.png',
      content: `[EPDM 押出製品 + TPO 成形品] フード、ヘッドライト、グリル用のシーリング材。断面形状を最適化し、エンジンルーム前上部との干渉を防ぎ、シール性能を向上。外装突起規制にも適合。`
    },
    {
      id: 2,
      category: 'フードシール',
      title: 'リアフードシール',
      image: '/Products/Hood seal Rear.png',
      content: `[EPDM スポンジゴム + EPDM ソリッドゴム] フードとカウルトップ間の緩衝材。芯材の除去により軽量化を実現。`
    },
    {
      id: 3,
      category: 'ガラスシール',
      title: 'フロントウィンドウモールディング',
      image: '/Products/Front Window Molding.png',
      content: `[EPDM スポンジゴム + EPDM ソリッドゴム + TPO 成形品] 樹脂からゴムへの変更で軽量化、空力性能、遮音性が向上。`
    },
    {
      id: 4,
      category: 'ガラスシール',
      title: 'ダムラバー / ダムリップラバー',
      image: '/Products/Dam Rubber  Dam lip rubber.png',
      content: `[車体とガラス間の緩衝材] 防水だけでなく車両外観の美観向上にも寄与。個性化ニーズに対応。`
    },
    {
      id: 5,
      category: 'ウェザーストリップドアシール',
      title: 'バックドアウェザーストリップ',
      image: '/Products/Back Door Weatherstrip.png',
      content: `[車体とドアのシーリング材] 防水性、遮音性、閉まり性能で高評価。市場ニーズに応える軽量設計も可能。`
    },
    {
      id: 6,
      category: 'ドアオープニングシール',
      title: 'ドアオープニングシール',
      image: '/Products/Door opening trim.png',
      content: `[3 層押出製品: EPDM スポンジ + EPDM ソリッド + 芯材] 4 層タイプもあり、遮音性、防水性、閉まり性能、軽量性に優れる。`
    },
    {
      id: 7,
      category: 'ドアロアシール',
      title: 'ドアロアシール',
      image: '/Products/Door lower seal.png',
      content: `[車体とドアのシーリング材] 水・泥・砂の侵入を防ぎ、遮音性と軽量性に優れる。`
    },
    {
      id: 8,
      category: 'エンジンシール',
      title: 'エンジンシール',
      image: '/Products/Air intake seal.png',
      content: `[EPDM スポンジゴム + EPDM ソリッドゴム] 暖気を遮断し、冷気のみをエンジンルームへ通すことで燃費向上に寄与。`
    }

  ]
  const containsURL = (text: string) => {
    const urlPattern = /(https?:\/\/|www\.)/i;
    return urlPattern.test(text);
  };




  const categories = [...new Set(productsEN.map(p => p.category))]

  const [dataForForm, setDataForForm] = useState({ productName: '', message: '', email: '', phone: '', honeypot: '' })

  const formData = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setDataForForm({ ...dataForForm, [e.target.name]: e.target.value })
  }

  const submitData = async (e: React.FormEvent) => {
    e.preventDefault()

    if (dataForForm.honeypot.trim() !== '') {
      Swal.fire({
        icon: 'warning',
        title:
          lang === ('th') ? 'ตรวจจับบอท!' :
            lang === ('en') ? 'Bot detected!' :
              'ボットを検出しました！',
        text:
          lang === ('th') ? 'ระบบได้ปฏิเสธการส่งเพื่อความปลอดภัย' :
            lang === ('en') ? 'Submission was blocked for security reasons.' :
              'セキュリティ上の理由で送信がブロックされました。',
      });
      return;
    }

    for (const key in dataForForm) {
      const field = key as keyof typeof dataForForm;
      if (containsURL(dataForForm[field])) {
        Swal.fire({
          icon: 'error',
          title:
            lang === ('th') ? 'ไม่อนุญาตให้กรอก URL' :
              lang === ('en') ? 'URL is not allowed' :
                'URLの入力は許可されていません',
          text:
            lang === ('th') ? 'กรุณาลบลิงก์ออกจากข้อความ' :
              lang === ('en') ? 'Please remove any links from your input.' :
                '入力からリンクを削除してください。',
        });
        return;
      }
    }

    if (!dataForForm.email || !dataForForm.message) {
      Swal.fire({
        icon: 'warning',
        title: lang === ('th') ? 'กรุณากรอกข้อมูลในช่องที่จำเป็นให้ครบถ้วน' :
          lang === ('en') ? 'Please complete all required fields' :
            '必須項目をすべて入力してください',
        text: lang === ('th') ? 'กรุณากรอกชื่อ อีเมล และข้อความ' :
          lang === ('en') ? 'Please enter your name, email, and message.' :
            '名前、メールアドレス、およびメッセージを入力してください。',
      });
      return;
    }
    Swal.fire({
      title:
        lang === ('th') ? 'คุณแน่ใจหรือไม่?' : lang === ('en') ? "Are you sure?" : "本当によろしいですか？",
      text:
        lang === ('th') ? "ไม่สามารถย้อนกลับได้!" : lang === ('en') ? "This action cannot be undone!" : "この操作は元に戻せません！",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText:
        lang === ('th') ? "ใช่ ส่งเลย!" : lang === ('en') ? "Yes, send it!" : "はい、送信してください！",
      cancelButtonText:
        lang === ('th') ? "ยกเลิก" : lang === ('en') ? "Cancel" : "キャンセル"

    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await fetch('https://jiei-thai.co.th/api-product/send-email-product.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dataForForm),
          });

          const data = await res.json();
          if (data.success) {
            Swal.fire({
              icon: 'success',
              title:
                lang === ('th') ? "ส่งอีเมลสำเร็จ!" : lang === ('en') ? "Email sent successfully!" : "メールが正常に送信されました！",
              text: lang === ('th') ? "เราจะติดต่อกลับโดยเร็วที่สุด" : lang === ('en') ? "We will contact you as soon as possible." : "できるだけ早くご連絡いたします。"
            });
            setDataForForm({
              productName: '',
              email: '',
              message: '',
              phone: '',
              honeypot: ''
            });
            window.location.href = "/products"
          } else {
            Swal.fire({
              icon: 'error',
              title: lang === ('th') ? "เกิดข้อผิดพลาด" : lang === ('en') ? "Error occurred" : "エラーが発生しました。",
              text: data.message || (lang === ('th') ? "ไม่สามารถส่งอีเมลได้" : lang === ('en') ? "Cannot send email." : "メールを送信できませんでした。")
            });
          }
        } catch (err) {
          console.error(err);
          Swal.fire({
            icon: 'error',
            title: lang === ('th') ? "เกิดข้อผิดพลาด" : lang === ('en') ? "Error occurred" : "エラーが発生しました。",
            text: lang === ('th') ? "เกิดปัญหาขณะส่งอีเมล" : lang === ('en') ? "An issue occurred while sending the email." : "メール送信中に問題が発生しました。"
          });
        }
      }
    });

  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedLang = localStorage.getItem('lang') as 'th' | 'en' | 'jp' | null;
      if (storedLang) setLang(storedLang);
    }
  }, [])
  useEffect(() => {

    if (selectedProduct !== null) {
      setDataForForm(prev => ({
        ...prev,
        productName: productsEN[selectedProduct - 1].title
      }))
    }
  }, [selectedProduct])
  return (
    <div>

      {selectedProduct === null ? (
        <>
        <ScrollReveal>
          <h1 className="title-product-page">
             {lang == 'en' ? "Our products" : lang == "th" ? "สินค้าของเรา" : "当社の商品"}
          </h1>
          <div className="line" />
          </ScrollReveal>
          {/* <div className="menuProductBox">
            <div className="boxMargin">
              {imageProductIntro.map((imageSrc, index) => (
                <ScrollReveal key={index}>
                  <div key={index} className="menuProductItem">
                    <Link href={location[index]}>
                      <Image
                        src={imageSrc}
                        alt={`ผู้ผลิตชิ้นส่วนยางรถยนต์ จังหวัดชลบุรี`}
                        width={200}
                        height={250}
                        className={`menuProductImage${index}`}
                        loading='lazy'
                      />
                    </Link>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div> */}


          <div className='columns-product'>
            {categories.map(category => (
              <div key={category} className="menu-Hood-seal-Front" id={category}>
                <ScrollReveal>
                  <h1 className="Hood-Seal">{category}</h1>
                </ScrollReveal>

                <div className="grad-products">
                  {productsEN
                    .filter(p => p.category === category)
                    .map((item, index) => (
                      <ScrollReveal key={index}>
                        <Link className='top-locationProduct' href={'#top'}>
                          <div onClick={() => setSelectedProduct(item.id)} className="box-Hood-seal-Front">
                            <div className="box-spi-product">
                              <div className="item-Hood-seal-Front-image">
                                <Image
                                  src={item.image}
                                  alt={`ผู้ผลิตชิ้นส่วนยางรถยนต์ จังหวัดชลบุรี`}
                                  width={300}
                                  height={200}
                                  className="image-Hood-seal-Front"
                                  loading="lazy"
                                />
                                <h2 className="titleProduct">
                                  {lang === 'th' ? productTH[item.id - 1].title : lang === 'en' ? item.title : productJP[item.id - 1].title}
                                </h2>
                              </div>
                              <div className="item-Hood-seal-Front">
                                {/* <h2 className="titleProduct">
                                  {lang === 'th' ? productTH[item.id - 1].title : lang === 'en' ? item.title : productJP[item.id - 1].title}
                                </h2> */}
                                <p className="text-Hood-seal-Front">{lang === 'th' ? productTH[item.id - 1].content : lang === 'en' ? item.content : productJP[item.id - 1].content}</p>
                              </div>
                            </div>


                          </div>
                        </Link>
                      </ScrollReveal>

                    ))}
                </div>
              </div>
            ))}
          </div>

        </>
      ) : (
        <>

          <div className="title-product-active">
            <h1 className='product-title-text'> {lang === 'th' ? productTH[selectedProduct - 1].title : productsEN[selectedProduct - 1].title}</h1>
          </div>
          <div className="line" />

          <div className="grid-product-active">
            <div className="form-product-active">
              <div className="content-product-active">
                <p className="content-active"> {lang === 'th' ? productTH[selectedProduct - 1].content : lang === 'en' ? productsEN[selectedProduct - 1].content : productJP[selectedProduct - 1].content}</p>
              </div>

              <form onSubmit={submitData} className='form-contactUs'>
                <h2 className='text-contactUs'>{lang === 'th' ? "สอบถามเกี่ยวกับสินค้า " : lang === 'en' ? " Product Inquiry" : " 商品に関するお問い合わせ"} {lang === 'th' ? productTH[selectedProduct - 1].title : lang === 'en' ? productsEN[selectedProduct - 1].title : productJP[selectedProduct - 1].title}</h2>

                <div className="input-form-contactUs">
                  <label className='label-input-contactUs' htmlFor="product-name">Product Name</label>
                  <div className="input-data-product">
                    <input required defaultValue={productsEN[selectedProduct - 1].title} readOnly className='input-contactUs' type="text" name="productName" id="product-name" />
                    <input onChange={formData} type="hidden" defaultValue={productsEN[selectedProduct - 1].title} name="productName" placeholder='product name' />
                  </div>
                </div>

                <div className="input-form-contactUs">
                  <label className='label-input-contactUs' htmlFor="message">Message</label>
                  <div className="input-data-product">
                    <input onChange={formData} required className='input-contactUs' placeholder='message' type="text" name="message" id="message" />
                  </div>
                </div>


                <div className="input-form-contactUs">
                  <label className='label-input-contactUs' htmlFor="email">Email</label>
                  <div className="input-data-product">
                    <input onChange={formData} required className='input-contactUs' placeholder='gmail' type="email" name="email" id="email" />
                  </div>
                </div>


                <div className="input-form-contactUs">
                  <label className='label-input-contactUs' htmlFor="phone">Phone</label>
                  <div className="input-data-product">
                    <input onChange={formData} required className='input-contactUs' placeholder='phone' type="number" name="phone" id="phone" />
                  </div>
                </div>


                <div className="btn-submit-contactUs">
                  <button className='submit-contactUs' type='submit'>Send</button>
                </div>
              </form>

            </div>

            <div className="card-product-active">
              <div className="image-active-product">
                <Image className='image-active' src={productsEN[selectedProduct - 1].image} alt='ผู้ผลิตชิ้นส่วนยางรถยนต์ จังหวัดชลบุรี' width={1000} height={1000} loading='lazy' />
              </div>
            </div>

          </div>

          <div onClick={() => setSelectedProduct(null)} className="btn-back-product">
            <button>Back</button>
          </div>
        </>
      )}

    </div>
  )
}