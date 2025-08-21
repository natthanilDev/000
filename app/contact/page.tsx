import React from 'react'
import Form_contact from '../components/form_contact/form_contact'
export default function contact() {

  const icon = [
    "icon-contact bi bi-telephone-fill",
    "icon-contact bi bi-globe",
    "icon-contact bi bi-envelope-at-fill",
    "icon-contact bi bi-geo-alt-fill"
  ]
  const title = [
    "Phone",
    "Website",
    "E-Mail",
    "Address"

  ]
const contact = [
  '033-136581-4',
  'https://jieithai.co.th',
  'info@jiei-thai.co.th',
  'Pinthong 4 Industrial Estate, Unit G18, 180/3 Moo 6, T.Bueng, A.Sriracha, Chonburi 20230 Thailand'

]


  return (
    <div className='contact-box'>
      <div className="contact-level">
        <div className="contact-contactUs">
          <div className="box-w">
            <h1 className='contactUsTitle'>CONTACT US</h1>
            <h5 className='here-you'>We’re here to help you!</h5>
            <div className="line-contact"></div>

            <div className="container-icon">

              {icon.map((item, index) => (
                <div key={index} className="contact-box-icon">
                  <div className="icon">
                    <i className={item}></i>
                  </div>
                  <div className="title-box-icon">
                    <p className="text-icon">{title[index]}</p>
                    <p>{contact[index]}</p>
                  </div>
                </div>



              ))}

            </div>


          </div>

        </div>
        <div className="contact-form">
            <Form_contact />  
        </div>
      </div>

    </div>
  )
}
