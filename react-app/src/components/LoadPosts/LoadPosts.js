import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { specificLikes } from '../../store/likes';
import './LoadPosts.css'

const LoadPosts = ({ posts }) => {
    const likes = Object.values(useSelector(state => state.likes))

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(specificLikes(1))
    }, [dispatch])

    // const postsLikesCount = async (post_id) => {
    //     const likes = await dispatch(specificLikes(post_id))
    //     return likes
    // }

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
                                <i className="fa-solid fa-heart fa-lg loadPost__heartCount" ></i>
                                <div>{likes.length}</div>
                            </div>
                        </div>
                    </div>


                </div>
            ))}

        </div>
    )
}

export default LoadPosts
