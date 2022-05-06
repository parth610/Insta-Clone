import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { emptySearchThunk, searchResultThunk } from '../../../store/search'
import './NavBarMid.css'
const NavBarMid = () => {
    const [searchInput, setSearchInput] = useState('')
    const search_user = useSelector(state => state.search.search_results)
    // const tester = useSelector(state => console.log(state.search.search_results, '<<<<<<<<<<<<<<<<<<<<<<<<<<<<<'))
    // console.log(search_result, 'search_result search_result search_result search_result search_result search_result')
    const dispatch = useDispatch()

    useEffect(() => {
        if (searchInput) {
            dispatch(searchResultThunk(searchInput))
        } else {
            dispatch(emptySearchThunk())
        }
    }, [dispatch, searchInput])


    return (
        <div>
            <div className="navBar__searchBar">
                <div className="navBar__searchInput">
                    <i className="fa-solid fa-magnifying-glass navBar__searchIcon"></i>
                    <input
                        onChange={e => setSearchInput(e.target.value)}
                        value={searchInput}
                        className='search-icon'
                        placeholder='Search'
                    ></input>
                </div>
            </div>

                <div className="navBar__searchResults">
                    {search_user?.map(user => (
                        <NavLink to={`/users/${user.id}`}>
                            <ul className='navBar__users'>{user?.username}</ul>
                        </NavLink>
                    ))}
                </div>
        </div>
    )
}

export default NavBarMid
