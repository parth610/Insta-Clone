const ALL_POSTS = 'posts/ALL_POSTS'
const GET_POST = 'posts/GET_POST'
const CREATE_POST = 'posts/CREATE_POST';

const getPostActionCreator = (post) => ({
    type: GET_POST,
    post
})

const allPostsActionCreator = (posts) => ({
    type: ALL_POSTS,
    posts
})

const createPostActionCreator = (post) => ({
    type: CREATE_POST,
    post
})

export const createNewPost = (post) => async (dispatch) => {
    const response = await fetch('/api/posts/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(post)
    })
    if (response.ok) {
        const newPost = await response.json()
        dispatch(createPostActionCreator(newPost))
        return newPost;
    }
}

export const allPosts = () => async (dispatch) => {
    const response = await fetch('/api/posts', {
        method: 'GET'
    })
    if (response.ok) {
        const posts = await response.json()
        dispatch(allPostsActionCreator(posts))
        return posts;
    }
}

export const getPost = (post_id) => async (dispatch) => {
    const response = await fetch(`/api/posts/${post_id}`)

    if (response.ok) {
        const post = await response.json()
        dispatch(getPostActionCreator(post))
        return post
    }
}


let initialState = {}
export default function postReducer(state = initialState, action) {
    let newState
    switch (action.type) {
        case GET_POST: {
            newState = { }
            newState[action.post.id] = action.post
            return newState
        }
        case ALL_POSTS: {
            newState = { ...state }
            action.posts.map(post => {
                return newState[post.id] = post
            })
            return newState;
        }
        case CREATE_POST: {
            newState = { ...state }
            newState[action.post.id] = action.post
            return newState
        }
        default:
            return state;
    }
}
