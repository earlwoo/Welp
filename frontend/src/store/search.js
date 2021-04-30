
const SET_SEARCH = "search/SET_SEARCH"

export const setSearchTerm = (term) => {
    return {
        type: SET_SEARCH,
        term
    }
}

const searchReducer = (state = "", action) => {
    switch(action.type) {
        case SET_SEARCH:
            let newState = action.term
            return newState;
        default:
            return state
    }
}


export default searchReducer
