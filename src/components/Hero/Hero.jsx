import React from 'react'
import css from './Hero.module.css'
import HeroImg from '../../assets/hero.png'
import {RiShoppingBagFill} from 'react-icons/ri'
import {BsArrowRight} from 'react-icons/bs'

function Hero() {
    return (
        //total 3 sides left(hero_sides),middle(imageside .wrapper),right()
        <div className={css.container}>
            {/* left side */}
            <div className={css.hero_sides}>
                <span>skin protection cream</span>

                <div className={css.text2}>
                    <span>Trendy Collection</span>
                    <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Repudiandae, ut.
                    </span>
                </div>
            </div>

            {/* middle */}
            <div className={css.wrapper}>
                <div className={css.blueCircle}></div>
                <img src={HeroImg} alt="hero image" width={600}/>
                <div className={css.cart2}>
                    <RiShoppingBagFill/>

                    <div className={css.signup}>
                        <span>Best Signup Offers</span>

                        <div>
                            <BsArrowRight/>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Hero