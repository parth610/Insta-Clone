import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { deletePost } from '../../store/posts';
import SinglePageCommentSection from '../SinglePageCommentSection/SinglePageCommentSection';
import './SinglePageView.css'

const SinglePageView = ({ select, setShowPage }) => {
    const dispatch = useDispatch()
    const [showModal, setShowModal] = useState(false)
    // const [image, setImage] = useState(select?.image_url ? select?.image_url : '')

    const handleClose = () => {
        setShowPage(false)
    }

    const handleDelete = async (e) => {
        e.preventDefault()
        await dispatch(deletePost(select?.id))
        handleClose()
    }

    return (
        <div className="singlePageViewContainer" >
            <div className='singlePageView'>
                <div className='singlePageContents'>
                    <div className="singlePageView__image" >
                        <div className=''>
                            <img className='singlePageView__pic' src={select?.image_url} alt='' />

                            <div className="post__icons">
                                <i className="fa-solid fa-pen-to-square editCommnet__edit" onClick={() => setShowModal(true)}></i>
                                <i className="fa-solid fa-trash editComment__delete" onClick={handleDelete}></i>
                            </div>

                            <button type='button' className='close-post-view-button' onClick={handleClose}>
                                {/* <i className="fa-solid fa-xmark fa-lg"></i> */}
                                Close
                            </button>
                        </div>

                    </div>
                    <div className="singlePageView__commentSection">
                        <SinglePageCommentSection select={select} handleClose={handleClose}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SinglePageView
