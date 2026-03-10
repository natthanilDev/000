import React from 'react'
import ScrollReveal from '../ScrollReveal/ScrollReveal'
import Link from 'next/link';
import { Image } from 'antd';
import { motion } from 'framer-motion';
export default function AboutMap() {

    return (
        <div>
            <ScrollReveal>

                <div className="google-map-box">
                    <motion.div
                        className='image-map'
                        initial={{ opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true, amount: 0.35 }}
                        transition={{
                            type: "spring",
                            stiffness: 80,
                            damping: 18,
                            mass: 0.8
                        }}>

                        <Image
                            alt="แผนที่บริษัท JIEI(THAILAND) CO.,LTD"
                            src="/map-jiei.png"
                        />

                    </motion.div>


                    <motion.div
                        className='google-map'
                        initial={{ opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true, amount: 0.35 }}
                        transition={{
                            type: "spring",
                            stiffness: 80,
                            damping: 18,
                            mass: 0.8
                        }}>
                            <Link target='_blank' href={'https://maps.app.goo.gl/roZPoBoMZhDkPnUb7'}>
                                <label htmlFor="" className="btn-s">
                                    <p className='btn-googlemap bg-red-100 cursor-pointer text-2xl text-red-800  hover:bg-red-200' >
                                        Google Map <i className="icon-google-map bi bi-geo-alt-fill" />
                                    </p>
                                </label>
                            </Link>
                    </motion.div>
                </div>
            </ScrollReveal>
        </div>
    )
}
