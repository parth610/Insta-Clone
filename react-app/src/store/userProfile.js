const GET_USER_PROFILE = 'user/userprofile'


const getUserProfile = (user) => ({
    type: GET_USER_PROFILE,
    user
})

export const loadUserProfile = (userId) => async (dispatch) => {
    const response = await fetch(`/api/users/${userId}`)

    if (response.ok) {
        const data = await response.json();
        dispatch(getUserProfile(data))
    }
}

const initialState = {}

export default function UserProfileReducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER_PROFILE:

            const newState = {}
            newState[action.user.id] = action.user
            return newState

        default:
            return state;
    }

}
