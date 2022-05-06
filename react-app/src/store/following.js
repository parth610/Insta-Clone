import { UPDATE_FOLLOW } from "./follows"

const GET_FOLLOWING = 'following/get'

const getFollowing = (following) => ({
    type: GET_FOLLOWING,
    following
})

export const loadfollowing = (userId) => async (dispatch) => {
    const response = await fetch(`/api/follow/following/${userId}`)

    if (response.ok) {
        const data = await response.json();
        dispatch(getFollowing(data))
        return response
    }
}

const initialState = {}

export default function followingReducer(state = initialState, action) {
    switch (action.type) {
        // case UPDATE_FOLLOW: {
        //     const newState = { ...state }
        //     if (newState[action.follow.id]) {
        //         delete newState[action.follow.id]
        //         return newState
        //     } else {
        //         newState[action.follow.id] = action.follow
        //         return newState;
        //     }
        // }

        case GET_FOLLOWING: {
            const newState = {}
            action.following.map(followee => (
                newState[followee.id] = followee
            ))
            return newState
        }

        default:
            return state;
    }
}
