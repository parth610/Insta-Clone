import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deletePost, editPost } from '../../store/posts';
import SinglePageCommentSection from '../SinglePageCommentSection/SinglePageCommentSection';
import './SinglePageView.css'

const SinglePageView = ({ select, setShowPage }) => {
    const dispatch = useDispatch()
    const [currCaption, setCurrCaption] = useState(select?.caption ? select?.caption : '')
    const [showModal, setShowModal] = useState(false)
    const [showDeleteModal, setShowDeleteModal] = useState(false)
    const sessionUser = useSelector(state => state.session.user)
    // const [image, setImage] = useState(select?.image_url ? select?.image_url : '')

    const handleClose = () => {
        setShowPage(false)
    }

    const handleDeleteModalOpen = () => {
        setShowDeleteModal(true)
    }

    const handleDeleteModalclose = () => {
        setShowDeleteModal(false)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const edit_post = {
            id: select?.id,
            caption: currCaption,
            user_id: sessionUser?.id
        }

        await dispatch(editPost(edit_post))
        handleClose()
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
                                <i className="fa-solid fa-trash editComment__delete" onClick={handleDeleteModalOpen}></i>
                                {showModal &&
                                    <form className='editComment__form' onSubmit={handleSubmit}>
                                        <label htmlFor='editComment__editCaption'>
                                            <input
                                                className='editComment__captionInput'
                                                placeholder='Update Caption:'
                                                type='text'
                                                onChange={(e) => setCurrCaption(e.target.value)}
                                            />
                                        </label>
                                        <button type='submit'>Update</button>
                                        <button type='button' onClick={() => setShowModal(false)} >Cancel</button>
                                    </form>
                                }
                                {showDeleteModal ? <div className='verify-delete'>
                                    <button type='button' onClick={handleDelete}>Delete</button>
                                    <button type='button' onClick={handleDeleteModalclose}>Cancel</button>
                                </div> : null}
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
