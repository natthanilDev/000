import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import ScrollReveal from '../components/ScrollReveal/ScrollReveal'
export default function page() {
    const topic = [
        'CAD / CATIA',
        'Stress Analysis',
        'R Tracking Analysis',
        'Material Flow Analysis',
        'Compressive Load Analysis & Contact Stress Analysis'
    ]

    const content = [
        "We design using V5, the latest version of the CATIA 3-D CAD software. This allows precise modeling for automotive rubber parts ensuring high quality and accuracy.",
        "By analyzing the stresses and behaviours of products with the aid of computers, a product's performance can be accurately estimated before actually making the product.",
        "",
        "We analyze the behaviour of materials in moulds during the injection moulding process and create simulations of material flow, pressure, contraction, and warp deformation during the filling process, allowing us to optimize mould designs to reflect those changes.",
        "We analyze compressive loads and contact stresses to confirm that seal performance is satisfactory."
    ]

    const topic1 = [
        "Test roll",
        "Money Viscosity Measurements",
        "Hardness & Specific Gravity Measurements",
        "Tensile Strength Measurements",
    ]

    const content1 = [
        "We are engaged in research and development for superior rubber.",
        "And check to ensure that it satisfies a variety of physical property requirements.",
        "",
        "",
    ]

    const topic2 = [
        "Compressive Load Measurements",
        "Pressure Distribution Measurements",
        "Sound-Insulating Performance Evaluations",
        "Dynamic Load Measurements",
        "Sliding Friction Ratings",
    ]

    const content2 = [
        "We develop products that satisfy load requirements.",
        "The measuring of contact pressure exerted on products in real-time aids in the analysis of product defects.",
        "As comfortable cabin spaces are highly desired by our customers, we are constantly in pursuit of materials with enhanced sound-insulating performance.",
        "",
        "",
    ]

    // -------------------------------------------------------


    const Analysis = [
        '/catiav5.png',
        '/catiav5.png',
        '/catiav5.png',
        '/catiav5.png',
    ]
    const contentAnalysis = [
        "CAD Drawing",
        "Structural Analysis",
        "Material Simulation",
        "Product Testing",
    ]


    // -------------------------------------------------------

    const materials = [
        '/catiav5.png',
        '/catiav5.png',
        '/catiav5.png',
        '/catiav5.png',
    ]
    const contentMaterials = [
        "Test Roll",
        "Money Viscosity meter",
        "Tensile strength testing machine",
        "Compressive load analysis and contact stress analysis"

    ]
    // ----------------------------------------------------------

    const evaluatio = [
        '/catiav5.png',
        '/catiav5.png',
        '/catiav5.png',
        '/catiav5.png',
    ]

    const contentEvaluatio = [
        "Load Testing Machine",
        "Surface Pressure Distribution",
        "Surface Pressure Distribution Measurement",
        "Simple Sound Insulation Performance Measurement"
    ]



    return (
        <>
            <Head>
                <title>Introduction of Development Technology | JIEI Thailand</title>
                <meta
                    name="description"
                    content="Learn about JIEI Thailand's development technology for automotive rubber parts, including CAD / CATIA design, 3D modeling, and engineering analysis."
                />
                <link rel="canonical" href="https://www.jiei-thai.co.th/development-technology" />
            </Head>

            <div>
                <div className="tec-box">


                    {/* Main Heading */}
                    <div className="introduction-tech-box">
                        <ScrollReveal>
                            <h1 className="introduction-tech">
                                Introduction of Development Technology - JIEI Thailand
                            </h1>
                            <p className='introduction-content'>Explore the advanced design and analysis technologies we use to produce high-quality automotive rubber parts.</p>
                            <div className="line" />
                        </ScrollReveal>
                    </div>

                    {/* Section: Design & Analysis */}
                    <div className="design-analysis-box" itemScope itemType="https://schema.org/TechArticle">
                        <ScrollReveal>
                            <div className="design-analysis-topic">
                                <h2 itemProp="headline" className='topic-technology'>Design & Analysis</h2>
                                <meta itemProp="author" content="JIEI Thailand" />
                            </div>

                            <div className="design-analysis-content-box">
                                {topic.map((item, index) => (
                                    <div className="design-analysis-content" key={index}>
                                        <div className="design-analysis-content-topic">
                                            <h3 itemProp="about" className='topic-2'>{item}</h3>
                                        </div>
                                        <div className="design-analysis-content-content">
                                            <p itemProp="articleBody" className='content-technology'>
                                                {content[index]}
                                            </p>
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </ScrollReveal>

                        <ScrollReveal>

                            <div className="design-analysis-topic">
                                <h2 itemProp="headline" className='topic-technology'>Materials Development</h2>
                                <meta itemProp="author" content="JIEI Thailand" />
                            </div>

                            <div className="design-analysis-content-box">
                                {topic1.map((item, index) => (
                                    <div className="design-analysis-content" key={index}>
                                        <div className="design-analysis-content-topic">
                                            <h3 itemProp="about" className='topic-2'>{item}</h3>
                                        </div>
                                        <div className="design-analysis-content-content">
                                            <p itemProp="articleBody" className='content-technology'>
                                                {content1[index]}
                                            </p>
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </ScrollReveal>
                        <ScrollReveal>
                            <div className="design-analysis-topic">
                                <h2 itemProp="headline" className='topic-technology'>Functional Evaluation</h2>
                                <meta itemProp="author" content="JIEI Thailand" />
                            </div>

                            <div className="design-analysis-content-box">
                                {topic2.map((item, index) => (
                                    <div className="design-analysis-content" key={index}>
                                        <div className="design-analysis-content-topic">
                                            <h3 itemProp="about" className='topic-2'>{item}</h3>
                                        </div>
                                        <div className="design-analysis-content-content">
                                            <p itemProp="articleBody" className='content-technology'>
                                                {content2[index]}
                                            </p>
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </ScrollReveal>
                    </div>
                </div>

                <div className="Design-analysis-box">
                    <ScrollReveal>
                        <div className="Design-analysis-text-box">
                            <h1 className='Design-analysis-text'>Design & Analysis</h1>
                        </div>
                        <div className="line" />
                    </ScrollReveal>

                    <ScrollReveal>
                        <div className="deformation-jiei">

                            {Analysis.map((item, index) => (
                                <div className="img-text-design" key={index}>
                                    <div className="img-design">
                                        <Image src={item} alt='' priority width={1000} height={1000}></Image>
                                    </div>
                                    <div className="text-img-box">
                                        <h3 className='text-img'>{contentAnalysis[index]}</h3>
                                    </div>
                                </div>
                            ))}



                        </div>
                    </ScrollReveal>
                </div >



                <ScrollReveal>
                    <div className="Design-analysis-box">
                        <div className="Design-analysis-text-box">
                            <h1 className='Design-analysis-text'>Materials Development</h1>
                        </div>
                        <div className="line" />

                        <div className="deformation-jiei">

                            {materials.map((item, index) => (
                                <div className="img-text-design" key={index}>
                                    <div className="img-design">
                                        <Image src={item} alt='' priority width={1000} height={1000}></Image>
                                    </div>
                                    <div className="text-img-box">
                                        <h3 className='text-img'>{contentMaterials[index]}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </ScrollReveal>


                <ScrollReveal>
                    <div className="Design-analysis-box">
                        <div className="Design-analysis-text-box">
                            <h1 className='Design-analysis-text'>Functional Evaluatio</h1>
                        </div>
                        <div className="line" />

                        <div className="deformation-jiei">

                            {evaluatio.map((item, index) => (
                                <div className="img-text-design" key={index}>
                                    <div className="img-design">
                                        <Image src={item} alt='' priority width={1000} height={1000}></Image>
                                    </div>
                                    <div className="text-img-box">
                                        <h3 className='text-img'>{contentEvaluatio[index]}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </ScrollReveal>

            </div >
        </>
    )
}
