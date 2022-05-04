import React from 'react'
import { useState } from 'react'
import { Route } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { Modal } from '../../../context/Modal'
import CreatePostModal from '../../CreatePost/CreatePostModal'

const NavBarRight = () => {
    const [showModal, setShowModal] = useState(false)

    const showPostForm = () => {
        setShowModal(false)
    }
    return (
        <div className='navBar__right'>
            <div className="navBar__icons">
                <NavLink className='navBar__home' to='/home' activeStyle={{ color: '#F4B545' }}>
                    <i className="fa-solid fa-house fa-lg"></i>
                </NavLink>

                <NavLink className='navBar__messages' to='/message' activeStyle={{ color: '#F4B545' }}>
                    <i className="fa-solid fa-comment-dots fa-lg"></i>
                </NavLink>

                <NavLink className='navBar__upload' to='/home/add_post' onClick={() => setShowModal(true)} >
                    <i className="fa-solid fa-square-plus fa-lg" ></i>
                </NavLink>

                {showModal && (
                    <Route path='/home/add_post'>
                        <Modal onClose={() => setShowModal(false)}>
                            <CreatePostModal showPostForm={showPostForm} />
                        </Modal>
                    </Route>
                )}

                <NavLink className='navBar__explore' to='/explore' activeStyle={{ color: '#F4B545' }}>
                    <i className="fa-solid fa-compass fa-lg"></i>
                </NavLink>

                <NavLink className='navBar__notifications' to='/notifications'>
                    <i className="fa-solid fa-heart fa-lg"></i>
                </NavLink>
            </div>
        </div >
    )
}

export default NavBarRight
