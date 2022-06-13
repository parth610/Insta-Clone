import { CREATE_POST, EDIT_POST, DELETE_POST } from "./posts"

const GET_USERS_POST = 'posts/USERS'

const getUserPosts = (posts) => ({
    type: GET_USERS_POST,
    posts
})

export const loadUsersPosts = (userId) => async(dispatch) => {
    const response = await fetch(`/api/posts/user-profile-post/${userId}`)

    if (response.ok) {
        const allUserPost = await response.json()
        dispatch(getUserPosts(allUserPost))
        return allUserPost;
    }
}

let initialState = {}

export default function userPostReducer(state = initialState, action) {
    let newState;
    switch (action.type) {
        case GET_USERS_POST: {
            newState = {}
            action.posts.map(post => {
                return newState[post.id] = post
            })
            return newState;
        }

        case CREATE_POST: {
            newState = { ...state }
            newState[action.post.id] = action.post
            return newState;
        }// these two are identical, could we reuse?
        case EDIT_POST: {
            newState = { ...state }
            newState[action.post.id] = action.post
            return newState
        }
        case DELETE_POST: {
            newState = { ...state }
            delete newState[action.post.id]
            return newState;
        }

        default:
            return state;
    }
}
