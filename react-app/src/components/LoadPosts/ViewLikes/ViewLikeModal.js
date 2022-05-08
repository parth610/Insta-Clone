import React, { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { getAllLikes } from '../../../store/likes';
import '../LoadPosts.css'
const ViewLikeModal = ({ post_id }) => {
    const dispatch = useDispatch()
    const userLikes = Object.values(useSelector(state => state.likes))
    const postLikes = userLikes.filter(like => like?.post_id === post_id)
    const [showModal, setShowModal] = useState(false)
    const history = useHistory()

    console.log(postLikes)

    const redirectUser = (e) => {
        e.preventDefault()
        setShowModal(false)
        setShowModal(false)
        return history.push(`/users/${e.currentTarget.id}`)
    }


    useEffect(() => {
        dispatch(getAllLikes())
    }, [dispatch])
    return (
        <div className="followers-list-bg " onClick={() => setShowModal(false)}>
            <div className="followers-list-show-container" onClick={(e) => e.stopPropagation()}> <p>Likes</p>
                {postLikes && postLikes.map(like => (
                    <div key={like.id} className="follower-list-ele" id={like.id} onClick={redirectUser}>
                        <div className="follower-image-container">
                            <img className="follower-img-ele" ></img>
                        </div>
                        <div className="follower-username">
                            <div style={{ color: 'black' }}></div>
                            <div className="follower-fullname">{like?.user_fName} {like?.user_lName}</div>
                        </div>
                    </div>
                )
                )}
            </div>
        </div>
    )
}

export default ViewLikeModal
