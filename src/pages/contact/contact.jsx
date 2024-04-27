import React from 'react'
import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaDribbble,
} from 'react-icons/fa';

import {FiSend} from 'react-icons/fi';
import './contact.css';

const contact = () => {
  return (
    <section className="contact section">
      <h2 className="section__title">
        Get In <span>Touch</span>
      </h2>

      <div className="contact__container container grid">

            <div className="contact__socials">
              <a href="https://facebook.com" className="contact__social_link"><FaFacebookF/></a>
              <a href="https://twitter.com" className="contact__social_link"><FaTwitter/></a>
              <a href="https://youtube.com" className="contact__social_link"><FaYoutube/></a>
              <a href="https://dribbble.com" className="contact__social_link"><FaDribbble/></a>
            </div>
          </div>

          <form className="contact__form">
            <div className="form__input-group">
              <div className="form__input-div">
                <input type="text" placeholder='Your Name' className='form__control'/>
              </div>

              <div className="form__input-group">
              <div className="form__input-div">
                <input type="email" placeholder='Your E-mail' className='form__control'/>
              </div>

              <div className="form__input-group">
              <div className="form__input-div">
                <input type="text" placeholder='Your Subject' className='form__control'/>
              </div>

              <div className="form__input-div">
                <textarea placeholder='Your message' className="form__control textarea"></textarea>
              </div>


                  <div className="contact__info">
                <div className="info__item">
                  <FaEnvelopeOpen className='info__icon'/>
                </div>
                <div>
                <span className="info__title">Mail me</span>
                <h4 className="info__desc">hamid554718903@gmail.com</h4>
                </div>
                <div className="info__item">
                  <FaPhoneSquareAlt className='info__icon'/>
                </div>
                <div>
                <span className="info__title">Call me</span>
                <h4 className="info__desc">03433563121</h4>
                </div>
              </div>

              <button className='button'>
                Send Message
                <span className="button__icon contact__button-icon">
                  <FiSend/>
                </span>
              </button>

            </div>
          </div>
        </div>
      </form>
    {/* </div> */}
  </section>
  
  );
};

export default contact;
