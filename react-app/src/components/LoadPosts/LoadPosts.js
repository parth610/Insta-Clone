import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom'
import { PostModal } from '../../context/PostModal';
import { getAllLikes, updateLike } from '../../store/likes';
import { allPosts, getPost } from '../../store/posts';
import SinglePageView from '../SinglePageView/SinglePageView';
import './LoadPosts.css'

const LoadPosts = () => {
    const likes = Object.values(useSelector(state => state.likes))
    const posts = Object.values(useSelector(state => state.posts))
    const [showPage, setShowPage] = useState(false)
    const [select, setSelect] = useState({})

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
    }

    // const savePostId = async (e) => {
    // e.preventDefault()
    // const postId = +e.currentTarget.id
    // // let post = await dispatch(getPost(postId))
    // return postId
    // }

    const newNum = (e) => {
        e.preventDefault()
        let post_id = +e.currentTarget.id
        const postSelect = posts.find(post => post.id === post_id)
        setSelect(postSelect)
        setShowPage(true)
    }

    const handleClose = () => {
        setShowPage(false)
    }

    return (
        <div className='loadPosts'>
            {showPage && <div className="test__conatainer"><SinglePageView select={select} /></div>}
            {
                posts.map(post => (
                    <div key={post.id} className="loadPost__postCard">
                        <div className="loadPost__imageContainer" id={post.id} onClick={newNum}>

                            <div className='loadPost_opaque_container' id={post.id}>
                                <div id={post.id}>
                                    <img className='loadPost__image' src={post.image_url} alt={post.caption} />
                                </div>
                                <div className="loadPost__captionBlock">
                                    <div className='caption_text'>{post.caption}</div>
                                </div>
                            </div>

                            <div className="loadPost__contents">
                                <div className="loadPost__lowerLikes">
                                    <button type='button' id={post.id} onClick={likeUpdate}
                                    style={{backgroundColor: 'transparent', outline: 'none', border: 'none'}}
                                    ><i id={post.id} className="fa-solid fa-heart fa-lg loadPost__heartCount" ></i></button>
                                    <div>{likesFilter(post.id)}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }

        </div >
    )
}

export default LoadPosts
