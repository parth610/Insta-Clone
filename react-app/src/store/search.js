const SEARCH_RESULTS = 'search/SEARCH_RESULTS'
const EMPTY_RESULT = 'search/EMPTY_RESULT'

const searchResultActionCreator = (search, searchResult) => ({
    type: SEARCH_RESULTS,
    search,
    searchResult,
})

const clearSearchActionCreator = () => ({
    type: EMPTY_RESULT
})

export const searchResultThunk = (search_input) => async dispatch => {
    // console.log(search_input);
    // search query
    const response = await fetch('/api/search/users?search_input='+search_input)
    if (response.ok) {
        const search_result = await response.json()
        // console.log(search_result);
        dispatch(searchResultActionCreator(search_result, search_input))
        return search_result
    }
}


const searchReducer = (state = {}, action) => {
    let newState;
    switch (action.type) {
        case SEARCH_RESULTS: {
            newState = { ...state };
            let search_results = action.search.results
            // console.log(search_results,'???????????????????????');
            // console.log(action.search.results,'<<<<<<<<<<<<<<<<');
            // action.search.results.forEach(user => newState[search_results] = user)
            // console.log(action, '<<<<<<<<<<<<<<<<')
            newState['search_results'] = search_results
            return newState
            // return
            // console.log(search_results, '<<<<<<<<<<<<<<<<<<');
            // console.log(search_results, '&&&&&&&&&&&&&&&&&&&&&&&&&&&');
            // action.search.results.find(result => newState[search_results] = result)
            // newState['search_results'] = search_results;
            // console.log(action.search, 'this was the action for search', '!!!!!!!!!!!!!!!!!!!!!!!!')
            // console.log(newState, 'this is the newState for the search', '?????????????????????????');
            // return newState;
        }
        default:
            return state
    }
}

export default searchReducer
