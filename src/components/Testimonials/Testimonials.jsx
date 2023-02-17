import React from 'react';
import css from './Testimonials.module.css';
import Hero from '../../assets/testimonialHero.png'

const Testimonials = () => {
  return (
    <div className={css.testimonials}>
        <div className={css.wrapper}>
            <span>Top Rated</span>
            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, commodi.</span>
            <img src={Hero} alt="testimonial image" />
        </div>
    </div>
  )
}

export default Testimonials