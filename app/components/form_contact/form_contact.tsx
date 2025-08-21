'use client'
import React, { useState } from 'react'
import Swal from 'sweetalert2'

export default function ContactForm() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
        address: '',
        phone: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const sendEmail = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!form.name || !form.email || !form.message) {
            Swal.fire({
                icon: 'warning',
                title: 'กรอกข้อมูลไม่ครบ',
                text: 'กรุณากรอกชื่อ อีเมล และข้อความ',
            });
            return;
        }

        Swal.fire({
            title: 'คุณแน่ใจหรือไม่?',
            text: "ไม่สามารถย้อนกลับได้!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'ใช่ ส่งเลย!',
            cancelButtonText: 'ยกเลิก'
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const res = await fetch('/api/send-email', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(form),
                    });

                    const data = await res.json();
                    if (data.success) {
                        Swal.fire({
                            icon: 'success',
                            title: 'ส่งอีเมลสำเร็จ!',
                            text: 'เราจะติดต่อกลับโดยเร็วที่สุด',
                        });
                        setForm({
                            name: '',
                            email: '',
                            subject: '',
                            message: '',
                            address: '',
                            phone: ''
                        })
                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: 'เกิดข้อผิดพลาด',
                            text: data.message || 'ไม่สามารถส่งอีเมลได้',
                        });
                    }
                } catch (err) {
                    console.error(err);
                    Swal.fire({
                        icon: 'error',
                        title: 'เกิดข้อผิดพลาด',
                        text: 'เกิดปัญหาขณะส่งอีเมล',
                    });
                }
            }
        });
    };

    return (
        <section className="contact-page-contact" itemScope itemType="https://schema.org/ContactPage">
            <h1 className="text-2xl font-bold mb-4">
                ติดต่อเรา | JIEI Thailand - ผู้ผลิตชิ้นส่วนยางรถยนต์คุณภาพสูง
            </h1>

            <p className="mb-6">
                ต้องการข้อมูลเพิ่มเติมเกี่ยวกับผลิตภัณฑ์หรือบริการของเรา?
                กรอกแบบฟอร์มด้านล่างแล้วทีมงาน JIEI Thailand จะติดต่อกลับโดยเร็วที่สุด
            </p>

            <form onSubmit={sendEmail} className="form" method="post">
                <meta itemProp="description" content="ฟอร์มติดต่อ JIEI Thailand เพื่อสอบถามข้อมูลเกี่ยวกับการผลิตชิ้นส่วนยางรถยนต์คุณภาพสูง ISO9001, ISO14001 และ IATF16949" />

                <div className="contact-input-box">
                    <label htmlFor="fullname" className="label-input">ชื่อของคุณ</label>
                    <input type="text" id="fullname" name="name" value={form.name} onChange={handleChange}
                        className="input-data" placeholder="ชื่อของคุณ" title="กรุณากรอกชื่อ" itemProp="name" />
                </div>

                <div className="contact-input-box">
                    <label htmlFor="email" className="label-input">อีเมล</label>
                    <input type="email" id="email" name="email" value={form.email} onChange={handleChange}
                        className="input-data" placeholder="อีเมลของคุณ" title="กรุณากรอกอีเมล" itemProp="email" />
                </div>

                <div className="contact-input-box">
                    <label htmlFor="phone" className="label-input">เบอร์โทร</label>
                    <input type="text" id="phone" name="phone" value={form.phone} onChange={handleChange}
                        className="input-data" placeholder="เบอร์โทรของคุณ" itemProp="telephone" />
                </div>

                <div className="contact-input-box">
                    <label htmlFor="subject" className="label-input">หัวข้อ</label>
                    <input type="text" id="subject" name="subject" value={form.subject} onChange={handleChange}
                        className="input-data" placeholder="หัวข้อการติดต่อ" />
                </div>

                <div className="contact-input-box">
                    <label htmlFor="message" className="label-input">ข้อความ</label>
                    <textarea id="message" name="message" value={form.message} onChange={handleChange}
                        className="message" placeholder="รายละเอียดข้อความ"></textarea>
                </div>

                <input type="submit" value="ส่งข้อความ" className="btn-send-message" />
            </form>
        </section>
    );
}
