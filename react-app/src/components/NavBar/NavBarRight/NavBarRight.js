import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Route, useHistory } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { Modal } from '../../../context/Modal'
import CreatePostModal from '../../CreatePost/CreatePostModal'
import LogoutButton from '../../auth/LogoutButton'
import './NavBarRight.css'

const NavBarRight = () => {
    const [showModal, setShowModal] = useState(false)
    const history = useHistory()
    // const dispatch = useDispatch();
    const user = useSelector(state => state.session.user)

    const showPostForm = () => {
        setShowModal(false)
    }

    useEffect(() => {
        if (user) {
            history.push('/home')
        }
    }, [user])
    // if (user) {
    //     history.push('/home')
    //   }

    return (
        <div className='navBar__right'>
            <div className="navBar__icons">
                <NavLink className='navBar__home' to='/home' activeStyle={{ color: '#f4b545' }}>
                    <i className="fa-solid fa-house fa-lg" id='navBar__home-ico'></i>
                </NavLink>

                {/* <NavLink className='navBar__messages' to='/test/chat' activeStyle={{ color: '#f4b545' }}>
                    <i className="fa-solid fa-comment-dots fa-lg"></i>
                </NavLink> */}

                <NavLink className='navBar__upload' to='/home/add_post' onClick={() => setShowModal(true)} activeStyle={{ color: '#f4b545' }}>
                    <i className="fa-solid fa-square-plus fa-lg" ></i>
                </NavLink>

                {showModal && (
                    <Route path='/home/add_post'>
                        <Modal onClose={() => setShowModal(false)}>
                            <CreatePostModal showPostForm={showPostForm} />
                        </Modal>
                    </Route>
                )}

                {/* <NavLink className='navBar__explore' to='/explore' activeStyle={{ color: '#5693db' }}>
                    <i className="fa-solid fa-compass fa-lg"></i>
                </NavLink> */}

                <NavLink className='navBar__notifications' to={`/users/${user.id}`} activeStyle={{ color: '#f4b545' }}>
                    {/* <i className="fa-solid fa-heart fa-lg"></i> */}
                    <i className="fa-duotone fa-user fa"></i>
                </NavLink>
                <LogoutButton />
            </div>
        </div >
    )
}

export default NavBarRight
