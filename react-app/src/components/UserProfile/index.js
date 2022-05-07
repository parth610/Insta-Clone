import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { loadfollowing } from "../../store/following";
import { followUnfollow, loadfollowers } from "../../store/follows";
import { loadUsersPosts } from "../../store/posts";
import { loadUserProfile } from "../../store/userProfile";
import './UserProfile.css'
import profileTemImage from '../../images/user.png'
import SinglePageView from "../SinglePageView/SinglePageView";

const UserProfileComponent = ({user}) => {
    const history = useHistory()
    const dispatch = useDispatch()
    const userProfile = Object.values(useSelector(state => state.UserProfileReducer))
    const userFollowers = Object.values(useSelector(state => state.followsReducer))
    const userFollowees = Object.values(useSelector(state => state.followingReducer))
    const userPosts = Object.values(useSelector(state => state.posts))
    userPosts.sort((a, b) => new Date(...b.created_at.split('/').reverse()) - new Date(...a.created_at.split('/').reverse()));

    const [showFollow, setShowFollow] = useState(false)
    const [unfollowButton, setUnfollowButton] = useState(false)
    const [showFollowersList, setShowFollowersList] = useState(false)
    const [showFollowingList, setShowFollowingList] = useState(false)
    const [showPage, setShowPage] = useState(false)
    const [select, setSelect] = useState({})
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
        const checkUser = userFollowers.find(getuser => user?.id === getuser?.follower_id)
        if (checkUser) {
            setUnfollowButton(true)
        }
    }, [userId, dispatch, userFollowers.length])


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
        if (unfollowButton === true) {
            setUnfollowButton(false)
        } else {
            setUnfollowButton(true)
        }
    }

    const redirectUser = (e) => {
        e.preventDefault()
        setShowFollowersList(false)
        setShowFollowingList(false)
        return history.push(`/users/${e.currentTarget.id}`)
    }

    const newNum = (e) => {
        e.preventDefault()
        let post_id = +e.currentTarget.id
        const postSelect = userPosts.find(post => post.id === post_id)
        setSelect(postSelect)
        setShowPage(true)
    }

    const handleClose = () => {
        setShowPage(false)
    }

    return (
        <div className="user-profile-container-parent">
            {showPage ? <div className="test__conatainer" onClick={handleClose} onClose={handleClose}><SinglePageView onClose={handleClose} select={select} setShowPage={setShowPage} /></div> : null}
        <div className="user-profile-container">
            <div className="user-profile-header">
                <div className="profile-pic-container">
                    <img src={userProfile[0]?.profile_pic === null ? `${profileTemImage}` : `${userProfile[0]?.profile_pic}`} />
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
                        <button id={userProfile[0]?.id} onClick={followHandler}>{unfollowButton ? 'Unfollow' : `Follow`}</button>
                    </div>
                    }
                    <div className="follows-info-container">
                        <div className="followers-list-container" onClick={() => setShowFollowersList(true)}>
                            {userFollowers.length} Followers
                        </div>
                        <div className="following-list-container" onClick={() => setShowFollowingList(true)}>
                            {userFollowees.length} Following
                        </div>
                    </div>
                </div>
            </div>
            <div className="user-profile-posts">
                    {
                        userPosts && userPosts.map(post => (
                            <div onClick={newNum} id={post.id} key={post.id} className="user-image-container">
                                <img className="user-img" src={post.image_url}/>
                            </div>
                        ))
                    }
            </div>
        </div>
        <div className="user-profile-footer">
        </div>
        {showFollowersList && <div className="followers-list-bg" onClick={(e) => setShowFollowersList(false)}>
            <div className="followers-list-show-container" onClick={(e) => e.stopPropagation()}> <p>Followers</p>
                {
                    userFollowers && userFollowers.map(follower => (
                        <div key={follower.id} className="follower-list-ele" id={follower.follower_id} onClick={redirectUser}>
                            <div className="follower-image-container">
                                <img className="follower-img-ele" src={follower.follower_profile_pic === null ? `${profileTemImage}` : `${follower.follower_profile_pic}` }></img>
                            </div>
                            <div className="follower-username">
                                <div> {follower.follower_username} </div>
                                <div className="follower-fullname"> {follower.follower_firstname} {follower.follower_lastname}</div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>}
        {showFollowingList && <div className="followers-list-bg" onClick={(e) => setShowFollowingList(false)}>
            <div className="followers-list-show-container" onClick={(e) => e.stopPropagation()}> <p>Following</p>
                {
                    userFollowees && userFollowees.map(followee => (
                        <div key={followee.id} className="follower-list-ele" id={followee.followee_id} onClick={redirectUser}>
                            <div className="follower-image-container">
                                <img className="follower-img-ele" src={followee.followee_profile_pic === null ? `${profileTemImage}` : `${followee.followee_profile_pic}`}></img>
                            </div>
                            <div className="follower-username">
                                <div> {followee.followee_username} </div>
                                <div className="follower-fullname"> {followee.followee_firstname} {followee.followee_lastname}</div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>}
        </div>
    )
}

export default UserProfileComponent
