import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { PostModal } from '../../context/PostModal';
import { deletePost, editPost } from '../../store/posts';
import './SinglePageComment.css'


const SinglePageCommentForm = ({ select, handleClose }) => {
    console.log(select);
    const [imageUrl, setImageUrl] = useState(select?.image_url ? select?.image_url : '')
    const [currCaption, setCurrCaption] = useState(select?.caption ? select?.caption : '')
    const [showModal, setShowModal] = useState(false)
    const sessionUser = useSelector(state => state.session.user)
    const dispatch = useDispatch()

    console.log(showModal);

    const handleSubmit = async (e) => {
        e.preventDefault()

        const edit_posts = {
            id: select?.id,
            image_url: imageUrl,
            caption: currCaption,
            user_id: sessionUser?.id
        }

        await dispatch(editPost(edit_posts))
        handleClose()
    }


    const handleDelete = async (e) => {
        e.preventDefault()
        await dispatch(deletePost(select?.id))
        handleClose()
    }

    return (
        <div className='editComment'>
            <header className='editComment__editComment'>Edit comment</header>
            <div className="editComment__icons">
                <i className="fa-solid fa-pen-to-square editCommnet__edit" onClick={() => setShowModal(true)}></i>
                <i className="fa-solid fa-trash editComment__delete" onClick={handleDelete}></i>
            </div>
            <div className='editComment__container'>
                <div className="editComment__commentSection">
                    <div className="editComment__avatar">

                    </div>

                    <div className='editComment__edit'>
                        <div className="editComment__commentBox">
                            <div className="editComment__name"></div>
                            <div className="editComment__comment">
                                <h5>

                                </h5>
                            </div>
                        </div>
                    </div>
                </div>

                {showModal &&
                    <form className='editComment__form' onSubmit={handleSubmit}>
                        <label htmlFor='editComment__editImage'>
                            <input
                                className='editComment__imageInput'
                                placeholder='Enter a new pic'
                                type='url'
                                onChange={(e) => setImageUrl(e.target.value)}
                            />
                        </label>
                        <label htmlFor='editComment__editCaption'>
                            <input
                                className='editComment__captionInput'
                                placeholder='Enter a new caption'
                                type='text'
                                onChange={(e) => setCurrCaption(e.target.value)}
                            />
                        </label>
                        <button type='submit'>Edit Post</button>
                    </form>
                }
            </div>
        </div>
    )
}

export default SinglePageCommentForm
