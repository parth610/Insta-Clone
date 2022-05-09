import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deletePost, editPost, allPosts } from '../../store/posts';
import SinglePageCommentSection from '../SinglePageCommentSection/SinglePageCommentSection';
import './SinglePageView.css'

const SinglePageView = ({ select, setShowPage }) => {
    const dispatch = useDispatch()
    const [currCaption, setCurrCaption] = useState(select?.caption ? select?.caption : '')
    const [showModal, setShowModal] = useState(false)
    const [showDeleteModal, setShowDeleteModal] = useState(false)
    const sessionUser = useSelector(state => state.session.user)
    const user = useSelector(state => state.session.user)

    useEffect(() => {
        dispatch(allPosts())
    }, [dispatch])

    const handleClose = () => {
        setShowPage(false)
    }

    const handleDeleteModalOpen = () => {
        setShowDeleteModal(!showDeleteModal)
    }

    const handleDeleteModalclose = () => {
        setShowDeleteModal(!showDeleteModal)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const edit_post = {
            id: select?.id,
            caption: currCaption,
            user_id: sessionUser?.id
        }

        await dispatch(editPost(edit_post))
        setCurrCaption(edit_post.caption)
        setShowModal(false)
    }

    const handleDelete = async (e) => {
        e.preventDefault()
        await dispatch(deletePost(select?.id))
        handleClose()
    }

    return (
        // e.stopPropagation, stops all the events child is supposed to inherit from parent
        <div className="singlePageViewContainer" onClick={(e) => e.stopPropagation()}>
            <div className='singlePageView'>
                <button type='button' className='close-post-view-button' onClick={handleClose}>
                    <i className="fa-solid fa-xmark fa-lg"></i>
                </button>
                <div className='singlePageContents'>

                    <div className="singlePageView__image" >
                        <div className=''>
                            <img className='singlePageView__pic' src={select?.image_url} alt='' />

                            { user.id === select?.user_id &&

                                <div className="post__icons">
                                <i className="fa-solid fa-pen-to-square editCommnet__edit" onClick={() => setShowModal(true)}></i>
                                <i className="fa-solid fa-trash editComment__delete" onClick={handleDeleteModalOpen}></i>
                                <div className='post-user-info'>
                                    <img className='user-image' src={select?.profile_pic} />
                                </div>
                                {showModal &&
                                    <form className='editComment__form' onSubmit={handleSubmit}>
                                        <label htmlFor='editComment__editCaption'>
                                            <input
                                                className='editComment__captionInput'
                                                // placeholder={`Update Caption: ${currCaption}`}
                                                value={currCaption}
                                                type='text'
                                                onChange={(e) => setCurrCaption(e.target.value)}
                                            />
                                        </label>
                                        <button className='edit-del-buttons' type='submit'>Update</button>
                                        <button className='edit-del-buttons' type='button' onClick={() => setShowModal(false)} >Cancel</button>
                                    </form>
                                }
                                {showDeleteModal ? <div className='verify-delete'>
                                    <button className='edit-del-buttons' type='button' onClick={handleDelete}>Delete Post</button>
                                    <button className='edit-del-buttons' type='button' onClick={handleDeleteModalclose}>Cancel</button>
                                </div> : null}
                            </div>
                            }


                        </div>

                    </div>
                    <div className="singlePageView__commentSection">
                        <SinglePageCommentSection currCaption={currCaption} select={select} handleClose={handleClose} />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SinglePageView
