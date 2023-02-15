import React from 'react'
import css from './Header.module.css'
import Logo from '../../assets/logo.png'
import {CgShoppingCart} from 'react-icons/cg'

function Header() {
    return (
        <div className={css.container}>
            <div className={css.logo}>
                <img src={Logo} alt="logo image" />
                <span>aCart</span>
            </div>

            <div className={css.right}>
                <div className={css.menu}>
                    <ul className={css.menu}>
                        <li>Collections</li>
                        <li>Brands</li>
                        <li>New</li>
                        <li>Sales</li>
                        <li>ENG</li>
                    </ul>
                </div>
                <input placeholder='Search...' type="text" className={css.search} />

                <CgShoppingCart className={css.cart} />
            </div>
        </div>
    )
}

export default Header

