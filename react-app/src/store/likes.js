const SPECIFIC_POST_LIKES = 'likes/SPECIFIC_POST_LIKES'

const findAllLikesForPost = (likes) => ({
    type: SPECIFIC_POST_LIKES,
    likes
})

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
        case SPECIFIC_POST_LIKES: {
            newState = { ...state }
            action.likes.map(like => {
                return newState[like.id] = like
            })
            return newState;
        }
        default:
            return state;
    }
}
