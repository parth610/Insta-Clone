import React from 'react'
import './NavBarMid.css'
const NavBarMid = () => {
    return (
        <div>
            <div className="navBar__searchBar">
                <i class="fa-solid fa-magnifying-glass"></i>
                <input
                    className='search-icon'
                    placeholder='Search'
                ></input>
            </div>
        </div>
    )
}

export default NavBarMid
