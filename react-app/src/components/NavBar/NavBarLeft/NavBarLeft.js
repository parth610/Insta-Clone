import React from 'react'
import { NavLink } from 'react-router-dom'
import instaLogo from '../../../images/instagram_logo.png'
import './NavBarLeft.css'
const NavBarLeft = () => {
    return (
        <div>
            <NavLink className='navBarLogo__left' to='/home'>
                <img src={instaLogo} alt='' />
            </NavLink>
        </div>
    )
}

export default NavBarLeft
