import React from 'react'
import ScrollReveal from '../ScrollReveal/ScrollReveal'
import Image from 'next/image'
// import { useState, useEffect } from 'react';
import Link from 'next/link';
export default function AboutMap() {
   
    return (
        <div>
            <ScrollReveal>

                <div className="google-map-box">
                    <Link target='_blank' href={'https://maps.app.goo.gl/roZPoBoMZhDkPnUb7'}>
                        {/* <label htmlFor="btn-showMap"> */}
                        <label htmlFor="" className="btn-s">
                            <p className='btn-googlemap' >
                                Google Map <i className="bi bi-search-heart"></i>
                                {/* {lang === ('th') ? "แผนที่" : lang === ('en') ? "Map" : "地図"} <i className="bi bi-search-heart"></i> */}
                            </p>
                        </label>

                        {/* </label> */}
                    </Link>
                    <input className='btn-showMap d-none' type="checkbox" id="btn-showMap" />

                    {/* <div className='map-jiei'>
                        <Link href={"/Map.png"} target='_blank'>
                            <div className='google-popup'>
                                <Image className='image-map' src={'/Map.png'} alt='' width={1000} height={1000} loading='lazy' />
                            </div>
                        </Link>
                    </div> */}

                    <div className='map-showMap'>
                        <Link href={"/Map.png"} target='_blank'>
                            <Image className='google-showMap' src={'/Map.png'} alt='' width={1000} height={1000} loading='lazy' />
                        </Link>
                    </div>
                </div>
            </ScrollReveal>
        </div>
    )
}
