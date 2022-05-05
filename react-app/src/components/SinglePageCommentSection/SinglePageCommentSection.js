import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import SinglePageCommentForm from '../SinglePageComment/SinglePageCommentForm';
import { allPostComments } from '../../store/comments';
import '../SinglePageCommentSection/SinglePageCommentSection.css'
import userImg from '../../images/user.png'

const SinglePageCommentSection = ({ select, handleClose }) => {
    const dispatch = useDispatch()
    const comments = Object.values(useSelector(state => state.comments))

    useEffect(() => {
        dispatch(allPostComments(select?.id))
    }, [dispatch])

    return (
        <div>
            <div className='caption-contents'>{select?.caption}</div>
            <SinglePageCommentForm select={select} handleClose={handleClose} />

            <div className='all-comments-on-post'>
                {comments.map(comment => (
                    <div className='individual-comment-block'>
                        <div className='comment-user-info'>
                            <img className='comment-user-picture' src={comment.profile_pic ? comment.profile_pic : userImg} />
                            <div className='comment-username'>{comment.username}</div>
                        </div>
                        <div className='comment-contents'>
                            <div className='comment-text'>
                                {comment.content}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SinglePageCommentSection
