import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { PostModal } from '../../context/PostModal';
import { allPostComments, createComment } from '../../store/comments';
import { deletePost, editPost } from '../../store/posts';
import { loadUserProfile } from '../../store/userProfile';
import './SinglePageComment.css'


const SinglePageCommentForm = ({ select, handleClose }) => {
    const [newComment, setNewComment] = useState('')
    const sessionUser = useSelector(state => state.session.user)
    const dispatch = useDispatch()


    const handleSubmit = async (e) => {
        e.preventDefault()

        const new_comment = {
            post_id: select?.id,
            content: newComment,
            user_id: sessionUser?.id
        }
        if (newComment.length > 0 ) {
            await dispatch(createComment(new_comment, select?.id))
            setNewComment('')
        } else {
            alert('Please provide a comment to submit')
        }
    }

    return (
        <div className='comment-block'>
            <div className='new-comment-block'>
                <form className='new-comment-form' onSubmit={handleSubmit}>
                    <input
                        className='create-comment-input'
                        placeholder="Leave a Comment:"
                        type='text'
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                    />
                    <button type='submit'>Post Comment</button>
                </form>
            </div>

            <header className='comment-block-h1-text'>Comments</header>
        </div>
    )
}

export default SinglePageCommentForm
