const GET_ALL_POST_COMMENTS = 'comments/GET_ALL_POST_COMMENTS'
const CREATE_COMMENT = 'comments/CREATE_COMMENT'
const EDIT_COMMENT = 'comments/EDIT_COMMENT'
const DELETE_COMMENT = 'comments/DELETE_COMMENT'


const getCommentsActionCreator = (comments) => ({
  type: GET_ALL_POST_COMMENTS,
  comments
})

const createCommentActionCreator = (comment) => ({
  type: CREATE_COMMENT,
  comment
})

const editCommentActionCreator = (comment) => ({
  type: EDIT_COMMENT,
  comment
})

const deleteCommentActionCreator = (comment) => ({
  type: DELETE_COMMENT,
  comment
})


export const allPostComments = (post_id) => async (dispatch) => {
  const res = await fetch(`/api/comments/posts/${post_id}`);

  if (res.ok) {
    const comments = await res.json()
    dispatch(getCommentsActionCreator(comments))
    return comments;
  }
}

export const createComment = (comment, post_id) => async (dispatch) => {
  const res = await fetch(`/api/comments/posts/${post_id}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(comment)
  })

  if (res.ok) {
    const newComment = await res.json()
    dispatch(createCommentActionCreator(newComment))
    return newComment
  }
}

export const editComment = (comment) => async (dispatch) => {
  const res = await fetch(`/api/comments/${comment.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(comment)
  })

  if (res.ok) {
    const comment = await res.json()
    dispatch(editComment(comment))
    return comment
  }
}

export const deleteComment = (comment_id) => async (dispatch) => {
  const res = await fetch(`/api/comments/${comment_id}`, {
    method: 'DELETE'
  })

  if (res.ok) {
    const comment = await res.json()
    dispatch(deleteComment(comment))
    return comment
  }
}



let initialState = {}

export default function commentReducer(state = initialState, action) {
  let newState;

  switch (action.type) {
    case GET_ALL_POST_COMMENTS: {
      newState = {}
      action.comments.map(comment => {
        return newState[comment.id] = comment;
      })
      return newState;
    }
    case CREATE_COMMENT: {
      newState = { ...state };
      newState[action.comment.id] = action.comment;
      return newState;
    }// these two are identical, could we reuse?
    case EDIT_COMMENT: {
      newState = { ...state };
      newState[action.comment.id] = action.comment;
      return newState;
    }
    case DELETE_COMMENT: {
      newState = { ...state };
      delete newState[action.comment.id];
      return newState;
    }
    default:
      return state;
  }
}
