import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { loadUserProfile } from "../../store/userProfile";
import './UserProfile.css'

const UserProfileComponent = ({user}) => {

    const dispatch = useDispatch()
    const userProfile = Object.values(useSelector(state => state.UserProfileReducer))

    const [showFollow, setShowFollow] = useState(false)


    const {userId} = useParams()

    useEffect(() => {
        dispatch(loadUserProfile(userId))
    }, [dispatch])

    useEffect(() => {
        if (user.id == +userId) {
            setShowFollow(false)
        } else {
            setShowFollow(true)
        }
    })

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
                    <button>Follow</button>
                </div>
                }
            </div>
            <div className="user-profile-posts">
            </div>
        </div>
    )
}

export default UserProfileComponent
