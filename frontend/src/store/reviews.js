import { csrfFetch } from './csrf';

const SET_REVIEWS = 'reviews/SET_REVIEWS'
const ADD_ONE = 'reviews/ADD_ONE'
const DELETE_ONE = 'reviews/DELETE_ONE'
const EDIT_ONE = 'reviews/EDIT_ONE'

const setReviews = (reviews) => {
    return {
        type: SET_REVIEWS,
        reviews
    }
}

const addOne = (review) => {
    return {
        type: ADD_ONE,
        review
    }
}

const deleteOne = (id) => {
    return {
        type: DELETE_ONE,
        id
    }
}

const editOne = (review) => {
    return {
        type: EDIT_ONE,
        review
    }
}

export const fetchReviews = () => async(dispatch) => {
    const res = await csrfFetch('/api/reviews')
    if(!res.ok) throw res;
    try{
        let reviews = await res.json()
        let objRev = {}
        reviews.forEach(review => objRev[review.id] = review)
        return dispatch(setReviews(objRev))

    }catch (err) {
        console.log(err)
    }

}

export const addReview = (review) => async(dispatch) => {
    const res = await csrfFetch("/api/reviews", {
        method: "POST",
        body: JSON.stringify(review)
    })

    if (!res.ok) throw res;

    try {
        let newReview = await res.json()
        return dispatch(addOne(newReview))
    } catch(err) {
        console.log(err)
    }
}

export const deleteReview = (id) => async(dispatch) => {
    const res = await csrfFetch("/api/reviews", {
        method: "DELETE",
        body: JSON.stringify({ id })
    })

    if (!res.ok) throw res;

    try{
       return dispatch(deleteOne(id))
    } catch(err) {
        console.log(err)
    }
}

export const editReview = (review) => async(dispatch) => {
    const res = await csrfFetch(`/api/reviews/${review.id}`, {
        method: "POST",
        body: JSON.stringify(review)
    })

    if(!res.ok) throw res
    try {
        let newReview =  await res.json()
        dispatch(editOne(newReview))
    } catch (err) {

    }
}


const reviewsReducer = (state = {}, action) => {
    let newState;
    switch(action.type) {
        case SET_REVIEWS:
            newState = {...state, ...action.reviews}
            return newState;
        case ADD_ONE:
            newState = {...state}
            newState[action.review.id] = action.review
            return newState
        case DELETE_ONE:
            newState = {...state}
            delete newState[action.id]
            return newState;
        case EDIT_ONE:
            newState = {...state};
            newState[action.review.id] = action.review;
            return newState
        default:
            return state
    }
}

export default reviewsReducer
