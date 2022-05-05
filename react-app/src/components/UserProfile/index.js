import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { loadfollowing } from "../../store/following";
import { followUnfollow, loadfollowers } from "../../store/follows";
import { loadUsersPosts } from "../../store/posts";
import { loadUserProfile } from "../../store/userProfile";
import './UserProfile.css'

const UserProfileComponent = ({user}) => {

    const dispatch = useDispatch()
    const userProfile = Object.values(useSelector(state => state.UserProfileReducer))
    const userFollowers = Object.values(useSelector(state => state.followsReducer))
    const userFollowees = Object.values(useSelector(state => state.followingReducer))
    const userPosts = Object.values(useSelector(state => state.posts))

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
        dispatch(loadUsersPosts(userId))
    }, [userId, dispatch])

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
        await dispatch(followUnfollow(followeeId))
    }

    return (
        <div className="user-profile-container-parent">
        <div className="user-profile-container">
            <div className="user-profile-header">
                <div className="profile-pic-container">
                    <img src={userProfile[0]?.profile_pic} />
                </div>
                <div className="header-info">
                    <div className="username-cont">
                        {userProfile[0]?.username}
                    </div>
                    <div className="name-cont">
                        {userProfile[0]?.first_name} {userProfile[0]?.last_name}
                    </div>
                    { showFollow &&
                    <div className="follow-button-container">
                        <button id={userProfile[0]?.id} onClick={followHandler}>Follow</button>
                    </div>
                    }
                    <div className="follows-info-container">
                        <div className="followers-list-container">
                            {userFollowers.length} Followers
                        </div>
                        <div className="following-list-container">
                            {userFollowees.length} Following
                        </div>
                    </div>
                </div>
            </div>
            <div className="user-profile-posts">
                    {
                        userPosts && userPosts.map(post => (
                            <div key={post.id} className="user-image-container">
                                <img className="user-img" src={post.image_url}/>
                            </div>
                        ))
                    }
            </div>
        </div>
        </div>
    )
}

export default UserProfileComponent
