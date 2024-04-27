import React from 'react';
import Profile from "../../assets/Hamid.jpg";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import './home.css'

const home = () => {
  return (
    <section className="home section grid">
      <img src={Profile} alt="" className="home__img" />

        <div className="home__content">
          <div className="home__data">
            <h1 className="home__title">
              <span>I'm Hamid Hussain</span> Web Developer
            </h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos vel perspiciatis est enim totam perferendis atque placeat dolorem aspernatur. Deserunt, itaque asperiores laborum cumque dolorum similique fuga doloremque impedit ut?</p>

            <Link to='/about' className='button'>
              More About Me {''}
              <span className="button__icon">
                <FaArrowRight/> 
              </span>
            </Link>
        </div>
      </div>
      <div className="color-block"></div>
    </section>
  )
}

export default home;
