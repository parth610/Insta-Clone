export const UPDATE_FOLLOW = 'follow/update'
const GET_FOLLOWERS = 'followers/get'


const updateFollow = (follow) => ({
    type: UPDATE_FOLLOW,
    follow
})

const getFollowers = (followers) => ({
    type: GET_FOLLOWERS,
    followers
})


export const followUnfollow = (followeeId) => async (dispatch) => {
    const response = await fetch(`/api/follow/${followeeId}`, {
        method: 'POST'
    })

    if (response.ok) {
        const data = await response.json();
        dispatch(updateFollow(data))
        return response
    }
}

export const loadfollowers = (userId) => async (dispatch) => {
    const response = await fetch(`/api/follow/followers/${userId}`)

    if (response.ok) {
        const data = await response.json();
        dispatch(getFollowers(data))
        return response
    }
}



const initialState = {}

export default function followsReducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_FOLLOW: {
            const newState = { ...state }
            if (newState[action.follow.id]) {
                delete newState[action.follow.id]
                return newState
            } else {
                newState[action.follow.id] = action.follow
                return newState;
            }
        }

        case GET_FOLLOWERS: {
            const newState = {}
            action.followers.map(follower => (
                newState[follower.id] = action.follower
            ))
            return newState
        }

        default:
            return state;


    }
}
