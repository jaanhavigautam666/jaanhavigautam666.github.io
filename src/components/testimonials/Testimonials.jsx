import React from 'react'
import './testimonials.css'
import AVTR1 from 'C:/Users/acer/Desktop/resumep/React_based_portfolio_website/react-portfolio-website-1/src/assets/AVTR1.jpg'
import AVTR2 from 'C:/Users/acer/Desktop/resumep/React_based_portfolio_website/react-portfolio-website-1/src/assets/AVTR2.jpg'
import AVTR3 from 'C:/Users/acer/Desktop/resumep/React_based_portfolio_website/react-portfolio-website-1/src/assets/AVTR3.jpg'
import AVTR4 from 'C:/Users/acer/Desktop/resumep/React_based_portfolio_website/react-portfolio-website-1/src/assets/AVTR4.jpg'

import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data =[
  {
      avatar: AVTR1,
      name: 'Prakash Motvani',
      review:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
      avatar: AVTR2,
      name: 'Prakash Motvani',
      review:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
      avatar: AVTR3,
      name: 'Prakash Motvani',
      review:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
      avatar: AVTR4,
      name: 'Prakash Motvani',
      review:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  }]
const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Reviews from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
            // install Swiper modules
            modules={[Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            pagination={{ clickable: true }}
            >
        {
          data.map(({avatar, name, review},index) => {
            return (
              <SwiperSlide key= {index}className="testimonial">
                <div className="client__avatar">
                  <img src={avatar}/>
                </div>
                <h5 className="client__name">{name}</h5>
                <small className="client__review">{review}</small>
              </SwiperSlide>
            )
          })  
        }
      </Swiper>
    </section>
  )
}

export default Testimonials