const SPECIFIC_POST_LIKES = 'likes/SPECIFIC_POST_LIKES'
const ALL_LIKES = 'likes/ALL_LIKES'
const UPDATE_LIKE = 'likes/UPDATE_LIKE'

const findAllLikesForPost = (likes) => ({
    type: SPECIFIC_POST_LIKES,
    likes
})

const allPostsLikes = (likes) => ({
    type: ALL_LIKES,
    likes
})

const updatedLike = (data) => ({
    type: UPDATE_LIKE,
    data
})

export const updateLike = (id) => async (dispatch) => {
    const response = await fetch(`/api/likes/posts/${id}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    })

    if (response.ok) {
        const data = await response.json();
        dispatch(updatedLike(data))
        return response
    }
}


export const getAllLikes = () => async (dispatch) => {
    const response = await fetch('/api/likes/all')

    if (response.ok) {
        const likes = await response.json();
        dispatch(allPostsLikes(likes))
        return response;
    }
}

export const specificLikes = (post_id) => async (dispatch) => {
    const response = await fetch(`/api/likes/posts/${post_id}`)

    if (response.ok) {
        const likes = await response.json();
        dispatch(findAllLikesForPost(likes))
        return response;
    }
}


let initialState = {}
export default function likeReducer(state = initialState, action) {
    let newState;
    switch (action.type) {
        case UPDATE_LIKE: {
            newState = { ...state }
            if (newState[action.data.id]) {
                delete newState[action.data.id]
                return newState
            } else {
                newState[action.data.id] = action.data
                return newState;
            }
        }
        case ALL_LIKES: {
            newState = { ...state }
            action.likes.map(like => {
                return newState[like.id] = like
            })
            return newState;
        }
        case SPECIFIC_POST_LIKES: {
            newState = {}
            action.likes.map(like => {
                return newState[like.id] = like
            })
            return newState;
        }
        default:
            return state;
    }
}
