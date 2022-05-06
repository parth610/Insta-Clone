import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { searchResultThunk } from '../../../store/search'
import './NavBarMid.css'
const NavBarMid = () => {
    const [searchInput, setSearchInput] = useState('')
    // const search_user = Object.values(useSelector(state => state.search))
    // console.log(search_user, '<<<<<<<<<<<<<<<<<<');
    // const tester = useSelector(state => console.log(state.search.search_results, '<<<<<<<<<<<<<<<<<<<<<<<<<<<<<'))
    // console.log(search_result, 'search_result search_result search_result search_result search_result search_result')
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(searchResultThunk(searchInput))
    }, [dispatch, searchInput])

    // console.log(searchInput);
    return (
        <div>
            <div className="navBar__searchBar">
                <i className="fa-solid fa-magnifying-glass"></i>
                {/* {search_user.map(user => (
                    <h1>{user.username}</h1>
                ))} */}
                <input
                    onChange={e => setSearchInput(e.target.value)}
                    value={searchInput}
                    className='search-icon'
                    placeholder='Search'
                ></input>
            </div>
        </div>
    )
}

export default NavBarMid
