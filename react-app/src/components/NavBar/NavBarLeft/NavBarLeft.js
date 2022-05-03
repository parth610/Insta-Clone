import React from 'react'
import instaLogo from '../../../images/instagram_logo.png'
import './NavBarLeft.css'
const NavBarLeft = () => {
    return (
        <div>
            <div className='navBarLogo__left'>
                <img src={instaLogo} alt='' />
            </div>
        </div>
    )
}

export default NavBarLeft
