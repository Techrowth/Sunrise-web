import React from 'react'
import backgroundImage from '../assets/img/banner/contact.png'; // Import the image

export default function ContactSection() {
  return (
    <section className="contact__section section--padding" style={{
      backgroundImage: `url(${backgroundImage})`,
      height: '100%',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <div className="container col-lg-10 col-md-11 col-12">
        <div className="section__heading text-center mb-40">
          <h2 className="section__heading--maintitle" style={{ fontWeight: '500' }}>Get In Touch</h2>
        </div>
        <div className="main__contact--area position__relative contact-us-sec" >
          <div className="contact__form">
            <h3 className="contact__form--title mb-40">Contact Me</h3>
            <form className="contact__form--inner" action="#">
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="contact__form--list mb-20">
                    <label className="contact__form--label" htmlFor="input1">First Name <span className="contact__form--label__star">*</span></label>
                    <input className="contact__form--input" name="firstname" id="input1" placeholder="Your First Name" type="text" />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="contact__form--list mb-20">
                    <label className="contact__form--label" htmlFor="input2">Last Name <span className="contact__form--label__star">*</span></label>
                    <input className="contact__form--input" name="lastname" id="input2" placeholder="Your Last Name" type="text" />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="contact__form--list mb-20">
                    <label className="contact__form--label" htmlFor="input3">Phone Number <span className="contact__form--label__star">*</span></label>
                    <input className="contact__form--input" name="number" id="input3" placeholder="Phone number" type="text" />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="contact__form--list mb-20">
                    <label className="contact__form--label" htmlFor="input4">Email <span className="contact__form--label__star">*</span></label>
                    <input className="contact__form--input" name="email" id="input4" placeholder="Email" type="email" />
                  </div>
                </div>
                <div className="col-12">
                  <div className="contact__form--list mb-15">
                    <label className="contact__form--label" htmlFor="input5">Write Your Message <span className="contact__form--label__star">*</span></label>
                    <textarea className="contact__form--textarea" name="message" id="input5" placeholder="Write Your Message" defaultValue={""} />
                  </div>
                </div>
              </div>
              <button className="contact__form--btn primary__btn" type="submit" style={{ height: '4.2rem', lineHeight: '4.2rem' }}>Submit Now</button>
            </form>
          </div>
          <div className="contact__info" style={{ borderRadius: '15px' }}>
            <h2 style={{ fontWeight: '500' }} className=" text-white mb-30">Contact Us</h2>

            <div className="contact__info--items">
              <div className="contact__info--items__inner d-flex">
                <div className="contact__info--icon">
                  <i class="fas fa-map-marker-alt"></i>
                </div>
                <h3 className="contact__info--content__title text-white mb-15">Address</h3>
              </div>
              <div className="contact__info--items__inner d-flex">
                <div className="contact__info--icon">
                </div>
                <div className="contact__info--content">
                  <p className="contact__info--content__desc text-white"> #384 New BEL Road , Banglore 580092.</p>
                </div>
              </div>
            </div>
            <div className="contact__info--items">
              <div className="contact__info--items__inner d-flex">
                <div className="contact__info--icon">
                  <i class="fas fa-phone-alt"></i>
                </div>
                <h3 className="contact__info--content__title text-white mb-15">Phone</h3>
              </div>
              <div className="contact__info--items__inner d-flex">
                <div className="contact__info--icon">
                </div>
                <div className="contact__info--content">
                  <p className="contact__info--content__desc text-white"> +91 98765 43210 <br />
                    +91 08765 43210</p>
                </div>
              </div>
            </div>
            <div className="contact__info--items">
              <div className="contact__info--items__inner d-flex">
                <div className="contact__info--icon">
                  <i class="far fa-envelope"></i>
                </div>
                <h3 className="contact__info--content__title text-white mb-15">E-mail</h3>
              </div>
              <div className="contact__info--items__inner d-flex">
                <div className="contact__info--icon">
                </div>
                <div className="contact__info--content">
                  <p className="contact__info--content__desc text-white"> info@gmail.com</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>

  )
}
