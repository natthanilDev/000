'use client'
import { useState, useEffect } from 'react';
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Swal from 'sweetalert2'

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);
  const [lang, setLang] = useState<'th' | 'en' | 'jp'>('th');
  const imageProductIntro = [
    `/Menu/Menu (1).png`,
    `/Menu/Menu (2).png`,
    `/Menu/Menu (3).png`,
  ]
  const location = [
    '#Glass Seal',
    '#Engine Seal',
    '#Weatherstrip Door Seal',
  ]
  const products = [
    // Hood Seal
    {
      id: 1,
      category: 'Hood Seal',
      title: 'Hood Seal Front',
      image: '/Menu/Hood seal Front.png',
      content: `[EPDM extrusion product + TPO molded product] Sealing material for hood, headlight, and grille. Having refined its cross-section to avoid interference with the front upper surface of the engine room, it improves sealing performance and complies with the regulation for exterior prongs.`
    },
    {
      id: 2,
      category: 'Hood Seal',
      title: 'Hood Seal Rear',
      image: '/Menu/Hood seal Rear.png',
      content: `[EPDM sponge rubber + EPDM solid rubber] Buffering material between the hood and the cowl top. Removing the cored bar enabled lightweight construction.`
    },
    // Glass Seal
    {
      id: 3,
      category: 'Glass Seal',
      title: 'Front Window Molding',
      image: '/Menu/Front Window Molding.png',
      content: `[EPDM sponge rubber + EPDM solid rubber + TPO molded product] Transition from resin to rubber enhanced lightweight construction, aerodynamic performance, and sound insulation.`
    },
    {
      id: 4,
      category: 'Glass Seal',
      title: 'Dam Rubber / Dam lip rubber',
      image: '/Menu/Dam Rubber  Dam lip rubber.png',
      content: `[Buffering material between vehicle body and glass] Not only waterproof, but also adding aesthetic value to the vehicle’s external appearance. Corresponding to the demand for product individualization.`
    },
    // Weatherstrip Door Seal
    {
      id: 5,
      category: 'Weatherstrip Door Seal',
      title: 'Back Door Weatherstrip',
      image: '/Menu/Back Door Weatherstrip.png',
      content: `[Sealing material for vehicle body and doors] This product is highly evaluated in terms of water-tightness, sound insulation, and closing performance. It also enables lightweight design to respond to market needs.`
    },
    // Door Opening Seal
    {
      id: 6,
      category: 'Door Opening Seal',
      title: 'Door Opening Seal',
      image: '/Menu/Door opening trim.png',
      content: `[3-layer extrusion product: EPDM sponge rubber + EPDM solid rubber + cored bar.] A 4-layer product is also available. As a sealing material attached to vehicle doors and door frames, it is proven to deliver excellent sound insulation, water-tightness, closing performance, and lightweight characteristics.`
    },
    // Door Lower Seal
    {
      id: 7,
      category: 'Door Lower Seal',
      title: 'Door Lower Seal',
      image: '/Menu/Door lower seal.png',
      content: `[Sealing material for vehicle body and doors] A sealing material to keep out water, mud, and sand. It is superior in sound insulation and lightness.`
    },
    // Engine Seal
    {
      id: 8,
      category: 'Engine Seal',
      title: 'Engine Seal',
      image: '/Menu/Air intake seal.png',
      content: `[EPDM sponge rubber + EPDM solid rubber] Sealing material that suppresses warm air and allows only cool air to pass through the engine room to boost fuel efficiency.`
    },
  ]
  const containsURL = (text: string) => {
    const urlPattern = /(https?:\/\/|www\.)/i;
    return urlPattern.test(text);
  };




  const categories = [...new Set(products.map(p => p.category))]

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

    if (!dataForForm.productName || !dataForForm.email || !dataForForm.message || !dataForForm.phone) {
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
          const res = await fetch('/api/products', {
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
            window.location.reload()
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
  })
  useEffect(() => {
    if (selectedProduct !== null) {
      setDataForForm(prev => ({
        ...prev,
        productName: products[selectedProduct - 1].title
      }))
    }
  }, [selectedProduct])
  return (
    <div>

      {selectedProduct === null ? (
        <>
          <div className="menuProductBox">
            <div className="boxMargin">
              {imageProductIntro.map((imageSrc, index) => (
                <div key={index} className="menuProductItem">
                  <Link href={location[index]}>
                    <Image
                      src={imageSrc}
                      alt={`Product ${index + 1}`}
                      width={200}
                      height={250}
                      className={`menuProductImage${index}`}
                      loading='lazy'
                    />
                  </Link>
                </div>
              ))}
            </div>
          </div>


          <div>
            {categories.map(category => (
              <div key={category} className="menu-Hood-seal-Front" id={category}>
                <h1 className="Hood-Seal">{category}</h1>
                <div className="grad-products">
                  {products
                    .filter(p => p.category === category)
                    .map((item, index) => (

                      <div onClick={() => setSelectedProduct(item.id)} key={index} className="box-Hood-seal-Front">
                        <div className="item-Hood-seal-Front-image">
                          <Image
                            src={item.image}
                            alt={item.title}
                            width={300}
                            height={200}
                            className="image-Hood-seal-Front"
                            loading="lazy"
                          />
                        </div>
                        <div className="item-Hood-seal-Front">
                          <h2 className="titleProduct">{item.title}</h2>
                          <p className="text-Hood-seal-Front">{item.content}</p>
                        </div>

                      </div>

                    ))}
                </div>
              </div>
            ))}
          </div>

        </>
      ) : (
        <>

          <div className="title-product-active">
            <h1 className='product-title-text'> {products[selectedProduct - 1].title}</h1>
          </div>
          <div className="line" />

          <div className="grid-product-active">
            <div className="form-product-active">
              <div className="content-product-active">
                <p className="content-active"> {products[selectedProduct - 1].content}</p>
              </div>

              <form onSubmit={submitData} className='form-contactUs'>
                <h2 className='text-contactUs'>สอบถามเกี่ยวกับสินค้า {products[selectedProduct].title}</h2>

                <div className="input-form-contactUs">
                  <label className='label-input-contactUs' htmlFor="product-name">Product Name</label>
                  <div className="input-data-product">
                    <input required defaultValue={products[selectedProduct - 1].title} readOnly className='input-contactUs' type="text" name="productName" id="product-name" />
                    <input onChange={formData} type="hidden" defaultValue={products[selectedProduct - 1].title} name="productName" />
                  </div>
                </div>

                <div className="input-form-contactUs">
                  <label className='label-input-contactUs' htmlFor="message">Message</label>
                  <div className="input-data-product">
                    <input onChange={formData} required className='input-contactUs' type="text" name="message" id="message" />
                  </div>
                </div>


                <div className="input-form-contactUs">
                  <label className='label-input-contactUs' htmlFor="email">Email</label>
                  <div className="input-data-product">
                    <input onChange={formData} required className='input-contactUs' type="email" name="email" id="email" />
                  </div>
                </div>


                <div className="input-form-contactUs">
                  <label className='label-input-contactUs' htmlFor="phone">Phone</label>
                  <div className="input-data-product">
                    <input onChange={formData} required className='input-contactUs' type="number" name="phone" id="phone" />
                  </div>
                </div>


                <div className="btn-submit-contactUs">
                  <button className='submit-contactUs' type='submit'>Send</button>
                </div>
              </form>

            </div>

            <div className="card-product-active">
              <div className="image-active-product">
                <Image className='image-active' src={products[selectedProduct - 1].image} alt='' width={1000} height={1000} loading='lazy' />
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