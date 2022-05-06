import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom';
import { specificLikes } from '../../../store/likes';

const ViewLikeModal = ({ post }) => {
    const { postId } = useParams()
    const dispatch = useDispatch()
    const userLikes = Object.values(useSelector(state => state.likes))

    useEffect(() => {
        dispatch(specificLikes(+postId))
    }, [dispatch])
    return (
        <div>
            {userLikes?.map(likes => (
                <div>{likes?.user_fName} {likes?.user_lName}</div>
            ))}
        </div>
    )
}

export default ViewLikeModal
