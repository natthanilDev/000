import Link from "next/link"

export default function BTNisoIndex() {
    const iso = [
        "ISO9001",
        "ISO14001",
        "IATF16949"
    ]
    const link = [
        "/iso9001",
        "/iso14001",
        "/iatf16949"
    ]
    return (
        <div className="iso-box-index">
            {iso.map((item, index) => (
                <div key={index} className="btn_iso_box">
                    <Link  href={link[index]}>
                        <button className="isoIndex">
                            {item}
                        </button>
                    </Link>
                </div>


            ))}
        </div>
    )
}
