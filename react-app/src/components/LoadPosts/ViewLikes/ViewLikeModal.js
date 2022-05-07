import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAllLikes } from '../../../store/likes';
import '../LoadPosts.css'
const ViewLikeModal = ({ post }) => {
    const { postId } = useParams()
    const dispatch = useDispatch()
    const userLikes = Object.values(useSelector(state => state.likes))


    const postLikes = userLikes.filter(like => like?.post_id === postId)


    useEffect(() => {
        dispatch(getAllLikes())
    }, [dispatch])
    return (
        <div className='view-likes-comp'>
            <div>likes</div>
            {postLikes?.map(likes => (
                <div>{likes?.user_fName} {likes?.user_lName}</div>
            ))}
        </div>
    )
}

export default ViewLikeModal
