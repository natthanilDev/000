import Link from 'next/link'


export default function iso_btn() {
    return (
        <div className='iso_button'>

            <div className="iso-box-why-choose">
                <div className="iso">
                    <h2 className='iso-btn'><Link href={'/iso9001'} className='isoiatf'>ISO9001</Link> </h2>
                    <h2 className='iso-btn'><Link href={'/iso14001'} className='isoiatf'>ISO14001</Link> </h2>
                    <h2 className='iso-btn'><Link href={'/iatf16949'} className='isoiatf'>IATF16949</Link> </h2>
                </div>
            </div>
        </div>
    )
}
