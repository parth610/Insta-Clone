import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PostModal } from '../../context/PostModal';
import { getAllLikes, updateLike } from '../../store/likes';
import { allPosts, getPost } from '../../store/posts';
import SinglePageView from '../SinglePageView/SinglePageView';
import './LoadPosts.css'

const LoadPosts = () => {
    const likes = Object.values(useSelector(state => state.likes))
    const posts = Object.values(useSelector(state => state.posts))
    const [showModal, setShowModal] = useState(false)
    const [currPost, setCurrPost] = useState(0)

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
        await dispatch(updateLike(postId))
        // console.log(postId);
    }

    const savePostId = async (e) => {
        e.preventDefault()
        const postId = +e.currentTarget.id
        let post = await dispatch(getPost(postId))
        setCurrPost(post.id)
        // console.log(post, 'this is our post console.log');
        // console.log(postId, 'this is our postId');
        setShowModal(true)
    }

    return (
        <div className='loadPosts'>
            {posts.map(post => (
                <div key={post.id} className="loadPost__postCard">
                    <div className="loadPost__imageContainer">
                        <div className='loadPost_opaque_container' id={post.id}>
                            <button type='button' onClick={savePostId} id={post.id}>
                                <img className='loadPost__image' src={post.image_url} alt={post.caption} />
                                <div className="loadPost__captionBlock">
                                    <div className='caption_text'>{post.caption}</div>
                                </div>
                                {showModal && (
                                    <PostModal onClose={() => setShowModal(false)} >
                                        <SinglePageView currPost={currPost} />
                                    </PostModal>
                                )}
                            </button>
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
