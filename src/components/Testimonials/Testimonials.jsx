import React from 'react';
import css from './Testimonials.module.css';
import Hero from '../../assets/testimonialHero.png'

const Testimonials = () => {
    return (
        <div className={css.testimonials}>
            <div className={css.wrapper}>
                <div className={css.container}>
                    <span>Top Rated</span>
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, commodi.</span>
                </div>
                <img src={Hero} alt="testimonial image" />
                <div className={css.container}>
                    <span>100k</span>
                    <span>Happy Customers With Us</span>
                </div>
            </div>
        </div>
    )
}

export default Testimonials