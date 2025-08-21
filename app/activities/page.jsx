"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

export default function ActivitiesPage() {
    const searchParams = useSearchParams();

    // ดึงค่า page จาก query string เช่น ?page=2
    const page = searchParams.get("page");
    const currentPage = page ? parseInt(page, 10) : 1;

    // กำหนดจำนวนรายการต่อหน้า
    const perPage = 4;

    // ตัวอย่าง mock data (ในโปรเจคจริง อาจ fetch จาก DB หรือ API)
    const activities = [
        "Factory Tour 2025",
        "ISO14001 Training",
        "CSR Project - Tree Planting",
        "New Machinery Installation",
        "Annual Sports Day",
        "Employee Skill Contest",
        "Community Support Program",
        "New Product Launch",
        "Team Building Camp",
        "Safety First Campaign",
    ];

    const Image_activities = [
        "/Jiei Thailand - ผู้ผลิตชิ้นส่วนยางรถยนต์คุณภาพสูงในชลบุรี.png",
        "/Jiei Thailand - ผู้ผลิตชิ้นส่วนยางรถยนต์คุณภาพสูงในชลบุรี.png",
        "/Jiei Thailand - ผู้ผลิตชิ้นส่วนยางรถยนต์คุณภาพสูงในชลบุรี.png",
        "/Jiei Thailand - ผู้ผลิตชิ้นส่วนยางรถยนต์คุณภาพสูงในชลบุรี.png",
        "/Jiei Thailand - ผู้ผลิตชิ้นส่วนยางรถยนต์คุณภาพสูงในชลบุรี.png",
        "/Jiei Thailand - ผู้ผลิตชิ้นส่วนยางรถยนต์คุณภาพสูงในชลบุรี.png",
        "/Jiei Thailand - ผู้ผลิตชิ้นส่วนยางรถยนต์คุณภาพสูงในชลบุรี.png",
        "/Jiei Thailand - ผู้ผลิตชิ้นส่วนยางรถยนต์คุณภาพสูงในชลบุรี.png",
        "/Jiei Thailand - ผู้ผลิตชิ้นส่วนยางรถยนต์คุณภาพสูงในชลบุรี.png",
        "/Jiei Thailand - ผู้ผลิตชิ้นส่วนยางรถยนต์คุณภาพสูงในชลบุรี.png",
    ];

    // slice ข้อมูลให้ตรงกับ page
    const start = (currentPage - 1) * perPage;
    const end = start + perPage;
    const paginatedData = activities.slice(start, end);
    const totalPages = Math.ceil(activities.length / perPage);

    // Structured Data JSON-LD
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "กิจกรรมบริษัท JIEI Thailand",
        description:
            "ติดตามกิจกรรมและข่าวสารล่าสุดจากบริษัท JIEI Thailand ผู้ผลิตชิ้นส่วนยางรถยนต์คุณภาพสูงในชลบุรี",
        itemListElement: activities.map((activity, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: activity,
            url: `https://jieithai.com/activities?page=${Math.floor(index / perPage) + 1}`,
        })),
    };

    return (
        <>
            <Head>
                <title>
                    Activities - JIEI Thailand | ผู้ผลิตชิ้นส่วนยางรถยนต์คุณภาพสูง
                </title>
                <meta
                    name="description"
                    content="ติดตามกิจกรรมล่าสุดของบริษัท JIEI Thailand เช่น การอบรม ISO14001, CSR, Factory Tour และการพัฒนาบุคลากร"
                />
                <meta
                    name="keywords"
                    content="JIEI Thailand, กิจกรรมบริษัท, Factory Tour, ISO Training, CSR, Rubber Parts Manufacturer"
                />
                <meta property="og:title" content="กิจกรรม JIEI Thailand" />
                <meta
                    property="og:description"
                    content="รวมกิจกรรมล่าสุดและข่าวสารของบริษัท JIEI Thailand ผู้ผลิตชิ้นส่วนยางรถยนต์คุณภาพสูง"
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://jieithai.com/activities" />
                <meta
                    property="og:image"
                    content="https://jieithai.com/og-image-activities.png"
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
                />
            </Head>

            <div className="activities-page">
                <h1 className="activities-text">กิจกรรม JIEI Thailand</h1>
                <h5 className="text-center">
                    ติดตามกิจกรรมล่าสุด เช่น การอบรม ISO, CSR, Factory Tour, และโครงการใหม่
                    ๆ ของบริษัท
                </h5>

                <section className="activities-list">
                    {paginatedData.map((activity, idx) => (
                        <article key={idx} className="activity-item">
                            <div className="image-activities">
                                <Image
                                    src={Image_activities[idx]}
                                    alt={`กิจกรรม ${activity} - JIEI Thailand ผู้ผลิตชิ้นส่วนยางรถยนต์`}
                                    width={400}
                                    height={250}
                                    className="image-ac"
                                    priority={idx === 0}
                                />
                            </div>

                            <div className="activities-box-text">
                                <h3>{activity}</h3>
                                <div className="box-center-ac">
                                    <p>รายละเอียดกิจกรรม {activity} ของบริษัท JIEI Thailand...</p>
                                </div>
                            </div>
                            <div className="btn-box-activities">
                                <Link href="/"><button className="button-pageUp">เพิ่มติม</button></Link>
                            </div>

                        </article>
                    ))}
                </section>

                {/* Pagination */}
                <nav className="countPage" aria-label="Pagination">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                        <Link
                            key={pageNum}
                            href={`/activities?page=${pageNum}`}
                            className={`numPage ${pageNum === currentPage ? "focusPage" : ""
                                }`}
                            title={`ไปหน้าที่ ${pageNum} - กิจกรรม JIEI Thailand`}
                        >
                            {pageNum}
                        </Link>
                    ))}
                </nav>
            </div>
        </>
    );
}
