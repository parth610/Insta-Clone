import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBarRight = () => {
    return (
        <div className='navBar__right'>
            <div className="navBar__icons">
                <NavLink className='navBar__home' to='/home' activeStyle={{ color: 'rgb(253, 176, 82)' }}>
                    <i className="fa-solid fa-house fa-lg"></i>
                </NavLink>

                <NavLink className='navBar__messages' to='/message' activeStyle={{ color: 'rgb(253, 176, 82)' }}>
                    <i className="fa-solid fa-comment-dots fa-lg"></i>
                </NavLink>
                
                <NavLink className='navBar__upload' to='/message'>
                    <i className="fa-solid fa-square-plus fa-lg" ></i>
                </NavLink>

                <NavLink className='navBar__explore' to='/explore' activeStyle={{ color: ' rgb(253, 176, 82)' }}>
                    <i className="fa-solid fa-compass fa-lg"></i>
                </NavLink>

                <NavLink className='navBar__notifications' to='/notifications' activeStyle={{ color: 'rgb(253, 176, 82)' }}>
                    <i className="fa-solid fa-heart fa-lg"></i>
                </NavLink>
            </div>
        </div >
    )
}

export default NavBarRight
