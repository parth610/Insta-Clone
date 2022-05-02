const ALL_POSTS = 'posts/ALL_POSTS'
const CREATE_POST = 'posts/CREATE_POST';

const allPostsActionCreator = (posts) => ({
    type: ALL_POSTS,
    posts
})

const createPostActionCreator = (post) => ({
    type: CREATE_POST,
    post
})

export const createNewPost = (post) => async (dispatch) => {
    // console.log(post)
    const response = await fetch('/api/posts/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(post)
    })
    if (response.ok) {
        const newPost = await response.json()
        // console.log('this is the new post--------------------', newPost)
        dispatch(createPostActionCreator(newPost))
        return response;
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


let initialState = {}
export default function postReducer(state = initialState, action) {
    let newState
    switch (action.type) {
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
