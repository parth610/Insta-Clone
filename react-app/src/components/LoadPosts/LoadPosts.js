import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllLikes, updateLike } from '../../store/likes';
import { allPosts } from '../../store/posts';
import './LoadPosts.css'

const LoadPosts = () => {
    const likes = Object.values(useSelector(state => state.likes))
    const posts = Object.values(useSelector(state => state.posts))

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllLikes())
    }, [dispatch])

    useEffect(() => {
        dispatch(allPosts())
    }, [dispatch])


    const likesFilter = (post_id) => {
        let postLikes = likes.filter(like => like.post_id === post_id)
        return postLikes.length
    }

    const likeUpdate = async (e) => {
        e.preventDefault()
        const postId = +e.target.id
        console.log('-----------------------', postId)
        await dispatch(updateLike(postId))
    }

    return (
        <div className='loadPosts'>
            {posts.map(post => (
                <div key={post.id} className="loadPost__postCard">
                    <div className="loadPost__imageContainer">
                        <div className='loadPost_opaque_container'>
                            <img className='loadPost__image' src={post.image_url} alt={post.caption} />
                            <div className="loadPost__captionBlock">

                                <div className='caption_text'>{post.caption}</div>
                            </div>
                        </div>
                        <div className="loadPost__contents">
                            <div className="loadPost__lowerLikes">
                                <button type='button' id={post.id} onClick={likeUpdate}><i id={post.id} className="fa-solid fa-heart fa-lg loadPost__heartCount" ></i></button>
                                <div>{likesFilter(post.id)}</div>
                            </div>
                        </div>
                    </div>


                </div>
            ))}

        </div>
    )
}

export default LoadPosts
