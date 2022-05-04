import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { loadfollowing } from "../../store/following";
import { followUnfollow, loadfollowers } from "../../store/follows";
import { loadUserProfile } from "../../store/userProfile";
import './UserProfile.css'

const UserProfileComponent = ({user}) => {

    const dispatch = useDispatch()
    const userProfile = Object.values(useSelector(state => state.UserProfileReducer))
    const userFollowers = Object.values(useSelector(state => state.followsReducer))
    const userFollowees = Object.values(useSelector(state => state.followingReducer))

    console.log(userFollowees, 'followeeee')
    console.log(userFollowers, 'folloerrrrrs')

    const [showFollow, setShowFollow] = useState(false)
    const {userId} = useParams()

    useEffect(() => {
        dispatch(loadfollowers(userId))
    }, [userId, dispatch])

    useEffect(() => {
        dispatch(loadfollowing(userId))
    }, [userId, dispatch])

    useEffect(() => {
        dispatch(loadUserProfile(userId))
    }, [dispatch, userId])

    useEffect(() => {
        if (user.id === +userId) {
            setShowFollow(false)
        } else {
            setShowFollow(true)
        }
    }, [userId])

    const followHandler = async (e) => {
        e.preventDefault();
        const followeeId = +e.currentTarget.id;
        console.log(followeeId)
        await dispatch(followUnfollow(followeeId))
    }

    return (
        <div className="user-profile-container">
            <div className="user-profile-header">
                <div className="profile-pic-container">
                    <img src={userProfile[0]?.profile_pic} />
                </div>
                <div className="username">
                    {userProfile[0]?.username}
                </div>
                <div className="username">
                    {userProfile[0]?.first_name} {userProfile[0]?.last_name}
                </div>
                { showFollow &&
                <div className="follow-button-container">
                    <button id={userProfile[0]?.id} onClick={followHandler}>Follow</button>
                </div>
                }
                <div className="followers-list-container">
                    {userFollowers.length}
                </div>
                <div className="following-list-container">
                    {userFollowees.length}
                </div>
            </div>
            <div className="user-profile-posts">
            </div>
        </div>
    )
}

export default UserProfileComponent
