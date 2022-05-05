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
        console.log('--------',data,'----data------')
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



let initialState = {}
export default function followsReducer(state = initialState, action) {
    let newState;
    switch (action.type) {
        case UPDATE_FOLLOW: {
            newState = { ...state }
            console.log('--state--', state, '---')
            console.log('--newState----', newState, '-------')
            console.log('--newsfollow--', newState[action.follow.id], '----')
            console.log('--actfol------', action.follow, '---')
            if (newState[action.follow.id]) {
                delete newState[action.follow.id]
                return newState
            } else {
                newState[action.follow.id] = action.follow
                return newState;
            }
        }
        case GET_FOLLOWERS: {
            newState = {}
            action.followers.map(follower => (
                newState[follower.id] = action.follower
            ))
            return newState
        }

        default:
            return state;
    }
}
