'use client'
import Image from "next/image"

export default function Page() {
  const image_collection = [
    "/car (1).png",
    "/car (2).png",
    "/car (3).png",
    "/car (4).png"
  ]

  const collections = [
    '/Automobile.png',
    '/Special.png',
    '/building.png',
    '/cabin.png'
  ]

  const title_part = [
    'Door Parts',
    'Engine Room Parts',
    'Parts for Glass',
    'Other Parts'
  ]

  const product_part = [
    [
      [
        'Door Seal',
        'Parts are evaluated for waterproofing, sound insulating, and door closing properties in addition to design.'
      ],
      [
        'Door Opening Trim',
        'This is a sealing material that is used between a door and the peripheral edge of the door opening. It has excellent waterproofing, sound insulating, and door closing properties. Moreover, it is also lightweight.'
      ],
      [
        'Door Lower Seal',
        'It effectively prevents the entry of water, mud, and sand. Additionally, it also has excellent sound insulation and weight reduction properties.'
      ],
      [
        'Back Door Weatherstrip',
        'This is a sealing material for back doors. It has excellent waterproofing, sound insulating, and door closing properties. Moreover, it is also very lightweight.'
      ]
    ],
    [
      [
        'Hoodseal Front',
        'By improving the cross-section of the seal without altering the structure of the engine room&apos;s front end, it prevents interference with the protruding portion on the upper surface of the engine room&apos;s front end. It also conforms to regulations concerning external protrusions.'
      ]
    ]
  ]

  return (
    <div className='bg-allProduct'>

      <div className="intro-allProduct">
        <h1 className='allProduct-text'>PRODUCT</h1>
        <h2 className='allProduct-text'>COLLECTION</h2>
      </div>

      <div className="category-collection">
        {image_collection.map((item, index) => (
          <div className="card-collection" key={index}>
            <Image
              src={item}
              alt=""
              className="image-category"
              width={1000}
              height={1000}
              loading="lazy"
            />
            <div
              className="background-image"
              onClick={() => {
                window.open(collections[index], "_blank", "noopener,noreferrer")
              }}
            >
              <p className="preview-image">Preview</p>
            </div>
          </div>
        ))}
      </div>

      <div className="collection-part">
        <div className="text-collection-box">
          <h2 className="text-collection">CAR</h2>
        </div>

        <div className="collection-box">
          {title_part.map((item, index) => (
            <div key={index}>
              <h2 className="nameProduct">{item}</h2>
              {product_part[index]?.map((product, i) => (
                <div key={i}>
                  <div className="display-product">
                    <h3 className="title-product-list">{product[0]}</h3>
                    <p className="description-product-text">{product[1]}</p>
                  </div>

                  <hr />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}
