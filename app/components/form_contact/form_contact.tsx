'use client'
import React, { useState, useEffect } from 'react'
import Swal from 'sweetalert2'

export default function ContactForm() {
    const [lang, setLang] = useState<'th' | 'en' | 'jp'>('th');

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedLang = localStorage.getItem('lang') as 'th' | 'en' | 'jp' | null;
            if (storedLang) setLang(storedLang);
        }
    }, []);


    const [form, setForm] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
        address: '',
        phone: '',
        honeypot: '' //  เพิ่ม Honeypot field
    });

    const containsURL = (text: string) => {
        const urlPattern = /(https?:\/\/|www\.)/i;
        return urlPattern.test(text);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const sendEmail = async (e: React.FormEvent) => {
        e.preventDefault();
        // const res = await fetch('https://jiei-thai.co.th/api/send-email.php', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(form),
        // });

        // const result = await res.json();
        // console.log(result)

        if (form.honeypot.trim() !== '') {
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







        if (form.honeypot.trim() !== '') {
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


        for (const key in form) {
            const field = key as keyof typeof form;
            if (containsURL(form[field])) {
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

        if (!form.name || !form.email || !form.message) {
            Swal.fire({
                icon: 'warning',
                title: lang === ('th') ? 'กรุณากรอกข้อมูลในช่องที่จำเป็นให้ครบถ้วน' :
                    lang === ('en') ? 'Please complete all required fields' :
                        '必須項目をすべて入力してください',
                text: lang === ('th') ? 'กรุณากรอกข้อมูลทั้งหมด' :
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
                    // const res = await fetch('/api/send-email', {
                    //     method: 'POST',
                    //     headers: { 'Content-Type': 'application/json' },
                    //     body: JSON.stringify(form),
                    // });

                    const res = await fetch('https://jiei-thai.co.th/api/send-email.php', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(form),
                    });

                    // const res = await fetch('http://localhost:8000/api/send-email.php', {
                    //     method: 'POST',
                    //     headers: { 'Content-Type': 'application/json' },
                    //     body: JSON.stringify(form),
                    // });

                    const data = await res.json();
                    // console.log(data)
                    if (data.success) {
                        Swal.fire({
                            icon: 'success',
                            title:
                                lang === ('th') ? "ส่งอีเมลสำเร็จ!" : lang === ('en') ? "Email sent successfully!" : "メールが正常に送信されました！",
                            text: lang === ('th') ? "เราจะติดต่อกลับโดยเร็วที่สุด" : lang === ('en') ? "We will contact you as soon as possible." : "できるだけ早くご連絡いたします。"
                        });
                        setForm({
                            name: '',
                            email: '',
                            subject: '',
                            message: '',
                            address: '',
                            phone: '',
                            honeypot: ''
                        });
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
    };

    return (
        <section className="contact-page-contact" itemScope itemType="https://schema.org/ContactPage">
            <h1 className="text-2xl font-bold mb-4">
                {lang === ('th') ? "ติดต่อเรา | กรุณากรอกข้อมูลของคุณ!" :
                    lang === ('en') ? "Contact Us | Please fill in your information!" :
                        "お問い合わせ | 情報をご入力ください！"}
            </h1>

            <p className="mb-6">
                {lang === ('th') ? "ต้องการข้อมูลเพิ่มเติมเกี่ยวกับผลิตภัณฑ์หรือบริการของเรา? กรอกแบบฟอร์มด้านล่างแล้วทีมงาน JIEI Thailand จะติดต่อกลับโดยเร็วที่สุด" :
                    lang === ('en') ? "Do you want more information about our products or services? Please fill out the form below, and the JIEI Thailand team will get back to you as soon as possible." :
                        "当社の製品やサービスに関する詳細情報をご希望ですか？ 以下のフォームにご記入いただくと、JIEI Thailandのチームができるだけ早くご連絡いたします。"}
            </p>

            <form onSubmit={sendEmail} className="form" method="post">
                <meta itemProp="description" content="ฟอร์มติดต่อ JIEI Thailand เพื่อสอบถามข้อมูลเกี่ยวกับการผลิตชิ้นส่วนยางรถยนต์คุณภาพสูง ISO9001, ISO14001 และ IATF16949" />


                <div className="absolute left-[-9999px]" aria-hidden="true">
                    <label htmlFor="website">Website</label>
                    <input
                        type="text"
                        id="website"
                        name="honeypot"
                        value={form.honeypot}
                        onChange={handleChange}
                        tabIndex={-1}
                        autoComplete="off"
                    />
                </div>

                <div className="contact-input-box">
                    <label htmlFor="fullname" className="label-input">{lang === ('th') ? "ชื่อของคุณ" : lang === ('en') ? "Your Name" : "あなたの名前"}</label>
                    <input type="text" id="fullname" name="name" value={form.name} onChange={handleChange}
                        className="input-data" placeholder={lang === ('th') ? "ชื่อของคุณ" : lang === ('en') ? "Your Name" : "あなたの名前"} itemProp="name" />
                </div>

                <div className="contact-input-box">
                    <label htmlFor="email" className="label-input">{lang === ('th') ? "อีเมล" : lang === ('en') ? "Email" : "メールアドレス"}</label>
                    <input type="email" id="email" name="email" value={form.email} onChange={handleChange}
                        className="input-data" placeholder={lang === ('th') ? "อีเมลของคุณ" : lang === ('en') ? "Your Email" : "あなたのメールアドレス"} itemProp="email" />
                </div>

                <div className="contact-input-box">
                    <label htmlFor="phone" className="label-input">{lang === ('th') ? "เบอร์โทร" : lang === ('en') ? "Phone Number" : "電話番号"}</label>
                    <input type="text" id="phone" name="phone" value={form.phone} onChange={handleChange}
                        className="input-data" placeholder={lang === ('th') ? "เบอร์โทรของคุณ" : lang === ('en') ? "Your Phone Number" : "あなたの電話番号"} itemProp="telephone" />
                </div>

                <div className="contact-input-box">
                    <label htmlFor="address" className="label-input">{lang === ('th') ? "ที่อยู่" : lang === ('en') ? "Address" : "住所"}</label>
                    <input type="text" id="address" name="address" value={form.address} onChange={handleChange}
                        className="input-data" placeholder={lang === ('th') ? "ที่อยู่ของคุณ" : lang === ('en') ? "Your Address" : "あなたの住所"} itemProp="address" />
                </div>

                <div className="contact-input-box">
                    <label htmlFor="subject" className="label-input">{lang === ('th') ? "หัวข้อ" : lang === ('en') ? "Subject" : "件名"}</label>
                    <input type="text" id="subject" name="subject" value={form.subject} onChange={handleChange}
                        className="input-data" placeholder={lang === ('th') ? "หัวข้อการติดต่อ" : lang === ('en') ? "Subject" : "お問い合わせの件名"} />
                </div>

                <div className="contact-input-box">
                    <label htmlFor="message" className="label-input">{lang === ('th') ? "ข้อความ" : lang === ('en') ? "Message" : "メッセージ"}</label>
                    <textarea id="message" name="message" value={form.message} onChange={handleChange}
                        className="message" placeholder={lang === ('th') ? "รายละเอียดข้อความ" : lang === ('en') ? "Message Details" : "メッセージの詳細"}></textarea>
                </div>

                <input type="submit" value={lang === ('th') ? "ส่งข้อความ" : lang === ('en') ? "Send Message" : "メッセージを送信"} className="btn-send-message" />
            </form>
        </section>
    );
}
