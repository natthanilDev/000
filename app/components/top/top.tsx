import React from 'react'
import Link from 'next/link'
export default function Top() {
    return (
        <div className='Top_Link'>
            <div className="btn-upto">
                <Link href={"#top"}><i className="bi bi-arrow-up-circle-fill upIcon"></i></Link>
            </div>

        </div>
    )
}
