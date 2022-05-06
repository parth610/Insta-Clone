import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom'
import { Modal } from '../../context/Modal';
import { PostModal } from '../../context/PostModal';
import { getAllLikes, updateLike } from '../../store/likes';
import { allPosts, getPost } from '../../store/posts';
import SinglePageView from '../SinglePageView/SinglePageView';
import './LoadPosts.css'
import ViewLikeModal from './ViewLikes/ViewLikeModal';

const LoadPosts = () => {
    const likes = Object.values(useSelector(state => state.likes))
    const posts = Object.values(useSelector(state => state.posts))
    const [showPage, setShowPage] = useState(false)
    const [showModal, setShowModal] = useState(false)
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

    const soloPostView = () => {
        setShowPage(true)
    }



    return (
        <div className='loadPosts'>
            {showPage ? <div className="test__conatainer" onClose={handleClose}><SinglePageView onClose={handleClose} select={select} setShowPage={setShowPage} /></div> : null}
            {
                posts.map(post => (
                    <div key={post.id} className="loadPost__postCard">
                        <div className="loadPost__imageContainer" id={post.id}>

                            <div className='loadPost_opaque_container' onClick={newNum} id={post.id}>
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
                                        style={{ backgroundColor: 'transparent', outline: 'none', border: 'none' }}
                                    ><i id={post.id} className="fa-solid fa-heart fa-lg loadPost__heartCount" ></i></button>
                                    <NavLink to={`/home/posts/likes/${post.id}`} style={{ textDecoration: 'none', color: 'black', cursor: 'pointer' }}>
                                        <div className='loadPost__likeCounter' onClick={() => setShowModal(true)}>{likesFilter(post.id)} likes</div>
                                    </NavLink>
                                </div>
                                {showModal && (
                                    <Route path='/home/posts/likes/:postId'>
                                        <Modal onClose={() => setShowModal(false)}>
                                            <ViewLikeModal/>
                                        </Modal>
                                    </Route>
                                )}
                            </div>
                        </div>
                    </div>
                ))
            }

        </div >
    )
}

export default LoadPosts
