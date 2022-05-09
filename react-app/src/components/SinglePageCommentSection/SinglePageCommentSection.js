import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import SinglePageCommentForm from '../SinglePageComment/SinglePageCommentForm';
import { allPostComments, deleteComment, editOneComment } from '../../store/comments';
import '../SinglePageCommentSection/SinglePageCommentSection.css'
import userImg from '../../images/user.png'
import { allPosts } from '../../store/posts';

const SinglePageCommentSection = ({ select, handleClose, currCaption }) => {
    const dispatch = useDispatch()
    const [showDeleteModal, setShowDeleteModal] = useState(false)
    const [editComment, setEditComment] = useState('')
    const comments = Object.values(useSelector(state => state.comments))
    const sessionUser = useSelector(state => state.session.user)
    const posts = Object.values(useSelector(state => state.posts))
    const post = posts.find(post => post.id === select.id)

    const handleDeleteModalOpen = (e) => {
        const commentId = +e.currentTarget.id

        const commentDeleteButtons = document.getElementById(`deleteCommentFunc-${commentId}`)

        commentDeleteButtons.style.display = 'flex'
    }

    const handleDeleteModalclose = (e) => {
        const commentId = +e.currentTarget.id
        const commentEditForm = document.getElementById(`deleteCommentFunc-${commentId}`)
        commentEditForm.style.display = 'none'
    }

    const handleEditModalOpen = (e) => {
        const commentId = +e.currentTarget.id
        const comment = comments.find(comment => comment.id === commentId)
        setEditComment(comment.content)
        const commentEditForm = document.getElementById(`commentForm-${commentId}`)
        commentEditForm.style.display = 'flex'
    }

    const handleEditModalClose = (e) => {
        const commentId = +e.currentTarget.id
        const commentEditForm = document.getElementById(`commentForm-${commentId}`)
        setEditComment('')
        commentEditForm.style.display = 'none'
    }

    const handleDelete = async (e) => {
        const commentId = +e.currentTarget.id
        await dispatch(deleteComment(commentId))
        // const commentEditForm = document.getElementById(`deleteCommentFunc-${commentId}`)
        // commentEditForm?.style.display = 'none'
    }

    const handleEditComment = async (e) => {
        const commentId = +e.currentTarget.id
        const comment = { id: commentId, content: editComment }
        if (editComment.length > 0) {
            await dispatch(editOneComment(comment))
            const commentEditForm = document.getElementById(`commentForm-${commentId}`)
            setEditComment('')
            commentEditForm.style.display = 'none'
        } else {
            alert('comment must not be empty')
        }
    }

    useEffect(() => {
        dispatch(allPostComments(select?.id))
    }, [dispatch])

    useEffect(() => {
        dispatch(allPosts())
    }, [dispatch, currCaption])

    return (
        <div>
            <div className='caption-contents'>{post?.caption}</div>
            <SinglePageCommentForm select={select} handleClose={handleClose} />

            <div className='all-comments-on-post'>
                {comments.map(comment => (
                    <div key={comment.id} className='individual-comment-block'>
                        <div className='comment-user-info'>
                            <img className='comment-user-picture' src={comment.profile_pic ? comment.profile_pic : userImg} />
                            <div className='comment-username'>{comment.username}</div>
                        </div>
                        <div className='comment-contents'>
                            <div style={{ display: "none" }} className='editComment__form' id={`commentForm-${comment.id}`}>
                                <label htmlFor='editComment__editCaption'>
                                    <input
                                        className='editComment__captionInput'
                                        // placeholder={`Update Caption: ${currCaption}`}
                                        value={editComment}
                                        onChange={(e) => setEditComment(e.target.value)}
                                        type='text'
                                    />
                                </label>
                                <button className='edit-del-buttons' id={comment.id} type='button' onClick={handleEditComment}>Update</button>
                                <button className='edit-del-buttons' id={comment.id} type='button' onClick={handleEditModalClose} >Cancel</button>
                            </div>

                            <div className='comment-text'>
                                {comment.content}
                            </div>
                            {sessionUser.id === comment.user_id &&
                                <div className='comment-button-block'>
                                    <i id={comment.id} className="fa-solid fa-pen-to-square editCommnet__edit" onClick={handleEditModalOpen}></i>
                                    <i id={comment.id} className="fa-solid fa-trash editComment__delete" onClick={handleDeleteModalOpen}></i>

                                    <div id={`deleteCommentFunc-${comment.id}`} style={{ display: "none" }} >
                                        <button className='edit-del-buttons' id={comment.id} type='button' onClick={handleDelete}>Delete</button>
                                        <button className='edit-del-buttons' id={comment.id} type='button' onClick={handleDeleteModalclose}>Cancel</button>
                                    </div>

                                </div>

                            }
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SinglePageCommentSection
